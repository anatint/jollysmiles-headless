import Image from 'next/image';
import { Smile, Shield, Triangle, Star } from 'lucide-react';

export default function ServicesStats() {
  return (
    <div className="bg-white py-12 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Text & Stats */}
          <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
            <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </h4>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-12 tracking-tight">
              Trusted Care. Proven Results.
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Smile className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl text-gray-900 mb-1 text-brand-red">10,000+</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">Happy Patients</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl text-gray-900 mb-1 text-brand-red">50+</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">Years of Experience</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Triangle className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl text-gray-900 mb-1 text-brand-red">Diamond</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">Invisalign® Provider</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Star className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl text-gray-900 mb-1 text-brand-red">5-Star</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">Google Ratings</div>
              </div>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/clinic-reception.png" 
              alt="Jolly Smiles Clinic Reception" 
              fill 
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
