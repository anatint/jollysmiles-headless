import Image from 'next/image';
import { Award, Sparkles, Heart, Smile, Users, Shield, Activity, Layers, Droplet, Star, Baby, Grid } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Anu Rajan, DDS",
    role: "Founder & Cosmetic Dentist",
    image: "/dr-anu.png",
    bio: "With over 20 years of experience in cosmetic and restorative dentistry, Dr. Anu is passionate about creating beautiful smiles and building lasting relationships with patients.",
    badges: [
      { icon: Award, label: "20+ Years Experience" },
      { icon: Sparkles, label: "Cosmetic Dentistry" },
      { icon: Layers, label: "Implants & Restorative" },
      { icon: Smile, label: "Smile Makeovers" }
    ]
  },
  {
    name: "Dr. Michael Thompson, DDS",
    role: "General & Family Dentist",
    image: "/dr-michael.png",
    bio: "Dr. Michael provides comprehensive dental care for patients of all ages, focusing on prevention, comfort, and long-term oral health.",
    badges: [
      { icon: Award, label: "15+ Years Experience" },
      { icon: Users, label: "Family Dentistry" },
      { icon: Shield, label: "Preventive Care" },
      { icon: Activity, label: "Emergency Care" }
    ]
  },
  {
    name: "Dr. Sarah Martinez, DDS",
    role: "Cosmetic Dentist",
    image: "/dr-sarah.png",
    bio: "Dr. Sarah specializes in aesthetic dentistry, helping patients achieve natural-looking, confident smiles with the latest techniques.",
    badges: [
      { icon: Award, label: "12+ Years Experience" },
      { icon: Sparkles, label: "Cosmetic Dentistry" },
      { icon: Layers, label: "Veneers & Bonding" },
      { icon: Droplet, label: "Teeth Whitening" }
    ]
  },
  {
    name: "Dr. James Wilson, DDS",
    role: "Oral Surgeon",
    image: "/dr-james.png",
    bio: "Dr. James is an expert in oral surgery and dental implants, ensuring safe, precise treatments with a focus on patient comfort.",
    badges: [
      { icon: Award, label: "14+ Years Experience" },
      { icon: Layers, label: "Dental Implants" },
      { icon: Activity, label: "Oral Surgery" },
      { icon: Shield, label: "Wisdom Teeth" }
    ]
  },
  {
    name: "Dr. Priya Shah, DDS",
    role: "Pediatric Dentist",
    image: "/dr-priya.png",
    bio: "Dr. Priya loves working with children and making dental visits fun, positive, and stress-free for kids and parents.",
    badges: [
      { icon: Award, label: "10+ Years Experience" },
      { icon: Baby, label: "Pediatric Dentistry" },
      { icon: Heart, label: "Kids Care" },
      { icon: Shield, label: "Preventive Care" }
    ]
  },
  {
    name: "Dr. Emily Carter, DDS",
    role: "Orthodontist",
    image: "/dr-emily.png",
    bio: "Dr. Emily specializes in braces and clear aligners, helping patients of all ages achieve perfectly aligned, healthy smiles.",
    badges: [
      { icon: Award, label: "11+ Years Experience" },
      { icon: Star, label: "Invisalign® Provider" },
      { icon: Grid, label: "Braces" },
      { icon: Smile, label: "Smile Alignment" }
    ]
  }
];

export default function TeamGrid() {
  return (
    <section className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            EXPERT CARE. PERSONAL TOUCH.
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Meet Our Dedicated Dental Experts
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2">
            Highly skilled, continuously trained, and truly passionate about your oral health — our team is here to provide the best care for you and your family.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Profile Image Container */}
              <div className="p-6 pb-0">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-50">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-center mb-4 space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-bold text-xs uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow mb-6">
                  {member.bio}
                </p>

                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

                {/* Sub-Badges */}
                <div className="grid grid-cols-4 gap-2">
                  {member.badges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center text-center space-y-1">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <span className="text-[9px] leading-tight font-semibold text-gray-500 max-w-[70px]">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
