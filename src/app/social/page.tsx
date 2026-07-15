import { SocialHero } from "@/components/sections/social/SocialHero";
import { SocialClients } from "@/components/sections/social/SocialClients";
import { ViralityToolkit } from "@/components/sections/social/ViralityToolkit";
import { FutureProofed } from "@/components/sections/social/FutureProofed";
import { SocialEcosystem } from "@/components/sections/social/SocialEcosystem";
import { ProjectCTA } from "@/components/sections/ProjectCTA";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <SocialHero />
      <SocialClients />
      <ViralityToolkit />
      <FutureProofed />
      <SocialEcosystem />
      
      {/* We reuse ProjectCTA but it can adapt to the purple theme if needed, or we just keep it neutral */}
      <ProjectCTA />
    </main>
  );
}
