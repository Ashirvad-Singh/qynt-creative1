"use client";

import { motion } from "framer-motion";

export function ScaleAndDedication() {
  return (
    <section className="py-32 bg-black relative overflow-hidden flex flex-col items-center">
      
      {/* Headings */}
      <div className="text-center mb-32 relative z-10 px-4">
        <span className="text-[#d8973c] font-space tracking-[0.2em] uppercase text-[10px] font-bold mb-4 block">
          OUR SCALE & DEDICATION
        </span>
        <h2 className="text-5xl md:text-8xl font-bebas tracking-wide leading-[0.9]">
          <span className="text-white">BUILT IN-HOUSE FOR<br/></span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a50] to-[#e60023]">END-TO-END </span>
          <span className="text-white">EXCELLENCE.</span>
        </h2>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-32">
        
        {/* Row 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-12 font-space text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md">
            <p>
              As one of{" "}
              <motion.span 
                initial={{ backgroundSize: "0% 100%", color: "#d1d5db" }}
                whileInView={{ backgroundSize: "100% 100%", color: "#000000" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "circOut" }}
                className="font-medium px-1 box-decoration-clone"
                style={{
                  backgroundImage: "linear-gradient(to right, #fbc02d 0%, #fbc02d 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 0",
                  display: "inline",
                }}
              >
                the fastest-growing AI-native<br/>media companies
              </motion.span>{" "}
              in the digital space, QYNT operates with the speed of a startup and the resources of an award-winning global firm.
            </p>
            <p>
              Our team of{" "}
              <motion.span 
                initial={{ backgroundSize: "0% 100%", color: "#d1d5db" }}
                whileInView={{ backgroundSize: "100% 100%", color: "#000000" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                className="font-medium px-1 box-decoration-clone"
                style={{
                  backgroundImage: "linear-gradient(to right, #fbc02d 0%, #fbc02d 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 0",
                  display: "inline",
                }}
              >
                150+ in-house strategists,<br/>creatives, filmmakers, and AI builders
              </motion.span>{" "}
              is united by a single goal: to deliver marketing that genuinely moves the culture and the metrics.
            </p>
          </div>
          <div className="relative flex justify-center mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3300]/40 via-[#ffaa00]/40 to-transparent blur-[80px] rounded-full scale-150 transform -translate-y-10 pointer-events-none" />
            <div className="relative z-10 w-full max-w-lg aspect-square overflow-hidden rounded-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Team Scale and Dedication"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#fffcdd] rounded-full blur-[40px] opacity-80 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#8a2be2]/30 via-[#4169e1]/30 to-transparent blur-[80px] rounded-full scale-150 pointer-events-none" />
            <div className="relative z-10 w-full max-w-lg aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Creative Lab"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 font-space text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md order-1 lg:order-2 lg:ml-auto">
            <p>
              We don't just follow trends—we set them. Our dedicated creative lab works around the clock to{" "}
              <motion.span 
                initial={{ backgroundSize: "0% 100%", color: "#d1d5db" }}
                whileInView={{ backgroundSize: "100% 100%", color: "#000000" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "circOut" }}
                className="font-medium px-1 box-decoration-clone"
                style={{
                  backgroundImage: "linear-gradient(to right, #fbc02d 0%, #fbc02d 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 0",
                  display: "inline",
                }}
              >
                conceptualize viral moments
              </motion.span>{" "}
              that capture the internet's attention and dominate the cultural conversation.
            </p>
          </div>
        </div>

        {/* Row 3: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-12 font-space text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md">
            <p>
              Armed with our{" "}
              <motion.span 
                initial={{ backgroundSize: "0% 100%", color: "#d1d5db" }}
                whileInView={{ backgroundSize: "100% 100%", color: "#000000" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "circOut" }}
                className="font-medium px-1 box-decoration-clone"
                style={{
                  backgroundImage: "linear-gradient(to right, #fbc02d 0%, #fbc02d 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 0",
                  display: "inline",
                }}
              >
                proprietary data analytics engine
              </motion.span>,{" "}
              we understand exactly what your audience wants before they do. We turn deep insights into scroll-stopping creative that converts.
            </p>
          </div>
          <div className="relative flex justify-center mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffcc]/20 via-[#0066ff]/20 to-transparent blur-[80px] rounded-full scale-150 transform -translate-y-10 pointer-events-none" />
            <div className="relative z-10 w-full max-w-lg aspect-square overflow-hidden rounded-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Data Analytics"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#ff0066]/30 via-[#ff9900]/30 to-transparent blur-[80px] rounded-full scale-150 pointer-events-none" />
            <div className="relative z-10 w-full max-w-lg aspect-video overflow-hidden rounded-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200"
                alt="Execution Speed"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-125 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12 font-space text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-md order-1 lg:order-2 lg:ml-auto">
            <p>
              Unmatched execution speed. From script to screen, our agile production units deliver{" "}
              <motion.span 
                initial={{ backgroundSize: "0% 100%", color: "#d1d5db" }}
                whileInView={{ backgroundSize: "100% 100%", color: "#000000" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="font-medium px-1 box-decoration-clone"
                style={{
                  backgroundImage: "linear-gradient(to right, #fbc02d 0%, #fbc02d 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 0",
                  display: "inline",
                }}
              >
                cinematic quality in a fraction of the traditional timeline.
              </motion.span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
