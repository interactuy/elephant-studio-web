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
    tag: "Desarrollo Ecommerce",
    desc: "Desarrollo de tienda online desde cero para ordenar la demanda, facilitar la exploración del catálogo y profesionalizar el canal digital de un emprendimiento gastronómico en crecimiento radicado en Miami.",
    href: "/nuestro-trabajo/too-much-bueno",
    imageUrl: "/work/cases/tmb-portada.png",
  },
  {
    id: "maki",
    title: "Maki",
    client: "Maki",
    tag: "Desarrollo Ecommerce",
    desc: "Diseño y construcción de tienda online para ordenar ventas, profesionalizar el canal digital y acompañar el crecimiento desde Instagram hacia un eCommerce propio.",
    href: "/nuestro-trabajo/maki",
    imageUrl: "/work/cases/maki-portada.png",
  },
  {
    id: "elvani",
    title: "Elvani",
    client: "Elvani",
    tag: "Desarrollo Ecommerce",
    desc: "Desarrollo de tienda online y solución a medida para una marca de muebles, integrando un sistema inteligente de cotización para piezas fabricadas a pedido.",
    href: "/nuestro-trabajo/elvani",
    imageUrl: "/work/cases/elvani-portada1.png",
  },
  {
    id: "cosplay",
    title: "Cosplay Anime Store",
    client: "Cosplay",
    tag: "Desarrollo Ecommerce",
    desc: "Desarrollo de tienda online desde cero para digitalizar catálogo, ordenar la experiencia de compra y convertir el sitio en una herramienta real de expansión y alcance.",
    href: "/nuestro-trabajo/cosplay",
    imageUrl: "/work/cases/cosplay-portada.png",
  },
  {
    id: "epoca",
    title: "epoca",
    client: "epoca",
    tag: "Desarrollo Ecommerce",
    desc: "Desarrollo de tienda online desde cero para una marca de indumentaria clásica y elegante en Estados Unidos, cuidando la estética, la experiencia y un sistema de venta alineado al nivel de la marca.",
    href: "/nuestro-trabajo/epoca",
    imageUrl: "/work/cases/epoca-portada.png",
  },
  {
    id: "huella",
    title: "Huella Propia",
    client: "Huella Propia",
    tag: "Desarrollo Ecommerce",
    desc: "Optimización de tienda online para una joyería artesanal en un momento crítico de crecimiento, enfocada en ordenar el proceso de venta, reforzar la confianza y evitar la pérdida de pedidos.",
    href: "/nuestro-trabajo/huella-propia",
    imageUrl: "/work/cases/huella-portada.png",
  },
  {
    id: "finacc-vega",
    title: "Finacc Vega",
    client: "Finacc Vega",
    tag: "Soluciones a medida",
    desc: "Desarrollo de una solución a medida para una empresa de asesoramiento contable y construcción de crédito en Estados Unidos, permitiendo la contratación de servicios y cobro a distancia desde cualquier parte del mundo.",
    href: "/nuestro-trabajo/finacc-vega",
    imageUrl: "/work/cases/finaccvega-portada.png",
  },
  {
    id: "esquina-cafe",
    title: "Esquina Cafe",
    client: "Esquina Cafe",
    tag: "Soluciones a Medida",
    desc: "Desarrollo de una solución a medida para que los clientes puedan comprar desde una app web y retirar en el local, reduciendo filas y ordenando la operación diaria de un café en Buenos Aires.",
    href: "/nuestro-trabajo/esquina-cafe",
    imageUrl: "/work/cases/esquinacafe-portada.png",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Crearon una tienda online linda y simple con todo lo necesario para ordenar y vender mis productos.",
    name: "Macarena",
    role: "Fundadora",
    brand: "Maki",
    initials: "M",
  },
  {
    id: "t2",
    quote:
      "La tienda nos permitió ordenar el negocio y acompañar el crecimiento sin perder ventas ni clientas. Hoy vendemos de forma clara y profesional.",
    name: "Maria",
    role: "Fundadora",
    brand: "Huella Propia",
    initials: "M",
  },
  {
    id: "t3",
    quote:
      "La app nos ayudó a ordenar los pedidos y reducir tiempos de espera. Hoy todo pasa por un solo canal y la experiencia es mucho más fluida.",
    name: "Tomas",
    role: "Cofundador",
    brand: "Esquina Cafe",
    initials: "T",
  },
  {
    id: "t4",
    quote:
      "La solución nos permitió centralizar pagos y trabajar con clientes de distintos países de forma simple y segura.",
    name: "Dayni",
    role: "Fundadora",
    brand: "Finacc Vega",
    initials: "D",
  },
  {
    id: "t5",
    quote:
      "La tienda online refleja la identidad de época: elegancia, claridad y una experiencia acorde a la marca",
    name: "Mateo",
    role: "Cofundador",
    brand: "época",
    initials: "M",
  },
  {
    id: "t6",
    quote:
      "La optimización de procesos nos permitió ordenar la operación y vender de forma más eficiente",
    name: "Federico",
    role: "Fundador",
    brand: "RDC MVD",
    initials: "F",
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
            className="text-base font-semibold"
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
            pensados para vender.
          </h1>

          <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            Casos reales. Decisiones claras. Ejecución con criterio, de principio a fin.
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

function LogosConfianza() {
  const LOGOS = [
    { id: "l1", alt: "Logo 1", src: "/work/logos/logourufarma.png" },
    { id: "l2", alt: "Logo 2", src: "/work/logos/elevenkhas.png" },
    { id: "l3", alt: "Logo 3", src: "/work/logos/RDCMVD1.png" },
    { id: "l4", alt: "Logo 4", src: "/work/logos/Prism1.png" },
  ];

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <div
          className="rounded-3xl border px-6 py-10 sm:px-10"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--surface) 78%, transparent)",
            boxShadow: "0 18px 70px rgba(0,0,0,0.08)",
          }}
        >
          <div className="max-w-2xl">
            <div
              className="text-base font-semibold"
              style={{
                color: "color-mix(in srgb, var(--accent-warm) 92%, transparent)",
              }}
            >
              Ellos también confían en nosotros
            </div>

            <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
              Marcas y proyectos con los que trabajamos en distintas etapas: desarrollo, optimización y soluciones a medida.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {LOGOS.map((l) => (
              <div
                key={l.id}
                className="flex items-center justify-center rounded-2xl border px-4 py-6"
                style={{
                  borderColor: "var(--border)",
                  background: "color-mix(in srgb, var(--bg) 55%, transparent)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={l.src}
                  alt={l.alt}
                  className="h-10 sm:h-11 w-auto object-contain"
                  style={{ filter: "saturate(0.95) contrast(1.02)" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
                className="text-base font-semibold"
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
                La opinion de nuestros mas recientes clientes. 
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
      <LogosConfianza />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Trabajo",
  description: "Conocé algunos de nuestros proyectos: tiendas online y soluciones digitales diseñadas con criterio, claridad y foco en resultados reales.",
};