"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";
import Link from "next/link";

export function FilmsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.6,
      });

      // Video expansion on scroll
      gsap.fromTo(videoContainerRef.current,
        { scale: 0.9, y: 50 },
        {
          scale: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">
      <div className="w-full flex flex-col items-start mb-8 gap-4">
        <span className="hero-text text-primary font-space tracking-widest uppercase text-[10px] block">
          THE CONTENT STUDIO
        </span>
        <h1 className="hero-text text-7xl md:text-9xl font-bebas tracking-wide text-white leading-[0.9] mb-4">
          BUILT FOR <span className="text-primary">THE FUTURE</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
          <p className="hero-text text-white/80 font-light text-sm md:text-base max-w-xl">
            Whether you have a drop-in request or the whole framework of a campaign, QYNT is our in-house studio for producing high-fidelity, high-volume videos across screens. Every frame is imagination.
          </p>
          <Link 
            href="#showreel" 
            className="hero-btn group relative px-8 py-3 bg-primary text-white rounded-[2px] overflow-hidden flex items-center justify-center flex-shrink-0"
          >
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10 font-space uppercase tracking-widest text-[10px] font-bold">VIEW SHOWREEL</span>
          </Link>
        </div>
      </div>

      <div 
        id="showreel"
        ref={videoContainerRef} 
        className="w-full relative aspect-[21/9] bg-zinc-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl shadow-primary/5"
      >
        {/* Placeholder video - we'll use a cinematic image as poster for now */}
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/19/85573-590924971_large.mp4" type="video/mp4" />
        </video>
        
        {/* Custom Overlay / UI mimicking standard player */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-primary transition-all duration-300 cursor-pointer">
            <Play className="w-8 h-8 text-white ml-1 fill-current" />
          </div>
        </div>
        
        {/* Bottom Bar Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
