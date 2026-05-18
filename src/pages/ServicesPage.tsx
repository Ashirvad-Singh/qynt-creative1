import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "./experienceData";

export function ServicesPage() {
  return (
    <div className="bg-[#0b0b0c] text-white">
      <section className="px-6 pt-40 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-white/40">Services / transformation systems</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl font-heading text-7xl font-black leading-[0.83] tracking-[-0.08em] md:text-[132px]">Four disciplines. Four visual worlds. One studio brain.</motion.h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-8">
          {services.map((service, i) => { const Icon = service.icon; return (
            <motion.article initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={service.id} className={`group relative overflow-hidden rounded-[3rem] border border-white/10 ${i % 2 ? "lg:ml-24" : "lg:mr-24"}`}>
              <div className="absolute inset-0 opacity-25" style={{ background: `radial-gradient(circle at ${i % 2 ? "80% 20%" : "20% 20%"}, ${service.accent}, transparent 32%)` }} />
              <div className={`relative grid gap-8 p-8 md:p-12 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="mb-16 grid h-20 w-20 place-items-center rounded-3xl" style={{ backgroundColor: service.accent }}><Icon className="h-9 w-9" /></div>
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{service.eyebrow}</p>
                  <h2 className="font-heading text-6xl font-black tracking-[-0.07em]">{service.title}</h2>
                </div>
                <div className="lg:col-span-7 lg:pt-20">
                  <p className="text-3xl font-semibold leading-tight text-white/86">{service.promise}</p>
                  <p className="mt-8 max-w-2xl text-lg text-white/55">{service.narrative}</p>
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {service.process.map(step => <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold transition group-hover:bg-white/[0.08]">{step}</div>)}
                  </div>
                  <Link to={`/services/${service.id}`} className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:scale-105">Explore method <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </motion.article>
          )})}
        </div>
      </section>
    </div>
  );
}
