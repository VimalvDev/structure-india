# PHASES — Build Order

Each phase = one or more Antigravity prompts, reviewed before moving to the next.

## Phase 0 — Setup [done]

- Next.js + TypeScript + Tailwind scaffold (done manually by you, not AI).
- Install: shadcn/ui, @tanstack/react-query, @tanstack/react-table, zustand,
  react-hook-form, zod, lucide-react, date-fns, sonner, ai (Vercel AI SDK),
  @supabase/supabase-js, @supabase/ssr, @upstash/redis, @upstash/ratelimit,
  resend, pino, @sentry/nextjs.
- Dev/test deps: vitest, @testing-library/react, @playwright/test.
- Supabase project created, tables from ARCHITECTURE.md migrated (incl.
  pgvector extension enabled for `kb_chunks`).
- Design tokens wired into `tailwind.config`.
- Security headers configured in `next.config.js`.
- GitHub repo + Actions workflow (lint + vitest + playwright on PR).
- Git set up (you're doing this step yourself).

## Phase 1 — Design

- Figma, shadcn/ui kit + DESIGN.md tokens. Homepage + one Product Detail
  page only — the rest of the site reuses the same component system.
- No Stitch, no separate wireframe/flow-mapping stage, no Figma interactive
  prototype.

## Phase 2 — Shared shell

- Header (mega-menu, mobile drawer), Footer, base layout.
- Core UI primitives: Button, Card, Badge, Container.

## Phase 3 — Static pages

- Home (hero, category grid, cert trust-strip, featured projects, CTA).
- About Us.
- Contact page + working enquiry form (zod validation → rate limit →
  `enquiries` table → Resend notification).

## Phase 4 — Product catalog (data-driven)

- Category hub (`/products`), category listing, product detail pages.
- "Request Quote" + Zustand-backed enquiry list (multi-item RFQ).
- Postgres full-text search wired to a search bar.
- Seed data: migrate every product from the old site PDF.

## Phase 5 — Certifications

- `/certifications` — ISO, MSME/UDYAM, NSIC, GST cards, view/download.
- Seed with actual certificate files + numbers.

## Phase 6 — Projects / tender portfolio

- `/projects` listing + individual project pages.
- Seed with known past work as you provide details.

## Phase 7 — Admin panel

- `/admin` login (Supabase Auth), gated by session check.
- TanStack Table + Query CRUD: Products, Categories, Certificates, Projects.
- Enquiries view (read/export), with a live "new enquiry" toast via Supabase
  Realtime.
- Image upload to Supabase Storage from the admin UI.

## Phase 8 — AI Support Chat (RAG)

- Chunk + embed catalog/about/certificate content into `kb_chunks`
  (OpenAI embeddings), triggered from admin on publish/update.
- Chat widget (Vercel AI SDK) — embed query, pgvector similarity search,
  Groq streamed response using retrieved context.
- Rate limited via Upstash; wrapped in its own error boundary.

## Phase 9 — Polish & QA

- Full mobile pass on every page.
- SEO basics: metadata, sitemap.xml, robots.txt, OG images.
- Vitest/Playwright test coverage for core flows (enquiry form, catalog
  browse, chat).
- OWASP Top 10 manual review + Dependabot/`npm audit` check.
- Manual cross-browser/device pass (Playwright already covers automated
  Chromium/Firefox/WebKit regression).
- Analytics wired (Vercel Analytics, PostHog if wanted).

## Phase 10 — Deploy

- Production deploy on Vercel, domain pointed, Supabase production env
  confirmed, Upstash/Resend/Sentry keys set, final content review.
