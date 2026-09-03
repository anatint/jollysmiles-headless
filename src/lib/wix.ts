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

export function getWixImageUrl(url?: any, fallback: string = ''): string {
  if (!url) return fallback;

  if (typeof url === 'object') {
    url = url.url || url.src || url.uri || url.image || url.file_url || url.id || '';
  }

  if (typeof url !== 'string' || !url.trim()) return fallback;
  url = url.trim();

  // Already a full HTTP or relative URL
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
    return url;
  }

  // Handle wix:image://v1/<uri>/<filename>#originWidth=...
  if (url.startsWith('wix:image://v1/')) {
    const raw = url.replace('wix:image://v1/', '');
    const firstPart = raw.split('/')[0];
    const mediaId = firstPart.split('#')[0];
    return `https://static.wixstatic.com/media/${mediaId}`;
  }

  // Handle wix:document://v1/<uri>/...
  if (url.startsWith('wix:document://v1/')) {
    const raw = url.replace('wix:document://v1/', '');
    const firstPart = raw.split('/')[0];
    const mediaId = firstPart.split('#')[0];
    return `https://static.wixstatic.com/ugd/${mediaId}`;
  }

  // Handle bare Wix media IDs
  if (url.includes('~mv2') || /^[a-zA-Z0-9_-]+\.(jpg|jpeg|png|webp|svg|gif)/i.test(url)) {
    return `https://static.wixstatic.com/media/${url.split('#')[0]}`;
  }

  return url;
}

