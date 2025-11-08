"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") || "");

  useEffect(() => {
    setQ(params.get("q") || "");
  }, [params]);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const base = "/products";
      const search = q ? `?q=${encodeURIComponent(q)}` : "";
      router.push(base + search);
    },
    [q, router]
  );

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === href ? "text-primary" : "text-gray-600 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-section flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold tracking-tight">Negin Boutique</Link>
        <nav className="hidden md:flex items-center gap-1">
          <Link className={linkClass("/")} href="/">Home</Link>
          <Link className={linkClass("/products")} href="/products">Products</Link>
          <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary" href="https://neginboutique.base44.app/home" target="_blank" rel="noreferrer">Original</a>
        </nav>
        <form onSubmit={onSubmit} className="flex-1 md:flex-none md:w-80 ml-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Search"
          />
        </form>
      </div>
    </header>
  );
}
