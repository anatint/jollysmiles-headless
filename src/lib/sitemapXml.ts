import sitemapData from '@/data/liveSitemap.json';

type Entry = { loc: string; lastmod: string };
const data = sitemapData as { index: { name: string; lastmod: string }[]; sitemaps: Record<string, Entry[]> };

const ORIGIN = 'https://www.jollysmiles.com';
const esc = (s: string) => s.replace(/&/g, '&amp;');

const xmlResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });

/** /sitemap.xml: the same sitemap index as the live site. */
export function sitemapIndexResponse() {
  const items = data.index
    .map((e) => `<sitemap>\n<loc>${ORIGIN}/${e.name}.xml</loc>\n${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>\n` : ''}</sitemap>`)
    .join('\n');
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`);
}

/** /<name>.xml: one of the live sitemaps (same URLs and lastmod values). */
export function sitemapResponse(name: string) {
  const entries = data.sitemaps[name] ?? [];
  const items = entries
    .map((e) => `<url>\n<loc>${esc(e.loc)}</loc>\n${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>\n` : ''}</url>`)
    .join('\n');
  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`);
}
