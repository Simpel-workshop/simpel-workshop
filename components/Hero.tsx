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
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }} />

      <div className="relative z-10 max-w-3xl px-8 py-16 md:px-16">
        <h1 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl"
        style={{ color: "#ffffff" }}>
          Find dine næste favoritter
        </h1>

        <p className="mb-8 max-w-xl text-base leading-7 md:text-lg"
         style={{ color: "#e5e5e5" }}>
          Udforsk vores udvalg af produkter i et enkelt og moderne univers.
          Find det, du mangler, og læg det hurtigt i kurven.
        </p>

       <Link
        href="/products"
        className="inline-flex px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition"
        style={{
         color: "#ffffff",
         border: "1px solid rgba(255,255,255,0.8)",}}
>
          Se produkter
        </Link>
      </div>
    </section>
  );
}