import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[500px] items-center rounded-2xl border-2 border-gray-300 bg-white px-12">
      <div>
        <h1 className="mb-6 text-6xl font-extrabold">Lorem Ipsum</h1>
        <Link href="/products" className="inline-block rounded-2xl border-4 border-sky-300 px-6 py-3 text-2xl font-bold text-sky-500 transition hover:bg-sky-50">
          Se produkter
        </Link>
      </div>
    </section>
  );
}
