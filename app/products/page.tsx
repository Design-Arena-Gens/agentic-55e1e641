import { products } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
export default function ProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string };
}) {
  const query = searchParams.q ?? "";
  const category = searchParams.category ?? "";

  const filtered = products.filter((p) => {
    const matchQuery = query
      ? p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      : true;
    const matchCategory = category ? p.category === category : true;
    return matchQuery && matchCategory;
  });

  return (
    <section className="container-section py-10 md:py-14">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <ProductGrid items={filtered} initialQuery={query} initialCategory={category} />
    </section>
  );
}
