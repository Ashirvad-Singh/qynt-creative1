import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";

const prompts = ["A new brand world", "A product interface", "A launch campaign", "Something confidential"];

export function ContactPage() {
  return (
    <div className="bg-black text-white">
      <section className="min-h-screen px-6 pt-40 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7"><p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-white/40">Contact / conversational intake</p><h1 className="font-heading text-7xl font-black leading-[0.82] tracking-[-0.08em] md:text-[132px]">Tell us what the future should feel like.</h1></div>
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} className="lg:col-span-5 lg:pt-20">
            <div className="rounded-[3rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="mb-8 flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#e12e7a]"><MessageCircle /></div><p className="font-bold">What are we building?</p></div>
              <div className="space-y-3">{prompts.map(p => <button key={p} className="w-full rounded-2xl border border-white/10 p-4 text-left font-bold text-white/75 transition hover:border-[#e12e7a] hover:bg-[#e12e7a]/15 hover:text-white">{p}</button>)}</div>
              <label className="mt-6 block"><span className="sr-only">Project note</span><textarea className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-[#e12e7a]" placeholder="Give us the context, tension, ambition, deadline..." /></label>
              <a href="mailto:Qyntcreatives@gmail.com" className="mt-5 flex items-center justify-between rounded-full bg-white px-6 py-4 font-black text-black transition hover:bg-[#e12e7a] hover:text-white">Send the signal <ArrowRight /></a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-6 pb-28"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3"><a href="mailto:Qyntcreatives@gmail.com" className="rounded-[2rem] bg-white p-8 text-black"><Mail className="mb-10" /><p className="font-black">Qyntcreatives@gmail.com</p></a><a href="tel:9627277111" className="rounded-[2rem] bg-white/10 p-8"><MessageCircle className="mb-10 text-[#e12e7a]" /><p className="font-black">9627277111</p></a><div className="rounded-[2rem] bg-[radial-gradient(circle_at_30%_30%,rgba(225,46,122,.45),transparent_35%),#151515] p-8"><MapPin className="mb-10" /><p className="font-black">Sector 105 D block, Noida, India</p></div></div></section>
    </div>
  );
}
