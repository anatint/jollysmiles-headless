import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getWixImageUrl } from '@/lib/wix';

function cleanHtmlText(text?: string | null): string {
  if (!text || typeof text !== 'string') return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function TeamHero({ data }: { data?: any }) {
  const item = Array.isArray(data) ? (data[0] || {}) : (data || {});

  const rawHeading = cleanHtmlText(item.heroHeading || item.heading || item.title) || "Our Dental Team";
  const highlightedWord = cleanHtmlText(item.heroHighlightedWord || item.highlightedWord || item.heroHighlight);
  const description = cleanHtmlText(item.heroDescription || item.description || item.heroSubheading || item.subheading) || 
    "Our team of experienced and compassionate dental professionals is dedicated to providing exceptional care in a comfortable and welcoming environment. Get to know the experts who will help you achieve a healthy, beautiful smile.";
  const heroImage = getWixImageUrl(item.heroImage || item.bannerImage || item.image, '/team-banner.png');
  const heroImageAlt = cleanHtmlText(item.heroImageAlt || item.imageAlt) || "Jolly Smiles Dental Team";
  const eyebrow = cleanHtmlText(item.heroEyebrow || item.eyebrow || item.heroBadge);

  const renderHeading = () => {
    if (highlightedWord && rawHeading.toLowerCase().includes(highlightedWord.toLowerCase())) {
      const idx = rawHeading.toLowerCase().indexOf(highlightedWord.toLowerCase());
      const before = rawHeading.slice(0, idx);
      const match = rawHeading.slice(idx, idx + highlightedWord.length);
      const after = rawHeading.slice(idx + highlightedWord.length);
      return (
        <>
          {before}
          <span className="text-brand-red">{match}</span>
          {after}
        </>
      );
    }
    if (rawHeading.toLowerCase().includes('team')) {
      const parts = rawHeading.split(/(team)/i);
      return (
        <>
          {parts.map((part, i) => 
            part.toLowerCase() === 'team' ? (
              <span key={i} className="text-brand-red">{part}</span>
            ) : (
              part
            )
          )}
        </>
      );
    }
    return rawHeading;
  };

  return (
    <div className="relative bg-[#fff5f5] overflow-hidden py-[50px]">
      
      {/* Background swoosh */}
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-white rounded-t-[100%] scale-[1.5] origin-bottom shadow-[0_-10px_20px_rgba(255,200,200,0.2)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <div className="flex-1 max-w-xl">
            {eyebrow && (
              <div className="inline-block bg-red-100 text-brand-red text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
                {eyebrow}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-4 tracking-tight font-serif">
              {renderHeading()}
            </h1>
            
            <div className="w-16 h-1 bg-brand-red rounded-full mb-6"></div>

            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-700">Team</span>
            </div>
          </div>
          
          {/* Right Image Column */}
          <div className="flex-1 relative w-full max-w-lg aspect-square lg:aspect-[4/3] mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
              <Image 
                src={heroImage} 
                alt={heroImageAlt} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

