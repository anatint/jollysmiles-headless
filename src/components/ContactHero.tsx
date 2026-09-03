import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getWixImageUrl } from '@/lib/wix';

interface ContactHeroProps {
  data?: {
    heading?: string;
    heroHeading?: string;
    subheading?: string;
    heroSubheading?: string;
    description?: string;
    heroDescription?: string;
    heroImage?: string;
    breadcrumb?: string;
  };
}

function cleanHtmlText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

export default function ContactHero({ data }: ContactHeroProps) {
  const eyebrow = cleanHtmlText(data?.subheading) || "GET IN TOUCH";
  const rawHeading = data?.heroHeading || data?.heading || "Contact Us";
  const heading = rawHeading.includes('<') 
    ? rawHeading 
    : rawHeading.replace(/Contact Us/i, 'Contact <span class="text-brand-red">Us</span>');

  const highlight = cleanHtmlText(data?.heroSubheading) || "We're here to help you smile brighter.";
  const description = cleanHtmlText(data?.heroDescription || data?.description) || "Have a question or ready to book your appointment? Reach out to us — we'd love to hear from you!";
  const bannerImage = getWixImageUrl(data?.heroImage, "/clinic-reception.png");

  return (
    <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden bg-gray-50 md:py-12 py-[50px]">
      
      {/* Full Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-gray-200" />
        {bannerImage ? (
          <Image 
            src={bannerImage} 
            alt="Jolly Smiles Contact Banner" 
            fill 
            className="object-cover object-center md:object-right"
            priority
          />
        ) : null}
      </div>

      {/* Smooth Gradient Overlay from left to right for crisp readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/85 to-transparent md:w-[70%] w-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-3/4 lg:w-1/2 space-y-5">
          
          <div className="inline-block">
            <h4 className="text-brand-red font-bold text-xs tracking-[0.2em] uppercase bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded">
              {eyebrow}
            </h4>
          </div>
          
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.08] tracking-tight font-serif"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          {highlight && (
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 font-serif leading-snug">
              {highlight}
            </h2>
          )}
          
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
            {description}
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center text-sm font-medium text-brand-red pt-2">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-semibold">Contact Us</span>
          </div>

        </div>
      </div>
      
    </section>
  );
}
