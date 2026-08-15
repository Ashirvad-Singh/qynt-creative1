"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Zap } from "lucide-react";

export function SocialStats() {
  return (
    <section className="py-24 md:py-32 bg-black w-full overflow-hidden flex flex-col items-center justify-center border-b border-white/5 min-h-[600px] relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-2xl px-6 mb-16 relative z-10">
        <span className="text-[#8a5cf5] font-space text-xs uppercase tracking-[0.2em] font-bold block mb-2">
          PROVEN IMPACT & VIRAL SCALE
        </span>
        <h2 className="text-4xl md:text-6xl font-bebas text-white tracking-wide">
          NUMBERS THAT SPEAK LOUDER THAN WORDS
        </h2>
      </div>

      {/* 3-Card Fan-out Stack Container */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
        
        {/* Purple Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl bg-gradient-to-br from-[#5922e6] to-[#3b12a8] text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(89,34,230,0.4)] md:-rotate-3 hover:rotate-0"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bebas tracking-wide leading-none mb-3 text-white">
              500M+
            </div>
            <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 text-white">
              Impressions In Single Campaigns
            </h3>
            <div className="w-full h-[1px] bg-white/20 mb-4" />
            <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
              Single campaign high-water mark achieved across TikTok, Reels, & Shorts within 72 hours.
            </p>
          </div>
        </motion.div>

        {/* Yellow/Gold Card (Center Highlight) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative rounded-3xl bg-gradient-to-br from-[#f9bc38] to-[#e0a01d] text-black p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(249,188,56,0.4)] md:scale-105 z-20 hover:scale-110"
        >
          <div className="w-12 h-12 rounded-2xl bg-black/10 border border-black/20 flex items-center justify-center mb-6">
            <Award className="w-6 h-6 text-black" />
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bebas tracking-wide leading-none mb-3 text-black">
              10.0K+
            </div>
            <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 text-black">
              Pieces Of Content Produced Yearly
            </h3>
            <div className="w-full h-[1px] bg-black/20 mb-4" />
            <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed">
              Original, viral, and localized brand photoshoot assets, commercial films, and short-form videos.
            </p>
          </div>
        </motion.div>

        {/* Red Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group relative rounded-3xl bg-gradient-to-br from-[#d41c3b] to-[#a30e26] text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(212,28,59,0.4)] md:rotate-3 hover:rotate-0"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bebas tracking-wide leading-none mb-3 text-white">
              7.5M+
            </div>
            <h3 className="font-bold text-xl md:text-2xl leading-snug mb-4 text-white">
              Average Client Follower Growth
            </h3>
            <div className="w-full h-[1px] bg-white/20 mb-4" />
            <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed">
              Year-over-year organic audience expansion across partner creator and brand channels.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

