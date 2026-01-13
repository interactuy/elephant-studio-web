import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo full-bleed */}
      <div
        aria-hidden
        className="absolute inset-0 es-bg-drift"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%), radial-gradient(900px 500px at 80% 40%, color-mix(in srgb, var(--text) 10%, transparent), transparent 65%)",
        }}
      />

      {/* Luces animadas */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="es-blob-a absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 45%, transparent), transparent 65%)",
          }}
        />
        <div
          className="es-blob-b absolute -bottom-40 -right-32 h-[460px] w-[460px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--text) 14%, transparent), transparent 65%)",
          }}
        />
      </div>

<div
  aria-hidden
  className="pointer-events-none absolute inset-0 es-shimmer"
  style={{
    background:
      "linear-gradient(110deg, transparent 35%, color-mix(in srgb, var(--accent) 14%, transparent) 50%, transparent 65%)",
    mixBlendMode: "screen",
  }}
/>


      {/* Contenido */}
      <Container>
        <div className="relative min-h-[72vh] flex items-center py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="es-hero-enter text-xs sm:text-sm font-semibold tracking-wide uppercase"
              style={{ fontFamily: "var(--font-work)", color: "var(--muted)" }}
            >
              Ecommerce + soluciones digitales para pymes
            </p>

            {/* H1 */}
            <h1
              className="es-hero-enter es-hero-enter-delay-1 mt-3 text-4xl sm:text-6xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
            >
              Vendé online con orden,
              <br />
              claridad y soporte real.
            </h1>

            {/* Sub */}
            <p className="es-hero-enter es-hero-enter-delay-2 mt-6 text-base sm:text-lg max-w-2xl">
              Diseñamos, desarrollamos e integramos lo necesario para que tu tienda
              funcione rápido, convierta mejor y sea fácil de mantener.
            </p>

            {/* CTAs */}
            <div className="es-hero-enter es-hero-enter-delay-3 mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-work)",
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                Contacto
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl text-sm font-semibold border"
                style={{
                  fontFamily: "var(--font-work)",
                  background: "transparent",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
