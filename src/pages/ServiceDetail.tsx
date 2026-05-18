import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "./experienceData";

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id) ?? services[0];
  const Icon = service.icon;
  return (
    <div className="bg-white text-black">
      <section className="relative min-h-screen overflow-hidden px-6 pt-36 pb-16" style={{ background: `linear-gradient(135deg, ${service.accent}22, #fff 42%, #f6f3ee)` }}>
        <div className="mx-auto max-w-7xl">
          <Link to="/services" className="mb-16 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black/55"><ArrowLeft className="h-4 w-4" /> Services</Link>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <motion.div initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-8"><p className="mb-6 text-[11px] font-black uppercase tracking-[0.35em]" style={{ color: service.accent }}>{service.eyebrow}</p><h1 className="font-heading text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-[132px]">{service.title}</h1></motion.div>
            <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-4"><div className="grid aspect-square place-items-center rounded-[3rem] text-white shadow-2xl" style={{ backgroundColor: service.accent }}><Icon className="h-28 w-28" /></div></motion.div>
          </div>
        </div>
      </section>
      <section className="px-6 py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12"><h2 className="lg:col-span-5 font-heading text-5xl font-black tracking-[-0.06em]">Transformation story</h2><div className="lg:col-span-7"><p className="text-3xl font-semibold leading-tight">{service.promise}</p><p className="mt-8 text-xl leading-relaxed text-black/60">{service.narrative}</p><div className="mt-12 space-y-4">{service.process.map((step, i)=><motion.div initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} key={step} className="flex items-center gap-6 border-t border-black/10 py-6"><span className="font-mono text-black/35">0{i+1}</span><span className="font-heading text-3xl font-black tracking-[-0.04em]">{step}</span></motion.div>)}</div><p className="mt-12 rounded-[2rem] bg-black p-8 text-2xl font-black text-white">{service.proof}</p><Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-black text-white" style={{ backgroundColor: service.accent }}>Build this with us <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </div>
  );
}
