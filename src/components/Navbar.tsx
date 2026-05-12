import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Magnetic } from "./Magnetic";
import { Link, useLocation } from "react-router-dom";

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
            <Link to="/contact">
              <Button size="sm" className="rounded-full px-6 group bg-black hover:bg-black/80">
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-4xl font-heading font-extrabold tracking-tighter"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact">
                  <Button className="w-full mt-4 rounded-full py-8 text-xl font-bold bg-black group">
                    Start a project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
