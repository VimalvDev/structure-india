import * as React from "react"
import Link from "next/link"
import { categories } from "@/lib/data/categories"

export default function ProductsDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div
      role="menu"
      className="absolute left-0 top-full mt-4 min-w-[560px] rounded-xl border border-border bg-surface p-6 shadow-xl"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              onClick={onClose}
              role="menuitem"
              className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-1"
            >
              <Icon className="h-4 w-4 shrink-0 text-ash-orange" aria-hidden="true" />
              <span>{cat.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
