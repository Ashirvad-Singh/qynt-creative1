import { SocialHero } from "@/components/sections/social/SocialHero";
import { SocialClients } from "@/components/sections/social/SocialClients";
import { SocialStats } from "@/components/sections/social/SocialStats";
import { ViralityToolkit } from "@/components/sections/social/ViralityToolkit";
import { FutureProofed } from "@/components/sections/social/FutureProofed";
import { ProjectCTA } from "@/components/sections/ProjectCTA";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <SocialHero />
      <SocialClients />
      <SocialStats />
      <ViralityToolkit />
      <FutureProofed />
      
      {/* We reuse ProjectCTA but it can adapt to the purple theme if needed, or we just keep it neutral */}
      <ProjectCTA />
    </main>
  );
}
