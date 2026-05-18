import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { projects, services } from "./experienceData";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } as const;

export function Home() {
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const orbitalY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-[#f6f3ee] text-[#111] overflow-hidden">
      <section ref={hero} className="relative min-h-screen pt-36 pb-16 flex items-center overflow-hidden">
        <motion.div style={{ y: orbitalY }} className="absolute right-[-12vw] top-16 h-[70vw] max-h-[760px] w-[70vw] max-w-[760px] rounded-full border border-black/10 bg-[radial-gradient(circle_at_35%_35%,rgba(225,46,122,.28),transparent_32%),radial-gradient(circle_at_70%_60%,rgba(79,70,229,.25),transparent_35%)] blur-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f3ee] to-transparent" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-12 px-6 lg:grid-cols-12">
          <motion.div style={{ y: titleY, opacity: fade }} className="lg:col-span-8">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.35em]"><span className="h-px w-14 bg-black" /> QYNT Creative Studio</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="font-heading text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.09em] sm:text-[15vw] lg:text-[152px]">
              Make the future feel inevitable.
            </motion.h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="lg:col-span-4 lg:pb-8">
            <p className="mb-8 max-w-md text-xl font-medium leading-relaxed text-black/65">A strategy, design, and engineering studio crafting cinematic digital ecosystems for brands that refuse to blend in.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-[#e12e7a]">Start a project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link to="/portfolio" className="rounded-full border border-black/15 px-7 py-4 text-sm font-black transition hover:border-black hover:bg-white">Watch the work</Link>
            </div>
          </motion.div>
        </div>
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute bottom-8 left-0 flex whitespace-nowrap text-[12vw] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.035]">Strategy / Identity / Product / Motion / Engineering / Strategy / Identity / Product / Motion / Engineering /</motion.div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div {...reveal} className="rounded-[2.5rem] bg-black p-8 text-white lg:col-span-5 lg:min-h-[520px] lg:p-12">
            <Sparkles className="mb-16 h-9 w-9 text-[#e12e7a]" />
            <h2 className="font-heading text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">We do not decorate companies. We choreograph belief.</h2>
          </motion.div>
          <div className="grid gap-6 lg:col-span-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} key={service.id} className="group grid min-h-[150px] grid-cols-[auto_1fr] items-center gap-6 rounded-[2rem] border border-black/10 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-black/10">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl text-white" style={{ backgroundColor: service.accent }}><Icon className="h-7 w-7" /></div>
                  <div>
                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-black/40">{service.eyebrow}</p>
                    <h3 className="font-heading text-3xl font-black tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-3 max-w-2xl text-black/60">{service.promise}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-heading text-6xl font-black tracking-[-0.06em] md:text-8xl">Featured<br />signals.</h2>
            <p className="max-w-sm text-lg text-black/60">Each project has its own rhythm: a distinct visual grammar, motion behavior, and business thesis.</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-6">
            {projects.slice(0, 3).map((project, i) => (
              <Link to={`/portfolio/${project.id}`} key={project.id} className={`${i === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"} group relative min-h-[360px] overflow-hidden rounded-[2.5rem] bg-black text-white`}>
                <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-45" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/60">{project.category}</p>
                  <h3 className="font-heading text-5xl font-black tracking-[-0.06em]">{project.title}</h3>
                  <p className="mt-4 max-w-lg text-white/70 opacity-0 transition group-hover:opacity-100">{project.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <motion.div {...reveal} className="lg:col-span-5"><h2 className="font-heading text-6xl font-black tracking-[-0.06em]">Numbers with a pulse.</h2></motion.div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {[["91%", "clients return for a second system"], ["14", "disciplines inside one studio rhythm"], ["0", "template layouts shipped"]].map(([n, l]) => (
              <motion.div {...reveal} key={n} className="rounded-[2rem] border border-black/10 bg-white/60 p-8"><div className="font-heading text-6xl font-black tracking-[-0.08em]">{n}</div><p className="mt-4 text-sm font-bold uppercase tracking-widest text-black/45">{l}</p></motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
