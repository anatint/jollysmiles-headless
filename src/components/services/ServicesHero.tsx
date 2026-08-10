import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

export default function ServicesHero() {
  return (
    <div className="relative bg-white overflow-hidden lg:min-h-[450px] flex items-center pt-8 lg:py-0 py-[30px]">
      
      {/* Decorative background shape on left */}
      <div className="absolute top-0 left-0 w-full lg:w-[65%] h-full bg-gradient-to-br from-red-50/80 to-transparent lg:rounded-br-[150px] -z-10 pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 -left-1/4 w-full h-full bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl lg:pt-0 py-[30px]">
            <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
              Expert Care. Beautiful Smiles.
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
              Complete Dental Care <br className="hidden sm:block" />
              <span className="text-brand-red">For a Healthier You</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed max-w-xl font-medium">
              We provide a full range of dental services using advanced technology and a gentle approach to help you achieve a confident, healthy smile that lasts a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors shadow-sm text-xs">
                Book An Appointment
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-brand-red text-brand-red hover:bg-red-50 px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center shadow-sm text-xs group">
                Free Consultation <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full lg:h-[450px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[80%] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/dental-chair.png" 
                alt="Patient in dental chair receiving care" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Invisalign Badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 lg:bottom-12 lg:-left-12 bg-white py-4 px-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform cursor-default">
               <div className="text-brand-red font-black text-4xl sm:text-5xl opacity-80" style={{ fontFamily: 'serif' }}>A</div>
               <div className="flex flex-col justify-center">
                 <span className="text-[10px] sm:text-xs font-bold text-gray-800 flex items-center gap-1 mb-0.5 whitespace-nowrap">
                   Invisalign® Provider
                 </span>
                 <span className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-widest flex items-center gap-1">
                   <Star className="w-3 h-3 fill-brand-red text-brand-red" />
                   Diamond
                 </span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
