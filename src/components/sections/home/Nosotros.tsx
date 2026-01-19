"use client";

import React from "react";

export default function NosotrosHome() {
  return (
    <section
      className="relative py-20 sm:py-28"
      style={{ background: "var(--bg)" }}
      id="nosotros"
    >
      <div className="mx-auto grid max-w-2xl gap-10 px-6 lg:max-w-[var(--container)] lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        {/* =========================
            TEXTO (simple, home)
           ========================= */}
        <div className="max-w-xl">
          <p
            className="text-base font-semibold"
            style={{ color: "var(--accent-warm)" }}
          >
            Nosotros
          </p>

          <h2
            className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Un estudio chico.
            <br />
            Un estándar alto.
          </h2>

          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Diseñamos y desarrollamos eCommerce con foco en conversión, performance y operación.
            Lo simple, bien hecho.
          </p>

          <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Procesos claros, decisiones justificadas y acompañamiento real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/nosotros"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              style={{
                background: "color-mix(in srgb, var(--text) 8%, transparent)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              Conocé el estudio
              <span className="ml-2 text-lg leading-none" aria-hidden>
                →
              </span>
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "color-mix(in srgb, var(--text) 78%, transparent)",
              }}
            >
              Hablemos
            </a>
          </div>
        </div>

        {/* =========================
            VISUAL (un gesto, sin “principios”)
           ========================= */}
        <div className="relative">
          {/* halo suave de marca */}
          <div
            className="absolute -inset-6 rounded-[2rem]"
            style={{
              background:
                "radial-gradient(55% 55% at 30% 25%, color-mix(in srgb, var(--blue-deep) 18%, transparent), transparent 60%)," +
                "radial-gradient(55% 55% at 70% 70%, color-mix(in srgb, var(--green-deep) 14%, transparent), transparent 62%)",
              filter: "blur(16px)",
              opacity: 0.9,
            }}
            aria-hidden
          />

          <div
            className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            {/* header de la card */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "color-mix(in srgb, var(--muted) 85%, transparent)" }}
                >
                  Cómo trabajamos
                </p>
                <p className="mt-2 text-lg font-semibold" style={{ color: "var(--text)" }}>
                  Criterio antes que “features”.
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  Menos ruido, más intención: UX, performance y operación alineadas.
                </p>
              </div>

              <span
                className="mt-2 inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--accent-warm)" }}
                aria-hidden
              />
            </div>

            {/* checklist minimal (sin pills) */}
            <div className="mt-8 grid gap-3">
              <MiniRow
                dot="var(--blue-deep)"
                title="Claridad"
                desc="Arquitectura, jerarquía y microcopy."
              />
              <MiniRow
                dot="var(--green-deep)"
                title="Seguridad"
                desc="Bases técnicas sólidas y performance."
              />
              <MiniRow
                dot="var(--accent-warm)"
                title="Cercanía"
                desc="Acompañamiento real, sin vueltas."
              />
            </div>

            {/* mini “footer” */}
            <div
              className="mt-8 rounded-2xl p-4"
              style={{
                border: "1px solid var(--border)",
                background: "color-mix(in srgb, var(--surface) 70%, transparent)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                Entregables claros
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                checklist + roadmap + implementación (según el caso)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniRow({
  dot,
  title,
  desc,
}: {
  dot: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl p-4"
      style={{
        border: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--surface) 72%, transparent)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <span
        className="mt-1 h-2.5 w-2.5 rounded-full"
        style={{ background: dot }}
        aria-hidden
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}
