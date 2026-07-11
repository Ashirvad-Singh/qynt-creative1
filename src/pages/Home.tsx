import { Hero } from "../components/Hero";
import { TrustStats } from "../components/TrustStats";
import { PortfolioSection } from "../components/PortfolioSection";
import { Services } from "../components/Services";
import { DashboardUI } from "../components/DashboardUI";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import Globe3DDemo from "../components/3d-globe-demo";
import MacbookScrollDemo from "../components/macbook-scroll-demo";
import { FinalCTA } from "../components/FinalCTA";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO 
        title="Cinematic Digital Agency" 
        description="QYNT Creative & Co. is a cinematic digital studio specializing in high-end brand identity, world-class UI/UX, and elite software engineering for visionary brands." 
        keywords="cinematic studio, branding, UIUX design, custom software engineering, qynt creative"
      />
      <Hero />
      <MacbookScrollDemo />
      <TrustStats />
      <section className="py-16 md:py-24 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px] mb-4"
          >
            Worldwide Impact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tighter text-white"
          >
            We deploy solutions <br />
            <span className="text-white/40">to every corner of the globe.</span>
          </motion.h2>
        </div>
        <div className="relative h-[350px] sm:h-[500px] md:h-[600px] w-full flex items-center justify-center">
          {/* Subtle glow behind globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
          <Globe3DDemo />
        </div>
      </section>
      <PortfolioSection />
      <Services />
      <DashboardUI />
      <Team />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
