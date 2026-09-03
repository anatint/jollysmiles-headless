import type { Metadata } from "next";
import TeamHero from "@/components/about/TeamHero";
import TeamGrid from "@/components/about/TeamGrid";
import TeamCTA from "@/components/about/TeamCTA";
import { getCollectionItems } from "@/lib/wix";

function cleanHtmlText(text?: string | null): string {
  if (!text || typeof text !== 'string') return '';
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

async function getTeamSettingsData() {
  const possibleCollections = [
    'TeamMemberPageSettings',
    'Team member page settings',
    'TeamMemberPageSetting',
    'Team member page setting',
    'TeamMembersPageSettings',
    'Team members page settings',
    'TeamPageSettings',
    'Team page settings',
    'TeamPageSetting',
    'Team page setting',
    'TeamSettings',
    'Team settings',
    'TeamPage',
    'Team page',
    'Team'
  ];

  for (const col of possibleCollections) {
    try {
      const list = await getCollectionItems(col);
      if (list && list.length > 0) {
        return list;
      }
    } catch {
      // Continue searching
    }
  }

  return [];
}

import { buildPageMetadata } from "@/lib/seo";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const settingsList = await getTeamSettingsData();
  const settingsItem = settingsList[0] || {};
  return buildPageMetadata('/team', settingsItem);
}

export default async function TeamPage() {
  const [teamMembersData, pageSettingsData] = await Promise.all([
    getCollectionItems('TeamMembers'),
    getTeamSettingsData()
  ]);

  // If dedicated settings collection is present use it; otherwise check if teamMembersData[0] has settings
  const activeSettings = pageSettingsData.length > 0 ? pageSettingsData : teamMembersData;

  return (
    <main className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/team" />
      <TeamHero data={activeSettings} />
      <TeamGrid data={teamMembersData} settings={activeSettings} />
      <TeamCTA data={activeSettings} />
    </main>
  );
}

