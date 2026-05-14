import { motion, useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { label: "Projects Delivered", value: "250", suffix: "+" },
  { label: "Successful Exits", value: "12", suffix: "" },
  { label: "Growth Generated", value: "$4.5", suffix: "B+" },
  { label: "Global Reach", value: "45", suffix: " countries" },
];

function Counter({ value, suffix }: { value: string, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-heading font-black tracking-tighter">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {value}
        </motion.span>
      ) : (
        "0"
      )}
      <span className="text-accent-blue">{suffix}</span>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="py-16 md:py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
