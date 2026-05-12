import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Button } from "./ui/button";
import { FloatingCard } from "./FloatingCard";
import { ArrowUpRight, Play, Sparkles, TrendingUp, Users, Award, Zap, ShieldCheck } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { Skeleton } from "./Skeleton";
import { useState, useEffect, useRef } from "react";
import { PremiumBackground } from "./PremiumBackground";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen pt-48 pb-20 overflow-hidden flex flex-col items-center"
    >
      <PremiumBackground />

      {/* Floating Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[20%] left-[10%] z-20"
        >
          <div className="bg-white/40 backdrop-blur-xl p-6 rounded-[32px] border border-black/5 shadow-2xl flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-accent-green/20 flex items-center justify-center text-accent-green">
                <TrendingUp className="w-6 h-6" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Performance</p>
                <p className="text-xl font-black tracking-tighter">+45% ROI</p>
             </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[60%] right-[8%] z-20"
        >
          <div className="bg-white/40 backdrop-blur-xl p-6 rounded-[32px] border border-black/5 shadow-2xl flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Global Scale</p>
                <p className="text-xl font-black tracking-tighter">1.2M+ Reach</p>
             </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y4 }}
          className="absolute top-[15%] right-[15%] z-20"
        >
          <div className="bg-white/40 backdrop-blur-xl p-5 rounded-[28px] border border-black/5 shadow-2xl flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#f9f9f9] flex items-center justify-center text-[#1a1a1a]">
                <Award className="w-5 h-5" />
             </div>
             <p className="text-sm font-black tracking-tighter">Top-Rated Studio</p>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-[20%] left-[15%] z-20"
        >
          <div className="bg-white/40 backdrop-blur-xl p-5 rounded-[28px] border border-black/5 shadow-2xl flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#00D26A]/10 text-accent-green flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
             </div>
             <p className="text-sm font-black tracking-tighter">Certified Security</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-6xl md:text-[100px] font-heading font-black leading-[0.9] tracking-tighter text-[#1a1a1a]">
            We build what makes <br />
            digital <span className="relative">
              successful
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-[#00D26A] rounded-full"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Webdesign from HQ: Websites, Web-Apps and individual software <br className="hidden md:block" />
          — all from one source, perfectly tailored to your business.
        </motion.p>

        {/* CTA Button (Black & Premium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-24"
        >
          <Magnetic>
            <Button size="lg" className="h-16 px-10 rounded-full bg-[#1a1a1a] hover:bg-black text-white text-lg font-bold shadow-2xl transition-all hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 relative z-10">
                <Sparkles className="w-5 h-5 text-white/80" />
                Get Free Proposal
              </div>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">92+</span>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-2">Projects <br /> completed</p>
          </div>
          <div className="w-px h-12 bg-black/5 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">100</span>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-2">PageSpeed <br /> Score</p>
          </div>
          <div className="w-px h-12 bg-black/5 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">4.9</span>
            <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-2">Google <br /> Rating</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Partner Logo Ticker (Simplified for design) */}
      <div className="mt-32 w-full max-w-7xl px-6 opacity-30 grayscale overflow-hidden">
        <div className="flex items-center justify-center gap-20 py-10 border-t border-black/5">
          <span className="font-heading font-black text-2xl tracking-tighter">NIKE</span>
          <span className="font-heading font-black text-2xl tracking-tighter">APPLE</span>
          <span className="font-heading font-black text-2xl tracking-tighter">TESLA</span>
          <span className="font-heading font-black text-2xl tracking-tighter">META</span>
          <span className="font-heading font-black text-2xl tracking-tighter">AMAZON</span>
          <span className="font-heading font-black text-2xl tracking-tighter">GOOGLE</span>
        </div>
      </div>
    </section>
  );
}
