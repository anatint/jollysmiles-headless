import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '4c865c62-7a47-4524-b95a-59689fd6be6c',
  }),
});

async function checkCollections() {
  console.log("Testing Wix Connection and Collections...\n");
  
  // Checking a few of the collections we defined in the YAML files
  const collectionsToCheck = ['Technologies', 'Pages', 'SiteSettings', 'Navigation'];
  
  for (const collectionId of collectionsToCheck) {
    try {
      console.log(`Checking collection: ${collectionId}...`);
      const response = await wixClient.items.query(collectionId).limit(1).find();
      console.log(`✅ Collection '${collectionId}' is CREATED and ACCESSIBLE. (Found ${response.items.length} items)\n`);
    } catch (error: any) {
      console.log(`❌ Collection '${collectionId}' is NOT CREATED or NOT ACCESSIBLE.`);
      console.log(`   Error: ${error.message}\n`);
    }
  }
}

checkCollections();
