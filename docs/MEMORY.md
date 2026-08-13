# MEMORY — Build Log

Filled in as the build progresses. One entry per decision or deviation from the
plan in PRD/DESIGN/ARCHITECTURE/PHASES.

Format:
```
## YYYY-MM-DD — <short title>
Decision:
Reason:
Affects: <file(s) this changes, e.g. ARCHITECTURE.md data model>
```

## Catalog UX — store-style, not PDF-only
Decision: Product catalog is a browsable grid + detail pages, each with a
"Request Quote" action. A lightweight enquiry list (client-side, no auth cart)
lets users select multiple products and submit one combined RFQ. No payment/
checkout. Category-level downloadable PDF spec sheets added later as a
nice-to-have, not blocking v1.
Reason: No online purchase, so a checkout is out of scope — but a plain PDF-only
catalog is worse for mobile, SEO, and showcasing certs/photos than a real
browsable catalog. Store-style browsing + RFQ mirrors GeM's own cart→RFQ flow,
which the team is already familiar with.
Affects: ARCHITECTURE.md — `enquiries.items` (jsonb array) instead of a single
`product_id`; `categories.catalog_pdf_url` added.

## Design process — Figma direct, no Stitch, no separate wireframe/flow stage
Decision: Design phase is now Phase 1 (was implicit in Phase 0). Only 2 screens
are mocked in Figma (Homepage, Product Detail) using the shadcn/ui kit + DESIGN.md
tokens — not every page. No Stitch, no Excalidraw wireframe stage, no Whimsical
flow-mapping stage, no Figma interactive prototype.
Reason: Stitch's Figma export is flattened/non-auto-layout and costs more
cleanup than it saves; visual direction is already locked in DESIGN.md so
there's no need to explore divergent directions. The site's user flow (browse →
view → enquire) is too simple to need dedicated flow-mapping. The Next.js dev
server serves as the interactive prototype once Phase 2 starts.
Affects: PHASES.md — renumbered; old Phase 1 (shared shell) is now Phase 2, and
everything after shifts by one.

## Full stack expansion — admin, AI chat, security, testing, ops
Decision: Expanded the stack significantly beyond the original MVP sketch —
added TanStack Query/Table (admin), Zustand (enquiry cart), a full RAG-based
AI support chat (Groq + OpenAI embeddings + Supabase pgvector + Vercel AI
SDK), Upstash Redis (rate limiting + chat caching), Pino, Sentry, Resend,
Vitest + Playwright + GitHub Actions CI, Postgres full-text search, and one
scoped Supabase Realtime feature (live enquiry notifications in admin).
Rejected: FastAPI (no functional need, adds a second backend to deploy/
secure), Clerk (Supabase Auth + RLS already covers the single-admin-user
case), Ant Design (clashes with the shadcn/Tailwind system already chosen),
Helmet (Express-only, replaced by next.config.js headers()), Supertest
(doesn't fit Next.js Route Handlers — Playwright covers this instead),
Algolia/Meilisearch and LangChain (both solving problems this project's scale
doesn't have yet), Google Analytics (kept Vercel Analytics + optional
PostHog instead), Swagger/OpenAPI (internal-only API surface, a markdown doc
+ Postman collection is enough).
Reason: each addition was evaluated on whether it solves a real problem at
this project's actual scale, not just "is it professional/well-known" — a
few of the original asks (FastAPI, Clerk, Ant Design, Helmet, Supertest,
Swagger) were reasonable tools in general but didn't fit this specific stack
or this project's size.
Affects: ARCHITECTURE.md (full rewrite), PHASES.md (Phase 8 — AI Support
Chat added, Phase 9 — Polish & QA expanded with CI/testing/security detail).
