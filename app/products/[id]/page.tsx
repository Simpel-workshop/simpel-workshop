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
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Header />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <section className="bg-white p-8 md:p-10">
            <Link href="/products" className="mb-8 inline-block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500 transition hover:text-neutral-900">
              &lt; Tilbage
            </Link>

            <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="aspect-square overflow-hidden  border-3 border-black bg-white">
                  <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" />
                </div>

                <div className="mt-4 flex gap-3">
                  {product.images?.slice(0, 3).map((img, i) => (
                    <div key={i} className="h-20 w-20 overflow-hidden border-3 border-black bg-white">
                      <img src={img} alt={`${product.title} ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">{product.title}</h1>
                <p className="mb-6 max-w-prose text-base leading-7 text-neutral-600">{product.description}</p>

                <div className="mb-4">
                  <RatingStars rating={product.rating} />
                </div>

                <p className="mb-6 text-2xl font-medium text-neutral-900">{product.price} kr.</p>
                <p className="mb-2 text-sm text-neutral-600">Kategori: {product.category}</p>
                <p className="mb-2 text-sm text-neutral-600">Lager: {product.stock}</p>
                <p className="mb-2 text-sm text-neutral-600">Brand: {product.brand || "Ukendt"}</p>

                <AddToCartButton product={product} />
              </div>
            </div>

            <hr className="mb-10 border-neutral-200" />

            <section>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900">Reviews</h2>
              <div className="flex flex-wrap gap-6">
                {product.reviews?.length ? (
                  product.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="w-full border border-neutral-200 bg-white p-4 md:w-[210px]">
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
