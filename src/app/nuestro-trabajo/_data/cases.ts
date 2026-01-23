export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  serviceTags: string[];
  highlights: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  outcome: string[];
  images: {
    cover: string;
    mid: string;
    end: string;
  };
};

export const CASES: CaseStudy[] = [
  {
    slug: "too-much-bueno",
    title: "Too Much Bueno",
    client: "Too Much Bueno",
    category: "Desarrollo eCommerce",
    summary:
      "Ejecución end-to-end para una tienda con catálogo amplio, priorizando claridad de navegación, performance y un checkout sin fricción.",
    serviceTags: ["Shopify", "UX", "Performance", "Checkout"],
    highlights: [
      { label: "CVR", value: "+18%" },
      { label: "Speed", value: "1.1s" },
      { label: "AOV", value: "+9%" },
    ],
    challenge:
      "El sitio funcionaba, pero no convertía: demasiadas decisiones por pantalla, jerarquía débil y fricción en el flujo de compra.",
    approach: [
      "Reorganización de arquitectura y navegación (categorías + búsqueda).",
      "Rediseño de PDP y carrito con foco en claridad.",
      "Ajustes de performance y optimización de assets.",
    ],
    outcome: [
      "Flujo de compra más corto y consistente.",
      "Mejor lectura del catálogo y menos dudas pre-compra.",
      "Base sólida para iterar campañas sin romper UX.",
    ],
    images: {
      cover: "/work/cases/tmb-portada.png",
      mid: "/placeholders/cases/case-02.jpg",
      end: "/placeholders/cases/case-03.jpg",
    },
  },
  {
    slug: "maki",
    title: "Maki",
    client: "Maki",
    category: "Tienda desde cero",
    summary:
      "Diseño y construcción de tienda desde cero con estética cuidada, componentes reutilizables y un sistema listo para escalar catálogo.",
    serviceTags: ["Shopify", "Brand UI", "Estructura", "Lanzamiento"],
    highlights: [
      { label: "Time-to-launch", value: "7 días" },
      { label: "UX", value: "Limpia" },
      { label: "Setup", value: "Completo" },
    ],
    challenge:
      "Necesitaban lanzar rápido sin perder calidad: catálogo, estructura, pagos, envíos y una estética coherente con la marca.",
    approach: [
      "Sistema UI (tipografía, botones, cards) consistente.",
      "Secciones clave: home, servicios, casos y contacto.",
      "Configuración base de analytics + eventos críticos.",
    ],
    outcome: [
      "Lanzamiento sin improvisación.",
      "Diseño estable y fácil de mantener.",
      "Base lista para campañas y crecimiento.",
    ],
    images: {
      cover: "/work/cases/maki-portada.png",
      mid: "/placeholders/cases/case-05.jpg",
      end: "/placeholders/cases/case-06.jpg",
    },
  },
  {
    slug: "urufarma",
    title: "Urufarma",
    client: "Urufarma",
    category: "Optimización",
    summary:
      "Mejoras de performance, jerarquía visual y limpieza del checkout para aumentar cierres con el mismo tráfico.",
    serviceTags: ["CRO", "Performance", "Checkout", "UX Audit"],
    highlights: [
      { label: "Speed", value: "-22%" },
      { label: "Abandono", value: "-11%" },
      { label: "Tickets", value: "↓" },
    ],
    challenge:
      "Había intención de compra, pero el sitio se percibía pesado y el proceso generaba dudas en puntos críticos.",
    approach: [
      "Auditoría de fricciones (PDP, carrito, checkout).",
      "Optimización de scripts/imagenes y layout shifts.",
      "Ajustes de copy UX en pasos críticos.",
    ],
    outcome: [
      "Mejor experiencia percibida.",
      "Menos fricción en el cierre.",
      "Sitio más liviano y consistente.",
    ],
    images: {
      cover: "/work/cases/urufarma-portada.png",
      mid: "/placeholders/cases/case-08.jpg",
      end: "/placeholders/cases/case-09.jpg",
    },
  },
  {
    slug: "cosplay",
    title: "Cosplay Anime Store",
    client: "Cosplay Anime Store",
    category: "Soluciones a medida",
    summary:
      "Implementación de automatizaciones, integraciones y estructura para campañas, priorizando control operativo y estabilidad.",
    serviceTags: ["Integraciones", "Automations", "Operación", "Shopify"],
    highlights: [
      { label: "Automations", value: "+5" },
      { label: "Operación", value: "Más simple" },
      { label: "Errores", value: "↓" },
    ],
    challenge:
      "Mucho trabajo manual y seguimiento disperso: necesitaban orden en post-compra e integraciones robustas.",
    approach: [
      "Automatizaciones post-compra (emails/segmentos).",
      "Integración de herramientas operativas.",
      "Estandarización de procesos recurrentes.",
    ],
    outcome: [
      "Menos manualidad y más consistencia.",
      "Operación preparada para volumen.",
      "Mejor control de post-venta.",
    ],
    images: {
      cover: "/work/cases/cosplay-portada.png",
      mid: "/placeholders/cases/case-11.jpg",
      end: "/placeholders/cases/case-12.jpg",
    },
  },
  {
    slug: "epoca",
    title: "epoca",
    client: "Atelier Goods",
    category: "Auditoría",
    summary:
      "Diagnóstico completo de UX, performance y conversión con quick wins claros y un roadmap priorizado para ejecutar.",
    serviceTags: ["Audit", "Roadmap", "CRO", "UX"],
    highlights: [
      { label: "Roadmap", value: "4 semanas" },
      { label: "Quick wins", value: "12" },
      { label: "Prioridad", value: "Alta" },
    ],
    challenge:
      "Tenían tráfico, pero no un plan: cambios aislados y sin prioridades. Necesitaban criterio y secuencia.",
    approach: [
      "Mapeo de fricciones por página y por etapa del funnel.",
      "Listado de quick wins + iniciativas de impacto.",
      "Orden de ejecución por esfuerzo/impacto.",
    ],
    outcome: [
      "Plan claro y accionable.",
      "Mejor coordinación de mejoras.",
      "Base para iteración mensual.",
    ],
    images: {
      cover: "/work/cases/epoca-portada.png",
      mid: "/placeholders/cases/case-14.jpg",
      end: "/placeholders/cases/case-15.jpg",
    },
  },
  {
    slug: "esquina-cafe",
    title: "Esquina Cafe",
    client: "Esquina Cafe",
    category: "Desarrollo Ecommerce",
    summary:
      "Acompañamiento mensual para ejecutar mejoras, sostener iteración y mantener la tienda ordenada y rápida.",
    serviceTags: ["Gestión", "Iteración", "UX", "Performance"],
    highlights: [
      { label: "Cadencia", value: "Mensual" },
      { label: "Backlog", value: "Ordenado" },
      { label: "Mejoras", value: "Constantes" },
    ],
    challenge:
      "No era un problema grande puntual, sino muchos pequeños: necesitaban ritmo, criterio y continuidad.",
    approach: [
      "Backlog priorizado y sprints cortos.",
      "Monitoreo de performance y fricciones recurrentes.",
      "Optimización continua de páginas clave.",
    ],
    outcome: [
      "Mejoras sostenidas en el tiempo.",
      "Menos deuda UX/tech acumulada.",
      "Operación más estable.",
    ],
    images: {
      cover: "/work/cases/esquinacafe-portada.png",
      mid: "/placeholders/cases/case-17.jpg",
      end: "/placeholders/cases/case-18.jpg",
    },
  },
  {
    slug: "finacc-vega",
    title: "Finacc Vega",
    client: "Finacc Vega",
    category: "Soluciones a medida.",
    summary:
      "Revisión de arquitectura y sistema de componentes para escalar nuevas secciones sin romper estética ni consistencia.",
    serviceTags: ["Sistema UI", "Arquitectura", "Componentes", "Mantenible"],
    highlights: [
      { label: "Sistema", value: "Unificado" },
      { label: "Entrega", value: "Prolija" },
      { label: "Escala", value: "Alta" },
    ],
    challenge:
      "Crecimiento rápido: cada nueva sección se sentía distinta. Necesitaban coherencia y una base reusable.",
    approach: [
      "Normalización de spacing, tipografía y grids.",
      "Componentes reutilizables (cards, CTAs, headers).",
      "Estándares para futuras páginas.",
    ],
    outcome: [
      "Más coherencia visual.",
      "Desarrollo más rápido.",
      "Menos retrabajo.",
    ],
    images: {
      cover: "/work/cases/finaccvega-portada.png",
      mid: "/placeholders/cases/case-20.jpg",
      end: "/placeholders/cases/case-21.jpg",
    },
  },
  {
    slug: "huella-propia",
    title: "Huella Propia",
    client: "Huella Propia",
    category: "Desarrollo Ecommerce",
    summary:
      "Mejoras enfocadas en confianza, claridad y micro-fricciones: menos dudas, más intención convertida en compra.",
    serviceTags: ["CRO", "Confianza", "UX", "Checkout"],
    highlights: [
      { label: "Dudas", value: "↓" },
      { label: "Cierres", value: "↑" },
      { label: "Claridad", value: "↑" },
    ],
    challenge:
      "El producto era bueno, pero el sitio no daba suficiente seguridad en los momentos que importan.",
    approach: [
      "Ajuste de jerarquía en PDP (beneficios, pruebas, envío).",
      "Refuerzo de señales de confianza (reviews, políticas).",
      "Limpieza de checkout (menos ruido, más foco).",
    ],
    outcome: [
      "Menos fricción psicológica.",
      "Mejor lectura del valor.",
      "Más consistencia en conversiones.",
    ],
    images: {
      cover: "/work/cases/huella-portada.png",
      mid: "/placeholders/cases/case-23.jpg",
      end: "/placeholders/cases/case-24.jpg",
    },
  },
];
