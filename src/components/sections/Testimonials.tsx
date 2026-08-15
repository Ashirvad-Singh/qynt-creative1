"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Saqib Saleem",
    role: "Actor, Director, Producer - Bollywood",
    text: "“We produced a travel show together and created social media content and every time the work was great. Talent at QYNT is super sharp. Good Luck!”",
    metric: "50M+ Organic Views"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CMO - TechVision",
    text: "“QYNT transformed our brand narrative. Their team's ability to fuse storytelling with cutting-edge AI production is unparalleled across the digital landscape.”",
    metric: "300% Engagement Boost"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Founder - Nexus Dynamics",
    text: "“Working with QYNT was a complete game-changer. They delivered a high-volume video campaign that didn't just meet our metrics—it completely shattered them.”",
    metric: "12M+ Direct Reach"
  },
  {
    id: 4,
    name: "Aman Gupta",
    role: "Head of Marketing - UrbanPulse",
    text: "“The execution speed at QYNT is insane. From concept script to final color-graded reel in under 48 hours without compromising an ounce of cinematic quality.”",
    metric: "48h Turnaround"
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
    <section id="testimonials" className="py-28 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="text-[#ff8a50] font-space tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
          TESTIMONIALS & REVIEWS
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">THE IMPACT, </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">IN THEIR WORDS</span>
        </h2>
        <p className="text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto mt-6">
          Real feedback from visionary founders, directors, and CMOs who trust QYNT to scale their narrative.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1100px] mx-auto px-4 relative mt-6">
        
        {/* The Grid / Border Frame System */}
        <div className="relative w-full bg-zinc-950/90 border border-white/10 p-8 md:p-16 overflow-visible rounded-3xl shadow-2xl backdrop-blur-2xl">
          
          {/* Extended subtle lines */}
          <div className="absolute top-0 -left-[100vw] w-[200vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 -left-[100vw] w-[200vw] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute -top-[100vh] left-0 w-px h-[200vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute -top-[100vh] right-0 w-px h-[200vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Corner Accent Squares */}
          <div className="absolute -top-[3px] -left-[3px] w-2 h-2 bg-[#ff8a50] z-20 pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-[#ff8a50] z-20 pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-2 h-2 bg-[#ff8a50] z-20 pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-2 h-2 bg-[#ff8a50] z-20 pointer-events-none" />

          {/* Large Quote Icon Watermark */}
          <div className="absolute top-8 left-8 text-white/[0.04] pointer-events-none z-0">
            <Quote className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          {/* Main Review Content */}
          <div className="relative z-10 flex flex-col justify-between min-h-[300px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                {/* Rating & Metric Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#e60023]/10 border border-[#e60023]/30 text-[#ff8a50] font-space text-xs font-bold uppercase tracking-widest">
                    {current.metric}
                  </span>
                </div>

                {/* Big Bold Quote Text */}
                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bebas tracking-wide text-white leading-[1.1] my-4">
                  {current.text}
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col border-t border-white/10 pt-6 mt-2">
                  <h3 className="text-2xl md:text-3xl font-bebas tracking-wider text-white">
                    {current.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-space tracking-wider uppercase">
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation & Progress Bar */}
            <div className="flex items-center justify-between mt-12 border-t border-white/5 pt-6">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#e60023]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#e60023] hover:border-[#e60023] text-white transition-all duration-300 shadow-lg active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#e60023] hover:border-[#e60023] text-white transition-all duration-300 shadow-lg active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
