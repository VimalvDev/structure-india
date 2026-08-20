import * as React from "react"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ash-orange px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      {/* Blueprint Grid Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7) 0px, rgba(255, 255, 255, 0.7) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0px, rgba(255, 255, 255, 0.7) 1px, transparent 1px, transparent 40px)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
            Whether it's a new project, an ongoing order, or support on an existing site.
          </p>
        </div>

        <div className="mt-10 w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-ash-orange shadow-lg transition-transform hover:scale-[1.02] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ash-orange sm:w-auto"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  )
}
