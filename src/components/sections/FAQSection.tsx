"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { faqData } from "@/data/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F8F6F2] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4">
            Travel Planning in Mysore — <span className="text-primary italic">FAQs</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Common questions about booking customized tour packages, Mysore sightseeing, and holiday planning with G K JOURNEYS.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/40"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-gray-900 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="flex-1 pr-2">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm md:text-[15px] leading-relaxed border-t border-gray-100 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg text-gray-900 font-semibold mb-1">
              Have another question about your travel plan?
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Krupa P Murthy is available directly on WhatsApp and phone to answer all your travel queries.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href="https://wa.me/917892050273?text=Hi%20Krupa!%20I%20have%20a%20question%20about%20planning%20a%20tour%20package%20with%20GK%20Journeys."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
            <a
              href="tel:+917892050273"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gray-900 hover:bg-[#123A67] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
