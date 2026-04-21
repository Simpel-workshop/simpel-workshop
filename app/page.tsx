import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="rounded-3xl border-4 border-black bg-[#f5f5f5] p-4 min-h-screen">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
