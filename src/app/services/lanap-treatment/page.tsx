import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "LANAP® Laser Gum Treatment | Jolly Smiles Middletown",
  description: "Advanced, FDA-cleared LANAP® laser therapy to treat gum disease and regenerate tissue without scalpels or sutures in Middletown, DE.",
};

const subServices = [
  {
    title: "PerioLase® MVP-7 Laser Technology",
    subtitle: "Highly targeted laser energy that protects healthy gums.",
    description: "The LANAP® protocol uses the advanced PerioLase® MVP-7 laser, which operates at a specific wavelength that only targets and destroys diseased tissue and harmful bacteria. This means healthy gum tissue, bone, and roots are left completely untouched and unharmed.",
    tags: ["Minimally Invasive", "No Scalpel, No Cuts", "Highly Targeted Energy"],
    image: "/before-3.png", // LANAP treatment placeholder
    alignLeft: true
  },
  {
    title: "Gum and Bone Regeneration",
    subtitle: "Stimulating your body's natural healing response.",
    description: "LANAP® is the only FDA-cleared laser procedure clinically proven to regenerate lost gum tissue and bone structure around teeth. The laser energy creates a protective seal over the treated pockets, stimulating the body's natural healing process to regenerate bone and securely re-attach gums to teeth.",
    tags: ["Tissue Regeneration", "FDA Cleared", "Saves Natural Teeth"],
    image: "/after-3.jpg", // Gum healing placeholder
    alignLeft: false
  },
  {
    title: "Comfortable and Fast Recovery",
    subtitle: "Resume your normal day immediately after treatment.",
    description: "Because there are no cuts, scalpels, or sutures, LANAP® offers an incredibly comfortable experience compared to traditional gum surgery. Bleeding and swelling are minimal, and most patients are able to eat, speak, and return to their regular daily activities immediately after their visit.",
    tags: ["Quick Healing", "Virtually Pain-Free", "No Stitches Required"],
    image: "/dr-thompson.png", // recovery placeholder
    alignLeft: true
  },
  {
    title: "Advanced Periodontal Diagnostics",
    subtitle: "Thorough mapping of pocket depth for perfect treatment.",
    description: "Before performing LANAP, we conduct a detailed digital mapping of your gum line. By measuring pocket depth and assessing bone density, we tailor the laser settings to your exact needs, ensuring maximum effectiveness and restoring your long-term periodontal health.",
    tags: ["Precision Mapping", "Custom Laser Settings", "Long-Term Gum Health"],
    image: "/clinic-reception.png", // Middletown clinic interior placeholder
    alignLeft: false
  }
];

export default function LanapTreatmentPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                LANAP® Treatment
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Treat gum disease and save your teeth with LANAP® (Laser-Assisted New Attachment Procedure). This state-of-the-art, FDA-cleared laser therapy offers a gentle, effective alternative to traditional surgery without the need for scalpels, cuts, or stitches.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Restore the health of your gums, stimulate natural bone growth, and enjoy a fast, comfortable recovery with our advanced periodontal laser solutions.
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
                  alt="LANAP Laser Treatment"
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
      <section className="bg-white border-t border-gray-50 py-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            LASER PERIODONTICS
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Laser Precision. Gentle Care.
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Experience advanced treatment for periodontal disease designed to save your teeth and gums. Explore our LANAP offerings below.
          </p>
        </div>
      </section>

      {/* Sub-Services List */}
      <section className="bg-white space-y-8 py-[25px]">
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
