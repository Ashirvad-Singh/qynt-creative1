import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import React, { useRef, useState } from "react";

const team = [
  {
    name: "Caspian Vance",
    role: "Founding Partner / Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Elena Thorne",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Grey",
    role: "Strategic Branding",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Sasha Lee",
    role: "UI/UX Ninja",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#" }
  },
  {
    name: "Dr. Aris V.",
    role: "AI Scientist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Nova Sterling",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000",
    socials: { twitter: "#", linkedin: "#" }
  }
];

function TeamCard({ member }: { member: typeof team[0], key?: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  // Parallax for elements
  const imageScale = useSpring(isHovered ? 1.05 : 1, { damping: 20 });
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-5px", "5px"]);
  const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-5px", "5px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className="group relative"
    >
      {/* Floating gradient blur behind the active profile */}
      <motion.div 
        className="absolute -inset-10 bg-accent-blue/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"
        style={{ x: bgY, y: bgX }} 
      />

      <div className="relative aspect-[3/4.2] overflow-hidden rounded-[32px] bg-secondary-bg shadow-sm transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
        {/* Layered background glass overlay with parallax */}
        <motion.div 
          style={{ x: bgX, y: bgY, translateZ: "-20px" }}
          className="absolute inset-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
        />

        {/* Portrait Image */}
        <motion.img 
          style={{ scale: imageScale }}
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-[scale,filter] duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Shadow layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700"
        />

        {/* Social links reveal - Staggered */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 px-4 translate-z-40">
          <AnimatePresence>
            {isHovered && Object.entries(member.socials).map(([platform, href], idx) => (
              <motion.a 
                key={platform}
                href={href}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.8 }}
                transition={{ 
                  delay: idx * 0.05, 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
                className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-accent-blue hover:text-white transition-all duration-300"
              >
                {platform === "twitter" && <Twitter className="w-3.5 h-3.5" />}
                {platform === "linkedin" && <Linkedin className="w-3.5 h-3.5" />}
                {platform === "github" && <Github className="w-3.5 h-3.5" />}
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-accent-blue/30 transition-colors duration-500" />
      </div>

      <motion.div 
        className="mt-6"
        animate={{ y: isHovered ? -3 : 0 }}
        style={{ x: contentX, y: contentY }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-xl font-heading font-extrabold mb-0.5 tracking-tighter truncate">{member.name}</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-blue truncate">
          {member.role}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="about" className="py-16 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4"
            >
              The Collective
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9]"
            >
              Obsessed <span className="text-muted-foreground">with</span> <br />
              <span className="text-muted-foreground">our craft.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-muted-foreground max-w-sm font-medium"
          >
            A curated team of designers, engineers, and strategists working at the intersection of culture and technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
