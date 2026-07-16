"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder images mimicking the vibe of the thumbnails
const gridImages = [
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Wedding" },
  { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Podcast" },
  { url: "https://images.unsplash.com/photo-1618641986557-1de223cb2f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Music" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Finance" },
  { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Movie" },
  { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Advice" },
];

export function SocialHero() {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-24 bg-black flex items-center">
      <div className="max-w-[1500px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="font-bebas font-bold leading-[0.8] tracking-tight uppercase mb-8 flex flex-col">
              <span className="text-[#f5ebd7] text-7xl md:text-[110px] drop-shadow-lg scale-y-110 origin-left">
                BUILT FOR THE
              </span>
              <span className="text-[#5922e6] text-[100px] md:text-[150px] drop-shadow-2xl scale-y-125 origin-left mt-4">
                CREATOR ERA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6"
          >
            <p className="mb-6">
              We understand how creators think,<br />
              how <strong className="font-bold text-white">audiences behave</strong>, and how culture spreads.
            </p>
            <p>
              And we&apos;re <strong className="font-bold text-white">obsessed with producing work</strong><br />
              online and offline, that the internet can&apos;t ignore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Link 
              href="#virality-toolkit" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#5922e6] text-white font-bold rounded-sm text-sm hover:bg-[#6b2bf5] transition-colors duration-300"
            >
              PLAN YOUR VIRAL CAMPAIGN
            </Link>
          </motion.div>
        </div>

        {/* Right Content - 3x2 Grid */}
        <div className="relative w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {/* Top Row */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
              <Image src={gridImages[0].url} alt={gridImages[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
              <Image src={gridImages[1].url} alt={gridImages[1].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group bg-red-600">
              <Image src={gridImages[2].url} alt={gridImages[2].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
              {/* Star graphic simulation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                <div className="w-40 h-40 bg-yellow-400 rotate-45 transform" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group bg-black">
              <Image src={gridImages[3].url} alt={gridImages[3].title} fill className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="bg-red-600 text-white font-bold px-2 py-1 text-[10px] md:text-xs rounded-sm mb-2 shadow-lg">WATCH THIS BEFORE</span>
                <span className="text-white font-bold text-2xl md:text-3xl leading-none drop-shadow-xl">QUITTING<br/>YOUR JOB</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group bg-orange-900">
              <Image src={gridImages[4].url} alt={gridImages[4].title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-white text-xs font-light tracking-widest mb-1">Aura Of</span>
                <span className="text-yellow-500 font-bebas text-3xl md:text-4xl tracking-wider drop-shadow-xl text-center">SALIM KHAN</span>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group bg-red-600">
              <Image src={gridImages[5].url} alt={gridImages[5].title} fill className="object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-all duration-700" />
              <div className="absolute top-1/4 left-0 w-full flex flex-col items-center justify-center p-4 text-center z-10">
                <span className="text-yellow-300 font-serif text-2xl md:text-3xl leading-none mb-1 drop-shadow-xl">Dumbest</span>
                <span className="text-white font-serif text-xl md:text-2xl leading-none drop-shadow-xl">Financial Advice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
