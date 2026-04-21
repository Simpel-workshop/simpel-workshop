"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartSidebar() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());

  return (
    <aside className="sticky top-6 h-fit rounded-2xl border-4 border-sky-300 bg-white p-6">
      <div className="mb-8 space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500">Kurven er tom</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex justify-between gap-4">
              <span className="font-semibold text-sky-500">
                {item.title} x{item.quantity}
              </span>
              <span className="font-bold text-sky-500">{item.price * item.quantity} kr.</span>
            </div>
          ))
        )}
      </div>

      <div className="mb-6 border-t pt-4">
        <div className="flex justify-between text-2xl font-bold text-sky-500">
          <span>Total</span>
          <span>{total.toFixed(2)} kr.</span>
        </div>
      </div>

      <Link href="/payment" className="block rounded-2xl border-4 border-sky-300 py-3 text-center text-2xl font-bold text-sky-500 transition hover:bg-sky-50">
        Gå til betaling
      </Link>
    </aside>
  );
}
