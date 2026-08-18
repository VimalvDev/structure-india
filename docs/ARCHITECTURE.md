# ARCHITECTURE — Structure India / Ash

## Frontend
- Next.js (App Router) + TypeScript (strict mode) + Tailwind CSS
- shadcn/ui — component primitives across public site and admin
- Icons: lucide-react
- Dates/times: date-fns
- Notifications/toasts: sonner
- Error boundaries: Next's built-in `error.tsx` per route segment, plus one
  custom `<ErrorBoundary>` wrapped specifically around the AI chat widget so a
  failure there can't take down the page.

## State & data fetching
- **Public pages**: Server Components fetching directly from Supabase.
  No client-side data library needed here.
- **Admin dashboard**: TanStack Query for fetching/caching/mutations against
  Supabase, TanStack Table for Products / Certificates / Projects /
  Enquiries data tables (paired with shadcn's data-table pattern).
- **Enquiry / RFQ cart**: Zustand, persisted to localStorage. Scoped to this
  one feature — not used app-wide.
- Forms: react-hook-form + zod (shared schemas between client validation and
  server-side re-validation on the same input).
- API calls: native `fetch` (Next.js's extended fetch handles caching/
  revalidation) — no axios.

## Backend / CMS — deferred to a later phase (see PHASES.md "Later / Backlog")
V1 ships with **static TypeScript data** (`lib/data/products.ts`) instead of
a database — no Supabase, no admin panel yet. Building CRUD/admin before the
site has any live content was solving a problem that doesn't exist yet.
`seed_products.sql` (already written) stays as the migration script for
whenever the DB + admin panel phase actually happens — same data, same
shape, just not wired up now.

When that phase does happen:
- **Supabase** (Postgres + Storage + Auth).
- **Auth**: Supabase Auth, email/password, restricted to admin accounts.
  `/admin/*` gated by server-side session check. RLS policies restrict writes
  to authenticated users.
- Runtime: Node.js via Next.js Route Handlers / Server Actions.

## Data model

**categories**
| field | type |
|---|---|
| id | uuid |
| slug | text |
| name | text |
| description | text |
| icon | text |
| catalog_pdf_url | text, nullable |
| sort_order | int |

**products**
| field | type |
|---|---|
| id | uuid |
| category_id | fk → categories |
| name, slug | text |
| short_description | text |
| specs | jsonb |
| images | text[] |
| brand | text (default `Ash`) |
| is_active | boolean |
| sort_order | int |

**certificates**
| field | type |
|---|---|
| id | uuid |
| type | text (`ISO 9001:2015`, `MSME/UDYAM`, `NSIC`, `GST`, …) |
| number | text |
| issued_date | date |
| expiry_date | date, nullable |
| file_url | text |

**projects**
| field | type |
|---|---|
| id | uuid |
| title, client | text |
| category_id | fk → categories, nullable |
| year | int |
| description | text |
| images | text[] |
| is_featured | boolean |

**enquiries**
| field | type |
|---|---|
| id | uuid |
| name, phone, email | text |
| message | text |
| items | jsonb — array of `{product_id, product_name}` |
| created_at | timestamp |

**kb_chunks** *(for the AI support chat — RAG)*
| field | type |
|---|---|
| id | uuid |
| source_type | text (`product` / `certificate` / `about` / `project`) |
| source_id | uuid, nullable |
| content | text |
| embedding | vector(1536) — pgvector extension |
| created_at | timestamp |

**chat_messages** *(optional, for reviewing/improving the chatbot later)*
| field | type |
|---|---|
| id | uuid |
| session_id | text |
| role | text (`user` / `assistant`) |
| content | text |
| created_at | timestamp |

## AI Support Chat (RAG)
- **Generation**: Groq (same provider already used in TenderIQ).
- **Embeddings**: OpenAI `text-embedding-3-small` — cheap, 1536-dim, minimal
  cost for a KB this size (catalog + about-company content only).
- **Retrieval**: Supabase pgvector — chunk catalog/about/cert content once
  (on publish, via the admin panel), embed, store in `kb_chunks`. On a user
  question: embed the query → cosine similarity search via a Supabase RPC →
  top-k chunks passed as context to Groq.
- **No LangChain/LlamaIndex** — the retrieval logic is a single similarity
  query plus a prompt template; a framework adds abstraction this doesn't need.
- **Streaming**: Vercel AI SDK (`ai` package) — handles the streaming chat UI
  and has native Groq support, avoids hand-parsing SSE.
- **Rate limited** (see Security) since each message costs an LLM call.

## Search
Postgres full-text search (Supabase's built-in `tsvector`/`tsquery`) for
catalog search. No Algolia/Meilisearch — catalog size (dozens–hundreds of
items) doesn't justify a dedicated search service.

## Real-time
One feature only: **Supabase Realtime** subscription in the admin dashboard
for a live "new enquiry" toast/badge when a form is submitted. Nothing else
in the site needs real-time.

## Caching
- **Next.js** built-in caching (`fetch` cache, ISR) handles public-page
  performance — no extra tooling needed there.
- **Upstash Redis** (HTTP-based, serverless-friendly — not traditional Redis,
  which needs persistent connections that don't fit serverless functions)
  scoped to two jobs:
  1. Rate limiting (`@upstash/ratelimit`) on the contact form and chat endpoint.
  2. Caching chat responses/embeddings for repeated questions, to cut Groq/
     OpenAI API calls.

## Security
- Security headers (CSP, X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, HSTS) via `next.config.js` `headers()` — this is the
  Next.js equivalent of Helmet (which is Express-specific and doesn't apply
  to a Next.js app).
- CORS: not configured for v1 — same-origin app, nothing external calls the API.
- Rate limiting: `@upstash/ratelimit` + Upstash Redis on form/chat endpoints.
- Input validation: zod on every form and API route input.
- Sanitization: React's default output escaping covers standard cases;
  `isomorphic-dompurify` only if user text is ever rendered as HTML (not
  currently planned).
- Dependency scanning: GitHub Dependabot + `npm audit` in CI.
- OWASP Top 10: used as a review checklist during Phase 9 QA, not a package —
  optional OWASP ZAP scan before launch.

## Testing
- **Vitest** + React Testing Library — unit and component tests.
- **Playwright** — E2E tests, and covers cross-browser regression
  (Chromium/Firefox/WebKit) without needing BrowserStack for automated runs.
  BrowserStack (or just borrowed devices) reserved for a manual real-device
  pass before launch.
- **Postman** — manual API testing collection for the handful of Route
  Handlers (contact form, chat, search); this collection doubles as informal
  API documentation, alongside a short `docs/API.md`.
- **CI**: GitHub Actions running lint + Vitest + Playwright on every PR.

## Observability
- **Sentry** — error tracking, frontend + server.
- **Pino** — structured JSON logging (better fit than Winston for a
  serverless/Vercel environment — no file transports needed).
- **Vercel Analytics** — zero-config traffic/Core Web Vitals, already
  included with hosting.
- **PostHog** — optional, add later if deeper funnel/session-replay analytics
  are wanted. Skipping Google Analytics (heavier, cookie-consent overhead,
  less relevant here).

## Email
**Resend** — contact/enquiry form notifications. Free tier: 3,000 emails/
month, capped at 100/day — comfortably covers a corporate contact form.

## Storage
Supabase Storage — buckets: `product-images`, `certificates`,
`project-images`.

## Hosting
Next.js app on Vercel. Supabase cloud for DB/auth/storage. Upstash for Redis.

## Project management
Linear for bug/task tracking (lighter than Jira, fits a solo/small team).

## Data flow — V1 (current, static data, no DB)
1. Public pages are server-rendered, reading from `lib/data/products.ts`
   directly — no database, no client-side fetching library involved.
2. Contact/enquiry form: client component → server action → zod validation →
   send directly via Resend. No DB insert, no rate limiting yet (both are
   cheap to add once there's a database worth protecting — see "Later" below).
3. Catalog: browsable grid + product detail pages, each with "Request Quote."
   Zustand-held enquiry list (persisted to localStorage) lets a user select
   multiple products, submitted as one email via the same server action.

## Data flow — Later (once the DB/admin phase happens)
1. Public pages switch to server-rendering from Supabase instead of the
   static file — same shape, `seed_products.sql` migrates the data.
2. Admin (`/admin`) becomes a client-authenticated app section using
   TanStack Query + TanStack Table against Supabase, gated by Supabase Auth + RLS.
3. Contact/enquiry form gains a rate-limit check (Upstash) and an
   `enquiries` table insert alongside the Resend email.
4. AI chat: user message → rate-limit check → embed query (OpenAI) →
   similarity search `kb_chunks` (pgvector) → Groq generates a streamed
   response (Vercel AI SDK) using retrieved context → optionally logged to
   `chat_messages`.
5. New enquiry → Supabase Realtime pushes a live notification to any open
   admin dashboard session.

## Why not a headless CMS
Sanity/Strapi/Contentful would add a second service, a second auth system,
and a learning curve for a catalog that's really just a handful of tables.
Supabase covers DB + auth + storage + realtime + vector search in one place.

## Why not FastAPI
Nothing in this project needs Python's ML ecosystem — the RAG pipeline is
HTTP calls to embedding/LLM APIs plus a Postgres similarity query, all
straightforward in TypeScript via Next.js Route Handlers. A second backend
means a second deployment target, a second auth boundary, and CORS to manage,
for no functional gain at this scope.