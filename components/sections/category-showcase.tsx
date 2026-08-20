import * as React from "react"
import Link from "next/link"
import { categories } from "@/lib/data/categories"

export default function CategoryShowcase() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:gap-x-16 xl:gap-x-20">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[40%] xl:w-[35%] lg:shrink-0">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            What We <span className="border-b-[3px] border-ash-orange pb-0.5">Build</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            Seven certified engineering categories, manufactured and installed under the Ash brand — from earthing systems to turnkey water treatment plants.
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
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.slug} className="flex flex-col border-t border-border pt-6">
                <Icon className="h-7 w-7 text-ash-orange stroke-[1.5]" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {cat.description}
                </p>
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
