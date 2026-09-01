import Image from 'next/image';
import { Smile, Shield, Triangle, Star } from 'lucide-react';

export default function ServicesStats({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const heading = item.whyHeading || 'Trusted Care. Proven Results.';
  const stat1 = item.whyStat1 || '10,000+ Happy Patients';
  const stat2 = item.whyStat2 || '50+ Years of Experience';
  const stat3 = item.whyStat3 || 'Diamond Invisalign® Provider';
  const stat4 = item.whyStat4 || '5-Star Google Ratings';

  const parseStat = (str: string, defaultVal: string, defaultLabel: string) => {
    if (!str) return { value: defaultVal, label: defaultLabel };
    const parts = str.split(' ');
    if (parts.length > 1) {
      return { value: parts[0], label: parts.slice(1).join(' ') };
    }
    return { value: str, label: defaultLabel };
  };

  const s1 = parseStat(stat1, '10,000+', 'Happy Patients');
  const s2 = parseStat(stat2, '50+', 'Years of Experience');
  const s3 = parseStat(stat3, 'Diamond', 'Invisalign® Provider');
  const s4 = parseStat(stat4, '5-Star', 'Google Ratings');

  return (
    <div className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Text & Stats */}
          <div className="flex-1 w-full max-w-2xl text-center lg:text-left">
            <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </h4>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-10 tracking-tight font-serif">
              {heading}
            </h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Smile className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl mb-1 text-brand-red font-serif">{s1.value}</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">{s1.label}</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Shield className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl mb-1 text-brand-red font-serif">{s2.value}</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">{s2.label}</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Triangle className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl mb-1 text-brand-red font-serif">{s3.value}</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">{s3.label}</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <Star className="w-10 h-10 text-brand-red" strokeWidth={1.5} />
                </div>
                <div className="font-extrabold text-2xl mb-1 text-brand-red font-serif">{s4.value}</div>
                <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">{s4.label}</div>
              </div>
              
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
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
