import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className} flex-shrink-0`}>
      <div className="flex items-start gap-1">
        <div className="relative flex items-center">
          {/* Pink Rays (inspired by the screenshot provided by user) */}
          <div className="absolute -top-3 left-0 w-full flex justify-center pointer-events-none pr-8">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="absolute w-[1.2px] h-3.5 bg-[#e12e7a] rounded-full origin-bottom"
                style={{ 
                  left: `${20 + i * 10}%`,
                  transform: `rotate(${i * 15 - 45}deg)`,
                  opacity: 0.9,
                  filter: "blur(0.2px)"
                }}
              />
            ))}
          </div>
          
          <span className="text-[34px] sm:text-[44px] font-heading font-black tracking-tighter text-black relative z-10 leading-[0.85] mt-2 italic">
            Qynt
          </span>
        </div>

        {/* Secondary Text */}
        <div className="flex flex-col justify-start mt-3">
          <span className="text-[14px] sm:text-[18px] font-black tracking-tighter leading-none text-black whitespace-nowrap">
            Creatives & Co.
          </span>
          <div className="h-[1px] w-full bg-black/10 mt-1 sm:mt-1.5" />
          <span className="text-[5.5px] sm:text-[7px] font-bold tracking-[0.25em] uppercase text-black/40 mt-1 whitespace-nowrap">
            IMMERSE • INSPIRE • CREATE
          </span>
        </div>
      </div>
    </div>
  );
}
