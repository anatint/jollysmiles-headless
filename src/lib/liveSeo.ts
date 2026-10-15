import type { Metadata } from 'next';
import liveSeoJson from '@/data/liveSeo.json';

/**
 * Exact SEO data of https://www.jollysmiles.com, captured per URL path (src/data/liveSeo.json, built by
 * scripts/build_live_seo.mjs from the live pages). When a path is in this registry, its title, description,
 * canonical URL, robots, Open Graph / Twitter tags and JSON-LD are taken from here verbatim, so the headless site
 * presents search engines exactly what the live site does.
 */
export interface LiveSeo {
  title: string;
  description?: string;
  canonical?: string;
  robots?: string;
  og?: Record<string, string>;
  twitter?: Record<string, string>;
  jsonLd?: string[];
}

const registry = liveSeoJson as Record<string, LiveSeo>;

export function normalizePath(path: string): string {
  const p = path.split('?')[0].split('#')[0];
  return p.length > 1 ? p.replace(/\/+$/, '') : '/';
}

export function getLiveSeo(path: string): LiveSeo | undefined {
  return registry[normalizePath(path)];
}

export function liveSeoPaths(): string[] {
  return Object.keys(registry);
}

function parseRobots(robots?: string): Metadata['robots'] | undefined {
  if (!robots) return undefined;
  const r = robots.toLowerCase();
  return { index: !r.includes('noindex'), follow: !r.includes('nofollow') };
}

export function liveSeoToMetadata(seo: LiveSeo): Metadata {
  const og = seo.og ?? {};
  const tw = seo.twitter ?? {};
  const ogImages = og['og:image'] ? [{ url: og['og:image'] }] : undefined;
  return {
    title: { absolute: seo.title },
    description: seo.description || undefined,
    alternates: seo.canonical ? { canonical: seo.canonical } : undefined,
    robots: parseRobots(seo.robots),
    openGraph: Object.keys(og).length
      ? ({
          title: og['og:title'] || seo.title,
          description: og['og:description'] || seo.description,
          url: og['og:url'] || seo.canonical,
          siteName: og['og:site_name'],
          locale: og['og:locale'],
          type: (og['og:type'] as 'website' | 'article') || 'website',
          images: ogImages,
        } as Metadata['openGraph'])
      : undefined,
    twitter: Object.keys(tw).length
      ? ({
          card: (tw['twitter:card'] as 'summary_large_image' | 'summary') || 'summary_large_image',
          title: tw['twitter:title'] || seo.title,
          description: tw['twitter:description'] || seo.description,
          images: tw['twitter:image'] ? [tw['twitter:image']] : undefined,
        } as Metadata['twitter'])
      : undefined,
  };
}
