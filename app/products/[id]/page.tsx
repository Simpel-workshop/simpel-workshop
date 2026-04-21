import Link from "next/link";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";
import RatingStars from "@/components/RatingStars";
import type { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Kunne ikke hente produkt");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="rounded-3xl border-4 border-black bg-[#f5f5f5] p-4 min-h-screen">
        <Header />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <section className="rounded-3xl bg-white p-6">
            <Link href="/products" className="mb-6 inline-block text-2xl font-bold text-green-500">
              &lt; Tilbage
            </Link>

            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="aspect-square overflow-hidden rounded-2xl border-4 border-orange-400 bg-white">
                  <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
                </div>

                <div className="mt-4 flex gap-3">
                  {product.images?.slice(0, 3).map((img, i) => (
                    <div key={i} className="h-20 w-20 overflow-hidden rounded-xl border-4 border-orange-400 bg-white">
                      <img src={img} alt={`${product.title} ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="mb-4 text-5xl font-bold text-orange-400">{product.title}</h1>
                <p className="mb-4 text-xl text-gray-500">{product.description}</p>

                <div className="mb-4">
                  <RatingStars rating={product.rating} />
                </div>

                <p className="mb-4 text-3xl font-bold">{product.price} kr.</p>
                <p className="mb-2">Kategori: {product.category}</p>
                <p className="mb-2">Lager: {product.stock}</p>
                <p className="mb-6">Brand: {product.brand || "Ukendt"}</p>

                <AddToCartButton product={product} />
              </div>
            </div>

            <hr className="mb-10 border-2 border-sky-300" />

            <section>
              <h2 className="mb-4 text-4xl font-bold text-orange-400">Reviews</h2>
              <div className="flex flex-wrap gap-6">
                {product.reviews?.length ? (
                  product.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="w-full rounded-2xl border-2 border-sky-200 bg-white p-4 md:w-[250px]">
                      <div className="mb-2">
                        <RatingStars rating={review.rating} />
                      </div>
                      <p className="mb-2 font-semibold">"{review.comment}"</p>
                      <p className="text-sm text-gray-500">{review.reviewerName}</p>
                    </div>
                  ))
                ) : (
                  <p>Ingen anmeldelser endnu.</p>
                )}
              </div>
            </section>
          </section>

          <CartSidebar />
        </div>
      </div>
    </main>
  );
}
