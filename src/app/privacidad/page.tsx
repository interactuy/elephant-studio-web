import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Elephant Studio",
  description:
    "Política de privacidad de Elephant Studio. Información sobre el uso y protección de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <main
      className="mx-auto max-w-2xl px-6 pb-16 pt-28 lg:max-w-[var(--container)] lg:px-8"
      style={{ color: "var(--text)" }}
    >
      <article className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Política de Privacidad
        </h1>

        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          Última actualización: {new Date().toLocaleDateString("es-UY")}
        </p>

        <section className="mt-10 space-y-6 text-sm leading-7">
          <p>
            En Elephant Studio valoramos la privacidad de quienes visitan nuestro
            sitio web. Esta política describe cómo recopilamos, utilizamos y
            protegemos la información personal que pueda ser proporcionada a
            través de este sitio.
          </p>

          <h2 className="text-lg font-semibold">
            Información que recopilamos
          </h2>
          <p>
            Podemos recopilar información personal cuando el usuario completa un
            formulario de contacto, se comunica por correo electrónico o utiliza
            alguno de nuestros servicios. Esta información puede incluir nombre,
            dirección de correo electrónico y cualquier otro dato que el usuario
            decida compartir voluntariamente.
          </p>

          <h2 className="text-lg font-semibold">Uso de la información</h2>
          <p>
            La información recopilada se utiliza exclusivamente para responder
            consultas, brindar información sobre nuestros servicios, coordinar
            proyectos o mejorar la experiencia general del sitio.
          </p>

          <h2 className="text-lg font-semibold">
            Protección de los datos
          </h2>
          <p>
            Implementamos medidas razonables de seguridad para proteger la
            información personal contra accesos no autorizados, alteraciones o
            divulgaciones indebidas.
          </p>

          <h2 className="text-lg font-semibold">
            Compartir información con terceros
          </h2>
          <p>
            Elephant Studio no vende, alquila ni comparte información personal
            con terceros, salvo cuando sea estrictamente necesario para cumplir
            con obligaciones legales o brindar un servicio solicitado por el
            usuario.
          </p>

          <h2 className="text-lg font-semibold">
            Enlaces a sitios externos
          </h2>
          <p>
            Este sitio puede contener enlaces a sitios de terceros. No somos
            responsables por las prácticas de privacidad ni por el contenido de
            dichos sitios externos.
          </p>

          <h2 className="text-lg font-semibold">
            Cambios en esta política
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad en
            cualquier momento. Las modificaciones serán publicadas en esta misma
            página.
          </p>

          <h2 className="text-lg font-semibold">Contacto</h2>
          <p>
            Si tenés dudas sobre esta política o sobre el tratamiento de tus
            datos, podés escribirnos a{" "}
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
