"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-32 pb-10 bg-black relative overflow-hidden border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bebas text-white leading-[0.9] tracking-wide">
              YOUR NEXT BIG <br />
              IDEA <span className="text-primary">STARTS HERE</span>
            </h2>
            <p className="text-gray-500 text-xs mt-4 font-space uppercase tracking-widest">
              Whether it's for 15s or 15 mins. Let's create.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:justify-end text-xs font-space uppercase tracking-widest text-gray-500">
            <div>
              <p className="text-white mb-4">Pages</p>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/films" className="hover:text-primary transition-colors">Films</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white mb-4">Information</p>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:hello@qyntcreatives.com" className="hover:text-primary transition-colors">hello@qyntcreatives.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="text-[25vw] font-bebas font-bold text-white/[0.03] leading-none whitespace-nowrap">
          QYNT
        </h1>
      </div>
    </footer>
  );
}
