"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectCTA() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col items-center text-center">
      <h2 className="text-6xl md:text-8xl font-bebas tracking-wide text-white leading-[0.9] mb-8">
        TELL US ABOUT <br />
        <span className="text-primary">YOUR PROJECT</span>
      </h2>
      <Link 
        href="#contact" 
        className="group relative px-8 py-3 bg-primary text-white font-bold rounded-[2px] overflow-hidden flex items-center justify-center gap-3"
      >
        <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
        <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-space uppercase tracking-widest text-[10px]">Make a film</span>
      </Link>
    </section>
  );
}
