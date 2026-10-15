// Builds the Wix `service-pages` item payloads (field IDs match the collection) for the services-grid pages
// that are not in the collection yet. Run: npx tsx scripts/export_service_pages_items.ts <outfile.json>
import fs from 'fs';
import { servicesData } from '../src/data/servicesData';

const SLUGS = ['general-dentistry', 'same-day-crowns', '6-month-braces', 'veneers-and-laminates', 'dental-implants', 'teeth-whitening'];
const ALIGN = ['left', 'right', 'left', 'right'];

const items = SLUGS.map((slug) => {
  const p = servicesData[slug];
  const item: Record<string, unknown> = {
    title: p.title,
    slug: `/services/${p.slug}`,
    serviceSlug: p.slug,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    eyebrow: p.categoryEyebrow,
    heroHeading: p.heroHeading ?? p.title,
    heroSubheading: p.heroParagraphs.join('\n'),
    heroImage: p.heroImage,
    ctaPrimaryLabel: 'Book Appointment',
    ctaPrimaryAction: 'appointment-modal',
    ctaSecondaryLabel: 'Consult Our Experts',
    ctaSecondaryUrl: '/contact',
    offeringsEyebrow: p.categoryEyebrow,
    offeringsHeading: p.categoryHeading,
    offeringsIntro: p.categoryDescription,
    offeringsSectionSubtitle: p.categoryDescription,
    faqHeading: 'Frequently Asked Questions',
    experienceHeading: 'Experience the Difference',
    experienceSubheading: 'Advanced technology and a caring team for your best smile.',
    experiencePrimaryLabel: 'Book Appointment',
    experiencePrimaryAction: 'appointment-modal',
    experienceSecondaryLabel: 'Contact Us',
    experienceSecondaryUrl: '/contact',
    published: true,
    // every card (7) with its photo; the four offering1-4 fields below mirror the first four cards
    offerings: JSON.stringify(p.subServices.map((s, i) => ({
      title: s.title, description: s.description, image: s.image, imageAlt: s.imageAlt ?? s.title,
      bullets: s.features.map((f) => f.text), align: ALIGN[i % 2 === 0 ? 0 : 1], order: i + 1,
    })), null, 1),
    faqs: JSON.stringify((p.faqs ?? []).map((f, i) => ({ active: true, answer: f.answer, order: i + 1, question: f.question })), null, 1),
  };
  p.subServices.slice(0, 4).forEach((s, i) => {
    const n = i + 1;
    item[`offering${n}Title`] = s.title;
    item[`offering${n}Description`] = s.description;
    item[`offering${n}Align`] = ALIGN[i];
    item[`offering${n}Bullets`] = s.features.map((f) => f.text);
  });
  const flagged = p.placeholderFields ?? [];
  if (flagged.length) item.sections = JSON.stringify({ placeholderFields: flagged, note: 'Fields listed here hold placeholder content to be replaced.' });
  return item;
});

fs.writeFileSync(process.argv[2] ?? 'docs/service-pages-items.json', JSON.stringify(items, null, 1));
console.log(items.length, 'items,', Object.keys(items[0]).length, 'fields in first item');
