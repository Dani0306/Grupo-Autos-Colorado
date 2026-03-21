import Image from "next/image";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="relative inset-0 w-full h-dvh min-h-150 flex items-center overflow-hidden">
      {/* ── 1. BACKGROUND IMAGE ── */}
      <Image
        src="/car.jpg" // ← drop your image here
        alt="Grupo Autos Colorado hero"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* ── 2. OVERLAY LAYERS ── */}

      {/* Base dark veil — kills the raw brightness of the photo */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Left-to-right gradient — darkens the left where text lives,
          fades to transparent on the right so the car stays visible */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent" />

      {/* Bottom fade — grounds the section into the page below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      {/* ── 3. CONTENT ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase font-medium">
            <span className="block w-8 h-px bg-gold" />
            Compra Venta Automotriz
          </span>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-foreground">
            Excelencia <br />
            <span className="text-gold">En Movimiento.</span>
          </h1>

          {/* Subheading */}
          <p className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-md">
            Vehículos seleccionados con rigor técnico. La compra venta
            automotriz más exclusiva.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              fill
              text="Explorar Catálogo"
              className="w-50 md:w-60 h-12 md:h-15 text-xs! md:text-sm!"
            />
          </div>
        </div>
      </div>

      {/* ── 4. SCROLL INDICATOR (optional) ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-foreground-muted text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-linear-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
