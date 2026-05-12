import { motion } from "motion/react";
import { BarChart3, LineChart, PieChart, Zap } from "lucide-react";

export function DashboardUI() {
  return (
    <section className="py-40 bg-secondary-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4"
            >
              Enterprise Edge
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter mb-8"
            >
              Real metrics, <br />
              <span className="text-muted-foreground text-gradient">unreal results.</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We provide integrated analytics and custom dashboard solutions that make data your unfair advantage.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Real-time Visualization", icon: <Zap className="w-5 h-5" /> },
                { title: "Predictive Analytics", icon: <LineChart className="w-5 h-5" /> },
                { title: "Custom Metric Tracking", icon: <BarChart3 className="w-5 h-5" /> }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-black/5 relative z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase">Performance Monitor v2.1</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Uptime", value: "99.9%", color: "text-accent-green" },
                  { label: "Active Nodes", value: "42", color: "text-accent-blue" },
                  { label: "Throughput", value: "8.4k", color: "text-primary" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-secondary-bg p-4 rounded-2xl">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">{stat.label}</p>
                    <p className={`text-xl font-heading font-black ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="h-40 bg-secondary-bg rounded-2xl p-6 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 50, 100, 75, 60, 85, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-accent-blue rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating widget decorate */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl z-20"
            >
              <PieChart className="w-8 h-8 text-accent-blue" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
