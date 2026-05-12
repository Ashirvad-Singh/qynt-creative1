import { motion, useScroll, useTransform } from "motion/react";
import { PortfolioCard } from "./PortfolioCard";
import { Skeleton } from "./Skeleton";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "The Zenith Collection",
    category: "Luxury Fashion",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop",
    accent: "#FF4E00",
    links: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000"
    ]
  },
  {
    id: 2,
    title: "Nexus OS Dashboard",
    category: "Fintech SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    accent: "#3B82F6",
    links: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000",
      "https://images.unsplash.com/photo-1454165833772-d996d4ce50f7?q=80&w=1000"
    ]
  },
  {
    id: 3,
    title: "Hyperion Drive",
    category: "Automotive Tech",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    accent: "#00D26A",
    links: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000"
    ]
  },
  {
    id: 4,
    title: "Visionary AR Glasses",
    category: "Consumer Tech",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop",
    accent: "#A855F7",
    links: [
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000"
    ]
  }
];

export function PortfolioSection() {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section id="portfolio" ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4"
              >
                Selected Showcase
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter"
              >
                We craft things that <br />
                <span className="text-muted-foreground">people actually use.</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pb-2 hidden md:block"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center cursor-none hover:bg-foreground hover:text-white transition-colors">
                  <span className="sr-only">Previous</span>
                  <span>←</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center cursor-none hover:bg-foreground hover:text-white transition-colors">
                  <span className="sr-only">Next</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-6 md:px-[calc((100vw-80rem)/2)] lg:px-[calc((100vw-80rem)/2)]">
          <motion.div 
            style={{ x }} 
            className="flex gap-12 md:gap-20"
          >
            {isReady ? (
              projects.map((project) => (
                <div key={project.id} className="w-[85vw] md:w-[450px] shrink-0">
                  <PortfolioCard project={project} />
                </div>
              ))
            ) : (
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[85vw] md:w-[450px] shrink-0 aspect-[4/5] rounded-[40px] overflow-hidden">
                  <Skeleton className="w-full h-full" />
                </div>
              ))
            )}
            {/* Extended padding for horizontal scroll end */}
            <div className="w-[1px] shrink-0 h-1 md:w-[20vw]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

