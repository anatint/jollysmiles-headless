import { sitemapResponse } from '@/lib/sitemapXml';

export function GET() {
  return sitemapResponse('blog-categories-sitemap');
}
