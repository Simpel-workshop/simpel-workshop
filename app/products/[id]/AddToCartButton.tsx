"use client";

import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(product)} className="border border-neutral-900 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
      Læg i kurv
    </button>
  );
}
