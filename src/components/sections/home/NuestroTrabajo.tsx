import Section from "@/components/layout/Section";

export default function NuestroTrabajo() {
  return (
    <Section title="Nuestro trabajo">
      <p className="max-w-2xl">
        Cada proyecto parte de un problema concreto y se resuelve con una
        solución simple, funcional y sostenible en el tiempo.
      </p>

      <ul className="mt-6 space-y-4">
        <li>
          <strong>Caso 1:</strong> desorden en ventas → tienda clara y automatizada
        </li>
        <li>
          <strong>Caso 2:</strong> web lenta → mejora de performance y conversión
        </li>
      </ul>

      <p className="mt-4">[Ver proyectos]</p>
    </Section>
  );
}
