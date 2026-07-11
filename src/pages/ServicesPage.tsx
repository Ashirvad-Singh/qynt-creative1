import { motion } from "motion/react";
import { Services } from "../components/Services";
import { FinalCTA } from "../components/FinalCTA";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PremiumBackground } from "../components/PremiumBackground";
import { Magnetic } from "../components/Magnetic";
import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

export function ServicesPage() {
  return (
    <div className="relative">
      <SEO 
        title="Services & Capabilities" 
        description="We build high-performance web systems, custom mobile apps, AI-powered integrations, and cohesive brand identities for modern enterprises." 
        keywords="design capabilities, branding services, react development, custom software engineering"
      />
      <section className="relative min-h-[80vh] pt-48 pb-20 flex flex-col items-center">
        <PremiumBackground />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center justify-center gap-3"
          >
            <div className="w-8 h-px bg-black" />
            Our Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[140px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
          >
            We Build <br />
            <span className="text-black/30">Masterpieces.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Strategic design and elite engineering for brands that refuse to be ignored.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Services />
        
        <div className="py-20" /> {/* Spacer */}

        <FinalCTA />
      </div>
    </div>
  );
}
