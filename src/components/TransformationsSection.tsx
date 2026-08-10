import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function TransformationsSection() {
  return (
    <div className="py-12 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-2">
              <span className="text-brand-red">Smile</span> Transformations
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Real patients. Real results.</p>
          </div>
          <a href="#" className="mt-6 md:mt-0 text-brand-red font-bold text-xs tracking-wider uppercase flex items-center hover:text-red-700 transition-colors">
            View More Smile Gallery <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-100 aspect-[4/3] border border-gray-200">
              <BeforeAfterSlider 
                beforeImage={item === 1 ? "/before-1.jpg" : item === 2 ? "/before-2.jpg" : item === 3 ? "/before-3.png" : item === 4 ? "/before-4-new.png" : null}
                afterImage={item === 1 ? "/after-1.jpg" : item === 2 ? "/after-2.jpg" : item === 3 ? "/after-3.jpg" : item === 4 ? "/after-4.jpg" : null}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
