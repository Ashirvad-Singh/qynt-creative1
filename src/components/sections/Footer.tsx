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
              Whether it&apos;s for 15s or 15 mins. Let&apos;s create.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:justify-end text-xs font-space uppercase tracking-widest text-gray-500">
            <div>
              <p className="text-white mb-4">Pages</p>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/films" className="hover:text-primary transition-colors">Films</Link></li>
                <li><Link href="/social" className="hover:text-primary transition-colors">Social</Link></li>
                <li><Link href="/dev" className="hover:text-primary transition-colors">Dev</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white mb-4 font-bold">Socials</p>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.instagram.com/qyntcreatives/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-pink-500 transition-colors flex items-center gap-1.5 text-white font-medium"
                  >
                    <span>Instagram</span>
                    <span className="text-pink-500">↗</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white mb-4 font-bold">Contact & Location</p>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+919560765957" className="hover:text-primary transition-colors text-white font-medium">
                    +91 95607 65957
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@qyntcreatives.com" className="hover:text-primary transition-colors">
                    hello@qyntcreatives.com
                  </a>
                </li>
                <li className="normal-case text-gray-400 leading-normal max-w-xs">
                  C 902, Prateek Wisteria, Sector 77, Sector-45, Noida, UP 201301
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/place/Qynt+Creatives+%7C+Digital+Marketing+Agency,+Events+%26+More/@28.5480783,77.3508585,17z/data=!3m1!4b1!4m6!3m5!1s0x2278a3e975972491:0xcb4bb81ff581458a!8m2!3d28.5480783!4d77.3508585!16s%2Fg%2F11w2_7z5x9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Open in Google Maps ↗
                  </a>
                </li>
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
