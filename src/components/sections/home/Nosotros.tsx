import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NosotrosHome() {
  return (
    <section className="py-14 sm:py-16" style={{ background: "var(--bg)" }}>
      <Container>
        <div
          className="overflow-hidden rounded-3xl border"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: copy */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{
                  color:
                    "color-mix(in srgb, var(--accent-warm) 92%, transparent)",
                }}
              >
                Nosotros
              </div>

              <h3
                className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight"
                style={{ color: "var(--text)", fontFamily: "var(--font-work)" }}
              >
                Un estudio chico.
                <br />
                Un estándar alto.
              </h3>

              <div
                className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                <p>
                  Elephant Studio nació de una obsesión práctica: que una tienda
                  no se sienta como “algo lindo”, sino como un sistema confiable
                  para vender.
                </p>
                <p>
                  Menos capas, más criterio. Diseñamos para claridad, performance
                  y ejecución: decisiones justificadas, implementación prolija y
                  mejoras que se sostienen.
                </p>
              </div>

              <div className="mt-7">
               <Link
  href="/nosotros"
  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition
             border border-[var(--border)]
             text-[var(--text)]
             hover:bg-[var(--surface-hover)]
             active:scale-[0.98]"
>
  Conocer el estudio
  <span aria-hidden>→</span>
</Link>

              </div>
            </div>

            {/* Right: media */}
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[360px]">
              {/* Opción A: VIDEO (recomendado). Poné tu archivo en /public/video/nosotros.mp4 */}
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/img/nosotros-poster.jpg"
              >
                <source src="/video/nosotros.mp4" type="video/mp4" />
              </video>

              {/* Overlay sutil para que se vea premium en dark/light */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in srgb, var(--surface) 55%, transparent) 0%, transparent 45%)",
                }}
              />

              {/* Grain / glow mínimo */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(900px 380px at 30% 40%, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
