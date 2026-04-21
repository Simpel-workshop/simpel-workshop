"use client";

import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button onClick={() => addToCart(product)} className="rounded-2xl border-4 border-orange-400 px-6 py-3 text-xl font-bold transition hover:bg-orange-50">
      Læg i kurv
    </button>
  );
}
