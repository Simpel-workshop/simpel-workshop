"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`} className="block bg-white transition">
        {product.stock < 10 && <span className="absolute right-3 top-3 bg-white/90 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-700">low stock</span>}

        <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
          <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
        </div>

        <h3 className="line-clamp-1 text-sm font-medium uppercase tracking-[0.08em] text-neutral-900">{product.title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
        <p className="mt-3 text-sm font-medium text-neutral-900">{product.price} kr.</p>
      </Link>

      <button onClick={() => addToCart(product)} className="mt-4 w-full border border-neutral-900 py-3 text-xs font-medium uppercase tracking-[0.12em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
        Læg i kurv
      </button>
    </div>
  );
}
