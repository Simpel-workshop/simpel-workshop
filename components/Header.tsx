"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const count = useCartStore((state) => state.getCount());

  return (
    <header className="mb-6 rounded-2xl border-4 border-sky-300 bg-white px-6 py-4">
      <nav className="flex items-center gap-8 text-xl font-bold">
        <Link href="/" className="transition hover:text-sky-500">
          Home
        </Link>
        <Link href="/products" className="transition hover:text-sky-500">
          Products
        </Link>

        <div className="ml-auto rounded-xl bg-sky-100 px-4 py-2 text-base">Kurv: {count}</div>
      </nav>
    </header>
  );
}
