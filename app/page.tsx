import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-amber-50">
        <div className="container-section grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <div>
            <span className="badge mb-4">New arrivals</span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Elegance in every detail
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Explore curated abayas, hijabs, and dresses designed for comfort and style.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/products" className="btn-primary">Shop collection</Link>
              <a href="https://neginboutique.base44.app/home" target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 font-medium hover:bg-gray-50">Original site</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">Free shipping</div>
                <div>On orders over $100</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Easy returns</div>
                <div>30-day return policy</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Secure checkout</div>
                <div>Powered by Stripe</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1640&auto=format&fit=crop"
              alt="Elegant fashion"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-section py-14 md:py-20">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Trending now</h2>
          <Link href="/products" className="text-primary hover:underline">View all</Link>
        </div>
        <ProductGrid items={products.slice(0, 8)} enableFilters={false} />
      </section>

      {/* Banner */}
      <section className="container-section pb-16">
        <div className="card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Modest essentials</h3>
            <p className="mt-2 text-gray-600">Build a timeless wardrobe with premium fabrics and elevated silhouettes.</p>
            <Link href="/products?category=Abaya" className="btn-primary mt-6 inline-flex">Shop abayas</Link>
          </div>
          <div className="relative aspect-[5/3]">
            <Image
              src="https://images.unsplash.com/photo-1535525153412-5a04f3f2c6f7?q=80&w=1640&auto=format&fit=crop"
              alt="Collection"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
