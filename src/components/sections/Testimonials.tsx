"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Saqib Saleem",
    role: "Actor, Director, Producer - Bollywood",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    text: "We produced a travel show together and created social media content and every time the work was great. Talent at QYNT is super sharp. Good Luck!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CMO - TechVision",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    text: "QYNT transformed our brand narrative. Their team's ability to fuse storytelling with cutting-edge production is unparalleled."
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Founder - Nexus Dynamics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    text: "Working with QYNT was a game-changer. They delivered a campaign that didn't just meet our metrics—it completely shattered them."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="text-gray-300 font-space tracking-[0.2em] uppercase text-[10px] font-bold mb-4 block">
          TESTIMONIALS
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">THE IMPACT, </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">IN THEIR WORDS</span>
        </h2>
        <p className="text-gray-400 font-light text-sm max-w-sm mx-auto mt-6">
          Stories from brands we've partnered with, captured through work that speaks for itself.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1000px] mx-auto px-4 relative mt-12">
        
        {/* The Grid / Border Frame System */}
        <div className="relative w-full bg-[#111111] border border-white/10 p-8 md:p-16 overflow-visible">
          
          {/* Extended subtle lines to mimic the grid spanning out */}
          <div className="absolute top-0 -left-[100vw] w-[200vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 -left-[100vw] w-[200vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute -top-[100vh] left-0 w-px h-[200vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute -top-[100vh] right-0 w-px h-[200vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* 4 Corner Yellow Squares */}
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-[#d8973c] z-20 pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-[#d8973c] z-20 pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-[#d8973c] z-20 pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-[#d8973c] z-20 pointer-events-none" />

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Left: Image with stacked cards */}
            <div className="relative w-full max-w-[320px] mx-auto aspect-square">
              {/* Stacked background cards */}
              <div className="absolute inset-0 bg-[#222222] transform -rotate-12 rounded-sm origin-bottom-left border border-white/5 opacity-80" />
              <div className="absolute inset-0 bg-[#333333] transform -rotate-6 rounded-sm origin-bottom-left border border-white/5 opacity-90" />
              
              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-2xl"
                />
              </AnimatePresence>
            </div>

            {/* Right: Text and Navigation */}
            <div className="flex flex-col justify-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 font-space">
                    {current.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] font-space tracking-wide mb-8">
                    {current.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light font-space mb-12">
                    {current.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-[#e60023] flex items-center justify-center hover:bg-white hover:text-black text-white transition-colors duration-300 rounded-[2px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-[#e60023] flex items-center justify-center hover:bg-white hover:text-black text-white transition-colors duration-300 rounded-[2px]"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
