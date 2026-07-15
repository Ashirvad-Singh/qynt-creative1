"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Box, Cpu, Smartphone, Rocket, Film } from "lucide-react";

const capabilities = [
  { icon: MonitorPlay, title: "Ad Films & TVCs", desc: "Full cinematic script-to-screen production.", gradient: "from-[#ff3300] to-[#ff9900]" },
  { icon: Box, title: "CGI / VFX & 3D", desc: "Complex visual effects and motion graphics.", gradient: "from-[#ff0066] to-[#ffaa00]" },
  { icon: Cpu, title: "AI Film Production", desc: "Rapid content generation and versioning.", gradient: "from-[#8a2be2] to-[#ff3300]" },
  { icon: Smartphone, title: "Short-Form Digital", desc: "Platform-native content for viral reach.", gradient: "from-[#ff9900] to-[#ff3300]" },
  { icon: Rocket, title: "Launch & Explainers", desc: "Clear, engaging product value demonstration.", gradient: "from-[#ff0066] to-[#ff3300]" },
  { icon: Film, title: "Documentary & Long-Form", desc: "Building brand affinity through narrative.", gradient: "from-[#ff3300] to-[#8a2be2]" },
];

export function ProductionCapabilities() {
  return (
    <section className="py-32 px-6 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="flex flex-col items-center mb-24 text-center">
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide text-white">
          OUR <span className="text-primary">PRODUCTION</span> CAPABILITIES
        </h2>
      </div>

      {/* Grid Container with 1px gap to create borders */}
      <div className="w-full bg-white/5 border border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
        
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-black p-12 lg:p-16 flex flex-col items-start group hover:bg-[#0a0a0a] transition-colors duration-500"
          >
            {/* Custom Graphic Icon Block */}
            <div className="relative w-20 h-14 mb-10 flex items-center justify-center">
              {/* Massive Outer Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-lg filter blur-[20px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500`} />
              
              {/* Inner Glossy Shape */}
              <div className={`relative w-full h-full bg-gradient-to-br ${item.gradient} rounded-xl shadow-inner border border-white/20 flex items-center justify-center overflow-hidden z-10`}>
                <div className="absolute top-0 inset-x-0 h-1/2 bg-white/20" />
                <item.icon className="w-6 h-6 text-white relative z-20" strokeWidth={2} />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-inter tracking-tight text-white mb-2 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-[#888888] font-light text-[13px] md:text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
