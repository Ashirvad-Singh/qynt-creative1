"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, MapPin, Phone, Mail, Clock, Star, Heart, Compass, ExternalLink, Sparkles } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
  };

  const googleMapsUrl = "https://www.google.com/maps/place/Qynt+Creatives+%7C+Digital+Marketing+Agency,+Events+%26+More/@28.5480783,77.3508585,17z/data=!3m1!4b1!4m6!3m5!1s0x2278a3e975972491:0xcb4bb81ff581458a!8m2!3d28.5480783!4d77.3508585!16s%2Fg%2F11w2_7z5x9";

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Typography & Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-space uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Marketing & Events</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-bebas tracking-wide text-white leading-[0.9] mb-4">
            BRING YOUR <span className="text-primary block">IDEA.</span>
          </h2>
          <p className="text-2xl font-light text-gray-400 mb-12 max-w-md">
            WE&apos;LL BUILD THE EXPERIENCE.
          </p>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 p-4 rounded-xl glass-card border border-white/10 mb-10 max-w-md">
            <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-md text-sm font-bold">
              <span>5.0</span>
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            </div>
            <div className="text-xs font-space text-gray-300">
              <span className="text-white font-medium">5.0 Star Rating (5 Reviews)</span>
              <span className="block text-gray-500">Google Verified Business</span>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-300 font-space tracking-wider">
            {/* Address */}
            <div className="group p-4 rounded-xl glass-card border border-white/5 hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1 font-bold">Visit Us</p>
                  <p className="text-base text-white leading-relaxed">
                    C 902, Prateek Wisteria, Sector 77, Sector-45,<br />
                    Noida, Uttar Pradesh 201301
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-primary" /> Plus Code: G9X3+69 Noida
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="group p-4 rounded-xl glass-card border border-white/5 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1 font-bold">Call Us</p>
                  <a 
                    href="tel:+919560765957" 
                    className="text-lg text-white font-semibold hover:text-primary transition-colors hover-trigger flex items-center gap-2"
                  >
                    +91 95607 65957
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="group p-4 rounded-xl glass-card border border-white/5 hover:border-primary/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1 font-bold">Email Us</p>
                  <a 
                    href="mailto:hello@qyntcreatives.com" 
                    className="text-lg text-white font-semibold hover:text-primary transition-colors hover-trigger flex items-center gap-2"
                  >
                    hello@qyntcreatives.com
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="group p-4 rounded-xl glass-card border border-white/5 hover:border-pink-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-500">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1 font-bold">Instagram</p>
                  <a 
                    href="https://www.instagram.com/qyntcreatives/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white font-semibold hover:text-pink-400 transition-colors hover-trigger flex items-center gap-2"
                  >
                    @qyntcreatives
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Highlights Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-space">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-space">
                <Heart className="w-3.5 h-3.5" />
                <span>LGBTQ+ Friendly</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form */}
        <div className="glass-card p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
          {/* Subtle gradient blob behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>

          <div>
            <h3 className="text-2xl font-bebas tracking-wide text-white mb-2">SEND US A MESSAGE</h3>
            <p className="text-sm font-space text-gray-400 mb-8">Let&apos;s talk about your digital marketing or event project.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
            {/* Name Input */}
            <div className="relative group">
              <input
                {...register("name")}
                type="text"
                id="name"
                className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-4 text-white text-lg focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase pointer-events-none">
                Your Name
              </label>
              {errors.name && <span className="text-primary text-xs absolute -bottom-5 left-0">{errors.name.message}</span>}
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                {...register("email")}
                type="email"
                id="email"
                className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-4 text-white text-lg focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent"
                placeholder="Email"
              />
              <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase pointer-events-none">
                Your Email
              </label>
              {errors.email && <span className="text-primary text-xs absolute -bottom-5 left-0">{errors.email.message}</span>}
            </div>

            {/* Message Input */}
            <div className="relative group">
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-4 text-white text-lg focus:ring-0 focus:border-primary transition-colors peer placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400 peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase pointer-events-none">
                Tell us about your project
              </label>
              {errors.message && <span className="text-primary text-xs absolute -bottom-5 left-0">{errors.message.message}</span>}
            </div>

            <button type="submit" className="group relative w-full overflow-hidden rounded-xl bg-white text-black py-5 flex items-center justify-center gap-3 hover-trigger mt-12">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors duration-300">Send Message</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Embedded Google Map Section */}
      <div className="mt-24 w-full rounded-[2rem] overflow-hidden glass-card relative border border-white/10 p-2 md:p-3 shadow-2xl">
        {/* Top Header Bar for Map */}
        <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-space text-xs uppercase tracking-widest text-white font-semibold">
              Qynt Creatives Headquarters · Noida, UP
            </span>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 hover:bg-primary border border-primary/40 text-white text-xs font-space tracking-wider uppercase transition-all duration-300 hover:scale-105"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Google Map iframe Container */}
        <div className="w-full h-[450px] md:h-[500px] rounded-xl overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.72187689325!2d77.35085847549776!3d28.548078275710928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2278a3e975972491%3A0xcb4bb81ff581458a!2sQynt%20Creatives%20%7C%20Digital%20Marketing%20Agency%2C%20Events%20%26%20More!5e0!3m2!1sen!2sin!4v1786719363970!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Qynt Creatives Google Map Location"
            className="w-full h-full rounded-xl filter contrast-[1.05]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

