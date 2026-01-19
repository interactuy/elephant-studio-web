"use client";

import React from "react";

export default function CTAContacto() {
  return (
    <section id="contacto" className="relative py-16 sm:py-20" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 sm:px-12 sm:py-16"
          style={{
            background: "var(--cta-bg)",
            color: "var(--cta-text)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.18), 0 12px 30px rgba(0,0,0,0.08)",
            border: "1px solid var(--cta-border)",
          }}
        >
          {/* glows */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent-warm) 18%, transparent), transparent 62%)",
              filter: "blur(16px)",
              opacity: 0.9,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, color-mix(in srgb, var(--blue-deep) 18%, transparent), transparent 62%)",
              filter: "blur(18px)",
              opacity: 0.75,
            }}
            aria-hidden
          />

          {/* header */}
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--cta-muted)" }}>
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Contanos tu proyecto</h2>

            <div className="mt-6">
              <a
                href="https://wa.me/59800000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
                style={{
                  background: "var(--cta-btn-bg)",
                  color: "var(--cta-btn-text)",
                  border: "1px solid var(--cta-btn-border)",
                }}
              >
                Hablar por WhatsApp
                <span className="ml-2 text-lg leading-none" aria-hidden>
                  →
                </span>
              </a>
            </div>

            <div className="mt-10 h-px w-full" style={{ background: "var(--cta-divider)" }} aria-hidden />
          </div>

          {/* info grid */}
          <div className="relative mt-10 grid gap-10 sm:grid-cols-3">
            {/* Columna base: link alineado abajo */}
            <div className="flex min-h-[150px] flex-col">
              <p className="text-sm font-semibold">Mail</p>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--cta-muted)" }}>
                Escribinos y te respondemos rápido.
              </p>
              <a
                href="mailto:hola@elephant.studio"
                className="mt-auto inline-block pt-6 text-sm font-semibold"
                style={{ color: "var(--cta-link)" }}
              >
                hola@elephant.studio
              </a>
            </div>

            <div className="flex min-h-[150px] flex-col">
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--cta-muted)" }}>
                Para coordinar, estimar alcance y tiempos.
              </p>
              <a
                href="https://wa.me/59800000000"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block pt-6 text-sm font-semibold"
                style={{ color: "var(--cta-link)" }}
              >
                +598 00 000 000
              </a>
            </div>

            <div className="flex min-h-[150px] flex-col">
              <p className="text-sm font-semibold">Dirección</p>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--cta-muted)" }}>
                Montevideo, Uruguay
                <br />
                (reuniones con agenda)
              </p>
              <a
                href="https://maps.google.com/?q=Montevideo%20Uruguay"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block pt-6 text-sm font-semibold"
                style={{ color: "var(--cta-link)" }}
              >
                Ver en Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* tokens locales CTA */}
      <style>{`
        :root {
          /* Light => panel oscuro */
          --cta-bg: #0b0f14;
          --cta-text: rgba(255,255,255,0.92);
          --cta-muted: rgba(255,255,255,0.62);
          --cta-border: rgba(255,255,255,0.08);
          --cta-divider: rgba(255,255,255,0.10);

          --cta-link: color-mix(in srgb, var(--accent-warm) 78%, white);

          --cta-btn-bg: rgba(255,255,255,0.92);
          --cta-btn-text: #0b0f14;
          --cta-btn-border: rgba(255,255,255,0.0);
        }

        [data-theme="dark"] {
          /* Dark => panel claro (cream de tu paleta) */
          --cta-bg: var(--cream);
          --cta-text: #0f172a;
          --cta-muted: color-mix(in srgb, #0f172a 55%, transparent);
          --cta-border: rgba(15,23,42,0.10);
          --cta-divider: rgba(15,23,42,0.10);

          --cta-link: color-mix(in srgb, var(--blue-deep) 72%, #0f172a);

          /* Botón oscuro (contraste en panel claro) */
          --cta-btn-bg: #0b0f14;
          --cta-btn-text: rgba(255,255,255,0.92);
          --cta-btn-border: rgba(0,0,0,0.0);
        }
      `}</style>
    </section>
  );
}
