import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Drill, Shield, Heart, Smile } from 'lucide-react';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Dental Implants | Jolly Smiles Middletown",
  description: "Permanent replacement for missing teeth that looks and feels natural. Explore our single tooth implants, implant-supported bridges, and All-on-4® full arch restorations.",
};

const subServices = [
  {
    title: "Single Tooth Implants",
    subtitle: "Replace a single missing tooth seamlessly.",
    description: "Replace a single missing tooth with a custom dental implant that blends in perfectly with your surrounding natural teeth. A medical-grade titanium post is placed in the jawbone, acting as a root, which is then topped with a custom-fabricated porcelain crown. It restores full biting strength and stops neighboring teeth from shifting.",
    tags: ["Looks & Feels Natural", "Bridges-Free", "Preserves Bone Structure"],
    image: "/before-3.png", // Dental Implants placeholder
    alignLeft: true
  },
  {
    title: "Implant-Supported Bridges",
    subtitle: "Sturdy replacement for multiple adjacent missing teeth.",
    description: "For multiple adjacent missing teeth, an implant-supported bridge provides a secure, permanent solution without relying on adjacent healthy teeth for support. This technique uses titanium posts at each end of the gap to anchor a beautiful porcelain bridge, restoring full aesthetic and structural function.",
    tags: ["High Durability", "Preserves Adjacent Teeth", "Cost-Effective for Multiple Teeth"],
    image: "/after-3.jpg", // Dental bridge placeholder
    alignLeft: false
  },
  {
    title: "All-on-4® Dental Implants",
    subtitle: "Complete full-arch restoration in a single day.",
    description: "All-on-4® is a revolutionary procedure that replaces a full arch of missing teeth (top or bottom) using only four strategically placed implants. It provides a secure, permanent set of teeth that does not slip or click like traditional dentures, giving you back 100% of your chewing capability and confidence.",
    tags: ["Immediate Function", "No Adhesives Needed", "Full Arch Restoration"],
    image: "/after-1.jpg", // Smile transformation placeholder
    alignLeft: true
  },
  {
    title: "Bone Grafting & Sinus Lifts",
    subtitle: "Preparing your jaw for successful implant placement.",
    description: "Successful dental implants require a strong foundation of jawbone. If you have experienced bone loss due to tooth loss or gum disease, our team can perform bone grafting or sinus lifts to rebuild bone volume and ensure the long-term success of your dental implants.",
    tags: ["Advanced Technology", "Ensures Implant Success", "Safe & Comfortable"],
    image: "/clinic-reception.png", // Dental clinic interior placeholder
    alignLeft: false
  }
];

export default function DentalImplantsPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[15px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                Dental Implants
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Restore the functionality and beauty of your smile with permanent dental implants. Our state-of-the-art implant solutions look, feel, and function exactly like natural teeth, giving you a lifetime of confident smiles.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                From a single missing tooth to complete full-mouth restorations, we use advanced technology and gentle techniques to ensure optimal comfort and exceptional results.
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
                  src="/before-3.png" 
                  alt="Dental Implants"
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
      <section className="bg-white border-t border-gray-50 py-[15px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            OUR IMPLANT DENTISTRY CARE
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Permanent Solutions. Natural Results.
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            We offer advanced dental implant procedures customized to restore the structure, health, and appearance of your teeth. Explore our services below.
          </p>
        </div>
      </section>

      {/* Sub-Services List */}
      <section className="bg-white space-y-8 py-[15px]">
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
                    <Drill className="w-4 h-4" />
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
