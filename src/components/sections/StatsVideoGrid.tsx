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

        {/* Right Side: Video Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Row 1 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1576400508535-64f3d1490226?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1535016120720-40c746a51d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          
          {/* Row 2 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="col-span-2 aspect-video rounded-xl overflow-hidden glass-card relative group">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video 5" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          
          {/* Row 3 */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1588534063991-8f5bc65163df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 7" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="col-span-1 aspect-video rounded-xl overflow-hidden glass-card">
            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Video 8" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
