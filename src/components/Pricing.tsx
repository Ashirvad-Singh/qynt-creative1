import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Standard",
    price: "$4,900",
    description: "Perfect for startups needing a high-end web presence.",
    features: ["Custom Web Design", "React/Next.js Dev", "Mobile Optimization", "SEO Foundations"],
    tagline: "High impact, minimal weight."
  },
  {
    name: "Premium",
    price: "$9,500",
    description: "The gold standard for high-growth tech companies.",
    features: ["Advanced Animations", "SaaS Dashboard UI", "Strategic Branding", "CMS Integration", "Custom Illustrations"],
    featured: true,
    tagline: "The Awwwards-worthy choice."
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Bespoke digital engineering for global powerhouses.",
    features: ["Full Product Ecosystem", "Data Visualization", "Enterprise Security", "Ongoing Support"],
    tagline: "Unlimited scale and polish."
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/[0.02] blur-[120px] -z-10 rounded-full" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-4"
          >
            Clear Value
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9]"
          >
            Premium work. <br />
            <span className="text-muted-foreground">Transparent pricing.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[40px] p-10 border transition-all duration-500 hover:scale-[1.02] ${
                plan.featured 
                  ? "bg-foreground text-background border-foreground shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]" 
                  : "bg-white/80 backdrop-blur-xl border-black/5 hover:border-black/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-6xl font-heading font-black tracking-tighter">{plan.price}</h3>
                  {plan.price !== "Custom" && <span className="opacity-40 text-sm font-bold">/proj</span>}
                </div>
                <p className={`mt-6 text-sm leading-relaxed font-medium ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? "bg-white/10" : "bg-black/10 text-black"}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button 
                  render={<Link to="/contact" />}
                  nativeButton={false}
                  variant={plan.featured ? "secondary" : "default"} 
                  className={`w-full rounded-2xl h-16 text-lg font-bold transition-transform active:scale-95 ${plan.featured ? "bg-white text-primary hover:bg-white/90" : "bg-black"}`}
                >
                  Select Plan
                </Button>
                <p className="mt-6 text-center text-[10px] uppercase tracking-widest opacity-40 font-bold">
                  {plan.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
