import type { Metadata } from "next";
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

export const revalidate = 0; // Dynamic rendering for instant CMS updates

/**
 * Page content comes from the Wix `service-pages` collection (shown as "Services" in the CMS) when the record is
 * complete; otherwise from the local data in src/data/servicesData.ts.
 */
async function loadService(slug: string): Promise<{ service?: ServiceDetailData; source: 'cms' | 'local' }> {
  const record = findServicePage(await getServicePages(), slug);
  if (record && isCompleteServicePage(record)) {
    return { service: servicePageToDetail(record), source: 'cms' };
  }
  return { service: servicesData[slug], source: 'local' };
}

export async function generateStaticParams() {
  const records = await getServicePages();
  const slugs = Object.keys(servicesData);
  records.forEach((r: any) => {
    const s = r?.serviceSlug;
    if (s && !slugs.includes(s)) slugs.push(s);
  });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { service } = await loadService(slug);

  if (!service) {
    return { title: 'Service | Jolly Smiles Dental' };
  }

  return buildPageMetadata(`/services/${slug}`, {
    ...service,
    metaTitle: service.metaTitle || `${service.title || 'Service'} in Middletown, DE | Jolly Smiles`,
    metaDescription: service.metaDescription || service.heroParagraphs?.[0] || 'Quality dental care at Jolly Smiles.',
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let { service, source } = await loadService(slug);

  // Unknown slug: fall back to the closest local page by keyword (as before), otherwise 404.
  if (!service) {
    if (slug.includes('implant')) service = servicesData['dental-implants'];
    else if (slug.includes('invisalign') || slug.includes('brace') || slug.includes('ortho')) service = servicesData['invisalign'];
    else if (slug.includes('crown')) service = servicesData['same-day-crowns'];
    else if (slug.includes('laser') || slug.includes('lanap') || slug.includes('gum')) service = servicesData['lanap-treatment'];
    else if (slug.includes('cosmetic') || slug.includes('whitening') || slug.includes('veneer') || slug.includes('smile')) service = servicesData['cosmetic-dentistry'];
    else service = servicesData['general-dentistry'];
  }

  if (!service) {
    notFound();
  }

  // Fetch site settings and contact settings for dynamic contact info
  const contactData = await getSingleItem('ContactSettings');
  const siteSettings = await getSingleItem('SiteSettings');
  const phone = contactData?.callPhone || contactData?.phone || siteSettings?.phone || '(302) 658-7200';

  const displayTitle = service.title || 'Dental Service';
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
      <SchemaJsonLd path={`/services/${slug}`} customSchemas={customSchemas} />
      
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

