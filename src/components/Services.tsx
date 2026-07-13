import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Globe, Layout, Code2, Cpu, Smartphone, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "branding",
    num: "01",
    title: "Branding",
    description: "Defining your unique market position, visual guidelines, and corporate voice.",
    icon: <Globe className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600"
  },
  {
    id: "product-design",
    num: "02",
    title: "Product Design",
    description: "Obsessive attention to user experience pathways, functional wireframes, and interface aesthetics.",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600"
  },
  {
    id: "development",
    num: "03",
    title: "Development",
    description: "High-performance web applications, custom platforms, and robust database architectures built for scale.",
    icon: <Code2 className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
  },
  {
    id: "ai-integration",
    num: "04",
    title: "AI Integration",
    description: "Embedding intelligence into platforms using vector storage, advanced LLMs, and operational pipelines.",
    icon: <Cpu className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600"
  },
  {
    id: "business-consulting",
    num: "05",
    title: "Business Consulting",
    description: "Analyzing operational frameworks, strategizing growth modules, and streamlining workflow automations.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
  },
  {
    id: "digital-marketing",
    num: "06",
    title: "Digital Marketing",
    description: "Managing structured conversions, scaling social presence, and implementing speed-first SEO content pipelines.",
    icon: <Megaphone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  }
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default active is first card

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Serif Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-neutral-900 leading-tight">
            OUR AGENCY PROVIDES THESE <br />
            <span className="font-serif italic uppercase tracking-wider text-[#FF7A50]">SERVICES</span>
          </h2>
        </div>

        {/* Hover Accordion List */}
        <div className="border-t border-black/5 w-full flex flex-col">
          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="relative block w-full group"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(i)} // keep active item highlighted
              >
                {/* Background Hover slide-in card */}
                <motion.div
                  className="absolute inset-0 bg-[#0a0a0b] rounded-[28px] -z-10"
                  initial={false}
                  animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />

                <div 
                  className={`flex items-center justify-between py-8 md:py-10 px-6 md:px-10 transition-colors duration-300 border-b border-black/5 group-hover:border-transparent ${
                    isHovered ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {/* Left Side: Number and Title */}
                  <div className="flex items-center gap-6 md:gap-12 flex-shrink-0">
                    <span className={`font-mono text-xs md:text-sm font-bold opacity-60 ${isHovered ? "text-white" : "text-neutral-500"}`}>
                      {service.num}
                    </span>
                    <h3 className={`text-xl sm:text-3xl md:text-4.5xl font-heading font-black tracking-tight uppercase`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle Description */}
                  <p 
                    className={`text-sm leading-relaxed font-medium max-w-sm text-left pl-6 hidden md:block ${
                      isHovered ? "text-neutral-300" : "text-neutral-500"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Right Side: Floating Hover Image and Action Button */}
                  <div className="flex items-center gap-4 relative">
                    {/* Animated Tilted Image Card */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85, rotate: 0, y: 15 }}
                          animate={{ opacity: 1, scale: 1, rotate: 6, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85, rotate: 0, y: 15 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute right-24 top-[-60px] w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 pointer-events-none hidden lg:block"
                        >
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover" 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Arrow Button */}
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered 
                          ? "bg-white text-black scale-110 shadow-lg" 
                          : "border border-neutral-300 text-neutral-700"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
