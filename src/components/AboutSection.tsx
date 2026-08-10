import { ArrowRight, Check } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-white overflow-hidden py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl relative">
              {/* Placeholder for Team Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center text-gray-500 font-medium">
                [ Team Image Placeholder ]
              </div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100 max-w-xs">
              <div className="w-14 h-14 rounded-full border-2 border-brand-red flex items-center justify-center text-brand-red flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-2xl text-gray-900">50+</div>
                <div className="text-sm text-gray-600 font-medium leading-tight">Years of Combined Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <div className="inline-block border border-gray-200 text-gray-600 font-bold text-xs px-4 py-1.5 uppercase tracking-wider mb-6 rounded-full">
              About Jolly Smiles
            </div>
            <h2 className="text-[35px] font-extrabold text-gray-900 leading-[1.1] mb-6">
              Compassionate Care. <br/>
              Exceptional Results.
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              For over 50 years, Jolly Smiles has been Delaware's trusted partner in dental health. Our experienced team combines advanced technology with personalized care to deliver exceptional results in a comfortable environment.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "State-of-the-art technology",
                "Comfortable, patient-first approach",
                "Most insurances accepted",
                "Convenient scheduling"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-brand-red" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center text-sm">
              Meet Our Doctors <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
