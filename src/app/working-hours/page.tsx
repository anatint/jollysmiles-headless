import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import SimplePageHero from '@/components/pages/SimplePageHero';
import BookAppointmentButton from '@/components/BookAppointmentButton';
import CTABanner from '@/components/CTABanner';
import { workingHoursPage } from '@/data/staticPages';

export const revalidate = 0;

export function generateMetadata(): Metadata {
  return buildPageMetadata('/working-hours');
}

export default function WorkingHoursPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/working-hours" />
      <SimplePageHero title={workingHoursPage.h1} subtitle={workingHoursPage.intro} />
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#fafafa] rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-brand-red mb-5 font-serif uppercase tracking-wide">What to remember</h3>
            <ul className="space-y-3 text-gray-700 text-sm font-semibold">
              {workingHoursPage.remember.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-brand-red mb-5 font-serif uppercase tracking-wide">Working hours</h3>
            <dl className="divide-y divide-gray-100">
              {workingHoursPage.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-3 text-sm">
                  <dt className="font-bold text-gray-900">{h.day}</dt>
                  <dd className="text-gray-600">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <BookAppointmentButton label="REQUEST APPOINTMENT" />
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
