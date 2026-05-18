import { motion, useScroll, useTransform } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Globe, CheckCircle2, Award, Zap, TrendingUp, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { FinalCTA } from "../components/FinalCTA";
import { PremiumBackground } from "../components/PremiumBackground";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Vortx Ecosystem",
    category: "Unified Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
    client: "Vortx Labs",
    year: "2024",
    role: "Brand Identity, Web Design",
    description: "A complete overhaul of the Vortx digital identity, focusing on fluid motion and architectural hierarchy. We built a system that scales across their entire product suite.",
    challenges: "The main challenge was reconciling a complex technical architecture with a consumer-friendly aesthetic that didn't feel reductive.",
    solution: "We implemented a modular design language based on 'energy flows', using custom shaders and bento-grid layouts to organize high-density information.",
    stack: ["React", "Motion", "Three.js", "Tailwind"],
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Conversion", value: "+45%" },
      { label: "System scale", value: "Global" }
    ],
    gallery: [
       "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000",
       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000",
       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000"
    ]
  },
  {
    id: 2,
    title: "Nexis Dashboard",
    category: "SaaS Design & Build",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    client: "Nexis AI",
    year: "2023",
    role: "UI/UX, Frontend Development",
    description: "An AI-powered dashboard for enterprise resource planning. We focused on reducing cognitive load through intelligent information density.",
    challenges: "Visualizing massive data streams without overwhelming the user.",
    solution: "A custom 'Focus Mode' that uses AI to highlight critical path tasks and dims peripheral noise.",
    stack: ["Next.js", "D3.js", "Framer Motion", "Supabase"],
    metrics: [
      { label: "Data Latency", value: "<150ms" },
      { label: "User Task Speed", value: "2x Faster" }
    ],
    gallery: [
       "https://images.unsplash.com/photo-1551288049-bbda4e9664ad?q=80&w=2000",
       "https://images.unsplash.com/photo-1504868584819-f8e90526ef53?q=80&w=2000"
    ]
  },
  {
    id: 3,
    title: "Lumina Brand",
    category: "Next-Gen Development",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
    client: "Lumina Energy",
    year: "2024",
    role: "Full-Stack Development",
    description: "A high-performance web platform for a renewable energy startup.",
    challenges: "Building a site that is both aesthetically premium and highly performant on low-bandwidth connections.",
    solution: "Hybrid static-dynamic rendering and optimized WebP delivery.",
    stack: ["Astro", "React", "Node.js"],
    metrics: [
      { label: "Load Time", value: "0.8s" },
      { label: "Availability", value: "99.9%" }
    ],
    gallery: []
  },
  {
    id: 4,
    title: "Orbit App",
    category: "Strategic Consulting",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000",
    client: "Orbit Mobile",
    year: "2023",
    role: "Product Strategy, UX Design",
    description: "The next evolution of shared mobility.",
    challenges: "Simplifying a multi-step booking process into a single-tap experience.",
    solution: "Geofencing-based automatic check-ins and predictive destination suggestions.",
    stack: ["React Native", "Firebase", "Google Maps"],
    metrics: [
      { label: "User Retention", value: "85%" },
      { label: "Avg Booking", value: "1.2 min" }
    ],
    gallery: []
  }
];

export function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex(p => p.id === Number(id));
  const project = projects[projectIndex !== -1 ? projectIndex : 0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="bg-white">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
          
          {/* Consistency Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.2] mix-blend-overlay" 
            style={{ 
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-20 group font-bold uppercase tracking-widest text-[10px]">
             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Link>
          
          <motion.div style={{ y }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-accent-green font-black uppercase tracking-[0.3em] text-[10px] mb-8"
            >
              Case Study / {project.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-7xl md:text-[140px] font-heading font-black tracking-tighter leading-[0.8] text-white mb-16"
            >
              {project.title}
            </motion.h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white border-t border-white/10 pt-12">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Client</p>
                <p className="text-xl font-bold">{project.client}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Year</p>
                <p className="text-xl font-bold">{project.year}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Service</p>
                <p className="text-xl font-bold">{project.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-32">
               <div>
                 <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                     <Info className="w-5 h-5" />
                   </div>
                   <h2 className="text-2xl font-black uppercase tracking-tighter">Overview</h2>
                 </div>
                 <p className="text-2xl md:text-4xl font-heading font-black tracking-tighter leading-[1.1] mb-8">
                   {project.description}
                 </p>
                 <div className="flex flex-wrap gap-3 mt-12">
                   {project.stack.map(s => (
                     <span key={s} className="px-5 py-2 rounded-full bg-[#f9f9f9] border border-black/5 text-xs font-black uppercase tracking-widest">{s}</span>
                   ))}
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                 <div>
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                       <Zap className="w-5 h-5 fill-red-500" />
                     </div>
                     <h3 className="text-lg font-black uppercase tracking-tighter">The Challenge</h3>
                   </div>
                   <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                     {project.challenges}
                   </p>
                 </div>
                 <div>
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <h3 className="text-lg font-black uppercase tracking-tighter">The Solution</h3>
                   </div>
                   <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                     {project.solution}
                   </p>
                 </div>
               </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="p-8 bg-[#f9f9f9] border border-black/5 rounded-[40px] space-y-12">
                <h3 className="text-xl font-black tracking-tighter uppercase mb-8">Key Metrics</h3>
                {project.metrics?.map((metric, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-black/5 pb-4 last:border-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{metric.label}</span>
                    <span className="text-3xl font-heading font-black tracking-tighter text-accent-green">{metric.value}</span>
                  </div>
                ))}
                
                <div className="pt-8 space-y-4">
                  <Button className="w-full h-16 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs group">
                    Live Project <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Button>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-grow h-14 rounded-xl border-black/5 font-bold"><Globe className="w-4 h-4 mr-2" /> Web</Button>
                    <Button variant="outline" className="flex-grow h-14 rounded-xl border-black/5 font-bold"><Github className="w-4 h-4 mr-2" /> Repo</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Mockup Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[16/9] rounded-[48px] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <img src={project.image} alt="Process" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Gallery & Interactive Grid */}
      {project.gallery.length > 0 && (
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.gallery.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-[40px] overflow-hidden shadow-2xl group relative ${i === 0 ? 'md:col-span-2 aspect-[16/8]' : 'aspect-[4/5]'}`}
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                       <ArrowUpRight className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Slider */}
      <section className="py-40 border-t border-black/5 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter">Up Next</h2>
            <Link to="/portfolio" className="text-sm font-black uppercase tracking-widest hover:text-accent-green transition-colors">All Projects</Link>
          </div>
          
          <Link to={`/portfolio/${nextProject.id}`}>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative group h-[500px] rounded-[60px] overflow-hidden bg-black"
            >
              <img src={nextProject.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-accent-green">Next Case Study</p>
                <h3 className="text-6xl md:text-9xl font-heading font-black tracking-tighter leading-none mb-10 group-hover:tracking-normal transition-all duration-700">{nextProject.title}</h3>
                <div className="flex items-center gap-2 text-xl font-bold">
                  View Project <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
