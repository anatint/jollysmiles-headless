import type { Metadata } from "next";
import TeamHero from "@/components/about/TeamHero";
import TeamGrid from "@/components/about/TeamGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Dental Team | Jolly Smiles Dental Clinic",
  description: "Meet our dedicated dental experts at Jolly Smiles. Our highly skilled, compassionate dentists and hygienists provide personalized, gentle care in Middletown, DE.",
};

export default function TeamPage() {
  return (
    <div className="bg-white font-sans">
      <TeamHero />
      <TeamGrid />
      <CTABanner />
    </div>
  );
}
