"use client";

import { motion } from "framer-motion";
import { Sparkles, BarChart, Smartphone } from "lucide-react";

export function ViralityToolkit() {
  const tools = [
    { icon: Sparkles, title: "Strategic Influencer Campaigns" },
    { icon: BarChart, title: "360° Social Media Management" },
    { icon: Smartphone, title: "Digital Campaigns" }
  ];

  return (
    <section id="virality-toolkit" className="py-32 bg-black border-b border-white/5 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-gray-400 mb-6">
            CAPABILITIES
          </div>
          <h2 className="text-5xl md:text-7xl font-bebas text-white">
            OUR <span className="text-purple-600">VIRALITY TOOLKIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600/30 filter blur-xl rounded-full" />
                <tool.icon className="w-10 h-10 text-purple-400 relative z-10" />
              </div>
              <h3 className="text-xl text-gray-300 font-light max-w-[200px] leading-snug">
                {tool.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
