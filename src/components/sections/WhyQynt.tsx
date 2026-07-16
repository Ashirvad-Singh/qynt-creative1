"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 40, suffix: "+", label: "Brands" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl md:text-5xl font-bebas text-white mb-2">
        {inView ? (
          <CountUpEnd value={value} />
        ) : (
          "0"
        )}
        <span className="text-primary">{suffix}</span>
      </div>
      <span className="text-sm font-space tracking-wider text-gray-400 uppercase">{label}</span>
    </div>
  );
}

// Simple internal component to handle count up animation
function CountUpEnd({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const start = 0;
    const end = value;
    const duration = 2000;
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * end), end);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [value]);
  
  return <>{count}</>;
}

import { useState } from "react";

export function WhyQynt() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Storytelling */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-mono tracking-widest uppercase text-sm mb-4 block">Why QYNT</span>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white mb-8 leading-[0.9]">
            BUILT FOR <br />
            <span className="text-gray-500">MODERN BRANDS.</span>
          </h2>
          <div className="space-y-6 text-gray-400 font-light text-lg mb-12">
            <p>
              We don&apos;t just design interfaces; we engineer digital experiences that captivate and convert. Our approach blends cinematic aesthetics with cutting-edge performance.
            </p>
            <p>
              By pushing the boundaries of web technologies, we create platforms that feel alive, intuitive, and unmistakably premium.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, idx) => (
              <AnimatedCounter key={idx} {...stat} />
            ))}
          </div>
        </motion.div>

        {/* Right Column: Cinematic Illustration & Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-card flex items-center justify-center"
        >
          {/* Animated Blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-[80px] animate-[pulse_4s_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-screen filter blur-[80px] animate-[pulse_6s_infinite_reverse]"></div>
          
          {/* Center visual element */}
          <div className="relative z-10 w-3/4 h-3/4 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 border border-white/20 rounded-full flex items-center justify-center border-dashed animate-[spin_20s_linear_infinite]">
              <div className="w-1/2 h-1/2 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-[0_0_100px_rgba(255,107,45,0.6)]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
