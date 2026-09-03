import { Metadata } from 'next';

export interface PageSeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schemas?: any[];
}

export const liveSeoData: Record<string, PageSeoConfig> = {
  '/': {
    title: "Best Dentist and Dental Clinic in Delaware | Jolly Smiles | Middletown",
    description: "Jolly Smiles Best Dentist and Dental clinic in Delaware for all Dental Problem Solution. We have a team of Delaware’s best dentists.",
    canonical: "https://www.jollysmiles.com",
    schemas: [
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Jolly Smiles",
        "url": "https://www.jollysmiles.com"
      },
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Jolly Smiles Dental",
        "image": "https://www.jollysmiles.com/logo.png",
        "@id": "https://www.jollysmiles.com/",
        "url": "https://www.jollysmiles.com/",
        "telephone": "+1-302-378-3384",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Middletown, Delaware",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.4496",
          "longitude": "-75.7163"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/jollysmiles",
          "https://www.instagram.com/jollysmiles"
        ]
      }
    ]
  },
  '/about': {
    title: "About Us | Jolly Smiles Ready to Serve all Your Dental Needs in Delaware",
    description: "Jolly Smiles Complete smile makeover, Uneven smiles, Missing teeth, Throbbing pain Solution in Delaware. Over 50 years of combined experience in Dental.",
    canonical: "https://www.jollysmiles.com/about-us",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Jolly Smiles Dental",
        "url": "https://www.jollysmiles.com/about-us",
        "description": "Comprehensive dental practice in Middletown, Delaware offering general and cosmetic dentistry."
      }
    ]
  },
  '/team': {
    title: "Our Team | Jolly Smiles Dental Clinic in Delaware Best team of Dentists",
    description: "Jolly Smiles Dental Clinic in Delaware have the Best Team for all your Dental issues. Find the best team for you in Delaware.",
    canonical: "https://www.jollysmiles.com/our-team",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Jolly Smiles Dental Team",
        "url": "https://www.jollysmiles.com/our-team",
        "medicalSpecialty": "http://schema.org/Dentistry"
      }
    ]
  },
  '/services': {
    title: "Professional Dental Services at Jolly Smiles Clinic | Delaware",
    description: "Jolly Smiles Dental Clinic in Delaware offers professional Dental Medical Service. We give you Medical Advices and we care about you.",
    canonical: "https://www.jollysmiles.com/services",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Jolly Smiles Dental Services",
        "url": "https://www.jollysmiles.com/services",
        "telephone": "+1-302-378-3384",
        "medicalSpecialty": "http://schema.org/Dentistry"
      }
    ]
  },
  '/procedures': {
    title: "Procedures | Jolly Smiles Dental Clinic in Delaware, Treatment procedures",
    description: "Jolly Smiles Dental Clinic in Delaware Call us to know about Procedure, Treatment for your Teeth Problems. We Give You the Best Solution.",
    canonical: "https://www.jollysmiles.com/procedures",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Jolly Smiles Dental Procedures",
        "url": "https://www.jollysmiles.com/procedures",
        "telephone": "+1-302-378-3384"
      }
    ]
  },
  '/technologies': {
    title: "Technologies used in Dental Treatment | Jolly Smiles in Delaware",
    description: "Jolly Smiles | Technologies used in Dental Treatment, Call us to know about procedure, treatment, & cost. Give your teeth the best care!",
    canonical: "https://www.jollysmiles.com/technologies",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Jolly Smiles Advanced Dental Technologies",
        "url": "https://www.jollysmiles.com/technologies",
        "telephone": "+1-302-378-3384"
      }
    ]
  },
  '/contact': {
    title: "Contact Us | Jolly Smiles Dental Clinic in Delaware, Get in touch",
    description: "Contact Jolly Smiles Dental Clinic in Middletown, DE. Schedule an appointment, find our location, office hours, and contact details.",
    canonical: "https://www.jollysmiles.com/contact-us",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Jolly Smiles Dental",
        "url": "https://www.jollysmiles.com/contact-us",
        "telephone": "+1-302-378-3384"
      }
    ]
  },
  '/blog': {
    title: "News | Jolly Smiles Dental Clinic in Delaware, Get in touch with us for news",
    description: "Stay updated with the latest dental tips, guides, and news from Jolly Smiles Dental Clinic in Middletown, DE.",
    canonical: "https://www.jollysmiles.com/news",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Jolly Smiles Dental Blog & News",
        "url": "https://www.jollysmiles.com/news"
      }
    ]
  },
  '/services/cosmetic-dentistry': {
    title: "Cosmetic Dentistry Services in Middletown Delaware Transform Your Smile with Professional Aesthetic Solutions",
    description: "Transform your smile with professional cosmetic dentistry in Middletown, DE. Teeth whitening, veneers, and aesthetic smile makeovers at Jolly Smiles.",
    canonical: "https://www.jollysmiles.com/cosmetic-dentistry",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Cosmetic Dentistry",
        "description": "Professional cosmetic dental treatments in Middletown, Delaware."
      }
    ]
  },
  '/services/restorative-dentistry': {
    title: "Restorative Dentistry | Dental Implants, Crowns & Root Canals – Jolly Smiles",
    description: "Restorative dental care in Middletown, DE including dental implants, same-day crowns, bridges, and root canals at Jolly Smiles.",
    canonical: "https://www.jollysmiles.com/restorative-dentistry",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Restorative Dentistry",
        "description": "Permanent tooth restoration, implants, and crowns."
      }
    ]
  },
  '/services/preventive-dental-care': {
    title: "Preventive Dental Care in Middletown DE Regular Checkups, Cleanings, and Sealants for Healthy Smiles",
    description: "Preventive dental care in Middletown, DE. Comprehensive checkups, gentle cleanings, fluoride, and dental sealants for the whole family.",
    canonical: "https://www.jollysmiles.com/preventive-dental-care",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Preventive Dental Care",
        "description": "Routine exams, teeth cleanings, and preventive treatments."
      }
    ]
  },
  '/services/emergency-dental-services': {
    title: "Emergency Dental Clinic in Middletown DE 24/7 Urgent Dental Care for Toothaches, Swelling, and Injuries",
    description: "Immediate emergency dental care in Middletown, DE. Fast relief for severe toothaches, broken teeth, infections, and dental trauma.",
    canonical: "https://www.jollysmiles.com/emergency-dental-services",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Emergency Dental Services",
        "description": "Urgent dental care and emergency treatments."
      }
    ]
  },
  '/services/pediatric-dentistry': {
    title: "Pediatric Dentist in Middletown DE Gentle Dental Care for Children and Toddlers at JollySmiles",
    description: "Gentle pediatric dentistry in Middletown, DE. Kid-friendly dental checkups, sealants, cleanings, and cavity prevention for children and teens.",
    canonical: "https://www.jollysmiles.com/pediatric-dentistry",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Pediatric Dentistry",
        "description": "Gentle dental care for kids, toddlers, and teens."
      }
    ]
  },
  '/services/invisalign': {
    title: "Invisalign Middletown DE | Clear Aligners | Jolly Smiles",
    description: "Diamond Invisalign Provider in Middletown, DE. Discreet, comfortable clear aligners to straighten teeth for adults and teens.",
    canonical: "https://www.jollysmiles.com/invisalign",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Invisalign Clear Aligners",
        "description": "Clear orthodontic aligners provided by Diamond Top 1% Provider."
      }
    ]
  }
};

export function buildPageMetadata(path: string, cmsData?: any): Metadata {
  const fallback = liveSeoData[path] || liveSeoData['/'];
  const title = cmsData?.metaTitle || cmsData?.meta_title || cmsData?.title || fallback.title;
  const description = cmsData?.metaDescription || cmsData?.meta_description || cmsData?.description || fallback.description;
  const canonical = cmsData?.canonical || fallback.canonical;
  const ogImage = cmsData?.ogImage || fallback.ogImage || "/logo.png";

  return {
    title,
    description: typeof description === 'string' ? description.replace(/<[^>]*>/g, '').trim() : fallback.description,
    openGraph: {
      title,
      description: typeof description === 'string' ? description.replace(/<[^>]*>/g, '').trim() : fallback.description,
      url: canonical,
      siteName: "Jolly Smiles",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: typeof description === 'string' ? description.replace(/<[^>]*>/g, '').trim() : fallback.description,
      images: [ogImage]
    },
    alternates: {
      canonical
    }
  };
}
