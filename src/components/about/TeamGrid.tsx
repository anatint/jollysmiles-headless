import Image from 'next/image';
import { Award, Sparkles, Heart, Smile, Users, Shield, Activity, Layers, Droplet, Star, Baby, Grid, HeartHandshake } from 'lucide-react';
import { getWixImageUrl } from '@/lib/wix';

// Tooth custom icon component
function ToothIcon({ className = "w-4 h-4 text-brand-red" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5 1.5 8 0 2.5 1 4 2.5 4s2-2 2-4c0 2 .5 4 2 4s2.5-1.5 2.5-4c0-3 1.5-5 1.5-8 0-3.5-2.5-6-6-6z"/>
    </svg>
  );
}

const defaultDoctors = [
  {
    slug: "dr-anu-rajan",
    name: "Dr. Anu Rajan, DDS",
    role: "Founder & Cosmetic Dentist",
    image: "/dr-anu.png",
    bio: "With over 20 years of experience in cosmetic and restorative dentistry, Dr. Anu is passionate about creating beautiful smiles and building lasting relationships with patients.",
    badges: [
      { icon: Award, label: "20+ Years Experience" },
      { icon: ToothIcon, label: "Cosmetic Dentistry" },
      { icon: Layers, label: "Implants & Restorative" },
      { icon: Smile, label: "Smile Makeovers" }
    ]
  },
  {
    slug: "dr-michael-thompson",
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
    slug: "dr-sarah-martinez",
    name: "Dr. Sarah Martinez, DDS",
    role: "Cosmetic Dentist",
    image: "/dr-sarah.png",
    bio: "Dr. Sarah specializes in aesthetic dentistry, helping patients achieve natural-looking, confident smiles with the latest techniques.",
    badges: [
      { icon: Award, label: "12+ Years Experience" },
      { icon: ToothIcon, label: "Cosmetic Dentistry" },
      { icon: Layers, label: "Veneers & Bonding" },
      { icon: Droplet, label: "Teeth Whitening" }
    ]
  },
  {
    slug: "dr-james-wilson",
    name: "Dr. James Wilson, DDS",
    role: "Oral Surgeon",
    image: "/dr-james.png",
    bio: "Dr. James is an expert in oral surgery and dental implants, ensuring safe, precise treatments with a focus on patient comfort.",
    badges: [
      { icon: Award, label: "14+ Years Experience" },
      { icon: ToothIcon, label: "Dental Implants" },
      { icon: Activity, label: "Oral Surgery" },
      { icon: Shield, label: "Wisdom Teeth Removal" }
    ]
  },
  {
    slug: "dr-priya-shah",
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
    slug: "dr-emily-carter",
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

function getIconByName(iconStr: string) {
  const lower = (iconStr || '').toLowerCase();
  if (lower.includes('award') || lower.includes('experience') || lower.includes('year')) return Award;
  if (lower.includes('tooth') || lower.includes('cosmetic') || lower.includes('whiten')) return ToothIcon;
  if (lower.includes('implant') || lower.includes('veneer') || lower.includes('layer') || lower.includes('restorative')) return Layers;
  if (lower.includes('smile') || lower.includes('align') || lower.includes('makeover')) return Smile;
  if (lower.includes('family') || lower.includes('user')) return Users;
  if (lower.includes('prevent') || lower.includes('shield') || lower.includes('wisdom')) return Shield;
  if (lower.includes('surgery') || lower.includes('emergency') || lower.includes('activity')) return Activity;
  if (lower.includes('kid') || lower.includes('heart') || lower.includes('care')) return Heart;
  if (lower.includes('pediatric') || lower.includes('baby')) return Baby;
  if (lower.includes('invisalign') || lower.includes('star')) return Star;
  if (lower.includes('brace') || lower.includes('grid')) return Grid;
  return ToothIcon;
}

function cleanHtmlText(text?: string | null): string {
  if (!text || typeof text !== 'string') return '';
  return text
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function TeamGrid({ data, settings }: { data?: any[]; settings?: any }) {
  const settingsItem = Array.isArray(settings) ? (settings[0] || {}) : (settings || {});

  const introEyebrow = cleanHtmlText(settingsItem.introEyebrow || settingsItem.sectionLabel || settingsItem.teamEyebrow || settingsItem.eyebrow) || "EXPERT CARE. PERSONAL TOUCH.";
  const introHeading = cleanHtmlText(settingsItem.introHeading || settingsItem.sectionHeading || settingsItem.teamHeading || settingsItem.heading) || "Meet Our Dedicated Dental Experts";
  const introDescription = cleanHtmlText(settingsItem.introDescription || settingsItem.sectionDescription || settingsItem.teamDescription || settingsItem.description) || "Highly skilled, continuously trained, and truly passionate about your oral health — our team is here to provide the best care for you and your family.";

  let displayMembers: any[] = defaultDoctors;

  if (data && data.length > 0) {
    displayMembers = data.map((cmsItem, idx) => {
      const fallbackDoc = defaultDoctors[idx % defaultDoctors.length];
      const rawBio = cmsItem.bio || cmsItem.description;
      const cleanBio = rawBio ? cleanHtmlText(rawBio) : (fallbackDoc?.bio || '');

      let memberBadges: any[] = fallbackDoc?.badges || [];
      if (cmsItem.specialties) {
        try {
          const parsed = typeof cmsItem.specialties === 'string' ? JSON.parse(cmsItem.specialties) : cmsItem.specialties;
          if (Array.isArray(parsed) && parsed.length > 0) {
            memberBadges = parsed.map((b: any) => ({
              label: typeof b === 'string' ? b : (b.label || b.name || ''),
              icon: getIconByName(b.icon || b.label || '')
            }));
          }
        } catch (e) {
          // ignore
        }
      } else {
        const badgeKeys = ['badge1', 'badge2', 'badge3', 'badge4'];
        const individualBadges = badgeKeys
          .map(k => cleanHtmlText(cmsItem[k]))
          .filter(Boolean);
        if (individualBadges.length > 0) {
          memberBadges = individualBadges.map(label => ({
            label,
            icon: getIconByName(label)
          }));
        } else if (cmsItem.experience) {
          const expLabel = cleanHtmlText(cmsItem.experience);
          memberBadges = [
            { icon: Award, label: expLabel },
            ...(fallbackDoc?.badges?.slice(1) || [])
          ];
        }
      }

      return {
        name: cleanHtmlText(cmsItem.name) || fallbackDoc?.name || '',
        role: cleanHtmlText(cmsItem.role || cmsItem.title) || fallbackDoc?.role || '',
        image: getWixImageUrl(cmsItem.photo || cmsItem.image, fallbackDoc?.image || '/dr-anu.png'),
        bio: cleanBio,
        badges: memberBadges
      };
    });
  }

  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            {introEyebrow}
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif leading-tight">
            {introHeading}
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto my-3"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2 font-normal">
            {introDescription}
          </p>
        </div>

        {/* 3-Column Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden flex flex-col h-full group"
            >
              {/* Profile Image */}
              <div className="p-6 pb-0">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100/80">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-center mb-3 space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-bold text-xs uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow mb-6 font-normal">
                  {cleanHtmlText(member.bio)}
                </p>

                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-4 gap-2">
                  {member.badges.map((badge: any, bIdx: number) => {
                    const Icon = badge.icon;
                    return (
                      <div key={bIdx} className="flex flex-col items-center text-center space-y-1.5">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                          {Icon && <Icon className="w-4 h-4 text-brand-red" />}
                        </div>
                        <span className="text-[10px] leading-tight font-semibold text-gray-600 max-w-[70px]">
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
