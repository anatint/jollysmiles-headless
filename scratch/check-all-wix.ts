import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || '4c865c62-7a47-4524-b95a-59689fd6be6c';

console.log(`Connecting to Wix with Client ID: ${clientId} ...\n`);

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId }),
});

const collectionsToCheck = [
  'SiteSettings',
  'Navigation',
  'Pages',
  'HomePageSettings',
  'Home page setting',
  'HomeHero',
  'HomeStats',
  'HomeAbout',
  'HomeServices',
  'HomeWhyChooseUs',
  'HomeJourney',
  'Testimonials',
  'Transformations',
  'BlogPosts',
  'Services',
  'ServiceFeatures',
  'Procedures',
  'Technologies',
  'TechnologyFeatures',
  'TeamMembers',
  'Values',
  'FAQs',
  'Faq',
  'FAQ',
  'Faqs',
  'ContactSettings',
  'Appointments'
];

async function checkAll() {
  const results: { exists: string[]; missing: string[]; errorDetails: Record<string, string> } = {
    exists: [],
    missing: [],
    errorDetails: {}
  };

  for (const col of collectionsToCheck) {
    try {
      const res = await wixClient.items.query(col).limit(5).find();
      console.log(`✅ [FOUND] '${col}' - ${res.items.length} items (total: ${res.totalCount ?? res.items.length})`);
      if (res.items.length > 0) {
        console.log(`   Sample item keys:`, Object.keys(res.items[0]));
      }
      results.exists.push(col);
    } catch (e: any) {
      console.log(`❌ [NOT FOUND / ERROR] '${col}': ${e.message}`);
      results.missing.push(col);
      results.errorDetails[col] = e.message;
    }
  }

  console.log('\n================ SUMMARY ================');
  console.log(`Accessible Collections (${results.exists.length}):`, results.exists);
  console.log(`Missing/Inaccessible Collections (${results.missing.length}):`, results.missing);
}

checkAll();
