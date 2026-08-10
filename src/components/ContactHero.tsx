import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ContactHero() {
  return (
    <div className="relative bg-white overflow-hidden min-h-[400px] flex flex-col lg:flex-row items-center">
      
      {/* Background decorative swoosh (bottom left) */}
      <div className="absolute bottom-0 left-0 w-full md:w-[60%] h-64 bg-gradient-to-tr from-[#fff0f0] to-transparent rounded-tr-full opacity-50 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Text Column */}
          <div className="flex-1 lg:pr-12 pt-12 pb-8 lg:py-16 z-10 relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Contact <span className="text-brand-red">Us</span>
            </h1>
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-6">
              We're here to help you smile brighter.
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Have a question or ready to book your appointment? Reach out to us — we'd love to hear from you!
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-900">Contact Us</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Right Image Column (Bleeds to edge on desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0">
        {/* Soft gradient fade on the left edge of the image to blend into the white background */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <Image 
          src="/clinic-reception.png" 
          alt="Jolly Smiles Clinic Reception" 
          fill 
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Mobile Image (Visible only on small screens) */}
      <div className="lg:hidden w-full h-[300px] relative mt-auto">
        <Image 
          src="/clinic-reception.png" 
          alt="Jolly Smiles Clinic Reception" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
    </div>
  );
}
