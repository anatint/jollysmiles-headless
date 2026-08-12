import type { Metadata } from "next";
import TeamHero from "@/components/about/TeamHero";
import TeamGrid from "@/components/about/TeamGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Dental Team | Jolly Smiles Dental Clinic",
  description: "Meet our dedicated dental experts at Jolly Smiles. Our highly skilled, compassionate dentists and hygienists provide personalized, gentle care in Middletown, DE.",
};

import { getCollectionItems } from "@/lib/wix";

export const revalidate = 0;

export default async function TeamPage() {
  const teamData = await getCollectionItems('TeamMembers');

  return (
    <div className="bg-white font-sans">
      <TeamHero />
      <TeamGrid data={teamData} />
      <CTABanner />
    </div>
  );
}
