"use client";

import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVERY & ARCHITECTURE",
    desc: "We dive deep into your technical requirements, mapping out the optimal tech stack, database schema, and system architecture before writing a single line of code."
  },
  {
    number: "02",
    title: "AGILE SPRINT DEVELOPMENT",
    desc: "Our engineers build in transparent, rapid two-week sprints. You get continuous delivery, allowing you to test features as they are built."
  },
  {
    number: "03",
    title: "QA & SECURITY AUDIT",
    desc: "Rigorous automated testing, manual QA, and security audits ensure the platform is bulletproof and performs flawlessly under heavy load."
  },
  {
    number: "04",
    title: "DEPLOYMENT & SCALE",
    desc: "Seamless zero-downtime deployment to production. We setup monitoring, logging, and auto-scaling to handle your growth effortlessly."
  }
];

export function DevProcess() {
  return (
    <section className="py-32 bg-[#020202] text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-[#00ffff] font-mono tracking-[0.2em] uppercase text-[10px] font-bold mb-4 block">
              ENGINEERING PROCESS
            </span>
            <h2 className="text-5xl md:text-7xl font-bebas tracking-wide leading-[0.9]">
              HOW WE <span className="text-gray-500">SHIP FAST.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-sm text-sm">
            A battle-tested methodology designed to mitigate risk, accelerate timelines, and deliver enterprise-grade software.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Connecting Line */}
              {idx !== PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-2rem)] w-full h-[1px] bg-gradient-to-r from-[#00ffff]/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl h-full hover:border-[#00ffff]/50 transition-colors duration-500">
                <div className="text-4xl font-bebas text-[#00ffff]/20 mb-6 group-hover:text-[#00ffff] transition-colors duration-500">
                  {step.number}
                </div>
                <h3 className="text-xl font-space font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
