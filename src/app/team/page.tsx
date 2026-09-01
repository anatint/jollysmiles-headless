import type { Metadata } from "next";
import TeamHero from "@/components/about/TeamHero";
import TeamGrid from "@/components/about/TeamGrid";
import TeamCTA from "@/components/about/TeamCTA";
import { getCollectionItems } from "@/lib/wix";

export const metadata: Metadata = {
  title: "Our Dental Team | Jolly Smiles Dental Clinic",
  description: "Meet our dedicated dental experts at Jolly Smiles. Our highly skilled, compassionate dentists and hygienists provide personalized, gentle care in Middletown, DE.",
};

export const revalidate = 0;

export default async function TeamPage() {
  const teamData = await getCollectionItems('TeamMembers');

  return (
    <main className="bg-white font-sans min-h-screen">
      <TeamHero />
      <TeamGrid data={teamData} />
      <TeamCTA />
    </main>
  );
}
