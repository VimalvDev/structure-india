import Header from "@/components/layout/header";
import ProductsSidebar from "@/components/products/ProductsSidebar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row pt-[4.5rem]">
        <ProductsSidebar />
        <main className="flex-1 w-full bg-surface-alt/20">
          {children}
        </main>
      </div>
    </div>
  );
}
