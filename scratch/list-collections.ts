import { createClient, OAuthStrategy } from '@wix/sdk';
import { collections } from '@wix/data';

const wixClient = createClient({
  modules: { collections },
  auth: OAuthStrategy({
    clientId: '4c865c62-7a47-4524-b95a-59689fd6be6c',
  }),
});

async function main() {
  try {
    const res = await wixClient.collections.queryCollections().find();
    if (res.items && res.items.length > 0) {
      console.log('CMS Collections found:');
      res.items.forEach((col: any) => {
        console.log(`- ${col.displayName} (ID: ${col._id})`);
      });
    } else {
      console.log('No collections found.');
    }
  } catch (err) {
    console.error('Error fetching collections:', err);
  }
}

main();
