import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: Member[] = [
  {
    name: "Raghav Sharma",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300",
    bio: "A software engineer and award-winning photographer who founded Qynt Creatives to merge design elegance with tech innovation."
  },
  {
    name: "Manoj Punj",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
    bio: "Bringing 25+ years of Information Technology expertise and deep strategic business knowledge to scale enterprise structures."
  },
  {
    name: "Ashirvad Singh",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    bio: "Leads the tech team with expert-level knowledge of React, Node, and database architecture, building lightning-fast systems."
  }
];

interface HoverMemberProps {
  teamMembers: Member[];
  defaultName?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  cursorColor?: string;
}

export function HoverMember({
  teamMembers,
  defaultName = "QYNT",
  className = "",
  backgroundColor = "bg-black",
  textColor = "text-white/20",
  hoverTextColor = "text-[#FF5A36]",
  cursorColor = "bg-[#FF5A36]"
}: HoverMemberProps) {
  const [hoveredMember, setHoveredMember] = useState<Member | null>(null);
  const [isHoveredSection, setIsHoveredSection] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom cursor follower tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 220 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursorX.set(x);
    cursorY.set(y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveredSection(true)}
      onMouseLeave={() => {
        setIsHoveredSection(false);
        setHoveredMember(null);
      }}
      className={`relative w-full py-28 md:py-36 overflow-hidden flex flex-col items-center justify-center select-none ${backgroundColor} ${className}`}
    >
      {/* Custom Springy Cursor Follower with Arrow Icon */}
      {isHoveredSection && (
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className={`absolute top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-30 flex items-center justify-center text-white hidden md:flex ${cursorColor}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: hoveredMember ? 1.25 : 1, opacity: 0.9 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      )}

      {/* Row of profile squircles at the top */}
      <div className="flex items-center gap-4 justify-center mb-8 sm:mb-12 relative z-10 flex-wrap px-6">
        {teamMembers.map((member) => {
          const isSelected = hoveredMember?.name === member.name;
          return (
            <motion.div
              key={member.name}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              animate={{
                scale: isSelected ? 1.15 : 1,
                y: isSelected ? -5 : 0
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[22px] sm:rounded-[26px] overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                isSelected ? "border-[#FF5A36] shadow-lg shadow-orange-500/10" : "border-white/10 hover:border-white/30"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Giant Name Display underneath the squircles */}
      <div className="relative w-full max-w-7xl mx-auto px-6 h-28 sm:h-44 md:h-52 flex items-center justify-center z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={hoveredMember ? hoveredMember.name : defaultName}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-7xl md:text-9xl lg:text-[9.5vw] font-heading font-black tracking-tighter uppercase leading-none text-center select-none ${
              hoveredMember ? hoverTextColor : textColor
            }`}
            style={{ fontFamily: 'var(--font-sans), system-ui' }}
          >
            {hoveredMember ? hoveredMember.name : defaultName}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Dynamic Role Subtitle */}
      <div className="h-6 mt-4 relative z-10">
        <AnimatePresence mode="wait">
          {hoveredMember && (
            <motion.p
              key={hoveredMember.name + "-role"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.9, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[#FF7A50] text-xs font-black uppercase tracking-[0.3em]"
            >
              {hoveredMember.role}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Description Box */}
      <div className="h-20 mt-6 relative z-10 max-w-2xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={hoveredMember ? hoveredMember.name + "-bio" : "default-bio"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-medium"
          >
            {hoveredMember 
              ? hoveredMember.bio 
              : "Meet the core leadership driving software engineering, strategic branding, and business consulting at Qynt Creatives."}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Header */}
        <div className="px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neutral-500 font-bold uppercase tracking-widest text-xs mb-4"
            >
              The Leadership
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9] text-white"
            >
              Obsessed <span className="text-neutral-500">with</span> <br />
              <span className="text-neutral-500">our craft.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-neutral-400 max-w-sm font-medium"
          >
            Meet the leadership driving digital strategy, visual branding, and enterprise engineering at Qynt Creatives.
          </motion.p>
        </div>

        {/* Skiper UI HoverMember Component implementation exactly matching the design */}
        <HoverMember teamMembers={team} defaultName="QYNT" />
      </div>
    </section>
  );
}
