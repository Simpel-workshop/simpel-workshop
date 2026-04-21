import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
