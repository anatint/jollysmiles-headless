import { sitemapResponse } from '@/lib/sitemapXml';

export function GET() {
  return sitemapResponse('booking-services-sitemap');
}
