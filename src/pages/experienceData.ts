import { BrainCircuit, Code2, Compass, Film, Globe2, Layers3, LineChart, LucideIcon, Palette, PenTool, Radar, Sparkles, Target, Zap } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  eyebrow: string;
  accent: string;
  icon: LucideIcon;
  promise: string;
  narrative: string;
  process: string[];
  proof: string;
};

export const services: Service[] = [
  {
    id: "brand-systems",
    title: "Brand Systems",
    eyebrow: "Meaning made visible",
    accent: "#e12e7a",
    icon: Palette,
    promise: "Turn an ambitious company into a symbol people remember.",
    narrative: "We build verbal, visual, and motion systems that make complex brands feel inevitable: sharp strategy, iconic marks, campaigns, launch worlds, and rules flexible enough for growth.",
    process: ["Signal excavation", "Narrative territories", "Identity architecture", "Launch orchestration"],
    proof: "Average recall lift across rebrands: 41%"
  },
  {
    id: "digital-products",
    title: "Digital Products",
    eyebrow: "Interfaces with gravity",
    accent: "#4f46e5",
    icon: Layers3,
    promise: "Design product experiences that make users feel unusually capable.",
    narrative: "From zero-to-one prototypes to enterprise-grade platforms, we create interaction systems, design systems, and product flows that turn user intent into momentum.",
    process: ["Behavior mapping", "Prototype theatre", "Design systems", "Engineering handoff"],
    proof: "2.3x faster task completion after UX redesigns"
  },
  {
    id: "web-engineering",
    title: "Web Engineering",
    eyebrow: "Performance as prestige",
    accent: "#00d26a",
    icon: Code2,
    promise: "Ship cinematic websites that still feel instant.",
    narrative: "We combine React architecture, motion discipline, accessibility, and obsessive performance tuning so the experience feels luxurious without becoming heavy.",
    process: ["Technical direction", "Component craft", "Motion tuning", "Performance QA"],
    proof: "Sub-1s perceived loads on launch builds"
  },
  {
    id: "growth-labs",
    title: "Growth Labs",
    eyebrow: "Experimentation with taste",
    accent: "#f59e0b",
    icon: LineChart,
    promise: "Make every campaign feel like a product and every product feel like a story.",
    narrative: "We create conversion systems, landing experiences, launch sequences, and measurement loops without sacrificing brand equity for short-term clicks.",
    process: ["Funnel diagnosis", "Creative sprints", "Signal instrumentation", "Iteration rooms"],
    proof: "Typical launch pipeline increase: 68%"
  }
];

export const projects = [
  {
    id: "nova-ai",
    title: "Nova AI",
    category: "Product Design",
    theme: "#4f46e5",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800",
    client: "Nova Intelligence",
    year: "2026",
    role: "Strategy, UX, Interface System",
    intro: "A command center for research teams turning messy intelligence into calm, confident decisions.",
    challenge: "Nova had powerful models, but their users felt buried under output. The product needed to transform from a tool into a trusted decision environment.",
    process: "We designed a layered workspace: ambient context at the edges, decisive actions at the center, and explainability available only when the user asks for depth.",
    solution: "A cinematic intelligence cockpit with source trails, confidence choreography, and a modular design language for rapid enterprise expansion.",
    impact: ["44% faster synthesis", "31% more weekly active teams", "92 accessibility score"]
  },
  {
    id: "atlas-grid",
    title: "Atlas Grid",
    category: "Brand + Web",
    theme: "#00d26a",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800",
    client: "Atlas Infrastructure",
    year: "2025",
    role: "Identity, Web Experience, Motion",
    intro: "A renewable infrastructure brand rebuilt as a living map of progress, trust, and scale.",
    challenge: "The brand needed to speak to governments, investors, and communities without feeling corporate, cold, or overpromised.",
    process: "We built the identity around geographic precision and human warmth, then translated it into a scroll-led site that moves like an illuminated network.",
    solution: "A distinctive identity system, interactive impact atlas, and investor narrative that made technical scale feel tangible.",
    impact: ["3.8x investor deck engagement", "56% longer site sessions", "12-country launch kit"]
  },
  {
    id: "mono-house",
    title: "Mono House",
    category: "Commerce Experience",
    theme: "#e12e7a",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1800",
    client: "Mono House",
    year: "2025",
    role: "Art Direction, E-commerce UX",
    intro: "A luxury object marketplace designed like an editorial gallery, not a shopping grid.",
    challenge: "Mono House needed conversion discipline while protecting the slow, tactile feeling that made the brand desirable.",
    process: "We replaced predictable catalog patterns with curated rooms, sensory product storytelling, and checkout interactions that feel discreet.",
    solution: "A restrained commerce system with editorial pathways, cinematic reveals, and elegant product comparison rituals.",
    impact: ["27% higher AOV", "18% fewer checkout exits", "4 editorial commerce templates"]
  },
  {
    id: "signal-care",
    title: "Signal Care",
    category: "Healthcare Platform",
    theme: "#0ea5e9",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1800",
    client: "Signal Care",
    year: "2024",
    role: "Service Design, Product UI",
    intro: "A human-first patient operations platform built to reduce stress in moments that already carry too much weight.",
    challenge: "Care coordinators were losing time to fragmented systems and patients were receiving cold, confusing communications.",
    process: "We mapped emotional states alongside operational tasks, designing a calmer system for both staff and patients.",
    solution: "A care-flow dashboard, plain-language communication engine, and patient timeline with warm, accessible interaction patterns.",
    impact: ["38% fewer support calls", "22% quicker intake", "WCAG-minded component kit"]
  }
];

export const articles = [
  ["The new luxury is cognitive ease", "Design", "8 min"],
  ["Motion systems should behave like editors", "Motion", "6 min"],
  ["Why brands need operating systems, not guidelines", "Brand", "10 min"],
  ["Interfaces for anxious moments", "UX", "7 min"],
  ["The end of the decorative landing page", "Strategy", "5 min"]
];

export const values = [
  { title: "Taste with evidence", icon: Sparkles, copy: "We trust instinct, then pressure-test it with behavior, context, and craft." },
  { title: "Systems over stunts", icon: Compass, copy: "The memorable moment matters most when the underlying system can scale." },
  { title: "Human velocity", icon: Zap, copy: "We move fast without making people feel rushed, unheard, or disposable." },
  { title: "Clarity is premium", icon: Target, copy: "A beautiful idea is unfinished until it becomes easy to understand and use." }
];

export const capabilities = [BrainCircuit, Film, Globe2, PenTool, Radar];
