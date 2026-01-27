import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { CASES } from "../_data/cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const cs = CASES.find((c) => c.slug === slug);
  if (!cs) return notFound();

  return (
    <main className="pt-24 sm:pt-28">
      {/* HERO */}
      <section className="pb-12 sm:pb-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            {/* Left */}
            <div>
              <div
                className="text-base font-semibold"
                style={{
                  color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)",
                }}
              >
                Caso de estudio
              </div>

              <h1
                className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.03]"
                style={{ color: "var(--text)", fontFamily: "var(--font-work)" }}
              >
                {cs.title}
              </h1>

              <p
                className="mt-4 text-base sm:text-lg max-w-[60ch]"
                style={{ color: "var(--muted)" }}
              >
                {cs.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 80%, transparent)",
                    color: "var(--text)",
                  }}
                >
                  {cs.category}
                </span>

                <span
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 80%, transparent)",
                    color: "var(--text)",
                  }}
                >
                  {cs.client}
                </span>

                {cs.serviceTags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: "var(--border)",
                      background: "transparent",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ✅ Solo queda el secondary CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/nuestro-trabajo"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    background: "transparent",
                  }}
                >
                  Ver más casos
                </Link>
              </div>
            </div>

            {/* Right: highlights */}
            <div
              className="rounded-2xl border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--surface) 80%, transparent)",
              }}
            >
              <div className="grid grid-cols-3 gap-3">
                {cs.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border p-4"
                    style={{
                      borderColor: "var(--border)",
                      background: "color-mix(in srgb, var(--bg) 92%, transparent)",
                    }}
                  >
                    <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>
                      {h.label}
                    </div>
                    <div className="mt-1 text-lg font-semibold" style={{ color: "var(--text)" }}>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
               {/* Metricas de referencia iba aca*/}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COVER IMAGE */}
      <section className="pb-14">
        <Container>
          <div
            className="relative overflow-hidden rounded-3xl border"
            style={{
              borderColor: "var(--border)",
              background: "color-mix(in srgb, var(--surface) 70%, transparent)",
            }}
          >
            <div className="relative aspect-[16/8] w-full">
              <Image src={cs.images.cover} alt={`${cs.title} — portada`} fill priority className="object-cover" />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0.10) 100%)",
              }}
            />
          </div>
        </Container>
      </section>

      {/* BODY */}
      <section className="pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div className="lg:col-span-2">
              <h2
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--text)", fontFamily: "var(--font-work)" }}
              >
                Contexto y enfoque
              </h2>

              {/* ✅ AHORA VIENE DESDE cases.ts */}
              <div
                className="mt-5 space-y-4 text-sm sm:text-base max-w-[80ch]"
                style={{ color: "var(--muted)" }}
              >
                {cs.context.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {/* Desafío / Resultados */}
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 80%, transparent)",
                  }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                    Desafío
                  </div>
                  <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--text)" }}>
                    {cs.challenge}
                  </p>
                </div>

                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 80%, transparent)",
                  }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                    Resultados
                  </div>
                  <ul className="mt-3 space-y-2 text-sm sm:text-base" style={{ color: "var(--text)" }}>
                    {cs.outcome.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{
                            background: "color-mix(in srgb, var(--accent-warm) 80%, transparent)",
                          }}
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mid image */}
              <div className="mt-10">
                <div
                  className="relative overflow-hidden rounded-3xl border"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 70%, transparent)",
                  }}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={cs.images.mid} alt={`${cs.title} — detalle`} fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div className="mt-10">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--text)", fontFamily: "var(--font-work)" }}
                >
                  Qué hicimos
                </h3>
                <ul className="mt-4 space-y-3 text-sm sm:text-base max-w-[90ch]" style={{ color: "var(--muted)" }}>
                  {cs.approach.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{ background: "color-mix(in srgb, var(--accent) 70%, transparent)" }}
                      />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* End image */}
              <div className="mt-10">
                <div
                  className="relative overflow-hidden rounded-3xl border"
                  style={{
                    borderColor: "var(--border)",
                    background: "color-mix(in srgb, var(--surface) 70%, transparent)",
                  }}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image src={cs.images.end} alt={`${cs.title} — cierre`} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="pb-20">
        <Container>
          <div
            className="rounded-3xl border p-8 sm:p-10"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--surface) 92%, transparent), color-mix(in srgb, var(--bg) 92%, transparent))",
            }}
          >
            <div className="grid gap-6 md:grid-cols-[1fr,auto] md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Siguiente paso
                </div>
                <h3
                  className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
                  style={{ color: "var(--text)", fontFamily: "var(--font-work)" }}
                >
                  Te respondemos con próximos pasos claros.
                </h3>
                <p className="mt-2 text-sm sm:text-base max-w-[65ch]" style={{ color: "var(--muted)" }}>
                  Si querés una tienda rápida, limpia y diseñada para vender, coordinamos y definimos un plan de
                  ejecución.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition"
                  style={{
                    background: "color-mix(in srgb, var(--text) 92%, transparent)",
                    color: "var(--bg)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  Contacto
                </Link>

                <Link
                  href="/nuestro-trabajo"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    background: "transparent",
                  }}
                >
                  Volver a casos
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

