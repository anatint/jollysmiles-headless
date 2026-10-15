// Snapshots the live site's sitemap index and its sitemaps (with lastmod) into src/data/liveSitemap.json.
// Run: node scripts/snapshot_live_sitemaps.mjs
import fs from 'fs';

const LIVE = 'https://www.jollysmiles.com';
const names = ['pages-sitemap', 'blog-posts-sitemap', 'blog-categories-sitemap', 'booking-services-sitemap'];
const parse = (xml, tag) =>
  [...xml.matchAll(new RegExp(String.raw`<${tag}>\s*<loc>([^<]+)</loc>\s*(?:<lastmod>([^<]+)</lastmod>)?`, 'g'))].map((m) => ({
    loc: m[1],
    lastmod: m[2] || '',
  }));

const index = await (await fetch(`${LIVE}/sitemap.xml`)).text();
const out = { index: parse(index, 'sitemap').map((e) => ({ name: new URL(e.loc).pathname.replace(/^\//, '').replace('.xml', ''), lastmod: e.lastmod })), sitemaps: {} };
for (const n of names) {
  const xml = await (await fetch(`${LIVE}/${n}.xml`)).text();
  out.sitemaps[n] = parse(xml, 'url');
  console.log(n, out.sitemaps[n].length);
}
fs.writeFileSync('src/data/liveSitemap.json', JSON.stringify(out, null, 1));
