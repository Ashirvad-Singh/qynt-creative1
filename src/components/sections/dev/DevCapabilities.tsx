"use client";

import { motion } from "framer-motion";
import { Server, LayoutTemplate, Database, ShieldCheck, Zap, Cloud } from "lucide-react";

const CAPABILITIES = [
  {
    icon: <LayoutTemplate className="w-6 h-6 text-[#00ffff]" />,
    title: "FRONTEND ENGINEERING",
    desc: "We build blazing-fast, highly interactive user interfaces using React, Next.js, and modern animation libraries like Framer Motion and GSAP."
  },
  {
    icon: <Server className="w-6 h-6 text-[#00ffff]" />,
    title: "BACKEND ARCHITECTURE",
    desc: "Scalable, secure, and robust server-side solutions powered by Node.js, Python, and microservices architecture tailored for enterprise loads."
  },
  {
    icon: <Database className="w-6 h-6 text-[#00ffff]" />,
    title: "DATABASE DESIGN",
    desc: "Optimized data structures using PostgreSQL, MongoDB, and Redis to ensure low latency and high availability for your applications."
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#00ffff]" />,
    title: "CLOUD & DEVOPS",
    desc: "Automated CI/CD pipelines, containerization with Docker, and seamless deployments on AWS, Google Cloud, and Vercel."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#00ffff]" />,
    title: "PERFORMANCE OPTIMIZATION",
    desc: "Rigorous lighthouse auditing, edge caching, and bundle size reduction to ensure your site loads instantly globally."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#00ffff]" />,
    title: "SECURITY & COMPLIANCE",
    desc: "Enterprise-grade security practices, OWASP top 10 protection, and data encryption to keep your user data completely safe."
  }
];

export function DevCapabilities() {
  return (
    <section className="py-32 px-6 max-w-[1400px] mx-auto bg-[#050505] relative">
      <div className="mb-20">
        <span className="text-[#00ffff] font-mono tracking-[0.2em] uppercase text-[10px] font-bold mb-4 block">
          OUR EXPERTISE
        </span>
        <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white leading-[0.9]">
          FULL-STACK <br />
          <span className="text-gray-500">CAPABILITIES.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-[#00ffff]/30 transition-colors duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#00ffff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {cap.icon}
              </div>
              <h3 className="text-xl font-space font-bold text-white mb-4 tracking-wide">
                {cap.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {cap.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
