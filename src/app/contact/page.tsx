import type { Metadata } from "next";
// Force rebuild comment
import ContactHero from '@/components/ContactHero';
import ContactFormSection from '@/components/ContactFormSection';
import ContactMap from '@/components/ContactMap';
import CTABanner from '@/components/CTABanner';
import { getSingleItem } from '@/lib/wix';

import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const revalidate = 0; // Force dynamic rendering so CMS changes appear instantly

export async function generateMetadata(): Promise<Metadata> {
  const contactData = await getSingleItem('ContactSettings');
  return buildPageMetadata('/contact', contactData);
}

export default async function ContactPage() {
  // Fetch ContactSettings data from Wix CMS
  const contactData = await getSingleItem('ContactSettings');

  return (
    <div className="bg-white font-sans">
      <SchemaJsonLd path="/contact" />
      <ContactHero data={contactData as any} />
      <ContactFormSection data={contactData as any} />
      <ContactMap 
        address={contactData?.visitAddress || contactData?.address} 
        mapEmbedUrl={contactData?.mapEmbedUrl} 
        mapImage={contactData?.mapImage}
      />
      <CTABanner data={contactData} />
    </div>
  );
}
