"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Ad Films", "Content Series", "3D Films", "VFX", "Animation", "CG"];

const films = [
  { id: 1, title: "THE FUTURE OF SPORT - NIKE GLOBAL", category: "Ad Films", year: "2024", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "METAVERSE ODYSSEY", category: "3D Films", year: "2023", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "URBAN LEGENDS: THE DOCUSERIES", category: "Content Series", year: "2024", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "NEON CITY OVERRIDE", category: "VFX", year: "2023", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "ECHOES OF TOMORROW", category: "Animation", year: "2022", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "SYNTHETIC REALITY", category: "CG", year: "2024", image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export function FilmsGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredFilms = activeTab === "All" ? films : films.filter(f => f.category === activeTab);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white">
            OUR <span className="text-primary">FILMS</span>
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-sm mt-4">
            A curated showcase of our most ambitious visual storytelling, CG, and live-action shoots.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:justify-end max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-space uppercase tracking-wider border transition-all duration-300 hover-trigger ${
                activeTab === cat 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredFilms.map((film) => (
            <motion.div
              layout
              key={film.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer hover-trigger"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                <img 
                  src={film.image} 
                  alt={film.title}
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="text-lg font-bebas tracking-wide text-white group-hover:text-primary transition-colors">{film.title}</h3>
                  <p className="text-xs font-space uppercase tracking-widest text-gray-500 mt-1">{film.category}</p>
                </div>
                <span className="text-xs font-space text-gray-600">{film.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-16">
        <button className="px-8 py-3 bg-primary text-white font-bold rounded-[2px] hover:bg-white hover:text-black transition-colors duration-300 hover-trigger text-[10px] uppercase tracking-widest font-space">
          View More
        </button>
      </div>
    </section>
  );
}
