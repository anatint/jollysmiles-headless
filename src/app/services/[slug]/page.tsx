import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Shield, Heart, Smile } from 'lucide-react';
import { notFound } from 'next/navigation';
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import { getCollectionItems, getSingleItem } from "@/lib/wix";

export async function generateStaticParams() {
  const services = await getCollectionItems('Services');
  return services.map((service: any) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const services = await getCollectionItems('Services');
  const service = services.find((s: any) => s.slug === params.slug);

  if (!service) {
    return { title: 'Service Not Found | Jolly Smiles' };
  }

  return {
    title: service.metaTitle || `${service.title} | Jolly Smiles`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const services = await getCollectionItems('Services');
  const service = services.find((s: any) => s.slug === params.slug);

  if (!service || service.active === false) {
    notFound();
  }

  const allFeatures = await getCollectionItems('ServiceFeatures');
  const serviceFeatures = allFeatures
    .filter((f: any) => f.serviceSlug === params.slug && f.active !== false)
    .sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
    
  const contactData = await getSingleItem('ContactSettings');

  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-50/60 via-white to-white py-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
            
            {/* Left Text Column */}
            <div className="w-full lg:w-[45%] space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif leading-[1.1]">
                {service.title}
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full"></div>
              
              <div 
                className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl font-medium prose prose-sm prose-p:my-2"
                dangerouslySetInnerHTML={{ __html: service.heroDescription || '' }}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href={service.ctaPrimaryUrl || "/contact"} className="bg-brand-red hover:bg-brand-dark text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all text-center">
                  {service.ctaPrimaryLabel || "Book Appointment"}
                </Link>
                <Link href={service.ctaSecondaryUrl || "/contact"} className="bg-white border-2 border-brand-red text-brand-red hover:bg-red-50 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1">
                  {service.ctaSecondaryLabel || "Consult Our Experts"} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-[55%]">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src={service.slug === 'dental-implants' ? 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop' : (service.heroImage || "/procedures-hero.png")} 
                  alt={`${service.title} Patient`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white border-t border-gray-50 py-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h4 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
            {service.eyebrow || `OUR ${service.title} CARE`}
          </h4>
          <h2 className="text-[35px] font-extrabold text-gray-900 font-serif">
            {service.introHeading || "Enhancing Smiles. Transforming Lives."}
          </h2>
          <div className="w-12 h-0.5 bg-brand-red mx-auto"></div>
          <div 
            className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed pt-2"
            dangerouslySetInnerHTML={{ __html: service.introDescription || '' }}
          />
        </div>
      </section>

      {/* Sub-Services / Features List */}
      {serviceFeatures.length > 0 && (
        <section className="bg-white space-y-8 py-[25px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {serviceFeatures.map((sub: any, idx: number) => {
              const parsedTags = sub.tags && Array.isArray(sub.tags) ? sub.tags : 
                               (typeof sub.tags === 'string' ? JSON.parse(sub.tags || '[]') : []);

              return (
                <div 
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 ${
                    sub.alignLeft ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[45%]">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                      <Image 
                        src={sub.image || "/clinic-reception.png"} 
                        alt={sub.title || 'Feature'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-[55%] space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-serif">
                        {sub.title}
                      </h3>
                    </div>
                    <h5 className="font-bold text-gray-800 text-sm">
                      {sub.subtitle}
                    </h5>
                    <div 
                      className="text-gray-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: sub.description || '' }}
                    />

                    <div className="w-full h-[1px] bg-gray-100 my-4"></div>

                    {/* Tags */}
                    {parsedTags.length > 0 && (
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {parsedTags.map((tag: string, tagIdx: number) => (
                          <div key={tagIdx} className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red/60"></div>
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <FAQSection />

      <ContactFormSection data={contactData as any} />

      <CTABanner />
    </div>
  );
}
