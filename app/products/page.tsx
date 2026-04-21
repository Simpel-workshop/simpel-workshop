"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CartSidebar from "@/components/CartSidebar";
import Filters from "@/components/Filters";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([fetch("https://dummyjson.com/products?limit=0"), fetch("https://dummyjson.com/products/categories")]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData.products || []);
        setCategories(categoriesData.map((cat: any) => (typeof cat === "string" ? cat : cat.slug)));
      } catch (error) {
        console.error("Fejl ved hentning:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitial();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = selectedCategory === "all" || product.category === selectedCategory;

      const matchSearch = product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, search]);

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="min-h-screen rounded-3xl border-4 border-black bg-[#f5f5f5] p-4">
        <Header />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <section className="rounded-3xl border-4 border-orange-300 bg-white p-6">
            <Filters categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} search={search} setSearch={setSearch} />

            <p className="mb-6 font-bold text-green-500">{filteredProducts.length} items</p>

            {loading ? (
              <p>Henter produkter...</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>

          <CartSidebar />
        </div>
      </div>
    </main>
  );
}
