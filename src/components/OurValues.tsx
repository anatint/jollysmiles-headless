import { Heart, ShieldCheck, Award, Users } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description: "Your comfort, health, and satisfaction are always our top priority."
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We believe in honest advice and transparent treatment."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We use the latest technology and techniques to ensure the best outcomes."
    },
    {
      icon: Users,
      title: "Compassion",
      description: "We treat every patient like family with kindness, respect, and care."
    }
  ];

  return (
    <div className="bg-white py-12 pb-8 lg:py-8 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-[35px] font-extrabold text-gray-900 mb-4">
            Our Core <span className="text-brand-red">Values</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            The principles that guide our practice and patient care every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-100">
                <val.icon className="w-8 h-8 text-brand-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
