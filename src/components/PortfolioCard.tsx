import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  accent: string;
  links: string[];
  url?: string;
}

export function PortfolioCard({ project }: { project: Project, key?: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const springX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <Link to={`/portfolio/${project.id}`}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ 
          rotateX: springX, 
          rotateY: springY, 
          transformStyle: "preserve-3d",
          perspective: "1000px" 
        }}
        className="relative group cursor-pointer"
      >
      <div className="relative aspect-[4/5] bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-xl transition-all duration-500 group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
        {/* Project Image */}
        <div className="absolute inset-0 grayscale-[0.5] group-hover:grayscale-0 transition-[filter] duration-700">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Gloss Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000 pointer-events-none" />

        {/* Overlay Info */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.p 
            animate={{ y: isHovered ? -5 : 0, opacity: isHovered ? 1 : 0.6 }}
            className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3"
          >
            {project.category}
          </motion.p>
          <motion.h3 
            animate={{ y: isHovered ? -5 : 0 }}
            className="text-white text-2xl md:text-4xl font-heading font-extrabold leading-[1.1] tracking-tighter"
          >
            {project.title}
          </motion.h3>
        </div>

        {/* Floating Reveal Button */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10">
          {project.url ? (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.url, "_blank", "noopener,noreferrer");
              }}
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white hover:bg-[#e12e7a] flex items-center justify-center shadow-lg transition-colors pointer-events-auto"
              style={{ transform: "translateZ(60px)" }}
            >
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          ) : (
            <motion.div
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
                rotate: isHovered ? 45 : 0
              }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
              style={{ transform: "translateZ(60px)" }}
            >
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bursting Images Effect - Only on Desktop */}
      <AnimatePresence>
        {isHovered && window.innerWidth >= 768 && (
          <>
            {/* Top Left Burst */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: -140, y: -100, rotate: -15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-0 left-0 w-48 h-32 rounded-2xl overflow-hidden glass shadow-[0_20px_50px_rgba(0,0,0,0.2)] pointer-events-none -z-10"
              style={{ transform: "translateZ(20px)" }}
            >
              <img src={project.links[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            {/* Top Right Burst */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: 160, y: -60, rotate: 12, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
              className="absolute top-20 right-0 w-56 h-36 rounded-2xl overflow-hidden glass shadow-[0_20px_50px_rgba(0,0,0,0.2)] pointer-events-none -z-10"
              style={{ transform: "translateZ(30px)" }}
            >
              <img src={project.links[1]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            {/* Bottom Left Burst */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.8 }}
              animate={{ opacity: 1, x: -100, y: 180, rotate: 8, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
              className="absolute bottom-10 left-0 w-40 h-56 rounded-2xl overflow-hidden glass shadow-[0_20px_50px_rgba(0,0,0,0.2)] pointer-events-none -z-10"
              style={{ transform: "translateZ(10px)" }}
            >
              <img src={project.links[2]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
    </Link>
  );
}
