import type { ServiceDetailData } from '../servicesData';

// PLACEHOLDER PAGES: these four URLs exist on jollysmiles.com (and in Google) but have no body content there,
// only an H1, SEO title and meta description. The title/meta/canonical below are the live values; the body text
// is neutral stand-in copy (no clinical claims) so the template stays complete. Replace it when real content exists.
// Each entry is flagged `placeholder: true` and listed in docs/service-pages-migration-report.md.
function placeholderPage(
  slug: string,
  title: string,
  metaTitle: string,
  metaDescription: string,
): ServiceDetailData {
  return {
    slug,
    title,
    heroHeading: title,
    heroParagraphs: [
      `Detailed information about ${title.toLowerCase()} at Jolly Smiles in Middletown, DE is being prepared.`,
      'Call our team or book an appointment to talk about your options.',
    ],
    heroImage: '/dental-chair.png',
    heroImageAlt: `${title} at Jolly Smiles`,
    ctaPrimaryLabel: 'BOOK APPOINTMENT',
    ctaSecondaryLabel: 'CONSULT OUR EXPERTS',
    categoryEyebrow: `ABOUT ${title.toUpperCase()}`,
    categoryHeading: title,
    categoryDescription: metaDescription,
    subServices: [
      {
        id: `${slug}-overview`,
        title: `${title} at Jolly Smiles`,
        description: `Placeholder: the full ${title.toLowerCase()} description will be added here. In the meantime, book a consultation to discuss ${title.toLowerCase()} with our team.`,
        image: '/dental-chair.png',
        imageAlt: `${title} at Jolly Smiles`,
        iconType: 'tooth',
        features: [],
      },
    ],
    metaTitle,
    metaDescription,
    canonical: `https://www.jollysmiles.com/${slug}`,
    sourceUrl: `https://www.jollysmiles.com/${slug}`,
    placeholder: true,
    placeholderFields: ['heroParagraphs', 'heroImage', 'subServices'],
  };
}

export const livePlaceholderServices: Record<string, ServiceDetailData> = {
  dentures: placeholderPage("dentures", "Dentures",
    "Dentures - Jolly Smiles Dental Clinic Cost, Treatment, Causes in Delaware | jolly smiles",
    "Jolly Smiles | Dentures, Call us to know about procedure, treatment, & cost. Give your teeth the best care!"),
  'dental-bridge': placeholderPage("dental-bridge", "Dental Bridge",
    "Dental Bridge - Cost, Treatment, Causes in Jolly Smiles Delaware",
    "Jolly Smiles | Dental Bridge, Call us to know about procedure, treatment, & cost. Give your teeth the best care!"),
  'dental-bonding': placeholderPage("dental-bonding", "Dental Bonding",
    "Dental Bonding - Cost, Treatment, Causes in Jolly Smiles Delaware",
    "Jolly Smiles | Dental Bonding, Call us to know about procedure, treatment, & cost. Give your teeth the best care!"),
  'tooth-colored-fillings': placeholderPage("tooth-colored-fillings", "Tooth Colored Fillings",
    "Tooth Colored Fillings - Cost, Treatment, Causes in Jolly smiles Delaware",
    "Jolly Smiles | Tooth Colored Fillings, Call us to know about procedure, treatment, & cost. Give your teeth the best care!"),
};
