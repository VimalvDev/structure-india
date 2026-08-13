# DESIGN — Structure India / Ash

## Brand hierarchy
- **Ash** = the trade brand. Used as the primary logo mark, on every product
  category, and in the site's visual identity.
- **Structure India** = the registered company name. Used in the header lockup
  (next to the Ash mark, as on the letterhead), in the footer, on the About and
  Certifications pages, and anywhere legal/registration info appears.
- Header lockup: Ash mark (left) + "Structure India — An ISO 9001:2015 Co."
  wordmark (right), same layout as the letterhead, modernized.

## Colors (sampled directly from the letterhead — not guessed)
| Token | Hex | Use |
|---|---|---|
| `--ash-orange` | `#F07F1B` | Primary accent, CTAs, active nav state |
| `--ash-red` | `#E31E25` | Secondary accent, used sparingly (badges, highlights) |
| `--si-green` | `#008941` | Structure India wordmark, certification/trust badges |
| `--ink` | `#1A1A1A` | Body text |
| `--ink-muted` | `#5C6169` | Secondary text |
| `--surface` | `#FFFFFF` | Base background |
| `--surface-alt` | `#F5F6F7` | Section backgrounds, card fills |
| `--border` | `#E4E6E8` | Dividers, card borders |

Don't use orange, red, and green all at once on one component — pick one accent
per section so it doesn't look like a traffic light. Orange is the default CTA
color; green is reserved for trust/certification signals; red is a rare highlight.

## Typography
- UI/body font: a modern grotesk sans (**Inter** or **Geist**) — clean, readable,
  no personality contest with the content.
- The Ash/Structure India script logos stay as-is (existing logo files), not
  recreated in a web font.
- Scale: keep it simple — one heading scale (H1–H4), one body size, one small/caption
  size. No more than 4 font sizes on any page.

## Style direction
Clean, corporate, industrial — think modern B2B/manufacturing sites, not a
flashy agency portfolio. Reference points to search on Pinterest/Dribbble:
"industrial B2B website," "manufacturing company website modern," "engineering
services website design." Avoid generic SaaS-startup gradients — this is an
engineering firm, not an app.

- Generous whitespace, card-based grids for products and certifications.
- Real product photos where available (from the old site); clean icon set
  (Lucide) for things without photos.
- Subtle hover states and fades only — no scroll-jacking, no heavy parallax,
  no GSAP-style animation sequences. This site needs to load fast and read
  clearly on a tender officer's phone, not impress with motion.
- Sticky header with a mega-menu for the 7 product categories.
- Certification badges (ISO / MSME / NSIC / GST) shown as a trust strip on the
  homepage, plus their own full page with downloadable copies.

## Key components to build once, reuse everywhere
- Header (mega-menu + mobile drawer)
- Footer (contact block, registration numbers, quick links)
- Product/category card
- Certificate card (thumbnail + download button)
- Project/case-study card
- CTA banner ("Get a Quote")
- Enquiry form
