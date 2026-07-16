"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", hoverColor: "hover:text-white" },
  { name: "QYNT Films", href: "/films", hoverColor: "hover:text-[#ff0000]" },
  { name: "QYNT Social", href: "/social", hoverColor: "hover:text-[#8a2be2]" },
  { name: "QYNT Dev", href: "/dev", hoverColor: "hover:text-[#00ffff]" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
      {/* Optional Full width dark gradient when scrolled for legibility */}
      <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${scrolled ? "bg-gradient-to-b from-black/90 to-transparent opacity-100" : "opacity-0"}`} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-bebas tracking-widest text-white hover:text-gray-300 transition-colors flex-shrink-0">
          QYNT
        </Link>

        {/* Center Links - Frosted Glass Pill */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative px-5 py-2 text-sm font-sans font-bold tracking-[0.15em] uppercase group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white font-bold" : `text-gray-400 ${link.hoverColor}`}`}>
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="flex-shrink-0">
          <Link 
            href="#contact" 
            className="group relative px-6 py-2.5 bg-transparent overflow-hidden rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] font-space text-white transition-all hover:border-white"
          >
            <span className="relative z-10 font-bold mix-blend-difference">SCHEDULE A CALL</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
