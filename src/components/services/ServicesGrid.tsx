import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smile, ShieldCheck, Heart, Layers } from 'lucide-react';
import { getWixImageUrl } from '@/lib/wix';

const defaultServices = [
  {
    title: "General Dentist",
    description: "Comprehensive care for your oral health and beautiful smile.",
    image: "/after-1.jpg",
    link: "/services/general-dentistry"
  },
  {
    title: "Same Day Crowns",
    description: "Custom-made crowns in just one visit for a perfect fit.",
    image: "/before-1.jpg",
    link: "/services/general-dentistry"
  },
  {
    title: "Invisalign®",
    description: "Clear aligners for a straighter smile without metal braces.",
    image: "/after-2.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "6 Month Braces",
    description: "Fast, effective teeth straightening in as little as 6 months.",
    image: "/before-2.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "Veneers & Laminates",
    description: "Transform your smile with natural-looking veneers.",
    image: "/after-3.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth that looks and feels natural.",
    image: "/before-3.png",
    link: "/services/dental-implants"
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile safely and effectively.",
    image: "/after-4.jpg",
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "LANAP Treatment",
    description: "Advanced laser treatment to treat gum disease and save your teeth with minimal discomfort.",
    image: "/before-3.png",
    link: "/services/general-dentistry"
  }
];

function getServiceLink(title: string) {
  const t = title.toLowerCase();
  if (t.includes('implant')) return '/services/dental-implants';
  if (t.includes('whitening') || t.includes('veneer') || t.includes('invisalign') || t.includes('brace')) return '/services/cosmetic-dentistry';
  return '/services/general-dentistry';
}

export default function ServicesGrid({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const eyebrow = item.servicesEyebrow || 'OUR SERVICES';
  const heading = item.servicesHeading || 'Solutions for Every Smile';
  const subheading = item.servicesSubheading || 'From preventive care to advanced treatments, we offer personalized dental solutions for patients of all ages.';

  let displayServices: any[] = [];

  if (item.service1Name) {
    for (let i = 1; i <= 10; i++) {
      const name = item[`service${i}Name`];
      const desc = item[`service${i}Description`];
      const img = item[`service${i}Image`];
      if (name) {
        displayServices.push({
          title: name,
          description: desc || '',
          image: getWixImageUrl(img, `/after-${(i % 4) + 1}.jpg`),
          link: getServiceLink(name)
        });
      }
    }
  } else if (Array.isArray(data) && data.length > 0) {
    displayServices = data.filter((s: any) => s.active !== false).map((s: any) => ({
      title: s.title || s.name,
      description: s.description || s.heroDescription || '',
      image: getWixImageUrl(s.image || s.heroImage || s.photo, '/after-1.jpg'),
      link: s.slug ? `/services/${s.slug}` : getServiceLink(s.title || s.name)
    }));
  } else {
    displayServices = defaultServices;
  }

  return (
    <div className="bg-gray-50 py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
            {eyebrow}
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 mb-6 tracking-tight font-serif">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {displayServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full relative group overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-44 relative bg-gray-100 overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Circular Icon */}
              <div className="w-14 h-14 bg-red-50 border-4 border-white rounded-full flex items-center justify-center shadow-md absolute top-44 -mt-7 z-10 left-[50%] -translate-x-[50%] text-brand-red">
                <Sparkles className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="px-6 flex-grow flex flex-col items-center pt-10 pb-6 text-center">
                <h3 className="font-bold text-xl text-gray-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link 
                  href={service.link} 
                  className="text-brand-red font-bold text-xs uppercase tracking-wider flex items-center hover:text-brand-dark transition-colors group/link mt-auto pt-2"
                >
                  Learn More <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
