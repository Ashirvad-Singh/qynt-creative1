import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className} flex-shrink-0`}>
      <img 
        src="/logo.png" 
        alt="Qynt Creatives & Co." 
        className="h-12 sm:h-16 md:h-20 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
