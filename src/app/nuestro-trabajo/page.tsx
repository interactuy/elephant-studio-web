// src/app/nuestro-trabajo/page.tsx
import Link from "next/link";

type Work = {
  id: string;
  title: string;
  client: string;
  tag: string;
  desc: string;
  href: string;
  imageUrl: string;
};

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  brand: string;
  initials: string;
};

const WORKS: Work[] = [
  {
    id: "tmb",
    title: "Too Much Bueno",
    client: "Too Much Bueno",
    tag: "Desarrollo eCommerce",
    desc: "Tienda online internacional. Arquitectura, UX y performance orientadas a conversión.",
    href: "/nuestro-trabajo/too-much-bueno",
    imageUrl: "/placeholders/work-01.jpg",
  },
  {
    id: "maki",
    title: "Maki",
    client: "Maki",
    tag: "Desarrollo eCommerce",
    desc: "Tienda desde cero. Estructura de catálogo y navegación limpia para escalar.",
    href: "/nuestro-trabajo/maki",
    imageUrl: "/work/maki.png",
  },
  {
    id: "urufarma",
    title: "Urufarma",
    client: "Urufarma",
    tag: "Optimización",
    desc: "Mejoras de performance, UX y señales de confianza para cerrar más rápido.",
    href: "/nuestro-trabajo/urufarma",
    imageUrl: "/work/urufarma.png",
  },
  {
    id: "cosplay",
    title: "Cosplay Anime Store",
    client: "Cosplay",
    tag: "Checkout & UX",
    desc: "Checkout más claro y menos fricción. Ajustes de jerarquía y microinteracciones.",
    href: "/nuestro-trabajo/cosplay",
    imageUrl: "/placeholders/work-04.jpg",
  },
  {
    id: "epoca",
    title: "epoca",
    client: "epoca",
    tag: "Desarrollo Ecommerce",
    desc: "Auditoría completa con roadmap priorizado y quick wins para ejecutar.",
    href: "/nuestro-trabajo/epoca",
    imageUrl: "/work/cases/epoca-portada.png",
  },
  {
    id: "paper",
    title: "Paper & Co",
    client: "Paper & Co",
    tag: "Optimización",
    desc: "Landing y PDP con foco en claridad: mejor lectura, mejor decisión.",
    href: "/nuestro-trabajo/paper",
    imageUrl: "/placeholders/work-06.jpg",
  },
  {
    id: "studio",
    title: "Studio Kit",
    client: "Studio Kit",
    tag: "Soluciones a medida",
    desc: "Integraciones y automatizaciones post-compra para operación consistente.",
    href: "/nuestro-trabajo/studio-kit",
    imageUrl: "/placeholders/work-07.jpg",
  },
  {
    id: "slow",
    title: "Slow Essentials",
    client: "Slow Essentials",
    tag: "Gestión",
    desc: "Acompañamiento mensual: iteración continua con prioridades claras.",
    href: "/nuestro-trabajo/slow-essentials",
    imageUrl: "/placeholders/work-08.jpg",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Ordenaron la tienda y el flujo de compra. Pasamos de “funciona” a “convierte” sin perder estética.",
    name: "Leslie Alexander",
    role: "Fundadora",
    brand: "Maki",
    initials: "LA",
  },
  {
    id: "t2",
    quote:
      "La auditoría fue quirúrgica: quick wins claros y un roadmap que realmente se puede ejecutar.",
    name: "Brenna Goyette",
    role: "Operaciones",
    brand: "Too Much Bueno",
    initials: "BG",
  },
  {
    id: "t3",
    quote:
      "Mejoramos velocidad y claridad en checkout. Bajaron dudas y aumentaron cierres con el mismo tráfico.",
    name: "Leonard Krasner",
    role: "Growth",
    brand: "Urufarma",
    initials: "LK",
  },
  {
    id: "t4",
    quote:
      "Se nota el criterio: decisiones justificadas, implementación prolija y acompañamiento real.",
    name: "Michael Foster",
    role: "Director",
    brand: "Atelier Goods",
    initials: "MF",
  },
  {
    id: "t5",
    quote:
      "Nos ayudaron a sostener mejoras mes a mes. Tener prioridades claras cambió la operación.",
    name: "Lindsay Walton",
    role: "eCommerce Lead",
    brand: "Slow Essentials",
    initials: "LW",
  },
  {
    id: "t6",
    quote:
      "Las integraciones quedaron finas y estables. Menos manual, más consistencia post-compra.",
    name: "Tom Cook",
    role: "CTO",
    brand: "Studio Kit",
    initials: "TC",
  },
];

