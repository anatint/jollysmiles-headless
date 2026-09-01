"use client";

import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function TeamCTA() {
  const { openAppointmentModal } = useModal();

  return (
    <section className="bg-white py-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fff1f2] border border-red-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Info */}
          <div className="flex items-center gap-5 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-white border border-red-200 shadow-sm flex items-center justify-center text-brand-red shrink-0">
              <Calendar className="w-8 h-8" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-red font-serif mb-1.5">
                Ready to Love Your Smile?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-normal max-w-xl">
                Schedule your consultation today and let our experts help you achieve the smile you've always wanted.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
            <button
              onClick={openAppointmentModal}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition shadow-md hover:shadow-lg"
            >
              Book Appointment
            </button>
            <a
              href="tel:3026587200"
              className="w-full sm:w-auto bg-white border border-brand-red text-brand-red hover:bg-red-50 px-6 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              (302) 658-7200
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
