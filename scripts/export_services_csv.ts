// Writes docs/services-cms-8-pages.csv: the 8 services-grid pages, ready for Wix CMS > Services > Import CSV.
// Run: npx tsx scripts/export_services_csv.ts
import fs from 'fs';
import { servicesData } from '../src/data/servicesData';

const SLUGS = [
  'general-dentistry', 'same-day-crowns', 'invisalign', '6-month-braces',
  'veneers-and-laminates', 'dental-implants', 'teeth-whitening', 'lanap-treatment',
];
const CARDS = 7;
const FAQS = 6;

const header = [
  'Title', 'Slug', 'Hero Heading', 'Hero Paragraph 1', 'Hero Paragraph 2', 'Hero Image', 'Hero Image Alt',
  'CTA Primary Label', 'CTA Secondary Label', 'Category Eyebrow', 'Category Heading', 'Category Description',
  'SEO Title', 'Meta Description', 'Canonical URL', 'Source URL', 'Placeholder Fields',
  ...Array.from({ length: CARDS }, (_, i) => [
    `Card ${i + 1} Title`, `Card ${i + 1} Description`, `Card ${i + 1} Image`, `Card ${i + 1} Image Alt`,
    `Card ${i + 1} Chip 1`, `Card ${i + 1} Chip 2`, `Card ${i + 1} Chip 3`,
  ]).flat(),
  ...Array.from({ length: FAQS }, (_, i) => [`FAQ ${i + 1} Question`, `FAQ ${i + 1} Answer`]).flat(),
  'All Cards (JSON)', 'All FAQs (JSON)',
];

const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const rows = SLUGS.map((slug) => {
  const p = servicesData[slug];
  const cells: unknown[] = [
    p.title, p.slug, p.heroHeading ?? p.title, p.heroParagraphs[0], p.heroParagraphs[1], p.heroImage, p.heroImageAlt,
    p.ctaPrimaryLabel ?? 'BOOK APPOINTMENT', p.ctaSecondaryLabel ?? 'CONSULT OUR EXPERTS',
    p.categoryEyebrow, p.categoryHeading, p.categoryDescription,
    p.metaTitle, p.metaDescription, p.canonical ?? `https://www.jollysmiles.com/${p.slug}`, p.sourceUrl ?? '',
    (p.placeholderFields ?? []).join(', '),
  ];
  for (let i = 0; i < CARDS; i++) {
    const c = p.subServices[i];
    cells.push(c?.title, c?.description, c?.image, c?.imageAlt, c?.features[0]?.text, c?.features[1]?.text, c?.features[2]?.text);
  }
  for (let i = 0; i < FAQS; i++) cells.push(p.faqs?.[i]?.question, p.faqs?.[i]?.answer);
  cells.push(JSON.stringify(p.subServices), JSON.stringify(p.faqs ?? []));
  return cells.map(esc).join(',');
});

fs.writeFileSync('docs/services-cms-8-pages.csv', '\uFEFF' + [header.map(esc).join(','), ...rows].join('\r\n'));
console.log(`${rows.length} pages x ${header.length} columns -> docs/services-cms-8-pages.csv`);
