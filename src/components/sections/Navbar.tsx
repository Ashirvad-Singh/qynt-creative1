"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", hoverColor: "hover:text-white" },
  { name: "QYNT Films", href: "/films", hoverColor: "hover:text-[#ff3b30]" },
  { name: "QYNT Social", href: "/social", hoverColor: "hover:text-[#a855f7]" },
  { name: "QYNT Dev", href: "/dev", hoverColor: "hover:text-[#06b6d4]" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3 bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl" : "py-5 bg-gradient-to-b from-black/90 via-black/40 to-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
          <img 
            src="/images/qynt_logo_dark.png" 
            alt="QYNT Creatives - IMMERSE INSPIRE CREATE" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(255,20,147,0.3)]"
          />
        </Link>

        {/* Center Links - Frosted Glass Pill */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative px-5 py-2 text-xs font-space font-bold tracking-[0.18em] uppercase group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white font-extrabold" : `text-gray-400 ${link.hoverColor}`}`}>
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/20 to-white/10 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Link 
            href="#contact" 
            className="group relative px-6 py-2.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white hover:to-white hover:text-black text-white rounded-full border border-white/20 text-xs font-bold uppercase tracking-[0.18em] font-space transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center gap-2"
          >
            <span>SCHEDULE A CALL</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 text-gray-300 hover:text-white rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-space font-bold uppercase tracking-wider py-2 transition-colors ${pathname === link.href ? "text-primary" : "text-gray-300 hover:text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full py-3 bg-primary text-center text-white font-space font-bold uppercase text-xs tracking-widest rounded-xl shadow-[0_0_20px_rgba(255,20,147,0.4)]"
              >
                SCHEDULE A CALL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
