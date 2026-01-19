// src/app/nosotros/page.tsx
import Link from "next/link";
import Container from "@/components/layout/Container";

type Stat = { label: string; value: string; desc: string; tone?: "dark" | "accent" | "light" };

const STATS: Stat[] = [
  {
    label: "Proyectos entregados",
    value: "40+",
    desc: "Implementaciones, optimizaciones y auditorías con foco en conversión y performance.",
    tone: "light",
  },
  {
    label: "Time-to-launch",
    value: "7–21 días",
    desc: "Dependiendo del alcance. Priorizamos orden y velocidad sin sacrificar calidad.",
    tone: "dark",
  },
  {
    label: "Mejoras típicas",
    value: "-20% a -45%",
    desc: "En tiempos de carga cuando hay cuellos claros (medido antes/después).",
    tone: "accent",
  },
];

const TIMELINE = [
  {
    k: "1",
    t: "Diagnóstico rápido",
    d: "Entendemos contexto, stack, métricas y fricciones. Definimos el objetivo real.",
  },
  { k: "2", t: "Roadmap claro", d: "Priorizamos impacto vs esfuerzo. Sin humo: qué, por qué y cuándo." },
  {
    k: "3",
    t: "Ejecución prolija",
    d: "Implementamos con criterio, QA básico y medición. Dejamos todo mantenible.",
  },
  { k: "4", t: "Sostén y mejora", d: "Iteramos: performance, UX, checkout, tracking, automatizaciones y más." },
];

