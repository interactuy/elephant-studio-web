import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== Fondo por theme (lee data-theme del <html>) ===== */}
      <div aria-hidden className="absolute inset-0">
        {/* LIGHT (default) */}
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-300
                     [html[data-theme=dark]_&]:opacity-0"
          style={{
            backgroundImage: "url(/hero/lightback.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* DARK */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300
                     [html[data-theme=dark]_&]:opacity-100"
          style={{
            backgroundImage: "url(/hero/darkback.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay sutil para contraste */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.22))",
          }}
        />
      </div>

      {/* ===== Contenido ===== */}
      <Container>
        <div className="relative min-h-[72vh] flex items-center py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="text-base font-semibold"
              style={{
                fontFamily: "var(--font-work)",
                color: "var(--accent-warm)",
                animationDelay: "0.1s",
              }}
            >
              ECOMMERCE & SOLUCIONES DIGITALES PARA PYMES
            </p>

            {/* Título */}
            <h1
              className="mt-4 text-4xl sm:text-6xl leading-[1.05] tracking-tight
                         opacity-0 animate-[es-fadeUp_0.6s_ease-out_forwards]"
              style={{
                fontFamily: "var(--font-work)",
                animationDelay: "0.2s",
              }}
            >
              Ecommerce para vender.
            </h1>

            {/* Descripción */}
            <p
              className="mt-6 text-base sm:text-lg max-w-2xl
                         opacity-0 animate-[es-fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.3s" }}
            >
              Desarrollamos tiendas online y soluciones digitales para pymes, claras, rápidas y fáciles de gestionar, con soporte real cuando lo necesitás.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-3
                         opacity-0 animate-[es-fadeUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Botón primario */}
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl
                           text-sm font-semibold transition-colors duration-200
                           hover:brightness-95"
                style={{
                  fontFamily: "var(--font-work)",
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                Contacto
              </Link>

              {/* Botón secundario */}
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center h-11 px-5 rounded-xl
                           border text-sm font-semibold transition-colors duration-200
                           hover:bg-[color-mix(in_srgb,var(--surface)_85%,transparent)]"
                style={{
                  fontFamily: "var(--font-work)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  background:
                    "color-mix(in srgb, var(--surface) 65%, transparent)",
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
