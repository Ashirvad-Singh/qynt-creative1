"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Video } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function SocialHero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 bg-black flex items-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 mix-blend-screen pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Video-28440.mp4" type="video/mp4" />
      </video>

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black pointer-events-none"></div>

      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#5922e6]/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1500px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-start pt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5922e6]/20 border border-[#5922e6]/40 text-[#8a5cf5] font-space text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Production & Social Reach</span>
            </div>

            <h1 className="font-bebas font-bold leading-[0.9] tracking-tight uppercase mb-6 flex flex-col">
              <span className="text-[#f5ebd7] text-5xl md:text-7xl lg:text-8xl">
                BUILT FOR THE
              </span>
              <span className="text-[#8a5cf5] text-6xl md:text-8xl lg:text-[100px] text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cf5] via-purple-400 to-pink-500">
                CREATOR ERA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-lg mb-8"
          >
            <p className="mb-4">
              We engineer high-impact <strong className="font-semibold text-white">commercial photoshoots</strong>, cinematic brand videos, and platform-native social campaigns that capture millions of eyes.
            </p>
            <p className="text-gray-400 text-sm">
              Obsessed with producing work online and offline that culture cannot ignore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link 
              href="#virality-toolkit" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5922e6] hover:bg-[#6d33f7] text-white font-bold rounded-xl text-xs uppercase font-space tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(89,34,230,0.5)] hover:scale-105"
            >
              <span>PLAN YOUR BRAND SHOOT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a 
              href="https://www.instagram.com/qyntcreatives/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600 hover:to-purple-600 border border-pink-500/40 text-white font-bold rounded-xl text-xs uppercase font-space tracking-widest transition-all duration-300 shadow-lg hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:text-white" />
              <span>@QYNTCREATIVES</span>
            </a>
          </motion.div>
        </div>

        {/* Right Content - Featured Social Video Reel */}
        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden glass-card border border-purple-500/30 group shadow-[0_0_50px_rgba(89,34,230,0.3)]"
          >
            <video 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/Video-28440.mp4" type="video/mp4" />
            </video>

            {/* Top Badge Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none z-10">
              <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-[10px] font-space uppercase tracking-wider text-white font-bold flex items-center gap-1.5 shadow-lg">
                <Video className="w-3.5 h-3.5 text-[#8a5cf5] animate-pulse" />
                <span>QYNT SOCIAL REEL | 4K</span>
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