function SoftMedia({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border",
        "bg-[color:var(--surface)]",
        className,
      ].join(" ")}
      style={{ borderColor: "var(--border)" }}
    >
      {/* “foto” placeholder premium */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 420px at 25% 20%, var(--hero-aurora-1), transparent 55%), radial-gradient(900px 360px at 80% 40%, var(--hero-aurora-2), transparent 60%), radial-gradient(700px 300px at 45% 90%, var(--hero-warm), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.02))",
          mixBlendMode: "overlay",
          opacity: 0.6,
        }}
      />
      <div className="relative p-5">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "color-mix(in srgb, var(--accent-warm) 85%, transparent)" }}
          />
          <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>
            Elephant Studio
          </span>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border bg-white/40 p-3 backdrop-blur" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>Criterio</div>
            <div className="mt-1 text-[11px]" style={{ color: "var(--muted)" }}>Roadmap + ejecución</div>
          </div>
          <div className="rounded-2xl border bg-white/40 p-3 backdrop-blur" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>UX</div>
            <div className="mt-1 text-[11px]" style={{ color: "var(--muted)" }}>Checkout sin fricción</div>
          </div>
          <div className="rounded-2xl border bg-white/40 p-3 backdrop-blur" style={{ borderColor: "var(--border)" }}>
            <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>Performance</div>
            <div className="mt-1 text-[11px]" style={{ color: "var(--muted)" }}>Medido, no intuición</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ s }: { s: Stat }) {
  const tone = s.tone ?? "light";

  const base =
    "rounded-3xl border p-6 sm:p-7 shadow-sm transition-transform duration-200 will-change-transform hover:-translate-y-0.5";

  const stylesByTone: Record<string, { bg: string; border: string; text: string; muted: string }> = {
    light: { bg: "var(--surface)", border: "var(--border)", text: "var(--text)", muted: "var(--muted)" },
    dark: {
      bg: "linear-gradient(180deg, rgba(8,51,68,0.30), rgba(8,51,68,0.12))",
      border: "color-mix(in srgb, var(--border) 65%, transparent)",
      text: "var(--text)",
      muted: "var(--muted)",
    },
    accent: {
      bg: "linear-gradient(180deg, rgba(245,166,35,0.20), rgba(245,166,35,0.06))",
      border: "color-mix(in srgb, var(--accent-warm) 30%, var(--border))",
      text: "var(--text)",
      muted: "var(--muted)",
    },
  };

  const st = stylesByTone[tone];

  return (
    <div className={base} style={{ background: st.bg, borderColor: st.border }}>
      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: st.muted }}>
        {s.label}
      </div>
      <div className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: st.text }}>
        {s.value}
      </div>
      <p className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: st.muted }}>
        {s.desc}
      </p>
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <main className="pt-0" style={{ background: "var(--bg)" }}>
      {/* HERO */}
      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)" }}
              >
                Nosotros
              </div>

              <h1
                className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.03]"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Un estudio chico.
                <br />
                Un estándar alto.
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                Diseñamos y desarrollamos eCommerce con foco en conversión, performance y operación. Lo simple,
                bien hecho. Procesos claros, decisiones justificadas y acompañamiento real.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                  style={{
                    background: "var(--accent)",
                    color: "white",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  Contacto
                </Link>

                <Link
                  href="/nuestro-trabajo"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold border"
                  style={{ borderColor: "var(--border)", color: "var(--text)", background: "transparent" }}
                >
                  Ver proyectos
                </Link>
              </div>

              {/* mini bullets */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Claros desde el día 1", d: "Scope, tiempos y entregables visibles." },
                  { t: "Medimos el impacto", d: "Antes/después en UX, performance y checkout." },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  >
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {x.t}
                    </div>
                    <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                      {x.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero media (placeholder, sin Next/Image) */}
            <div className="relative">
              {/* diagonal subtle */}
              <div
                aria-hidden
                className="absolute -inset-6 hidden lg:block"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 0%, color-mix(in srgb, var(--accent) 10%, transparent) 40%, transparent 70%)",
                  borderRadius: 40,
                  transform: "skewX(-10deg)",
                  opacity: 0.75,
                }}
              />
              <SoftMedia className="min-h-[280px] sm:min-h-[420px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)" }}
              >
                Cómo trabajamos
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                Criterio antes que “features”.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Menos ruido, más intención: UX, performance y operación alineadas. Construimos para vender hoy y
                sostener mañana.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Claridad", d: "Arquitectura, jerarquía y microcopy." },
                { t: "Seguridad", d: "Bases técnicas sólidas y performance." },
                { t: "Cercanía", d: "Acompañamiento real, sin vueltas." },
                { t: "Entregables claros", d: "Checklist + roadmap + implementación (según el caso)." },
              ].map((i) => (
                <div
                  key={i.t}
                  className="rounded-3xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background:
                          i.t === "Cercanía"
                            ? "color-mix(in srgb, var(--accent-warm) 85%, transparent)"
                            : "color-mix(in srgb, var(--accent) 65%, transparent)",
                      }}
                    />
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {i.t}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {i.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* IMAGE GRID (placeholders) */}
      <section className="pb-14 sm:pb-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="max-w-md">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                  Equipo y foco.
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Trabajamos como un equipo compacto: decisiones rápidas, ejecución prolija y criterio para priorizar lo
                  que mueve la aguja.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
              <SoftMedia className="min-h-[240px]" />
              <SoftMedia className="min-h-[240px]" />
              <div className="sm:col-span-2">
                <SoftMedia className="min-h-[260px]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                Resultados medibles, ejecución prolija.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Nos gusta el diseño, pero más nos gusta que funcione. Decisiones justificadas, mejoras visibles y un
                sistema que se pueda sostener.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
              <div className="sm:col-span-1">
                <StatCard s={STATS[0]} />
              </div>
              <div className="sm:col-span-1">
                <StatCard s={STATS[1]} />
              </div>
              <div className="sm:col-span-1">
                <StatCard s={STATS[2]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[420px,1fr] lg:items-start">
            <div className="max-w-md">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)" }}
              >
                Proceso
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                Una forma de trabajar sin sorpresas.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                Estructura suficiente para dar seguridad; flexibilidad suficiente para adaptarnos al negocio.
              </p>
            </div>

            <div className="grid gap-4">
              {TIMELINE.map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl border p-5 sm:p-6"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold"
                      style={{
                        borderColor: "var(--border)",
                        background: "transparent",
                        color: "var(--text)",
                      }}
                    >
                      {s.k}
                    </div>
                    <div>
                      <div className="text-base font-semibold" style={{ color: "var(--text)" }}>
                        {s.t}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        {s.d}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA to Jobs */}
      <section className="py-14 sm:py-16">
        <Container>
          <div
            className="rounded-[28px] border p-7 sm:p-10"
            style={{
              borderColor: "var(--border)",
              background:
                "radial-gradient(900px 380px at 20% 30%, var(--hero-aurora-2), transparent 55%), radial-gradient(900px 420px at 80% 40%, var(--hero-aurora-1), transparent 60%), var(--surface)",
            }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr,420px] lg:items-center">
              <div className="max-w-xl">
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Jobs
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                  Sumate a proyectos que tienen impacto real.
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Buscamos gente que valore el criterio, la prolijidad y la mejora continua. Si te gusta construir para
                  vender, probablemente encajes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/jobs"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                  style={{ background: "var(--accent)", color: "white", boxShadow: "var(--shadow-sm)" }}
                >
                  Ver posiciones
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold border"
                  style={{ borderColor: "var(--border)", color: "var(--text)", background: "transparent" }}
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div
            className="rounded-[28px] border p-8 sm:p-10"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%), var(--surface)",
            }}
          >
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
              <div className="max-w-xl">
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Contacto
                </div>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                  Contanos tu proyecto.
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Te respondemos con próximos pasos claros. Si ya tenés tienda, también podemos auditar y mejorar.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold"
                  style={{ background: "var(--accent)", color: "white", boxShadow: "var(--shadow-sm)" }}
                >
                  Contacto
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold border"
                  style={{ borderColor: "var(--border)", color: "var(--text)", background: "transparent" }}
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
