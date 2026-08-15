"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const positions = [
  {
    id: 1,
    title: "Senior Creative Developer",
    location: "Remote / Global",
    type: "Full-time",
    desc: "We are looking for a creative developer who breathes WebGL, GSAP, and Next.js. You will lead the technical execution of our most ambitious interactive experiences."
  },
  {
    id: 2,
    title: "Lead UI/UX Designer",
    location: "Noida, UP",
    type: "Full-time",
    desc: "Shape the visual language of modern brands. You must have a strong portfolio demonstrating cinematic web design, typography mastery, and premium aesthetics."
  },
  {
    id: 3,
    title: "Motion Designer",
    location: "London, UK",
    type: "Contract",
    desc: "Bring static designs to life. We need someone who can craft micro-interactions and full-scale promotional videos that wow the user."
  }
];

export function Careers() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="careers" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-primary font-space tracking-widest uppercase text-sm mb-4">Join the team</span>
        <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white">OPEN POSITIONS</h2>
      </div>

      <div className="space-y-4">
        {positions.map((pos) => (
          <div key={pos.id} className="glass-card overflow-hidden group">
            <button
              onClick={() => setOpenId(openId === pos.id ? null : pos.id)}
              className="w-full text-left px-8 py-8 flex items-center justify-between hover-trigger"
            >
              <div>
                <h3 className="text-3xl font-bebas text-white mb-2 group-hover:text-primary transition-colors">{pos.title}</h3>
                <div className="flex items-center gap-4 text-xs font-space uppercase tracking-widest text-gray-400">
                  <span>{pos.location}</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openId === pos.id ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-colors"
              >
                <Plus className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openId === pos.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-8 pb-8 pt-0 border-t border-white/5 mt-4 pt-6">
                    <p className="text-gray-400 font-light text-lg mb-8 max-w-2xl leading-relaxed">
                      {pos.desc}
                    </p>
                    <button className="flex items-center gap-4 text-white font-medium hover:text-primary transition-colors group hover-trigger">
                      <span className="text-sm font-space uppercase tracking-wider">Apply Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
