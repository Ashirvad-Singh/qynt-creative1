"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-bebas tracking-wider text-white hover:text-primary transition-colors flex-shrink-0">
          QYNT
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-space text-white">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/films" className="hover:text-primary transition-colors">QYNT Films</Link>
          <Link href="#" className="hover:text-primary transition-colors">QYNT Social</Link>
          <Link href="#" className="hover:text-primary transition-colors">NEXUS</Link>
        </div>

        {/* Right CTA */}
        <div className="flex-shrink-0">
          <Link href="#contact" className="px-6 py-2.5 bg-primary text-white font-bold rounded-[2px] text-xs uppercase tracking-widest font-space hover:bg-white hover:text-black transition-colors">
            SCHEDULE A CALL
          </Link>
        </div>

      </div>
    </nav>
  );
}
