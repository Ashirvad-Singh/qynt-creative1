import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface Card {
  title: string;
  description: string;
  highlighted?: boolean;
  actionText?: string;
  actionLink?: string;
}

const cards: Card[] = [
  {
    title: "Strategy",
    description: "We establish clarity and direction before anything gets built. Discovery, benchmarking and team alignment that grounds decisions in insight, not assumptions. We interrogate the brief, identify what's actually possible, and set a common thread that runs across the entire partnership."
  },
  {
    title: "Brand",
    description: "We design visual and verbal systems that resonate and endure. Brand guidelines, component libraries, and assets are built for consistency across every touchpoint and ladder up to a unique identity that has value as a strategic asset, not just decoration."
  },
  {
    title: "Website",
    description: "We build brand-led marketing sites that work hard for your business. Clear messaging, smooth user journeys, and content management systems with guardrails baked in. Sites your teams can update and evolve without breaking things or losing consistency."
  },
  {
    title: "Product",
    description: "We create platforms and digital products that solve real problems and adapt as things change. We design and build interaction flows, interfaces, and component libraries. Through prototyping and testing to validate direction early, we can track what's working through analytics.",
    highlighted: true,
    actionText: "Explore Product",
    actionLink: "/services/product-design"
  },
  {
    title: "Development",
    description: "We back our designs with robust development. Product designers and developers work hand-in-hand to create technology that's built for growth, performance, and long-term flexibility, not just launch day."
  },
  {
    title: "SEO & Speed",
    description: "We engineer search-engine-first experiences. Pagespeed scoring at 100, clean semantic structure, custom meta schemas, and advanced optimization protocols ensure your brand ranks at rocket speed and stays ahead of the competition.",
    actionText: "Boost Rankings",
    actionLink: "/services/digital-marketing"
  }
];

export function ProcessSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress(scrollLeft / totalScroll);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 380;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation controls */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#FF7A50] font-black uppercase tracking-[0.25em] text-[10px] mb-4 flex items-center gap-2"
            >
              <div className="w-8 h-px bg-[#FF7A50]" />
              Our Core Disciplines
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-neutral-900">
              HOW WE CREATE VALUE
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-neutral-700 hover:bg-[#FF7A50] hover:text-white hover:border-[#FF7A50] transition-colors cursor-pointer shadow-sm active:scale-95 duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-black/10 bg-white flex items-center justify-center text-neutral-700 hover:bg-[#FF7A50] hover:text-white hover:border-[#FF7A50] transition-colors cursor-pointer shadow-sm active:scale-95 duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`snap-start shrink-0 w-[290px] sm:w-[350px] p-8 md:p-10 rounded-[36px] flex flex-col justify-between h-[340px] md:h-[370px] transition-all duration-500 border ${
                card.highlighted
                  ? "bg-gradient-to-br from-[#FF7A50] to-[#FF5A36] border-[#FF5A36] text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/90 backdrop-blur-sm border-black/5 hover:border-[#FF7A50]/20 hover:shadow-xl hover:shadow-orange-500/5 text-neutral-800"
              }`}
            >
              <div className="space-y-5">
                <h3 className={`text-2xl font-heading font-black tracking-tight ${card.highlighted ? "text-white" : "text-neutral-900"}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${card.highlighted ? "text-white/80" : "text-neutral-600"}`}>
                  {card.description}
                </p>
              </div>

              {card.actionText && (
                <div className="pt-5 border-t border-current/10">
                  <a
                    href={card.actionLink || "#"}
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] group ${
                      card.highlighted ? "text-white" : "text-[#FF7A50] hover:text-[#FF5A36]"
                    }`}
                  >
                    <span>{card.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="mt-8 flex justify-start items-center gap-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Swipe or Click to Scroll</span>
          <div className="w-24 h-1 bg-black/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FF7A50] transition-all duration-150" 
              style={{ width: `${scrollProgress * 100}%`, transformOrigin: "left" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
