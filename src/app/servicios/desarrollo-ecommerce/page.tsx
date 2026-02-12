// src/app/servicios/desarrollo-ecommerce/page.tsx
"use client";

import React from "react";
import Link from "next/link";

type Benefit = { title: string; desc: string };
type Extra = { title: string; desc: string };
type FAQ = { q: string; a: string };
type Case = { title: string; href: string; imageUrl: string };

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-base font-semibold" style={{ color: "var(--accent-warm)" }}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}

const PREMIUM_CARD_SHADOW = "0 18px 50px rgba(0,0,0,0.08), 0 6px 18px rgba(0,0,0,0.05)";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-7 sm:p-8"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: PREMIUM_CARD_SHADOW,
      }}
    >
      <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
        {title}
      </h3>
      <div className="mt-3 text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
        {children}
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                 transition will-change-transform hover:-translate-y-[1px] active:translate-y-0
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        borderRadius: "28px",
        background: "var(--accent)",
        color: "var(--accent-contrast)",
        border: "1px solid color-mix(in oklab, var(--accent) 85%, var(--border))",
        boxShadow: "0 14px 34px rgba(0,0,0,0.14)",
        // importante: si tu site ya define ring-offset por theme, esto se adapta
        // si no, no rompe (solo afecta focus)
        // @ts-ignore
        ringColor: "color-mix(in oklab, var(--accent) 55%, white)",
      }}
      onMouseEnter={(e) => {
        // Hover: sube un toque la luminosidad del accent sin “inventar” un color
        (e.currentTarget.style as any).background =
          "color-mix(in oklab, var(--accent) 88%, white)";
        (e.currentTarget.style as any).boxShadow = "0 18px 44px rgba(0,0,0,0.16)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style as any).background = "var(--accent)";
        (e.currentTarget.style as any).boxShadow = "0 14px 34px rgba(0,0,0,0.14)";
      }}
    >
      <span className="transition-opacity group-hover:opacity-95">{children}</span>
    </a>
  );
}


function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold
                 transition will-change-transform hover:-translate-y-[1px] active:translate-y-0"
      style={{
        borderRadius:"28px",
        background: "var(--surface)",
        color: "var(--text)",
        border: "1px solid var(--border)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style as any).background =
          "color-mix(in srgb, var(--surface) 85%, white)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style as any).background = "var(--surface)";
      }}
    >
      {children}
    </a>
  );
}



function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
        style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
        aria-hidden="true"
      >
        ✓
      </span>
      <span className="leading-relaxed" style={{ color: "var(--muted)" }}>
        {children}
      </span>
    </li>
  );
}

function Accordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((it, idx) => {
        const open = openIndex === idx;
        return (
          <button key={it.q} onClick={() => setOpenIndex(open ? null : idx)} className="text-left">
            <div
              className="rounded-3xl px-6 py-5 sm:px-7 transition"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: open ? PREMIUM_CARD_SHADOW : "none",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    {it.q}
                  </p>
                  {open ? (
                    <p className="mt-2 text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {it.a}
                    </p>
                  ) : null}
                </div>
                <span
                  className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-lg"
                  style={{ background: "var(--surface)", color: "var(--muted)" }}
                  aria-hidden="true"
                >
                  {open ? "–" : "+"}
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function CaseImageCard({ title, href, imageUrl }: Case) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-3xl transition will-change-transform hover:-translate-y-[2px]"
      style={{
        border: "1px solid var(--border)",
        boxShadow: PREMIUM_CARD_SHADOW,
      }}
      aria-label={`Ver caso: ${title}`}
    >
      {/* Imagen */}
      <div
        className="aspect-[4/5] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />

      {/* Overlay gradiente (abajo → arriba) */}
      <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.05) 100%)",
  }}
/>

<div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(120% 95% at 50% 40%, transparent 55%, rgba(0,0,0,0.35) 100%)",
  }}
