const { createClient, OAuthStrategy } = require('@wix/sdk');
const { items } = require('@wix/data');

const client = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: '4c865c62-7a47-4524-b95a-59689fd6be6c' })
});

const collectionsToCheck = [
  'HomePage', 'Home', 'AboutPage', 'About', 'AboutUs',
  'Services', 'ServicePage', 'ServicesPage',
  'Technologies', 'TechnologyFeatures', 'TechnologyPage', 'TechnologiesPage',
  'Testimonials', 'TeamMembers', 'Values', 'Procedures', 'BlogPosts',
  'SiteSettings', 'Contact', 'Reviews'
];

async function checkAll() {
  for (const name of collectionsToCheck) {
    try {
      const res = await client.items.query(name).find();
      console.log(`\n========================================`);
      console.log(`COLLECTION: ${name} -> ${res.items.length} items`);
      console.log(`========================================`);
      if (res.items.length > 0) {
        console.log('Fields:', Object.keys(res.items[0]));
        console.log('Sample Data:');
        console.dir(res.items[0], { depth: 3 });
      }
    } catch (e) {
      if (!e.message.includes('WDE0025')) {
        console.log(`Collection ${name}: ${e.message}`);
      } else {
        console.log(`Collection ${name}: NOT CREATED (WDE0025)`);
      }
    }
  }
}

checkAll();
