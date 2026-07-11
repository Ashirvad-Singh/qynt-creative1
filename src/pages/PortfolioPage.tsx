import { motion } from "motion/react";
import { PortfolioSection } from "../components/PortfolioSection";
import { FinalCTA } from "../components/FinalCTA";
import { PremiumBackground } from "../components/PremiumBackground";
import { SEO } from "../components/SEO";

export function PortfolioPage() {
  return (
    <div className="relative">
      <SEO 
        title="Portfolio" 
        description="Explore the case studies of Roadhouse Cafe, School Plus Furniture, Metal Cat Music, Charta International, Giglab, and Coast Air Pro by QYNT." 
        keywords="design portfolio, case studies, software portfolio, creative work"
      />
      <section className="relative min-h-[80vh] pt-48 pb-20 flex flex-col items-center">
        <PremiumBackground />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-black font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-black" />
            Selected Works
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[140px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
          >
            Curating <br />
            <span className="text-black/30">Masterpieces.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed"
          >
            A collection of category-defining digital experiences and elite design systems.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <PortfolioSection />
        
        <section className="py-60 bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-6"
            >
              The Mindset
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-12 leading-none">Our Philosophy.</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              We don&apos;t believe in vanity projects. Every piece of work in our portfolio is a result of deep strategic research and technical excellence.
            </p>
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
}
