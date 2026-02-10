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
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide" style={{ color: "var(--muted)" }}>
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
        background: "var(--accent)",
        color: "var(--accent-accent)",
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


function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition will-change-transform
                 hover:-translate-y-[1px] active:translate-y-0"
      style={{
        background: "color-mix(in oklab, var(--card) 60%, transparent)",
        color: "var(--text)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(10px)",
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
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.12) 65%, rgba(0,0,0,0) 100%)",
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
    { title: "Rápido", desc: "Creamos tu tienda online en 10–15 días hábiles, lista para vender." },
    { title: "Accesible", desc: "Precios claros y opciones de pago. Podés abonar en cuotas (según método)." },
    { title: "Sencillo", desc: "Administrable: productos, precios y contenido sin depender de terceros." },
    { title: "Responsive", desc: "Se ve impecable en móvil, tablet y desktop." },
    { title: "Acepta tus pagos", desc: "Integramos Mercado Pago, PayPal, Stripe y más (según país)." },
    { title: "Al mundo", desc: "Listo para idiomas y monedas si tu negocio lo requiere." },
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
      title: "Maki",
      href: "/nuestro-trabajo/maki",
      imageUrl: "/work/cases/maki-portada.png",
    },
    {
      title: "Esquina Café",
      href: "/nuestro-trabajo/esquina-cafe",
      imageUrl: "/work/cases/esquina-portada.png",
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
    <main style={{ background: "var(--bg)" }}>
      {/* Animaciones hero (suave) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-in { animation: none !important; opacity: 1 !important; transform: none !important; }
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
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HERO FULL WIDTH (imagen real como fondo) */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          paddingTop: "calc(var(--header-h, 84px) + 28px)",
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
            <div className="pb-16 sm:pb-24">
              <p className="hero-in text-xs sm:text-sm font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.75)" }}>
                DESARROLLO ECOMMERCE PARA PYMES
              </p>

              <h1 className="hero-in delay-1 mt-4 text-4xl sm:text-6xl font-semibold tracking-tight" style={{ color: "#fff" }}>
                Tu tienda online lista para vender.
              </h1>

              <p className="hero-in delay-2 mt-5 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                La armamos en <span style={{ color: "#fff", fontWeight: 600 }}>10–15 días hábiles</span>, con pagos y envíos configurados,
                diseño alineado a tu marca y guía para gestionarla sin depender de terceros.
              </p>

              <div className="hero-in delay-3 mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="#contacto">Quiero mi tienda</PrimaryButton>
                <SecondaryButton href="#incluye">Ver qué incluye</SecondaryButton>
              </div>

              <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                *Los tiempos dependen del alcance y de que tengamos materiales (logo, textos, catálogo) a tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOLOR */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader
            eyebrow="Esto suele pasar"
            title="Vender por Instagram funciona… hasta que te empieza a consumir."
            desc="Cuando el canal crece, el caos también. Una tienda ordena la demanda, automatiza pagos y te devuelve tiempo."
            align="left"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card title="Se pierden ventas por demoras">
              Respondés tarde, se enfría el interés y terminás cerrando menos de lo que podrías.
            </Card>
            <Card title="Cobrar y coordinar es un trabajo aparte">
              Transferencias, comprobantes, envíos… todo manual. Te saca foco y energía.
            </Card>
            <Card title="No hay claridad real de lo que pasa">
              Sin métricas, es difícil saber qué producto empuja, qué frena y dónde mejorar.
            </Card>
            <Card title="Lo técnico te frena">
              No querés “aprender sistemas”. Querés que funcione, que sea simple y administrable.
            </Card>
          </div>
        </div>
      </section>

      {/* INCLUYE */}
      <section id="incluye" className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader
            eyebrow="Qué vas a recibir"
            title="Una tienda lista para operar, con base sólida."
            desc="Lo esencial para empezar a vender bien desde el día 1, sin parches."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl p-7 sm:p-8" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: PREMIUM_CARD_SHADOW }}>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Incluye
              </h3>
              <ul className="mt-4 grid gap-3">
                <ChecklistItem>Estructura completa (home, catálogo, producto, carrito, contacto)</ChecklistItem>
                <ChecklistItem>Diseño alineado a tu marca (tipografía, colores, estética)</ChecklistItem>
                <ChecklistItem>Configuración de pagos y métodos de envío</ChecklistItem>
                <ChecklistItem>Políticas básicas (envíos, cambios, privacidad)</ChecklistItem>
                <ChecklistItem>SEO base y performance razonable</ChecklistItem>
              </ul>
            </div>

            <div className="rounded-3xl p-7 sm:p-8" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: PREMIUM_CARD_SHADOW }}>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Opcional según plan
              </h3>
              <ul className="mt-4 grid gap-3">
                <ChecklistItem>Carga inicial de productos (cantidad definida)</ChecklistItem>
                <ChecklistItem>Integraciones extra (apps específicas, tracking, etc.)</ChecklistItem>
                <ChecklistItem>Multi-idioma / multimoneda</ChecklistItem>
                <ChecklistItem>Automatizaciones (emails, carritos abandonados)</ChecklistItem>
              </ul>
              <div className="mt-6">
                <PrimaryButton href="#contacto">Cotizar mi caso</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <SectionHeader eyebrow="Por qué esto funciona" title="Beneficios claros, sin vueltas." desc="Una tienda que ordena, automatiza y te da control." />
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

      {/* GARANTÍA */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 sm:py-14 text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: PREMIUM_CARD_SHADOW }}>
            <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
              Como en todo, garantía Interact
            </p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Si no estás conforme, te devolvemos tu dinero.
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PrimaryButton href="#contacto">Hablar y arrancar</PrimaryButton>
              <Link
                href="/terminos"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition will-change-transform
                           hover:-translate-y-[1px] active:translate-y-0"
                style={{ border: "1px solid var(--border)", color: "var(--text)", background: "color-mix(in oklab, var(--card) 60%, transparent)" }}
              >
                Ver condiciones
              </Link>
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

      {/* CTA FINAL */}
      <section id="contacto" className="relative py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-10 sm:py-14" style={{ background: "var(--cta-bg)", color: "var(--cta-text)", border: "1px solid var(--cta-border)", boxShadow: PREMIUM_CARD_SHADOW }}>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">¿Listo para vender con orden?</h3>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed" style={{ opacity: 0.9 }}>
              Contame qué vendés y en qué país. Te respondemos con una propuesta clara y el plan más simple para tu caso.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/59800000000?text=Hola%20Interact,%20quiero%20una%20tienda%20online%20en%2015%20d%C3%ADas."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition will-change-transform
                           hover:-translate-y-[1px] active:translate-y-0"
                style={{ background: "var(--cta-btn)", color: "var(--cta-btn-text)" }}
              >
                Hablar por WhatsApp
              </a>
              <a
                href="mailto:hola@interact.uy?subject=Tienda%20online%20en%2015%20d%C3%ADas"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition will-change-transform
                           hover:-translate-y-[1px] active:translate-y-0"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Enviar email
              </a>
            </div>

            <p className="mt-6 text-xs" style={{ opacity: 0.85 }}>
              *Tiempos estimados: 10–15 días hábiles según alcance y materiales entregados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
