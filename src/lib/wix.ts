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
    // Wix returns only 50 items by default; blog posts need all of them.
    const response = await wixClient.items.query(collectionId).limit(1000).find();
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

// Every website form (appointment popup, contact page) saves into the same Wix CMS collection.
export const FORM_SUBMISSIONS_COLLECTION = 'FormSubmissions';

export type FormType = 'appointment-popup' | 'contact-page';

export interface FormSubmissionInput {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
}

export async function submitFormSubmission(formType: FormType, data: FormSubmissionInput) {
  const label = formType === 'appointment-popup' ? 'Appointment request' : 'Contact message';
  const payload = {
    title: `${label} - ${data.name || data.email || 'website visitor'}`,
    formType,
    status: 'new',
    sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
    ...data,
  };
  try {
    return await wixClient.items.insert(FORM_SUBMISSIONS_COLLECTION, payload);
  } catch (error) {
    console.error(`Error submitting ${formType} form:`, error);
    throw error;
  }
}

// Kept for existing callers: the popup form.
export const submitAppointment = (data: FormSubmissionInput) => submitFormSubmission('appointment-popup', data);

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

