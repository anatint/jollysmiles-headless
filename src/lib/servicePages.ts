import { getCollectionItems } from '@/lib/wix';
import type { ServiceDetailData, SubServiceItem, FAQItem } from '@/data/servicesData';

// The Wix CMS collection shown as "Services" has the collection ID `service-pages`.
export const SERVICE_PAGES_COLLECTION = 'service-pages';

/** Rich-text fields come back as HTML (`<p class="font_8">…</p>`); turn them into plain paragraphs. */
export function richTextToParagraphs(html: unknown): string[] {
  if (typeof html !== 'string') return [];
  return html
    .split(/<\/p>|<br\s*\/?>/i)
    .map((part) =>
      part
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .trim(),
    )
    .filter(Boolean);
}

const richTextToString = (html: unknown) => richTextToParagraphs(html).join(' ');

const asList = <T,>(value: unknown): T[] => {
  let list: unknown = value;
  if (typeof list === 'string') {
    try {
      list = JSON.parse(list);
    } catch {
      return [];
    }
  }
  return Array.isArray(list) ? (list as T[]) : [];
};

export async function getServicePages(): Promise<any[]> {
  return getCollectionItems(SERVICE_PAGES_COLLECTION);
}

/** Matches a record by its short slug (`serviceSlug`) or its path (`/services/<slug>`). */
export function findServicePage(records: any[], slug: string): any | undefined {
  return records.find((r) => r?.serviceSlug === slug || r?.slug === `/services/${slug}`);
}

/**
 * A record drives the page only when it carries the full card list (`offerings`).
 * Older rows that only hold the four `offeringN` fields keep using the local page data.
 */
export function isCompleteServicePage(record: any): boolean {
  return asList<unknown>(record?.offerings).length > 0;
}

/** Converts a `service-pages` record into the shape the service inner page template renders. */
export function servicePageToDetail(record: any, fallbackImage = '/dental-chair.png'): ServiceDetailData {
  const slug: string = record.serviceSlug || String(record.slug || '').replace(/^\/services\//, '');
  const title: string = record.title || record.heroHeading || 'Dental Service';

  const subServices: SubServiceItem[] = asList<any>(record.offerings)
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .map((o, i) => ({
      id: `${slug}-${i + 1}`,
      title: o.title || '',
      description: richTextToString(o.description),
      image: o.image || record.heroImage || fallbackImage,
      imageAlt: o.imageAlt || `${o.title || title} - Jolly Smiles`,
      iconType: 'tooth' as const,
      features: asList<string>(o.bullets).map((text) => ({ icon: 'check' as const, text })),
    }));

  const faqs: FAQItem[] = asList<any>(record.faqs)
    .filter((f) => f && f.active !== false && f.question)
    .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
    .map((f) => ({ question: f.question, answer: richTextToString(f.answer) }));

  const heroParagraphs = richTextToParagraphs(record.heroSubheading);

  return {
    slug,
    title,
    heroHeading: record.heroHeading || title,
    heroParagraphs,
    heroImage: record.heroImage || fallbackImage,
    heroImageAlt: `${title} at Jolly Smiles`,
    ctaPrimaryLabel: record.ctaPrimaryLabel ? String(record.ctaPrimaryLabel).toUpperCase() : undefined,
    ctaSecondaryLabel: record.ctaSecondaryLabel ? String(record.ctaSecondaryLabel).toUpperCase() : undefined,
    categoryEyebrow: record.eyebrow || record.offeringsEyebrow || `ABOUT ${title.toUpperCase()}`,
    categoryHeading: record.offeringsHeading || title,
    categoryDescription:
      richTextToString(record.offeringsIntro) || richTextToString(record.offeringsSectionSubtitle) || heroParagraphs[0] || '',
    subServices,
    faqs,
    metaTitle: record.metaTitle || title,
    metaDescription: richTextToString(record.metaDescription) || heroParagraphs[0] || '',
    canonical: `https://www.jollysmiles.com/${slug}`,
    sourceUrl: `https://www.jollysmiles.com/${slug}`,
  };
}
