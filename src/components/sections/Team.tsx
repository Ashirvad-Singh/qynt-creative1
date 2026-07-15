"use client";

import { MessageCircle, Globe, Share2 } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Alex Sterling",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Marcus Reid",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Team() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-primary font-space tracking-widest uppercase text-sm mb-4">The Minds Behind</span>
        <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white">OUR TEAM</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden glass-card p-4 hover:-translate-y-4 transition-transform duration-500 cursor-pointer">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Image */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Info */}
            <div className="text-center pb-4 relative z-10">
              <h3 className="text-3xl font-bebas text-white tracking-wide mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-gray-400 font-space text-xs uppercase tracking-widest mb-4">{member.role}</p>
              
              <div className="flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <Link href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-colors hover-trigger">
                  <MessageCircle className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-colors hover-trigger">
                  <Globe className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-colors hover-trigger">
                  <Share2 className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
