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
      mid: "/work/cases/tmb-detalle.png",
      end: "/work/cases/tmb-end.mp4",
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
      mid: "/work/cases/maki-detalle1.png",
      end: "/work/cases/maki-end.mp4",
    },
  },

  {
    slug: "elvani",
    title: "Elvani",
    client: "Elvani",
    category: "Desarrollo Ecommerce",
    summary:
      "Desarrollo de tienda online y solución a medida para una marca de muebles, integrando un sistema inteligente de cotización para piezas fabricadas a pedido.",
    serviceTags: [],
    highlights: [
      { label: "Cotizacion", value: "Automatizada" },
      { label: "Proceso", value: "Digitalizado" },
      { label: "Error Humano", value: "↓" },
    ],
    context: [
      "Elvani di Bravena es una empresa dedicada a la venta de muebles radicada en el exterior. Su propuesta combina diseño, materiales nobles y fabricación personalizada.",
      "El canal digital debía cumplir un doble rol: representar correctamente el nivel de la marca y, al mismo tiempo, resolver un problema complejo como la cotización de muebles hechos a medida.",
    ],
    challenge:
      "El principal desafío fue trasladar un proceso tradicionalmente manual —la cotización de piezas personalizadas— a un entorno digital sin perder precisión, criterio ni percepción de valor. La tienda debía funcionar tanto como canal de venta de productos estándar como herramienta para iniciar proyectos de fabricación a medida de forma clara y eficiente.",
    approach: [
      "Desarrollo de tienda online desde cero, alineada a una marca de calidad.",
      "Integración de bases de datos con un modelo de inteligencia artificial entrenado.",
      "Diseño sobrio y elegante, enfocado en producto y detalle.",
    ],
    outcome: [
      "Proceso de cotización digital claro y ordenado.",
      "Mejor experiencia para clientes interesados en piezas a medida.",
      "Canal digital alineado al nivel y proyeccion de la marca.",
    ],
    images: {
      cover: "/work/cases/elvani-portada1.png",
      mid: "/work/cases/elvani-detalle.png",
      end: "/work/cases/elvani-end.mp4",
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
      mid: "/work/cases/cosplay-detalle3.png",
      end: "/work/cases/cosplay-end.mp4",
    },
  },

  {
    slug: "epoca",
    title: "Época",
    client: "Época",
    category: "Desarrollo Ecommerce",
    summary:
      "Desarrollo de tienda online desde cero para una marca de indumentaria clásica y elegante en Estados Unidos, cuidando la estética, la experiencia y un sistema de venta alineado al nivel de la marca.",
    serviceTags: [],
    highlights: [
      { label: "Ventas", value: "Inmediatas" },
      { label: "Experiencia", value: "Premium" },
      { label: "Canales", value: "Fisico + Online" },
    ],
    context: [
      "Época nació desde el inicio como un negocio con presencia física y digital. La tienda online debía estar a la altura de una marca de clase, transmitiendo elegancia, atemporalidad y confianza desde el primer contacto.",
      "El enfoque fue claro: una tienda sobria, ordenada y funcional, donde el diseño acompañe al producto y la experiencia facilite la compra sin distracciones.",
    ],
    challenge:
      "Crear una tienda online que represente correctamente a una marca premium, evitando soluciones genéricas y cuidando cada detalle visual y funcional, sin comprometer la conversión. El desafío fue equilibrar estética y performance, logrando un sitio que se vea bien, funcione bien y venda desde el primer momento.",
    approach: [
      "Desarrollo de tienda online desde cero.",
      "Diseño personalizado alineado a la identidad de la marca.",
      "Estructura clara de catálogo y colecciones.",
      "Experiencia de compra limpia y sin fricción.",
    ],
    outcome: [
      "Ventas online desde los primeros días.",
      "Experiencia coherente con la imagen de marca.",
      "Canal digital integrado al negocio físico.",
      "Base sólida para escalar sin perder identidad.",
    ],
    images: {
      cover: "/work/cases/epoca-portada.png",
      mid: "/work/cases/epoca-detalle.png",
      end: "/work/cases/epoca-end.mp4",
    },
  },

  {
    slug: "esquina-cafe",
    title: "Esquina Café",
    client: "Esquina Café",
    category: "Soluciones a medida",
    summary:
      "Desarrollo de una solución a medida para que los clientes puedan comprar desde una app web y retirar en el local, reduciendo filas y ordenando la operación diaria de un café en Buenos Aires.",
    serviceTags: [],
    highlights: [
      { label: "Pedidos", value: "Centralizados" },
      { label: "Filas", value: "↓" },
      { label: "Experiencia", value: "Fluida" },
    ],
    context: [
      "Esquina Café es un café de especialidad con alto flujo de clientes en determinados horarios. La experiencia en el mostrador funcionaba, pero las filas y la gestión manual de pedidos empezaban a generar fricción tanto para el equipo como para los clientes.",
      "El objetivo fue claro: agilizar la compra, ordenar la operación y mejorar la experiencia dentro del local, sin perder el trato cercano propio del café.",
    ],
    challenge:
      "Reducir tiempos de espera y centralizar pedidos en un solo canal, evitando errores, desorden y cuellos de botella en horas pico. La solución debía ser simple de usar para el cliente y fácil de gestionar para el equipo del local.",
    approach: [
      "Desarrollo de una app web de pedidos a medida.",
      "Sistema de compra anticipada con retiro en el local.",
      "Diseño enfocado en rapidez, claridad y uso cotidiano.",
    ],
    outcome: [
      "Menos filas y menor tiempo de espera.",
      "Mejor experiencia para clientes frecuentes.",
      "Herramienta digital integrada al funcionamiento diario del café.",
    ],
    images: {
      cover: "/work/cases/esquinacafe-portada.png",
      mid: "/work/cases/esquina-detalle.png",
      end: "/work/cases/esquina-end.mp4",
    },
  },

  {
    slug: "huella-propia",
    title: "Huella Propia",
    client: "Huella Propia",
    category: "Desarrollo Ecommerce",
    summary:
      "Optimización de tienda online para una joyería artesanal en un momento crítico de crecimiento, enfocada en ordenar el proceso de venta, reforzar la confianza y evitar la pérdida de pedidos.",
    serviceTags: [],
    highlights: [
      { label: "Gestion", value: "Mas clara" },
      { label: "Canal de venta", value: "Profesionalizado" },
      { label: "Catalogo", value: "100% Digitalizado" },
    ],
    context: [
      "Huella Propia es una joyería artesanal con una base de clientas fiel, pero con un volumen de consultas y pedidos que había empezado a desbordar la venta por mensajes directos.",
      "El sitio debía cumplir un rol claro: ordenar la venta, transmitir confianza y sostener el crecimiento, sin perder el carácter artesanal de la marca.",
    ],
    challenge:
      "El negocio se encontraba en un punto sensible de expansión. La venta por Instagram generaba confusión, pedidos duplicados y fricción en la coordinación de pagos y entregas. El desafío fue transformar ese interés en un proceso claro, profesional y confiable, tanto para la marca como para sus clientas.",
    approach: [
      "Desarrollo y optimización de tienda online.",
      "Reorganización del catálogo y jerarquía de productos.",
      "Mejora del flujo de compra para reducir dudas.",
      "Refuerzo de señales de confianza en puntos críticos.",
      "Ajustes de checkout para simplificar el cierre de la compra.",
      "Acompañamiento inicial y capacitación para la gestión diaria.",

    ],
    outcome: [
      "Menos fricción en el proceso de compra.",
      "Mayor claridad para las clientas al momento de elegir y pagar.",
      "Pedidos más ordenados y fáciles de gestionar.",
      "Base estable para seguir creciendo sin perder control.",
    ],
    images: {
      cover: "/work/cases/huella-portada.png",
      mid: "/work/cases/huella-detalle.png",
      end: "/work/cases/huella-end.mp4",
    },
  },

