"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nuestro-trabajo", label: "Nuestro Trabajo" },
  { href: "/nosotros", label: "Nosotros" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);

    const stored = (localStorage.getItem("theme") as "light" | "dark" | null) ?? null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema"
      className="inline-flex items-center justify-center h-9 w-9 rounded-xl border"
      style={{
        borderColor: "var(--border)",
        color: "var(--text)",
        background: "color-mix(in srgb, var(--surface) 65%, transparent)",
      }}
    >
      <span className="text-sm leading-none" style={{ fontFamily: "var(--font-work)" }}>
        {theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menú"
        className="inline-flex items-center justify-center h-9 px-3 rounded-xl border text-sm font-semibold"
        style={{
          fontFamily: "var(--font-work)",
          borderColor: "var(--border)",
          color: "var(--text)",
          background: "color-mix(in srgb, var(--surface) 65%, transparent)",
        }}
      >
        Menú
      </button>

      {open && (
        <>
          {/* Backdrop para cerrar al tocar fuera */}
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
            style={{ background: "transparent" }}
          />

          <div
            className="absolute right-0 mt-3 w-64 z-50 rounded-xl border shadow-lg backdrop-blur-md"
            style={{
              background: "color-mix(in srgb, var(--bg) 85%, transparent)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex flex-col p-3 gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm"
                    style={{
                      fontFamily: "var(--font-work)",
                      color: active ? "var(--text)" : "var(--muted)",
                      background: active
                        ? "color-mix(in srgb, var(--surface) 70%, transparent)"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 h-px" style={{ background: "var(--border)" }} />

              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-9 rounded-lg text-sm font-semibold border"
                style={{
                  fontFamily: "var(--font-work)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                  background: "color-mix(in srgb, var(--surface) 65%, transparent)",
                }}
              >
                Contacto
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const showTransparentIdle = useMemo(() => isHome && !scrolled, [isHome, scrolled]);

  const shellStyle: React.CSSProperties = showTransparentIdle
    ? {
        background: "transparent",
        borderColor: "transparent",
        boxShadow: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }
    : {
        background: "color-mix(in srgb, var(--bg) 72%, transparent)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-sm)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1120px,calc(100%-2rem))]">
      <div
        className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border rounded-2xl transition-all duration-200"
        style={shellStyle}
      >
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-sm sm:text-base font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-work)", color: "var(--text)" }}
        >
          Interact Studio
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-xl text-sm transition-colors"
                style={{
                  fontFamily: "var(--font-work)",
                  color: active ? "var(--text)" : "var(--muted)",
                  background: active
                    ? "color-mix(in srgb, var(--surface) 70%, transparent)"
                    : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* Toggle visible siempre */}
          <ThemeToggle />

          {/* Contacto solo en desktop */}
          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-xl border text-sm font-semibold"
            style={{
              fontFamily: "var(--font-work)",
              borderColor: "var(--border)",
              color: "var(--text)",
              background: "color-mix(in srgb, var(--surface) 65%, transparent)",
            }}
          >
            Contacto
          </Link>

          {/* Menú mobile (incluye Contacto) */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}