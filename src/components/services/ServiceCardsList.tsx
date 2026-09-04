import Image from 'next/image';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Shield, 
  Clock, 
  Gem, 
  Award, 
  Users, 
  Target, 
  Heart, 
  Zap, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import type { SubServiceItem, SubServiceFeature } from '@/data/servicesData';

interface ServiceCardsListProps {
  eyebrow: string;
  heading: string;
  description: string;
  subServices: SubServiceItem[];
}

function renderBadgeIcon(iconType: string) {
  switch (iconType) {
    case 'veneer':
    case 'gem':
      return <Gem className="w-6 h-6 text-brand-red" />;
    case 'smile':
    case 'aligner':
      return <Smile className="w-6 h-6 text-brand-red" />;
    case 'implant':
    case 'shield':
      return <ShieldCheck className="w-6 h-6 text-brand-red" />;
    case 'award':
      return <Award className="w-6 h-6 text-brand-red" />;
    case 'laser':
      return <Zap className="w-6 h-6 text-brand-red" />;
    case 'crown':
      return <Award className="w-6 h-6 text-brand-red" />;
    case 'clock':
      return <Clock className="w-6 h-6 text-brand-red" />;
    case 'tooth':
    default:
      return <Sparkles className="w-6 h-6 text-brand-red" />;
  }
}

function renderFeatureIcon(iconName: string) {
  const iconProps = { className: "w-4 h-4 text-brand-red shrink-0" };
  switch (iconName) {
    case 'shield':
      return <ShieldCheck {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'smile':
      return <Smile {...iconProps} />;
    case 'gem':
      return <Gem {...iconProps} />;
    case 'award':
      return <Award {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    case 'target':
      return <Target {...iconProps} />;
    case 'heart':
      return <Heart {...iconProps} />;
    case 'zap':
      return <Zap {...iconProps} />;
    case 'check':
      return <CheckCircle2 {...iconProps} />;
    case 'calendar':
      return <Calendar {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export default function ServiceCardsList({
  eyebrow,
  heading,
  description,
  subServices
}: ServiceCardsListProps) {
  return (
    <section id="service-procedures" className="bg-[#fbfbfb] py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            {eyebrow}
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-900 font-serif leading-tight">
            {heading}
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full mt-2 mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1 font-medium">
            {description}
          </p>
        </div>

        {/* Alternating Zig-Zag Sub-Service Cards */}
        <div className="space-y-8 lg:space-y-10">
          {subServices.map((sub, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={sub.id || idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    isImageLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Image Column */}
                  <div className="w-full lg:w-[46%] shrink-0">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 group">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-[54%] space-y-4">
                    
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-red-50/80 border border-brand-red/20 flex items-center justify-center shadow-xs">
                      {renderBadgeIcon(sub.iconType)}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif tracking-tight">
                      {sub.title}
                    </h3>

                    {/* Red Accent Underline */}
                    <div className="w-10 h-0.5 bg-brand-red rounded-full"></div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {sub.description}
                    </p>

                    {/* Features Badges / Pills */}
                    {sub.features && sub.features.length > 0 && (
                      <div className="pt-4 border-t border-gray-100 mt-6">
                        <div className="flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-semibold text-gray-700">
                          {sub.features.map((feat: SubServiceFeature, featIdx: number) => (
                            <div key={featIdx} className="flex items-center gap-2">
                              {renderFeatureIcon(feat.icon)}
                              <span>{feat.text}</span>
                              {featIdx < sub.features.length - 1 && (
                                <span className="hidden sm:inline text-gray-300 ml-4 font-normal">|</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
