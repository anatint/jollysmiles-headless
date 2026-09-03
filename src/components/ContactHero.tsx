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
  const rawHeading = data?.heroHeading || data?.heading || "Contact Us";
  const heading = rawHeading.includes('<') 
    ? rawHeading 
    : rawHeading.replace(/Contact Us/i, 'Contact <span class="text-brand-red">Us</span>');

  const subheading = cleanHtmlText(data?.heroSubheading || data?.subheading) || "We're here to help you smile brighter.";
  const description = cleanHtmlText(data?.heroDescription || data?.description) || "Have a question or ready to book your appointment? Reach out to us — we'd love to hear from you!";
  const image = getWixImageUrl(data?.heroImage, "/clinic-reception.png");

  return (
    <div className="relative bg-white overflow-hidden lg:min-h-[480px] flex items-center py-10 lg:py-16">
      
      {/* Background decorative swoosh */}
      <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full bg-gradient-to-br from-red-50/70 to-transparent -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-full h-full bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Text Column */}
          <div className="flex-1 max-w-xl">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight font-serif"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-4 font-serif">
              {subheading}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-900 font-semibold">Contact Us</span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
              <Image 
                src={image} 
                alt="Jolly Smiles Dental Clinic Reception" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
