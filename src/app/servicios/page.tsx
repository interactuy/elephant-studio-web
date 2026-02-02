// src/app/servicios/page.tsx
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  desc: string;
  href: string; // pagina del servicio
  ui: "checkout" | "checklist" | "chart" | "timeline" | "code";
};

const SERVICES: Service[] = [
  {
    id: "desarrollo",
    title: "Desarrollo eCommerce",
    desc:
      "Diseñamos tiendas online rápidas y claras, pensadas para convertir desde el primer día. UX, performance y checkout sin fricción, con una arquitectura limpia y escalable para vender mejor y crecer con orden.",
    href: "/contacto",
    ui: "checkout",
  },
  {
    id: "auditoria",
    title: "Auditoría",
    desc:
      "Analizamos UX, performance y conversión para detectar frenos reales y oportunidades claras. Entregamos un plan de acción priorizado con quick wins y un roadmap claro para ejecutar con criterio.",
    href: "/contacto",
    ui: "checklist",
  },
  {
    id: "optimizacion",
    title: "Optimización",
    desc:
      "Mejoras medibles en performance, UX y conversión para que tu tienda rinda más con el mismo tráfico. Reducimos fricción y optimizamos resultados sin cambiar tu marca.",
    href: "/contacto",
    ui: "chart",
  },
  {
    id: "gestion",
    title: "Gestión",
    desc:
      "Acompañamiento mensual para ejecutar mejoras, iterar cambios y sostener resultados. Orden, seguimiento y avance constante, sin que tengas que estar encima.",
    href: "/contacto",
    ui: "timeline",
  },
  {
    id: "amedida",
    title: "Soluciones a medida",
    desc:
      "Integraciones, automatizaciones y desarrollo específico cuando lo estándar no alcanza. Conectamos herramientas y armamos flujos a medida para resolver procesos reales con lógica clara y consistente.",
    href: "/contacto",
    ui: "code",
  },
];

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[min(var(--container),calc(100%-2rem))] ${className}`}>
      {children}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold"
      style={{
        background: "color-mix(in srgb, var(--text) 88%, transparent)",
        color: "var(--bg)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
      }}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold border"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--surface) 72%, transparent)",
        color: "var(--text)",
      }}
    >
      {children}
    </Link>
  );
}

/* ---------------------------
   UI “Home-like” mocks
---------------------------- */

function UiWrap({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border p-4 sm:p-5 w-full"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 55%, transparent)",
      }}
    >
      {children}
    </div>
  );
}

function UiCheckout() {
  return (
    <UiWrap>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <div className="ml-auto text-xs" style={{ color: "var(--muted)" }}>
          Checkout & UX
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { k: "CVR", v: "+18%" },
          { k: "SPEED", v: "1.1s" },
          { k: "AOV", v: "+9%" },
        ].map((x) => (
          <div
            key={x.k}
            className="rounded-xl border p-3 text-center"
            style={{
              borderColor: "var(--border)",
              background: "color-mix(in srgb, var(--surface) 82%, transparent)",
            }}
          >
            <div className="text-[10px] font-semibold" style={{ color: "var(--muted)" }}>
              {x.k}
            </div>
            <div className="mt-1 text-xs font-semibold" style={{ color: "var(--text)" }}>
              {x.v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border p-3" style={{ borderColor: "var(--border)" }}>
        <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>
          Performance budget
        </div>
        <div className="mt-2 flex items-end gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-sm"
              style={{
                height: 6 + ((i * 7) % 18),
                background:
                  i === 12
                    ? "color-mix(in srgb, var(--accent-warm) 85%, transparent)"
                    : "color-mix(in srgb, var(--muted) 35%, transparent)",
              }}
            />
          ))}
        </div>
      </div>
    </UiWrap>
  );
}

function UiChecklist() {
  return (
    <UiWrap>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
          Checklist + entregable
        </div>
        <span
          className="inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold border"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--accent-warm) 22%, transparent)",
            color: "var(--text)",
          }}
        >
          7–10 días
        </span>
      </div>
      <div className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
        issues + quick wins + roadmap
      </div>

      <div className="mt-4 space-y-2">
        {[
          { t: "UX: fricciones", p: "P1" },
          { t: "Performance: cuellos", p: "P2" },
          { t: "CRO: oportunidades", p: "P3" },
        ].map((x) => (
          <div
            key={x.t}
            className="flex items-center justify-between rounded-xl border px-3 py-2"
            style={{
              borderColor: "var(--border)",
              background: "color-mix(in srgb, var(--surface) 78%, transparent)",
            }}
          >
            <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>
              {x.t}
            </div>
            <div className="text-[10px]" style={{ color: "var(--muted)" }}>
              {x.p}
            </div>
          </div>
        ))}
      </div>
    </UiWrap>
  );
}

function UiChart() {
  return (
    <UiWrap>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
          1.04s
        </div>
        <span
          className="inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold border"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--surface) 85%, transparent)",
            color: "var(--muted)",
          }}
        >
          -22%
        </span>
      </div>

      <div className="mt-4 flex items-end gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="w-2 rounded-sm"
            style={{
              height: 10 + ((i * 9) % 26),
              background: "color-mix(in srgb, var(--muted) 38%, transparent)",
            }}
          />
        ))}
      </div>
    </UiWrap>
  );
}

function UiTimeline() {
  return (
    <UiWrap>
      <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
        Ritmo mensual
      </div>
      <div className="mt-3 space-y-3">
        {[
          { w: "Semana 1", t: "UX + contenido" },
          { w: "Semana 2", t: "Performance" },
          { w: "Semana 3", t: "Landing / campaña" },
          { w: "Semana 4", t: "Iteración + métricas" },
        ].map((x) => (
          <div key={x.w} className="flex items-start gap-3">
            <span
              className="mt-1 inline-flex h-2 w-2 rounded-full"
              style={{ background: "var(--accent-warm)" }}
              aria-hidden
            />
            <div
              className="rounded-xl border px-3 py-2 w-full"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--surface) 78%, transparent)",
              }}
            >
              <div className="text-xs font-semibold" style={{ color: "var(--text)" }}>
                {x.w}
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                {x.t}
              </div>
            </div>
          </div>
        ))}
      </div>
    </UiWrap>
  );
}

function UiCode() {
  return (
    <UiWrap>
      <div className="flex flex-wrap gap-2">
        {["Integrations.ts", "Automations.ts"].map((t, i) => (
          <span
            key={t}
            className="inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold border"
            style={{
              borderColor: "var(--border)",
              background: i === 0 ? "color-mix(in srgb, var(--surface) 82%, transparent)" : "transparent",
              color: "color-mix(in srgb, var(--text) 78%, transparent)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className="mt-4 rounded-xl border p-4 font-mono text-[11px] leading-relaxed"
        style={{
          borderColor: "var(--border)",
          background: "rgba(0,0,0,0.70)",
          color: "rgba(255,255,255,0.88)",
        }}
      >
        <div>
          map(<span style={{ color: "rgba(245,166,35,0.95)" }}>"order.created"</span>)
          .then(webhook)
        </div>
        <div className="mt-2 opacity-80">Integración • Automatización • Post-compra</div>
      </div>
    </UiWrap>
  );
}

function ServiceUI({ kind }: { kind: Service["ui"] }) {
  switch (kind) {
    case "checkout":
      return <UiCheckout />;
    case "checklist":
      return <UiChecklist />;
    case "chart":
      return <UiChart />;
    case "timeline":
      return <UiTimeline />;
    case "code":
      return <UiCode />;
    default:
      return null;
  }
}

function ServiceCard({ s, reverse }: { s: Service; reverse?: boolean }) {
  return (
    <div
      className="rounded-3xl border"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--surface) 80%, transparent)",
        boxShadow: "0 18px 60px rgba(0,0,0,0.08)",
      }}
    >
      {/* Alto uniforme */}
      <div className="p-6 sm:p-8 lg:p-10 min-h-[280px] lg:min-h-[360px]">
        <div
          className={`grid gap-8 lg:grid-cols-2 items-stretch ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* UI side */}
          <div className="h-full flex">
            <div className="w-full h-full flex items-center">
              <ServiceUI kind={s.ui} />
            </div>
          </div>

          {/* Content side */}
          <div className="h-full flex flex-col">
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
            >
              {s.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
              {s.desc}
            </p>

            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              <PrimaryButton href="/contacto">Contacto</PrimaryButton>
              <SecondaryButton href={s.href}>Ver servicio</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
        >
          Proceso
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Entender", d: "Contexto, objetivos y fricciones reales del negocio." },
            { n: "02", t: "Decidir", d: "Priorización con criterio: impacto, esfuerzo y riesgo real." },
            { n: "03", t: "Ejecutar", d: "Implementación prolija: UX, performance y estructura clara." },
            { n: "04", t: "Medir", d: "Seguimiento y ajuste continuo para sostener resultados." },
          ].map((x) => (
            <div
              key={x.n}
              className="rounded-3xl border p-5"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--surface) 78%, transparent)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
                {x.n}
              </div>
              <div className="mt-2 text-lg font-semibold" style={{ color: "var(--text)" }}>
                {x.t}
              </div>
              <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {x.d}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="pb-20 pt-2">
      <Container>
        <div
          className="rounded-3xl border p-7 sm:p-10"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--surface) 78%, transparent) 0%, color-mix(in srgb, var(--bg) 65%, transparent) 100%)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.14)",
          }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="text-base font-semibold" style={{ color: "var(--muted)" }}>
                Contacto
              </div>
              <div
                className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Coordinemos el próximo paso.
              </div>
              <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Te respondemos rápido con próximos pasos claros.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/contacto">Contacto</PrimaryButton>
              <SecondaryButton href="/nuestro-trabajo">Ver trabajos</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ServiciosPage() {
  return (
    <main className="pt-24 sm:pt-28">
      {/* HERO simple */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="max-w-2xl">
            <div className="text-base font-semibold" style={{ color: "var(--accent-warm)" }}>
              Servicios
            </div>
            <h1
              className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
            >
              Ecommerce y soluciones digitales.
            </h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
              Un enfoque integral: diseñamos tiendas online, desarrollamos soluciones a medida y optimizamos sistemas digitales para que tu negocio funcione mejor.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="/contacto">Contacto</PrimaryButton>
              <SecondaryButton href="#lista">Ver servicios</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* CARDS alternadas */}
      <section id="lista" className="py-10 sm:py-12">
        <Container>
          <div className="space-y-6">
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.id} s={s} reverse={idx % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <FinalCTA />
    </main>
  );
}

// src/app/servicios/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Desarrollo de tiendas online y soluciones digitales pensadas para ordenar la venta, mejorar la experiencia y acompañar el crecimiento del negocio.",
};
