import { categories } from "@/lib/data/products";
import ProductCategoryCard from "@/components/products/ProductCategoryCard";

export const metadata = {
  title: "Products | Structure India",
  description: "Explore our full range of engineering products and systems.",
};

export default function ProductsPage() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-3">Our Products</h1>
        <p className="text-ink-muted text-lg max-w-2xl">
          Explore our full range of engineering products and systems, organized by category.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <ProductCategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </div>
  );
}
