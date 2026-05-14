import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Layout, Smartphone, Globe, Megaphone, Code2, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";
import { FAQ } from "../components/FAQ";

import { FinalCTA } from "../components/FinalCTA";

const services = [
  {
    id: "web-design",
    title: "Brand Strategy & Visual ID",
    icon: <Layout />,
    desc: "We build comprehensive visual languages that speak your brand's truth.",
    fullDesc: "Our branding process starts with intense market research and deep discovery sessions. We translate your company's core values into a visual system that works across every touchpoint—from mobile apps to office walls.",
    process: [
      { step: "01", title: "Discovery", desc: "Immersion in your brand world and competitor landscape." },
      { step: "02", title: "Strategy", desc: "Defining the core narrative and positioning." },
      { step: "03", title: "Visual ID", desc: "Crafting the logo, typography, and color systems." },
      { step: "04", title: "Execution", desc: "Deploying the brand across digital and physical assets." }
    ],
    features: ["Digital Brand Guidelines", "Logo Ecosystem", "Custom Typography", "Motion Branding"],
    stats: [
      { label: "Design Iterations", value: "Unlimited" },
      { label: "Delivery Time", value: "4-6 Weeks" },
      { label: "Format Support", value: "All High-res" }
    ],
    tools: ["Figma", "Adobe CC", "After Effects", "Cinema 4D", "Spline"],
    subServices: [
      { title: "Brand Audit", desc: "Evaluating your current brand equity and identifying gaps." },
      { title: "Visual Language", desc: "Developing a consistent aesthetic for all communication." },
      { title: "Brand Voice", desc: "Crafting the tone and messaging strategy for your audience." }
    ]
  },
  {
     id: "web-dev",
     title: "High-Performance Development",
     icon: <Smartphone />,
     desc: "Scalable architecture meets editorial frontend.",
     fullDesc: "We build digital products that feel like consumer apps and function like enterprise powerhouses. Performance, scalability, and UX are at the heart of our engineering phase.",
     process: [
        { step: "01", title: "Research", desc: "Mapping user flows and feature sets." },
        { step: "02", title: "Architecture", desc: "Setting up a scalable, future-proof stack." },
        { step: "03", title: "Full Build", desc: "Clean code meets smooth animations." },
        { step: "04", title: "Launch", desc: "Optimized deployment and early scaling." }
     ],
     features: ["Dashboard UX", "Real-time sync", "Subscription flows", "AI Integration"],
     stats: [
        { label: "Avg Load Time", value: "<1.2s" },
        { label: "Accessibility", value: "AA Target" },
        { label: "SEO Score", value: "95+" }
     ],
     tools: ["React / Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
     subServices: [
       { title: "SaaS Platforms", desc: "Complex web applications with modern architectures." },
       { title: "E-commerce", desc: "High-conversion shopping experiences that drive sales." },
       { title: "Mobile Apps", desc: "Native-feel experiences built with React Native or PWA." }
     ]
  }
];

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id) || services[0];

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-20 group">
             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-20 h-20 rounded-3xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-10">
                {service.icon}
              </div>
              <h1 className="text-6xl md:text-9xl font-heading font-extrabold tracking-tighter leading-[0.8] mb-10">
                {service.title}
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-xl">
                 {service.fullDesc}
              </p>
            </div>
            <div className="space-y-12">
               {/* Stats Grid */}
               <div className="grid grid-cols-2 gap-8">
                  {service.stats.map(stat => (
                    <div key={stat.label} className="p-8 rounded-3xl bg-secondary-bg border border-black/5">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">{stat.label}</p>
                      <p className="text-4xl font-heading font-extrabold tracking-tighter">{stat.value}</p>
                    </div>
                  ))}
               </div>

               {/* Tools Section */}
               <div className="p-8 rounded-3xl bg-black text-white">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-6 font-heading">Tech Stack & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.tools.map(tool => (
                      <div key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold">
                        {tool}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services / Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-4">Focus Areas</h2>
              <p className="text-muted-foreground text-lg">Specialized solutions within this discipline.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.subServices.map(sub => (
                <div key={sub.title} className="p-10 rounded-[40px] bg-secondary-bg border border-black/5 hover:border-black/10 transition-all">
                   <h4 className="text-2xl font-black mb-4 tracking-tight">{sub.title}</h4>
                   <p className="text-muted-foreground leading-relaxed">{sub.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-40 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
             <h2 className="text-5xl font-heading font-extrabold tracking-tighter">Our Methodology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {service.process.map(p => (
              <div key={p.step} className="relative">
                 <div className="text-6xl font-heading font-extrabold text-accent-blue/10 mb-6">{p.step}</div>
                 <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                 <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
