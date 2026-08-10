import Image from 'next/image';

export default function TechnologiesHero() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden bg-gray-50 md:py-8 py-[50px]">
      
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder div while the image is missing, so it doesn't break */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-gray-200" />
        
        <Image 
          src="/technologies-banner.png" 
          alt="Advanced Technology Banner"
          fill
          className="object-cover object-center md:object-right"
          priority
        />
      </div>

      {/* Optional: Slight overlay on the left to ensure text readability on smaller screens if the image shifts */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent md:hidden pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
          <div className="inline-block">
            <h3 className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm px-2 py-1 rounded">
              Advanced Technology
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
            Advanced Technology
            <span className="block text-brand-red mt-2">Better Care, Healthier Smiles</span>
          </h1>
          
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            At Jolly Smiles, we combine advanced technology with clinical expertise to deliver precise diagnosis, comfortable treatments, and exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}
