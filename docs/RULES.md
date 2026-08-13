# RULES — Coding Conventions & AI Constraints

## For Antigravity (or any AI coding tool building this)
- **Never invent content.** Product specs, certificate numbers, addresses,
  phone numbers, GST/MSME numbers must come from what's provided (old site
  extract, letterhead, or explicit instruction). If a value is missing, leave a
  clearly marked placeholder (`// TODO: confirm value`) — don't guess a number
  or spec.
- **No lorem ipsum.** Use real product names/descriptions from the migrated
  content, even in early scaffolding.
- **Follow DESIGN.md tokens exactly** — the three brand colors, the type scale,
  the component list. Don't introduce new colors or fonts on a whim.
- **One task per prompt.** Build one page/component at a time (per PHASES.md),
  review, then move on. Don't let it build multiple pages in one pass — that's
  where duplication and structural drift creep in.
- **Ask before adding a dependency** not already listed in ARCHITECTURE.md.
- **No animation libraries** beyond simple CSS transitions/Tailwind
  `transition-*` utilities unless explicitly asked. No GSAP/Framer Motion for
  this project — keep it light and fast.
- **Mobile-first.** Every component must be checked at ~375px width before
  it's considered done.

## Code conventions
- TypeScript strict mode on.
- Components: PascalCase filenames, one component per file, colocate
  component-specific types in the same file unless shared.
- Folder structure: `app/` (routes), `components/ui/` (reusable primitives),
  `components/sections/` (page-specific blocks), `lib/` (Supabase client,
  helpers), `types/` (shared types).
- Tailwind: use the design tokens as CSS variables / Tailwind theme extension,
  not hardcoded hex values scattered through components.
- Server Components by default; `"use client"` only where interactivity is
  needed (forms, admin CRUD, mobile menu toggle, chat widget).
- No `any` types. If Supabase types aren't generated yet, use explicit
  interfaces matching ARCHITECTURE.md's data model.

## Data & state conventions
- Public pages fetch directly in Server Components — never reach for
  TanStack Query there. TanStack Query is scoped to `/admin` only.
- Zustand is scoped to the enquiry/RFQ cart only — don't reach for it as a
  general state solution elsewhere; local `useState` is almost always enough.
- zod schemas are the single source of truth for a given form/input — define
  once, import on both the client (react-hook-form) and the server action/
  route handler that receives the same data. Never validate only client-side.
- Server actions/route handlers re-validate everything, even if the client
  already validated it. Never trust client input.
- Supabase queries: prefer typed queries generated from the schema over
  hand-written `any`-typed responses.

## Testing conventions
- Unit/component tests colocated as `*.test.ts(x)` next to the file they
  cover.
- Playwright E2E specs live in `e2e/`, one file per user flow (enquiry
  submission, catalog browse + search, chat).
- A PR shouldn't merge with failing lint, Vitest, or Playwright checks (CI
  enforces this — see ARCHITECTURE.md).

## Review checklist before marking a phase done
- [ ] Matches DESIGN.md tokens (colors, spacing, type)
- [ ] Works at mobile width
- [ ] No placeholder/lorem content
- [ ] No duplicated sections/components
- [ ] Matches the data model in ARCHITECTURE.md (if data-driven)
