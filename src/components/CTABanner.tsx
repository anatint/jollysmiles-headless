"use client";

import { Calendar, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function CTABanner({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();

  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});
  const ctaHeading = item.ctaHeading || 'Ready to Love Your Smile?';
  const ctaDescription = item.ctaDescription || item.ctaSubheading || "Schedule your consultation today and let our experts help you achieve the smile you've always wanted.";
  const ctaPrimaryButton = item.ctaPrimaryButton || item.ctaButtonLabel || 'BOOK APPOINTMENT';
  const phone = item.phone || item.callPhone || '(302) 658-7200';
  const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-brand-red to-[#B91C1C] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Icon + Heading + Description */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 lg:max-w-2xl">
            <div className="w-16 h-16 rounded-2xl border border-white/30 bg-white/15 flex items-center justify-center shrink-0 shadow-inner">
              <Calendar className="w-8 h-8 text-white" strokeWidth={1.75} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-white">
                {ctaHeading}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                {ctaDescription}
              </p>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <button
              onClick={openAppointmentModal}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-red font-bold px-7 py-3.5 rounded-lg text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
            >
              {ctaPrimaryButton}
            </button>

            <a
              href={`tel:${cleanPhoneDigits || '3023783384'}`}
              className="w-full sm:w-auto bg-transparent border-2 border-white/80 hover:bg-white/15 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 text-center"
            >
              <Phone className="w-4 h-4 text-white" />
              {phone}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
