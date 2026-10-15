import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceInnerPage, { serviceMetadata } from '@/components/services/ServiceInnerPage';
import { SERVICE_ROUTE_SLUGS, HEADLESS_ONLY_SERVICE_SLUGS, isServiceRouteSlug } from '@/lib/serviceRoutes';

export const revalidate = 0; // Dynamic rendering for instant CMS updates
export const dynamicParams = false; // anything that is not a known live service URL is a real 404

export function generateStaticParams() {
  return SERVICE_ROUTE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const metadata = await serviceMetadata(slug, `/${slug}`);
  // Pages that do not exist on the live site stay out of the index (and out of the sitemap).
  if ((HEADLESS_ONLY_SERVICE_SLUGS as readonly string[]).includes(slug)) {
    return { ...metadata, robots: { index: false, follow: true } };
  }
  return metadata;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceRouteSlug(slug)) notFound();
  return <ServiceInnerPage slug={slug} path={`/${slug}`} />;
}
