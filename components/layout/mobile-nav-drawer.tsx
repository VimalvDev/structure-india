import * as React from "react"
import Link from "next/link"
import { X, ChevronDown, ChevronUp, Zap, FlaskConical, Grid3X3, CloudLightning, Timer } from "lucide-react"

const navProducts = [
  { name: "Gel Earthing Electrode", slug: "gel-earthing-electrode", icon: Zap },
  { name: "Earthing Backfill Compound", slug: "earthing-backfill-compound", icon: FlaskConical },
  { name: "Faraday Cage / Octopus Earthing", slug: "faraday-cage-octopus-earthing", icon: Grid3X3 },
  { name: "Stormflash 15 — ESE Air Terminal", slug: "stormflash-15-ese-air-terminal", icon: CloudLightning },
  { name: "Stormflash 60 — ESE Air Terminal", slug: "stormflash-60-ese-air-terminal", icon: CloudLightning },
  { name: "Lightning Flash Counter", slug: "lightning-flash-counter", icon: Timer },
];

export default function MobileNavDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [productsOpen, setProductsOpen] = React.useState(false)

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 flex transform flex-col bg-surface transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-8">
        <span className="font-display text-lg font-bold text-ink">Menu</span>
        <button
          onClick={onClose}
          className="rounded-xl p-2 text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
        <nav className="flex flex-col space-y-2">
          <Link
            href="/about"
            onClick={onClose}
            className="block rounded-xl px-4 py-4 text-lg font-medium text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
          >
            About
          </Link>

          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
              aria-expanded={productsOpen}
            >
              Products
              {productsOpen ? (
                <ChevronUp className="h-5 w-5 text-ink-muted" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-5 w-5 text-ink-muted" aria-hidden="true" />
              )}
            </button>

            {productsOpen && (
              <div className="mt-1 flex flex-col space-y-1 pl-4 pr-4">
                {navProducts.map((product) => {
                  const Icon = product.icon
                  return (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-ash-orange" aria-hidden="true" />
                      {product.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="border-t border-border p-5 sm:p-8">
        <Link
          href="/contact"
          onClick={onClose}
          className="flex w-full items-center justify-center rounded-xl bg-ash-orange px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
