import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-neutral-100"
      style={{
       backgroundImage: "url('/retail.webp')",
       backgroundSize: "cover",
       backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-3xl px-8 py-16 md:px-16">
        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Find dine næste favoritter
        </h1>

        <p className="mb-8 max-w-xl text-base leading-7 text-neutral-200 md:text-lg">
          Udforsk vores udvalg af produkter i et enkelt og moderne univers.
          Find det, du mangler, og læg det hurtigt i kurven.
        </p>

        <Link
          href="/products"
          className="inline-flex border border-white px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-neutral-900"
        >
          Se produkter
        </Link>
      </div>
    </section>
  );
}