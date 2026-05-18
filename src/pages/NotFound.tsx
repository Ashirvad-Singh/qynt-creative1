import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function NotFound() {
  return <div className="grid min-h-screen place-items-center overflow-hidden bg-black px-6 pt-28 text-white"><motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute h-[60vw] w-[60vw] rounded-full border border-dashed border-white/10" /><div className="relative max-w-4xl text-center"><p className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-[#e12e7a]">404 / lost in the brand multiverse</p><h1 className="font-heading text-[28vw] font-black leading-[0.75] tracking-[-0.12em] md:text-[220px]">404</h1><p className="mx-auto mt-8 max-w-xl text-xl text-white/65">This page wandered off to become a moodboard. Let’s get you back to something intentional.</p><div className="mt-10 flex justify-center gap-3"><Link to="/" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-black">Go home <ArrowRight /></Link><Link to="/portfolio" className="rounded-full border border-white/15 px-7 py-4 font-black text-white">See work</Link></div></div></div>
}
