import type { NextConfig } from "next";

// Live jollysmiles.com serves service pages at the site root (e.g. /cosmetic-dentistry);
// the headless site serves them under /services/<slug>. These redirects keep the old URLs working.
// /invisalign and /lanap already exist as their own top-level pages and are intentionally not listed.
const liveServiceSlugs = [
  'cosmetic-dentistry', 'restorative-dentistry', 'preventive-dental-care', 'pediatric-dentistry',
  'emergency-dental-services', 'dental-implants', 'dental-implants-in-middletown',
  'affordable-dental-implants-in-middletown', 'tooth-implants', 'crowns-bridges', 'same-day-crowns',
  'same-day-dental-crowns-middletown', 'inlays-and-onlays', 'root-canal-treatment', 'missing-teeth',
  'veneers-laminates', 'veneers-and-laminates', 'teeth-whitening', 'teeth-whitening-in-middletown',
  'complete-smiles-makeover', 'uneven-smiles', 'full-mouth-reconstruction', 'throbbing-pain',
  'dentures', 'dental-bridge', 'dental-bonding', 'tooth-colored-fillings',
  'invisalign-for-adults-teens-in-middletown', 'invisalign-cost-delaware', 'invisalign-faq-delaware',
  'inisalign-treatment', 'lanap-faq-delaware', 'lanap-cost-delaware',
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...liveServiceSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
      // Live /general-dentist-1 (301 -> /general-dentist, 404 on the live site) is the "General Dentist" card.
      { source: '/general-dentist-1', destination: '/services/general-dentistry', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: '*.wixstatic.com',
      },
    ],
  },
};

export default nextConfig;
