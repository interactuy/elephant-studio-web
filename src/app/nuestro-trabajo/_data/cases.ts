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
    category: "Desarrollo Ecommerce",
    summary:
      "Desarrollo de tienda online desde cero para ordenar la demanda, facilitar la exploración del catálogo y profesionalizar el canal digital de un emprendimiento gastronómico en crecimiento radicado en Miami.",
    serviceTags: [],
    highlights: [
      { label: "Canal de ventas", value: "→ Online" },
      { label: "Operativa", value: "Eficiente" },
      { label: "Ventas", value: "+20%" },
    ],
    context: [
      "Too Much Bueno venía creciendo rápido. El boca a boca funcionaba, los pedidos aumentaban y los clientes pedían una forma más clara de ver productos, sabores y opciones disponibles.",
      "El objetivo fue claro: transformar la demanda en un sistema ordenado y confiable. Una tienda que no solo muestre productos, sino que acompañe el crecimiento del negocio y mejore la experiencia del cliente desde el primer contacto.",
    ],
    challenge:
      "La venta dependía de intercambios manuales, lo que generaba fricción, pérdida de tiempo y una imagen poco profesional frente a una marca que ya tenía alto nivel de aceptación.",

    approach: [
      "Desarrollo de tienda online desde cero, adaptada al negocio.",
      "Diseño personalizado alineado a la identidad de la marca.",
      "Estructuración clara del catálogo y navegación simple.",
      "Implementación de formularios y flujos de pedido optimizados.",
      "Automatización de tarifas de envío según zona.",
      "Integración de cobro fraccionado y métodos de pago digitales.",
      "Creación de descripciones de producto claras y atractivas.",
      "Código a medida para cubrir necesidades específicas del negocio.",

    ],
    outcome: [
      "Ventas online desde los primeros días.",
      "Menos fricción en el proceso de compra.",
      "Imagen más profesional y confiable del emprendimiento.",
      "Imagen más profesional y confiable del emprendimiento.",
      "Base sólida para seguir creciendo sin perder control operativo.",
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
    category: "Desarrollo Ecommerce",
    summary:
      "Desarrollo de tienda online desde cero para digitalizar catálogo, ordenar la experiencia de compra y convertir el sitio en una herramienta real de expansión y alcance.",
    serviceTags: [],
    highlights: [
      { label: "Catalogo", value: "100% Online" },
      { label: "Base", value: "Escalable" },
      { label: "Experiencia", value: "Ordenada" },
    ],
    context: [
      "Cosplay Anime Store es un negocio físico con local propio que necesitaba dar el salto al canal digital. Venían de una experiencia previa negativa con otra empresa, con un sitio poco funcional y difícil de gestionar.",
      "El objetivo fue claro: ordenar, profesionalizar y construir una base sólida que permita crecer sin depender únicamente del punto de venta físico.",
    ],
    challenge:
      "Digitalizar un catálogo amplio y variado, mejorar la experiencia de compra y crear un canal online confiable que acompañe la expansión del negocio, sin repetir errores del pasado.",
    approach: [
      "Desarrollo de tienda online desde cero.",
      "Organización de catálogo y categorías para una navegación clara.",
      "Diseño personalizado alineado al universo de la marca.",
      "Implementación de pagos online y automatización de envíos.",
      "Configuración del sitio como herramienta de crecimiento y alcance digital.",
    ],
    outcome: [
      "Catálogo digital ordenado y fácil de gestionar.",
      "Experiencia de compra más clara y confiable.",
      "Nuevo canal de venta listo para escalar.",
      "Base sólida para ampliar alcance más allá del local físico.",
    ],
    images: {
      cover: "/work/cases/cosplay-portada.png",
      mid: "/work/cases/cosplay-deta.png",
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
