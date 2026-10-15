// Same rules as the live site's robots.txt. Any other host (the temporary workers.dev addresses) is blocked entirely
// so it cannot compete with, or be indexed instead of, https://www.jollysmiles.com.
const PRODUCTION_HOSTS = ['www.jollysmiles.com', 'jollysmiles.com'];

const LIVE_ROBOTS = `User-agent: *
Allow: /
Disallow: *?lightbox=

# Optimization for Google Ads Bot
User-agent: AdsBot-Google-Mobile
User-agent: AdsBot-Google
Disallow: /_partials*
Disallow: /pro-gallery-webapp/v1/galleries/*

# Block PetalBot
User-agent: PetalBot
Disallow: /

# Crawl delay for overly enthusiastic bots
User-agent: dotbot
Crawl-delay: 10
User-agent: AhrefsBot
Crawl-delay: 10

Sitemap: https://www.jollysmiles.com/sitemap.xml
`;

export function GET(request: Request) {
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0];
  const body = PRODUCTION_HOSTS.includes(host) ? LIVE_ROBOTS : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
