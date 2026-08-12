import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function TransformationsSection({ data }: { data?: any[] }) {
  const dynamicTransformations = data && data.length > 0 
    ? data.filter(t => t.active !== false).sort((a, b) => (a.order || 0) - (b.order || 0))
    : [
        { beforeImage: "/before-1.jpg", afterImage: "/after-1.jpg" },
        { beforeImage: "/before-2.jpg", afterImage: "/after-2.jpg" },
        { beforeImage: "/before-3.png", afterImage: "/after-3.jpg" },
        { beforeImage: "/before-4-new.png", afterImage: "/after-4.jpg" }
      ];

  return (
    <div className="bg-gray-50 border-t border-gray-100 py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-2">
              <span className="text-brand-red">Smile</span> Transformations
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Real patients. Real results.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dynamicTransformations.slice(0, 4).map((item, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-100 aspect-[4/3] border border-gray-200">
              <BeforeAfterSlider 
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
