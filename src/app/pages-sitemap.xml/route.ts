import { sitemapResponse } from '@/lib/sitemapXml';

export function GET() {
  return sitemapResponse('pages-sitemap');
}
