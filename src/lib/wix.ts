import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

export const WIX_CLIENT_ID = 
  process.env.NEXT_PUBLIC_WIX_CLIENT_ID || '4c865c62-7a47-4524-b95a-59689fd6be6c';

export const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: WIX_CLIENT_ID,
  }),
});

export async function getCollectionItems(collectionId: string) {
  try {
    const response = await wixClient.items.query(collectionId).find();
    return response.items;
  } catch (error) {
    console.error(`Error fetching collection ${collectionId}:`, error);
    return [];
  }
}

export async function getSingleItem(collectionId: string) {
  const itemsList = await getCollectionItems(collectionId);
  return itemsList[0] || null;
}

export async function submitAppointment(data: any) {
  try {
    const response = await wixClient.items.insert('Appointments', data);
    return response;
  } catch (error) {
    console.error('Error submitting appointment:', error);
    throw error;
  }
}
