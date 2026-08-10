"use client";
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: "Does dental treatment hurt?", answer: "We prioritize your comfort and use the latest techniques to ensure treatments are as pain-free as possible." },
  { question: "How long does treatment take?", answer: "Treatment times vary depending on the procedure, but we will always provide a clear timeline during your consultation." },
  { question: "How much do dental implants cost?", answer: "Cost varies based on individual needs. We offer consultations to provide a detailed estimate and discuss financing options." },
  { question: "Is Invisalign right for me?", answer: "Invisalign is a great option for many adults and teens. We can determine if you're a candidate during a free consultation." },
  { question: "Do you accept my insurance?", answer: "We accept most major dental insurances and will work with you to maximize your benefits." },
  { question: "How do I schedule an appointment?", answer: "You can schedule an appointment by calling our office or using the online booking tool on our website." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[35px] font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-gray-900 font-bold text-lg group-hover:text-brand-red transition-colors">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-red' : ''}`} />
              </button>
              <div 
                className={`mt-4 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
