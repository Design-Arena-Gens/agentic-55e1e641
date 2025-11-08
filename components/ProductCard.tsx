import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[4/5]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <Link href="#" className="text-sm text-primary hover:underline">View</Link>
        </div>
      </div>
    </article>
  );
}
