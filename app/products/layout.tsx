import Header from "@/components/layout/header";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink">
      <Header />
      <main className="flex-1 w-full pt-[4.5rem]">
        {children}
      </main>
    </div>
  );
}
