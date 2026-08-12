"use client";

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

const fallbackTestimonials = [
  {
    text: "The team at Jolly Smiles changed my life! I finally have the smile I've always dreamed of.",
    name: "Sarah M.",
    image: "S",
    rating: 5
  },
  {
    text: "Professional, gentle, and amazing results. I highly recommend Jolly Smiles to everyone!",
    name: "Michael R.",
    image: "M",
    rating: 5
  },
  {
    text: "From the first visit to the final result, the experience was outstanding. Thank you!",
    name: "Jessica L.",
    image: "J",
    rating: 5
  }
];

export interface TestimonialData {
  quote?: string;
  name?: string;
  image?: string;
  rating?: number;
  order?: number;
  active?: boolean;
}

export default function TestimonialsSection({ data }: { data?: TestimonialData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayTestimonials = data && data.length > 0 
    ? data.filter(t => t.active !== false).map(t => {
        const cleanQuote = t.quote ? t.quote.replace(/<[^>]*>?/gm, '') : '';
        return {
          text: cleanQuote,
          name: t.name || 'Anonymous',
          image: t.name ? t.name.charAt(0).toUpperCase() : 'A',
          rating: t.rating || 5
        };
      })
    : fallbackTestimonials;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (card) {
        const scrollAmount = card.offsetWidth + 24; // Card width + gap
        const newScrollLeft = direction === 'left' 
          ? container.scrollLeft - scrollAmount 
          : container.scrollLeft + scrollAmount;
          
        container.scrollTo({ 
          left: newScrollLeft, 
          behavior: 'smooth' 
        });
      }
    }
  };

  useEffect(() => {
    // Auto-slide every 1 minute (60000ms)
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' }); 
        } else {
          scroll('right');
        }
      }
    }, 60000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white relative overflow-hidden py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[35px] font-extrabold text-gray-900 mb-2">
          <span className="text-brand-red">What</span> Our Patients Say
        </h2>
        <p className="text-gray-600 text-lg mb-8">Real stories from real patients</p>

        <div className="relative mt-8 group">
          {/* Navigation Arrows - Always visible on desktop and mobile */}
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scroll('left'); }}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-brand-red hover:bg-gray-50 hover:scale-110 transition-all z-50 cursor-pointer pointer-events-auto" 
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scroll('right'); }}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-brand-red hover:bg-gray-50 hover:scale-110 transition-all z-50 cursor-pointer pointer-events-auto" 
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 px-4 md:px-0 hide-scrollbar scroll-smooth relative z-30"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                // Exactly 2 boxes on desktop (50% minus half the gap), 1 box on mobile
                className="testimonial-card w-[85vw] flex-none snap-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-left flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-[#FFC107] text-[#FFC107]' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p 
                  className="text-gray-700 text-lg italic mb-8 flex-grow leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `&quot;${testimonial.text}&quot;` }}
                />
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 overflow-hidden relative">
                    <span className="absolute inset-0 flex items-center justify-center bg-gray-100 text-lg text-gray-600">{testimonial.image}</span>
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            @media (min-width: 768px) {
              .testimonial-card {
                min-width: calc(50% - 0.75rem) !important;
                flex-basis: calc(50% - 0.75rem) !important;
                width: calc(50% - 0.75rem) !important;
              }
            }
          `}} />
        </div>
      </div>
    </div>
  );
}
