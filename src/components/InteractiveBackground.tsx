import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Premium Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #FF7A50 1px, transparent 1px), linear-gradient(to bottom, #FF7A50 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Animated Mesh Gradients */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#FF7A50]/15 rounded-full blur-[120px]"
        animate={{
          x: mousePos.x * 0.05,
          y: mousePos.y * 0.05 + (scrollY.get() * 0.1),
        }}
      />
      <motion.div 
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#3B82F6]/10 rounded-full blur-[100px]"
        animate={{
          x: -mousePos.x * 0.03,
          y: -mousePos.y * 0.03,
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Spotlight effect */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-white/10 blur-[100px]"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          opacity: 0.15
        }}
      />
    </div>
  );
}
