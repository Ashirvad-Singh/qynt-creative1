import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCTA() {
  return (
    <section className="relative w-full py-28 md:py-36 bg-[#030303] overflow-hidden select-none">
      
      {/* Blue dotted engineering grid background */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(#00C2FF 1px, transparent 1.2px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Futuristic Blue/Cyan Ambient Spotlight Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00B5FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[200px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10 flex flex-col items-center justify-center text-center">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs sm:text-sm font-medium text-neutral-400 tracking-wide">
            New components and templates every month.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7.5xl font-heading font-black tracking-tight leading-none text-white max-w-4xl mb-8"
        >
          Build your next project in <br className="hidden sm:inline" />
          minutes, not hours.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12 font-medium"
        >
          We are a team of developers who are passionate about creating <br className="hidden md:inline" />
          web apps that make you feel like you're in the future.
        </motion.p>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          {/* Get Started Button (Purple Gradient Pill) */}
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-8 py-5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95">
              Get started 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>

          {/* Alternative action (Dark Glassmorphic Pill) */}
          <a href="tel:9627277111" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-5 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 active:scale-95">
              <Phone className="w-4 h-4 text-white/60" />
              Call directly
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
