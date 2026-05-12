import { motion, useScroll, useTransform } from "motion/react";
import { Mail, MapPin, Phone, MessageSquare, ArrowRight, User, Briefcase, FileText, Sparkles, Globe, Clock, CheckCircle2 } from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { PremiumBackground } from "../components/PremiumBackground";
import { Magnetic } from "../components/Magnetic";

export function ContactPage() {
  const [formState, setFormState] = useState("idle");
  const containerRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <div
      className="relative min-h-screen"
      ref={containerRef}
    >
      <PremiumBackground />

      <div className="max-w-7xl mx-auto px-6 pt-48 pb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-black font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-black" />
              Get in Touch
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[100px] font-heading font-black tracking-tighter leading-[0.85] mb-12"
            >
              Let&apos;s build <br />
              <span className="text-black/20">something <br className="hidden md:block" /> remarkable.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-medium max-w-lg mb-16 leading-relaxed"
            >
              Whether you have a specific project in mind or just want to explore the possibilities, we&apos;re here to help elevate your vision.
            </motion.p>
            
            <div className="space-y-6">
               {[
                 { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@qynt.creative", desc: "Response in 24h" },
                 { icon: <MessageSquare className="w-5 h-5" />, label: "Availability", value: "Accepting Projects", desc: "Current status: Active", status: true },
                 { icon: <Phone className="w-5 h-5" />, label: "Call", value: "+1 (555) 012-3456", desc: "Mon-Fri, 9am-6pm" }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-black/5 hover:border-black/10 transition-all group"
                 >
                   <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white transition-transform group-hover:scale-110">
                     {item.icon}
                   </div>
                   <div className="flex-grow">
                     <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                     <div className="flex items-center gap-2">
                       <h4 className="text-xl font-heading font-black tracking-tight">{item.value}</h4>
                       {item.status && <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />}
                     </div>
                   </div>
                   <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                     {item.desc}
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 relative">
             <motion.div 
               initial={{ opacity: 0, y: 40, rotate: 2 }}
               animate={{ opacity: 1, y: 0, rotate: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="bg-white/40 backdrop-blur-3xl rounded-[48px] p-10 md:p-14 border border-black/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative z-20"
             >
                <div className="flex items-center gap-3 mb-12">
                   <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                      <Sparkles className="w-5 h-5" />
                   </div>
                   <h2 className="text-2xl font-black tracking-tighter uppercase">New Project Inquiry</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                        Full Name
                      </label>
                      <input required type="text" className="w-full bg-black/[0.03] rounded-2xl px-6 py-5 border border-transparent focus:border-black/10 focus:bg-white outline-none transition-all font-bold placeholder:text-muted-foreground/30" placeholder="E.g. Elon Musk" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                        Business Email
                      </label>
                      <input required type="email" className="w-full bg-black/[0.03] rounded-2xl px-6 py-5 border border-transparent focus:border-black/10 focus:bg-white outline-none transition-all font-bold placeholder:text-muted-foreground/30" placeholder="hello@company.com" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                      Service Interest
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Branding", "UI/UX", "Development", "Consulting"].map((service) => (
                        <button key={service} type="button" className="px-6 py-4 rounded-xl border border-black/5 bg-black/[0.02] text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-1">
                      Your Vision
                    </label>
                    <textarea rows={5} className="w-full bg-black/[0.03] rounded-3xl px-8 py-6 border border-transparent focus:border-black/10 focus:bg-white outline-none transition-all font-bold placeholder:text-muted-foreground/30 resize-none" placeholder="What masterpiece are we building?" />
                  </div>

                  <Magnetic>
                    <Button 
                      disabled={formState !== "idle"}
                      className="w-full h-20 rounded-[32px] text-lg font-black uppercase tracking-widest group bg-black hover:bg-black/90 text-white shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {formState === "idle" ? (
                        <span className="flex items-center gap-3 relative z-10">
                          Launch Inquiry <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </span>
                      ) : formState === "submitting" ? (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <span className="flex items-center gap-3 relative z-10 text-accent-green">
                          <CheckCircle2 className="w-6 h-6" /> Inquiry Received
                        </span>
                      )}
                    </Button>
                  </Magnetic>
                </form>
             </motion.div>

             {/* Decorative Background Orb */}
             <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-black/[0.02] rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>

      {/* Interactive Map Section (Aesthetic) */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] rounded-[60px] p-2 aspect-[16/9] md:aspect-[16/6] relative overflow-hidden group shadow-2xl"
          >
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div 
                className="w-full h-full" 
                style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-12">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8"
              >
                <MapPin className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-4">Located in the Heart <br />of Creativity</h2>
              <p className="text-white/40 uppercase tracking-widest font-black text-xs">Aesthetik Plaza 128, San Francisco, CA</p>
            </div>

            {/* Glowing Map Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-accent-green rounded-full shadow-[0_0_30px_rgba(0,210,106,1)] animate-ping" />
            </div>

            <div className="absolute bottom-10 right-10 flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                 <Clock className="w-4 h-4 text-accent-green" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">GMT-7: 12:45 PM</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                 <Globe className="w-4 h-4 text-white" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Global Studio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
