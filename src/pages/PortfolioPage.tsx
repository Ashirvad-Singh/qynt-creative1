import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "./experienceData";

const filters = ["All", "Product Design", "Brand + Web", "Commerce Experience", "Healthcare Platform"];

export function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter(p => p.category === filter);
  return (
    <div className="bg-[#f6f3ee] text-black">
      <section className="px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-black/40">Portfolio / motion index</p>
          <h1 className="font-heading text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-[132px]">Case studies that move differently.</h1>
          <div className="mt-12 flex flex-wrap gap-3">{filters.map(f => <button onClick={() => setFilter(f)} key={f} className={`rounded-full px-5 py-3 text-xs font-black uppercase tracking-widest transition ${filter === f ? "bg-black text-white" : "bg-white text-black/55 hover:text-black"}`}>{f}</button>)}</div>
        </div>
      </section>
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl auto-rows-[260px] gap-5 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {shown.map((project, i) => (
              <motion.div layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} key={project.id} className={`${i % 4 === 0 ? "md:col-span-4 md:row-span-2" : i % 4 === 1 ? "md:col-span-2 md:row-span-1" : "md:col-span-3 md:row-span-1"}`}>
                <Link to={`/portfolio/${project.id}`} className="group relative block h-full overflow-hidden rounded-[2.5rem] bg-black text-white">
                  <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-40" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
                  <div className="absolute left-6 right-6 top-6 flex justify-between text-[10px] font-black uppercase tracking-[0.25em] text-white/60"><span>{project.category}</span><span>{project.year}</span></div>
                  <div className="absolute inset-x-0 bottom-0 p-7"><h2 className="font-heading text-5xl font-black tracking-[-0.06em]">{project.title}</h2><p className="mt-3 max-w-xl translate-y-4 text-white/70 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{project.intro}</p></div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
