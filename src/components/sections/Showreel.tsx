"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Showreel() {
  return (
    <section id="showreel" className="py-24 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-[#d8973c] font-space tracking-[0.2em] uppercase text-[10px] font-bold mb-2 block">
          SHOWREEL
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">SEE </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">OUR VISION</span>
          <span className="text-white"> IN MOTION</span>
        </h2>
        <p className="text-gray-400 font-light text-sm max-w-lg mx-auto mt-6 px-4">
          A curated reel of our most insightful work across all three divisions a testament to clarity and execution.
        </p>
      </div>

      {/* Video Player Container */}
      <div className="w-full max-w-5xl mx-auto px-4 relative mt-8">
        
        {/* The Grid / Border Frame System */}
        <div className="relative w-full aspect-video border border-white/10 group cursor-pointer overflow-visible">
          
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

          {/* Actual Video Thumbnail */}
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80" 
              alt="Showreel Thumbnail"
              className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Custom Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-11 bg-black/80 backdrop-blur-sm rounded-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Play className="w-5 h-5 text-white ml-1 fill-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
