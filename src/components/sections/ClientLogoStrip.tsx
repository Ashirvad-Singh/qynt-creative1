"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Camera, 
  Share2, 
  Layers, 
  Video
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "dev" | "social" | "brand";
  tag: string;
  color: string;
  desc: string;
  iconType: string;
}

const techItems: TechItem[] = [
  // Web Dev & Tech Stack
  { id: "nextjs", name: "Next.js 15", category: "dev", tag: "Web & App Dev", color: "#ffffff", desc: "Full-Stack Speed & SEO Architecture", iconType: "next" },
  { id: "react", name: "React", category: "dev", tag: "Frontend Core", color: "#61dafb", desc: "Dynamic Component UI Engines", iconType: "react" },
  { id: "typescript", name: "TypeScript", category: "dev", tag: "Type-Safe", color: "#3178c6", desc: "Enterprise High-Reliability Code", iconType: "ts" },
  { id: "tailwind", name: "Tailwind CSS", category: "dev", tag: "Design System", color: "#38bdf8", desc: "Pixel-Perfect Custom UI Styling", iconType: "tailwind" },
  { id: "threejs", name: "Three.js / WebGL", category: "dev", tag: "3D & Immersive", color: "#a855f7", desc: "Interactive 3D Web & Canvas FX", iconType: "three" },
  { id: "nodejs", name: "Node.js", category: "dev", tag: "Backend Engine", color: "#22c55e", desc: "High-Performance Cloud APIs", iconType: "node" },
  { id: "figma", name: "Figma", category: "dev", tag: "UI/UX Design", color: "#f43f5e", desc: "Interactive Wireframes & Design Systems", iconType: "figma" },
  { id: "vercel", name: "Vercel Cloud", category: "dev", tag: "Edge Hosting", color: "#e2e8f0", desc: "Sub-100ms Global CDN Deployment", iconType: "vercel" },

  // Social Media & Growth Platforms
  { id: "instagram", name: "Instagram", category: "social", tag: "Reels & Aesthetics", color: "#e1306c", desc: "Visual Storytelling & Grid Curation", iconType: "instagram" },
  { id: "tiktok", name: "TikTok", category: "social", tag: "Viral Organic", color: "#ff0050", desc: "Short-Form Platform Engagement", iconType: "tiktok" },
  { id: "youtube", name: "YouTube", category: "social", tag: "4K Film Growth", color: "#ff0000", desc: "Commercial Cinema & Short Content", iconType: "youtube" },
  { id: "meta", name: "Meta Ads", category: "social", tag: "Paid Acquisition", color: "#0668e1", desc: "Targeted Audience Growth Campaigns", iconType: "meta" },
  { id: "linkedin", name: "LinkedIn", category: "social", tag: "B2B Authority", color: "#0a66c2", desc: "Executive & Corporate Brand Reach", iconType: "linkedin" },
  { id: "x", name: "X / Twitter", category: "social", tag: "PR & Buzz", color: "#f8fafc", desc: "Real-Time Brand Campaigns", iconType: "x" },
  { id: "pinterest", name: "Pinterest", category: "social", tag: "Visual Discovery", color: "#e60023", desc: "Aesthetic Brand Lookbooks", iconType: "pinterest" },
  { id: "googleads", name: "Google Ads", category: "social", tag: "Search PPC", color: "#4285f4", desc: "High-Intent Customer Acquisition", iconType: "googleads" },

  // Photoshoot, Studio & Brand Building
  { id: "photoshop", name: "Adobe Photoshop", category: "brand", tag: "Commercial Edit", color: "#38bdf8", desc: "High-Resolution Photo Retouching", iconType: "photoshop" },
  { id: "lightroom", name: "Adobe Lightroom", category: "brand", tag: "Color Science", color: "#0284c7", desc: "Photoshoot Color Grading & Tones", iconType: "lightroom" },
  { id: "premiere", name: "Premiere Pro", category: "brand", tag: "Cinema Edit", color: "#c084fc", desc: "High-Impact Commercial Cutting", iconType: "premiere" },
  { id: "aftereffects", name: "After Effects", category: "brand", tag: "Motion & VFX", color: "#a855f7", desc: "Micro-Animations & Visual Effects", iconType: "aftereffects" },
  { id: "illustrator", name: "Illustrator", category: "brand", tag: "Brand Identity", color: "#f97316", desc: "Vector Logos, Typography & Assets", iconType: "illustrator" },
  { id: "davinci", name: "DaVinci Resolve", category: "brand", tag: "Pro Grading", color: "#ea580c", desc: "Hollywood-Grade Color Correction", iconType: "davinci" },
  { id: "red", name: "RED Digital 8K", category: "brand", tag: "Camera Hardware", color: "#ef4444", desc: "8K RAW Commercial Shoots", iconType: "red" },
  { id: "sony", name: "Sony Cine / Alpha", category: "brand", tag: "Studio Shoots", color: "#f1f5f9", desc: "Full-Frame Photography & Video", iconType: "sony" },
  { id: "canon", name: "Canon Cinema", category: "brand", tag: "Portrait Shoots", color: "#dc2626", desc: "Commercial & Fashion Photoshoots", iconType: "canon" },
  { id: "blender", name: "Blender 3D", category: "brand", tag: "Product CGI", color: "#f97316", desc: "Photorealistic 3D Renders & Ads", iconType: "blender" },
];

