"use client";

import React from "react";

type Work = {
  id: string;
  title: string;
  desc: string; // 1 línea
  service: string; // pill
  // Reemplazá por tus imágenes reales (ideal: /public/work/xxx.jpg)
  img: { src: string; alt: string };
};

const works: Work[] = [
  {
    id: "1",
    title: "Too Much Bueno",
    desc: "Desarrollo de tienda online internacional",
    service: "Desarrollo eCommerce",
    img: { src: "/work/01.jpg", alt: "Proyecto eCommerce — estructura" },
  },
  {
    id: "2",
    title: "Maki",
    desc: "Desarrollo de tienda online desde cero",
    service: "Desarrollo ecommerce",
    img: { src: "/work/maki.png", alt: "Proyecto eCommerce — checkout" },
  },
  {
    id: "3",
    title: "Urufarma",
    desc: "Optimizacion.",
    service: "Optimización",
    img: { src: "/work/urufarma.png", alt: "Proyecto eCommerce — performance" },
  },
  {
    id: "4",
    title: "Cosplay Anime Store",
    desc: "Automatizaciones y conexiones cuando lo estándar no alcanza.",
    service: "Desarrollo ecommerce",
    img: { src: "/work/cosplay.png", alt: "Proyecto eCommerce — integraciones" },
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function NuestroTrabajoSimple() {
  return (
    <section className="relative py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-base font-semibold" style={{ color: "var(--accent-warm)" }}>
            Nuestro trabajo
          </p>

          <h2
            className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Proyectos recientes, hechos para vender.
          </h2>

          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Casos reales. Decisiones claras. Ejecución con criterio.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {works.map((w) => (
            <article
              key={w.id}
              className={cx(
                "group relative overflow-hidden rounded-2xl",
                "transition-transform duration-300 will-change-transform"
              )}
              style={{
                outline: "1px solid var(--border)",
                background: "color-mix(in srgb, var(--surface) 75%, transparent)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {/* Si usás next/image, reemplazá por <Image ... fill /> */}
                <img
                  src={w.img.src}
                  alt={w.img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  draggable={false}
                />

                {/* Overlay sutil premium */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 20%, color-mix(in srgb, var(--bg) 35%, transparent) 100%)",
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-7">
                {/* Pill servicio */}
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    border: "1px solid var(--border)",
                    background: "color-mix(in srgb, var(--surface) 85%, transparent)",
                    color: "color-mix(in srgb, var(--text) 85%, transparent)",
                  }}
                >
                  {w.service}
                </span>

                <h3
                  className="mt-3 text-xl font-semibold tracking-tight"
                  style={{ color: "var(--text)" }}
                >
                  {w.title}
                </h3>

                <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
                  {w.desc}
                </p>

                {/* micro-acción (opcional, no ensucia) */}
                <div className="mt-5 flex items-center gap-2">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "color-mix(in srgb, var(--text) 80%, transparent)" }}
                  >
                    Ver caso
                  </span>
                  <span
                    aria-hidden
                    className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--accent-warm)" }}
                  >
                    →
                  </span>
                </div>
              </div>

              {/* borde glow muy sutil */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px color-mix(in srgb, var(--accent-warm) 22%, transparent)",
                }}
              />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            ¿Querés ver más trabajos o hablar de tu tienda?
          </p>

          <a
            href="#casos"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold"
            style={{
              border: "1px solid var(--border)",
              background: "color-mix(in srgb, var(--surface) 82%, transparent)",
              color: "var(--text)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Ver más →
          </a>
        </div>
      </div>
    </section>
  );
}
