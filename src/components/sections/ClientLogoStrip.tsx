"use client";

import { motion } from "framer-motion";

const logosTopRow = [
  { name: "Multipl", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Cred", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Quizizz", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Uni", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Okaya", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Duroflex", src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
  { name: "Refyne", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Traya", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
];

const logosBottomRow = [
  { name: "Sleepyhead", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Ema", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Dezerv", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Green Soul", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Trupeer", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Durex", src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
  { name: "Moj", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Estee Lauder", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
];

export function ClientLogoStrip() {
  return (
    <section className="py-24 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-[#d8973c] font-space tracking-[0.2em] uppercase text-xs font-bold mb-2 block">
          TRUSTED BY BRANDS THAT
        </span>
        <h2 className="text-6xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">SHAPE </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">THE WORLD</span>
        </h2>
      </div>

      {/* Logo Slider / Marquee */}
      <div className="w-full relative">
        <div className="flex flex-col">
          
          {/* Top Row - Scrolling Left */}
          <div className="border-t border-b border-white/10 relative overflow-hidden flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex w-max"
            >
              {/* Duplicate the array to create seamless loop */}
              {[...logosTopRow, ...logosTopRow].map((logo, idx) => (
                <div key={`top-${idx}`} className="relative h-24 w-48 md:w-64 flex-shrink-0 flex items-center justify-center border-r border-white/10 group">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-8 max-w-[120px] object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Crosshairs */}
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 flex items-center justify-center text-white/30 text-[10px] leading-none pointer-events-none z-10">
                    +
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 flex items-center justify-center text-white/30 text-[10px] leading-none pointer-events-none z-10">
                    +
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="border-b border-white/10 relative overflow-hidden flex">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex w-max"
            >
              {[...logosBottomRow, ...logosBottomRow].map((logo, idx) => (
                <div key={`bottom-${idx}`} className="relative h-24 w-48 md:w-64 flex-shrink-0 flex items-center justify-center border-r border-white/10 group">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="max-h-8 max-w-[120px] object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 flex items-center justify-center text-white/30 text-[10px] leading-none pointer-events-none z-10">
                    +
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
        
        {/* Edges Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
}
