"use client";
import { ArrowRight, Star, Award, Shield, Smile } from 'lucide-react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

export default function HeroSection() {
  const { openAppointmentModal } = useModal();
  return (
    <div className="relative bg-white overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-background.png" alt="Dental Patient" fill className="object-cover object-[75%_center] opacity-95" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10 md:via-white/60 md:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-block bg-white border border-brand-red text-brand-red font-bold text-[10px] px-3 py-1 uppercase tracking-widest mb-6 rounded shadow-sm">
            Delaware's Trusted Dental Care
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
            Transform Your Smile, <br />
            <span className="text-brand-red">Transform Your Life.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-800 mb-10 max-w-xl leading-snug font-medium">
            Advanced technology, personalized care, and a team that truly cares about your smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={openAppointmentModal}
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors shadow-sm text-xs"
            >
              Book An Appointment
            </button>
            <button className="w-full sm:w-auto bg-white border-[2px] border-brand-red text-brand-red hover:bg-red-50 px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center shadow-sm text-xs">
              Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Badges Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-8 mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pointer-events-none">
          
          {/* Stats Bar */}
          <div className="bg-white py-6 px-6 sm:px-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row flex-wrap lg:flex-nowrap divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 pointer-events-auto w-full lg:w-auto">
            
            <div className="flex items-center gap-4 pr-8 py-4 lg:py-0 w-full lg:w-auto">
              <div className="border-[1.5px] border-brand-red p-2.5 rounded-full text-brand-red flex-shrink-0">
                <Smile className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <div className="font-extrabold text-gray-900 text-xl leading-none mb-1">10,000+</div>
                <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Happy Patients</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-0 lg:px-8 py-4 lg:py-0 w-full lg:w-auto">
              <div className="border-[1.5px] border-brand-red p-2.5 rounded-full text-brand-red flex-shrink-0">
                <Shield className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <div className="font-extrabold text-gray-900 text-xl leading-none mb-1">50+</div>
                <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 px-0 lg:px-8 py-4 lg:py-0 w-full lg:w-auto">
              <div className="border-[1.5px] border-brand-red p-2.5 rounded-full text-brand-red flex-shrink-0">
                <Shield className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <div className="font-extrabold text-gray-900 text-xl leading-none mb-1">Advanced</div>
                <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Digital Technology</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 pl-0 lg:pl-8 py-4 lg:py-0 w-full lg:w-auto">
              <div className="border-[1.5px] border-brand-red p-2.5 rounded-full text-brand-red flex-shrink-0">
                <Star className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <div className="font-extrabold text-gray-900 text-xl leading-none mb-1">5-Star</div>
                <div className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Google Ratings</div>
              </div>
            </div>

          </div>

          {/* Invisalign Provider Badge Placeholder */}
          <div className="bg-white py-4 px-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-4 pointer-events-auto self-end lg:self-auto shrink-0">
             <div className="text-brand-red font-black text-5xl opacity-80" style={{ fontFamily: 'serif' }}>A</div>
             <div className="flex flex-col justify-center">
               <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest flex items-center gap-1 mb-0.5">
                 <Star className="w-3 h-3 fill-brand-red text-brand-red" /> Invisalign Provider
               </span>
               <span className="text-sm font-black text-gray-900 uppercase tracking-widest bg-gray-100 px-2 py-0.5 inline-block rounded-sm">Top 1% Provider</span>
             </div>
          </div>

        </div>
      </div>
      
      {/* Spacer to push the next section down if needed */}
      <div className="h-12 lg:h-24"></div>
    </div>
  );
}
