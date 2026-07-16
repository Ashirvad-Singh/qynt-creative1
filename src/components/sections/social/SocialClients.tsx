"use client";

import { motion } from "framer-motion";

const ROW_1 = ["INDmoney", "zepto", "Flint", "WOW SKIN SCIENCE", "AIR INDIA", "RIGI", "WATERFIELD", "ZERODHA"];
const ROW_2 = ["ESTEE LAUDER", "urban kisaan", "The Ordinary.", "atlan", "W", "slice", "ZERODHA", "MAC", "Disney+ hotstar"];

export function SocialClients() {
  return (
    <section className="py-24 bg-black w-full overflow-hidden flex flex-col items-center border-b border-white/5">
      
      {/* Title */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-white text-xs font-mono font-bold tracking-widest uppercase mb-4">
          TRUSTED BY
        </span>
        <h2 className="font-bebas font-bold leading-[0.9] flex flex-col items-center text-center">
          <span className="text-[#f5ebd7] text-5xl md:text-7xl lg:text-[100px] tracking-wide">
            THE TITANS OF
          </span>
          <span className="text-[#5922e6] text-6xl md:text-8xl lg:text-[120px] drop-shadow-[0_0_30px_rgba(89,34,230,0.4)]">
            INDUSTRY
          </span>
        </h2>
      </div>

      {/* Grid of Logos */}
      <div className="w-full max-w-[1400px] mx-auto px-4 overflow-x-auto hide-scrollbar">
        <div className="min-w-[1000px] flex flex-col border border-white/10 rounded-sm">
          
          {/* Row 1 */}
          <div className="flex border-b border-white/10 divide-x divide-white/10">
            {ROW_1.map((logo, idx) => (
              <div key={idx} className="flex-1 min-w-[120px] h-20 flex items-center justify-center p-4 relative group">
                {/* Crosshairs at intersections */}
                <div className="absolute -top-1 -right-1 w-2 h-2 text-white/30 text-[8px] leading-none pointer-events-none">+</div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 text-white/30 text-[8px] leading-none pointer-events-none">+</div>
                
                <span className="text-gray-500 font-bold tracking-wider text-sm md:text-base whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex divide-x divide-white/10">
            {ROW_2.map((logo, idx) => (
              <div key={idx} className="flex-1 min-w-[120px] h-20 flex items-center justify-center p-4 relative group">
                {/* Crosshairs at intersections */}
                <div className="absolute -bottom-1 -right-1 w-2 h-2 text-white/30 text-[8px] leading-none pointer-events-none">+</div>
                
                <span className="text-gray-500 font-serif italic text-sm md:text-base whitespace-nowrap group-hover:text-white transition-colors duration-300">
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
