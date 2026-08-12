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

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <JourneySection />
      <AboutSection />
      <TransformationsSection />
      <TestimonialsSection data={testimonialsData} />
      <BlogSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
