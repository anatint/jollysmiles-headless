import type { ServiceDetailData } from '../servicesData';

// The live site has no inner page for these two cards (/general-dentist-1 redirects to a 404 and
// "6 month braces" has no link), so the only live content is the card text on https://www.jollysmiles.com/services.
const common = {
  ctaPrimaryLabel: 'BOOK APPOINTMENT',
  ctaSecondaryLabel: 'CONSULT OUR EXPERTS',
  canonical: 'https://www.jollysmiles.com/services',
  sourceUrl: 'https://www.jollysmiles.com/services',
  subServices: [],
};

export const liveServicesPageCards: Record<string, ServiceDetailData> = {
  'general-dentistry': {
    ...common,
    slug: 'general-dentistry',
    title: 'General Dentist',
    heroHeading: 'General Dentist',
    heroParagraphs: [
      'Our Department is manned by well qualified specialists related to different departments of dentistry and is fully dedicated towards rendering the most comprehensive care for oral and facial irregularities.',
    ],
    heroImage: 'https://static.wixstatic.com/media/db6928_5f44c3e4f2014371bd33180709d25fcf~mv2.webp',
    heroImageAlt: 'General dentistry at Jolly Smiles',
    categoryEyebrow: 'GENERAL DENTIST',
    categoryHeading: 'General Dentist',
    categoryDescription: 'Our Department is manned by well qualified specialists related to different departments of dentistry and is fully dedicated towards rendering the most comprehensive care for oral and facial irregularities.',
    metaTitle: 'General Dentist | Jolly Smiles Dental Clinic in Middletown, DE',
    metaDescription: 'Our Department is manned by well qualified specialists related to different departments of dentistry and is fully dedicated towards rendering the most comprehensive care for oral and facial irregularities.',
  },
  '6-month-braces': {
    ...common,
    slug: '6-month-braces',
    title: '6 Month Braces',
    heroHeading: '6 Month Braces',
    heroParagraphs: [
      'Fast Braces is another option in orthodontic treatment, which straightens the teeth much quicker than traditional fixed braces. A duration of 6 months or less is possible due to its distinct design of the brackets (the metal buttons on teeth). It has been successful on children and adults.',
    ],
    heroImage: 'https://static.wixstatic.com/media/db6928_5c0e11c7b3ae41f0a50ff4e2122d8289~mv2.webp',
    heroImageAlt: 'Braces treatment at Jolly Smiles',
    categoryEyebrow: '6 MONTH BRACES',
    categoryHeading: '6 Month Braces',
    categoryDescription: 'Fast Braces is another option in orthodontic treatment, which straightens the teeth much quicker than traditional fixed braces.',
    metaTitle: '6 Month Braces | Jolly Smiles Dental Clinic in Middletown, DE',
    metaDescription: 'Fast Braces is another option in orthodontic treatment, which straightens the teeth much quicker than traditional fixed braces. A duration of 6 months or less is possible.',
  },
};
