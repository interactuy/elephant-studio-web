"use client";

import React from "react";

const services = {
  dev: {
    title: "Desarrollo eCommerce",
    desc: "Diseñamos tiendas online rápidas y claras, pensadas para convertir y vender sin fricción desde el primer día.",
  },
  custom: {
    title: "Soluciones a medida",
    desc: "Desarrollos a medida, integraciones y automatizaciones cuando las soluciones estándar no alcanzan.",
  },
  opt: {
    title: "Optimización",
    desc: "Mejoramos performance, UX y conversión para que tu tienda rinda más con el mismo tráfico.",
  },
  audit: {
    title: "Auditoría",
    desc: "Analizamos tu tienda para detectar frenos de conversión y oportunidades claras, con un plan de acción priorizado.",
  },
  mgmt: {
    title: "Gestión",
    desc: "Acompañamiento mensual para implementar mejoras, iterar cambios y sostener resultados en el tiempo.",
  },
};

function Card({
  children,
  className = "",
  rounded = "none",
}: {
  children: React.ReactNode;
  className?: string;
  rounded?: "left" | "right" | "none";
}) {
  const roundedOuter =
    rounded === "left"
      ? "lg:rounded-l-[2rem]"
      : rounded === "right"
      ? "lg:rounded-r-[2rem]"
      : "";

  const roundedInner =
    rounded === "left"
      ? "lg:rounded-l-[calc(2rem+1px)]"
      : rounded === "right"
      ? "lg:rounded-r-[calc(2rem+1px)]"
      : "";

  return (
    <div className={`relative h-full ${className}`}>
      {/* Base “inset-px” como Tailwind Plus */}
      <div
        className={`absolute inset-px rounded-2xl ${roundedOuter}`}
        style={{
          background: "var(--surface)",
          boxShadow: "var(--shadow-sm)",
          outline: "1px solid var(--border)",
        }}
      />

      {/* Contenido */}
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] ${roundedInner}`}
      >
        {children}
      </div>
    </div>
  );
}

function Stagger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <style>{`
        @keyframes es-fade-up {
          from { opacity: 0; transform: translate3d(0, 10px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .es-enter {
          opacity: 0;
          animation: es-fade-up 520ms ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .es-enter { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
      <div className={className}>{children}</div>
    </>
  );
}

export default function Servicios() {
  return (
    <section
      className="relative py-20 sm:py-28"
      style={{
        background: "var(--bg)", // cambia con data-theme
      }}
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        {/* Header (izquierda) */}
        <div className="max-w-2xl">
          <p
            className="text-base font-semibold"
            style={{ color: "var(--accent-warm)" }}
          >
            Servicios
          </p>

          <h2
            className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Ecommerce y soluciones digitales.
          </h2>

          <p className="mt-4 text-base leading-relaxed">
            Un enfoque integral: diseñamos tiendas online, desarrollamos soluciones a medida y optimizamos sistemas digitales para que tu negocio funcione mejor.
          </p>
        </div>

        {/* Bento */}
        <Stagger>
          <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr">
            {/* 1) Desarrollo eCommerce — grande izquierda */}
            <div className="es-enter [animation-delay:40ms] h-full lg:row-span-2">
              <Card rounded="left">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {services.dev.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6">
                    {services.dev.desc}
                  </p>
                </div>

                {/* Visual grande (mock) */}
                <div className="relative min-h-[26rem] w-full grow">
                  <div
                    className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[2.2rem]"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(15,23,42,0.03), rgba(15,23,42,0.00))",
                      border: "1px solid var(--border)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
                    }}
                  >
                    {/* Top bar */}
                    <div
                      className="flex items-center justify-between px-5 py-4"
                      style={{
                        background:
                          "color-mix(in srgb, var(--surface) 70%, transparent)",
                        borderBottom: "1px solid var(--border)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: "rgba(0,0,0,0.15)" }}
                        />
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: "rgba(0,0,0,0.08)" }}
                        />
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        Checkout &amp; UX
                      </span>
                    </div>

                    <div className="p-6">
                      {/* KPI row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { k: "CVR", v: "+18%" },
                          { k: "Speed", v: "1.1s" },
                          { k: "AOV", v: "+9%" },
                        ].map((x) => (
                          <div
                            key={x.k}
                            className="rounded-xl p-3"
                            style={{
                              border: "1px solid var(--border)",
                              background:
                                "color-mix(in srgb, var(--surface) 80%, transparent)",
                            }}
                          >
                            <p
                              className="text-[10px] uppercase tracking-wide"
                              style={{ color: "var(--muted)" }}
                            >
                              {x.k}
                            </p>
                            <p
                              className="mt-1 text-sm font-semibold"
                              style={{ color: "var(--text)" }}
                            >
                              {x.v}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bars */}
                      <div
                        className="mt-5 rounded-xl p-4"
                        style={{
                          border: "1px solid var(--border)",
                          background:
                            "color-mix(in srgb, var(--surface) 80%, transparent)",
                        }}
                      >
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text)" }}
                        >
                          Performance budget
                        </p>
                        <div className="mt-3 flex gap-1.5">
                          {Array.from({ length: 18 }).map((_, i) => (
                            <span
                              key={i}
                              className="w-2 rounded-full"
                              style={{
                                height: `${10 + ((i * 7) % 18)}px`,
                                background:
                                  i === 13
                                    ? "var(--accent-warm)"
                                    : "rgba(0,0,0,0.18)",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Bullets */}
                      <div className="mt-5 grid gap-2">
                        {[
                          "Arquitectura limpia",
                          "Secciones orientadas a venta",
                          "Checkout optimizado",
                        ].map((t) => (
                          <div
                            key={t}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
                            style={{
                              border: "1px solid var(--border)",
                              background:
                                "color-mix(in srgb, var(--surface) 80%, transparent)",
                              color: "var(--text)",
                            }}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: "var(--accent-warm)" }}
                            />
                            <span
                              style={{
                                color:
                                  "color-mix(in srgb, var(--text) 75%, transparent)",
                              }}
                            >
                              {t}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 2) Auditoría — arriba centro */}
            <div className="es-enter [animation-delay:120ms] h-full lg:col-start-2 lg:row-start-1">
              <Card className="h-full">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                  <p
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {services.audit.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6">
                    {services.audit.desc}
                  </p>

                  <div
                    className="mt-6 rounded-2xl p-4"
                    style={{
                      border: "1px solid var(--border)",
                      background:
                        "color-mix(in srgb, var(--surface) 70%, transparent)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        Checklist + entregable
                      </p>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          background: "var(--accent-warm)",
                          color: "#111827",
                        }}
                      >
                      10 días
                      </span>
                    </div>
                    <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                      issues + quick wins + roadmap
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* 3) Optimización — arriba derecha */}
            <div className="es-enter [animation-delay:200ms] h-full lg:col-start-3 lg:row-start-1">
              <Card rounded="right" className="h-full">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {services.opt.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6">
                    {services.opt.desc}
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 pt-6 pb-10 sm:px-10 lg:pb-6">
                  <div
                    className="w-full max-w-sm rounded-2xl p-5"
                    style={{
                      border: "1px solid var(--border)",
                      background:
                        "color-mix(in srgb, var(--surface) 70%, transparent)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        1.04s
                      </p>
                      <span
                        className="rounded-full px-2 py-1 text-xs"
                        style={{
                          background:
                            "color-mix(in srgb, var(--text) 8%, transparent)",
                          color: "var(--muted)",
                        }}
                      >
                        -22%
                      </span>
                    </div>
                    <div className="mt-4 flex gap-1.5">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-2 rounded-full"
                          style={{
                            height: `${18 + ((i * 9) % 22)}px`,
                            background:
                              i > 11
                                ? "color-mix(in srgb, var(--blue-deep) 30%, transparent)"
                                : "color-mix(in srgb, var(--blue-deep) 65%, transparent)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 4) Gestión — abajo centro */}
            <div className="es-enter [animation-delay:280ms] h-full lg:col-start-2 lg:row-start-2">
              <Card className="h-full">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {services.mgmt.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6">
                    {services.mgmt.desc}
                  </p>
                </div>

                <div className="flex flex-1 items-center px-8 py-7 sm:px-10 lg:pb-6">
                  <div
                    className="w-full rounded-2xl p-5"
                    style={{
                      border: "1px solid var(--border)",
                      background:
                        "color-mix(in srgb, var(--surface) 70%, transparent)",
                    }}
                  >
                    <div className="space-y-3">
                      {[
                        { t: "Semana 1", d: "UX + contenido" },
                        { t: "Semana 2", d: "Performance" },
                        { t: "Semana 3", d: "Landing / campaña" },
                        { t: "Semana 4", d: "Iteración + métricas" },
                      ].map((x) => (
                        <div key={x.t} className="flex items-start gap-3">
                          <span
                            className="mt-1 h-2.5 w-2.5 rounded-full"
                            style={{ background: "var(--accent-warm)" }}
                          />
                          <div>
                            <p
                              className="text-sm font-semibold"
                              style={{ color: "var(--text)" }}
                            >
                              {x.t}
                            </p>
                            <p className="text-xs" style={{ color: "var(--muted)" }}>
                              {x.d}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 5) Soluciones a medida — abajo derecha */}
            <div className="es-enter [animation-delay:360ms] h-full lg:col-start-3 lg:row-start-2">
              <Card rounded="right" className="h-full">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p
                    className="mt-2 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {services.custom.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6">
                    {services.custom.desc}
                  </p>
                </div>

                <div className="relative mt-6 flex-1 px-8 pb-8 sm:px-10">
                  <div
                    className="h-[10.5rem] w-full overflow-hidden rounded-2xl"
                    style={{
                      background: "#000",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                      outline: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                      className="flex"
                    >
                      <div
                        className="flex text-xs font-medium"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        <div
                          className="px-4 py-2"
                          style={{
                            borderRight: "1px solid rgba(255,255,255,0.08)",
                            borderBottom: "1px solid rgba(255,255,255,0.16)",
                            background: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.92)",
                          }}
                        >
                          Integrations.ts
                        </div>
                        <div
                          className="px-4 py-2"
                          style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          Automations.ts
                        </div>
                      </div>
                    </div>

                    <div
                      className="px-4 pt-4 font-mono text-[11px] leading-5"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      <p>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>map</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>(</span>
                        <span style={{ color: "var(--accent-warm)" }}>
                          {'"order.created"'}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>)</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>.</span>
                        <span style={{ color: "rgba(255,255,255,0.92)" }}>then</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>(</span>
                        <span style={{ color: "rgba(255,255,255,0.92)" }}>webhook</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>(</span>
                        <span style={{ color: "var(--accent-warm)" }}>{'"/crm"'}</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>)</span>
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>)</span>
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {[
                          { k: "Integración", v: "ERP / CRM" },
                          { k: "Automatización", v: "Post-compra" },
                        ].map((x) => (
                          <div
                            key={x.k}
                            className="rounded-xl p-2.5"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                          >
                            <p
                              className="text-[10px] uppercase tracking-wide"
                              style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                              {x.k}
                            </p>
                            <p
                              className="mt-1 text-xs font-semibold"
                              style={{ color: "rgba(255,255,255,0.92)" }}
                            >
                              {x.v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
