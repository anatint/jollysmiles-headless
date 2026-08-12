import type { Metadata } from "next";
// Force rebuild comment
import ContactHero from '@/components/ContactHero';
import ContactFormSection from '@/components/ContactFormSection';
import ContactMap from '@/components/ContactMap';
import CTABanner from '@/components/CTABanner';
import { getSingleItem } from '@/lib/wix';

export const revalidate = 0; // Force dynamic rendering so CMS changes appear instantly

export const metadata: Metadata = {
  title: "Contact Us | Book Your Appointment at Jolly Smiles",
  description: "Ready to perfect your smile? Contact Jolly Smiles in Middletown, DE today to book an appointment or ask any questions about our dental services.",
};

export default async function ContactPage() {
  // Fetch ContactSettings data from Wix CMS
  const contactData = await getSingleItem('ContactSettings');

  return (
    <div className="bg-white font-sans">
      <ContactHero data={contactData as any} />
      <ContactFormSection data={contactData as any} />
      <ContactMap address={contactData?.address} />
      
      {/* Reused Homepage Component */}
      <CTABanner />
    </div>
  );
}
