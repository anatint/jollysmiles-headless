import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "The team at Jolly Smiles changed my life! I finally have the smile I've always dreamed of.",
    name: "Sarah M.",
    image: "S"
  },
  {
    text: "Professional, gentle, and amazing results. I highly recommend Jolly Smiles to everyone!",
    name: "Michael R.",
    image: "M"
  },
  {
    text: "From the first visit to the final result, the experience was outstanding. Thank you!",
    name: "Jessica L.",
    image: "J"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="bg-white relative overflow-hidden py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[35px] font-extrabold text-gray-900 mb-2">
          <span className="text-brand-red">What</span> Our Patients Say
        </h2>
        <p className="text-gray-600 text-lg mb-8">Real stories from real patients</p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-brand-red hover:bg-gray-50 hover:scale-105 transition-all z-20" aria-label="Previous">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-brand-red hover:bg-gray-50 hover:scale-105 transition-all z-20" aria-label="Next">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-left flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 overflow-hidden relative">
                    <span className="absolute inset-0 flex items-center justify-center bg-gray-100 text-lg text-gray-600">{testimonial.image}</span>
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
