import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import CTABanner from '@/components/CTABanner';
import { beforeAfterPage } from '@/data/staticPages';

export const revalidate = 0;

export function generateMetadata(): Metadata {
  return buildPageMetadata('/before-and-after');
}

const pairs = [
  { before: '/before-1.jpg', after: '/after-1.jpg' },
  { before: '/before-2.jpg', after: '/after-2.jpg' },
  { before: '/before-3.png', after: '/after-3.jpg' },
  { before: '/before-4.jpg', after: '/after-4.jpg' },
];

export default function BeforeAfterPage() {
  const [intro, result, ...rest] = beforeAfterPage.headings;
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/before-and-after" />
      <SimplePageHero title={beforeAfterPage.h1} />
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            {intro && <h3 className="text-brand-red font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">{intro}</h3>}
            {result && <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">{result}</h3>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pairs.map((p, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <BeforeAfterSlider beforeImage={p.before} afterImage={p.after} />
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            {rest.map((h) => (
              <h3 key={h} className="text-lg font-bold text-gray-900 font-serif">{h}</h3>
            ))}
            {beforeAfterPage.bullets.length > 0 && <p className="font-semibold">We provide:</p>}
            <ul className="list-disc pl-6 space-y-2">
              {beforeAfterPage.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
