import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO at Nexus",
    content: "QYNT turned our vision into a digital masterpiece. Their attention to detail is simply unmatched in the industry.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Sarah Chen",
    role: "Design Lead at Flow",
    content: "Working with QYNT was the best decision for our rebranding. They don't just design; they craft experiences.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "James Miller",
    role: "Founder of Zenith",
    content: "A world-class agency. They delivered a site that feels expensive and functions flawlessly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    name: "Aria Rodriguez",
    role: "Product Lead at Orbit",
    content: "They don't just build websites; they build experiences that convert. Our engagement metrics doubled post-launch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aria"
  },
  {
    name: "David Park",
    role: "Marketing Director at NEXA",
    content: "Digital excellence at its finest. The motion design and transitions in our new platform are absolutely buttery smooth.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

function TestimonialCard({ item }: { item: typeof testimonials[0], key?: any }) {
  return (
    <div className="w-[450px] flex-shrink-0 px-4">
      <motion.div 
        whileHover={{ y: -10, scale: 1.02 }}
        className="h-full bg-white/50 backdrop-blur-xl rounded-[40px] p-10 border border-black/5 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 group"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-1 group-hover:scale-105 transition-transform duration-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-accent-blue text-accent-blue" />
            ))}
          </div>
          <Quote className="w-10 h-10 text-accent-blue/10 group-hover:text-accent-blue/20 transition-colors duration-500" />
        </div>
        
        <p className="text-xl font-medium leading-relaxed mb-10 text-foreground/80 italic">
          “{item.content}”
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent-blue/20 p-1 group-hover:border-accent-blue transition-colors duration-500">
            <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full bg-secondary-bg" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg">{item.name}</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MarqueeRow({ items, direction = 1, speed = 1 }: { items: typeof testimonials, direction?: 1 | -1, speed?: number }) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isHovered) return;
    const moveBy = direction * speed * (delta / 25);
    baseX.set(baseX.get() + moveBy);
    
    if (direction === -1 && baseX.get() <= -33.33) baseX.set(0);
    if (direction === 1 && baseX.get() >= 0) baseX.set(-33.33);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div 
      className="flex overflow-hidden py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        style={{ x }}
        className="flex"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-blue font-bold uppercase tracking-[0.2em] text-[10px] mb-4"
        >
          Voices of Success
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9]"
        >
          Don&apos;t take <br />
          <span className="text-muted-foreground text-gradient">our word for it.</span>
        </motion.h2>
      </div>

      <div className="relative">
        <MarqueeRow items={testimonials} direction={-1} speed={0.4} />
        <MarqueeRow items={[...testimonials].reverse()} direction={1} speed={0.3} />
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
