import type { Metadata } from "next";
import ProceduresHero from "@/components/procedures/ProceduresHero";
import ProceduresList from "@/components/procedures/ProceduresList";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dental Procedures & Success Rates | Jolly Smiles",
  description: "Explore our range of dental procedures, from crowns & bridges to cosmetic whitening, implants and veneers in Middletown, DE. Check out our proven success rates and stats.",
};

import { getCollectionItems } from "@/lib/wix";

export const revalidate = 0;

export default async function ProceduresPage() {
  const proceduresData = await getCollectionItems('Procedures');
  const faqsData = await getCollectionItems('FAQs');

  const mergedFaqs = (faqsData && faqsData.length > 0) 
    ? faqsData 
    : (proceduresData[0]?.faqs || proceduresData);

  return (
    <div className="bg-white font-sans">
      <ProceduresHero data={proceduresData} />
      <ProceduresList data={proceduresData} />
      <FAQSection data={mergedFaqs} />
      <CTABanner />
    </div>
  );
}
