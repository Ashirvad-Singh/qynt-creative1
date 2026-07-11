import { motion, useScroll, useTransform } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Globe, CheckCircle2, Award, Zap, TrendingUp, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { FinalCTA } from "../components/FinalCTA";
import { PremiumBackground } from "../components/PremiumBackground";
import { useRef } from "react";
import { SEO } from "../components/SEO";

const projects = [
  {
    id: 1,
    title: "Roadhouse Cafe & Bar",
    category: "Hospitality & Dining",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074&auto=format&fit=crop",
    client: "Roadhouse Group",
    year: "2024",
    role: "Brand Overhaul & Digital Experience",
    description: "A cinematic website and digital ordering ecosystem for Roadhouse Cafe & Bar. We fused warm, organic design textures with cutting-edge front-end animation to match their premium rustic atmosphere.",
    challenges: "Recreating the warm, ambient texture of the physical dining space in a digital medium without compromising on accessibility and mobile booking speed.",
    solution: "We implemented an immersive dark-mode grid overlay, rich typography pairing (Outfit and Inter), and custom micro-interactions that mirror physical hospitality touchpoints.",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Performance", value: "99/100" },
      { label: "Bookings", value: "+60%" },
      { label: "Mobile Load Speed", value: "0.4s" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000"
    ]
  },
  {
    id: 2,
    title: "School Plus Furniture",
    category: "Educational Design",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    client: "School Plus Ltd",
    year: "2023",
    role: "B2B E-commerce & Product Catalog",
    description: "A sophisticated, architectural design system and digital catalogue platform for School Plus Furniture. The platform translates physical educational spacing configurations into an interactive 3D digital viewer.",
    challenges: "Transforming high-density modular furniture catalogs into a responsive, clean, and intuitive web directory for institutions.",
    solution: "A tailored bento-grid showcase coupled with a smart product filter system and a clean, light-mode minimal aesthetic using high-contrast typography.",
    stack: ["React", "Vite", "Tailwind CSS", "Three.js"],
    metrics: [
      { label: "Data Latency", value: "<100ms" },
      { label: "Engagement", value: "+85%" },
      { label: "Conversions", value: "2.5x Increase" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000"
    ]
  },
  {
    id: 3,
    title: "Metal Cat Music",
    category: "Entertainment & Record Label",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    client: "Metal Cat Records",
    year: "2024",
    role: "Brand Identity, Audio Stream & Design",
    description: "An explosive, audio-rich portfolio and promotional platform for the record label Metal Cat Music. Designed to be gritty, visceral, and unapologetically distinct.",
    challenges: "Balancing heavy media assets and live audio streams with instantaneous load times and animations on low-end devices.",
    solution: "Pre-buffered stream loaders, hardware-accelerated Canvas animations, and a high-impact neon visual design framework.",
    stack: ["React", "Web Audio API", "Framer Motion", "Tailwind"],
    metrics: [
      { label: "Audio Playtime", value: "+110%" },
      { label: "PageSpeed", value: "98/100" },
      { label: "Signups", value: "+75%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514525253361-bee8d48ae024?q=80&w=1000",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000",
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000"
    ]
  },
  {
    id: 4,
    title: "Charta International",
    category: "Global Logistics",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    client: "Charta Logistics",
    year: "2023",
    role: "Enterprise Supply Chain Dashboard",
    description: "A state-of-the-art global logistics portal and branding strategy. We created a high-density, real-time shipment monitoring interface built for maximum reliability.",
    challenges: "Visualizing massive, chaotic global routing paths and delivery statuses in a single unified dashboard.",
    solution: "Integrated map-rendering engines, real-time WebSockets state updates, and dynamic layout scaling.",
    stack: ["React", "Tailwind CSS", "WebSockets", "Mapbox"],
    metrics: [
      { label: "Data Latency", value: "<50ms" },
      { label: "Errors Avoided", value: "-30%" },
      { label: "Active Users", value: "12k+" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000"
    ]
  },
  {
    id: 5,
    title: "Giglab Soundworks",
    category: "Audio Engineering",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    client: "Giglab Studios",
    year: "2024",
    role: "Web Platform & Sound Studio Branding",
    description: "A premium digital home for Giglab Soundworks, emphasizing high-fidelity acoustic excellence. Immersive dark styling matches their high-end physical sound engineering rooms.",
    challenges: "Translating acoustical acoustic space values and premium sound design credentials visually for clients.",
    solution: "We constructed custom waveform audio elements, animated soundwave backdrops, and an interactive acoustic space simulation.",
    stack: ["React", "Vite", "Canvas API", "Framer Motion"],
    metrics: [
      { label: "Session Duration", value: "3x Higher" },
      { label: "Leads Generated", value: "+55%" },
      { label: "Bounce Rate", value: "<18%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b33b?q=80&w=1000",
      "https://images.unsplash.com/photo-1461783470494-4da244f62c7e?q=80&w=1000",
      "https://images.unsplash.com/photo-1462965326201-d02e4f455804?q=80&w=1000"
    ]
  },
  {
    id: 6,
    title: "Coast Air Pro",
    category: "Commercial HVAC",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    client: "Coast Air HVAC",
    year: "2024",
    role: "Service Dispatcher & Branding",
    description: "A clean, performance-optimized booking system and modern web presentation for commercial heating & cooling leader Coast Air Pro.",
    challenges: "Connecting field tech availability databases to customer booking portals with zero lag and clean UI.",
    solution: "Modernized client scheduling API endpoints, instant zip-code availability checkers, and dynamic service cards.",
    stack: ["React", "Tailwind CSS", "REST API", "Geocoding"],
    metrics: [
      { label: "Dispatch Speed", value: "+40%" },
      { label: "Booking Friction", value: "-50%" },
      { label: "Search Visibility", value: "+120%" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
      "https://images.unsplash.com/photo-1521791136064-7986c29598a5?q=80&w=1000"
    ]
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
      <SEO 
        title={project.title} 
        description={project.description} 
        keywords={`${project.title}, ${project.category}, ${project.stack.join(", ")}, qynt portfolio`}
      />
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
              className="text-white/60 font-black uppercase tracking-[0.3em] text-[10px] mb-8"
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
                  <Button className="w-full h-16 rounded-full bg-black hover:bg-neutral-900 text-white font-black uppercase tracking-[0.2em] text-xs group transition-all">
                    Live Project <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                  </Button>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-grow h-14 rounded-full border border-black/10 bg-transparent text-black hover:bg-black/5 font-black uppercase tracking-[0.2em] text-[10px] group transition-all"><Globe className="w-4 h-4 mr-2" /> Web</Button>
                    <Button variant="outline" className="flex-grow h-14 rounded-full border border-black/10 bg-transparent text-black hover:bg-black/5 font-black uppercase tracking-[0.2em] text-[10px] group transition-all"><Github className="w-4 h-4 mr-2" /> Repo</Button>
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
            <Link to="/portfolio" className="text-sm font-black uppercase tracking-widest hover:text-black/60 transition-colors">All Projects</Link>
          </div>
          
          <Link to={`/portfolio/${nextProject.id}`}>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative group h-[500px] rounded-[60px] overflow-hidden bg-black"
            >
              <img src={nextProject.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-white/60">Next Case Study</p>
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
