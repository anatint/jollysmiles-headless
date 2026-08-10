import { Check, ClipboardList, ScanSearch, Map, Smile } from 'lucide-react';

const steps = [
  {
    num: "1",
    title: "Consultation",
    description: "We listen to your concerns and goals",
    icon: <ClipboardList className="w-8 h-8 text-brand-red" />
  },
  {
    num: "2",
    title: "Diagnosis",
    description: "Advanced 3D scanning and digital imaging",
    icon: <ScanSearch className="w-8 h-8 text-brand-red" />
  },
  {
    num: "3",
    title: "Treatment Plan",
    description: "Personalized plan just for you",
    icon: <Map className="w-8 h-8 text-brand-red" />
  },
  {
    num: "4",
    title: "Smile Transformation",
    description: "Achieve the healthy, beautiful smile you deserve",
    icon: <Smile className="w-8 h-8 text-brand-red" />
  }
];

export default function JourneySection() {
  return (
    <div className="bg-gray-50 border-t border-gray-100 py-[25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[35px] font-extrabold text-gray-900 mb-4">
          Your <span className="text-brand-red">Smile</span> Journey
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          A simple, comfortable process designed around you
        </p>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-md mb-6 relative group-hover:border-red-100 transition-colors">
                  {step.icon}
                  <div className="absolute -bottom-3 w-8 h-8 bg-brand-red text-white font-bold rounded-full flex items-center justify-center border-2 border-white text-sm shadow-sm">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
