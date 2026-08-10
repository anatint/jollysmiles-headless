import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Shield, Heart, Smile } from 'lucide-react';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Jolly Smiles Middletown",
  description: "Enhance the natural beauty of your smile with our advanced cosmetic dentistry services in Middletown, DE. Teeth whitening, porcelain veneers, and smile makeovers.",
};

const subServices = [
  {
    title: "Teeth Whitening",
    subtitle: "Brighten your smile safely and effectively.",
    description: "Brighten your smile with our safe and effective teeth whitening treatments. Over time, teeth can become stained from coffee, tea, wine, or everyday habits. Our professional whitening services lift away stains and restore your teeth to a whiter, more youthful appearance—all in a single visit!",
    tags: ["Safe & Effective", "Instant Results", "Long Lasting"],
    image: "/after-4.jpg", // Teeth whitening / bright smile photo placeholder
    alignLeft: true
  },
  {
    title: "Porcelain Veneers",
    subtitle: "Looking to correct chips, gaps, or uneven teeth?",
    description: "Our expert porcelain veneers dentist can transform your smile with thin, custom-made shells that cover imperfections and create a flawless, natural-looking result. Veneers are a minimally invasive way to dramatically improve your smile.",
    tags: ["Natural Looking", "Stain Resistant", "Durable & Strong"],
    image: "/after-3.jpg", // Veneers photo placeholder
    alignLeft: false
  },
  {
    title: "Smile Makeovers",
    subtitle: "Personalized treatment plans tailored to your unique goals.",
    description: "Our smile makeover clinic offers personalized treatment plans tailored to your unique goals. From whitening and veneers to bonding and contouring, we combine artistry and advanced dental techniques to create smiles that look beautiful and feel natural.",
    tags: ["Personalized Plans", "Complete Transformation", "Natural Results"],
    image: "/dr-roberts.png", // Smile makeover doctor/patient photo placeholder
    alignLeft: true
  },
  {
    title: "Cosmetic Dentist in Middletown",
    subtitle: "A trusted cosmetic dentist you can count on.",
    description: "As a trusted cosmetic dentist in Middletown, we're proud to help patients of all ages feel great about their smiles. Whether you want a subtle change or a complete transformation, our caring and experienced team will guide you through every step of your smile journey.",
    tags: ["Trusted Care", "All Ages Welcome", "Patient Focused"],
    image: "/clinic-reception.png", // Middletown clinic interior placeholder
    alignLeft: false
  }
];

export default function CosmeticDentistryPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                Cosmetic Dentistry
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                At Jolly Smiles, we believe your smile should reflect your confidence. Our cosmetic dentistry services are designed to enhance the natural beauty of your smile while maintaining optimal oral health.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Whether you're looking for a subtle touch-up or a complete smile makeover, our team is here to help you achieve the radiant smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all text-center">
                  Book Appointment
                </Link>
                <Link href="/contact" className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1">
                  Consult Our Experts <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-[55%]">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src="/procedures-hero.png" 
                  alt="Cosmetic Dentistry Patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white border-t border-gray-50 py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            OUR COSMETIC DENTISTRY CARE
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Enhancing Smiles. Transforming Lives.
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Our advanced cosmetic treatments are safe, effective, and customized to your unique needs. Explore our most popular cosmetic dentistry services below.
          </p>
        </div>
      </section>

      {/* Sub-Services List */}
      <section className="bg-white space-y-8 py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {subServices.map((sub, idx) => (
            <div 
              key={sub.title}
              className={`flex flex-col lg:flex-row items-center gap-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 ${
                sub.alignLeft ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-[45%]">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image 
                    src={sub.image} 
                    alt={sub.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-[55%] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    {sub.title}
                  </h3>
                </div>
                <h5 className="font-bold text-gray-800 text-sm">
                  {sub.subtitle}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sub.description}
                </p>

                <div className="w-full h-[1px] bg-gray-100 my-4"></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {sub.tags.map((tag, tagIdx) => (
                    <div key={tagIdx} className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red/60"></div>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <CTABanner />
    </div>
  );
}
