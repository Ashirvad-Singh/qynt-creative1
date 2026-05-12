import { motion } from "motion/react";
import { FAQ } from "../components/FAQ";
import { PremiumBackground } from "../components/PremiumBackground";
import { FinalCTA } from "../components/FinalCTA";

export function FAQPage() {
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
            Knowledge Base
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[120px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
          >
            Common <br />
            <span className="text-black/30">Questions.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about our process, technology, and working with QYNT.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <FAQ />
        
        <section className="py-40 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-accent-green/5 blur-[120px] -z-10" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8">Still have questions?</h2>
            <p className="text-xl text-white/40 font-medium mb-12">
              Our team is ready to provide you with all the answers you need. Reach out directly for personal support.
            </p>
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
}
