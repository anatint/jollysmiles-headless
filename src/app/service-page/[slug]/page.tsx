import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import { bookingServicePages } from '@/data/staticPages';

export const revalidate = 0;
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(bookingServicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/service-page/${slug}`);
}

export default async function BookingServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = bookingServicePages[slug];
  if (!page) notFound();
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path={`/service-page/${slug}`} />
      <SimplePageHero title={page.title} breadcrumb={[{ label: 'Service list', href: '/book-now' }, { label: page.title }]} />
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 font-serif">Service Description</h2>
          <p className="text-gray-600 leading-relaxed">{page.description}</p>
          <BookAppointmentButton label="BOOK AN APPOINTMENT" />
        </div>
      </section>
    </div>
  );
}
