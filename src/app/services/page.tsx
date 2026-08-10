import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ApproachSection from '@/components/services/ApproachSection';
import ServicesStats from '@/components/services/ServicesStats';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Our Services | Jolly Smiles',
  description: 'We provide a full range of dental services using advanced technology and a gentle approach.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ApproachSection />
      <ServicesStats />
      <CTABanner />
    </main>
  );
}
