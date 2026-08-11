"use client";
import { CalendarDays, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CTABanner() {
  const { openAppointmentModal } = useModal();
  const pathname = usePathname();

  const pathname = usePathname();

  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 rounded-2xl p-5 md:px-8 md:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 border border-red-100">
          
          <div className="flex items-start md:items-center gap-5 lg:w-3/5">
            <div className="flex-shrink-0 text-brand-red bg-white p-3 rounded-xl shadow-sm hidden md:block">
              <CalendarDays className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl md:text-[28px] leading-tight font-bold text-brand-red mb-1">
                Experience the Difference
              </h2>
              <p className="text-gray-700 text-base">
                Advanced technology and a caring team for your best smile.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red text-white hover:bg-brand-dark px-5 py-2 rounded font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-[13px] whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Link 
              href={pathname === '/contact' ? '#contact-form' : '/contact#contact-form'} 
              className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-5 py-2 rounded font-bold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center justify-center gap-2 text-[13px] whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
