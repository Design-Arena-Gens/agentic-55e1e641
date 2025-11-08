"use client";
import { useMemo, useState } from "react";
import ProductCard, { type Product } from "./ProductCard";

const ALL = "All";

export default function ProductGrid({
  items,
  enableFilters = true,
  initialQuery = "",
  initialCategory = "",
}: {
  items: Product[];
  enableFilters?: boolean;
  initialQuery?: string;
  initialCategory?: string;
}) {
  const categories = useMemo(() => [
    ALL,
    ...Array.from(new Set(items.map((p) => p.category))),
  ], [items]);

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory || ALL);

  const filtered = useMemo(() => {
    return items.filter((p) => {
      const matchQuery = query
        ? p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchCategory = category === ALL ? true : p.category === category;
      return matchQuery && matchCategory;
    });
  }, [items, query, category]);

  return (
    <div>
      {enableFilters && (
        <div className="mb-6 grid md:grid-cols-3 gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Search products"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="text-sm text-gray-600 flex items-center">{filtered.length} items</div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
