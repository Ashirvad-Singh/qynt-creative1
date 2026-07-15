"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { id: "01", title: "Discover", desc: "Understanding your brand, audience, and objectives to define the project scope." },
  { id: "02", title: "Strategy", desc: "Crafting a comprehensive roadmap and architecture for your digital experience." },
  { id: "03", title: "Design", desc: "Creating visually stunning, user-centric interfaces and interactions." },
  { id: "04", title: "Development", desc: "Building scalable, high-performance solutions using cutting-edge technologies." },
  { id: "05", title: "Launch", desc: "Rigorous testing and seamless deployment to bring your vision to life." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing down
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 }, 
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      // Animate each step as it comes into view
      stepsRef.current.forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative" ref={containerRef}>
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-primary font-space tracking-widest uppercase text-sm mb-4">How we work</span>
        <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white">THE PROCESS</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 origin-top" ref={lineRef}></div>
        
        {/* Active Line Overlay */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2 hidden"></div>

        <div className="space-y-24">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative flex items-center md:justify-between flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              ref={(el) => {
                if (el) stepsRef.current[idx] = el;
              }}
            >
              {/* Step Node */}
              <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-black border-2 border-primary rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(255,107,45,0.8)]"></div>
              
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-5xl font-bebas text-white/10 group-hover:text-primary/20 transition-colors absolute top-4 right-4 pointer-events-none">{step.id}</span>
                  <h3 className="text-3xl font-bebas text-white mb-4 relative z-10">{step.title}</h3>
                  <p className="text-gray-400 font-light text-sm relative z-10 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
