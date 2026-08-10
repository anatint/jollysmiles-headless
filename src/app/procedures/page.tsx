import type { Metadata } from "next";
import ProceduresHero from "@/components/procedures/ProceduresHero";
import ProceduresList from "@/components/procedures/ProceduresList";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Dental Procedures & Success Rates | Jolly Smiles",
  description: "Explore our range of dental procedures, from crowns & bridges to cosmetic whitening, implants and veneers in Middletown, DE. Check out our proven success rates and stats.",
};

export default function ProceduresPage() {
  return (
    <div className="bg-white font-sans">
      <ProceduresHero />
      <ProceduresList />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
