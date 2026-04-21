"use client";

import Header from "@/components/Header";
import { useCartStore } from "@/store/cartStore";

export default function PaymentPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleFakePayment = () => {
    alert("Fake betaling gennemført 🎉");
    clearCart();
  };

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="rounded-3xl border-4 border-black bg-[#f5f5f5] p-4 min-h-screen">
        <Header />

        <section className="mx-auto max-w-3xl py-10">
          <div className="mb-16 space-y-8">
            {items.length === 0 ? (
              <p className="text-center text-xl text-gray-500">Kurven er tom.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center gap-6 rounded-2xl border-2 border-gray-200 bg-white p-4">
                  <div className="h-20 w-20 overflow-hidden rounded-xl border-4 border-orange-400 bg-white">
                    <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <p className="text-2xl font-bold text-orange-400">{item.title}</p>
                    <p className="text-gray-500">
                      {item.price} kr. x {item.quantity}
                    </p>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="rounded-xl border-2 border-red-300 px-3 py-2 font-semibold text-red-500 hover:bg-red-50">
                    Fjern
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="text-center">
            <p className="mb-6 text-3xl font-bold text-gray-700">I alt at betale: {total.toFixed(2)} kr.</p>

            <button onClick={handleFakePayment} disabled={items.length === 0} className="rounded-2xl border-4 border-orange-400 px-8 py-3 text-2xl font-bold transition hover:bg-orange-50 disabled:opacity-50">
              Betal nu
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
