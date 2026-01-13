import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== Fondo full-bleed tipo Radiant (pero Elephant) ===== */}
      <div aria-hidden className="absolute inset-0">
        {/* Base */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-base)" }}
        />

        {/* Aurora */}
<div
  className="absolute inset-0 es-aurora pointer-events-none"
  style={{
    background: `
      radial-gradient(900px 620px at 18% 18%, var(--hero-aurora-1), transparent 62%),
      radial-gradient(820px 560px at 70% 12%, var(--hero-aurora-2), transparent 62%),
      radial-gradient(860px 640px at 92% 70%, var(--hero-aurora-3), transparent 66%),
      radial-gradient(760px 520px at 30% 85%, var(--hero-warm), transparent 70%)
    `,
  }}
/>

{/* Brillo premium (entre aurora y grid) */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(900px 520px at 55% 18%, rgba(255,255,255,0.62), transparent 60%)",
    opacity: 0.32,
  }}
/>

{/* Foco suave en zona de contenido (tipo Radiant) */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(820px 520px at 32% 44%, rgba(255,255,255,0.55), transparent 62%)",
    opacity: 0.28,
  }}
/>

{/* Grid sutil (arriba) */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(to right, var(--hero-grid) 1px, transparent 1px),
      linear-gradient(to bottom, var(--hero-grid) 1px, transparent 1px)
    `,
    backgroundSize: "56px 56px",
    opacity: 0.55,
    maskImage: "radial-gradient(ellipse at 30% 20%, black 35%, transparent 75%)",
    WebkitMaskImage:
      "radial-gradient(ellipse at 30% 20%, black 35%, transparent 75%)",
  }}
/>


        {/* Vignette */}
        <div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(1200px 800px at 20% 10%, rgba(255,255,255,0.0) 35%, rgba(0,0,0,0.04) 100%)",
  }}
/>


      </div>

      {/* ===== Contenido ===== */}
      <Container>
        <div className="relative min-h-[72vh] flex items-center py-24">
          <div className="max-w-3xl">
            <p
              className="text-xs sm:text-sm font-semibold tracking-wide uppercase"
              style={{
                fontFamily: "var(--font-work)",
                color: "var(--muted)",
              }}
            >
              Ecommerce + soluciones digitales para pymes
            </p>

            <h1
              className="mt-4 text-4xl sm:text-6xl leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-work)" }}
            >
              Vendé online con orden,
              <br />
              claridad y soporte real.
            </h1>

            <p className="mt-6 text-base sm:text-lg max-w-2xl">
              Diseñamos, desarrollamos e integramos lo necesario para que tu tienda
              funcione rápido, convierta mejor y sea fácil de mantener.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
  className="inline-flex items-center justify-center h-11 px-5 rounded-xl border text-sm font-semibold transition-colors"
  style={{
    fontFamily: "var(--font-work)",
    borderColor: "var(--border)",
    color: "var(--text)",
    background: "color-mix(in srgb, var(--surface) 65%, transparent)",
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
