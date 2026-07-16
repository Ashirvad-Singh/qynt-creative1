"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const WORDS = ["CREATE", "INNOVATE", "BUILD", "DESIGN"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const word = WORDS[currentWordIndex];

    if (!isDeleting && currentText === word) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500); // Pause when word is fully typed
      return () => clearTimeout(timeout);
    }
    if (isDeleting && currentText === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
      }, 50);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".hero-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80"
      >
        <source src="/Iycx9u2R769lOoLLgJ6dU9rG4.webm" type="video/webm" />
      </video>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto px-8 flex flex-col justify-between pt-32 pb-16">
        
        {/* Top Left: Huge Text */}
        <div className="hero-element min-h-[14rem] md:min-h-[26rem] flex flex-col justify-end pb-8">
          <h1 className="text-8xl md:text-[14rem] font-bebas font-bold text-white leading-[0.9] tracking-tight drop-shadow-2xl">
            WE <br className="hidden md:block" /> 
            <span className="text-white drop-shadow-2xl">{currentText}</span>
            <span className="animate-pulse text-primary font-bebas ml-2 drop-shadow-2xl">|</span>
          </h1>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 w-full">
          
          {/* Bottom Left: Button */}
          <div className="hero-element flex-shrink-0">
            <Link 
              href="#ecosystem" 
              className="px-6 py-3 bg-primary text-white font-bold rounded-[2px] text-xs uppercase tracking-widest font-space hover:bg-white hover:text-black transition-colors"
            >
              EXPLORE OUR ECOSYSTEM
            </Link>
          </div>

          {/* Bottom Right: Text blocks */}
          <div className="hero-element max-w-xl text-right flex flex-col gap-6">
            <p className="text-white text-base md:text-xl font-light leading-snug">
              <strong className="font-bold">QYNT</strong> blends <strong className="font-bold">AI-powered strategy</strong>, human storytelling, and <strong className="font-bold">unmatched scale</strong> to create work that breaks through the noise - across marketing campaigns, films, social media marketing, influencer marketing and digital IPs.
            </p>
            <p className="text-white text-base md:text-xl font-light leading-snug">
              If you want work that moves culture, not just metrics, you&apos;ve come to the right place.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
