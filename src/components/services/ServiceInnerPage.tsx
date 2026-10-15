import { notFound } from 'next/navigation';
import { getSingleItem } from "@/lib/wix";
import { getServicePages, findServicePage, isCompleteServicePage, servicePageToDetail } from "@/lib/servicePages";
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCardsList from '@/components/services/ServiceCardsList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CTABanner from '@/components/CTABanner';
import { servicesData, ServiceDetailData } from "@/data/servicesData";
import type { Metadata } from 'next';

const LIVE_H1: Record<string, string> = {
  '/invisalign': 'Invisalign Treatment',
  '/lanap': 'Lanap Treatment',
  '/dental-implants': 'Dental implants',
  '/tooth-implants': 'Tooth Implants',
  '/same-day-crowns': 'Same day crowns',
  '/veneers-and-laminates': 'Veneers and laminates',
};

/**
 * Page content comes from the Wix `service-pages` collection (shown as "Services" in the CMS) when the record is
 * complete; otherwise from the local data in src/data/servicesData.ts.
 */
export async function loadService(slug: string): Promise<{ service?: ServiceDetailData; source: 'cms' | 'local' }> {
  const record = findServicePage(await getServicePages(), slug);
  if (record && isCompleteServicePage(record)) {
    return { service: servicePageToDetail(record), source: 'cms' };
  }
  return { service: servicesData[slug], source: 'local' };
}

/** `dataKey` is the page's key in the data; `path` is the live URL path used for SEO (title, description, canonical). */
export async function serviceMetadata(dataKey: string, path: string): Promise<Metadata> {
  const { service } = await loadService(dataKey);

  if (!service) {
    return { title: 'Service | Jolly Smiles Dental' };
  }

  return buildPageMetadata(path, {
    ...service,
    metaTitle: service.metaTitle || `${service.title || 'Service'} in Middletown, DE | Jolly Smiles`,
    metaDescription: service.metaDescription || service.heroParagraphs?.[0] || 'Quality dental care at Jolly Smiles.',
  });
}

export default async function ServiceInnerPage({ slug, path }: { slug: string; path: string }) {

  const { service, source } = await loadService(slug);

  if (!service) {
    notFound();
  }

  // Fetch site settings and contact settings for dynamic contact info
  const contactData = await getSingleItem('ContactSettings');
  const siteSettings = await getSingleItem('SiteSettings');
  const phone = contactData?.callPhone || contactData?.phone || siteSettings?.phone || '(302) 658-7200';

  // Same H1 text as the live page of this URL (the live H1 is a ranking signal).
  const displayTitle = LIVE_H1[path] || service.title || 'Dental Service';
  const displayParagraphs = service.heroParagraphs || [];
  const displayHeroImage = service.heroImage || '/procedures-hero.png';
  const displayEyebrow = service.categoryEyebrow || `OUR ${displayTitle.toUpperCase()} CARE`;
  const displayCategoryHeading = service.categoryHeading || 'Enhancing Smiles. Transforming Lives.';
  const displayCategoryDescription = service.categoryDescription || 'Our advanced dental treatments are safe, effective, and customized to your unique needs.';
  const displaySubServices = service.subServices || [];
  const displayFaqs = service.faqs || [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": displayTitle,
    "description": displayParagraphs[0] || displayCategoryDescription,
    "medicalSpecialty": "http://schema.org/Dentistry",
    "provider": {
      "@type": "Dentist",
      "name": "Jolly Smiles Dental",
      "url": "https://www.jollysmiles.com/",
      "telephone": phone
    }
  };

  const faqSchema = displayFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const customSchemas: any[] = [serviceSchema];
  if (faqSchema) customSchemas.push(faqSchema);

  return (
    <div className="bg-white font-sans min-h-screen" data-content-source={source}>
      <SchemaJsonLd path={path} customSchemas={customSchemas} />
      
      {/* 1. Hero Section */}
      <ServiceHero
        title={displayTitle}
        paragraphs={displayParagraphs}
        image={displayHeroImage}
        imageAlt={service.heroImageAlt}
        ctaPrimaryLabel={service.ctaPrimaryLabel || "BOOK APPOINTMENT"}
        ctaSecondaryLabel={service.ctaSecondaryLabel || "CONSULT OUR EXPERTS"}
      />

      {/* 2. Sub-Services / Procedures Zig-Zag Cards */}
      {displaySubServices.length > 0 && (
        <ServiceCardsList
          eyebrow={displayEyebrow}
          heading={displayCategoryHeading}
          description={displayCategoryDescription}
          subServices={displaySubServices}
        />
      )}

      {/* 3. Service FAQs Section */}
      {displayFaqs.length > 0 && (
        <ServiceFAQ
          eyebrow={`${displayTitle.toUpperCase()} FAQS`}
          title={`Frequently Asked Questions`}
          faqs={displayFaqs}
        />
      )}

      {/* 4. Bottom CTA Banner */}
      <CTABanner />
    </div>
  );
}

