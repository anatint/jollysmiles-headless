import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, SmilePlus, Sparkles, Shield, Star } from 'lucide-react';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Invisalign® Clear Aligners | Jolly Smiles Middletown",
  description: "Straighten your teeth comfortably and discreetly with Invisalign® at Jolly Smiles. Middletown's trusted Diamond Top 1% Invisalign provider.",
};

const subServices = [
  {
    title: "iTero® 3D Digital Scans",
    subtitle: "Preview your new smile in real-time.",
    description: "We use the state-of-the-art iTero® scanner to take highly accurate 3D digital impressions of your teeth—no messy, uncomfortable putty required. The built-in simulator allows you to visualize your treatment progression and preview your straight new smile before your treatment even begins!",
    tags: ["No Messy Putty", "100% Accurate", "Instant Smile Simulation"],
    image: "/dental-chair.png", // scan placeholder
    alignLeft: true
  },
  {
    title: "Custom Clear Aligners",
    subtitle: "Virtually invisible, comfortable, and removable.",
    description: "Your treatment consists of a series of custom-made, medical-grade plastic aligners that gently and gradually shift your teeth into place. Because they are removable, you can continue to eat all your favorite foods and easily brush and floss to maintain excellent oral hygiene.",
    tags: ["Removable Aligners", "Ultra-Comfortable", "Virtually Invisible"],
    image: "/after-2.jpg", // Invisalign aligners placeholder
    alignLeft: false
  },
  {
    title: "Invisalign® for Teens",
    subtitle: "Designed specifically for busy teenagers.",
    description: "Invisalign Teen® aligners are tailored for growing smiles. They feature blue compliance indicator dots that fade to clear as they are worn, helping parents and dentists ensure the aligners are worn for the recommended 22 hours per day, while allowing teens to play sports and instruments without worry.",
    tags: ["Compliance Indicators", "Fits Active Lifestyles", "Boosts Teen Confidence"],
    image: "/dr-roberts.png", // teen patient placeholder
    alignLeft: true
  },
  {
    title: "Vivera® Retainers",
    subtitle: "Protect your investment and lock in your new smile.",
    description: "Once your teeth are perfectly aligned, we provide custom Vivera® retainers. Made by the makers of Invisalign, Vivera retainers are 30% stronger than other retainers, helping you lock in your beautiful new smile and prevent teeth from shifting back over time.",
    tags: ["Extra Sturdy", "Comfortable Nightly Wear", "Prevents Shifting"],
    image: "/after-1.jpg", // retainer/smile placeholder
    alignLeft: false
  }
];

export default function InvisalignPage() {
  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                Invisalign® Aligners
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Transform your smile discreetly with Invisalign®, the world's most advanced clear aligner system. As Middletown's premier Diamond Top 1% Invisalign provider, we deliver exceptional, personalized results without the need for metal braces.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Enjoy a comfortable, removable, and virtually invisible orthodontic treatment tailored specifically to your smile goals and active lifestyle.
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
                  src="/after-2.jpg" 
                  alt="Invisalign Smile"
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
            SMILE ALIGNMENT
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Clear. Comfortable. Convenient.
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            Get the straight, healthy smile you've always wanted with our advanced clear aligner therapies. Explore our Invisalign offerings below.
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
                    <SmilePlus className="w-4 h-4" />
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
