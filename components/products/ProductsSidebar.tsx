"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/data/products";
import { icons } from "lucide-react";

export default function ProductsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 md:flex-shrink-0 md:sticky md:top-[4.5rem] md:h-[calc(100vh-4.5rem)] border-b md:border-b-0 md:border-r border-border overflow-x-auto md:overflow-y-auto bg-surface-alt/50 md:bg-surface">
      <nav className="flex md:flex-col gap-2 p-4 md:p-6 min-w-max md:min-w-0">
        {categories.map((cat) => {
          const isActive = pathname === `/products/${cat.slug}` || pathname.startsWith(`/products/${cat.slug}/`);
          const IconComponent = icons[cat.icon as keyof typeof icons] as React.ElementType;
          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[var(--color-ash-orange)]/10 text-[var(--color-ash-orange)]"
                  : "text-ink-muted hover:bg-surface-alt hover:text-ink"
              }`}
            >
              {IconComponent && <IconComponent className="h-4 w-4 shrink-0" aria-hidden="true" />}
              <span>{cat.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
