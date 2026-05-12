import { motion } from "motion/react";

export function Skeleton({ className = "" }: { className?: string, key?: any }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-foreground/5 rounded-xl ${className}`}
    />
  );
}
