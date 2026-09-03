import type { Metadata } from "next";
import AboutHero from '@/components/AboutHero';
import OurStory from '@/components/OurStory';
import OurValues from '@/components/OurValues';
import MeetTheTeam from '@/components/MeetTheTeam';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import { getCollectionItems } from "@/lib/wix";

import { buildPageMetadata } from "@/lib/seo";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export async function generateMetadata(): Promise<Metadata> {
  const aboutSettingsList = await getCollectionItems('AboutSettings');
  const aboutPageSettingsList = await getCollectionItems('AboutPageSettings');
  const root = aboutSettingsList[0] || aboutPageSettingsList[0] || {};
  return buildPageMetadata('/about', root);
}

export const revalidate = 0;

export default async function AboutPage() {
  const aboutSettingsList = await getCollectionItems('AboutSettings');
  const aboutPageSettingsList = await getCollectionItems('AboutPageSettings');
  const aboutList = await getCollectionItems('About');
  const aboutUsList = await getCollectionItems('AboutUs');

  const aboutData = aboutSettingsList.length > 0 
    ? aboutSettingsList 
    : (aboutPageSettingsList.length > 0 ? aboutPageSettingsList : (aboutList.length > 0 ? aboutList : aboutUsList));

  const testimonialsData = await getCollectionItems('Testimonials');
  const valuesData = await getCollectionItems('Values');
  const teamData = await getCollectionItems('TeamMembers');

  return (
    <div className="bg-white font-sans">
      <SchemaJsonLd path="/about" />
      <AboutHero data={aboutData} />
      <OurStory data={aboutData} />
      <OurValues data={valuesData.length > 0 ? valuesData : aboutData} />
      <MeetTheTeam data={teamData as any} settings={aboutData} />
      <WhyChooseUs data={aboutData} />
      <TestimonialsSection data={testimonialsData as any} />
      <CTABanner />
    </div>
  );
}
