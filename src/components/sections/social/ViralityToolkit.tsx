"use client";

import { motion } from "framer-motion";
import { Users, CalendarDays, Megaphone } from "lucide-react";

export function ViralityToolkit() {
  return (
    <section id="virality-toolkit" className="py-32 bg-black relative border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-white text-xs font-mono font-bold tracking-widest uppercase mb-4 flex items-center gap-1">
            <span className="w-[1px] h-3 bg-white block" />
            OUR LATEST
          </span>
          <h2 className="font-bebas font-bold leading-none flex items-center justify-center flex-wrap gap-x-4">
            <span className="text-[#f5ebd7] text-6xl md:text-8xl lg:text-[110px] tracking-wide">
              OUR
            </span>
            <span className="text-[#5922e6] text-6xl md:text-8xl lg:text-[110px] drop-shadow-[0_0_20px_rgba(89,34,230,0.5)] tracking-wide">
              VIRALITY TOOLKIT
            </span>
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-xl overflow-hidden bg-[#050505]">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 relative group"
          >
            {/* 3D Icon Simulation */}
            <div className="w-24 h-24 mb-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500" />
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-800 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                <Users className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              {/* Floating badges */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#8a2be2] rounded-full flex items-center justify-center shadow-md transform rotate-12">
                <div className="w-4 h-4 bg-white/20 rounded-full" />
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-indigo-500 rounded-lg flex items-center justify-center shadow-md transform -rotate-6">
                <div className="w-3 h-3 border border-white/50 rounded-full" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-sans">
              Strategic Influencer<br/>Campaigns
            </h3>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 relative group"
          >
            {/* Dotted Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#5922e6_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />

            {/* 3D Icon Simulation */}
            <div className="w-24 h-24 mb-10 relative flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500" />
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
                <CalendarDays className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <div className="absolute top-2 left-0 w-6 h-6 bg-pink-500 rounded-md transform -rotate-12"></div>
              <div className="absolute bottom-2 right-0 w-8 h-8 bg-[#5922e6] rounded-full flex items-center justify-center shadow-md">
                 <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-sans mb-4 z-10">
              360° Social Media<br/>Management
            </h3>
            <p className="text-[10px] md:text-xs text-gray-400 font-light leading-relaxed max-w-[200px] z-10">
              Daily Social Management With Creator DNA. We bring creator-style pacing.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center p-12 md:p-16 relative group"
          >
            {/* 3D Icon Simulation */}
            <div className="w-24 h-24 mb-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-pink-500/10 blur-xl rounded-full group-hover:bg-pink-500/30 transition-all duration-500" />
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-0 transition-all duration-500">
                <Megaphone className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <div className="absolute top-0 right-2 w-7 h-7 bg-indigo-500 rounded-lg transform rotate-12 flex items-center justify-center">
                <div className="w-4 h-1 bg-white/50 rounded-full" />
              </div>
              <div className="absolute bottom-0 left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white/30" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-sans">
              Digital Campaigns
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
