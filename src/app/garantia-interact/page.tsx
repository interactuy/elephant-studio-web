import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garantía Interact",
  description:
    "Bases y condiciones de la Garantía Interact aplicable a servicios de desarrollo de tienda online.",
};

export default function GarantiaPage() {
  return (
    <main
      className="mx-auto max-w-2xl px-6 pb-16 pt-28 lg:max-w-[var(--container)] lg:px-8"
      style={{ color: "var(--text)" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Garantía Interact</h1>

        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          Última actualización: {new Date().toLocaleDateString("es-UY")}
        </p>

        <section className="mt-10 space-y-6 text-sm leading-7">
          <h2 className="text-lg font-semibold">Bases y Condiciones</h2>

          <h3 className="text-base font-semibold">1. Objeto</h3>
          <p>
            La presente garantía regula las condiciones bajo las cuales Interact podrá proceder
            al reembolso del servicio de desarrollo de tienda online, exclusivamente en los casos
            previstos en este documento.
          </p>
          <p>
            La garantía no constituye una política de satisfacción subjetiva, sino un mecanismo de
            protección frente a incumplimientos técnicos verificables atribuibles al desarrollo
            realizado por Interact.
          </p>

          <h3 className="text-base font-semibold">2. Alcance de la garantía</h3>
          <p>La garantía será aplicable únicamente cuando se verifique alguna de las siguientes situaciones:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              a) Incumplimiento sustancial de los entregables expresamente definidos en la propuesta
              aceptada por el cliente.
            </li>
            <li>
              b) Existencia de fallas técnicas críticas atribuibles directamente al desarrollo
              efectuado por Interact que impidan el funcionamiento básico de la tienda online.
            </li>
            <li>
              c) Errores estructurales graves que afecten de manera significativa la operativa
              esencial del sitio.
            </li>
          </ul>

          <h3 className="text-base font-semibold">3. Definición de falla crítica</h3>
          <p>Se considerarán fallas críticas, a título enunciativo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Imposibilidad de completar el proceso de compra.</li>
            <li>Errores persistentes en la configuración de métodos de pago o envío implementados por Interact.</li>
            <li>Fallas estructurales que impidan la navegación básica.</li>
            <li>Problemas técnicos derivados de una implementación incorrecta atribuible al desarrollo.</li>
          </ul>

          <p>No se considerarán fallas críticas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cambios de criterio estético o decisiones de diseño previamente aprobadas.</li>
            <li>Solicitudes fuera del alcance originalmente acordado.</li>
            <li>Resultados comerciales (ventas, tráfico, conversión o rendimiento).</li>
            <li>Modificaciones realizadas por el cliente o terceros posteriores a la entrega.</li>
            <li>Problemas derivados de aplicaciones, plataformas o servicios de terceros no desarrollados por Interact.</li>
            <li>Incumplimientos derivados de la falta de entrega de materiales o información por parte del cliente.</li>
          </ul>

          <h3 className="text-base font-semibold">4. Procedimiento para solicitar la garantía</h3>
          <p>Para iniciar el proceso de revisión bajo garantía, el cliente deberá:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Enviar un correo electrónico a{" "}
              <a
                href="mailto:soporte@interact.com.uy"
                className="underline underline-offset-4"
              >
                soporte@interact.com.uy
              </a>
              .
            </li>
            <li>Describir de forma clara, específica y detallada el inconveniente detectado.</li>
            <li>
              Adjuntar, cuando corresponda, evidencia técnica (capturas de pantalla, enlaces, descripción de
              entorno, etc.).
            </li>
          </ul>
          <p>
            Interact dispondrá de un plazo de hasta <strong>72 horas hábiles</strong> desde la recepción del
            correo para analizar el caso y determinar si el mismo encuadra dentro de los supuestos
            contemplados en la presente garantía.
          </p>

          <h3 className="text-base font-semibold">5. Proceso de resolución</h3>
          <p>En caso de verificarse que el reclamo se encuentra comprendido dentro del alcance de la garantía:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>a) Interact intentará subsanar la falla en un plazo razonable.</li>
            <li>
              b) Si la corrección no fuera técnicamente viable y se comprobara incumplimiento sustancial,
              se procederá al reembolso correspondiente.
            </li>
          </ul>
          <p>
            La determinación sobre la procedencia de la garantía será realizada por Interact con base en
            criterios técnicos objetivos.
          </p>

          <h3 className="text-base font-semibold">6. Plazo de validez</h3>
          <p>
            La garantía podrá ser solicitada dentro de los primeros <strong>15 días corridos</strong> posteriores a
            la entrega formal del proyecto.
          </p>
          <p>
            Transcurrido dicho plazo, se entenderá aceptada la conformidad técnica del servicio.
          </p>

          <h3 className="text-base font-semibold">7. Alcance del reembolso</h3>
          <p>En caso de corresponder el reembolso:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>El mismo se realizará exclusivamente sobre el monto abonado por el servicio de desarrollo.</li>
            <li>
              No se incluirán costos asociados a plataformas (ej. Shopify), dominios, aplicaciones, servicios de
              terceros o trabajos adicionales no comprendidos en el alcance original.
            </li>
            <li>El reembolso se efectuará por el mismo medio de pago utilizado por el cliente.</li>
            <li>
              Interact dispondrá de un plazo de hasta <strong>10 días hábiles</strong> desde la confirmación formal
              de la procedencia de la garantía para realizar la devolución correspondiente.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
