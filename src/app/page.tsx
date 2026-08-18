import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Jolly Smiles | Top Rated Dentists in Delaware",
  description: "Experience compassionate, advanced dental care at Jolly Smiles in Delaware. From Invisalign to Smile Makeovers, we help you transform your smile and your life.",
};
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import TransformationsSection from "@/components/TransformationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { getCollectionItems } from "@/lib/wix";

export const revalidate = 0;

export default async function Home() {
  const testimonialsData = await getCollectionItems('Testimonials');
  const servicesData = await getCollectionItems('Services');
  const heroData = await getCollectionItems('HomeHero');
  const homePageSettingsData = await getCollectionItems('HomePageSettings');
  const homePageSettingAltData = await getCollectionItems('Home page setting');
  const statsData = await getCollectionItems('HomeStats');
  const aboutData = await getCollectionItems('HomeAbout');
  const journeyData = await getCollectionItems('HomeJourney');
  const transformationsData = await getCollectionItems('Transformations');
  const faqsData = await getCollectionItems('FAQs');
  const faqAlt1 = await getCollectionItems('FAQ');
  const faqAlt2 = await getCollectionItems('Faqs');
  const faqAlt3 = await getCollectionItems('Faq');
  const blogData = await getCollectionItems('BlogPosts');

  // Extract FAQs if they are defined inside Home page setting
  const homeSettingsFaqs = homePageSettingsData[0]?.faqs || homePageSettingAltData[0]?.faqs || homePageSettingsData[0]?.faq || homePageSettingAltData[0]?.faq;
  let parsedHomeSettingsFaqs: any[] = [];
  if (homeSettingsFaqs) {
    parsedHomeSettingsFaqs = typeof homeSettingsFaqs === 'string' ? JSON.parse(homeSettingsFaqs) : homeSettingsFaqs;
  }

  const mergedFaqsData = parsedHomeSettingsFaqs.length > 0 
    ? parsedHomeSettingsFaqs 
    : (faqsData.length > 0 ? faqsData : (faqAlt1.length > 0 ? faqAlt1 : (faqAlt2.length > 0 ? faqAlt2 : faqAlt3)));

  // Merge home page settings data if present
  const mergedHeroData = homePageSettingsData.length > 0 ? homePageSettingsData : (homePageSettingAltData.length > 0 ? homePageSettingAltData : heroData);
  const mergedAboutData = homePageSettingsData.length > 0 ? homePageSettingsData : (homePageSettingAltData.length > 0 ? homePageSettingAltData : aboutData);

  return (
    <>
      <HeroSection heroData={mergedHeroData} statsData={statsData} />
      <ServicesSection data={servicesData as any} />
      <JourneySection data={journeyData} />
      <AboutSection data={mergedAboutData} />
      <TransformationsSection data={transformationsData} />
      <TestimonialsSection data={testimonialsData as any} />
      <BlogSection data={blogData} />
      <FAQSection data={mergedFaqsData.length > 0 ? mergedFaqsData : mergedHeroData} />
      <CTABanner />
    </>
  );
}
