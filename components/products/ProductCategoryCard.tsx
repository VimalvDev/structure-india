import Link from "next/link";
import { Category } from "@/lib/data/products";
import { icons } from "lucide-react";

export default function ProductCategoryCard({ category }: { category: Category }) {
  const IconComponent = icons[category.icon as keyof typeof icons] as React.ElementType;

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-[var(--color-ash-orange)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
    >
      <div>
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-alt text-ink group-hover:bg-[var(--color-ash-orange)]/10 group-hover:text-[var(--color-ash-orange)] transition-colors duration-300">
          {IconComponent && <IconComponent className="h-6 w-6" aria-hidden="true" />}
        </div>
        <h2 className="mb-2 text-xl font-semibold text-ink group-hover:text-[var(--color-ash-orange)] transition-colors duration-300">
          {category.name}
        </h2>
        <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed">
          {category.shortDescription}
        </p>
      </div>
      <div className="mt-8 flex items-center text-sm font-medium text-[var(--color-ash-orange)]">
        View Products <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
