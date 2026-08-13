# PRD — Structure India / Ash Corporate & Tender Website

## Problem
The current site (structureindia.net) is a 2013-era template: no mobile support, no
certifications, no project portfolio, and missing the service lines that now drive
most of the business (STP/ETP O&M, OFC/fiber, smart metering, electrical
installation). Tender evaluators and private clients checking the company online
see an outdated, incomplete picture.

## Goals
- Modern, fast, mobile-first site covering the **full current scope** of work.
- Dual-brand identity: **Ash** (product/trade brand, used on all product lines) +
  **Structure India** (registered company name, used for legal/tender credibility —
  ISO, MSME/UDYAM, NSIC, GST).
- Self-serve **admin panel** to add/edit products, certificates, and projects
  without touching code.
- A **certifications page** that shows ISO 9001:2015, MSME/UDYAM, NSIC, and GST
  registration — viewable and downloadable.
- A **projects / tender portfolio** page to build credibility (past clients, scope,
  category).
- A working **enquiry/quote system** (browsable catalog + RFQ, see ARCHITECTURE.md).
- An **AI support chat** that answers visitor questions from the catalog/about content.
- Carry over every product currently on the old site — nothing gets dropped.

## Non-goals (v1)
- E-commerce / online checkout or payment gateway.
- Multi-language site (old site had language flags, unused — skip for now).
- Blog/news engine (can be added later as a CMS content type).
- Live chat with a human (the AI chat is not a replacement for sales calls,
  just first-line Q&A).

## Target audience
1. Government tender evaluation committees / procurement officers checking company
   credibility before/during bid evaluation.
2. Private B2B clients (builders, hotels, industrial plants) sourcing water
   treatment, earthing, or solar work.
3. Dealers / channel partners.

---

## Page-by-Page Content Breakdown

Shell (on every page, not repeated below): sticky header with Ash + Structure
India logo lockup and mega-menu nav; footer with contact block, registration
numbers, quick links; floating AI chat button (bottom-right).

### Home (`/`)
1. **Hero** — headline, one-line value proposition, background/product image,
   primary CTA ("Get a Quote") + secondary CTA ("Browse Products").
2. **Trust strip** — ISO 9001:2015 / MSME-UDYAM / NSIC / GST badges, "Estd. 2000"
   or similar credibility marker.
3. **Category grid** — all 7 service categories as cards (icon/image, name,
   one-line description, link to category page).
4. **About snippet** — 2–3 sentence company summary + "Learn more" link.
5. **Featured projects** — 3–4 project cards (client, category, thumbnail),
   linking to `/projects`.
6. **Why Structure India / Ash** — value props as an icon+text grid (ISO
   certified, MSME/NSIC registered, in-house manufacturing, pan-India tender
   experience, years in business).
7. **CTA banner** — "Have a project or tender requirement?" + Get a Quote button.

### About Us (`/about`)
1. **Company profile** — registered name, ISO 9001:2015 status, HQ (Ghaziabad,
   UP), founding year.
2. **The Ash brand** — short explanation that Ash is the trade brand under which
   products are manufactured; Structure India is the company.
3. **What we do** — one-paragraph summary of all 7 service lines.
4. **Infrastructure** — manufacturing/works facility details (Regd. Works
   address from the letterhead; equipment/capability summary).
5. **Quality policy** — short ISO commitment statement.
6. **Registrations** — GST / MSME-UDYAM / NSIC numbers, brief mention (full
   detail lives on `/certifications`).
7. **CTA** — Contact / Get a Quote.

### Products & Services hub (`/products`)
1. Intro header — "Our Product & Service Categories" + short description.
2. Search bar (full-text search across all products).
3. Category grid (all 7, larger cards than the homepage version):
   Earthing & Lightning Protection · Water & Wastewater Treatment
   (STP/ETP/WTP, RO, Softener/DM Plant, Mineral Water Plant) · Cooling Towers
   · OFC / Fiber Infrastructure · Smart Metering · Electrical Installation ·
   Solar Power Solutions.

