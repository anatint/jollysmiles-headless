import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { getCollectionItems, getSingleItem } from "@/lib/wix";
import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCardsList from '@/components/services/ServiceCardsList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CTABanner from '@/components/CTABanner';
import { servicesData, ServiceDetailData } from "@/data/servicesData";

export const revalidate = 0; // Dynamic rendering for instant CMS updates

export async function generateStaticParams() {
  const wixServices = await getCollectionItems('Services');
  const slugs = Object.keys(servicesData);
  
  if (wixServices && wixServices.length > 0) {
    wixServices.forEach((s: any) => {
      if (s.slug && !slugs.includes(s.slug)) {
        slugs.push(s.slug);
      }
    });
  }

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const localData = servicesData[slug];
  const wixServices = await getCollectionItems('Services');
  const wixService = wixServices.find((s: any) => s.slug === slug);

  if (!localData && !wixService) {
    return { title: 'Service | Jolly Smiles Dental' };
  }

  const mergedData = {
    ...localData,
    ...wixService,
    title: wixService?.title || localData?.title,
    metaTitle: wixService?.metaTitle || localData?.metaTitle || `${localData?.title || 'Service'} in Middletown, DE | Jolly Smiles`,
    metaDescription: wixService?.metaDescription || localData?.metaDescription || localData?.heroParagraphs?.[0] || 'Quality dental care at Jolly Smiles.'
  };

  return buildPageMetadata(`/services/${slug}`, mergedData);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to find matching service in rich services data or Wix CMS
  let service: ServiceDetailData | undefined = servicesData[slug];
  
  const wixServices = await getCollectionItems('Services');
  const wixService = wixServices.find((s: any) => s.slug === slug);

  // If not found in exact slug, check if fallback is available or 404
  if (!service && !wixService) {
    // Check if slug contains keywords
    if (slug.includes('implant')) service = servicesData['dental-implants'];
    else if (slug.includes('invisalign') || slug.includes('brace') || slug.includes('ortho')) service = servicesData['invisalign'];
    else if (slug.includes('crown')) service = servicesData['same-day-crowns'];
    else if (slug.includes('laser') || slug.includes('lanap') || slug.includes('gum')) service = servicesData['lanap-treatment'];
    else if (slug.includes('cosmetic') || slug.includes('whitening') || slug.includes('veneer') || slug.includes('smile')) service = servicesData['cosmetic-dentistry'];
    else service = servicesData['general-dentistry'];
  }

  if (!service && !wixService) {
    notFound();
  }

  // Fetch site settings and contact settings for dynamic contact info
  const contactData = await getSingleItem('ContactSettings');
  const siteSettings = await getSingleItem('SiteSettings');
  const phone = contactData?.callPhone || contactData?.phone || siteSettings?.phone || '(302) 658-7200';

  // Merge CMS overrides if available
  const displayTitle = wixService?.title || service?.title || 'Dental Service';
  const displayParagraphs = (wixService?.heroParagraphs && Array.isArray(wixService.heroParagraphs))
    ? wixService.heroParagraphs
    : (wixService?.heroDescription ? [wixService.heroDescription] : (service?.heroParagraphs || []));
  const displayHeroImage = wixService?.heroImage || service?.heroImage || '/procedures-hero.png';
  const displayEyebrow = wixService?.categoryEyebrow || service?.categoryEyebrow || `OUR ${displayTitle.toUpperCase()} CARE`;
  const displayCategoryHeading = wixService?.categoryHeading || service?.categoryHeading || 'Enhancing Smiles. Transforming Lives.';
  const displayCategoryDescription = wixService?.categoryDescription || service?.categoryDescription || 'Our advanced dental treatments are safe, effective, and customized to your unique needs.';
  const displaySubServices = service?.subServices || [];
  const displayFaqs = service?.faqs || [];

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
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path={`/services/${slug}`} customSchemas={customSchemas} />
      
      {/* 1. Hero Section */}
      <ServiceHero
        title={displayTitle}
        paragraphs={displayParagraphs}
        image={displayHeroImage}
        ctaPrimaryLabel={service?.ctaPrimaryLabel || "BOOK APPOINTMENT"}
        ctaSecondaryLabel={service?.ctaSecondaryLabel || "CONSULT OUR EXPERTS"}
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

