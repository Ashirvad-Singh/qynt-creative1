import { Hero } from "../components/Hero";
import { TrustStats } from "../components/TrustStats";
import { PortfolioSection } from "../components/PortfolioSection";
import { Services } from "../components/Services";
import { DashboardUI } from "../components/DashboardUI";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { motion } from "motion/react";

export function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <PortfolioSection />
      <Services />
      <DashboardUI />
      <Team />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
