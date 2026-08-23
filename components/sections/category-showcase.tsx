import * as React from "react"
import Link from "next/link"
import { Zap, FlaskConical, Grid3X3, CloudLightning, Timer, type LucideIcon } from "lucide-react"

const products: { name: string; slug: string; icon: LucideIcon; description: string }[] = [
  {
    name: "Gel Earthing Electrode",
    slug: "gel-earthing-electrode",
    icon: Zap,
    description:
      "Maintenance-free dual-pipe electrode with conductive gel fill — available in Ash-19, Ash-39, Ash-50, and Ash-60.",
  },
  {
    name: "Earthing Backfill Compound",
    slug: "earthing-backfill-compound",
    icon: FlaskConical,
    description:
      "Hygroscopic mineral compound that retains moisture and conductivity around the electrode long-term.",
  },
  {
    name: "Faraday Cage / Octopus Earthing",
    slug: "faraday-cage-octopus-earthing",
    icon: Grid3X3,
    description:
      "Multi-rod grid earthing for high-rise buildings and large-surface-area protection requirements.",
  },
  {
    name: "Stormflash 15 — ESE Air Terminal",
    slug: "stormflash-15-ese-air-terminal",
    icon: CloudLightning,
    description:
      "Early Streamer Emission lightning terminal, ΔT = 15µs, certified to NF C 17-102.",
  },
  {
    name: "Stormflash 60 — ESE Air Terminal",
    slug: "stormflash-60-ese-air-terminal",
    icon: CloudLightning,
    description:
      "Early Streamer Emission lightning terminal, ΔT = 60µs, CPRI-tested to 70kA impulse current.",
  },
  {
    name: "Lightning Flash Counter",
    slug: "lightning-flash-counter",
    icon: Timer,
    description:
      "Non-resettable electro-mechanical counter that logs every lightning strike captured by the system.",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-x-16 xl:gap-x-20">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] xl:w-[35%] lg:shrink-0">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
            Our Products
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            What We <span className="border-b-[3px] border-ash-orange pb-0.5">Build</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            Six certified earthing and lightning protection products, manufactured and installed under the Ash brand — engineered for zero-maintenance reliability.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-ash-orange px-7 text-sm font-semibold text-white transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
          >
            View All Products
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mt-14 grid w-full grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-0 lg:w-[60%] xl:w-[65%]">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col border-t border-border pt-6 transition-colors"
              >
                <Icon className="h-7 w-7 text-ash-orange stroke-[1.5] transition-transform group-hover:scale-110" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-ash-orange transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </p>
              </Link>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
