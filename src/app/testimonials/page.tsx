import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import CTABanner from '@/components/CTABanner';
import { testimonialsPage } from '@/data/staticPages';

export const revalidate = 0;

export function generateMetadata(): Metadata {
  return buildPageMetadata('/testimonials');
}

export default function TestimonialsPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/testimonials" />
      <SimplePageHero title={testimonialsPage.h1} />
      {testimonialsPage.groups.map((group, gi) => (
        <section key={gi} className="py-12 lg:py-16 border-t border-gray-100 first:border-t-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-2">
              {group.eyebrow && (
                <h3 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">{group.eyebrow}</h3>
              )}
              {group.heading && (
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">{group.heading}</h3>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                  <h2 className="mt-auto font-bold text-gray-900 font-serif text-base">{review.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CTABanner />
    </div>
  );
}
