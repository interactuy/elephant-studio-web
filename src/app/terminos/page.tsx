import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso del sitio web",
};

export default function TerminosPage() {
  return (
    <main
      className="mx-auto max-w-2xl px-6 pb-16 pt-28 lg:max-w-[var(--container)] lg:px-8"
      style={{ color: "var(--text)" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Términos de Uso
        </h1>

        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          Última actualización: {new Date().toLocaleDateString("es-UY")}
        </p>

        <section className="mt-10 space-y-6 text-sm leading-7">
          <p>
            Al acceder y utilizar este sitio web, aceptás los presentes Términos
            de Uso. Si no estás de acuerdo con alguno de ellos, te recomendamos
            no utilizar el sitio.
          </p>

          <h2 className="text-lg font-semibold">Uso del sitio</h2>
          <p>
            El contenido de este sitio tiene fines informativos y comerciales
            relacionados con los servicios ofrecidos por Elephant Studio. El
            usuario se compromete a utilizar el sitio de forma lícita y
            respetuosa.
          </p>

          <h2 className="text-lg font-semibold">
            Propiedad intelectual
          </h2>
          <p>
            Todos los contenidos del sitio, incluyendo textos, diseños, marcas,
            logotipos, imágenes y código, son propiedad de Elephant Studio o se
            utilizan con la debida autorización. Queda prohibida su reproducción
            total o parcial sin consentimiento expreso.
          </p>

          <h2 className="text-lg font-semibold">
            Limitación de responsabilidad
          </h2>
          <p>
            Elephant Studio no garantiza que el sitio funcione de manera
            ininterrumpida o libre de errores. No nos responsabilizamos por daños
            directos o indirectos derivados del uso o imposibilidad de uso del
            sitio.
          </p>

          <h2 className="text-lg font-semibold">
            Modificaciones del contenido
          </h2>
          <p>
            Nos reservamos el derecho de modificar, actualizar o eliminar
            cualquier contenido del sitio sin previo aviso.
          </p>

          <h2 className="text-lg font-semibold">
            Legislación aplicable
          </h2>
          <p>
            Estos Términos de Uso se rigen por la legislación vigente de la
            República Oriental del Uruguay. Cualquier controversia será
            sometida a los tribunales competentes.
          </p>

          <h2 className="text-lg font-semibold">Contacto</h2>
          <p>
            Para cualquier consulta relacionada con estos términos, podés
            contactarnos a{" "}
            <a
              href="mailto:hola@elephant.studio"
              className="underline underline-offset-4"
            >
              hola@elephant.studio
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
