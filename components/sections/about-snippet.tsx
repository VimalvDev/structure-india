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
              Ash is the earthing and lightning protection brand of Structure India, founded in 2005 with a clear commitment to customer service. We manufacture maintenance-free gel earthing electrodes, backfill compound, and lightning protection systems engineered to IS/ISI standards.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Manufactured under ISO 9001:2015 certification, Ash earthing electrodes are built from custom I.S.I. tube with a conductive, corrosion-resistant chemical fill, engineered for decades of maintenance-free performance in any soil condition. From gel earthing electrodes to lightning conductors and backfill compound, every system is designed, tested, and installed with pan-India service support.
            </p>
            <div className="mt-8">
              <a
                href="https://structure-india.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-ash-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange rounded-sm"
              >
                Read More About Structure India &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
