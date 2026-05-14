import { motion } from "motion/react";
import logo from "../assets/images/regenerated_image_1778739825630.jpg";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="md:col-span-2 space-y-8">
            <img 
              src={logo} 
              alt="Qynt Creatives & Co." 
              className="h-12 md:h-16 w-auto object-contain origin-left"
            />
            <p className="text-xl text-muted-foreground leading-relaxed max-w-sm">
              We design and build the digital future for visionary brands. Let's create something world-class together.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "var(--color-accent-blue)" }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-[10px] mb-8">Studio</h4>
            <ul className="space-y-4">
              {[
                { name: "Portfolio", href: "/portfolio" },
                { name: "Services", href: "/services" },
                { name: "FAQ", href: "/faq" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors flex items-center group font-bold tracking-tight">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-[10px] mb-8">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-2">New Projects</p>
                <a href="mailto:Qyntcreatives@gmail.com" className="text-lg font-bold hover:text-[#e12e7a] transition-colors">Qyntcreatives@gmail.com</a>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-2">Studio HQ</p>
                <address className="not-italic text-muted-foreground font-medium">
                  Sector 105 D block<br />
                  Noida, India
                </address>
                <a href="tel:9627277111" className="text-sm font-bold mt-2 block hover:text-[#e12e7a] transition-colors">9627277111</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} QYNT CREATIVE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
