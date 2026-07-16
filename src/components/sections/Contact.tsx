"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";

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

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Typography & Info */}
        <div>
          <h2 className="text-6xl md:text-8xl font-bebas tracking-wide text-white leading-[0.9] mb-8">
            BRING YOUR <span className="text-primary block">IDEA.</span>
          </h2>
          <p className="text-3xl font-light text-gray-400 mb-16 max-w-md">
            WE&apos;LL BUILD THE EXPERIENCE.
          </p>
          
          <div className="space-y-8 text-gray-300 font-space tracking-wider">
            <div>
              <p className="text-xs uppercase text-gray-500 mb-2">Email Us</p>
              <a href="mailto:hello@qyntcreatives.com" className="text-lg hover:text-primary transition-colors hover-trigger">hello@qyntcreatives.com</a>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 mb-2">Call Us</p>
              <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors hover-trigger">+1 (234) 567-890</a>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 mb-2">Visit Us</p>
              <p className="text-lg">123 Creative Studio Ave<br/>New York, NY 10012</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Subtle gradient blob behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 relative z-10">
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
      
      {/* Map (Stylized placeholder to fit the dark theme) */}
      <div className="mt-24 h-[400px] w-full rounded-[2rem] overflow-hidden glass-card relative group hover-trigger">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none"></div>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="Map"
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-[2s] ease-out"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="w-6 h-6 bg-primary rounded-full animate-ping absolute opacity-75"></div>
          <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(255,107,45,1)]"></div>
          <span className="mt-4 font-space text-xs uppercase tracking-widest bg-black/80 px-4 py-2 rounded-full border border-white/10 text-white">NYC Studio</span>
        </div>
      </div>
    </section>
  );
}