/* ---------------------------
   Local Container (si ya tenés uno, podés reemplazarlo por tu import)
---------------------------- */
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

/* ---------------------------
   Buttons
---------------------------- */
function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold"
      style={{
        fontFamily: "var(--font-work)",
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
        fontFamily: "var(--font-work)",
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
   Sections
---------------------------- */
function Hero() {
  return (
    <section className="pt-28 pb-10 sm:pt-32 sm:pb-12">
      <Container>
        <div className="max-w-3xl">
          <div
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)" }}
          >
            Nuestro trabajo
          </div>

          <h1
            className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
          >
            Proyectos recientes,
            <br className="hidden sm:block" />
            hechos para vender.
          </h1>

          <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            Casos reales. Decisiones claras. Ejecución con criterio.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="/contacto">Contacto</PrimaryButton>
            <SecondaryButton href="#proyectos">Ver proyectos</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WorkCard({ w }: { w: Work }) {
  return (
    <Link
      href={w.href}
      className="group rounded-3xl border overflow-hidden transition"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--surface) 78%, transparent)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="relative aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={w.imageUrl}
          alt={w.title}
          className="h-full w-full object-cover"
          style={{ filter: "saturate(0.95) contrast(1.02)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.26) 100%)",
            opacity: 0.55,
          }}
        />
      </div>

      <div className="p-5 sm:p-6">
        <span
          className="inline-flex items-center h-7 px-3 rounded-full text-xs font-semibold border"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--bg) 60%, transparent)",
            color: "color-mix(in srgb, var(--text) 76%, transparent)",
          }}
        >
          {w.tag}
        </span>

        <div className="mt-4 text-lg font-semibold" style={{ color: "var(--text)" }}>
          {w.title}
        </div>

        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          {w.desc}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          <span style={{ color: "color-mix(in srgb, var(--text) 72%, transparent)" }}>
            Ver caso
          </span>
          <span
            className="transition-transform group-hover:translate-x-0.5"
            style={{ color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)" }}
            aria-hidden
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function WorksGrid() {
  return (
    <section id="proyectos" className="py-10 sm:py-12">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {WORKS.map((w) => (
            <WorkCard key={w.id} w={w} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------
   Testimonials (UPDATED)
   - Title left
   - 6 cards aligned & same size
---------------------------- */
function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="h-10 w-10 rounded-full border flex items-center justify-center text-sm font-semibold"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--surface) 85%, transparent)",
        color: "var(--text)",
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="h-full rounded-3xl border p-5 sm:p-6 flex flex-col"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--surface) 78%, transparent)",
        boxShadow: "0 18px 60px rgba(0,0,0,0.06)",
      }}
    >
      <p
        className="text-sm leading-relaxed"
        style={{ color: "color-mix(in srgb, var(--text) 82%, transparent)" }}
      >
        “{t.quote}”
      </p>

      <div className="mt-auto pt-6 flex items-center gap-3">
        <Avatar initials={t.initials} />
        <div className="min-w-0">
          <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            {t.name}
          </div>
          <div className="text-xs" style={{ color: "var(--muted)" }}>
            {t.role} · {t.brand}
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        {/* Layout: rail izquierdo + grid derecho */}
        <div className="grid gap-y-10 lg:grid-cols-[360px,1fr] lg:gap-x-12 lg:items-start">
          {/* Left rail (BLINDADO contra overlays) */}
          <div className="relative lg:pr-6 lg:max-w-[360px]">
            {/* wrapper extra para aislar estilos globales */}
            <div className="relative">
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{
                  color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)",
                }}
              >
                Testimonios
              </div>

              <h2
                className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.05] max-w-[18ch]"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Trabajo real,
                <br />
                resultados claros.
              </h2>

              {/* position:static para neutralizar cualquier CSS global que meta absolute */}
              <p
                className="mt-4 text-sm sm:text-base max-w-[42ch]"
                style={{ color: "var(--muted)", position: "static" as const }}
              >
                Opiniones de clientes con foco en claridad, performance y ejecución.
              </p>
            </div>
          </div>

          {/* Right grid (también aislado) */}
          <div className="relative grid gap-6 lg:grid-cols-3 auto-rows-fr">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
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
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                Contacto
              </div>
              <div
                className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
              >
                Contanos tu proyecto.
              </div>
              <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Te respondemos con próximos pasos claros.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="/contacto">Contacto</PrimaryButton>
              <SecondaryButton href="/servicios">Ver servicios</SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function NuestroTrabajoPage() {
  return (
    <main className="pt-0">
      <Hero />
      <WorksGrid />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
