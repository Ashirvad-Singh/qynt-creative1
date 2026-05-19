import { motion, AnimatePresence } from "motion/react";
import { useParams, Link } from "react-router-dom";
import {
  Code2,
  TrendingUp,
  Zap,
  CheckCircle2,
  Smartphone,
  Palette,
  Database,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Building2,
  Bot,
  ArrowLeft,
  ArrowRight,
  Layout,
  Globe,
  Megaphone,
  Cpu,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { useState } from "react";

// Enhanced service data with color themes
const services = [
  {
    id: "unified-branding",
    title: "Unified Branding",
    subtitle: "Brand Strategy & Visual Identity",
    icon: <Globe className="w-8 h-8" />,
    desc: "We build comprehensive visual languages that speak your brand's truth.",
    fullDesc: "Our branding process starts with intense market research and deep discovery sessions. We translate your company's core values into a visual system that works across every touchpoint—from mobile apps to office walls.",
    
    // Color theming
    colorTheme: {
      primary: "#4F46E5", // Indigo
      light: "#EEF2FF",
      accent: "#818CF8",
      dark: "#312E81"
    },
    
    // Transformation story
    transformation: {
      before: "Fragmented brand presence across channels",
      after: "Cohesive system that scales globally"
    },
    
    process: [
      { 
        step: "01", 
        title: "Discovery", 
        desc: "Immersion in your brand world and competitor landscape.",
        icon: <Lightbulb className="w-5 h-5" />
      },
      { 
        step: "02", 
        title: "Strategy", 
        desc: "Defining the core narrative and positioning.",
        icon: <TrendingUp className="w-5 h-5" />
      },
      { 
        step: "03", 
        title: "Visual ID", 
        desc: "Crafting the logo, typography, and color systems.",
        icon: <Layout className="w-5 h-5" />
      },
      { 
        step: "04", 
        title: "Execution", 
        desc: "Deploying the brand across digital and physical assets.",
        icon: <CheckCircle2 className="w-5 h-5" />
      }
    ],
    
    features: ["Digital Brand Guidelines", "Logo Ecosystem", "Custom Typography", "Motion Branding"],
    stats: [
      { label: "Design Iterations", value: "Unlimited" },
      { label: "Delivery Time", value: "4-6 Weeks" },
      { label: "Format Support", value: "All High-res" }
    ],
    tools: ["Figma", "Adobe CC", "After Effects", "Cinema 4D", "Spline"],
    
    subServices: [
      { 
        title: "Brand Audit", 
        desc: "Evaluating your current brand equity and identifying gaps.",
        icon: <CheckCircle2 className="w-5 h-5" />
      },
      { 
        title: "Visual Language", 
        desc: "Developing a consistent aesthetic for all communication.",
        icon: <Layout className="w-5 h-5" />
      },
      { 
        title: "Brand Voice", 
        desc: "Crafting the tone and messaging strategy for your audience.",
        icon: <Users className="w-5 h-5" />
      }
    ],

    transformationMetrics: [
      { label: "Brand Recognition", before: "Low", after: "85%+", icon: "📈" },
      { label: "Visual Consistency", before: "30%", after: "98%", icon: "✨" },
      { label: "Time to Deploy", before: "3 weeks", after: "3 days", icon: "⚡" }
    ]
  },
  {
    id: "product-design",
    title: "Product Design",
    subtitle: "UI/UX & Digital Experiences",
    icon: <Layout className="w-8 h-8" />,
    desc: "Obsessive attention to UI/UX and user interaction.",
    fullDesc: "We craft digital products that are beautiful, intuitive, and conversion-focused. Every pixel is placed with purpose.",
    
    colorTheme: {
      primary: "#06B6D4", // Cyan
      light: "#ECFDF5",
      accent: "#22D3EE",
      dark: "#164E63"
    },
    
    transformation: {
      before: "Cluttered interfaces with high bounce rates",
      after: "Elegant, conversion-focused user experiences"
    },
    
    process: [
      { 
        step: "01", 
        title: "User Research", 
        desc: "Understanding pain points and user behavior.",
        icon: <Users className="w-5 h-5" />
      },
      { 
        step: "02", 
        title: "Wireframing", 
        desc: "Creating information architecture and flows.",
        icon: <Layout className="w-5 h-5" />
      },
      { 
        step: "03", 
        title: "Visual Design", 
        desc: "Crafting beautiful, on-brand interfaces.",
        icon: <Lightbulb className="w-5 h-5" />
      },
      { 
        step: "04", 
        title: "Prototyping", 
        desc: "Interactive prototypes for testing and validation.",
        icon: <CheckCircle2 className="w-5 h-5" />
      }
    ],
    
    features: ["Figma Design Systems", "Interactive Prototypes", "Design Tokens", "Component Libraries"],
    stats: [
      { label: "Design System", value: "Built" },
      { label: "Responsive", value: "Mobile-First" },
      { label: "Accessibility", value: "WCAG AA" }
    ],
    tools: ["Figma", "Framer", "Webflow", "Spline", "Illustrator"],
    
    subServices: [
      { 
        title: "UX Audit", 
        desc: "Deep analysis of existing products and competitors.",
        icon: <CheckCircle2 className="w-5 h-5" />
      },
      { 
        title: "Design Systems", 
        desc: "Scalable component libraries for consistency.",
        icon: <Layout className="w-5 h-5" />
      },
      { 
        title: "Interaction Design", 
        desc: "Delightful micro-interactions and motion design.",
        icon: <Zap className="w-5 h-5" />
      }
    ],

    transformationMetrics: [
      { label: "User Satisfaction", before: "4.2/5", after: "4.8/5", icon: "⭐" },
      { label: "Task Completion", before: "68%", after: "92%", icon: "✅" },
      { label: "Time on Task", before: "5 mins", after: "1.5 mins", icon: "⚡" }
    ]
  },
 {
  id: "development",
  title: "Web Dev",
  subtitle: "Full-Stack Web, Mobile & Cloud Engineering",
  icon: <Code2 className="w-8 h-8" />,
  desc: "Enterprise-grade development for modern digital products.",
  fullDesc:
    "We engineer scalable, secure, and lightning-fast applications using modern frontend, backend, cloud, AI, DevOps, and mobile technologies. From SaaS platforms to enterprise ecosystems, we build systems designed for performance, growth, and long-term maintainability.",

  colorTheme: {
    primary: "#A855F7",
    light: "#F3E8FF",
    accent: "#D8B4FE",
    dark: "#581C87",
  },

  transformation: {
    before: "Slow, outdated, difficult-to-scale applications",
    after: "High-performance digital ecosystems built for scale",
  },

  process: [
    {
      step: "01",
      title: "Planning & Architecture",
      desc: "Scalable system design, database planning, and technical strategy.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      step: "02",
      title: "UI Engineering",
      desc: "Modern frontend experiences with responsive architecture.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      step: "03",
      title: "Backend Development",
      desc: "Secure APIs, authentication systems, and scalable infrastructure.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      step: "04",
      title: "Optimization & Deployment",
      desc: "Performance tuning, CI/CD automation, monitoring, and scaling.",
      icon: <Rocket className="w-5 h-5" />,
    },
  ],

  features: [
    "Full-Stack Development",
    "Cloud Infrastructure",
    "Authentication Systems",
    "Payment Integration",
    "AI Integrations",
    "Real-Time Applications",
    "REST & GraphQL APIs",
    "Database Optimization",
    "Microservices",
    "SEO Optimization",
    "PWA Support",
    "Cross-Platform Apps",
  ],

  stats: [
    { label: "Performance Score", value: "95+" },
    { label: "SEO Optimization", value: "100%" },
    { label: "Uptime", value: "99.99%" },
    { label: "Deployment Speed", value: "<5 min" },
  ],

  tools: [
    // Frontend
    "React",
    "Next.js",

    // Backend
    "Node.js",
    "Python",
    "PHP",
    "Laravel",

    // Database
    "MongoDB",
    "MySQL",

    // Mobile
    "React Native",
    "Flutter",
    "Expo",
    "PWA",
    // CMS & Ecommerce
    "Sanity",
    "Strapi",
    "Contentful",
    "Shopify",
    "WooCommerce",
  ],

  subServices: [
    {
      title: "SaaS Platforms",
      desc: "Modern subscription-based platforms with dashboards, billing, analytics, and automation.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Enterprise Applications",
      desc: "Scalable systems for large organizations with complex workflows.",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      title: "E-Commerce Systems",
      desc: "Conversion-focused online stores with optimized checkout flows.",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
    {
      title: "Mobile Applications",
      desc: "Cross-platform mobile apps with native performance.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "AI-Powered Apps",
      desc: "Intelligent products with automation, assistants, and AI workflows.",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      title: "Custom Dashboards",
      desc: "Data-rich admin panels, CRM systems, and analytics interfaces.",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
  ],

  transformationMetrics: [
    {
      label: "Performance",
      before: "3.8s",
      after: "0.7s",
      icon: "⚡",
    },
    {
      label: "SEO Score",
      before: "58",
      after: "98",
      icon: "🚀",
    },
    {
      label: "Conversion",
      before: "1.9%",
      after: "6.2%",
      icon: "📈",
    },
    {
      label: "Scalability",
      before: "10k Users",
      after: "2M+ Users",
      icon: "🌍",
    },
    {
      label: "Uptime",
      before: "97.2%",
      after: "99.99%",
      icon: "✅",
    },
  ],
},
  {
    id: "ai-integration",
    title: "AI Integration",
    subtitle: "Intelligent Systems & Automation",
    icon: <Cpu className="w-8 h-8" />,
    desc: "Leveraging cutting-edge LLMs for your business.",
    fullDesc: "We integrate state-of-the-art AI models into your applications to unlock new capabilities and automate complex workflows.",
    
    colorTheme: {
      primary: "#F59E0B", // Amber
      light: "#FFFBEB",
      accent: "#FCD34D",
      dark: "#78350F"
    },
    
    transformation: {
      before: "Manual processes and repetitive tasks",
      after: "Intelligent automation unlocking new revenue streams"
    },
    
    process: [
      { 
        step: "01", 
        title: "Strategy", 
        desc: "Identifying AI opportunities and ROI optimization.",
        icon: <Lightbulb className="w-5 h-5" />
      },
      { 
        step: "02", 
        title: "Integration", 
        desc: "Connecting best-in-class AI APIs and models.",
        icon: <Cpu className="w-5 h-5" />
      },
      { 
        step: "03", 
        title: "Optimization", 
        desc: "Fine-tuning prompts and improving accuracy.",
        icon: <Zap className="w-5 h-5" />
      },
      { 
        step: "04", 
        title: "Scaling", 
        desc: "Production deployment with monitoring and guardrails.",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    
    features: ["LLM Integration", "RAG Systems", "Prompt Engineering", "Custom Models"],
    stats: [
      { label: "Model Support", value: "10+ Models" },
      { label: "Token Efficiency", value: "Optimized" },
      { label: "Latency", value: "<500ms" }
    ],
    tools: ["OpenAI", "Anthropic", "LangChain", "Vector DB", "Python"],
    
    subServices: [
      { 
        title: "Chatbot Development", 
        desc: "Intelligent conversational interfaces for customer support.",
        icon: <Users className="w-5 h-5" />
      },
      { 
        title: "Content Generation", 
        desc: "AI-powered content creation and personalization.",
        icon: <Lightbulb className="w-5 h-5" />
      },
      { 
        title: "Data Analysis", 
        desc: "AI-driven insights from complex datasets.",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],

    transformationMetrics: [
      { label: "Efficiency Gain", before: "100%", after: "20% (80% saved)", icon: "⚡" },
      { label: "Cost Reduction", before: "Base", after: "40% reduction", icon: "💰" },
      { label: "Speed Improvement", before: "1 hour", after: "5 minutes", icon: "🚀" }
    ]
  }
];

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id) || services[0];
  const [expandedProcess, setExpandedProcess] = useState(0);

  return (
    <div className="pt-20">
      {/* Hero Section with Color Theming */}
      <section className="py-20 lg:py-40 relative overflow-hidden">
        {/* Background color theme */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundColor: service.colorTheme.light }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 hover:gap-3 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4" />
            <Link to="/services" className="group-hover:text-opacity-70 transition-all">
              All Services
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Icon + Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-3xl md:rounded-4xl flex items-center justify-center mb-8 md:mb-10"
                style={{ 
                  backgroundColor: service.colorTheme.light,
                  color: service.colorTheme.primary
                }}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {service.icon}
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tighter leading-[0.8] mb-6 md:mb-8">
                {service.title}
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
              >
                {service.fullDesc}
              </motion.p>
            </motion.div>

            {/* Right: Stats + Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 md:space-y-12"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {service.stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-black/5 hover:border-black/10 transition-all"
                    style={{ borderLeftColor: service.colorTheme.primary, borderLeftWidth: '4px' }}
                  >
                    <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-3xl md:text-4xl font-heading font-extrabold tracking-tighter break-all" style={{ color: service.colorTheme.primary }}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tools Section */}
              <motion.div 
                className="p-8 rounded-3xl"
                style={{ backgroundColor: service.colorTheme.light, borderLeft: `4px solid ${service.colorTheme.primary}` }}
              >
                <h4 className="text-[10px] uppercase font-bold tracking-widest mb-6 font-heading text-muted-foreground">
                  Tech Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {service.tools.map((tool, i) => (
                    <motion.div 
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-4 py-2 bg-white border rounded-xl text-sm font-bold transition-all hover:shadow-lg"
                      style={{ borderColor: service.colorTheme.primary, color: service.colorTheme.primary }}
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Story Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-6">
              The Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From struggling with {service.transformation.before.toLowerCase()} to achieving {service.transformation.after.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {service.transformationMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-black/5 text-center"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-muted-foreground">
                  {metric.label}
                </h3>
                <div className="flex justify-center items-center gap-6 mb-4">
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-heading font-bold text-red-500 line-through">{metric.before}</p>
                    <p className="text-xs text-muted-foreground mt-1">Before</p>
                  </div>
                  <ArrowRight className="w-6 h-6" style={{ color: service.colorTheme.primary }} />
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-heading font-bold" style={{ color: service.colorTheme.primary }}>
                      {metric.after}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">After</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-40 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundColor: service.colorTheme.primary }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-heading font-extrabold tracking-tighter">Our Methodology</h2>
          </motion.div>

          {/* Process with Interactive Expansion */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setExpandedProcess(expandedProcess === i ? -1 : i)}
                className="group cursor-pointer"
              >
                {/* Connector Line */}
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[20%] h-1 bg-gradient-to-r from-black/20 to-transparent" />
                )}

                <motion.div
                  className="p-8 rounded-3xl border-2 transition-all duration-300"
                  style={{
                    borderColor: expandedProcess === i ? service.colorTheme.primary : 'rgba(0,0,0,0.05)',
                    backgroundColor: expandedProcess === i ? service.colorTheme.light : 'white'
                  }}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6 mb-4"
                    style={{ 
                      backgroundColor: service.colorTheme.primary,
                      color: 'white'
                    }}
                  >
                    {p.icon}
                  </motion.div>

                  <div className="text-5xl font-heading font-extrabold text-black/10 mb-4">
                    {p.step}
                  </div>

                  <h4 className="text-xl font-bold mb-3 leading-tight">{p.title}</h4>
                  
                  <AnimatePresence>
                    {expandedProcess === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-muted-foreground leading-relaxed text-sm"
                      >
                        {p.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {expandedProcess !== i && (
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors line-clamp-2">
                      {p.desc}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-services / Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-4">
              Focus Areas
            </h2>
            <p className="text-muted-foreground text-lg">Specialized solutions within this discipline.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.subServices.map((sub, i) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-white border-2 border-black/5 hover:border-black/10 transition-all group"
                style={{
                  borderLeftColor: service.colorTheme.primary,
                  borderLeftWidth: '4px',
                }}
                whileHover={{ y: -4 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: service.colorTheme.light,
                    color: service.colorTheme.primary
                  }}
                >
                  {sub.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">{sub.title}</h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {sub.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-40 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundColor: service.colorTheme.primary }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: service.colorTheme.light }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <CheckCircle2 
                    className="w-5 h-5"
                    style={{ color: service.colorTheme.primary }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                    {feature}
                  </h3>
                  <p className="text-muted-foreground">
                    Industry-leading implementation of {feature.toLowerCase()} standards.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
      
      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

export default ServiceDetail;