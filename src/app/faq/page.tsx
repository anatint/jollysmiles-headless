import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CTABanner from '@/components/CTABanner';
import { faqPage } from '@/data/staticPages';

export const revalidate = 0;

export function generateMetadata(): Metadata {
  return buildPageMetadata('/faq');
}

export default function FaqPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/faq" />
      <SimplePageHero title={faqPage.h1} />
      <ServiceFAQ eyebrow="FAQS" title="Questions and answers" faqs={faqPage.items} />
      <CTABanner />
    </div>
  );
}
