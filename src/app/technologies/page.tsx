import type { Metadata } from 'next';
import TechnologiesHero from '@/components/technologies/TechnologiesHero';
import TechnologyFeatureList from '@/components/technologies/TechnologyFeatureList';
import TechnologiesCTA from '@/components/technologies/TechnologiesCTA';
import { getCollectionItems } from "@/lib/wix";
import { buildPageMetadata } from "@/lib/seo";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const techData = await getCollectionItems('TechnologyFeatures');
  const root = techData && techData.length > 0 ? techData[0] : null;
  return buildPageMetadata('/technologies', root);
}

export default async function TechnologiesPage() {
  const techData = await getCollectionItems('TechnologyFeatures');

  return (
    <>
      <SchemaJsonLd path="/technologies" />
      <TechnologiesHero data={techData} />
      <TechnologyFeatureList data={techData} />
      <TechnologiesCTA data={techData} />
    </>
  );
}
