import Hero from "@/components/sections/home/Hero";
import Servicios from "@/components/sections/home/Servicios";
import Confianza from "@/components/sections/home/Confianza";
import NuestroTrabajo from "@/components/sections/home/NuestroTrabajo";
import Nosotros from "@/components/sections/home/Nosotros";
import CTA from "@/components/sections/home/CTA";

export default function HomePage() {
  return (
    <main className="pt-0">
      <Hero />
      <Servicios />
      <Confianza />
      <NuestroTrabajo />
      <Nosotros />
      <CTA />
    </main>
  );
}
