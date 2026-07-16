import { DevHero } from "@/components/sections/dev/DevHero";
import { DevStack } from "@/components/sections/dev/DevStack";
import { DevCapabilities } from "@/components/sections/dev/DevCapabilities";
import { DevProcess } from "@/components/sections/dev/DevProcess";

export default function DevPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#00ffff]/30 selection:text-white">
      <DevHero />
      <DevStack />
      <DevCapabilities />
      <DevProcess />
    </main>
  );
}
