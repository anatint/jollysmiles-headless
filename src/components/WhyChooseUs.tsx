"use client";
import Image from 'next/image';
import { ArrowRight, CheckSquare2 } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { getWixImageUrl } from '@/lib/wix';

export default function WhyChooseUs({ data }: { data?: any }) {
  const { openAppointmentModal } = useModal();
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const eyebrow = item.whyEyebrow || 'WHY CHOOSE US';
  const heading = item.whyHeading || 'Advanced Care with a Personal Touch';
  const whyImage = getWixImageUrl(item.whyImage, '/dental-chair.png');

  let points: string[] = [];
  if (item.whyPoint1) {
    for (let i = 1; i <= 8; i++) {
      if (item[`whyPoint${i}`]) {
        points.push(item[`whyPoint${i}`]);
      }
    }
  } else {
    points = [
      "State-of-the-art technology",
      "Personalized treatment plans",
      "Comfortable & relaxing environment",
      "Affordable care with flexible options",
      "Experienced & friendly dental professionals"
    ];
  }

  return (
    <div className="bg-white overflow-hidden relative py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Image with dots pattern */}
          <div className="flex-1 relative w-full lg:order-1">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 opacity-20 bg-[radial-gradient(#ef4444_2px,transparent_2px)] [background-size:16px_16px]"></div>
            
            <div className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-gray-50">
              <Image 
                src={whyImage} 
                alt="Why Choose Jolly Smiles" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 max-w-xl lg:order-2">
            <h4 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4">
              {eyebrow}
            </h4>
            <h2 className="text-[35px] font-bold text-gray-900 mb-8 leading-tight font-serif">
              {heading.includes('Personal') ? (
                <>Advanced Care with<br/>a <span className="text-brand-red">Personal</span> Touch</>
              ) : (
                heading
              )}
            </h2>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-medium text-base">
                  <CheckSquare2 className="w-5 h-5 text-brand-red mr-3 shrink-0" fill="currentColor" stroke="white" strokeWidth={1} />
                  {point}
                </li>
              ))}
            </ul>

            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red hover:bg-brand-dark text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center group"
            >
              Book Appointment 
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
