import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";

const testimonials = [
  {
    id: "manu",
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content: "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manu"
  },
  {
    id: "tyler",
    name: "Tyler Durden",
    role: "Creative Director & Business Owner",
    content: "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler"
  },
  {
    id: "alice",
    name: "Alice Johnson",
    role: "Senior Software Engineer",
    content: "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
  },
  {
    id: "bob",
    name: "Bob Smith",
    role: "Industry Analyst",
    content: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
  },
  {
    id: "eva",
    name: "Eva Green",
    role: "Operations Director",
    content: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eva"
  },
  {
    id: "henry",
    name: "Henry Ford",
    role: "Operations Analyst",
    content: "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry"
  },
  {
    id: "ivy",
    name: "Ivy Wilson",
    role: "Business Consultant",
    content: "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivy"
  }
];

const backgroundTestimonials = [
  ...testimonials,
  {
    id: "david",
    name: "David Wright",
    role: "Research Scientist",
    content: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: "grace",
    name: "Grace Hall",
    role: "Marketing Specialist",
    content: "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace"
  },
  {
    id: "jack",
    name: "Jack Brown",
    role: "Performance Manager",
    content: "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"
  }
];

export function Testimonials() {
  const [activeId, setActiveId] = useState("tyler");
  const activeTestimonial = testimonials.find(t => t.id === activeId) || testimonials[1];

  return (
    <section className="relative min-h-screen bg-[#030303] overflow-hidden py-32 flex items-center justify-center">
      {/* Background Grid of Cards */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 opacity-15 pointer-events-none">
        {backgroundTestimonials.map((t, i) => (
          <div 
            key={t.id + i}
            className="p-8 rounded-3xl border border-white/10 bg-white/[0.01] flex flex-col justify-between h-[300px]"
          >
            <p className="text-white/70 text-sm leading-relaxed font-medium">
              {t.content}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-white/5 grayscale opacity-50" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-white/80 text-sm font-bold">{t.name}</h4>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Radial Spotlight Overlay - Stronger Dimming */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#030303_65%)] z-10" />

      {/* Central Spotlight Section */}
      <div className="relative z-20 w-full max-w-5xl px-6 text-center">
        <div className="mb-14 relative flex flex-col items-center">
          {/* Glowing Background for Spotlight - More layered for "Soft Light" effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.07] rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.05] rounded-full blur-[80px]" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-12 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                <img 
                  src={activeTestimonial.avatar} 
                  alt={activeTestimonial.name} 
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h2 className="text-2xl md:text-5xl font-heading font-black text-white tracking-tighter leading-[1.1] max-w-4xl mb-16">
                {activeTestimonial.content}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Selection Chips Group */}
          <div className="bg-white/[0.03] border border-white/10 p-1.5 rounded-full backdrop-blur-2xl inline-flex gap-1.5">
            {testimonials.slice(0, 3).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500",
                  activeId === t.id 
                    ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                )}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Edge vignette gradients */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}


