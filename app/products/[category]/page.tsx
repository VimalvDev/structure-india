import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, products as allProducts } from "@/lib/data/products";
import { icons, PackagePlus } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

/* ── Static generation ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Structure India`,
    description: category.shortDescription,
  };
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const IconComponent = icons[category.icon as keyof typeof icons] as React.ElementType;
  const categoryProducts = allProducts.filter(
    (p) => p.categorySlug === category.slug
  );

  return (
    <div className="px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              href="/products"
              className="transition-colors hover:text-ink"
            >
              Products
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink font-medium">{category.name}</li>
        </ol>
      </nav>

      {/* Category heading */}
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-3">
          {IconComponent && (
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-ash-orange)]/10 text-[var(--color-ash-orange)]">
              <IconComponent className="h-5 w-5" aria-hidden="true" />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
            {category.name}
          </h1>
        </div>
        <p className="text-ink-muted text-base md:text-lg max-w-3xl leading-relaxed">
          {category.fullDescription}
        </p>
      </div>

      {/* Product grid — or empty state */}
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={category.slug}
            />
          ))}
        </div>
      ) : (
        /* ── Empty state ────────────────────────────────────────── */
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface px-6 py-16 text-center">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-surface-alt text-ink-muted">
            <PackagePlus className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="mb-6 max-w-sm text-ink-muted text-base leading-relaxed">
            Product listings for this category are coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-ash-orange px-7 text-sm font-semibold text-white transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
          >
            Enquire About This Category
          </Link>
        </div>
      )}
    </div>
  );
}
