"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function ViralCampaign() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto border-t border-white/5 text-center">
      <span className="text-primary font-space tracking-widest uppercase text-xs mb-4 block">
        Distribution
      </span>
      <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-8">
        FROM <span className="text-primary">FILM</span> TO <br className="hidden md:block" /> VIRAL CAMPAIGN
      </h2>
      
      <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
        Your film isn't just a video, it's the seed of a campaign. We ensure your production budget yields maximum ROI across digital platforms.
      </p>

      {/* Integration Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-12 relative overflow-hidden group mx-auto max-w-3xl mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
          {/* QYNT Logo */}
          <div className="px-8 py-4 border border-white/20 rounded-xl bg-black/50 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center">
            <span className="text-4xl font-bebas tracking-wider text-white">QYNT <span className="text-primary">.</span></span>
          </div>
          
          {/* Arrow / Plus */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-space uppercase tracking-widest text-gray-500 mb-2">Integrated</div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 relative">
              <div className="absolute inset-0 border border-primary rounded-full animate-ping opacity-20"></div>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          {/* Partner/Network Logo (Placeholder) */}
          <div className="px-8 py-4 border border-white/20 rounded-xl bg-black/50 shadow-[0_0_30px_rgba(255,107,45,0.1)] flex items-center justify-center relative overflow-hidden group/partner cursor-pointer">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover/partner:opacity-10 transition-opacity duration-300"></div>
            <span className="text-3xl font-space font-bold tracking-widest text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              NEXUS
            </span>
          </div>
        </div>
      </motion.div>

      <button className="px-8 py-3 bg-primary text-white font-bold rounded-[2px] hover:bg-white hover:text-black transition-colors duration-300 hover-trigger text-[10px] uppercase tracking-widest font-space">
        Discover Our Network
      </button>
    </section>
  );
}
