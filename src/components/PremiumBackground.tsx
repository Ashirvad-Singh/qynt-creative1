import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

export function PremiumBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const mouseXSpring = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const mouseYSpring = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotateSlower = useTransform(scrollY, [0, 1000], [0, 45]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Interactive Spotlight */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-40 pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(0,0,0,0.04), transparent 80%)`
          )
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Sub-grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Animated Mesh Gradients & Orbs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: y1, rotate: rotateSlower }}
        className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-black/[0.03] rounded-full blur-[160px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ y: y2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[90%] h-[90%] bg-black/[0.02] rounded-full blur-[180px]"
      />

      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-black/[0.08] rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}
      
      {/* Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M-100 200 C 200 100 400 400 1200 200" 
          fill="none" 
          stroke="black" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path 
          d="M100 800 C 600 600 800 900 1500 700" 
          fill="none" 
          stroke="black" 
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1.5 }}
        />
      </svg>

      {/* Noise Texture layer */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
