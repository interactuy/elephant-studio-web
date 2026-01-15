"use client";

import React from "react";

export default function Confianza() {
  return (
    <section
      className="relative py-20 sm:py-28"
      style={{
        background: "var(--bg)", // viene de tokens.css y cambia con data-theme
        color: "var(--text)",
      }}
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        {/* Header (izquierda, como el ejemplo) */}
        <div className="max-w-2xl">
          <p
            className="text-base font-semibold"
            style={{ color: "var(--accent-warm)" }}
          >
            Confianza
          </p>

          <h2
            className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Claridad, seguridad y cercanía para sostener tu eCommerce.
          </h2>

          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Trabajamos con procesos visibles, decisiones respaldadas y acompañamiento real. Sin humo, sin
            promesas vacías: criterio y ejecución.
          </p>
        </div>

        {/* Cards (misma disposición: izquierda chica / centro grande / derecha mediana) */}
        <div className="mt-14 lg:mt-18">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            {/* LEFT — pequeña (blanca), baja */}
            <div className="lg:col-span-4 lg:mt-24">
              <div
                className="rounded-3xl p-8"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.35) inset",
                }}
              >
                <p className="text-2xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                  Roadmap claro
                </p>

                <p className="mt-4 text-sm font-semibold" style={{ color: "color-mix(in srgb, var(--text) 85%, transparent)" }}>
                  Qué se hace y cuándo
                </p>

                <p className="mt-3 text-sm leading-6" style={{ color: "var(--muted)" }}>
                  Auditoría, plan de acción y ejecución priorizada. Sin pasos ocultos.
                </p>
              </div>
            </div>

            {/* CENTER — grande (oscura), protagonista */}
            <div className="lg:col-span-4">
              <div
                className="rounded-3xl p-9 sm:p-10"
                style={{
                  minHeight: 360,
                  // verde de marca (light) + se mantiene premium en dark
                  background:
                    "linear-gradient(180deg, color-mix(in srgb, var(--green-deep) 92%, #000 8%), #05070c)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 28px 80px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                <p
                  className="text-3xl font-semibold tracking-tight"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  Decisiones seguras
                </p>

                <p
                  className="mt-6 text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Criterio respaldado por datos
                </p>

                <p className="mt-3 text-sm leading-6" style={{ color: "rgba(255,255,255,0.62)" }}>
                  Performance, UX y conversión medidos antes y después. Cambios con justificación, no con
                  intuición.
                </p>

                {/* Mini “stats” sin pills (solo bloques discretos, como apoyo visual) */}
                <div className="mt-10 grid grid-cols-2 gap-3">
                  {[
                    { k: "UX", v: "Auditado" },
                    { k: "Performance", v: "Medido" },
                    { k: "Conversión", v: "Iterada" },
                    { k: "Riesgo", v: "Controlado" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl px-4 py-3"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {x.k}
                      </p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.82)" }}>
                        {x.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — mediana (azul), un poco más baja que la central */}
            <div className="lg:col-span-4 lg:mt-10">
              <div
                className="rounded-3xl p-9 sm:p-10"
                style={{
                  minHeight: 300,
                  background:
                    "linear-gradient(180deg, color-mix(in srgb, var(--blue-deep) 92%, #000 8%), #070a12)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 26px 70px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                <p
                  className="text-3xl font-semibold tracking-tight"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  Acompañamiento real
                </p>

                <p className="mt-6 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.78)" }}>
                  Cercanía sin perder estructura
                </p>

                <p className="mt-3 text-sm leading-6" style={{ color: "rgba(255,255,255,0.62)" }}>
                  Comunicación directa, seguimiento constante y decisiones compartidas. No estás “solo con la
                  tienda”.
                </p>

                {/* Sin pills: lista simple, limpia */}
                <ul className="mt-8 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {["Respuesta rápida", "Check-ins", "Prioridades claras", "Iteración continua"].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--accent-warm)" }}
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Nota: en mobile apila bien; en desktop reproduce la composición (izq abajo, centro dominante, der media). */}
        </div>
      </div>
    </section>
  );
}