### Category listing page (`/products/[category]`)
1. Category header — name, description, hero image.
2. Sub-category filter chips where relevant (e.g. under Water: STP/ETP/WTP,
   Industrial RO, Commercial RO, Domestic RO, Softener, DM Plant, Mineral
   Water Plant).
3. Product grid — image, name, short spec, "View Details" + "Add to Enquiry."
4. Category catalog PDF download (if available).

### Product detail page (`/products/[category]/[product]`)
1. Breadcrumb.
2. Image gallery.
3. Name + brand (Ash) + short description.
4. **Full spec table** — migrated verbatim from the old site (e.g. Gel Earthing
   Electrode's G.I. pipe dimension table, Cooling Tower capacity table, RO
   system feed-water parameters).
5. Features/benefits bullet list.
6. Technical diagrams where the old site had them (e.g. Faraday cage diagram,
   RO schematic, solar system schematic).
7. "Request Quote" (adds to the enquiry list) button.
8. Related products (same category).
9. Downloadable spec-sheet PDF, if available.

### Projects / Tender Portfolio (`/projects`)
1. Intro — "Our Work" + one-line credibility statement (govt + private clients).
2. Filter by category / year.
3. Project grid — client, category, year, thumbnail.
4. **Individual project page** — client, scope of work, category, year,
   description, images. (Keep tender reference numbers generic/non-confidential
   unless you confirm they're fine to publish.)

### Certifications & Registrations (`/certifications`)
1. Intro — "Registered & Certified" statement.
2. Certificate cards: **ISO 9001:2015**, **MSME/UDYAM** (UDYAM-UP-29-0024800),
   **NSIC**, **GST** — each with number, issue date, and view/download.
3. Short note on why this matters for tender eligibility.

### Clients / Dealer Network (`/clients`)
1. Intro.
2. Client logos/names grid (past clients — confirm which are safe to publish
   publicly, since some tender work may be under NDA-style discretion).
3. Dealer network list (old site had a "Dealer's Network" nav item — confirm
   if this is still active/relevant).
4. Testimonials, if any exist.

### Contact / Get a Quote (`/contact`)
1. Contact form (name, phone, email, message; pre-filled with any items from
   the enquiry list if the user arrived via "Request Quote").
2. Company contact block — Corp. Office and Regd. Works addresses, phone
   numbers, email (from the letterhead).
3. Map embed (Ghaziabad office).

### AI Support Chat (all pages, floating widget)
Answers visitor questions using retrieval over the catalog, about, and
certification content (see ARCHITECTURE.md — RAG). Not a page, a persistent
component.

### Admin (`/admin`, not public)
CRUD screens for Products, Categories, Certificates, Projects; Enquiries
view; covered in ARCHITECTURE.md and PHASES.md, not part of public content.

---

## Content still needed from you
The old site doesn't have usable copy for these — flagging so it's not
forgotten before the relevant build phase:
- [ ] About Us: actual company profile paragraph, founding year, infrastructure/
      facility description (old site's "Infrastructure" nav item had no content).
- [ ] Quality policy statement (old site's "Quality" nav item had no content).
- [ ] Project/tender history for the Projects page — client names, scope,
      year, and confirmation on what's publishable.
- [ ] Client list for `/clients` — confirm which names are safe to publish.
- [ ] Dealer network — confirm if this still exists / is relevant to keep.
- [ ] Actual certificate files (ISO/MSME/NSIC/GST) for upload.
- [ ] New category content for OFC/Fiber, Smart Metering, and Electrical
      Installation — the old site has zero content here since these are new
      lines; will need specs/descriptions written from scratch.

## Success criteria
- Every product from the old site (see source PDF) is migrated with original specs
  intact — no content loss.
- All 3 new service lines (OFC, smart metering, electrical) have live pages.
- You can log into `/admin` and add a product, a certificate, or a project without
  a developer.
- Site is fully usable on a phone (this is how most people will first open it).
- Deployed and reachable at a real URL.
