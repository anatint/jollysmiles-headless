// URL parity with https://www.jollysmiles.com: every service page keeps the exact root-level path it has on the live site.
// Only these slugs are served at /<slug>; anything else is a real 404 (no catch-all "soft 404" pages).

/** Root-level service slugs that exist on the live site (from its sitemap). */
export const LIVE_SERVICE_SLUGS = [
  'cosmetic-dentistry', 'restorative-dentistry', 'preventive-dental-care', 'pediatric-dentistry',
  'emergency-dental-services', 'dental-implants', 'dental-implants-in-middletown',
  'affordable-dental-implants-in-middletown', 'tooth-implants', 'crowns-bridges', 'same-day-crowns',
  'same-day-dental-crowns-middletown', 'inlays-and-onlays', 'root-canal-treatment', 'missing-teeth',
  'veneers-laminates', 'veneers-and-laminates', 'teeth-whitening', 'teeth-whitening-in-middletown',
  'complete-smiles-makeover', 'uneven-smiles', 'full-mouth-reconstruction', 'throbbing-pain',
  'dentures', 'dental-bridge', 'dental-bonding', 'tooth-colored-fillings',
  'invisalign-for-adults-teens-in-middletown', 'invisalign-cost-delaware', 'invisalign-faq-delaware',
  'inisalign-treatment', 'lanap-faq-delaware', 'lanap-cost-delaware',
] as const;

/** Pages that exist only in the headless site (card targets); not on the live site, so they add URLs rather than change any. */
export const HEADLESS_ONLY_SERVICE_SLUGS = ['general-dentistry', '6-month-braces'] as const;

export const SERVICE_ROUTE_SLUGS: string[] = [...LIVE_SERVICE_SLUGS, ...HEADLESS_ONLY_SERVICE_SLUGS];

/** Live paths served by their own route file but backed by a differently named page in the data. */
export const SERVICE_DATA_KEY: Record<string, string> = {
  invisalign: 'invisalign',
  lanap: 'lanap-treatment',
};

export function isServiceRouteSlug(slug: string): boolean {
  return SERVICE_ROUTE_SLUGS.includes(slug);
}
