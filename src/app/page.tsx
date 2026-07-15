import { Hero } from "@/components/sections/Hero";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { Showreel } from "@/components/sections/Showreel";
import { Services } from "@/components/sections/Services";
import { ScaleAndDedication } from "@/components/sections/ScaleAndDedication";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-white">
      <Hero />
      <ClientLogoStrip />
      <Showreel />
      <Services />
      <ScaleAndDedication />
      <Process />
      <Testimonials />
      <Team />
      <Careers />
      <Contact />
    </main>
  );
}
