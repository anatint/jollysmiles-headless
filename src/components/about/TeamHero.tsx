import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function TeamHero() {
  return (
    <div className="relative bg-[#fff5f5] overflow-hidden py-[50px]">
      
      {/* Background swoosh */}
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-white rounded-t-[100%] scale-[1.5] origin-bottom shadow-[0_-10px_20px_rgba(255,200,200,0.2)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-4 tracking-tight font-serif">
              Our Dental <span className="text-brand-red">Team</span>
            </h1>
            
            <div className="w-16 h-1 bg-brand-red rounded-full mb-6"></div>

            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced and compassionate dental professionals is dedicated to providing exceptional care in a comfortable and welcoming environment. Get to know the experts who will help you achieve a healthy, beautiful smile.
            </p>
            
            {/* Breadcrumbs matching About page */}
            <div className="flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link href="/about" className="hover:underline">About Us</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-700">Our Team</span>
            </div>
          </div>
          
          {/* Right Image Column */}
          <div className="flex-1 relative w-full max-w-lg aspect-square lg:aspect-[4/3] mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
              <Image 
                src="/team-banner.png" 
                alt="Jolly Smiles Dental Team" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
