import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";

const testimonials = [
  {
    id: "alex",
    name: "Alex Rivera",
    role: "CEO, Nexa Digital",
    content: "Qynt transformed our brand identity into something truly remarkable. Their attention to detail and creative vision is unmatched in the industry.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    content: "Working with Qynt was the best decision for our product launch. They delivered a high-performance platform that exceeded all our KPIs.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Creative Director",
    content: "The level of craftsmanship Qynt brings to every pixel is incredible. They are truly masters of the digital medium.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: "james",
    name: "James Wilson",
    role: "VP of Product",
    content: "A seamless collaboration from start to finish. Qynt understands technology and design equally well, which is rare to find.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    id: "elena",
    name: "Elena Petrov",
    role: "Marketing Director",
    content: "Our conversion rates spiked by 40% after the redesign. Qynt knows how to build for results without compromising on aesthetics.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
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
  const [activeId, setActiveId] = useState("alex");
  const activeTestimonial = testimonials.find(t => t.id === activeId) || testimonials[0];

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

              <h2 className="text-2xl md:text-5xl font-heading font-black text-white tracking-tighter leading-[1.1] max-w-4xl mb-16 text-center">
                "{activeTestimonial.content}"
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
                    ? "bg-white text-black shadow-lg"
                    : "text-white/40 hover:text-white"
                )}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
