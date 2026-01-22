import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NosotrosPage() {
  return (
    <main className="pt-24 sm:pt-28">
      {/* HERO + STORY */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div
              className="text-xs font-semibold uppercase tracking-wide"
              style={{
                color: "color-mix(in srgb, var(--accent-warm) 88%, transparent)",
              }}
            >
              Nosotros
            </div>

            <h1
              className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl leading-[1.03]"
              style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
            >
              Un estudio chico.
              <br />
              Un estándar alto.
            </h1>

            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Elephant Studio nació de una obsesión práctica: que una tienda no se
              sienta como “algo lindo”, sino como un sistema confiable para vender.
              Sin fricción, sin improvisación, sin capas innecesarias.
            </p>

            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Trabajamos con foco en lo que mueve el negocio: estructura, claridad,
              performance y decisiones que se puedan sostener. Nos importa que el
              checkout cierre, que el sitio cargue rápido y que el equipo tenga un
              camino claro para operar y mejorar.
            </p>

            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Preferimos menos promesas y más criterio. Lo premium, para nosotros,
              no es “lujo”: es orden, intención y ejecución prolija.
            </p>

            {/* Subtle divider */}
            <div
              className="mt-10 h-px w-full"
              style={{ background: "color-mix(in srgb, var(--border) 85%, transparent)" }}
            />
          </div>
        </Container>
      </section>

      {/* MISSION / VISION (2 cards only) */}
      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-3xl p-7 sm:p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                Misión
              </div>
              <h2
                className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Hacer que vender online sea simple y sostenible.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Diseñamos y construimos eCommerce con foco en claridad, conversión y
                performance. Menos fricción para el cliente, más control para el negocio.
              </p>
            </div>

            <div
              className="rounded-3xl p-7 sm:p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                Visión
              </div>
              <h2
                className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Subir el estándar del eCommerce: orden, intención y criterio.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Que cada tienda se sienta premium porque funciona mejor: más rápida,
                más clara y más fácil de mantener a medida que crece.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3 BIG VALUES */}
      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <BigValue
              title="Claridad"
              text="Arquitectura, jerarquía y microcopy para que el usuario entienda y avance sin dudas."
              accent="var(--accent-warm)"
            />
            <BigValue
              title="Seguridad"
              text="Bases técnicas sólidas, performance real y decisiones justificadas que no se rompen con el tiempo."
              accent="var(--accent)"
            />
            <BigValue
              title="Cercanía"
              text="Comunicación directa, seguimiento y criterio para sostener mejoras sin vueltas ni humo."
              accent="color-mix(in srgb, var(--accent) 55%, var(--accent-warm))"
            />
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 sm:py-16">
        <Container>
          <div
            className="rounded-[28px] p-7 sm:p-10"
            style={{
              background:
                "linear-gradient(120deg, color-mix(in srgb, var(--accent) 12%, var(--bg)), color-mix(in srgb, var(--accent-warm) 10%, var(--bg)))",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Contacto
                </div>
                <h3
                  className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
                >
                  Contanos tu proyecto.
                </h3>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  Te respondemos con próximos pasos claros: alcance, tiempos y una recomendación honesta.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/servicios"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    background: "transparent",
                  }}
                >
                  Ver servicios
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{
                    background: "var(--accent)",
                    color: "white",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function BigValue({
  title,
  text,
  accent,
}: {
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-[28px] p-7 sm:p-8 min-h-[220px] flex flex-col"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: accent }}
        />
        <h3
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
        >
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        {text}
      </p>

      {/* subtle bottom line to feel “premium” */}
      <div
        className="mt-auto pt-6"
        style={{
          borderTop: "1px solid color-mix(in srgb, var(--border) 85%, transparent)",
        }}
      />
    </div>
  );
}
