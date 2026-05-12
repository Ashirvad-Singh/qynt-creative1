import { motion } from "motion/react";
import { Services } from "../components/Services";
import { FinalCTA } from "../components/FinalCTA";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { PremiumBackground } from "../components/PremiumBackground";
import { Magnetic } from "../components/Magnetic";
import { Button } from "../components/ui/button";

const pricingPlans = [
  {
    name: "Design Sprint",
    price: "$4,500",
    desc: "Perfect for rapid validation and MVP phase design.",
    features: ["UX Audit", "High-fidelity UI", "Interactive Prototype", "5 Business Days"]
  },
  {
    name: "Standard Package",
    price: "$9,000",
    desc: "Full brand and product design for startups.",
    features: ["Branding Identity", "Full Website Design", "Marketing Assets", "20 Business Days"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Dedicated team for complex ongoing projects.",
    features: ["Priority Support", "Dedicated Manager", "Ongoing Iterations", "Unlimited Scalability"]
  }
];

export function ServicesPage() {
  return (
    <div className="relative">
      <section className="relative min-h-[80vh] pt-48 pb-20 flex flex-col items-center">
        <PremiumBackground />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center justify-center gap-3"
          >
            <div className="w-8 h-px bg-black" />
            Our Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[140px] font-heading font-black tracking-tighter leading-[0.8] mb-12"
          >
            We Build <br />
            <span className="text-black/30">Masterpieces.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Strategic design and elite engineering for brands that refuse to be ignored.
          </motion.p>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Services />

        <section className="py-60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-32">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-black font-black uppercase tracking-[0.2em] text-[10px] mb-6"
              >
                Clear Value
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 leading-none">Strategic Pricing.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-12 rounded-[60px] border flex flex-col h-full relative transition-all group ${plan.popular ? 'border-black bg-black text-white shadow-2xl scale-105 z-10' : 'border-black/5 bg-[#f9f9f9] hover:border-black/10'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-green text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-12">
                    <h3 className="text-2xl font-black uppercase tracking-widest mb-4 opacity-60">{plan.name}</h3>
                    <div className="text-6xl font-heading font-black tracking-tighter mb-4">{plan.price}</div>
                    <p className={`text-lg font-medium ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>{plan.desc}</p>
                  </div>
                  
                  <div className="space-y-6 mb-16 flex-grow">
                    {plan.features.map(feature => (
                      <div key={feature} className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-white/10' : 'bg-black/10'}`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-black uppercase tracking-widest text-[10px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Magnetic>
                    <Button 
                      className={`w-full h-20 rounded-[32px] font-black uppercase tracking-widest text-xs relative overflow-hidden ${plan.popular ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
}
