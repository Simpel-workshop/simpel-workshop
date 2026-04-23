"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useCartStore } from "@/store/cartStore";

export default function PaymentPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFakePayment = () => {
    alert("Fake betaling gennemført 🎉");
    clearCart();
  };

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="min-h-screen">
        <Header />

        <section className="mx-auto max-w-3xl py-12">
          <div className="mb-14 divide-y divide-neutral-200 border-t border-neutral-200 bg-white">
            {!mounted ? (
              <p className="py-10 text-center text-sm uppercase tracking-[0.12em] text-neutral-500">Indlæser kurv...</p>
            ) : items.length === 0 ? (
              <p className="py-10 text-center text-sm uppercase tracking-[0.12em] text-neutral-500">Kurven er tom.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center gap-5 py-6 pr-3">
                  <div className="h-20 w-20 overflow-hidden bg-white">
                    <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium uppercase tracking-[0.08em] text-neutral-900">{item.title}</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.price} kr. × {item.quantity}
                    </p>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 transition hover:text-neutral-900">
                    Fjern
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-neutral-200 pt-8 text-center">
            <p className="mb-6 text-2xl font-medium text-neutral-900">I alt at betale: {mounted ? total.toFixed(2) : "0.00"} kr.</p>

            <button onClick={handleFakePayment} disabled={!mounted || items.length === 0} className="border border-neutral-900 px-8 py-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white disabled:opacity-40">
              Betal nu
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
