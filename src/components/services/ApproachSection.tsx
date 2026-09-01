import { Heart, Stethoscope, Smile, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function ApproachSection({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const eyebrow = item.approachEyebrow || 'OUR APPROACH';
  const heading = item.approachHeading || 'How We Care For You';

  const item1Title = item.approachItem1Title || item.approachItem1 || 'We Care About You And Your Smile';
  const item1Desc = item.approachItem1Description || 'Your comfort and oral health are our top priorities.';

  const item2Title = item.approachItem2Title || item.approachItem2 || 'Latest Technology For Accurate Results';
  const item2Desc = item.approachItem2Description || 'Advanced tools help us diagnose faster and treat better.';

  const item3Title = item.approachItem3Title || item.approachItem3 || 'Years of Experience To Serve You';
  const item3Desc = item.approachItem3Description || 'Our experienced team is dedicated to delivering excellent care.';

  return (
    <div className="bg-[#cc3939] rounded-t-3xl sm:rounded-t-[3rem] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] mx-4 sm:mx-8 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h4 className="text-red-200 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            {eyebrow}
          </h4>
          <h2 className="text-[35px] font-bold text-white mb-0 font-serif">
            {heading}
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 text-center">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 shadow-sm">
              <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif">
              {item1Title}
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              {item1Desc}
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 shadow-sm">
              <Stethoscope className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif">
              {item2Title}
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              {item2Desc}
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 shadow-sm">
              <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-serif">
              {item3Title}
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              {item3Desc}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
