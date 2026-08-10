import type { Metadata } from "next";
import ContactHero from '@/components/ContactHero';

export const metadata: Metadata = {
  title: "Contact Us | Book Your Appointment at Jolly Smiles",
  description: "Ready to perfect your smile? Contact Jolly Smiles in Middletown, DE today to book an appointment or ask any questions about our dental services.",
};
import ContactFormSection from '@/components/ContactFormSection';
import ContactMap from '@/components/ContactMap';
import CTABanner from '@/components/CTABanner';

export default function ContactPage() {
  return (
    <div className="bg-white font-sans">
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
      
      {/* Reused Homepage Component */}
      <CTABanner />
    </div>
  );
}
