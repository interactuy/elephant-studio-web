"use client";

type Service = {
  name: string;
  description: string;
  pills: string[];
};

const SERVICES: Service[] = [
  {
    name: "Auditoría",
    description:
      "Análisis integral de tu eCommerce con foco en conversión, UX, performance y tracking. Priorizamos acciones por impacto y esfuerzo.",
    pills: ["CRO", "UX", "Performance", "Tracking"],
  },
  {
    name: "Soluciones a medida",
    description:
      "Integraciones, automatizaciones y funcionalidades custom para tu operación. Menos fricción, más escalabilidad.",
    pills: ["Integraciones", "Automatizaciones", "APIs"],
  },
  {
    name: "Desarrollo eCommerce",
    description:
      "Construcción y evolución de tiendas pensadas para vender: arquitectura sólida, UI clara y código mantenible.",
    pills: ["Shopify", "UI System", "Checkout"],
  },
  {
    name: "Optimización",
    description:
      "Mejoras continuas sobre lo que mueve el número: velocidad, confianza y flujo de compra. Medimos y ejecutamos.",
    pills: ["Speed", "PDP/PLP", "Confianza"],
  },
  {
    name: "Gestión",
    description:
      "Acompañamiento mensual: soporte, releases, backlog y reporting. Prioridades claras y ejecución constante.",
    pills: ["Soporte", "Roadmap", "Reporting"],
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      // Fondo POR TOKENS -> cambia con data-theme
      className="relative bg-[var(--bg)] text-[var(--text)]"
    >

      {/* Container más ancho */}
      <div className="relative mx-auto w-full max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-start gap-3">
            <span aria-hidden className="mt-2 h-6 w-1 rounded-full bg-[var(--accent)]" />
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Servicios
              </h2>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-[var(--muted)]">
                Diseño y desarrollo con foco en ventas: claro, medible y sólido.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 arriba / 3 abajo */}
        <div className="mt-12 grid gap-6 md:grid-cols-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.name}
              className={cn(
                "group rounded-2xl bg-[var(--card)]",
                // borde muy sutil + sombra premium
                "ring-1 ring-black/5",
                "shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.12)]",
                "overflow-hidden",
                i < 2 ? "md:col-span-3" : "md:col-span-2"
              )}
            >
              {/* Accent top line */}
              <div className="h-1 w-full bg-[var(--accent)] opacity-80" />

              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {s.name}
                </h3>

                <p className="mt-3 text-[var(--muted)] leading-relaxed">
                  {s.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.pills.map((pill) => (
                    <span
                      key={pill}
                      className={cn(
                        "rounded-full px-3 py-1 text-sm font-medium",
                        // pills más “tech”: surface + borde sutil
                        "bg-black/5 ring-1 ring-black/5",
                        "text-[var(--text)]"
                      )}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* micro CTA (opcional, suma “producto”) */}
                <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                  <span className="text-sm text-[var(--muted)]">
                    Ver alcance típico
                  </span>
                  <a
                    href="/servicios"
                    className={cn(
                      "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
                      "bg-black/5 hover:bg-black/7 transition",
                      "ring-1 ring-black/5",
                      "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                    )}
                  >
                    Detalle
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-14">
          <div className="rounded-2xl bg-[var(--text)] text-[var(--bg)] p-7 md:p-8 shadow-[0_16px_60px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h4 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Ver servicios en detalle
                </h4>
                <p className="mt-1 text-sm md:text-base opacity-80">
                  Alcance, entregables y ejemplos reales por servicio.
                </p>
              </div>

              <a
                href="/servicios"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold",
                  "bg-[var(--bg)] text-[var(--text)] hover:opacity-95 transition",
                  "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--text)]"
                )}
              >
                Ir a /servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
