"use client";

export function SocialClients() {
  const logos = [
    "CHAYA", "Tromso", "Relyon", "Traya.", "AVADA", "mocco", "maxillo",
    "PhosPe", "emergent", "Alous", "shopay", "Olio", "sleephead", "Emu", "DFIX"
  ];

  return (
    <section className="py-24 bg-black relative border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h4 className="text-gray-500 font-mono text-[10px] tracking-widest uppercase mb-4">TRUSTED BY</h4>
        <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-white mb-16">
          THE TITANS OF <br/>
          <span className="text-purple-600">INDUSTRY</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-xl font-bold font-space tracking-wider">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
