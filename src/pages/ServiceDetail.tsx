import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Layout, Smartphone, Globe, Megaphone, Code2, Cpu } from "lucide-react";
import { Button } from "../components/ui/button";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { SEO } from "../components/SEO";

const services = [
  {
    id: "branding",
    title: "Branding",
    icon: <Globe className="w-8 h-8 animate-pulse" />,
    desc: "Defining your unique market position and visual voice.",
    fullDesc: "We build cohesive visual languages and comprehensive design systems. We ensure your brand's core values translate seamlessly across every touchpoint, aligning your logo, typography, guidelines, and interactive digital style.",
    process: [
      { step: "01", title: "Discovery", desc: "Immersion in your brand world and competitor landscape." },
      { step: "02", title: "Strategy", desc: "Defining the core narrative and positioning." },
      { step: "03", title: "Visual ID", desc: "Crafting the logo, typography, and color systems." },
      { step: "04", title: "Execution", desc: "Deploying the brand across digital and physical assets." }
    ],
    features: ["Digital Brand Guidelines", "Logo Ecosystem", "Custom Typography", "Motion Branding"],
    stats: [
      { label: "Visual Consistency", value: "100%" },
      { label: "Delivery Time", value: "4-6 Weeks" },
      { label: "Brand Adaptability", value: "Omnichannel" }
    ],
    tools: ["Figma", "Adobe CC", "After Effects", "Cinema 4D", "Spline"],
    subServices: [
      { title: "Brand Audit", desc: "Evaluating your current brand equity and identifying gaps." },
      { title: "Visual Language", desc: "Developing a consistent aesthetic for all communication." },
      { title: "Brand Voice", desc: "Crafting the tone and messaging strategy for your audience." }
    ]
  },
  {
    id: "product-design",
    title: "Product Design",
    icon: <Layout className="w-8 h-8" />,
    desc: "Obsessive attention to UI/UX and user interaction.",
    fullDesc: "We craft intuitive, human-centered UI/UX digital interfaces. From detailed wireframing to high-fidelity interactive mockups, we blend strict functional layouts with cinematic animation systems to maximize engagement.",
    process: [
      { step: "01", title: "Research", desc: "User personas, mapping user journeys and flows." },
      { step: "02", title: "Wireframing", desc: "Lo-fi layout drafts and information architecture." },
      { step: "03", title: "UI Design", desc: "High-fidelity screen layouts and dark/light modes." },
      { step: "04", title: "Prototyping", desc: "Interactive micro-animations and developer handoff." }
    ],
    features: ["Bespoke Layout Systems", "Interactive Prototypes", "Dark Mode Styling", "Micro-Animations"],
    stats: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "User Engagement", value: "2.5x Higher" },
      { label: "Design Sprints", value: "2 Weeks" }
    ],
    tools: ["Figma", "Principle", "ProtoPie", "Adobe XD", "Framer"],
    subServices: [
      { title: "User Journeys", desc: "Defining optimal paths to streamline user conversion." },
      { title: "Interface Design", desc: "Crafting premium visual aesthetics for web and mobile interfaces." },
      { title: "UX Auditing", desc: "Analyzing customer feedback to eliminate layout friction." }
    ]
  },
  {
    id: "development",
    title: "Development",
    icon: <Code2 className="w-8 h-8" />,
    desc: "High-performance code for web and mobile.",
    fullDesc: "We build enterprise-grade software products and high-performance frontends. By matching sleek design with state-of-the-art architectures, we guarantee lightning-fast load times, solid scaling, and clean, modular codebases.",
    process: [
      { step: "01", title: "Tech Selection", desc: "Planning database schema and API contracts." },
      { step: "02", title: "Frontend Build", desc: "Translating Figma into highly responsive React components." },
      { step: "03", title: "Backend Setup", desc: "Creating secure servers, databases, and caching layers." },
      { step: "04", title: "Optimization", desc: "Performance tuning, SEO checks, and seamless deployment." }
    ],
    features: ["React / Next.js Development", "SaaS Dashboards", "Headless CMS Platforms", "Real-Time Databases"],
    stats: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Load Timeline", value: "<1.0s" },
      { label: "Uptime Guarantee", value: "99.99%" }
    ],
    tools: ["Next.js / Vite", "TypeScript", "Tailwind CSS", "Node.js / Go", "PostgreSQL / Supabase"],
    subServices: [
      { title: "Full-Stack Dev", desc: "End-to-end development of scalable SaaS apps and APIs." },
      { title: "Headless E-Commerce", desc: "Fast checkout flows using Shopify Hydrogen or custom solutions." },
      { title: "System Integration", desc: "Connecting Stripe payment gateways, CRM software, and backend APIs." }
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    icon: <Cpu className="w-8 h-8" />,
    desc: "Leveraging cutting-edge LLMs for your business.",
    fullDesc: "We embed intelligence into digital products by integrating state-of-the-art machine learning models, custom AI workflows, and advanced LLMs. We automate operations, create conversational features, and deliver real-time data insights.",
    process: [
      { step: "01", title: "Audit & Match", desc: "Finding workflows ripe for automation or AI augmentation." },
      { step: "02", title: "Model Select", desc: "Evaluating models (OpenAI, Gemini, Anthropic, or open-source Llama)." },
      { step: "03", title: "Integration", desc: "Implementing vector databases, embeddings, and prompt structures." },
      { step: "04", title: "Refinement", desc: "Tracking model tokens, tuning performance, and securing data." }
    ],
    features: ["LLM Integration", "RAG Systems", "Autonomous Agents", "Vector Databases"],
    stats: [
      { label: "Savings Rate", value: "up to 60%" },
      { label: "Latency Target", value: "<150ms" },
      { label: "Accuracy Rating", value: "99.2%" }
    ],
    tools: ["OpenAI API", "Gemini Pro", "LangChain", "Pinecone / PGVector", "Python / FastStream"],
    subServices: [
      { title: "Custom Agents", desc: "Developing virtual team members that automate email, chat, and data workflows." },
      { title: "Semantic Search", desc: "Unlocking knowledge bases to allow real-time conversational search." },
      { title: "Analytics Engine", desc: "Configuring machine learning models to detect fraud, predict churn, and analyze text." }
    ]
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Strategic scaling, operation modeling, and workflow automation.",
    fullDesc: "We analyze business structures, model scaling strategies, and optimize workflows to scale operations, unlock target segments, and drive measurable revenue expansion.",
    process: [
      { step: "01", title: "Audit & Bottlenecks", desc: "Assessing current structures, bottlenecks, and financial models." },
      { step: "02", title: "Strategy & Pitch", desc: "Designing strategy, mapping target audiences, and pricing models." },
      { step: "03", title: "Operational Flow", desc: "Formulating operational flows, automation hooks, and tooling." },
      { step: "04", title: "KPI Execution", desc: "Deploying standard operating procedures and tracking performance metrics." }
    ],
    features: ["Workflow Automation", "Operational Modeling", "Market Entry Plans", "Revenue Optimization"],
    stats: [
      { label: "Operational Cost", value: "-40%" },
      { label: "Revenue Growth", value: "+35%" },
      { label: "Process Efficiency", value: "1.8x" }
    ],
    tools: ["Notion", "Asana", "Jira", "Excel / Sheets", "Zapier / Make"],
    subServices: [
      { title: "Growth Strategy", desc: "Crafting maps to launch new offerings and enter segments." },
      { title: "Workflow Audit", desc: "Mapping out operations to remove duplicate tasks and speed work." },
      { title: "Tooling & Integration", desc: "Configuring CRM, reporting dashboards, and automation triggers." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: <Megaphone className="w-8 h-8" />,
    desc: "Strategic scaling, lead generation, and conversions.",
    fullDesc: "We accelerate product growth through performance analytics, content engines, search engine positioning, and automated marketing flows. We align your product's design with conversion strategies.",
    process: [
      { step: "01", title: "Funnel Audit", desc: "Finding conversion bottlenecks in your checkout or signup flows." },
      { step: "02", title: "SEO Strategy", desc: "Designing a structured content pipeline for long-term organic traffic." },
      { step: "03", title: "Campaign Launch", desc: "Building landing pages, email flows, and social creatives." },
      { step: "04", title: "Analytics Tuning", desc: "A/B testing copy, CTA buttons, layouts, and tracking metrics." }
    ],
    features: ["SEO Strategies", "Conversion Rate Opt", "Automated Email", "Campaign Analytics"],
    stats: [
      { label: "Organic Growth", value: "+220%" },
      { label: "CPA Reduction", value: "-35%" },
      { label: "LTV Increase", value: "+18%" }
    ],
    tools: ["Google Analytics", "SEMrush", "HubSpot", "PostHog", "Framer / Webflow"],
    subServices: [
      { title: "SEO Optimization", desc: "Content clusters, tech audits, and backlink strategies to rank first." },
      { title: "CRO Optimization", desc: "Optimizing page designs and layouts based on customer heatmaps." },
      { title: "Automation Engine", desc: "Configuring onboarding email paths and lifecycle triggers." }
    ]
  }
];

export function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id) || services[0];

  return (
    <div className="pt-20">
      <SEO 
        title={service.title} 
        description={service.fullDesc} 
        keywords={`${service.title}, services, ${service.tools.join(", ")}, qynt`}
      />
      <section className="py-20 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-20 group font-bold uppercase tracking-widest text-[10px]">
             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black text-white flex items-center justify-center mb-8 md:mb-10">
                {service.icon}
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tighter leading-[0.8] mb-8 md:mb-10 break-words text-[#1a1a1a]">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                 {service.fullDesc}
              </p>
            </div>
            <div className="space-y-8 md:space-y-12">
               {/* Stats Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  {service.stats.map(stat => (
                    <div key={stat.label} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary-bg border border-black/5">
                      <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">{stat.label}</p>
                      <p className="text-3xl md:text-4xl font-heading font-extrabold tracking-tighter break-all">{stat.value}</p>
                    </div>
                  ))}
               </div>

               {/* Tools Section */}
               <div className="p-8 rounded-3xl bg-black text-white">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-6 font-heading">Tech Stack & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.tools.map(tool => (
                      <div key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold">
                        {tool}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services / Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-4">Focus Areas</h2>
               <p className="text-muted-foreground text-lg">Specialized solutions within this discipline.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {service.subServices.map(sub => (
                 <div key={sub.title} className="p-10 rounded-[40px] bg-secondary-bg border border-black/5 hover:border-black/10 transition-all">
                    <h4 className="text-2xl font-black mb-4 tracking-tight">{sub.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{sub.desc}</p>
                 </div>
               ))}
            </div>
        </div>
      </section>

      <section className="py-40 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center">
             <h2 className="text-5xl font-heading font-extrabold tracking-tighter">Our Methodology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {service.process.map(p => (
              <div key={p.step} className="relative">
                  <div className="text-6xl font-heading font-extrabold text-black/10 mb-6">{p.step}</div>
                  <h4 className="text-2xl font-bold mb-4">{p.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </div>
  );
}
