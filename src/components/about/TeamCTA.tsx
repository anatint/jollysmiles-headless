"use client";

import { Calendar, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function TeamCTA({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();

  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});
  const ctaHeading = item.ctaHeading || 'Ready to Love Your Smile?';
  const ctaDescription = item.ctaDescription || item.ctaSubheading || "Schedule your consultation today and let our experts help you achieve the smile you've always wanted.";
  const ctaButtonLabel = item.ctaButtonLabel || item.ctaPrimaryButton || 'BOOK APPOINTMENT';
  const ctaPhone = item.ctaPhone || '(302) 658-7200';

  return (
    <section className="bg-white py-8 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fff5f5] border border-red-100 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_15px_rgba(255,200,200,0.2)]">
          
          {/* Left Side: Icon + Heading + Description */}
          <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left flex-col sm:flex-row flex-grow">
            <div className="w-12 h-12 rounded-xl bg-white border border-red-100 shadow-sm flex items-center justify-center text-brand-red shrink-0">
              <Calendar className="w-6 h-6 text-brand-red" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-brand-red font-serif leading-tight">
                {ctaHeading}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal mt-1 leading-relaxed max-w-xl">
                {ctaDescription}
              </p>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button 
              onClick={openAppointmentModal}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow text-center whitespace-nowrap"
            >
              {ctaButtonLabel}
            </button>
            <a 
              href="tel:3026587200"
              className="w-full sm:w-auto bg-white border border-brand-red text-brand-red hover:bg-red-50 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              {ctaPhone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
