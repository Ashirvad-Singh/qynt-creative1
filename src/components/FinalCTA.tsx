import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle, Mail, Phone, ArrowUpRight, Star, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 px-4">
          <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter">Ready?</h2>
          <div className="w-px h-16 bg-black/10 hidden md:block" />
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-md">
            Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#0a0a0a] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] -z-0 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Slots available for projects</span>
                </div>
                
                <h3 className="text-4xl md:text-7xl font-heading font-black tracking-tighter leading-[0.9] mb-6">
                  Get a free quote <br />
                  <span className="text-white/40 font-extrabold">in under 2 minutes.</span>
                </h3>
                
                <p className="text-white/60 text-lg font-medium max-w-md mb-12">
                  Fill our budget calculator, configure your project — receive an individual offer within 24h.
                </p>
              </div>

              <Button 
                render={<Link to="/contact" />}
                nativeButton={false}
                className="bg-transparent border-none text-white hover:text-white/80 p-0 text-xl font-black flex items-center gap-2 group/btn"
              >
                Check Budget Calculator
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Contact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { icon: Phone, label: "Call directly", value: "9627277111", href: "tel:+919627277111", color: "bg-black/5 text-black" },
              { icon: Mail, label: "Send email", value: "Qyntcreatives@gmail.com", href: "mailto:Qyntcreatives@gmail.com", color: "bg-black/5 text-black" },
              { icon: MessageCircle, label: "WhatsApp", value: "Quick & uncomplicated", href: "https://wa.me/919627277111", color: "bg-black/5 text-black" }
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 bg-[#f9f9f9] hover:bg-[#efefef] border border-black/5 rounded-[32px] group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${contact.color}`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-lg font-black tracking-tight">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-black transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f9f9f9] border border-black/5 rounded-[32px] p-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-black/40" />
            <span className="text-sm font-bold tracking-tight">Response in 24h</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-black/40 fill-black/10" />
            <span className="text-sm font-bold tracking-tight">5.0 Google Rating</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-black/40" />
            <span className="text-sm font-bold tracking-tight">120+ Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
