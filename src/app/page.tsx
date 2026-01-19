import Hero from "@/components/sections/home/Hero";
import Servicios from "@/components/sections/home/Servicios";
import Confianza from "@/components/sections/home/Confianza";
import NuestroTrabajo from "@/components/sections/home/NuestroTrabajo";
import Nosotros from "@/components/sections/home/Nosotros";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <main className="pt-0">
      {/* HERO */}
      <section className="section section-a">
        <Hero />
      </section>

      {/* SERVICIOS */}
      <section className="section section-a">
        <Servicios />
      </section>

      {/* CONFIANZA */}
      <section className="section section-b after-a">
        <Confianza />
      </section>

      {/* NUESTRO TRABAJO */}
      <section className="section section-a after-b">
        <NuestroTrabajo />
      </section>

      {/* NOSOTROS */}
      <section className="section section-b after-a">
        <Nosotros />
      </section>

      {/* CTA FINAL */}
      <section className="section section-a after-b">
        <CTA />
      </section>
    </main>
  );
}
