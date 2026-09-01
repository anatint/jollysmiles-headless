import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getWixImageUrl } from '@/lib/wix';

export default function MeetTheTeam({ data, settings }: { data?: any[]; settings?: any }) {
  const settingsItem = Array.isArray(settings) ? (settings[0] || {}) : (settings || {});

  const eyebrow = settingsItem.teamEyebrow || 'Our Team';
  const heading = settingsItem.teamHeading || 'Meet the Experts Behind Your Smile';
  const subheading = settingsItem.teamSubheading || 'Our skilled dentists and caring staff are dedicated to providing you with the best possible dental care.';
  const buttonLabel = settingsItem.teamButtonLabel || 'Meet Our Team';

  let team: any[] = [];

  if (Array.isArray(data) && data.length > 0) {
    team = data.filter((m: any) => m.active !== false).slice(0, 4).map((m: any) => ({
      name: m.name,
      role: m.role || m.title || "Dental Specialist",
      image: getWixImageUrl(m.photo || m.image, "/dr-anderson.png")
    }));
  } else if (settingsItem.teamMember1Name) {
    for (let i = 1; i <= 4; i++) {
      const name = settingsItem[`teamMember${i}Name`];
      const role = settingsItem[`teamMember${i}Role`];
      const img = settingsItem[`teamMember${i}Image`];
      if (name) {
        team.push({
          name,
          role: role || 'Dental Specialist',
          image: getWixImageUrl(img, '/dr-anderson.png')
        });
      }
    }
  } else {
    team = [
      {
        name: "Dr. Michael Anderson",
        role: "Lead Dentist",
        image: "/dr-anderson.png"
      },
      {
        name: "Dr. Sarah Thompson",
        role: "Cosmetic Dentist",
        image: "/dr-thompson.png"
      },
      {
        name: "Dr. David Miller",
        role: "Orthodontist",
        image: "/dr-miller.png"
      },
      {
        name: "Dr. Emily Roberts",
        role: "Pediatric Dentist",
        image: "/dr-roberts.png"
      }
    ];
  }

  return (
    <div className="bg-gray-50 py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h4 className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4">
            {eyebrow}
          </h4>
          <h2 className="text-[35px] font-bold text-gray-900 mb-6 font-serif">
            {heading.includes('Smile') ? (
              <>Meet the Experts Behind <span className="text-brand-red">Your Smile</span></>
            ) : (
              heading
            )}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white aspect-[3/4]">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent flex justify-center pb-4">
                <div className="bg-white rounded-xl py-3 px-5 text-center w-[90%] shadow-lg transform transition-transform group-hover:-translate-y-2">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-xs">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/team"
            className="bg-brand-red hover:bg-brand-dark text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center group"
          >
            {buttonLabel} 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
