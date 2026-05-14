import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "./Logo";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Magnetic } from "./Magnetic";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(20px)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.08)"]
  );
  const paddingY = useTransform(scrollY, [0, 50], ["24px", "16px"]);

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom, paddingBlock: paddingY }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <Link
                to={link.href}
                className={`text-sm font-bold uppercase tracking-[0.1em] transition-colors relative group ${location.pathname === link.href ? 'text-black' : 'text-foreground/70 hover:text-foreground'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </motion.div>
          ))}
          <Magnetic>
            <Button 
              nativeButton={false}
              className="rounded-full px-8 h-12 gap-3 group bg-[#1a1a1a] text-white hover:bg-black transition-all shadow-md active:scale-95"
              render={<Link to="/contact" />}
            >
              <span className="text-[13px] font-bold tracking-tight">Start a project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5px]" />
            </Button>
          </Magnetic>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "relative z-50"
              )}
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 border-none bg-white/95 backdrop-blur-xl shadow-2xl">
              {/* Background Decorative Text */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015] flex flex-col justify-center items-center">
                <span className="text-[80px] font-black leading-none -rotate-12 translate-x-1/4">QYNT</span>
                <span className="text-[80px] font-black leading-none -rotate-12 -translate-x-1/4">CREATIVES</span>
              </div>

              <div className="flex flex-col h-full pt-14 pb-8 px-5 relative z-10">
                <div className="flex flex-col gap-0.5">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        to={link.href}
                        className="text-3xl sm:text-4xl font-heading font-black tracking-tighter hover:text-[#e12e7a] transition-colors leading-[1.15] block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button 
                      nativeButton={false}
                      className="w-full rounded-xl h-14 text-lg font-black bg-black text-white group flex items-center justify-between px-6 active:scale-[0.98] transition-all hover:bg-[#e12e7a]"
                      render={<Link to="/contact" />}
                    >
                      Start a project
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>

                  <div className="mt-8 pt-6 border-t border-black/5">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#1a1a1a]/30 mb-2">Connect</p>
                    <div className="grid grid-cols-1 gap-0.5">
                      <a href="mailto:Qyntcreatives@gmail.com" className="text-sm font-bold tracking-tight text-[#1a1a1a] hover:text-[#e12e7a] transition-colors">Qyntcreatives@gmail.com</a>
                      <a href="tel:9627277111" className="text-sm font-bold tracking-tight text-[#1a1a1a] hover:text-[#e12e7a] transition-colors">9627277111</a>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
