import * as React from "react"
import Link from "next/link"
import { ArrowRight, ImageIcon } from "lucide-react"

/**
 * LAYOUT CONCEPT & PLAN:
 * - Layout: Refined directory/list view (not a card grid). Generous spacing between rows, no heavy borders or shadows.
 * - Signature Element ("Earthing"): A vertical "grounding line" running down the left side 
 *   of the list, connecting nodes at each product row. This visually represents a grounding rod or wire
 *   conducting current deep into the earth. Each product node is a small dot on the line that lights up 
 *   (ash-orange) on hover, simulating a connection point.
 * - Image Fallback: Reuse the aspect-square muted box with an ImageIcon for all 6 products as instructed.
 * - Navigation: The entire row acts as a large click target pointing to `/products/[slug]`, with a subtle 
 *   hover state and an ArrowRight icon indicating progression.
 */

const products = [
  {
    name: "Ash Gel Earthing Electrode",
    slug: "gel-earthing-electrode",
    description: "Maintenance-free dual-pipe electrode with conductive gel fill — available in Ash-19, Ash-39, and Ash-50."
  },
  {
    name: "Earthing Backfill Compound (B-F-C)",
    slug: "earthing-backfill-compound",
    description: "Hygroscopic mineral compound that retains moisture and conductivity around the electrode long-term."
  },
  {
    name: "Faraday Cage / Octopus Earthing Solution",
    slug: "faraday-cage-octopus-earthing",
    description: "Multi-rod grid earthing for high-rise buildings and large-surface-area protection requirements."
  },
  {
    name: "Ash Stormflash 15 — ESE Air Terminal",
    slug: "stormflash-15-ese-air-terminal",
    description: "Early Streamer Emission lightning terminal, ΔT = 15µs, certified to NF C 17-102."
  },
  {
    name: "Ash Stormflash 60 — ESE Air Terminal",
    slug: "stormflash-60-ese-air-terminal",
    description: "Early Streamer Emission lightning terminal, ΔT = 60µs, CPRI-tested to 70kA impulse current."
  },
  {
    name: "Lightning Flash Counter",
    slug: "lightning-flash-counter",
    description: "Non-resettable electro-mechanical counter that logs every lightning strike captured by the system."
  }
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Ash Earthing & Lightning Protection Products
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Engineered for zero-maintenance reliability. Explore our complete catalogue of certified grounding electrodes, compounds, and active lightning terminals.
          </p>
        </div>

        {/* Directory List with Grounding Line */}
        <div className="relative pl-6 sm:pl-10">
          {/* The continuous vertical grounding line */}
          <div className="absolute left-[11px] sm:left-[19px] top-8 bottom-8 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-2">
            {products.map((product) => (
              <Link 
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative flex items-center gap-5 rounded-2xl p-4 transition-colors hover:bg-surface-alt sm:gap-8 sm:p-5"
              >
                {/* Grounding Node on the line */}
                <div 
                  className="absolute -left-6 sm:-left-10 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center bg-surface transition-colors group-hover:bg-surface-alt"
                  aria-hidden="true"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-border transition-colors group-hover:bg-ash-orange" />
                </div>

                {/* Thumbnail Fallback */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-border bg-surface sm:h-24 sm:w-24 group-hover:bg-white transition-colors">
                  <ImageIcon className="h-6 w-6 text-ink-muted/30" aria-hidden="true" />
                </div>

                {/* Text Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <h2 className="text-lg font-semibold text-ink sm:text-xl">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:mt-1.5 sm:text-base">
                    {product.description}
                  </p>
                </div>

                {/* Action Arrow */}
                <div className="hidden shrink-0 items-center justify-center sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent transition-all group-hover:border-border group-hover:bg-white">
                    <ArrowRight className="h-5 w-5 text-ink-muted transition-colors group-hover:text-ash-orange" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
