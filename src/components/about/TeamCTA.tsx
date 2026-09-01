"use client";

import { Calendar, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TeamCTA({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();
  const pathname = usePathname();

  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});
  const ctaHeading = item.ctaHeading || 'Experience the Difference';
  const ctaDescription = item.ctaDescription || item.ctaSubheading || 'Advanced technology and a caring team for your best smile.';
  const ctaPrimaryButton = item.ctaPrimaryButton || item.ctaButtonLabel || 'BOOK APPOINTMENT';
  const ctaSecondaryButton = item.ctaSecondaryButton || 'CONTACT US';

  return (
    <section className="bg-white py-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fff5f5] border border-red-100/90 rounded-3xl p-6 sm:px-8 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Icon + Heading + Description */}
          <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row flex-grow">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-brand-red shrink-0">
              <Calendar className="w-7 h-7 text-brand-red" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-[26px] font-bold text-brand-red leading-tight font-serif">
                {ctaHeading}
              </h2>
              <p className="text-gray-600 text-sm font-normal mt-1 leading-snug">
                {ctaDescription}
              </p>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <button 
              onClick={openAppointmentModal}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg text-center whitespace-nowrap"
            >
              {ctaPrimaryButton}
            </button>
            <Link 
              href={pathname === '/contact' ? '#contact-form' : '/contact#contact-form'}
              className="w-full sm:w-auto bg-white border border-brand-red text-brand-red hover:bg-red-50 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              {ctaSecondaryButton}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
