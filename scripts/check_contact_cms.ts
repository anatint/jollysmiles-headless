import { getCollectionItems } from '../src/lib/wix';

async function checkCollections() {
  const names = [
    'Contact',
    'ContactSettings',
    'ContactPageSettings',
    'Contact Us',
    'ContactUs',
    'ContactPage',
    'Contacts',
    'SiteSettings',
    'ContactInfo',
    'Locations'
  ];

  for (const name of names) {
    try {
      const items = await getCollectionItems(name);
      console.log(`\n=== Collection: ${name} (Found ${items?.length || 0} items) ===`);
      if (items && items.length > 0) {
        console.log(JSON.stringify(items[0], null, 2));
      }
    } catch (e: any) {
      console.log(`Collection ${name}: ${e.message}`);
    }
  }
}

checkCollections();