{
    slug: "finacc-vega",
    title: "Finacc Vega",
    client: "Finacc Vega",
    category: "Soluciones a medida",
    summary:
      "Desarrollo de una solución a medida para una empresa de asesoramiento contable y construcción de crédito en Estados Unidos, permitiendo la contratación de servicios y cobro a distancia desde cualquier parte del mundo.",
    serviceTags: [],
    highlights: [
      { label: "Gestion", value: "Centralizada" },
      { label: "Alcance", value: "Global" },
      { label: "Cobros", value: "Internacionales" },
    ],
    context: [
      "Finacc Vega es una empresa fundada por una contadora especializada en construcción de crédito y asesoramiento financiero para clientes en Estados Unidos. Su trabajo requiere confianza, claridad y procesos bien definidos.",
      "El canal digital debía permitir vender servicios profesionales de forma remota, gestionar pagos recurrentes y adaptarse a clientes en distintos países y monedas.",
    ],
    challenge:
      "Centralizar la contratación de servicios y el cobro en una sola plataforma, evitando gestiones manuales, transferencias dispersas y barreras geográficas. La solución debía ser simple para el cliente y confiable para un negocio basado en relaciones de largo plazo.",
    approach: [
      "Desarrollo de solución a medida con web institucional.",
      "Sistema de pagos a distancia en distintas monedas.",
      "Estructuración de flujos claros para clientes internacionales.",
    ],
    outcome: [
      "Cobros digitales centralizados y ordenados.",
      "Menor carga administrativa manual.",
      "Experiencia clara y profesional para los clientes.",
    ],
    images: {
      cover: "/work/cases/finaccvega-portada.png",
      mid: "/work/cases/finacc-detalle.png",
      end: "/work/cases/finacc-end.mp4",
    },
  },
];
