import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  ["How do projects start?", "With a diagnostic sprint: ambition, audience, constraints, decision-makers, and the emotional job the experience must perform."],
  ["Do you only design or also build?", "Both. Strategy, identity, UX, motion, React engineering, design systems, and launch QA can happen inside one accountable team."],
  ["What makes a QYNT project different?", "Every engagement gets its own visual rhythm. We reuse principles, not page templates."],
  ["How long does it take?", "Focused launch systems often take 6–10 weeks. Larger product or brand ecosystems run in staged releases."],
  ["Can you work with internal teams?", "Yes. We often operate as a senior embedded strike team beside founders, product leads, and engineering groups."]
];

export function FAQPage() {
  const [open, setOpen] = useState(0);
  return <div className="bg-white text-black"><section className="px-6 pt-40 pb-20"><div className="mx-auto max-w-7xl"><p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-black/40">FAQ / intelligent UX flow</p><h1 className="font-heading text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-[132px]">Questions, answered like a story.</h1></div></section><section className="px-6 pb-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><div className="sticky top-32 rounded-[3rem] bg-black p-10 text-white"><p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Current chapter</p><AnimatePresence mode="wait"><motion.h2 key={open} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="mt-20 font-heading text-5xl font-black tracking-[-0.06em]">0{open+1}</motion.h2></AnimatePresence></div></div><div className="lg:col-span-7">{faqs.map(([q,a],i)=><div key={q} className="border-t border-black/10"><button onClick={()=>setOpen(open===i?-1:i)} className="flex w-full items-center justify-between py-8 text-left font-heading text-3xl font-black tracking-[-0.04em]"><span>{q}</span><span>{open===i?"−":"+"}</span></button><AnimatePresence>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden pb-8 text-xl text-black/60">{a}</motion.p>}</AnimatePresence></div>)}</div></div></section></div>
}
