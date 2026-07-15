"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Apex Finance",
    category: "Web App",
    desc: "A futuristic dashboard for next-generation crypto trading, featuring real-time data visualization and lightning-fast execution.",
    tech: ["Next.js", "WebGL", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Lumina Studio",
    category: "Brand Identity & Web",
    desc: "An immersive digital portfolio for an award-winning architecture firm, built with smooth scroll and cinematic transitions.",
    tech: ["GSAP", "React", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Neon AI",
    category: "SaaS Platform",
    desc: "An AI-powered automation tool with a dark mode interface, glassmorphism elements, and complex data grids.",
    tech: ["Vue", "Tailwind", "Python"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2564&q=80",
    link: "#"
  }
];

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const projectsEl = gsap.utils.toArray('.project-row');
      
      projectsEl.forEach((el: any) => {
        gsap.fromTo(el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto" ref={containerRef}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <div>
          <span className="text-primary font-space tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide text-white">FEATURED PROJECTS</h2>
        </div>
        <Link href="#" className="hidden md:flex items-center text-sm font-space uppercase tracking-wider text-white/50 hover:text-primary transition-colors hover-trigger group pb-2">
          View All Projects
          <div className="w-8 h-[1px] bg-white/50 ml-4 group-hover:bg-primary group-hover:w-12 transition-all duration-300"></div>
        </Link>
      </div>

      <div className="space-y-32">
        {projects.map((project, idx) => (
          <div key={project.id} className={`project-row flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            
            {/* Image Container */}
            <div className="w-full md:w-3/5 group cursor-pointer overflow-hidden rounded-[2rem] relative glass-card p-2 hover-trigger">
              <div className="w-full h-[400px] md:h-[600px] overflow-hidden rounded-[1.5rem] relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className={`w-full md:w-2/5 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-space tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/5">{project.category}</span>
                <span className="text-gray-500 font-bebas text-2xl tracking-widest opacity-30">0{project.id}</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bebas text-white mb-6 tracking-wide">{project.title}</h3>
              <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-space uppercase tracking-wider text-white/40 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <Link 
                href={project.link}
                className="group flex items-center gap-4 text-white font-medium hover:text-primary transition-colors w-fit hover-trigger"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-space uppercase tracking-wider">Visit Site</span>
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
