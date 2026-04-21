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
    <div className="relative">
      <Link href={`/products/${product.id}`} className="block rounded-2xl border-4 border-orange-400 bg-white p-4 transition hover:shadow-lg">
        {product.stock < 10 && <span className="absolute right-3 top-3 text-sm font-bold text-red-500">low stock</span>}

        <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-100">
          <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
        </div>

        <h3 className="line-clamp-1 text-lg font-bold text-orange-500">{product.title}</h3>
        <p className="mb-2 text-sm text-gray-500">{product.category}</p>
        <p className="text-xl font-bold">{product.price} kr.</p>
      </Link>

      <button onClick={() => addToCart(product)} className="mt-3 w-full rounded-2xl border-4 border-orange-400 py-2 text-lg font-bold transition hover:bg-orange-50">
        Læg i kurv
      </button>
    </div>
  );
}
