import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import BlogListWithPagination from '@/components/blog/BlogListWithPagination';
import CTABanner from '@/components/CTABanner';
import { getAllBlogs } from '@/lib/blogs';
import categoriesData from '@/data/newsCategories.json';
import { getLiveSeo } from '@/lib/liveSeo';

export const revalidate = 0;
export const dynamicParams = false;

type Category = { title: string; h1: string; posts: string[] };
const categories = categoriesData as Record<string, Category>;

export function generateStaticParams() {
  return Object.keys(categories).filter((s) => s !== '__news__').map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/news/categories/${slug}`);
}

export default async function NewsCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) notFound();

  const all = await getAllBlogs();
  const wanted = new Set(category.posts);
  const posts = all.filter((p) => wanted.has(p.slug));

  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path={`/news/categories/${slug}`} />
      <SimplePageHero
        title={category.h1 || category.title}
        subtitle={getLiveSeo(`/news/categories/${slug}`)?.title.split(' | ')[0]}
        breadcrumb={[{ label: 'News', href: '/news' }, { label: slug.replace(/-/g, ' ') }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[35px]">
        {posts.length > 0 ? (
          <BlogListWithPagination blogs={posts} itemsPerPage={6} />
        ) : (
          <p className="text-gray-500 text-center py-16">No articles in this category yet.</p>
        )}
      </div>
      <CTABanner />
    </div>
  );
}
