import TechnologiesHero from '@/components/technologies/TechnologiesHero';
import TechnologyFeatureList from '@/components/technologies/TechnologyFeatureList';
import TechnologiesCTA from '@/components/technologies/TechnologiesCTA';

export const metadata = {
  title: 'Advanced Technology | Jolly Smiles',
  description: 'At Jolly Smiles, we combine advanced technology with clinical expertise to deliver precise diagnosis, comfortable treatments, and exceptional results.',
};

export default function TechnologiesPage() {
  return (
    <>
      <TechnologiesHero />
      <TechnologyFeatureList />
      <TechnologiesCTA />
    </>
  );
}
