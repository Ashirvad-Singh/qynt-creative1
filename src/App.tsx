import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LenisProvider } from "./components/LenisProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
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
import { PricingPage } from "./pages/PricingPage";
import { FAQPage } from "./pages/FAQPage";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo className="scale-150" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-12 left-0 w-full h-0.5 bg-black/10 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      <ScrollToTop />
      <InteractiveBackground />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
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
                  <Route path="/pricing" element={<PricingPage />} />
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
