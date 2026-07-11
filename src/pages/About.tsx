import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Team } from "../components/Team";
import { FinalCTA } from "../components/FinalCTA";
import { PremiumBackground } from "../components/PremiumBackground";
import { Award, Target, Eye, Heart, CheckCircle2, Star, Zap, Users, Shield, Search } from "lucide-react";
import { useRef } from "react";
import { SEO } from "../components/SEO";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <SEO 
        title="About Us" 
        description="Learn more about QYNT Creative & Co. We are an elite digital collective operating at the intersection of branding, visual UX, and deep tech." 
        keywords="design agency philosophy, software agency history, qynt founders"
      />
      <section className="relative min-h-screen pt-48 pb-20 flex flex-col items-center overflow-hidden">
        <PremiumBackground />
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-3"
              >
                <div className="w-8 h-px bg-black" />
                The Agency
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[120px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
              >
                Designing the <br />
                <span className="text-black/30">next frontier.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
              >
                Founded in 2024, QYNT exists to bridge the gap between human intuition and technological scale. We believe that great design is not just how it looks, but how it empowers.
              </motion.p>
            </div>
            
            <div className="lg:col-span-4 pb-4">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black tracking-tighter">15+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-1">Creative Minds</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black tracking-tighter">48+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-1">Design Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[16/7] rounded-[60px] overflow-hidden shadow-2xl relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
              alt="Studio" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end text-white">
              <div className="max-w-md">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Our Space</p>
                <h3 className="text-4xl font-heading font-black tracking-tighter">Where logic <br />meets creativity.</h3>
              </div>
              <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t border-white pointer-events-none rounded-full"
                  />
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 rounded-[48px] bg-black text-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-white/60">Our Mission</h3>
              <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter leading-tight mb-8">
                Empowering visionary founders to build products that define categories.
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-medium">
                We bridge the gap between technical complexity and intuitive human experience, ensuring that every project we touch achieves its full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 rounded-[48px] bg-[#f9f9f9] border border-black/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-10">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black/40">Our Vision</h3>
              <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tighter leading-tight mb-8">
                To be the global standard for cinematic digital craftsmanship.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                We believe in a future where technology is invisible and the experience is everything. Our goal is to set the benchmark for quality in the digital frontier.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-6"
            >
              Foundation
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-8 leading-none">
              Our Core <br />
              <span className="text-black/20">Expectations.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Zap, title: "Velocity & Precision", desc: "We move fast without breaking things. Speed is a feature, but quality is non-negotiable." },
              { icon: Heart, title: "Radical Transparency", desc: "No fluff, no vanity. We speak the truth even when it's uncomfortable to ensure project success." },
              { icon: Star, title: "Functional Aesthetics", desc: "Design must serve a purpose. We create beauty that works and scales with your business." },
              { icon: Shield, title: "Unwavering Integrity", desc: "We take full ownership of our output. If it's not world-class, it doesn't leave the studio." },
              { icon: Users, title: "Human Centricity", desc: "Every line of code and every pixel is designed for a human being on the other side." },
              { icon: Search, title: "Relentless Curiosity", desc: "We are perpetual students of the game, always exploring new frontiers and technologies." }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-white border border-black/5 hover:border-black/10 hover:shadow-xl hover:shadow-black/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black/10 transition-colors">
                  <value.icon className="w-6 h-6 text-black group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      {/* Timeline Section */}
      <section className="py-60 relative overflow-hidden bg-[#0a0a0a] text-white">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-100 invert" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
             <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
                >
                  Founder&apos;s Statement
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8 leading-tight">
                  Design is the silent ambassador of your brand.
                </h2>
                <div className="space-y-6 text-xl text-white/60 font-medium leading-relaxed">
                   <p>
                      When we started QYNT, we didn&apos;t just want to build another agency. We wanted to build a laboratory for digital distinction.
                   </p>
                   <p>
                      In a world of templated thinking, we choose complexity handled with simplicity. We choose craft over speed, and impact over volume.
                   </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-heading font-black italic">Q</div>
                   <div>
                      <p className="font-black tracking-tight">Qynt Creative</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Founder & CEO</p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="aspect-[4/5] rounded-[40px] bg-white/5 border border-white/10 overflow-hidden"
                >
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                    alt="Founder" 
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                   />
                </motion.div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[80px]" />
             </div>
          </div>

          <div className="text-center mb-40">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-6"
            >
              The Evolution
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 leading-none">
              A Journey of <br />
              <span className="text-white/20">Distinction.</span>
            </h2>
          </div>

          <div className="space-y-40 relative">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
            
            {[
              { year: "2024", title: "The Inception", desc: "Started as a boutique studio with 3 founders and a shared vision for cinematic digital experiences." },
              { year: "2025", title: "Category Defining", desc: "Launched 12 category-defining products for global clients, growing our team to 20 elite craftspeople." },
              { year: "Future", title: "New Frontiers", desc: "Exploring the intersection of AI, spatial computing, and luxury digital design." }
            ].map((milestone, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between relative ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className={`w-full lg:w-[45%] ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-widest text-neutral-400">{milestone.year}</h4>
                  <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6">{milestone.title}</h3>
                  <p className="text-xl text-white/40 font-medium leading-relaxed">{milestone.desc}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-white hidden lg:block border-[4px] border-black shadow-[0_0_20px_rgba(255,255,255,0.4)]" />

                <div className="w-full lg:w-[45%] opacity-0 pointer-events-none">
                  {/* Empty for spacing */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f9f9f9] rounded-[60px] p-12 md:p-24 flex flex-col items-center text-center">
            <div className="flex -space-x-4 mb-10">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-16 h-16 rounded-full border-4 border-[#f9f9f9] bg-white overflow-hidden shadow-lg"
                >
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=about-${i}`} alt="trust" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-8">Trusted by industry <br />leading innovators.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl opacity-40 grayscale mt-12">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <Zap className="w-12 h-12 mx-auto" />
              <Users className="w-12 h-12 mx-auto" />
              <Star className="w-12 h-12 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
