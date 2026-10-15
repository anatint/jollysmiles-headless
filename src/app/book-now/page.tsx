import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import { bookNowPage } from '@/data/staticPages';

export const revalidate = 0;

export function generateMetadata(): Metadata {
  return buildPageMetadata('/book-now');
}

export default function BookNowPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/book-now" />
      <SimplePageHero title={bookNowPage.h1} breadcrumb={[{ label: 'Services', href: '/services' }, { label: 'Book Now' }]} />
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {bookNowPage.services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-900 font-serif">{s.name}</h2>
                <p className="text-sm text-gray-500">{s.duration}</p>
              </div>
              <BookAppointmentButton label="BOOK AN APPOINTMENT" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
