import { Heart, Stethoscope, Smile } from 'lucide-react';

export default function ApproachSection() {
  return (
    <div className="bg-[#cc3939] rounded-t-3xl sm:rounded-t-[3rem] shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] mx-4 sm:mx-8 py-[25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h4 className="text-red-200 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4">
            Our Approach
          </h4>
          <h2 className="text-[35px] font-bold text-white mb-6">
            How We Care For You
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              We Care About You<br />And Your Smile
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              Your comfort and oral health are our top priorities.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Stethoscope className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Latest Technology For<br />Accurate Results
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              Advanced tools help us diagnose faster and treat better.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mb-6">
              <Smile className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Years of Experience<br />To Serve You
            </h3>
            <p className="text-red-100 text-sm leading-relaxed max-w-xs mx-auto">
              Our experienced team is dedicated to delivering excellent care.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