/>


      {/* Título abajo */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-base font-semibold" style={{ color: "#fff" }}>
          {title}
        </p>
      </div>

      {/* Micro brillo hover (premium) */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-25"
        style={{ background: "var(--accent-glow)" }}
        aria-hidden="true"
      />

      {/* Zoom sutil en hover */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Page() {
  const BENEFITS: Benefit[] = [
    { title: "Implementación ágil", desc: "Proceso definido y entregables claros. Tu tienda lista en 10-15 dias habiles." },
    { title: "Inversión transparente", desc: "Precios claros y opciones de pago acordes a la etapa de tu negocio." },
    { title: "Gestión simple", desc: "Podés administrar productos, precios y contenido sin depender de terceros." },
    { title: "Experiencia impecable", desc: "Optimizada para móvil, tablet y desktop desde el inicio." },
    { title: "Operación integrada", desc: "Mercado Pago, Stripe, PayPal y métodos locales según tu país." },
    { title: "Expansión lista", desc: "Multi-idioma, multi-moneda e integraciones avanzadas si tu negocio lo requiere." },
  ];

  const EXTRAS: Extra[] = [
    { title: "Capacitaciones", desc: "Guía + sesión práctica para manejar tu tienda con confianza." },
    { title: "Soporte técnico", desc: "Si aparece cualquier problema, nos escribís y lo resolvemos rápido." },
    { title: "Tips y consejos", desc: "Mejoras sugeridas: catálogo, UX, checkout y conversiones." },
    { title: "Seguimiento", desc: "Monitoreo básico para detectar fallas o errores que afecten la operación." },
  ];

  // ✅ Cambiá las URLs por tus portadas (recomendado 4:5 / vertical suave)
  const CASES: Case[] = [
    {
      title: "Too Much Bueno",
      href: "/nuestro-trabajo/too-much-bueno",
      imageUrl: "/work/cases/tmb-portada.png",
    },
    {
      title: "Huella Propia",
      href: "/nuestro-trabajo/huella-propia",
      imageUrl: "/work/cases/huella-portada.png",
    },
    {
      title: "Cosplay Anime Store",
      href: "/nuestro-trabajo/cosplay",
      imageUrl: "/work/cases/cosplay-portada.webp",
    },
  ];

  const FAQS: FAQ[] = [
    {
      q: "¿Cuánto tiempo lleva?",
      a: "Depende del alcance (catálogo, integraciones, contenidos). Habitualmente toma entre 10 y 15 días hábiles.",
    },
    {
      q: "¿Cómo puedo pagar?",
      a: "Podés pagar por transferencia y/o plataformas como Mercado Pago, PayPal o Stripe según tu país y preferencia.",
    },
    {
      q: "¿Puedo hacer cambios en mi tienda luego?",
      a: "Sí. Te entregamos una tienda administrable y una guía para gestionar productos, precios y contenido sin depender de terceros.",
    },
    {
      q: "¿Qué incluye el desarrollo de mi tienda online?",
      a: "Estructura completa, diseño alineado a tu marca, configuración de pagos/envíos, páginas clave y carga inicial según el plan.",
    },
  ];

  return (
    <main className="landing-ecommerce" style={{ background: "var(--bg)" }}>

  {/* =========================
      ANIMACIONES + FIX LOCAL BOTONES
     ========================= */}
  <style>{`
    @media (prefers-reduced-motion: reduce) {
      .hero-in { 
        animation: none !important; 
        opacity: 1 !important; 
        transform: none !important; 
      }
    }

    .hero-in {
      opacity: 0;
      transform: translateY(10px);
      animation: heroIn 700ms cubic-bezier(.2,.8,.2,1) forwards;
    }

    .hero-in.delay-1 { animation-delay: 80ms; }
    .hero-in.delay-2 { animation-delay: 160ms; }
    .hero-in.delay-3 { animation-delay: 240ms; }
    .hero-in.delay-4 { animation-delay: 320ms; }

    @keyframes heroIn {
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }

    /* =========================
       FIX CONTRASTE BOTONES SOLO ESTA LANDING
       ========================= */

    .landing-ecommerce {
      --accent-contrast: #ffffff;
    }

    [data-theme="dark"] .landing-ecommerce {
      --accent-contrast: #ffffff;
    }

    /* Secondary buttons en esta landing sobre fondos oscuros */

.landing-ecommerce .btn-secondary-on-dark {
  color: #ffffff;
  border-color: rgba(255,255,255,0.4);
}

.landing-ecommerce .btn-secondary-on-dark:hover {
  background: rgba(255,255,255,0.10);
}

  `}</style>

  {/* === ACÁ SIGUE TODO TU CONTENIDO NORMAL === */}


      {/* HERO FULL WIDTH (imagen real como fondo) */}
      <section
  className="relative w-full overflow-hidden"
  style={{
    paddingTop: "calc(var(--header-h, 84px) + 64px)",
    paddingBottom: "120px",
    minHeight: "72vh",
    background: "var(--bg)",
  }}
>

        {/* Fondo imagen + overlays de contraste */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* ✅ Placeholder: reemplazá por tu imagen */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/landing/landing-hero.png')", transform: "scale(1.02)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.58) 44%, rgba(0,0,0,0.36) 72%, rgba(0,0,0,0.18) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: "radial-gradient(120% 95% at 50% 40%, transparent 45%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
            }}
          />
        </div>

        {/* Contenido */}
        <div className="relative">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
            <div className="pb-16 sm:pb-32">
              <p className="hero-in text-xs sm:text-sm font-semibold tracking-wide" style={{ color: "var(--accent-warm)" }}>
                ECOMMERCE PARA LA SIGUIENTE ETAPA
              </p>

              <h1 className="hero-in delay-1 mt-4 text-4xl sm:text-6xl font-semibold tracking-tight" style={{ color: "#fff" }}>
                Tu negocio funciona, 
                <br />ahora necesita su propia tienda.
              </h1>

              <p className="hero-in delay-2 mt-5 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Diseñamos y desarrollamos tu ecommerce como una extensión natural de tu marca.
Profesional, sólida y preparada para escalar.
              </p>

              <div className="hero-in delay-3 mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="#contacto">Evaluar mi proyecto</PrimaryButton>
                <SecondaryButton href="#incluye">Ver cómo trabajamos</SecondaryButton>
              </div>

              <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                *Proyectos trabajados según etapa y proyección.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader
            eyebrow="Cuando el negocio crece"
            title="Llega el momento de decidir cómo querés crecer."
            desc="No se trata de vender más por el mismo camino. Se trata de construir la estructura que acompaña la idea."
            align="left"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card title="Profesionalización real">
              Tu negocio deja de parecer un emprendimiento y empieza a sentirse como una marca consolidada.
            </Card>
            <Card title="Infraestructura propia">
              Una forma de vender que no depende de terceros y que responde a tu estrategia.
            </Card>
            <Card title="Escala con criterio">
              Promociones, campañas y expansión con base sólida, no improvisación.
            </Card>
            <Card title="Decisiones informadas">
              Datos claros para crecer con intención, no por intuición.
            </Card>
          </div>
        </div>
      </section>

      {/* INCLUYE */}
      <section id="incluye" className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader
            eyebrow="Construimos contigo"
            title="Una estructura digital preparada para crecer."
            desc="No es solo una tienda. Es el canal que acompaña la etapa en la que ya estás."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl p-7 sm:p-8" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: PREMIUM_CARD_SHADOW }}>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Incluye
              </h3>
              <ul className="mt-4 grid gap-3">
                <ChecklistItem>Arquitectura completa pensada para conversión</ChecklistItem>
                <ChecklistItem>Diseño alineado a tu identidad y posicionamiento</ChecklistItem>
                <ChecklistItem>Pagos y envíos configurados estratégicamente</ChecklistItem>
                <ChecklistItem>Políticas y estructura legal básica</ChecklistItem>
                <ChecklistItem>SEO técnico inicial y performance optimizada</ChecklistItem>
              </ul>
            </div>

            <div className="rounded-3xl p-7 sm:p-8" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: PREMIUM_CARD_SHADOW }}>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Escalable según el caso
              </h3>
              <ul className="mt-4 grid gap-3">
                <ChecklistItem>Carga inicial y organización avanzada de catálogo</ChecklistItem>
                <ChecklistItem>Integraciones específicas (tracking, ERP, apps clave)</ChecklistItem>
                <ChecklistItem>Multi-idioma / multi-moneda</ChecklistItem>
                <ChecklistItem>Automatizaciones y flujos de retención</ChecklistItem>
              </ul>
              <div className="mt-6">
                <PrimaryButton href="#contacto">Cotizar</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader eyebrow="Por qué Interact" title="Una propuesta clara. Sin fricción innecesaria." desc="Un servicio diseñado para negocios que venden y buscan crecer con criterio." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <Card key={b.title} title={b.title}>
                {b.desc}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader eyebrow="Cómo trabajamos" title="Un proceso simple, con entregables claros." desc="Definimos, armamos, revisamos y entregamos. Sin vueltas eternas." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="1. Brief">Definimos objetivo, catálogo, referencias y alcance. Te pedimos lo indispensable.</Card>
            <Card title="2. Diseño">Estructura + estética para que la tienda se sienta tu marca, no una plantilla genérica.</Card>
            <Card title="3. Configuración">Pagos, envíos, políticas y ajustes finos. Todo listo para operar.</Card>
            <Card title="4. Entrega">Revisión final, guía de uso y handoff. Te queda todo administrable.</Card>
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO (IMÁGENES) */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader
            eyebrow="Casos de éxito"
            title="Ejemplos reales de lo que construimos."
            desc="Algunos proyectos donde ordenamos ventas, catálogo y operación digital."
            align="left"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <CaseImageCard key={c.title} {...c} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/nuestro-trabajo"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition will-change-transform
                         hover:-translate-y-[1px] active:translate-y-0"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                background: "color-mix(in oklab, var(--card) 60%, transparent)",
              }}
            >
              Ver todos los casos →
            </Link>
          </div>
        </div>
      </section>

      {/* ADEMÁS */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader eyebrow="Además" title="No quedás solo cuando la tienda está online." desc="Acompañamiento real para que puedas operar con confianza." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EXTRAS.map((x) => (
              <Card key={x.title} title={x.title}>
                {x.desc}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍA (consistente + protagonista por jerarquía) */}
<section className="py-14 sm:py-16">
  <div className="mx-auto max-w-3xl px-6 lg:max-w-[var(--container)] lg:px-8">
    <div
      className="relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 sm:py-14"
      style={{
        // ✅ Ideal: igual que tus cards.
        // Si NO tenés --card definido, reemplazá por: "var(--surface)"
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: PREMIUM_CARD_SHADOW,
      }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
          Como en todo, garantía Interact
        </p>

        <h3
          className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          Si no estás conforme, te devolvemos tu dinero.
        </h3>

        <div className="mt-7 flex flex-col items-center gap-4">
          <PrimaryButton href="#contacto">Hablar y arrancar</PrimaryButton>

          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Sujeto a{" "}
            <Link
              href="/terminos"
              className="relative inline-block group"
              style={{ color: "var(--text)" }}
            >
              <span className="relative z-10">bases y condiciones</span>

              {/* Línea base suave */}
              <span
                className="absolute left-0 -bottom-[2px] h-[1px] w-full opacity-40 transition-opacity duration-300"
                style={{ background: "currentColor" }}
              />

              {/* Línea hover animada */}
              <span
                className="absolute left-0 -bottom-[2px] h-[1px] w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "currentColor" }}
              />
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* FAQ */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader title="Preguntas frecuentes" />
          <div className="mt-8">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA FINAL (oscuro en light / blanco en dark) */}
<section id="contacto" className="relative py-14 sm:py-16">
  {/* Tokens locales SOLO para este CTA (CSS puro) */}
  <style>{`
    /* Light mode: panel oscuro */
    :root {
      --cta-panel-bg: #0b1220;
      --cta-panel-text: rgba(255,255,255,0.92);
      --cta-panel-muted: rgba(255,255,255,0.72);
      --cta-panel-border: rgba(255,255,255,0.10);
    }

    /* Dark mode: panel blanco */
    [data-theme="dark"] {
      --cta-panel-bg: #ffffff;
      --cta-panel-text: #083344;
      --cta-panel-muted: rgba(8, 51, 68, 0.78);
      --cta-panel-border: rgba(8, 51, 68, 0.14);
    }
  `}</style>

  <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
    <div
      className="relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 sm:py-14"
      style={{
        background: "var(--cta-panel-bg)",
        color: "var(--cta-panel-text)",
        border: "1px solid var(--cta-panel-border)",
        boxShadow: PREMIUM_CARD_SHADOW,

        // ✅ CLAVE: “mapeamos” tokens globales SOLO dentro del CTA
        // para que SecondaryButton (que usa var(--text), var(--card), var(--border))
        // se vea bien cuando el panel es blanco en dark.
        // @ts-ignore
        "--text": "var(--cta-panel-text)",
        // @ts-ignore
        "--muted": "var(--cta-panel-muted)",
        // @ts-ignore
        "--card": "var(--cta-panel-bg)",
        // @ts-ignore
        "--surface": "var(--cta-panel-bg)",
        // @ts-ignore
        "--border": "var(--cta-panel-border)",
      }}
    >
      {/* brillo suave arriba (premium) */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.00) 55%)",
        }}
      />

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          ¿Listo para vender con orden?
        </h3>

        <p
          className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--cta-panel-muted)" }}
        >
          Contame qué vendés y en qué país. Te respondemos con una propuesta clara y el plan más simple para tu caso.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <PrimaryButton href="https://wa.me/59895302393">Hablar por WhatsApp</PrimaryButton>
          <SecondaryButton href="mailto:hola@interact.uy?subject=Tienda%20online%20en%2015%20d%C3%ADas">
            Enviar email
          </SecondaryButton>
        </div>

        <p className="mt-6 text-xs" style={{ color: "var(--cta-panel-muted)" }}>
          *Tiempos estimados: 10–15 días hábiles según alcance y materiales entregados.
        </p>
      </div>
    </div>
  </div>
</section>


    </main>
  );
}
