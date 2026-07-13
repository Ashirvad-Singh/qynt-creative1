import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LenisProvider } from "./components/LenisProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InteractiveBackground } from "./components/InteractiveBackground";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Blog } from "./pages/Blog";
import { FAQPage } from "./pages/FAQPage";

function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 18); // ~1.8 seconds to reach 100%

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setLaunched(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 900); // Wait for the launch transition to complete before unmounting
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#0a0a0b] flex flex-col items-center justify-center select-none pointer-events-none"
    >
      <div className="w-[70vw] max-w-2xl relative flex flex-col items-center">
        {/* Loading text at the top */}
        <motion.div
          animate={launched ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
          className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em] mb-16 text-center"
        >
          Propelling universe &bull; {progress}%
        </motion.div>

        {/* Horizontal Progress Track */}
        <div className="w-full h-[3px] bg-white/10 rounded-full relative flex items-center mb-8">
          {/* Active Completed Progress line drawn by rocket */}
          <div 
            className="h-full bg-gradient-to-r from-[#FF7A50] to-[#FF5A36] rounded-full transition-all duration-75 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Soft glowing trail aura */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-[#FF5A36] blur-[6px] opacity-70" />
          </div>

          {/* Absolute Propelling Rocket */}
          <motion.div
            style={{ left: `${progress}%` }}
            animate={
              launched
                ? { 
                    rotate: 0, 
                    y: -window.innerHeight - 250, 
                    x: -96, 
                    scale: 1 
                  }
                : {
                    rotate: 90,
                    y: [0, -1.5, 1.5, -1.5, 0], // engine vibrations
                    x: -96, // offset centering
                    scale: 1
                  }
            }
            transition={
              launched
                ? { 
                    y: { duration: 0.85, ease: [0.32, 0, 0.67, 0] }, // blast-off acceleration
                    rotate: { duration: 0.4, ease: "easeOut" } // smooth rotate to facing up
                  }
                : { 
                    y: { repeat: Infinity, duration: 0.08 },
                    x: { duration: 0.1 }
                  }
            }
            className="absolute top-[-68px] z-50 flex items-center justify-center"
          >
            <div className="relative">
              {/* Detailed 2D replica of the 3D Banner Rocket - Scaled up to match 3D proportions */}
              <svg
                width="140"
                height="192"
                viewBox="0 0 80 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_25px_rgba(255,122,80,0.55)]"
              >
                {/* Side wings */}
                <path d="M16 75 L28 65 L28 85 Z" fill="#FF5A36" stroke="#E54825" strokeWidth="1.5" />
                <path d="M64 75 L52 65 L52 85 Z" fill="#FF5A36" stroke="#E54825" strokeWidth="1.5" />
                
                {/* Engine nozzle */}
                <rect x="34" y="85" width="12" height="6" rx="2" fill="#2d2d30" />

                {/* Main Body */}
                <rect x="28" y="32" width="24" height="54" rx="12" fill="#F9F9FB" stroke="#e4e4e7" strokeWidth="1.5" />

                {/* Nose Cone */}
                <path d="M28 35 C28 20 40 10 40 10 C40 10 52 20 52 35 Z" fill="#FF5A36" stroke="#E54825" strokeWidth="1.5" />

                {/* Metallic red Stripe */}
                <rect x="28.75" y="44" width="22.5" height="6" fill="#E54825" />

                {/* Window Panel */}
                <circle cx="40" cy="58" r="7.5" fill="#FF7A50" />
                <circle cx="40" cy="58" r="5" fill="#00E5FF" />
              </svg>

              {/* Dynamic Engine flame trail - Scaled up proportionally */}
              <motion.div
                animate={{
                  scaleY: launched ? [3, 0.5] : [1, 1.6, 1],
                  opacity: launched ? [1, 0] : [0.8, 1, 0.8],
                }}
                transition={{
                  duration: launched ? 0.8 : 0.12,
                  repeat: launched ? 0 : Infinity,
                }}
                className="absolute left-1/2 -translate-x-1/2 bottom-[-26px] w-8 h-18 bg-gradient-to-b from-[#FF5A36] via-[#FF7A50] to-yellow-300 rounded-b-full origin-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

import { useLenis } from "lenis/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <InteractiveBackground />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div 
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:id" element={<ProjectDetail />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LenisProvider>
        <AppContent />
      </LenisProvider>
    </Router>
  );
}
