import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BriefcaseMedical, AlertCircle, Phone } from 'lucide-react';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Emergency Dental Care | Jolly Smiles Middletown",
  description: "Same-day emergency dental care in Middletown, DE. Relieve tooth pain, treat broken teeth, or fix lost crowns. Call 302 DR-TEETH immediately.",
};

const subServices = [
  {
    title: "Severe Toothache Relief",
    subtitle: "Quick pain relief for tooth infections or abscesses.",
    description: "A sudden, throbbing toothache is often a sign of deep decay or infection requiring immediate attention. Our emergency team is equipped to diagnose the root cause of your pain instantly and perform emergency treatments (such as root canal therapy or drainage) to alleviate discomfort and save your tooth.",
    tags: ["Immediate Pain Relief", "Digital Diagnostics", "Emergency Root Canals"],
    image: "/dr-anderson.png", // emergency doctor placeholder
    alignLeft: true
  },
  {
    title: "Chipped, Cracked, or Broken Teeth",
    subtitle: "Rapid restorations to prevent further tooth damage.",
    description: "Accidents happen, but a chipped or cracked tooth should be examined immediately to protect the inner nerve. We offer same-day dental bonding or temporary crowns to seal the tooth structure, prevent infection, and restore your chewing ability and natural appearance.",
    tags: ["Same-Day Bonding", "Protects Tooth Nerves", "Restores Appearance"],
    image: "/after-3.jpg", // broken tooth restore placeholder
    alignLeft: false
  },
  {
    title: "Knocked-Out Tooth Replantation",
    subtitle: "Urgent care to save your natural knocked-out tooth.",
    description: "If your tooth has been knocked out, time is critical. If we treat you within one hour of the accident, there is a very high success rate of replanting and saving your natural tooth. Call us immediately, keep the tooth moist (in milk or saliva), and get to our clinic as quickly as possible.",
    tags: ["Time-Sensitive Care", "Urgent Replantation", "Saves Natural Roots"],
    image: "/before-3.png", // knocked out tooth placeholder
    alignLeft: true
  },
  {
    title: "Lost Fillings or Crowns",
    subtitle: "Protecting exposed, highly sensitive tooth structure.",
    description: "A lost filling or crown exposes the sensitive inner parts of your tooth to bacteria and extreme temperatures, causing sharp pain. We provide prompt emergency appointments to recement your existing crown or place a durable new restoration to protect your tooth.",
    tags: ["Quick Replacement", "Shields Exposed Dentin", "Prevents Tooth Decay"],
    image: "/clinic-reception.png", // Middletown clinic interior placeholder
    alignLeft: false
  }
];

export default function EmergencyCarePage() {
  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-brand-red text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                Same-Day Emergency Appointments
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                Emergency Care
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                If you are experiencing severe dental pain, a knocked-out tooth, or a broken crown, don't wait! We offer same-day emergency dental appointments to get you out of pain and restore your smile as quickly as possible.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Our compassionate emergency team is standing by to provide gentle, quick care when you need us most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="tel:3023783384" className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 animate-bounce" />
                  Call 302 DR-TEETH
                </a>
                <Link href="/contact" className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1">
                  View Location Map <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-[55%]">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src="/clinic-reception.png" 
                  alt="Emergency Dental Treatment"
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
      <section className="py-12 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            URGENT CARE
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Relieving Pain. Restoring Health.
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            We provide fast, comprehensive care for dental emergencies to prevent further tooth damage or infection. Explore our emergency treatments below.
          </p>
        </div>
      </section>

      {/* Sub-Services List */}
      <section className="py-8 bg-white space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
                    <BriefcaseMedical className="w-4 h-4" />
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
