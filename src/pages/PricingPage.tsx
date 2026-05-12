import { motion } from "motion/react";
import { Pricing } from "../components/Pricing";
import { PremiumBackground } from "../components/PremiumBackground";
import { FinalCTA } from "../components/FinalCTA";

export function PricingPage() {
  return (
    <div className="relative">
      <section className="relative min-h-[60vh] pt-48 pb-20 flex flex-col items-center">
        <PremiumBackground />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center justify-center gap-3"
          >
            <div className="w-8 h-px bg-black" />
            Pricing & Value
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[120px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
          >
            Invest in <br />
            <span className="text-black/30">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Transparent, result-oriented pricing models designed for scalable growth and premium positioning.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Pricing />
        
        <section className="py-40 border-t border-black/5 bg-[#f9f9f9]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-8">Need a Custom Quote?</h2>
            <p className="text-xl text-muted-foreground font-medium mb-12">
              For enterprise-level projects or unique requirements, we offer tailormade solutions that fit your specific business goals perfectly.
            </p>
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
}
