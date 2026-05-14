import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className} flex-shrink-0`}>
      <div className="flex items-start gap-1">
        <div className="relative flex items-center">
          {/* Pink Rays (from screenshot) */}
          <div className="absolute -top-3 left-0 w-full flex justify-center pointer-events-none pr-8">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="absolute w-[1.5px] h-4 bg-[#e12e7a] rounded-full origin-bottom"
                style={{ 
                  left: `${10 + i * 12}%`,
                  transform: `rotate(${i * 15 - 45}deg)`,
                  opacity: 0.8
                }}
              />
            ))}
          </div>
          
          <span className="text-[44px] font-heading font-black tracking-tighter text-black relative z-10 leading-[0.85] mt-2">
            Qynt
          </span>
        </div>

        {/* Secondary Text */}
        <div className="flex flex-col justify-start mt-2">
          <span className="text-[18px] font-black tracking-tighter leading-none text-black whitespace-nowrap">
            Creatives & Co.
          </span>
          <span className="text-[7.5px] font-bold tracking-[0.2em] uppercase text-black/50 mt-1.5 whitespace-nowrap">
            IMMERSE • INSPIRE • CREATE
          </span>
        </div>
      </div>
    </div>
  );
}
