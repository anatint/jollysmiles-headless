import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ApproachSection from '@/components/services/ApproachSection';
import ServicesStats from '@/components/services/ServicesStats';
import CTABanner from '@/components/CTABanner';
import ContactFormSection from '@/components/ContactFormSection';
import { getSingleItem } from '@/lib/wix';

export const metadata = {
  title: 'Our Services | Jolly Smiles',
  description: 'We provide a full range of dental services using advanced technology and a gentle approach.',
};

export const revalidate = 0;

export default async function ServicesPage() {
  const contactData = await getSingleItem('ContactSettings');

  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ApproachSection />
      <ServicesStats />
      <ContactFormSection data={contactData as any} />
      <CTABanner />
    </main>
  );
}
