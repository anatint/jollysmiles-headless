import { Camera, Scan, Target, Zap, Droplet, Activity, Sparkles, Layers } from 'lucide-react';
import Image from 'next/image';
import { getWixImageUrl } from '@/lib/wix';

const fallbackFeatures = [
  {
    title: 'Intra Oral Cameras',
    description: 'A small, pen-shaped device that our team may use to get a closer look at your oral health. These tiny cameras with LED lights capture sharp digital images of your teeth and gums, allowing the provider to show you any tooth or gum abnormalities.',
    icon: Camera,
    imagePlaceholder: 'Intra Oral Camera Image',
  },
  {
    title: 'Cone Beam CT',
    description: 'Dental cone beam computed tomography (CT) is a special type of X-ray equipment used when regular dental or facial X-rays are not sufficient. We use this technology to produce three dimensional (3D) images of your teeth, soft tissues, nerve pathways, and bone in a single scan. 3D models from these image scans allow us to design implant guides and place implants accurately.',
    icon: Scan,
    imagePlaceholder: 'Cone Beam CT Image',
  },
  {
    title: 'iTero element 5D',
    description: 'An intraoral scanner that digitally captures the structure of the teeth and gums using the latest optical technology. This technology can be used to show before and after simulation, early cavity detection in between teeth, and take impressions for records. With this we are able to send digital impression images to the lab for fabrication of crowns, bridges, night guards etc thus avoiding the discomfort of traditional messy impression tray and material in your mouth.',
    icon: Target,
    imagePlaceholder: 'iTero element 5D Image',
  },
  {
    title: 'Picasso Soft Tissue Laser',
    description: 'We can do Laser Bacterial Reduction treatment on the gum tissue around the tooth to reduce/eliminate bacteria in the blood, prevent cross-contamination of infections inside the mouth, and to kill periodontal disease bacteria. This can be used in conjunction with traditional methods of treating periodontal disease.',
    icon: Zap,
    imagePlaceholder: 'Picasso Soft Tissue Laser Image',
  },
  {
    title: 'iPlus Waterlase',
    description: 'With Waterlase we are able to successfully treat many common dental conditions in a gentle, minimally invasive way. Using laser energy and water spray, Waterlase can perform many procedures without a shot or a drill. Most procedures use minimal and in some cases even no anesthetic or drills to perform many routine dental procedures! Laser dentistry is used in a variety of procedures, including: treating hypersensitivity, treating ulcers and treating tooth decay.',
    icon: Droplet,
    imagePlaceholder: 'iPlus Waterlase Image',
  },
  {
    title: 'The Wand',
    description: 'Single Tooth Anesthesia- The Wand is a computer-controlled local anesthetic injection system that offers less pain and more controlled numbers for the area that is being treated. It helps conquer fear, pain, and anxiety for patients.',
    icon: Activity,
    imagePlaceholder: 'The Wand Image',
  }
];

function resolveIcon(iconName?: string, index: number = 0) {
  const iconStr = (iconName || '').toLowerCase();
  if (iconStr.includes('camera')) return Camera;
  if (iconStr.includes('scan') || iconStr.includes('ct')) return Scan;
  if (iconStr.includes('scanner') || iconStr.includes('target')) return Target;
  if (iconStr.includes('laser') || iconStr.includes('zap') || iconStr.includes('picasso')) return Zap;
  if (iconStr.includes('water') || iconStr.includes('droplet')) return Droplet;
  if (iconStr.includes('wand') || iconStr.includes('activity')) return Activity;
  
  const iconList = [Camera, Scan, Target, Zap, Droplet, Activity];
  return iconList[index % iconList.length] || Layers;
}

export default function TechnologyFeatureList({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});
  
  const introEyebrow = item.introEyebrow || 'CUTTING-EDGE TECHNOLOGY';
  const introHeading = item.introHeading || 'Innovation for Your Comfort and Confidence';
  const introDescription = item.introDescription || 'We invest in the latest dental technology to ensure more accurate diagnoses, safer treatments, and a better overall experience for our patients.';

  let displayFeatures: any[] = [];

  if (item.technology1Name) {
    for (let i = 1; i <= 10; i++) {
      const name = item[`technology${i}Name`];
      const desc = item[`technology${i}Description`];
      const img = item[`technology${i}Image`];
      const iconKey = item[`technology${i}Icon`];
      
      if (name) {
        displayFeatures.push({
          title: name,
          description: desc || '',
          icon: resolveIcon(iconKey, i - 1),
          image: getWixImageUrl(img, ''),
          imagePlaceholder: `${name} Image`
        });
      }
    }
  } else if (Array.isArray(data) && data.length > 0) {
    displayFeatures = data.filter((f: any) => f.active !== false).map((f: any, idx: number) => ({
      title: f.title || f.name,
      description: f.description || '',
      icon: resolveIcon(f.icon, idx),
      image: getWixImageUrl(f.image || f.photo, ''),
      imagePlaceholder: `${f.title || f.name} Image`
    }));
  } else {
    displayFeatures = fallbackFeatures;
  }

  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase mb-3">
            {introEyebrow}
          </h3>
          <h2 className="text-[35px] leading-tight font-extrabold text-slate-800 mb-6">
            {introHeading}
          </h2>
          <p className="text-gray-600 text-lg">
            {introDescription}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-12 md:space-y-16">
          {displayFeatures.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div 
                key={feature.title} 
                className={`flex flex-col md:flex-row items-center gap-10 lg:gap-12 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-2 relative overflow-hidden group">
                    {feature.image ? (
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover relative z-10 rounded-xl group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <span className="text-gray-400 font-medium z-10 text-center">{feature.imagePlaceholder}</span>
                    )}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  
                  <div 
                    className="text-gray-600 leading-relaxed text-base md:text-lg space-y-4" 
                    dangerouslySetInnerHTML={{ __html: feature.description || '' }} 
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
