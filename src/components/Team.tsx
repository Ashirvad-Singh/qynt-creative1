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
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Parallax for elements
  const imageScale = useSpring(isHovered ? 1.08 : 1, { damping: 20 });
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-30px", "30px"]);
  const contentX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const contentY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

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
        className="absolute -inset-10 bg-accent-blue/15 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"
        style={{ x: bgY, y: bgX }} // Slightly different movement for organic feel
      />

      <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-secondary-bg shadow-xl transition-all duration-500 group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
        {/* Layered background glass overlay with parallax */}
        <motion.div 
          style={{ x: bgX, y: bgY, translateZ: "-40px" }}
          className="absolute inset-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
        />

        {/* Portrait Image */}
        <motion.img 
          style={{ scale: imageScale }}
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-[filter] duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Dynamic lighting (Spotlight mask) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            "--mouse-x": useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]),
            "--mouse-y": useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]),
          } as any}
        />
        
        {/* Shadow layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700"
        />

        {/* Social links reveal - Staggered */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 px-6 translate-z-40">
          <AnimatePresence>
            {isHovered && Object.entries(member.socials).map(([platform, href], idx) => (
              <motion.a 
                key={platform}
                href={href}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ 
                  delay: idx * 0.05, 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
                className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 shadow-lg"
              >
                {platform === "twitter" && <Twitter className="w-5 h-5" />}
                {platform === "linkedin" && <Linkedin className="w-5 h-5" />}
                {platform === "github" && <Github className="w-5 h-5" />}
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-[40px] border border-white/10 group-hover:border-accent-blue/30 transition-colors duration-500" />
      </div>

      <motion.div 
        className="mt-8"
        animate={{ y: isHovered ? -5 : 0 }}
        style={{ x: contentX, y: contentY }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-3xl font-heading font-extrabold mb-1 tracking-tighter">{member.name}</h3>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
          {member.role}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="about" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
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
              className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9]"
            >
              Obsessed with <br />
              <span className="text-muted-foreground">the craft.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-muted-foreground max-w-sm font-medium"
          >
            A curated team of designers, engineers, and strategists working at the intersection of culture and technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