function RenderBrandLogo({ iconType, color }: { iconType: string; color: string }) {
  switch (iconType) {
    case "next":
      return (
        <svg className="w-10 h-10 fill-current text-white drop-shadow-md" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path fill="#fff" d="M149.508 157.52L69.142 54H54v72h14.4V72.937l66.862 86.993c4.764-2.8 9.2-5.937 14.246-9.41zM114 54h14.4v72H114z" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-10 h-10 text-[#61dafb] animate-spin-slow drop-shadow-[0_0_12px_rgba(97,218,251,0.6)]" viewBox="0 0 841.9 595.3" fill="none">
          <g stroke="#61dafb" strokeWidth="24">
            <ellipse cx="420.9" cy="297.6" rx="165.5" ry="382.4" transform="matrix(0.5 0.866 -0.866 0.5 468.1 -122.9)" />
            <ellipse cx="420.9" cy="297.6" rx="165.5" ry="382.4" transform="matrix(-0.5 0.866 -0.866 -0.5 889 -42.8)" />
            <ellipse cx="420.9" cy="297.6" rx="382.4" ry="165.5" />
          </g>
          <circle cx="420.9" cy="297.6" r="45.7" fill="#61dafb" />
        </svg>
      );
    case "ts":
      return (
        <svg className="w-10 h-10 rounded-lg overflow-hidden shadow-lg" viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path fill="#fff" d="M49.6 100V52.8H34.4V40h45.6v12.8H64.8V100H49.6zm33.9 0v-14h13.2c5.1 0 8.7-1.1 10.7-3.2 2.1-2.1 3.1-5.1 3.1-9 0-3.6-1.1-6.5-3.2-8.5-2.1-2.1-5.5-3.2-10.2-3.2h-13.6V100H83.5z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-10 h-10 text-[#38bdf8] drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case "photoshop":
    case "lightroom":
    case "premiere":
    case "aftereffects":
    case "illustrator":
      return (
        <div 
          className="w-10 h-10 rounded-xl font-bold text-sm flex items-center justify-center shadow-xl font-mono uppercase tracking-tighter"
          style={{ backgroundColor: `${color}25`, color: color, boxShadow: `0 0 15px ${color}40` }}
        >
          {iconType === "photoshop" && "Ps"}
          {iconType === "lightroom" && "Lr"}
          {iconType === "premiere" && "Pr"}
          {iconType === "aftereffects" && "Ae"}
          {iconType === "illustrator" && "Ai"}
        </div>
      );
    case "instagram":
      return (
        <svg className="w-10 h-10 text-[#e1306c] drop-shadow-[0_0_12px_rgba(225,48,108,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg className="w-10 h-10 text-[#ff0050] drop-shadow-[0_0_12px_rgba(255,0,80,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.67 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.56.02.93.52 1.84 1.29 2.37.91.63 2.15.71 3.1.2.98-.51 1.6-1.57 1.62-2.67.03-5.46.01-10.93.02-16.39z"/>
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-10 h-10 text-[#ff0000] drop-shadow-[0_0_12px_rgba(255,0,0,0.5)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case "red":
    case "sony":
    case "canon":
      return (
        <div className="flex items-center gap-1.5 text-white font-extrabold text-sm uppercase tracking-wider">
          <Camera className="w-5 h-5 text-primary" />
          <span>{iconType}</span>
        </div>
      );
    case "davinci":
    case "blender":
      return (
        <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-sm uppercase tracking-wider">
          <Video className="w-5 h-5" />
          <span>{iconType}</span>
        </div>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
          {iconType.substring(0, 2).toUpperCase()}
        </div>
      );
  }
}

export function ClientLogoStrip() {
  const [activeTab, setActiveTab] = useState<"all" | "dev" | "social" | "brand">("all");

  const filteredItems = activeTab === "all" 
    ? techItems 
    : techItems.filter(item => item.category === activeTab);

  const topRow = filteredItems.slice(0, Math.ceil(filteredItems.length / 2));
  const bottomRow = filteredItems.slice(Math.ceil(filteredItems.length / 2));

  return (
    <section className="py-16 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-primary/15 via-purple-600/10 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 relative z-10 px-4">
        {[
          { id: "all", label: "ALL STACK & TOOLS", icon: Layers, count: techItems.length },
          { id: "dev", label: "WEB DEV & CODE", icon: Code2, count: techItems.filter(i => i.category === "dev").length },
          { id: "brand", label: "PHOTOSHOOTS & BRAND STUDIO", icon: Camera, count: techItems.filter(i => i.category === "brand").length },
          { id: "social", label: "SOCIAL MEDIA & VIRALITY", icon: Share2, count: techItems.filter(i => i.category === "social").length },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-space uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover-trigger ${
                isActive 
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] font-bold scale-105" 
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-primary"}`} />
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${isActive ? "bg-black text-white" : "bg-white/10 text-gray-400"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Infinite Scrolling Pure Floating Logos (No Card Boxes, No Line Borders) */}
      <div className="w-full relative py-4">
        
        {/* Row 1 - Scrolling Left */}
        <div className="relative overflow-hidden flex py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-12 md:gap-20"
          >
            {[...topRow, ...topRow, ...topRow].map((item, idx) => (
              <div 
                key={`top-${item.id}-${idx}`}
                className="group relative flex items-center justify-center cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-125 flex-shrink-0"
                title={item.name}
              >
                <RenderBrandLogo iconType={item.iconType} color={item.color} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="relative overflow-hidden flex py-4 mt-6">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-12 md:gap-20"
          >
            {[...bottomRow, ...bottomRow, ...bottomRow].map((item, idx) => (
              <div 
                key={`bottom-${item.id}-${idx}`}
                className="group relative flex items-center justify-center cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-125 flex-shrink-0"
                title={item.name}
              >
                <RenderBrandLogo iconType={item.iconType} color={item.color} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-black to-transparent pointer-events-none z-20"></div>
      </div>

    </section>
  );
}


