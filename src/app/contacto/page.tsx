import Link from "next/link";
import Container from "@/components/layout/Container";
import ContactCards from "@/components/contact/ContactCards";

const CONTACT_CARDS = [
  {
    title: "Contactanos",
    email: "hola@interact.com.uy",
    phone: "+598 95 302 393",
    href: "mailto:hola@interact.com.uy",
  },
  {
    title: "Trabaja con nosotros",
    email: "rrhh@interact.com.uy",
    phone: "+598 95 302 393",
    href: "mailto:rrhh@interact.com.uy",
  },
  {
    title: "Soporte",
    email: "soporte@interact.com.uy",
    phone: "+598 95 302 393",
    href: "mailto:soporte@interact.com.uy",
  },
  {
    title: "Administracion y Finanzas",
    email: "admin@interact.com.uy",
    phone: "+598 95 302 393",
    href: "mailto:admin@interact.com.uy",
  },
];

const LOCATIONS = [
  {
    city: "Montevideo, Uruguay",
    line1: "World Trade Center, Torre 3 Piso 12.",
    line2: "Reuniones con agenda",
    mapHref:
      "https://maps.app.goo.gl/fJ3od3785Duuokua8",
  },
  {
    city: "Maldonado, Uruguay",
    line1: "El foque 759, Punta del Este.",
    line2: "Reuniones con agenda",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=El+Foque+759+Punta+del+Este",
  },
];

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl border p-6 sm:p-7"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
        {title}
      </div>
      <div className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
        {children}
      </div>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <main className="pt-24 sm:pt-28 pb-24" style={{ background: "var(--bg)" }}>
      <section className="py-10 sm:py-12">
        <Container>
          {/* Section 1 */}
          <div className="grid gap-10 lg:grid-cols-[1fr,1.35fr] lg:gap-16">
            {/* Left */}
            <div className="max-w-[44ch]">
              <h1
                className="text-3xl sm:text-4xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Contacto
              </h1>

              <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Hablemos de tu proyecto.
              </p>
            </div>

            {/* Right grid */}
            <ContactCards />
          </div>

          {/* Divider */}
          <div
            className="my-12 sm:my-14 h-px w-full"
            style={{ background: "color-mix(in srgb, var(--border) 85%, transparent)" }}
          />

          {/* Section 2 */}
          <div className="grid gap-10 lg:grid-cols-[1fr,1.35fr] lg:gap-16">
            {/* Left */}
            <div className="max-w-[44ch]">
              <h2
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                Ubicaciones
              </h2>

              <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                Operamos remoto, pero también coordinamos reuniones presenciales
                cuando suma para avanzar más rápido.
              </p>
            </div>

            {/* Right grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
  <Card key={l.city} title={l.city}>
    <a
      href={l.mapHref}
      target="_blank"
      rel="noopener noreferrer"
      className="block underline-offset-4 hover:underline"
      style={{ color: "var(--text)" }}
    >
      <div>{l.line1}</div>
      <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
        {l.line2}
      </div>
    </a>
  </Card>
))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contanos sobre tu proyecto. Te ayudamos a pensar y construir una solución digital clara, funcional y alineada a tu negocio.",
};
