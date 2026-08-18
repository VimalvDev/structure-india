# PHASES — Build Order

Each phase = one or more Antigravity prompts, reviewed before moving to the next.

## Phase 0 — Setup
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
  prototype (see MEMORY.md for reasoning).

## Phase 2 — Shared shell
- Header (mega-menu, mobile drawer), Footer, base layout.
- Core UI primitives: Button, Card, Badge, Container.

## Phase 3 — Static pages
- Home (hero, category grid, cert trust-strip, featured projects, CTA).
- About Us.
- Contact page + working enquiry form (zod validation → rate limit →
  `enquiries` table → Resend notification).

## Phase 4 — Product catalog (v1: static data, no DB)
- Category hub (`/products`), category listing, product detail pages.
- Data source: `lib/data/products.ts` (static TS, already migrated from the
  old site — see file for content). No Supabase query here yet.
- "Request Quote" + Zustand-backed enquiry list (multi-item RFQ) — this part
  still works fine with static product data.
- Skip full-text search for now (Postgres FTS needs the DB); a simple
  client-side filter over the static array is enough at this size.

## Phase 5 — Certifications
- `/certifications` — ISO, MSME/UDYAM, NSIC, GST cards, view/download.
- Static data for now too, same reasoning as Phase 4.

## Phase 6 — Projects / tender portfolio
- `/projects` listing + individual project pages.
- Static data, seeded as details are provided.

---

## Later / Backlog — not part of the near-term build
Deferred until the site is live with static content and an admin panel is
actually needed:

- **Supabase migration** — move `lib/data/products.ts` (and certificates/
  projects once built) into the `categories`/`products`/`certificates`/
  `projects` tables. `seed_products.sql` already exists in the right shape
  for this — it's not wasted work, just not needed yet.
- **Admin panel (`/admin`)** — Supabase Auth login, TanStack Table + Query
  CRUD, image upload, live enquiry notifications via Supabase Realtime.
- **AI Support Chat (RAG)** — depends on the DB (pgvector) being in place,
  so naturally follows the Supabase migration.
- **Full-text search** — trivial once the DB exists.

## Phase 7 — Polish & QA
- Full mobile pass on every page.
- SEO basics: metadata, sitemap.xml, robots.txt, OG images.
- Vitest/Playwright test coverage for core flows (enquiry form, catalog
  browse).
- OWASP Top 10 manual review + Dependabot/`npm audit` check.
- Manual cross-browser/device pass (Playwright already covers automated
  Chromium/Firefox/WebKit regression).
- Analytics wired (Vercel Analytics, PostHog if wanted).

## Phase 8 — Deploy
- Production deploy on Vercel, domain pointed, Resend/Sentry keys set,
  final content review.