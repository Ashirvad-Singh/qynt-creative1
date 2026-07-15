"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posters = [
  { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Why Gen Z Isn't Saving?" },
  { url: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Stranger Things" },
  { url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Indian Rupee Crash" },
  { url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Ravi Gupta" },
];

export function SocialHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-32 pb-24 bg-black border-b border-white/5">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bebas font-bold leading-[0.85] tracking-tight uppercase mb-8">
              <span className="text-white drop-shadow-lg">BUILT FOR THE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 drop-shadow-2xl">CREATOR ERA</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-4"
          >
            We understand how modern (and Gen Z) audiences behave, and how culture spreads.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10"
          >
            And we make social-first, platform-native content and IP that reaches them natively.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="#virality-toolkit" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-bold rounded text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 group"
            >
              EXPLORE SOCIAL CAPABILITIES
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Masonry Grid of Creators/Reels */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-full h-full relative">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 mt-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 relative group"
              >
                <img src={posters[0].url} alt={posters[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 font-bold text-white font-bebas text-2xl tracking-wide">{posters[0].title}</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-orange-600 relative group"
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-white font-bebas text-3xl drop-shadow-md text-yellow-300">Benami<br/>Property</span>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 -mt-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 relative group"
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-blue-900 flex flex-col items-center justify-center p-4">
                  <span className="text-blue-300 text-xs font-mono mb-2">NEWS</span>
                  <span className="text-white font-bebas text-2xl text-center leading-tight">Indian Rupee Crash</span>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full h-72 rounded-2xl overflow-hidden border border-white/10 relative group"
              >
                <img src={posters[1].url} alt={posters[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 to-transparent" />
                <div className="absolute bottom-4 left-0 w-full text-center font-bold text-yellow-500 font-bebas text-4xl tracking-widest drop-shadow-md">STRANGER<br/>THINGS</div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
