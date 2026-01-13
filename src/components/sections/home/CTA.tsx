import Section from "@/components/layout/Section";

export default function CTA() {
  return (
    <Section>
      <h2 className="text-2xl sm:text-3xl">
        Hablemos de tu proyecto
      </h2>

      <p className="mt-4 max-w-xl">
        Contanos qué necesitás mejorar y te respondemos con una propuesta clara,
        sin vueltas.
      </p>

      <div className="mt-6">
        <span>[Ir a contacto]</span>
      </div>
    </Section>
  );
}
