import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "General Dentist",
    description: "Comprehensive care for your oral health and beautiful smile.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M11 20H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3l-2 3z"/></svg>
    ),
    image: "/after-1.jpg",
    link: "#"
  },
  {
    title: "Same Day Crowns",
    description: "Custom-made crowns in just one visit for a perfect fit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
    ),
    image: "/before-1.jpg",
    link: "#"
  },
  {
    title: "Invisalign®",
    description: "Clear aligners for a straighter smile without metal braces.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
    ),
    image: "/after-2.jpg",
    link: "#"
  },
  {
    title: "6 Month Braces",
    description: "Fast, effective teeth straightening in as little as 6 months.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>
    ),
    image: "/before-2.jpg",
    link: "#"
  },
  {
    title: "Veneers & Laminates",
    description: "Transform your smile with natural-looking veneers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M12 4v16"/></svg>
    ),
    image: "/after-3.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth that looks and feels natural.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    image: "/before-3.png",
    link: "/services/dental-implants"
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile safely and effectively.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
    ),
    image: "/after-4.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "Full Mouth Reconstruction",
    description: "Restore function, aesthetics, and confidence with a customized treatment plan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>
    ),
    image: "/before-4.jpg",
    link: "#"
  },
  {
    title: "LANAP Treatment",
    description: "Advanced laser treatment to treat gum disease and save your teeth with minimal discomfort.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M12 22v-4h3l-4-6-4 6h3v4h2z"/></svg>
    ),
    image: "/before-3.png",
    link: "#"
  }
];

export default function ServicesGrid() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-0">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
            Our Services
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 mb-6 tracking-tight">
            Solutions for Every Smile
          </h2>
          <p className="text-gray-600 text-lg">
            From preventive care to advanced treatments, we offer personalized dental solutions for patients of all ages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full relative"
            >
              {/* Image */}
              <div className="w-full h-40 relative rounded-t-2xl overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Circular Icon */}
              <div className="w-16 h-16 bg-red-50 border-4 border-white rounded-full flex items-center justify-center shadow-sm absolute top-40 -mt-8 z-10 left-[50%] -translate-x-[50%]">
                {service.icon}
              </div>

              {/* Content */}
              <div className="px-6 flex-grow flex flex-col items-center py-12 md:py-16">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow text-center">
                  {service.description}
                </p>
                <Link href={service.link} className="text-brand-red font-bold text-xs uppercase tracking-wider flex items-center hover:text-brand-dark transition-colors group mb-6">
                  Learn More <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
