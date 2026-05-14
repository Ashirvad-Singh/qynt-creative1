import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our projects range from 4 to 12 weeks, depending on the complexity and scope. High-end custom builds require meticulous detailing which we never rush."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. We provide flexible maintenance packages and ongoing design partner relationships to ensure your product continues to evolve and scale."
  },
  {
    question: "What is your design philosophy?",
    answer: "We believe in luxury minimalism and architectural honesty. Every pixel must serve a purpose, and every interaction must feel intentional and fluid."
  },
  {
    question: "Can we start with a smaller engagement?",
    answer: "Yes, we often start with Strategy & Branding phases before moving into full-scale product design and development."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-40 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-4"
          >
            Insights
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-extrabold tracking-tighter"
          >
            Frequently Asked <br />
            <span className="text-muted-foreground text-gradient">Questions</span>
          </motion.h2>
        </div>

        <Accordion className="w-full space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem 
                value={`item-${i}`} 
                className="group border border-black/5 bg-white/50 backdrop-blur-xl rounded-[32px] px-8 py-2 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-black/10 overflow-hidden"
              >
                <AccordionTrigger className="text-xl font-bold font-heading hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
