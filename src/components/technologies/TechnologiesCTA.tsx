"use client";
import { CalendarDays, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TechnologiesCTA({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();
  const pathname = usePathname();
  
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});
  const ctaHeading = item.ctaHeading || 'Experience the Difference';
  const ctaDescription = item.ctaDescription || 'Our advanced technology and caring team work together to give you the best possible dental care.';
  const ctaButtonLabel = item.ctaButtonLabel || 'Book Appointment';
  const ctaPhone = item.ctaPhone || '(302) DR-TEETH';

  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50/80 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-red-100 shadow-sm">
          
          <div className="flex items-start md:items-center gap-6 lg:w-3/5">
            <div className="flex-shrink-0 text-brand-red bg-white p-4 rounded-xl shadow-sm hidden md:block border border-red-50">
              <CalendarDays className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-[32px] md:text-[35px] leading-tight font-bold text-brand-red mb-2 font-serif">
                {ctaHeading}
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {ctaDescription}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red text-white hover:bg-brand-dark px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-sm whitespace-nowrap"
            >
              {ctaButtonLabel}
            </button>
            <Link 
              href={pathname === '/contact' ? '#contact-form' : '/contact#contact-form'} 
              className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              {ctaPhone}
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
