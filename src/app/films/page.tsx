import { FilmsHero } from "@/components/sections/FilmsHero";
import { ProductionCapabilities } from "@/components/sections/ProductionCapabilities";
import { StatsVideoGrid } from "@/components/sections/StatsVideoGrid";
import { FilmsGallery } from "@/components/sections/FilmsGallery";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { ProjectCTA } from "@/components/sections/ProjectCTA";

export default function FilmsPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-white">
      <FilmsHero />
      <ProductionCapabilities />
      <StatsVideoGrid />
      <FilmsGallery />
      
      <ClientLogoStrip />

      <ProjectCTA />
    </main>
  );
}
