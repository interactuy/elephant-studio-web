"use client";

import React from "react";

type LinkItem = { label: string; href: string };

const NAV: LinkItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Trabajo", href: "/nuestro-trabajo" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const LEGAL: LinkItem[] = [
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: simple nav */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right: contact */}
          <div className="text-sm">
            <a
              href="mailto:hola@interact.com.uy"
              className="transition"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              hola@interact.com.uy
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-3 py-4 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--muted)" }}>
            © {year} Interact Studio. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}

            {/* Optional: tiny separator + “Hecho en Uruguay” / “Montevideo” (si querés) */}
            {/* <span style={{ color: "var(--border)" }}>·</span>
            <span style={{ color: "var(--muted)" }}>Montevideo</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
