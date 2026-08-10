import Image from 'next/image';

export default function TeamHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[45%] space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
              Our Dental Team
            </h1>
            <div className="w-16 h-1 bg-brand-red rounded-full"></div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Our team of experienced and compassionate dental professionals is dedicated to providing exceptional care in a comfortable and welcoming environment. Get to know the experts who will help you achieve a healthy, beautiful smile.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-[55%]">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
    </section>
  );
}
