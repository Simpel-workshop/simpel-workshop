"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const count = useCartStore((state) => state.getCount());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="mb-10 flex items-center border-b border-neutral-200 bg-transparent px-0 py-5">
      <nav className="flex w-full items-center gap-8 text-sm font-medium uppercase tracking-[0.12em] text-neutral-800">
        <Link href="/" className="transition hover:text-neutral-500">
          Forside
        </Link>
        <Link href="/products" className="transition hover:text-neutral-500">
          Produkter
        </Link>

        <div className="ml-auto text-sm font-medium text-neutral-700">
          Kurv: {mounted ? count : 0}
        </div>
      </nav>
    </header>
  );
}