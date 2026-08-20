import * as React from "react";

export default function AboutSnippet() {
  return (
    <section className="bg-surface-alt px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-16">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0">
            <span className="block text-xs font-semibold uppercase tracking-wider text-ash-orange">
              About Us
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              <span className="border-b-[3px] border-ash-orange pb-0.5">
                Who 
              </span>
              <span> </span>
              We Are
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Structure India was founded in 2005 with a clear commitment to
              customer service. Aiming to meet our clients' objectives, we
              leverage quality, performance, and cost-competitiveness. These
              constitute our strength and warranty.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Structure India provides turnkey engineering solutions across
              seven categories: earthing & lightning protection, water &
              wastewater treatment, cooling towers, OFC/fiber infrastructure,
              smart metering, electrical installation, and solar power. Led by
              an experienced team and manufactured under ISO 9001:2015
              certification, we provide end-to-end solutions including design,
              engineering, procurement, and construction (EPC) for our customers
              seeking reliable infrastructure execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
