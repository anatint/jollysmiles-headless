import { Sparkles, Layers, Award, Heart, Smile, Shield, Activity, Users, Star } from 'lucide-react';

const procedures = [
  {
    title: "Crowns & Bridges",
    description: "Restore damaged or missing teeth for a strong, natural smile.",
    icon: Layers,
    link: "#"
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile safely and effectively.",
    icon: Sparkles,
    link: "#"
  },
  {
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth.",
    icon: Layers,
    link: "#"
  },
  {
    title: "Veneers & Laminates",
    description: "Transform your smile with natural-looking veneers.",
    icon: Sparkles,
    link: "#"
  },
  {
    title: "Root Canal Treatment",
    description: "Save your natural tooth and relieve pain.",
    icon: Shield,
    link: "#"
  },
  {
    title: "Inlays & Onlays",
    description: "Conservative restorations for decayed teeth.",
    icon: Layers,
    link: "#"
  },
  {
    title: "TMJ Treatment",
    description: "Relief from jaw pain, tension and headaches.",
    icon: Activity,
    link: "#"
  },
  {
    title: "Dental Sealants",
    description: "Protect teeth from cavities and decay.",
    icon: Shield,
    link: "#"
  },
  {
    title: "Smile Gallery",
    description: "See real patient transformations.",
    icon: Smile,
    link: "#"
  }
];

const skills = [
  { name: "DENTAL SURGERY SKILLS", percentage: 95 },
  { name: "DENTAL COSMETIC SKILLS", percentage: 92 },
  { name: "TEETH WHITENING SKILLS", percentage: 83 }
];

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: Award, value: "50+", label: "Years of Experience" },
  { icon: Heart, value: "98%", label: "Patient Satisfaction" },
  { icon: Star, value: "5-Star", label: "Google Ratings" }
];

export default function ProceduresList() {
  return (
    <section className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            OUR EXPERTISE
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            Procedures and Effectiveness
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-2">
            We offer a complete range of dental procedures with proven results and patient satisfaction.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Procedures list (span 7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 pl-2 border-l-4 border-brand-red">
              Our Dental Procedures
            </h3>
            <div className="space-y-3">
              {procedures.map((proc, idx) => {
                const Icon = proc.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">
                          {proc.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          {proc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skills & Stats (span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] p-6 sm:p-8 space-y-8">
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 pl-2 border-l-4 border-brand-red">
                  Our Success Rate*
                </h3>
                
                {/* Progress bars */}
                <div className="space-y-6">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-gray-800 tracking-wider">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-red rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 text-gray-500 text-xs mt-6 pt-4 border-t border-gray-100">
                  <Award className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>Based on patient outcomes and satisfaction reports.</span>
                </div>
              </div>

              {/* Stats Footer inside Card */}
              <div className="bg-red-50/50 rounded-xl p-4 sm:p-6 grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center p-2">
                      <StatIcon className="w-5 h-5 text-brand-red mb-2" />
                      <span className="text-lg font-black text-brand-red font-serif leading-none">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mt-1">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
