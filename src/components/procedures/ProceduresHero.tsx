import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star } from 'lucide-react';

export default function ProceduresHero() {
  return (
    <div className="relative bg-white overflow-hidden lg:min-h-[500px] flex items-center pt-8 lg:py-0 py-12 md:py-16">
      
      {/* Decorative background shape on left */}
      <div className="absolute top-0 left-0 w-full lg:w-[65%] h-full bg-gradient-to-br from-red-50/80 to-transparent lg:rounded-br-[150px] -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-full h-full bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl lg:pt-0 py-12 md:py-16">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6 font-medium">
              <Link href="/" className="hover:text-brand-red transition">Home</Link>
              <span>&gt;</span>
              <Link href="/services" className="hover:text-brand-red transition">Services</Link>
              <span>&gt;</span>
              <span className="text-gray-700 font-semibold">Dental Procedures</span>
            </div>

            <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
              HOW DO WE DO IT?
            </h4>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight font-serif">
              Dental Procedures <br />
              <span className="text-brand-red">Designed for Your Smile</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed max-w-xl font-medium">
              We combine advanced technology with compassionate care to deliver safe, comfortable, and effective dental procedures for patients in Middletown, DE and surrounding communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about/team" className="w-full sm:w-auto bg-brand-red hover:bg-brand-dark text-white px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors shadow-sm text-xs text-center">
                Meet Our Team
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-brand-red text-brand-red hover:bg-red-50 px-5 py-2.5 rounded-[4px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center shadow-sm text-xs group">
                <Clock className="mr-2 w-4 h-4" />
                View Working Hours
              </Link>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[80%] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/procedures-hero.png" 
                alt="Dentist performing dental procedure" 
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
                   Diamond Invisalign®
                 </span>
                 <span className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-widest flex items-center gap-1">
                   <Star className="w-3 h-3 fill-brand-red text-brand-red" />
                   Top 1% Provider
                 </span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
