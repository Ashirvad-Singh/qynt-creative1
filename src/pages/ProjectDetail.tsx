import { motion, useScroll, useTransform } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { projects } from "./experienceData";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) ?? projects[0];
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const next = projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length];
  return (
    <div className="bg-white text-black">
      <section ref={hero} className="relative min-h-screen overflow-hidden px-6 pt-32 text-white">
        <motion.img style={{ scale }} src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 mix-blend-screen opacity-40" style={{ background: `radial-gradient(circle at 70% 35%, ${project.theme}, transparent 28%)` }} />
        <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between py-12">
          <Link to="/portfolio" className="inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-widest text-white/70"><ArrowLeft className="h-4 w-4" /> Index</Link>
          <motion.div style={{ y }}><p className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-white/50">{project.category} / {project.year}</p><h1 className="font-heading text-[22vw] font-black leading-[0.72] tracking-[-0.1em] md:text-[170px]">{project.title}</h1></motion.div>
          <div className="grid border-t border-white/15 pt-8 text-white/75 md:grid-cols-3"><p>{project.client}</p><p>{project.role}</p><p>{project.intro}</p></div>
        </div>
      </section>
      <section className="px-6 py-28"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12"><div className="lg:col-span-5"><div className="sticky top-32 aspect-[4/5] rounded-[3rem]" style={{ background: `linear-gradient(145deg, ${project.theme}, #111)` }} /></div><div className="space-y-20 lg:col-span-7">{[["Challenge", project.challenge], ["Process", project.process], ["Solution", project.solution]].map(([label, copy]) => <motion.article initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} key={label} className="border-t border-black/10 pt-10"><p className="mb-5 text-[11px] font-black uppercase tracking-[0.35em]" style={{ color: project.theme }}>{label}</p><p className="text-3xl font-semibold leading-tight text-black/82">{copy}</p></motion.article>)}<div className="grid gap-4 sm:grid-cols-3">{project.impact.map(item => <div key={item} className="rounded-[2rem] bg-[#f6f3ee] p-6 font-heading text-3xl font-black tracking-[-0.05em]">{item}</div>)}</div></div></div></section>
      <section className="px-6 pb-28"><Link to={`/portfolio/${next.id}`} className="group mx-auto flex max-w-7xl items-center justify-between rounded-[3rem] bg-black p-8 text-white md:p-12"><div><p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Next case</p><h2 className="font-heading text-5xl font-black tracking-[-0.06em]">{next.title}</h2></div><ArrowRight className="h-10 w-10 transition group-hover:translate-x-2" /></Link></section>
    </div>
  );
}
