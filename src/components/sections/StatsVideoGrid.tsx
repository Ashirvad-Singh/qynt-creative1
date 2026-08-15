"use client";

import { motion } from "framer-motion";

export function StatsVideoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Stats */}
        <div>
          <h2 className="text-7xl md:text-9xl font-bebas text-primary leading-none tracking-tight mb-2">
            700+
          </h2>
          <h3 className="text-4xl md:text-5xl font-bebas text-white tracking-wide mb-6">
            VIDEOS / MONTH
          </h3>
          <p className="text-gray-400 font-light text-lg mb-4 max-w-sm leading-relaxed">
            The scale and speed required to win the Attention Economy.
          </p>
          <p className="text-gray-600 font-space text-xs uppercase tracking-widest max-w-sm">
            Our workflows are designed for hyper-scale production without compromising on quality.
          </p>
        </div>

        {/* Right Side: Animated Video Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          
          {/* Row 1 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card relative group border border-white/10">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <source src="/Qynt_Creatives_promotional_sequence_202608131259.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
            <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80" alt="Film Reel Production" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card relative group border border-white/10">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <source src="/Video-28440.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          {/* Row 2 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80" alt="Camera Operator" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="col-span-2 aspect-video rounded-xl overflow-hidden glass-card relative group border border-primary/30 shadow-[0_0_20px_rgba(255,20,147,0.2)]">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer">
              <source src="/images/Video-31462.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          {/* Row 3 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" alt="Cinema Camera Gear" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
            <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80" alt="Projector Lighting" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card border border-white/10">
            <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80" alt="Cinema Theater" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
