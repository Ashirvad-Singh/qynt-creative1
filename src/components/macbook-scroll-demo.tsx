import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] py-4 md:py-8">
      <MacbookScroll
        title={
          <span className="text-4xl md:text-6xl font-heading font-black tracking-tighter">
            Your vision, <br /> 
            <span className="text-accent-green">delivered on screen.</span>
          </span>
        }
        badge={
          <div className="h-10 w-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center shadow-2xl -rotate-12 border border-white/10">
            <span className="text-white font-black text-[10px]">HQ</span>
          </div>
        }
        showGradient={true}
      >
        {/* Banner Content inside Macbook */}
        <div className="h-full w-full bg-[#f9f9f9] dark:bg-black p-4 md:p-8 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-1 bg-accent-green rounded-full mb-4 md:mb-6" />
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 leading-tight opacity-90">
            Digital Excellence <br /> Simplified.
          </h1>
          <p className="text-[10px] md:text-xs text-muted-foreground max-w-[200px] mb-6 md:mb-8 font-medium">
            We build high-performance websites and applications that grow your business.
          </p>
          <div className="flex gap-4">
            <div className="px-4 md:px-6 py-2 bg-black text-white rounded-full text-[10px] font-bold cursor-pointer">
              View Work
            </div>
          </div>
          
          {/* Decorative Floating elements for "banner" feel */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 w-20 h-14 md:w-24 md:h-16 bg-white shadow-xl rounded-2xl border border-black/5 p-3 md:p-4 flex flex-col items-start gap-1">
             <div className="w-6 h-1 bg-black/10 rounded-full" />
             <div className="w-10 h-1 bg-black/5 rounded-full" />
             <div className="mt-1 md:mt-2 text-[6px] md:text-[8px] font-black">+45% ROI</div>
          </div>
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-20 h-14 md:w-24 md:h-16 bg-white shadow-xl rounded-2xl border border-black/5 p-3 md:p-4 flex flex-col items-start gap-1 text-right">
             <div className="w-6 h-1 bg-[#00D26A]/20 rounded-full self-end" />
             <div className="w-10 h-1 bg-black/5 rounded-full self-end" />
             <div className="mt-1 md:mt-2 text-[6px] md:text-[8px] font-black text-accent-green">Online</div>
          </div>
        </div>
      </MacbookScroll>
    </div>
  );
}
