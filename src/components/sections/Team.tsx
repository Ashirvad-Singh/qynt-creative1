"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Raghav",
    role: "Founder",
    image: "/images/team_raghav.png"
  },
  {
    name: "Manoj",
    role: "Co-Founder",
    image: "/images/team_manoj.png"
  }
];

export function Team() {
  return (
    <section id="team" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-20 text-center">
        <span className="text-[#ff8a50] font-space tracking-[0.2em] uppercase text-xs font-bold mb-3 block">
          THE MINDS BEHIND QYNT
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide text-white leading-none">
          LEADERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">TEAM</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {team.map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#ff8a50]/50 transition-all duration-500 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,138,80,0.2)]"
          >
            {/* Card Graphic Image */}
            <div className="relative w-full aspect-square bg-white overflow-hidden">
              <img 
                src={member.image} 
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="p-6 bg-zinc-950 border-t border-white/10 text-center flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bebas text-white tracking-wider group-hover:text-[#ff8a50] transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-400 font-space text-xs font-bold uppercase tracking-widest mt-1">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
