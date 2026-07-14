import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useState, useEffect, useRef } from "react";
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
      className="relative min-h-screen pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col items-center justify-center bg-black"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/qynt-brand-film%20(2).mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_38%,rgba(255,122,80,0.18),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.38)_48%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_62%,rgba(59,130,246,0.20),transparent_34%)] mix-blend-screen" />
      <div className="absolute inset-6 z-[1] rounded-[40px] border border-white/10 shadow-[inset_0_0_120px_rgba(255,255,255,0.06)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white/95 via-white/25 to-transparent" />

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
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2] hidden xl:block opacity-70">
        {/* Line 1: Top-Left Card */}
        <motion.line
          x1="44%"
          y1="34%"
          x2={useTransform(mx1, (v) => `${15 + v/12}%`)}
          y2={useTransform(my1, (v) => `${29 + v/12}%`)}
          stroke={hoveredCard === "performance" ? "#FF7A50" : "rgba(255, 255, 255, 0.18)"}
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
          stroke={hoveredCard === "scale" ? "#FF7A50" : "rgba(255, 255, 255, 0.18)"}
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
          stroke={hoveredCard === "security" ? "#FF7A50" : "rgba(255, 255, 255, 0.18)"}
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
          stroke={hoveredCard === "rating" ? "#FF7A50" : "rgba(255, 255, 255, 0.18)"}
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
          className="absolute top-[26%] left-[4%] pointer-events-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-2xl p-4 md:p-6 rounded-[32px] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex items-center gap-4 cursor-pointer hover:bg-white/15 hover:shadow-orange-500/20 transition-all duration-300"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#FF7A50]/20 flex items-center justify-center text-[#FF7A50]">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/50">Performance</p>
                <p className="text-lg md:text-xl font-black tracking-tighter text-white">+45% ROI</p>
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
            className="bg-white/10 backdrop-blur-2xl p-4 md:p-6 rounded-[32px] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex items-center gap-4 cursor-pointer hover:bg-white/15 hover:shadow-orange-500/20 transition-all duration-300"
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/15 flex items-center justify-center text-white">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/50">Global Scale</p>
                <p className="text-lg md:text-xl font-black tracking-tighter text-white">1.2M+ Reach</p>
             </div>
          </motion.div>
        </motion.div>

        {/* Card 3: Top-Rated Studio */}
        <motion.div
          style={{ y: y4, x: mx4, translateY: my4 }}
          onMouseEnter={() => setHoveredCard("rating")}
          onMouseLeave={() => setHoveredCard(null)}
          className="absolute top-[18%] right-[7%] pointer-events-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-2xl p-4 md:p-5 rounded-[28px] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:shadow-orange-500/20 transition-all duration-300"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
             </div>
             <p className="text-xs md:text-sm font-black tracking-tighter text-white">Top-Rated Studio</p>
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
            className="bg-white/10 backdrop-blur-2xl p-4 md:p-5 rounded-[28px] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.35)] flex items-center gap-3 cursor-pointer hover:bg-white/15 hover:shadow-orange-500/20 transition-all duration-300"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#00D26A]/15 text-[#00D26A] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
             </div>
             <p className="text-xs md:text-sm font-black tracking-tighter text-white">Certified Security</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.25)]"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF7A50] shadow-[0_0_22px_#FF7A50]" />
          Cinematic digital studio
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block mb-7 select-none"
        >
          <h1 className="text-[42px] leading-[0.95] sm:text-6xl md:text-8xl lg:text-[108px] font-heading font-black tracking-[-0.08em] text-white drop-shadow-2xl">
            Where vision <br />
            meets <span className="relative inline-block mt-2 sm:mt-0">
              distinction
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-3 left-1/2 h-1.5 w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#FF7A50] to-transparent opacity-90 shadow-[0_0_28px_rgba(255,122,80,0.8)]"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base md:text-xl text-white/82 font-medium max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
        >
          Webdesign from HQ: Websites, Web-Apps and individual software <br className="hidden md:block" />
          — all from one source, perfectly tailored to your business.
        </motion.p>

        {/* CTA Button (Black & Premium) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16"
        >
          <Magnetic>
            <Button
              size="lg"
              nativeButton={false}
              className="w-64 h-14 rounded-full bg-[#FF6B45] hover:bg-[#ff7f5c] text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-[0_18px_50px_rgba(255,107,69,0.35)] transition-all hover:scale-105 group relative overflow-hidden"
              render={<Link to="/contact" />}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="mx-auto inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-8 rounded-[32px] border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-2xl shadow-[0_24px_90px_rgba(0,0,0,0.28)] md:gap-x-14"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-white">92+</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/62 mt-2">Projects <br /> completed</p>
          </div>
          <div className="w-px h-12 bg-white/25 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-white">100</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/62 mt-2">PageSpeed <br /> Score</p>
          </div>
          <div className="w-px h-12 bg-white/25 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-white">4.9</span>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/62 mt-2">Google <br /> Rating</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
