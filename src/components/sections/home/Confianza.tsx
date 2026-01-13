"use client";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  bgImageUrl?: string;
};

export default function ConfianzaSection({ bgImageUrl }: Props) {
  return (
    <section
      id="confianza"
      className="relative bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Tech backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(8,51,68,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,51,68,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* glow */}
        <div
          className="absolute -top-48 left-1/2 h-[420px] w-[980px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245,166,35,0.18), rgba(245,166,35,0.00) 60%)",
          }}
        />
      </div>

      {/* Wide container */}
      <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        <div
          className={cn(
            "relative overflow-hidden rounded-[28px] md:rounded-[36px]",
            "bg-[var(--card)]",
            "ring-1 ring-black/5",
            "shadow-[0_20px_70px_rgba(0,0,0,0.12)]"
          )}
        >
          {/* Background image / gradient */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: [
                // neutral contrast veil that works in light & dark
                "linear-gradient(90deg, rgba(6,33,26,0.70) 0%, rgba(6,33,26,0.45) 42%, rgba(6,33,26,0.00) 70%)",
                bgImageUrl ? `url(${bgImageUrl})` : "",
              ]
                .filter(Boolean)
                .join(", "),
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Grain */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Content */}
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-12">
            {/* Copy */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Confianza
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Una experiencia que se siente sólida desde el primer scroll.
              </h2>

              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/75">
                La confianza no es un badge. Es velocidad, claridad, checkout
                limpio y señales visuales correctas. Diseñamos tiendas que
                reducen fricción y aumentan intención de compra.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contacto"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
                    "bg-[var(--accent)] text-[var(--accentFg)] hover:opacity-90 transition",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-transparent"
                  )}
                >
                  Hablemos
                </a>

                <a
                  href="/servicios"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
                    "bg-white/10 text-white hover:bg-white/15 transition",
                    "ring-1 ring-white/20",
                    "focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
                  )}
                >
                  Ver servicios
                </a>
              </div>

              {/* Small tagline */}
              <div className="mt-10 flex items-start gap-3 max-w-xs">
                <div className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                <p className="text-sm text-white/70">
                  Todos necesitan confianza. No todos la construyen bien.
                </p>
              </div>
            </div>

            {/* Spacer column */}
            <div className="lg:col-span-6" />

            {/* Floating notification */}
            <div className="absolute right-6 top-6 md:right-10 md:top-10">
              <div
                className={cn(
                  "rounded-2xl bg-[var(--card)]/90 backdrop-blur-md",
                  "ring-1 ring-black/5",
                  "shadow-[0_18px_55px_rgba(0,0,0,0.18)]",
                  "px-4 py-3 md:px-5 md:py-4",
                  "w-[280px] md:w-[320px]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-[var(--text)]">
                    Notificación
                  </p>
                  <span className="text-xs text-[var(--muted)]">ahora</span>
                </div>

                <p className="mt-2 text-sm text-[var(--text)] leading-relaxed">
                  Checkout optimizado y señales de confianza implementadas.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Speed", "Trust", "UX"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/5 ring-1 ring-black/5 px-2.5 py-1 text-[11px] font-semibold text-[var(--text)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Accent flare */}
            <div
              aria-hidden
              className="absolute -right-28 -top-28 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(245,166,35,0.26), rgba(245,166,35,0.00) 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
