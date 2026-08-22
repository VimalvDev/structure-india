import Link from "next/link";
import Image from "next/image";
import { Package } from "lucide-react";
import { Product } from "@/lib/data/products";

export default function ProductCard({
  product,
  categorySlug,
}: {
  product: Product;
  categorySlug: string;
}) {
  const hasImage = product.image && product.image.length > 0;
  const variantCount = product.variants?.length ?? 0;

  return (
    <Link
      href={`/products/${categorySlug}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-[var(--color-ash-orange)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
    >
      {/* Image / Placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt">
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b border-border">
            <Package
              className="h-12 w-12 text-ink-muted/40"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1.5 text-base font-semibold text-ink group-hover:text-[var(--color-ash-orange)] transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        <p className="mb-4 text-sm text-ink-muted leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Variant badge + View arrow pushed to bottom */}
        <div className="mt-auto flex items-center justify-between">
          {variantCount > 0 ? (
            <span className="inline-flex items-center rounded-md bg-surface-alt px-2.5 py-1 text-xs font-medium text-ink-muted">
              {variantCount} {variantCount === 1 ? "size" : "sizes"} available
            </span>
          ) : (
            <span />
          )}
          <span className="text-sm font-medium text-[var(--color-ash-orange)] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
