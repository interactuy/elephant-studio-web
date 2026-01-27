export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  serviceTags: string[];
  highlights: { label: string; value: string }[];
  challenge: string;

  // Contexto y enfoque del caso
  context: string[];

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
    context: [
      "El sitio funcionaba a nivel técnico, pero no acompañaba el proceso de decisión del usuario.",
      "El enfoque estuvo en ordenar jerarquía, reducir ruido y transformar la navegación en un sistema claro y predecible para comprar.",
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
    category: "Desarrollo Ecommerce",
    summary:
      "Diseño y construcción de tienda online para ordenar ventas, profesionalizar el canal digital y acompañar el crecimiento desde Instagram hacia un eCommerce propio.",
    serviceTags: [],
    highlights: [
      { label: "Lanzamiento", value: "10 días" },
      { label: "Canales de venta", value: "1 → 2" },
      { label: "Productos digitalizados", value: "100%" },
    ],
    context: [
      "Maki vendía principalmente a través de Instagram, con una estética muy cuidada pero con limitaciones operativas a medida que el volumen crecía. El objetivo fue ordenar el proceso de venta, mantener la identidad natural de la marca y crear un canal propio que permita vender con claridad y sin fricción.",
      "El trabajo se enfocó en transformar ese universo visual en una tienda online funcional, fácil de gestionar y preparada para escalar sin perder coherencia.",
    ],
    challenge:
      "Necesitaban profesionalizar el canal de venta sin perder cercanía ni estética. Ordenar catálogo, implementar cobros online, centralizar pedidos y acompañar a la fundadora en el uso diario de la tienda.",
    approach: [
      "Diseño y desarrollo de tienda online alineada a la identidad de la marca.",
      "Implementación de pagos online con Mercado Pago.",
      "Organización de catálogo y estructura de navegación.",
      "Gestión inicial de la tienda y acompañamiento post-lanzamiento.",
      "Capacitación al cliente para la operación diaria."
    ],
    outcome: [
      "Canal de venta propio, claro y profesional.",
      "Proceso de compra más ordenado y confiable",
      "Base lista para ampliar catálogo y sostener crecimiento.",
      "Autonomía para la fundadora en la gestión diaria.",
    ],
    images: {
      cover: "/work/cases/maki-portada.png",
      mid: "/work/cases/maki-detalle.png",
      end: "/work/cases/maki-cierre.png",
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
    context: [
      "El sitio tenía intención de compra, pero la experiencia se percibía pesada y poco clara en momentos clave.",
      "Se trabajó sobre fricciones reales para reforzar confianza y fluidez sin alterar la identidad visual.",
    ],
    challenge:
      "Había intención de compra, pero el sitio se percibía pesado y el proceso generaba dudas en puntos críticos.",
    approach: [
      "Auditoría de fricciones en PDP, carrito y checkout.",
      "Optimización de scripts, imágenes y layout shifts.",
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
    context: [
      "La operación dependía de tareas manuales y seguimientos dispersos.",
      "El foco estuvo en centralizar procesos y automatizar flujos clave para sostener volumen sin fricción.",
    ],
    challenge:
      "Mucho trabajo manual y seguimiento disperso: necesitaban orden en post-compra e integraciones robustas.",
    approach: [
      "Automatizaciones post-compra.",
      "Integración de herramientas operativas.",
      "Estandarización de procesos recurrentes.",
    ],
    outcome: [
      "Menos manualidad.",
      "Mayor consistencia operativa.",
      "Base preparada para escalar.",
    ],
    images: {
      cover: "/work/cases/cosplay-portada.png",
      mid: "/placeholders/cases/case-11.jpg",
      end: "/placeholders/cases/case-12.jpg",
    },
  },

  {
    slug: "epoca",
    title: "Época",
    client: "Época",
    category: "Auditoría",
    summary:
      "Diagnóstico completo de UX, performance y conversión con quick wins claros y un roadmap priorizado.",
    serviceTags: ["Audit", "Roadmap", "CRO", "UX"],
    highlights: [
      { label: "Roadmap", value: "4 semanas" },
      { label: "Quick wins", value: "12" },
      { label: "Prioridad", value: "Alta" },
    ],
    context: [
      "La marca tenía tráfico y producto, pero carecía de un plan claro de mejora.",
      "El trabajo se centró en aportar criterio, secuencia y foco para tomar mejores decisiones.",
    ],
    challenge:
      "Tenían tráfico, pero no un plan: cambios aislados y sin prioridades.",
    approach: [
      "Mapeo de fricciones por página y etapa del funnel.",
      "Listado de quick wins e iniciativas de impacto.",
      "Priorización por esfuerzo e impacto.",
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
    title: "Esquina Café",
    client: "Esquina Café",
    category: "Soluciones a medida",
    summary:
      "Desarrollo de una app web para centralizar pedidos, reducir filas y ordenar la operación diaria del local.",
    serviceTags: ["Web App", "Pedidos", "Operación", "UX"],
    highlights: [
      { label: "Pedidos", value: "Centralizados" },
      { label: "Filas", value: "↓" },
      { label: "Canal", value: "Único" },
    ],
    context: [
      "El crecimiento del flujo de clientes generaba filas y desorden en la toma de pedidos.",
      "La solución buscó concentrar todo en un solo canal y mejorar la experiencia sin complicar la operación.",
    ],
    challenge:
      "Reducir tiempos de espera y ordenar pedidos sin frenar el ritmo del local.",
    approach: [
      "Diseño y desarrollo de app web de pedidos.",
      "Flujo simple para clientes y staff.",
      "Implementación y puesta en marcha en el local.",
    ],
    outcome: [
      "Pedidos más ordenados.",
      "Menos espera para clientes.",
      "Operación más predecible.",
    ],
    images: {
      cover: "/work/cases/esquinacafe-portada.png",
      mid: "/placeholders/cases/case-17.jpg",
      end: "/placeholders/cases/case-18.jpg",
    },
  },

  {
    slug: "huella-propia",
    title: "Huella Propia",
    client: "Huella Propia",
    category: "Desarrollo Ecommerce",
    summary:
      "Creación de tienda online para ordenar ventas, reforzar confianza y acompañar un momento clave de expansión.",
    serviceTags: ["Shopify", "UX", "Checkout", "Confianza"],
    highlights: [
      { label: "Orden", value: "↑" },
      { label: "Confianza", value: "↑" },
      { label: "Fricción", value: "↓" },
    ],
    context: [
      "El negocio crecía y el canal de venta ya no acompañaba el volumen de consultas.",
      "El foco estuvo en profesionalizar la experiencia sin perder cercanía con las clientas.",
    ],
    challenge:
      "Transmitir seguridad y orden en los momentos clave de la compra.",
    approach: [
      "Diseño de tienda clara y confiable.",
      "Refuerzo de señales de confianza.",
      "Optimización de checkout.",
    ],
    outcome: [
      "Menos dudas en la compra.",
      "Proceso más claro.",
      "Base sólida para escalar.",
    ],
    images: {
      cover: "/work/cases/huella-portada.png",
      mid: "/placeholders/cases/case-23.jpg",
      end: "/placeholders/cases/case-24.jpg",
    },
  },
];
