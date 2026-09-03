import type { Metadata } from "next";
import ProceduresHero from "@/components/procedures/ProceduresHero";
import ProceduresList from "@/components/procedures/ProceduresList";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import { getCollectionItems } from "@/lib/wix";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const proceduresData = await getCollectionItems('Procedures');
  const root = proceduresData && proceduresData.length > 0 ? proceduresData[0] : null;

  return {
    title: root?.metaTitle || "Dental Procedures & Success Rates | Jolly Smiles",
    description: root?.metaDescription || "Explore our range of dental procedures, from crowns & bridges to cosmetic whitening, implants and veneers in Middletown, DE. Check out our proven success rates and stats.",
  };
}

export default async function ProceduresPage() {
  const proceduresData = await getCollectionItems('Procedures');
  const root = proceduresData && proceduresData.length > 0 ? proceduresData[0] : null;

  const faqsData = await getCollectionItems('FAQs');
  const mergedFaqs = (root?.faqs && root.faqs.length > 0)
    ? root.faqs
    : ((faqsData && faqsData.length > 0) ? faqsData : proceduresData);

  const faqHeading = root?.faqHeading || "Frequently Asked Questions";

  return (
    <div className="bg-white font-sans">
      <ProceduresHero data={proceduresData} />
      <ProceduresList data={proceduresData} />
      <FAQSection data={mergedFaqs} heading={faqHeading} />
      <CTABanner />
    </div>
  );
}
