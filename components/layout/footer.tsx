import React from "react";
import Link from "next/link";
import Image from "next/image";

const earthingProducts = [
  { name: "Gel Earthing Electrode", slug: "gel-earthing-electrode" },
  { name: "Earthing Backfill Compound", slug: "earthing-backfill-compound" },
  { name: "Faraday Cage / Octopus Earthing", slug: "faraday-cage-octopus-earthing" },
  { name: "Stormflash 15 — ESE Air Terminal", slug: "stormflash-15-ese-air-terminal" },
  { name: "Stormflash 60 — ESE Air Terminal", slug: "stormflash-60-ese-air-terminal" },
  { name: "Lightning Flash Counter", slug: "lightning-flash-counter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1 — BRAND */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
            >
              <Image
                src="/ash-logo.avif"
                alt="Ash Logo"
                width={100}
                height={100}
                className="h-15 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Maintenance-free gel earthing electrodes, backfill compound, and lightning protection systems — engineered to IS/ISI standards, installed pan-India since 2005.
            </p>
          </div>

          {/* COLUMN 2 — PRODUCTS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
              Products
            </h3>
            <ul className="flex flex-col gap-y-2.5">
              {earthingProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
              Company
            </h3>
            <ul className="flex flex-col gap-y-2.5">
              <li>
                <Link
                  href="https://structure-india.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  About Structure India
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://structure-india.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <address className="not-italic">
              <p className="text-sm leading-relaxed text-white/75">
                Corp. Office: 547–548, 5th Floor, Cloud 9, Corporate Tower, Sector-1, Vaishali, Ghaziabad – 201010 (UP), India
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <Link
                  href="tel:+911204240615"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Tel: +91 120 4240615
                </Link>
                <Link
                  href="tel:+919868525835"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Mobile: +91 98685 25835 / 36
                </Link>
              </div>
              <div className="mt-2">
                {/* // TODO: confirm this is still the current email in a code comment, since it's sourced from an older letterhead and should be verified before launch */}
                <Link
                  href="mailto:structureindia_delhi@rediffmail.com"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  structureindia_delhi@rediffmail.com
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/50 sm:flex-row">
          <div>
            &copy; {currentYear} Ash — A Structure India Brand. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}