import { motion } from "motion/react";
import { Camera, Quote } from "lucide-react";
import { values } from "./experienceData";

const chapters = ["Observe", "Distill", "Prototype", "Launch", "Evolve"];
const team = ["Mira / Creative Direction", "Dev / Product Architecture", "Ari / Motion Systems", "Noor / Brand Strategy"];

export function About() {
  return (
    <div className="bg-white text-black">
      <section className="relative min-h-screen overflow-hidden bg-black px-6 pt-40 text-white">
        <div className="absolute inset-0 opacity-40 [background:linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7">
            <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-white/45">Documentary / 001</p>
            <h1 className="font-heading text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-[132px]">A studio built like a film crew.</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="lg:col-span-5 lg:pt-32">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-white/10 p-3">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" alt="QYNT team in a strategy workshop" className="h-full w-full rounded-t-full rounded-b-[1.5rem] object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="sticky top-32 text-[11px] font-black uppercase tracking-[0.35em] text-black/40">Timeline interactions</p></div>
          <div className="lg:col-span-8">
            {chapters.map((chapter, i) => (
              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} key={chapter} className="group grid gap-6 border-t border-black/10 py-12 md:grid-cols-[120px_1fr]">
                <span className="font-mono text-sm text-black/35">0{i + 1}</span>
                <div>
                  <h2 className="font-heading text-5xl font-black tracking-[-0.06em] transition group-hover:translate-x-3">{chapter}</h2>
                  <p className="mt-4 max-w-2xl text-lg text-black/60">Every engagement moves from listening to launch with enough structure to protect quality and enough improvisation to discover the unexpected.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ee] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid overflow-hidden rounded-[3rem] bg-black text-white lg:grid-cols-2">
            <div className="p-10 md:p-16"><Quote className="mb-10 h-10 w-10 text-[#e12e7a]" /><h2 className="font-heading text-5xl font-black tracking-[-0.06em]">Founder philosophy</h2><p className="mt-8 text-2xl leading-relaxed text-white/72">“The work should feel inevitable in hindsight and impossible before we began.”</p><p className="mt-10 text-sm font-black uppercase tracking-[0.25em] text-white/35">QYNT Principal Studio</p></div>
            <div className="min-h-[420px] bg-[radial-gradient(circle_at_25%_25%,rgba(225,46,122,.5),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(79,70,229,.55),transparent_32%),#111] p-10"><div className="grid h-full place-items-center rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur"><Camera className="h-16 w-16 text-white/70" /></div></div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 max-w-3xl font-heading text-6xl font-black tracking-[-0.06em]">Mission, rendered as operating values.</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {values.map((value, i) => { const Icon = value.icon; return <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true }} key={value.title} className="rounded-[2rem] border border-black/10 p-7 hover:bg-black hover:text-white transition"><Icon className="mb-12 h-7 w-7 text-[#e12e7a]" /><h3 className="font-heading text-2xl font-black tracking-[-0.04em]">{value.title}</h3><p className="mt-4 text-sm opacity-65">{value.copy}</p></motion.div> })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-black/40">Team with personality</p>
          <div className="grid gap-4 md:grid-cols-4">
            {team.map((person, i) => <motion.div whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }} key={person} className="min-h-[320px] rounded-[2rem] bg-[#f6f3ee] p-6 flex flex-col justify-between"><div className="h-24 w-24 rounded-full bg-black" /><p className="font-heading text-3xl font-black tracking-[-0.05em]">{person}</p></motion.div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
