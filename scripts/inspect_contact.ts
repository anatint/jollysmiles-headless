import { getSingleItem, getCollectionItems } from '../src/lib/wix';

async function check() {
  const contactSettings = await getSingleItem('ContactSettings');
  console.log('ContactSettings:', JSON.stringify(contactSettings, null, 2));

  const contactList = await getCollectionItems('ContactSettings');
  console.log('ContactSettings list count:', contactList.length);
}
check();
