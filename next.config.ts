import type { NextConfig } from "next";

// The headless site keeps the exact URL structure of https://www.jollysmiles.com so rankings are not affected
// (service pages at the site root, /about-us, /our-team, /contact-us, /news, /post/<slug>, ...).
// The redirects below only send the older headless-only URLs to their live equivalents.
const oldServiceAliases: Record<string, string> = {
  'lanap-treatment': '/lanap',
  lanap: '/lanap',
  'laser-periodontics': '/lanap',
  'laser-gum-treatment': '/lanap',
  'laser-dentistry': '/lanap',
  orthodontics: '/invisalign',
  'emergency-care': '/emergency-dental-services',
  'emergency-dentistry': '/emergency-dental-services',
  'porcelain-veneers': '/veneers-laminates',
  veneers: '/veneers-laminates',
  'smile-makeovers': '/complete-smiles-makeover',
};

const nextConfig: NextConfig = {
  // The temporary *.workers.dev addresses must never be indexed (they would duplicate the production domain).
  async headers() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(.*)\\.workers\\.dev' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/about/team', destination: '/our-team', permanent: true },
      { source: '/team', destination: '/our-team', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/blog', destination: '/news', permanent: true },
      { source: '/blog/:slug', destination: '/post/:slug', permanent: true },
      // Live /general-dentist-1 redirects to /general-dentist, which is a 404 there; send it to the General Dentist page.
      { source: '/general-dentist-1', destination: '/general-dentistry', permanent: true },
      ...Object.entries(oldServiceAliases).map(([slug, destination]) => ({
        source: `/services/${slug}`,
        destination,
        permanent: true,
      })),
      // /services/<slug> -> /<slug>
      { source: '/services/:slug', destination: '/:slug', permanent: true },
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
