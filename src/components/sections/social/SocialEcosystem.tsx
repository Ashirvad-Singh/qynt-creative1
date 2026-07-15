"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SocialEcosystem() {
  return (
    <section className="py-32 bg-black flex flex-col items-center border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <div className="mb-6">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">ECOSYSTEM</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bebas text-white mb-10">
          THE QYNT <br/>
          <span className="text-purple-700">ECOSYSTEM</span>
        </h2>

        <p className="text-gray-400 font-light text-lg mb-16">
          We are not just a social agency. We are an integrated media partner.
        </p>

        {/* The Toggle / Pill Graphic */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="px-10 py-4 rounded-full border border-white/10 bg-white/5 text-white font-bold tracking-widest">
            QYNT .
          </div>
          <div className="text-gray-500 text-sm font-mono">and</div>
          <div className="px-10 py-4 rounded-full border border-white/10 bg-black text-gray-400 font-bold tracking-widest">
            NEXUS
          </div>
        </div>

        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-10">
          We execute everything from high-fidelity 3D commercials to deep dive brand strategy, ensuring your message is consistent across all channels.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600 text-white font-bold rounded text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
        >
          EXPLORE OUR ECOSYSTEM
        </Link>
      </div>
    </section>
  );
}
