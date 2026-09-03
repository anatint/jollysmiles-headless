import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ApproachSection from '@/components/services/ApproachSection';
import ServicesStats from '@/components/services/ServicesStats';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import ContactFormSection from '@/components/ContactFormSection';
import { getSingleItem, getCollectionItems } from '@/lib/wix';

import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const settingsList = await getCollectionItems('ServicesPageSettings');
  const altSettingsList = await getCollectionItems('ServicePageSettings');
  const item = settingsList[0] || altSettingsList[0] || {};
  return buildPageMetadata('/services', item);
}

export default async function ServicesPage() {
  const servicesPageSettings = await getCollectionItems('ServicesPageSettings');
  const servicePageSettings = await getCollectionItems('ServicePageSettings');
  const servicesSettings = await getCollectionItems('ServicesSettings');
  const serviceSettings = await getCollectionItems('ServiceSettings');

  const servicesData = servicesPageSettings.length > 0 
    ? servicesPageSettings 
    : (servicePageSettings.length > 0 ? servicePageSettings : (servicesSettings.length > 0 ? servicesSettings : serviceSettings));

  const contactData = await getSingleItem('ContactSettings');
  const testimonialsData = await getCollectionItems('Testimonials');

  return (
    <main className="min-h-screen bg-white">
      <SchemaJsonLd path="/services" />
      <ServicesHero data={servicesData} />
      <ServicesGrid data={servicesData} />
      <ApproachSection data={servicesData} />
      <ServicesStats data={servicesData} />
      <TestimonialsSection data={testimonialsData as any} />
      <ContactFormSection data={contactData as any} />
      <CTABanner />
    </main>
  );
}
