"use client";
import Image from 'next/image';
import { ArrowRight, Activity, Smile, Building2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { getWixImageUrl } from '@/lib/wix';

export default function OurStory({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const eyebrow = item.storyEyebrow || 'OUR STORY';
  const heading = item.storyHeading || 'Creating Healthier, Happier Smiles Every Day';
  const paragraph1 = item.storyParagraph1 || 'Founded with a passion for patient care and a commitment to excellence, Jolly Smiles has grown into a trusted dental practice known for its personalized approach and advanced treatments.';
  const paragraph2 = item.storyParagraph2 || 'We combine technology, skill, and compassion to deliver outstanding results in a comfortable, friendly environment.';
  const buttonLabel = item.storyButtonLabel || 'Book Appointment';
  const storyImage = getWixImageUrl(item.storyImage, '/clinic-reception.png');

  const stat1Value = item.stat1Value || '15+';
  const stat1Label = item.stat1Label || 'Years of Trusted Dental Care';
  const stat2Value = item.stat2Value || '10K+';
  const stat2Label = item.stat2Label || 'Happy & Satisfied Patients';
  const stat3Value = item.stat3Value || '5+';
  const stat3Label = item.stat3Label || 'Modern Clinics Across Locations';

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Text */}
          <div className="flex-1 max-w-xl">
            <h4 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4">
              {eyebrow}
            </h4>
            <h2 className="text-[35px] font-bold text-gray-900 mb-6 leading-tight font-serif">
              {heading}
            </h2>
            
            <div 
              className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed space-y-3 prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: paragraph1 }}
            />

            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red hover:bg-brand-dark text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center group"
            >
              {buttonLabel} 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image & Stats */}
          <div className="flex-1 relative w-full mt-12 lg:mt-0">
            {/* Main Image */}
            <div className="relative w-full max-w-md mx-auto lg:mr-auto lg:ml-0 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50">
              <Image 
                src={storyImage} 
                alt="Jolly Smiles Clinic" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-6 translate-x-1/4">
              
              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Activity className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">{stat1Value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat1Label}</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Smile className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">{stat2Value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat2Label}</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-gray-50 w-64 transform transition hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Building2 className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">{stat3Value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat3Label}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
