"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu } from "lucide-react";

export function DevHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020202]">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#00ffff]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography */}
          <div className="flex flex-col relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#00ffff]/20 bg-[#00ffff]/5 w-fit mb-8"
            >
              <Cpu className="w-4 h-4 text-[#00ffff]" />
              <span className="text-xs font-mono tracking-widest text-[#00ffff] uppercase">QYNT Engineering Lab</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[140px] font-bebas tracking-wide leading-[0.85] text-white"
            >
              ENGINEERING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#00a2ff] to-[#00ffff]">
                THE FUTURE.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-xl font-light text-gray-400 max-w-lg font-space leading-relaxed"
            >
              We build high-performance web applications, scalable architectures, and immersive digital platforms that redefine what&apos;s possible on the modern web.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex items-center gap-6"
            >
              <button className="px-8 py-4 bg-[#00ffff] text-black font-space font-bold tracking-widest text-sm uppercase hover:bg-white transition-colors duration-300">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-space tracking-widest text-sm uppercase hover:border-[#00ffff] hover:text-[#00ffff] transition-colors duration-300 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> View Stack
              </button>
            </motion.div>
          </div>

          {/* Right: Code/Tech Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-xl aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffff]/20 to-transparent blur-3xl rounded-full" />
            <div className="relative z-10 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Header */}
              <div className="h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="ml-4 flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Code2 className="w-3 h-3" /> qynt-dev/architecture.tsx
                </div>
              </div>
              {/* Terminal Body */}
              <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-hidden relative">
                <div className="text-gray-500 mb-4">// System Initialization</div>
                <div className="text-[#00ffff]">import</div> <div className="text-white inline">{`{ Architecture }`}</div> <div className="text-[#00ffff] inline">from</div> <div className="text-green-400 inline">&quot;@qynt/core&quot;</div><br />
                <div className="text-[#00ffff]">import</div> <div className="text-white inline">{`{ Performance }`}</div> <div className="text-[#00ffff] inline">from</div> <div className="text-green-400 inline">&quot;@qynt/engine&quot;</div><br /><br />
                <div className="text-purple-400 inline">export default function</div> <div className="text-blue-400 inline">BuildFuture</div><div className="text-white inline">() {`{`}</div><br />
                <div className="pl-4">
                  <div className="text-purple-400 inline">return</div> <div className="text-white inline">(</div><br />
                  <div className="pl-4">
                    <div className="text-gray-400">&lt;Architecture&gt;</div>
                    <div className="pl-4 text-gray-400">&lt;Performance target=&quot;maximum&quot; /&gt;</div>
                    <div className="pl-4 text-gray-400">&lt;Scalability mode=&quot;infinite&quot; /&gt;</div>
                    <div className="text-gray-400">&lt;/Architecture&gt;</div>
                  </div>
                  <div className="text-white">)</div>
                </div>
                <div className="text-white">{`}`}</div>

                {/* Animated Scanner line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                  className="absolute left-0 w-full h-[2px] bg-[#00ffff]/50 shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
