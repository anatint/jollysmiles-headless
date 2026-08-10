import { ArrowRight, Drill, Sparkles, SmilePlus, Stethoscope, BriefcaseMedical } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look, feel, and function naturally.",
    icon: <Drill className="w-10 h-10 text-brand-red" strokeWidth={1.5} />,
    link: "/services/dental-implants"
  },
  {
    title: "Invisalign®",
    description: "Straighten your teeth comfortably and confidently with clear aligners.",
    icon: <SmilePlus className="w-10 h-10 text-brand-red" strokeWidth={1.5} />,
    link: "/services/invisalign"
  },
  {
    title: "LANAP Treatment",
    description: "Advanced laser treatment to treat gum disease and save your teeth with minimal discomfort.",
    icon: <Sparkles className="w-10 h-10 text-brand-red" strokeWidth={1.5} />,
    link: "/services/lanap-treatment"
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, more radiant smile.",
    icon: <Stethoscope className="w-10 h-10 text-brand-red" strokeWidth={1.5} />,
    link: "/services/cosmetic-dentistry"
  },
  {
    title: "Emergency Care",
    description: "Same-day care for dental emergencies when you need us most.",
    icon: <BriefcaseMedical className="w-10 h-10 text-brand-red" strokeWidth={1.5} />,
    link: "/services/emergency-care"
  }
];

export default function ServicesSection() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[35px] font-extrabold text-gray-900 mb-4">
          Our <span className="text-brand-red">Dental</span> Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Comprehensive care for a healthy, confident smile
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 bg-red-50 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link} className="mt-auto text-brand-red font-bold text-xs tracking-wider uppercase flex items-center group-hover:text-red-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
