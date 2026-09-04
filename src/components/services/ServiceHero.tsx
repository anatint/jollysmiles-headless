"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface ServiceHeroProps {
  title: string;
  paragraphs: string[];
  image: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
}

export default function ServiceHero({
  title,
  paragraphs,
  image,
  ctaPrimaryLabel = 'BOOK APPOINTMENT',
  ctaSecondaryLabel = 'CONSULT OUR EXPERTS'
}: ServiceHeroProps) {
  const { openAppointmentModal } = useModal();

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 lg:py-16">
      
      {/* Decorative soft bottom-left accent */}
      <div className="absolute bottom-0 left-0 w-[40%] h-64 bg-gradient-to-tr from-red-50/70 to-transparent rounded-tr-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[50%] space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#111827] tracking-tight font-serif leading-[1.08]">
              {title}
            </h1>
            
            {/* Red accent bar */}
            <div className="w-14 h-1 bg-brand-red rounded-full"></div>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={openAppointmentModal}
                className="bg-brand-red hover:bg-brand-dark text-white px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg text-center cursor-pointer"
              >
                {ctaPrimaryLabel}
              </button>

              <Link
                href="/contact#contact-form"
                className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                {ctaSecondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-[50%] relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
              <Image
                src={image}
                alt={`${title} at Jolly Smiles`}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle gentle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
