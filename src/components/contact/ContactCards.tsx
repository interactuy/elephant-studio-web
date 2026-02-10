"use client";

import Link from "next/link";
import { event } from "@/lib/ga";

const WHATSAPP_NUMBER_E164 = "59895302393"; // sin + ni espacios
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

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

export default function ContactCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {CONTACT_CARDS.map((c) => (
        <Card key={c.title} title={c.title}>
          <Link
  href={c.href}
  className="block font-medium underline-offset-4 hover:underline"
  style={{ color: "var(--accent)" }}
  onClick={() =>
    event({
      action: "click_email",
      category: "contact",
      label: c.title,
    })
  }
>
  {c.email}
</Link>

<a
  href={WHATSAPP_HREF}
  target="_blank"
  rel="noopener noreferrer"
  className="block font-medium underline-offset-4 hover:underline"
  style={{ color: "var(--muted)" }}
  onClick={() =>
    event({
      action: "click_whatsapp",
      category: "contact",
      label: c.title,
    })
  }
>
  {c.phone}
</a>

        </Card>
      ))}
    </div>
  );
}
