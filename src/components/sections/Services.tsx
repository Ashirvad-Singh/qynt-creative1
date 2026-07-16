"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "We Build\nVideos",
    description: "An AI-native content studio built for the future. We produce over 700 videos a month - ad films, AI films, animated videos, CGI/VFX, and digital content - using in-house studios, cutting-edge AI tools that compress timelines without compromising craft.",
    gradient: "from-[#ff4d4d] to-[#990000]",
    logoTitle: "QYNT",
    logoSub: "Films",
  },
  {
    title: "We Build\nCampaigns",
    description: "Marketing Campaigns, influencer partnerships, bold outdoor moments, and hands-on social media management, all working together to keep your brand relevant every day.",
    gradient: "from-[#8a2be2] to-[#00008b]",
    logoTitle: "QYNT",
    logoSub: "Social",
  },
  {
    title: "We Build\nIPs & Distribution",
    description: "We create digital IPs like Podcasts, YT channels, IG Creator / Community Pages",
    gradient: "from-[#ff8c00] to-[#8b4500]",
    logoTitle: "NEXUS",
    logoSub: "",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="text-[#d8973c] font-mono tracking-[0.2em] uppercase text-[10px] font-bold mb-2 block">
          ECOSYSTEM
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">WHAT WE </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">BUILD</span>
        </h2>
        <p className="text-gray-400 font-light text-sm max-w-lg mx-auto mt-6">
          Our structure is designed for specialized excellence across the modern marketing stack. We build three things every ambitious brand needs to win today:
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#141414] rounded-2xl p-4 flex flex-col h-full border border-white/5 hover:border-white/10 transition-colors group"
            >
              
              {/* Top Graphic Area */}
              <div 
                className={`w-full h-48 rounded-t-xl rounded-bl-xl rounded-br-[64px] bg-gradient-to-br ${service.gradient} relative overflow-hidden flex flex-col items-center justify-center mb-8`}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
                
                {/* Logo Text */}
                <div className="relative z-10 text-center flex flex-col items-center justify-center">
                  <h3 className="text-4xl md:text-5xl font-bebas text-white tracking-widest drop-shadow-lg">
                    {service.logoTitle}
                  </h3>
                  {service.logoSub && (
                    <span className="font-['Brush_Script_MT',cursive] text-2xl text-[#f3d399] -mt-4 drop-shadow-md rotate-[-5deg]">
                      {service.logoSub}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-col flex-1 px-2 pb-2">
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight whitespace-pre-line font-space tracking-tight">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light mb-8 flex-1">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="flex justify-end mt-auto">
                  <button className="flex items-center gap-2 text-xs font-space font-medium text-gray-400 hover:text-[#ff8a50] transition-colors py-2 px-4 rounded-full bg-white/5 hover:bg-white/10">
                    Learn More
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
