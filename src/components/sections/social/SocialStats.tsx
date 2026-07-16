"use client";

import { motion } from "framer-motion";

export function SocialStats() {
  return (
    <section className="py-32 bg-black w-full overflow-hidden flex items-center justify-center border-b border-white/5 min-h-[70vh]">
      <div className="relative w-full max-w-[1000px] mx-auto h-[400px] flex items-center justify-center">
        
        {/* Purple Card */}
        <motion.div 
          initial={{ opacity: 0, rotate: -20, x: -100 }}
          whileInView={{ opacity: 1, rotate: -6, x: -50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute z-10 w-[280px] md:w-[320px] aspect-square bg-[#5922e6] text-white p-8 flex flex-col justify-center shadow-2xl origin-bottom-right"
          style={{ left: '50%', transform: 'translateX(-120%)' }}
        >
          <div className="text-6xl md:text-8xl font-bebas tracking-wide leading-none mb-4">
            500M+
          </div>
          <div className="font-bold text-xl md:text-2xl leading-tight mb-6">
            Impressions In<br/>Single Campaigns
          </div>
          <div className="w-full h-[1px] bg-white/30 mb-4" />
          <div className="text-xs md:text-sm text-white/80 font-light">
            Single campaign high-water<br/>mark in 72h
          </div>
        </motion.div>

        {/* Yellow Card */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="absolute z-20 w-[280px] md:w-[320px] aspect-[4/4.5] bg-[#f9bc38] text-black p-8 flex flex-col justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-bottom"
        >
          <div className="text-6xl md:text-8xl font-bebas tracking-wide leading-none mb-4">
            10.0K+
          </div>
          <div className="font-bold text-xl md:text-2xl leading-tight mb-6">
            Pieces Of Content<br/>Produced Yearly
          </div>
          <div className="w-full h-[1px] bg-black/20 mb-4" />
          <div className="text-xs md:text-sm text-black/80 font-light">
            Original, viral, and localized<br/>content
          </div>
        </motion.div>

        {/* Red Card */}
        <motion.div 
          initial={{ opacity: 0, rotate: 20, x: 100 }}
          whileInView={{ opacity: 1, rotate: 8, x: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="absolute z-10 w-[280px] md:w-[320px] aspect-square bg-[#d41c3b] text-white p-8 flex flex-col justify-center shadow-2xl origin-bottom-left"
          style={{ right: '50%', transform: 'translateX(120%)' }}
        >
          <div className="text-6xl md:text-8xl font-bebas tracking-wide leading-none mb-4">
            7.3K
          </div>
          <div className="font-bold text-xl md:text-2xl leading-tight mb-6">
            Average Client<br/>Follower Growth
          </div>
          <div className="w-full h-[1px] bg-white/30 mb-4" />
          <div className="text-xs md:text-sm text-white/80 font-light">
            Year-over-year organic<br/>audience expansion
          </div>
        </motion.div>

      </div>
    </section>
  );
}
