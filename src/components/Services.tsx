import { motion } from "motion/react";
import { Code2, Cpu, Globe, Layout, Megaphone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "unified-branding",
    title: "Unified Branding",
    description: "Defining your unique market position and visual voice.",
    icon: <Globe className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-2 bg-blue-50/50",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Obsessive attention to UI/UX and user interaction.",
    icon: <Layout className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-green-50/50",
  },
  {
    id: "development",
    title: "Development",
    description: "High-performance code for web and mobile.",
    icon: <Code2 className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2 bg-purple-50/50",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Leveraging cutting-edge LLMs for your business.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-orange-50/50",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Native-feel experiences for iOS and Android.",
    icon: <Smartphone className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-pink-50/50",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Strategic scaling for sustainable growth.",
    icon: <Megaphone className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1 bg-yellow-50/50",
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-black font-bold uppercase tracking-widest text-[10px] mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold tracking-tighter"
          >
            We don't do templates. <br />
            <span className="text-muted-foreground text-gradient">We build systems.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {services.map((service, i) => (
            <Link key={service.title} to={`/services/${service.id}`} className={service.className}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative h-full rounded-[32px] p-8 overflow-hidden border border-black/5 hover:border-black/10 transition-all duration-500 bg-white`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {service.description}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl -mr-32 -mt-32 group-hover:bg-white/60 transition-colors duration-500" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
