"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/servicesData";

interface ServiceFAQProps {
  title?: string;
  eyebrow?: string;
  faqs: FAQItem[];
}

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  eyebrow = "COMMON QUESTIONS & ANSWERS",
  faqs,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF5F6]/40 via-white to-white border-t border-red-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 mb-4 rounded-full" />

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Have questions regarding this treatment? Find helpful answers to our most common patient inquiries below or reach out to our team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-brand-red/30 shadow-md shadow-red-900/5 ring-1 ring-brand-red/20"
                    : "bg-white border-gray-200/80 hover:border-brand-red/30 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none group"
                >
                  <span
                    className={`text-base sm:text-lg font-bold pr-6 transition-colors duration-200 ${
                      isOpen
                        ? "text-brand-red"
                        : "text-gray-900 group-hover:text-brand-red"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-red text-white rotate-180"
                        : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-brand-red"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 sm:px-8 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Small Note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <span>Still have questions? </span>
          <a
            href="/contact#contact-form"
            className="text-brand-red font-semibold hover:underline"
          >
            Contact our Middletown team
          </a>{" "}
          or call us directly at{" "}
          <a
            href="tel:3023783384"
            className="text-brand-red font-semibold hover:underline"
          >
            (302) 378-3384
          </a>
          .
        </div>
      </div>
    </section>
  );
}
