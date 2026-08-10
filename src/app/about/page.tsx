import type { Metadata } from "next";
import AboutHero from '@/components/AboutHero';

export const metadata: Metadata = {
  title: "About Us | Jolly Smiles Dental Clinic",
  description: "Learn about our team of expert dentists at Jolly Smiles. With over 50 years of combined experience, we provide exceptional, patient-first care in Delaware.",
};
import OurStory from '@/components/OurStory';
import OurValues from '@/components/OurValues';
import MeetTheTeam from '@/components/MeetTheTeam';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';

export default function AboutPage() {
  return (
    <div className="bg-white font-sans">
      {/* New About Us Components */}
      <AboutHero />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <WhyChooseUs />
      
      {/* Reused Homepage Components */}
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
