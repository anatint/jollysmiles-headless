// Builds src/data/liveSeo.json (the exact SEO head data of every live URL) from a raw scrape of https://www.jollysmiles.com.
// Usage: node scripts/build_live_seo.mjs <raw-scrape.json>
// Placeholder values that the live site's structured data contains (template leftovers) are replaced with the real clinic
// details, and malformed JSON-LD blocks are dropped, so search engines never receive invalid data.
import fs from 'fs';

const src = process.argv[2];
if (!src) throw new Error('usage: node scripts/build_live_seo.mjs <raw-scrape.json>');
const raw = JSON.parse(fs.readFileSync(src, 'utf8'));

const FIXES = [
  ['+1-XXX-XXX-XXXX', '+1-302-378-3384'],
  ['YOUR EXACT ADDRESS', '102 Sleepy Hollow Drive, Suite 100'],
  ['"postalCode":"ZIP"', '"postalCode":"19709"'],
];

let dropped = 0;
let patched = 0;
const out = {};
for (const [path, rec] of Object.entries(raw)) {
  if (rec.status !== 200 || !rec.title) continue;
  const jsonLd = [];
  for (let block of rec.jsonLd || []) {
    let fixed = block;
    for (const [from, to] of FIXES) if (fixed.includes(from)) { fixed = fixed.split(from).join(to); patched++; }
    try { JSON.parse(fixed); jsonLd.push(fixed); } catch { dropped++; }
  }
  out[path] = {
    title: rec.title,
    ...(rec.description ? { description: rec.description } : {}),
    ...(rec.canonical ? { canonical: rec.canonical } : {}),
    ...(rec.robots ? { robots: rec.robots } : {}),
    ...(Object.keys(rec.og || {}).length ? { og: rec.og } : {}),
    ...(Object.keys(rec.twitter || {}).length ? { twitter: rec.twitter } : {}),
    ...(jsonLd.length ? { jsonLd } : {}),
  };
}
fs.writeFileSync('src/data/liveSeo.json', JSON.stringify(out));
console.log(`${Object.keys(out).length} URLs written; ${patched} placeholder values replaced; ${dropped} invalid JSON-LD blocks dropped`);
