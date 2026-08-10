"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Activity, Smile, Building2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function OurStory() {
  const { openAppointmentModal } = useModal();
  return (
    <div className="bg-white py-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Text */}
          <div className="flex-1 max-w-xl">
            <h4 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4">
              Our Story
            </h4>
            <h2 className="text-[35px] font-bold text-gray-900 mb-6 leading-tight">
              Creating Healthier, Happier <span className="text-brand-red">Smiles</span> Every Day
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded with a passion for patient care and a commitment to excellence, Jolly Smiles has grown into a trusted dental practice known for its personalized approach and advanced treatments.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We combine technology, skill, and compassion to deliver outstanding results in a comfortable, friendly environment.
            </p>
            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center group"
            >
              Book Appointment 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image & Stats */}
          <div className="flex-1 relative w-full mt-12 lg:mt-0">
            {/* Main Image */}
            <div className="relative w-full max-w-md mx-auto lg:mr-auto lg:ml-0 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/clinic-reception.png" 
                alt="Jolly Smiles Clinic Reception" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Floating Badges — hidden on mobile to prevent overflow */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-6 translate-x-1/4">
              
              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Activity className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">15+</div>
                  <div className="text-xs text-gray-500 font-medium">Years of Trusted<br/>Dental Care</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Smile className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">10K+</div>
                  <div className="text-xs text-gray-500 font-medium">Happy & Satisfied<br/>Patients</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Building2 className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">5+</div>
                  <div className="text-xs text-gray-500 font-medium">Modern Clinics<br/>Across Locations</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
