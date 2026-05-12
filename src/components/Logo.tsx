import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className} flex-shrink-0`}>
      <div className="relative group flex items-center">
        {/* The Qynt Text with Pink Rays */}
        <div className="relative flex items-center">
          {/* Pink Rays (from screenshot) */}
          <div className="absolute -top-4 -left-3 flex pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-[1.5px] h-5 bg-[#e91e63] rounded-full origin-bottom"
                style={{ 
                  transform: `rotate(${i * 18 - 36}deg) translateY(-2px)`,
                  opacity: 0.9
                }}
              />
            ))}
          </div>
          
          <span className="text-4xl font-heading font-extrabold tracking-tighter text-black relative z-10 leading-none">
            Qynt
          </span>
        </div>

        {/* Secondary Text */}
        <div className="ml-2 flex flex-col justify-center translate-y-[2px]">
          <span className="text-[17px] font-black tracking-tighter leading-none text-black whitespace-nowrap">
            Creatives & Co.
          </span>
          <span className="text-[7px] font-bold tracking-[0.3em] uppercase text-black/40 mt-1 whitespace-nowrap">
            Immerse • Inspire • Create
          </span>
        </div>
      </div>
    </div>
  );
}
