import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useState, useEffect, useRef } from "react";
import { PremiumBackground } from "./PremiumBackground";
import { Link } from "react-router-dom";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll Parallax Transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 35, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 35, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Card Parallax Translations
  const mx1 = useTransform(springX, [-1, 1], [-30, 30]);
  const my1 = useTransform(springY, [-1, 1], [-30, 30]);

  const mx2 = useTransform(springX, [-1, 1], [40, -40]);
  const my2 = useTransform(springY, [-1, 1], [25, -25]);

  const mx3 = useTransform(springX, [-1, 1], [-20, 20]);
  const my3 = useTransform(springY, [-1, 1], [-20, 20]);

  const mx4 = useTransform(springX, [-1, 1], [30, -30]);
  const my4 = useTransform(springY, [-1, 1], [30, -30]);

  // Hover states to illuminate connecting lines
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen pt-24 sm:pt-32 md:pt-48 pb-20 overflow-hidden flex flex-col items-center"
    >
      <PremiumBackground />

      {/* Styled keyframe stylesheet for pulsing traveling dashes */}
      <style>{`
        @keyframes flow-dots {
          to {
            stroke-dashoffset: -24;
          }
        }
        .flowing-dash {
          animation: flow-dots 1.5s linear infinite;
        }
      `}</style>

      {/* Dynamic Connecting Lines SVG layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden xl:block">
        {/* Line 1: Top-Left Card */}
        <motion.line 
          x1="44%" 
          y1="34%" 
          x2={useTransform(mx1, (v) => `${15 + v/12}%`)} 
          y2={useTransform(my1, (v) => `${29 + v/12}%`)} 
          stroke={hoveredCard === "performance" ? "#FF7A50" : "rgba(0, 0, 0, 0.08)"} 
          strokeWidth={hoveredCard === "performance" ? "2.5" : "1.5"} 
          strokeDasharray="6 6" 
          className="flowing-dash transition-colors duration-300"
        />

        {/* Line 2: Bottom-Right Card */}
        <motion.line 
          x1="56%" 
          y1="46%" 
          x2={useTransform(mx2, (v) => `${85 + v/12}%`)} 
          y2={useTransform(my2, (v) => `${71 + v/12}%`)} 
          stroke={hoveredCard === "scale" ? "#FF7A50" : "rgba(0, 0, 0, 0.08)"} 
          strokeWidth={hoveredCard === "scale" ? "2.5" : "1.5"} 
          strokeDasharray="6 6" 
          className="flowing-dash transition-colors duration-300"
        />

        {/* Line 3: Bottom-Left Card */}
        <motion.line 
          x1="44%" 
          y1="46%" 
          x2={useTransform(mx3, (v) => `${18 + v/12}%`)} 
          y2={useTransform(my3, (v) => `${78 + v/12}%`)} 
          stroke={hoveredCard === "security" ? "#FF7A50" : "rgba(0, 0, 0, 0.08)"} 
          strokeWidth={hoveredCard === "security" ? "2.5" : "1.5"} 
          strokeDasharray="6 6" 
          className="flowing-dash transition-colors duration-300"
        />

        {/* Line 4: Top-Right Card */}
        <motion.line 
          x1="56%" 
          y1="34%" 
          x2={useTransform(mx4, (v) => `${86 + v/12}%`)} 
          y2={useTransform(my4, (v) => `${22 + v/12}%`)} 
          stroke={hoveredCard === "rating" ? "#FF7A50" : "rgba(0, 0, 0, 0.08)"} 
          strokeWidth={hoveredCard === "rating" ? "2.5" : "1.5"} 
          strokeDasharray="6 6" 
          className="flowing-dash transition-colors duration-300"
        />
      </svg>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block z-20">
        
        {/* Card 1: Performance */}
        <motion.div 
          style={{ y: y1, x: mx1, translateY: my1 }}
          onMouseEnter={() => setHoveredCard("performance")}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute top-[25%] left-[5%] pointer-events-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl p-4 md:p-6 rounded-[32px] border border-black/5 shadow-2xl flex items-center gap-4 cursor-pointer hover:shadow-orange-500/5 transition-shadow duration-300"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-accent-green/20 flex items-center justify-center text-accent-green">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Performance</p>
                <p className="text-lg md:text-xl font-black tracking-tighter text-neutral-900">+45% ROI</p>
             </div>
          </motion.div>
        </motion.div>

        {/* Card 2: Global Scale */}
        <motion.div 
          style={{ y: y2, x: mx2, translateY: my2 }}
          onMouseEnter={() => setHoveredCard("scale")}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute top-[65%] right-[5%] pointer-events-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl p-4 md:p-6 rounded-[32px] border border-black/5 shadow-2xl flex items-center gap-4 cursor-pointer hover:shadow-orange-500/5 transition-shadow duration-300"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">Global Scale</p>
                <p className="text-lg md:text-xl font-black tracking-tighter text-neutral-900">1.2M+ Reach</p>
             </div>
          </motion.div>
        </motion.div>

        {/* Card 3: Top-Rated Studio */}
        <motion.div 
          style={{ y: y4, x: mx4, translateY: my4 }}
          onMouseEnter={() => setHoveredCard("rating")}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute top-[18%] right-[8%] pointer-events-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl p-4 md:p-5 rounded-[28px] border border-black/5 shadow-2xl flex items-center gap-3 cursor-pointer hover:shadow-orange-500/5 transition-shadow duration-300"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#f9f9f9] flex items-center justify-center text-[#1a1a1a]">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
             </div>
             <p className="text-xs md:text-sm font-black tracking-tighter text-neutral-900">Top-Rated Studio</p>
          </motion.div>
        </motion.div>

        {/* Card 4: Certified Security */}
        <motion.div 
          style={{ y: y3, x: mx3, translateY: my3 }}
          onMouseEnter={() => setHoveredCard("security")}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute bottom-[25%] left-[8%] pointer-events-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-xl p-4 md:p-5 rounded-[28px] border border-black/5 shadow-2xl flex items-center gap-3 cursor-pointer hover:shadow-orange-500/5 transition-shadow duration-300"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#00D26A]/10 text-[#00D26A] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
             </div>
             <p className="text-xs md:text-sm font-black tracking-tighter text-neutral-900">Certified Security</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-8 select-none"
        >
          <h1 className="text-[40px] leading-[1] sm:text-6xl md:text-8xl lg:text-[100px] font-heading font-black tracking-tighter text-[#1a1a1a]">
            Where vision <br />
            meets <span className="relative inline-block mt-2 sm:mt-0">
              distinction
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-black rounded-full opacity-20"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Webdesign from HQ: Websites, Web-Apps and individual software <br className="hidden md:block" />
          — all from one source, perfectly tailored to your business.
        </motion.p>

        {/* CTA Button (Black & Premium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-24"
        >
          <Magnetic>
            <Button 
              size="lg" 
              nativeButton={false}
              className="w-64 h-14 rounded-full bg-black hover:bg-neutral-900 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 group relative overflow-hidden"
              render={<Link to="/contact" />}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 relative z-10">
                <span>Get Free Proposal</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 md:gap-x-16"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">92+</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-2">Projects <br /> completed</p>
          </div>
          <div className="w-px h-12 bg-black/5 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">100</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-2">PageSpeed <br /> Score</p>
          </div>
          <div className="w-px h-12 bg-black/5 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-[#1a1a1a]">4.9</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mt-2">Google <br /> Rating</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
