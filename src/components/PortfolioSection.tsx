import { motion, useScroll, useTransform } from "motion/react";
import { PortfolioCard } from "./PortfolioCard";
import { Skeleton } from "./Skeleton";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Roadhouse Cafe & Bar",
    category: "Hospitality & Dining",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop",
    accent: "#FF4E00",
    url: "https://www.roadhousecafeandbar.com/",
    links: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000"
    ]
  },
  {
    id: 2,
    title: "School Plus Furniture",
    category: "Educational Design",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    accent: "#3B82F6",
    url: "https://www.schoolplusfurniture.com/",
    links: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000"
    ]
  },
  {
    id: 3,
    title: "Metal Cat Music",
    category: "Entertainment & Record Label",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    accent: "#00D26A",
    url: "https://www.metalcatmusic.com/",
    links: [
      "https://images.unsplash.com/photo-1514525253361-bee8d48ae024?q=80&w=1000",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000"
    ]
  },
  {
    id: 4,
    title: "Charta International",
    category: "Global Logistics",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    accent: "#A855F7",
    url: "https://chartainternational.com/",
    links: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000"
    ]
  },
  {
    id: 5,
    title: "Giglab Soundworks",
    category: "Audio Engineering",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    accent: "#FFB800",
    url: "https://www.giglabsoundworks.com/",
    links: [
      "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b33b?q=80&w=1000",
      "https://images.unsplash.com/photo-1461783470494-4da244f62c7e?q=80&w=1000",
      "https://images.unsplash.com/photo-1462965326201-d02e4f455804?q=80&w=1000"
    ]
  },
  {
    id: 6,
    title: "Coast Air Pro",
    category: "Commercial HVAC",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    accent: "#00E0FF",
    url: "https://coastairpro.wpenginepowered.com/",
    links: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
      "https://images.unsplash.com/photo-1521791136064-7986c29598a5?q=80&w=1000"
    ]
  }
];


export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
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
              className="text-4xl md:text-7xl font-heading font-extrabold tracking-tighter"
            >
              We craft things that <br />
              <span className="text-muted-foreground">people actually use.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

