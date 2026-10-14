// Writes docs/services-cms-import.json: one record per service page, ready to import into the Wix `Services` collection.
// Run: npx tsx scripts/export_services_cms.ts
import fs from 'fs';
import { servicesData } from '../src/data/servicesData';

const records = Object.entries(servicesData)
  .filter(([key, page]) => page.slug === key) // skip keyword aliases that point at another page's data
  .map(([, p]) => ({
    slug: p.slug,
    title: p.title,
    heroHeading: p.heroHeading ?? p.title,
    heroParagraphs: p.heroParagraphs,
    heroImage: p.heroImage,
    heroImageAlt: p.heroImageAlt ?? '',
    ctaPrimaryLabel: p.ctaPrimaryLabel ?? 'BOOK APPOINTMENT',
    ctaSecondaryLabel: p.ctaSecondaryLabel ?? 'CONSULT OUR EXPERTS',
    categoryEyebrow: p.categoryEyebrow,
    categoryHeading: p.categoryHeading,
    categoryDescription: p.categoryDescription,
    subServices: JSON.stringify(p.subServices),
    faqs: JSON.stringify(p.faqs ?? []),
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    canonical: p.canonical ?? `https://www.jollysmiles.com/${p.slug}`,
    sourceUrl: p.sourceUrl ?? '',
    placeholder: p.placeholder === true,
    // Fields holding stand-in content to replace later (no live image => local /dental-chair.png is used).
    placeholderFields: Array.from(new Set([
      ...(p.placeholderFields ?? []),
      ...(p.heroImage.startsWith('/') ? ['heroImage'] : []),
      ...(p.subServices.some((s) => s.image.startsWith('/')) ? ['subServices.image'] : []),
    ])),
  }));

fs.writeFileSync('docs/services-cms-import.json', JSON.stringify(records, null, 2));
console.log(`${records.length} records -> docs/services-cms-import.json (${records.filter((r) => r.placeholder).length} placeholder pages, ${records.filter((r) => r.placeholderFields.length).length} with placeholder content)`);
