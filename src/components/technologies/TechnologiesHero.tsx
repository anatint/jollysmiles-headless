import Image from 'next/image';
import { getWixImageUrl } from '@/lib/wix';

export default function TechnologiesHero({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const eyebrow = item.bannerEyebrow || 'ADVANCED TECHNOLOGY';
  const heading = item.bannerHeading || 'Advanced Technology';
  const highlight = item.bannerHighlight || 'Better Care, Healthier Smiles';
  const description = item.bannerDescription || 'At Jolly Smiles, we combine advanced technology with clinical expertise to deliver precise diagnosis, comfortable treatments, and exceptional results.';
  const bannerImage = getWixImageUrl(item.bannerImage, '/technologies-banner.png');

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden bg-gray-50 md:py-8 py-[50px]">
      
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-gray-200" />
        
        {bannerImage ? (
          <Image 
            src={bannerImage} 
            alt={heading}
            fill
            className="object-cover object-center md:object-right"
            priority
          />
        ) : null}
      </div>

      {/* Slight overlay on the left to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
          <div className="inline-block">
            <h3 className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded">
              {eyebrow}
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight font-serif">
            {heading}
            {highlight && <span className="block text-brand-red mt-2">{highlight}</span>}
          </h1>
          
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
