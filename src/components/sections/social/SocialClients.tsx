"use client";

import { motion } from "framer-motion";

const ROW_1 = ["INDmoney", "Zepto", "Flint", "WOW Skin Science", "Air India", "Rigi", "Waterfield", "Zerodha"];
const ROW_2 = ["Estée Lauder", "Urban Kisaan", "The Ordinary", "Atlan", "W", "Slice", "Zerodha", "MAC", "Disney+ Hotstar"];

export function SocialClients() {
  return (
    <section className="py-20 bg-black w-full overflow-hidden flex flex-col items-center border-b border-white/5">
      
      {/* Title */}
      <div className="text-center mb-12 flex flex-col items-center px-4">
        <span className="text-[#8a5cf5] text-xs font-space font-bold tracking-[0.2em] uppercase mb-3">
          TRUSTED PARTNERS
        </span>
        <h2 className="font-bebas font-bold leading-tight tracking-wide text-center">
          <span className="text-white text-3xl md:text-5xl block">
            THE TITANS OF INDUSTRY
          </span>
        </h2>
      </div>

      {/* Grid of Logos */}
      <div className="w-full max-w-[1400px] mx-auto px-4 overflow-x-auto hide-scrollbar">
        <div className="min-w-[900px] flex flex-col border border-white/10 rounded-xl overflow-hidden glass-card">
          
          {/* Row 1 */}
          <div className="flex border-b border-white/10 divide-x divide-white/10">
            {ROW_1.map((logo, idx) => (
              <div key={idx} className="flex-1 min-w-[110px] h-16 flex items-center justify-center p-3 relative group">
                <span className="text-gray-400 font-space text-xs md:text-sm font-medium uppercase tracking-wider whitespace-nowrap group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex divide-x divide-white/10">
            {ROW_2.map((logo, idx) => (
              <div key={idx} className="flex-1 min-w-[110px] h-16 flex items-center justify-center p-3 relative group">
                <span className="text-gray-400 font-space text-xs md:text-sm font-medium uppercase tracking-wider whitespace-nowrap group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  {logo}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

