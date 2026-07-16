"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "React.js", "Next.js", "Node.js", "TypeScript", "Python", 
  "AWS", "Vercel", "PostgreSQL", "MongoDB", "Docker", "GraphQL", "Tailwind CSS"
];

export function DevStack() {
  return (
    <section className="py-16 bg-[#020202] border-y border-[#00ffff]/10 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none" />
      
      <div className="flex flex-col items-center">
        <p className="text-[#00ffff] font-mono tracking-[0.2em] uppercase text-[10px] font-bold mb-8">
          POWERED BY MODERN TECHNOLOGIES
        </p>

        <div className="relative w-full flex overflow-hidden group">
          {/* First loop */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 gap-16 px-8 items-center"
          >
            {TECH_STACK.map((tech, idx) => (
              <span key={idx} className="text-2xl md:text-4xl font-bebas text-gray-700 tracking-wider hover:text-white transition-colors duration-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Second loop (clone for seamless loop) */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 gap-16 px-8 items-center"
          >
            {TECH_STACK.map((tech, idx) => (
              <span key={`clone-${idx}`} className="text-2xl md:text-4xl font-bebas text-gray-700 tracking-wider hover:text-white transition-colors duration-300">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
