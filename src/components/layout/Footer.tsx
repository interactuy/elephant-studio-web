"use client";

import React from "react";

/**
 * Elephant Studio — Footer
 * - Estilo como el ejemplo: 5 columnas arriba (logo + 4 columnas), newsletter en franja con input+botón,
 *   y barra final con copyright + redes.
 * - Dark/Light por tokens (var(--bg), var(--text), var(--muted), var(--border), var(--surface), var(--accent-warm))
 * - No requiere tocar tailwind.config
 */

type FooterLink = { label: string; href: string };

const footerLinks: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Soluciones",
    links: [
      { label: "Desarrollo eCommerce", href: "/#servicios" },
      { label: "Optimización", href: "/#servicios" },
      { label: "Auditoría", href: "/#servicios" },
      { label: "Gestión", href: "/#servicios" },
      { label: "Soluciones a medida", href: "/#servicios" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Contacto", href: "/#contacto" },
      { label: "Guías", href: "/guia" },
      { label: "Preguntas frecuentes", href: "/faq" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Trabajo", href: "/#trabajo" },
      { label: "Blog", href: "/blog" },
      { label: "Carreras", href: "/jobs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Licencias", href: "/licencias" },
    ],
  },
];

function LogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      {/* Marca simple (onda + punto) estilo “tech” */}
      <path
        d="M6 28c6-10 14-14 22-10 6 3 10 2 14-4-1 12-6 20-15 22-7 2-14-1-21-8Z"
        style={{ fill: "var(--accent)" }}
        opacity="0.9"
      />
      <circle cx="38" cy="12" r="2.6" style={{ fill: "var(--accent-warm)" }} />
    </svg>
  );
}

function SocialIcon({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full transition"
      style={{
        border: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--surface) 70%, transparent)",
        color: "var(--text)",
      }}
      aria-label={title}
      title={title}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-[var(--container)] lg:px-8">
        {/* TOP: logo + columns */}
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-5">
          {/* Logo column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3">
              <LogoMark className="h-9 w-9" />
              <span className="text-sm font-semibold tracking-tight">Elephant Studio</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6" style={{ color: "var(--muted)" }}>
              eCommerce pensado para vender. Diseño, performance y ejecución con criterio.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm transition"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={(e) => ((e.currentTarget.style.color as any) = "var(--text)")}
                        onMouseLeave={(e) => ((e.currentTarget.style.color as any) = "var(--muted)")}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "var(--border)" }} />

        {/* MIDDLE: newsletter row */}
        <div className="grid gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold">Suscribite al newsletter</p>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--muted)" }}>
              Novedades, aprendizajes y recursos. Una vez por semana, sin spam.
            </p>
          </div>

          <form
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder="Ingresá tu email"
              className="h-11 w-full rounded-xl px-4 text-sm outline-none sm:max-w-sm"
              style={{
                background: "color-mix(in srgb, var(--surface) 72%, transparent)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            />

            <button
              type="submit"
              className="h-11 rounded-xl px-5 text-sm font-semibold transition active:translate-y-px"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Suscribirme
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "var(--border)" }} />

        {/* BOTTOM: copyright + social */}
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Elephant Studio. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-3">
            {/* Facebook */}
            <SocialIcon title="Facebook" href="https://facebook.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14 9h2V6h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13v-2c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon title="Instagram" href="https://instagram.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
                  fill="currentColor"
                />
                <path
                  d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
                  fill="currentColor"
                />
                <path d="M17.5 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
              </svg>
            </SocialIcon>

            {/* X */}
            <SocialIcon title="X" href="https://x.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18.9 2H22l-6.8 7.8L23 22h-6.7l-5.2-6.6L5.2 22H2l7.4-8.5L1 2h6.9l4.7 6 6.3-6ZM17.7 19.7h1.8L7.2 4.2H5.3l12.4 15.5Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            {/* GitHub */}
            <SocialIcon title="GitHub" href="https://github.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.1-3.4-1.1-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.5 5 .3.3.6.8.6 1.7V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>

            {/* YouTube */}
            <SocialIcon title="YouTube" href="https://youtube.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
