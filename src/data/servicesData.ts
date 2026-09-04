export interface SubServiceFeature {
  icon: 'shield' | 'clock' | 'sparkles' | 'smile' | 'gem' | 'award' | 'users' | 'target' | 'heart' | 'zap' | 'check' | 'calendar';
  text: string;
}

export interface SubServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconType: 'tooth' | 'veneer' | 'smile' | 'implant' | 'shield' | 'sparkles' | 'award' | 'crown' | 'laser' | 'aligner' | 'gem';
  features: SubServiceFeature[];
}

export interface ServiceDetailData {
  slug: string;
  title: string;
  heroHeading?: string;
  heroParagraphs: string[];
  heroImage: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
  categoryEyebrow: string;
  categoryHeading: string;
  categoryDescription: string;
  subServices: SubServiceItem[];
  ctaBannerHeading?: string;
  ctaBannerSubheading?: string;
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: Record<string, ServiceDetailData> = {
  'cosmetic-dentistry': {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    heroHeading: 'Cosmetic Dentistry',
    heroParagraphs: [
      "At Jolly Smiles, we believe your smile should reflect your confidence. Our cosmetic dentistry services are designed to enhance the natural beauty of your smile while maintaining optimal oral health.",
      "Whether you're looking for a subtle touch-up or a complete smile makeover, our team is here to help you achieve the radiant smile you deserve."
    ],
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK APPOINTMENT',
    ctaSecondaryLabel: 'CONSULT OUR EXPERTS',
    categoryEyebrow: 'OUR COSMETIC DENTISTRY CARE',
    categoryHeading: 'Enhancing Smiles. Transforming Lives.',
    categoryDescription: 'Our advanced cosmetic treatments are safe, effective, and customized to your unique needs. Explore our most popular cosmetic dentistry services below:',
    subServices: [
      {
        id: 'teeth-whitening',
        title: 'Teeth Whitening',
        description: 'Brighten your smile with our safe and effective teeth whitening treatments. Over time, teeth can become stained from coffee, tea, wine, or everyday habits. Our professional whitening services lift away stains and restore your teeth to a whiter, more youthful appearance—all in a single visit!',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        iconType: 'tooth',
        features: [
          { icon: 'shield', text: 'Safe & Effective' },
          { icon: 'clock', text: 'Instant Results' },
          { icon: 'sparkles', text: 'Long Lasting' }
        ]
      },
      {
        id: 'porcelain-veneers',
        title: 'Porcelain Veneers',
        description: 'Looking to correct chips, gaps, or uneven teeth? Our expert porcelain veneers dentist can transform your smile with thin, custom-made shells that cover imperfections and create a flawless, natural-looking result. Veneers are a minimally invasive way to dramatically improve your smile.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'veneer',
        features: [
          { icon: 'smile', text: 'Natural Looking' },
          { icon: 'shield', text: 'Stain Resistant' },
          { icon: 'gem', text: 'Durable & Strong' }
        ]
      },
      {
        id: 'smile-makeovers',
        title: 'Smile Makeovers',
        description: 'Our smile makeover clinic offers personalized treatment plans tailored to your unique goals. From whitening and veneers to bonding and contouring, we combine artistry and advanced dental techniques to create smiles that look beautiful and feel natural.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
        iconType: 'smile',
        features: [
          { icon: 'target', text: 'Personalized Plans' },
          { icon: 'sparkles', text: 'Complete Transformation' },
          { icon: 'smile', text: 'Natural Results' }
        ]
      },
      {
        id: 'cosmetic-dentist-middletown',
        title: 'Cosmetic Dentist in Middletown',
        description: "As a trusted cosmetic dentist in Middletown, we're proud to help patients of all ages feel great about their smiles. Whether you want a subtle change or a complete transformation, our caring and experienced team will guide you through every step of your smile journey.",
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'award',
        features: [
          { icon: 'award', text: 'Trusted Care' },
          { icon: 'users', text: 'All Ages Welcome' },
          { icon: 'target', text: 'Patient Focused' }
        ]
      }
    ],
    ctaBannerHeading: 'Ready to Love Your Smile?',
    ctaBannerSubheading: "Schedule your consultation today and let our experts help you achieve the smile you've always wanted.",
    metaTitle: 'Cosmetic Dentistry in Middletown, DE | Jolly Smiles',
    metaDescription: 'Transform your smile with professional cosmetic dentistry in Middletown, DE. Expert veneers, teeth whitening, and smile makeovers at Jolly Smiles.'
  },

  'dental-implants': {
    slug: 'dental-implants',
    title: 'Dental Implants',
    heroHeading: 'Dental Implants',
    heroParagraphs: [
      "Missing teeth can impact your ability to chew, speak, and smile with confidence. At Jolly Smiles, our advanced dental implant procedures provide a permanent, natural-looking replacement designed to last a lifetime.",
      "Using state-of-the-art 3D imaging and computer-guided surgery, we restore the strength of your bite, prevent bone loss, and recreate a completely seamless smile."
    ],
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK IMPLANT CONSULT',
    ctaSecondaryLabel: 'LEARN MORE ABOUT IMPLANTS',
    categoryEyebrow: 'OUR DENTAL IMPLANT CARE',
    categoryHeading: 'Permanent Teeth. Permanent Confidence.',
    categoryDescription: 'Discover our comprehensive implant solutions customized for single tooth replacement, multiple missing teeth, or full arch restoration:',
    subServices: [
      {
        id: 'single-tooth-implants',
        title: 'Single Tooth Implants',
        description: 'Replace a single missing tooth without affecting adjacent healthy teeth. A titanium implant post integrates seamlessly with your jawbone, topped with a custom lifelike crown that looks and performs just like a natural tooth.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'implant',
        features: [
          { icon: 'shield', text: 'Bone Preservation' },
          { icon: 'smile', text: 'Lifelike Crown' },
          { icon: 'gem', text: 'Lifetime Durability' }
        ]
      },
      {
        id: 'all-on-4-full-arch',
        title: 'All-on-4® Full Arch Implants',
        description: 'Restore an entire upper or lower arch of teeth using just four strategically placed dental implants. Experience the stability of permanent teeth without the slipping, discomfort, or dietary restrictions of traditional dentures.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'tooth',
        features: [
          { icon: 'zap', text: 'Same-Day Function' },
          { icon: 'target', text: 'Full Arch Fixed' },
          { icon: 'smile', text: 'Maximum Stability' }
        ]
      },
      {
        id: 'implant-supported-bridges',
        title: 'Implant-Supported Bridges',
        description: 'When several consecutive teeth are missing, implant-supported bridges offer a secure, fixed solution that does not rely on crowning adjacent natural teeth, providing exceptional bite strength and aesthetic appeal.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
        iconType: 'veneer',
        features: [
          { icon: 'award', text: 'Fixed & Secure' },
          { icon: 'smile', text: 'Natural Aesthetics' },
          { icon: 'shield', text: 'Protects Adjacent Teeth' }
        ]
      },
      {
        id: 'bone-grafting-3d-guided',
        title: '3D Guided Implant Surgery',
        description: 'We utilize advanced CBCT 3D imaging to plan your implant placement with sub-millimeter precision. When necessary, gentle bone grafting ensures adequate bone volume for a stable, long-lasting foundation.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'award',
        features: [
          { icon: 'target', text: '3D Precision' },
          { icon: 'clock', text: 'Faster Healing' },
          { icon: 'shield', text: 'Predictable Success' }
        ]
      }
    ],
    ctaBannerHeading: 'Restore Your Complete Smile Today',
    ctaBannerSubheading: 'Book your comprehensive implant consultation with our Middletown dental implant specialists.',
    metaTitle: 'Dental Implants in Middletown, DE | Jolly Smiles',
    metaDescription: 'Permanent, natural-looking dental implants in Middletown, DE. Replace single or multiple missing teeth with advanced 3D guided implant dentistry.'
  },

  'general-dentistry': {
    slug: 'general-dentistry',
    title: 'General Dentistry',
    heroHeading: 'General Dentistry',
    heroParagraphs: [
      "A healthy, radiant smile starts with proactive, comprehensive preventive care. At Jolly Smiles, we provide gentle, patient-centered dental care for individuals and families of all ages.",
      "From routine cleanings and digital exams to restorative fillings and same-day crowns, our experienced team ensures your oral health is protected with comfort and precision."
    ],
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'SCHEDULE EXAM',
    ctaSecondaryLabel: 'VIEW OUR SERVICES',
    categoryEyebrow: 'OUR PREVENTIVE & GENERAL CARE',
    categoryHeading: 'Gentle Care for the Whole Family.',
    categoryDescription: 'Comprehensive dental services designed to keep your teeth strong, gums healthy, and entire family smiling bright:',
    subServices: [
      {
        id: 'exams-and-cleanings',
        title: 'Comprehensive Exams & Cleanings',
        description: 'Gentle, thorough dental cleanings and digital low-radiation X-rays to detect early issues, remove stubborn plaque and tartar, and preserve your natural teeth for a lifetime of healthy smiles.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'shield',
        features: [
          { icon: 'shield', text: 'Gentle Cleaning' },
          { icon: 'target', text: 'Digital X-Rays' },
          { icon: 'heart', text: 'Preventive Focus' }
        ]
      },
      {
        id: 'tooth-colored-fillings',
        title: 'Tooth-Colored Composite Fillings',
        description: 'Treat cavities discreetly with durable, mercury-free composite resin that blends invisibly with your natural tooth enamel while sealing and protecting against future decay.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'tooth',
        features: [
          { icon: 'smile', text: 'Natural Color Match' },
          { icon: 'shield', text: 'Mercury-Free' },
          { icon: 'gem', text: 'Durable Bond' }
        ]
      },
      {
        id: 'same-day-crowns',
        title: 'Same-Day Dental Crowns',
        description: 'Restore damaged, cracked, or severely worn teeth in just one convenient visit with our advanced in-office milling technology. No messy impressions or temporary crowns required.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        iconType: 'crown',
        features: [
          { icon: 'clock', text: 'Single Visit' },
          { icon: 'target', text: 'Digital Scanning' },
          { icon: 'gem', text: 'High-Strength Ceramic' }
        ]
      },
      {
        id: 'lanap-laser-periodontics',
        title: 'LANAP® Laser Gum Therapy',
        description: 'An advanced, minimally invasive laser treatment for gum disease that targets bacteria and diseased tissue without scalpels or sutures, stimulating natural tissue and bone regeneration.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'laser',
        features: [
          { icon: 'zap', text: 'No Scalpels / No Sutures' },
          { icon: 'clock', text: 'Fast Recovery' },
          { icon: 'shield', text: 'Saves Natural Teeth' }
        ]
      }
    ],
    ctaBannerHeading: 'Experience Stress-Free Dental Care',
    ctaBannerSubheading: 'Join our Jolly Smiles dental family in Middletown, DE. New patients are always warmly welcomed!',
    metaTitle: 'General Dentistry in Middletown, DE | Jolly Smiles',
    metaDescription: 'Gentle family and general dentistry in Middletown, DE. Comprehensive exams, cleanings, tooth-colored fillings, and same-day crowns.'
  },

  'invisalign': {
    slug: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    heroHeading: 'Invisalign® Clear Aligners',
    heroParagraphs: [
      "Achieve the straight, confident smile you've always wanted without the hassle and look of metal brackets or wires. Invisalign® clear aligners offer a discreet, comfortable orthodontic solution.",
      "Custom-crafted using SmartTrack® material, your clear aligners gently shift your teeth into place with precision and predictability for teens and adults alike."
    ],
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK INVISALIGN CONSULT',
    ctaSecondaryLabel: 'SEE SMILE PREVIEW',
    categoryEyebrow: 'OUR ORTHODONTIC CARE',
    categoryHeading: 'Straighten Your Smile Discreetly.',
    categoryDescription: 'Discover why millions of patients choose Invisalign® clear aligners for comfortable, nearly invisible teeth straightening:',
    subServices: [
      {
        id: 'invisalign-full',
        title: 'Invisalign® for Adults & Teens',
        description: 'Virtually invisible aligners designed to fit seamlessly into your active lifestyle. Remove them easily to eat your favorite foods, brush, and floss normally throughout your treatment.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'aligner',
        features: [
          { icon: 'smile', text: 'Virtually Invisible' },
          { icon: 'check', text: 'Removable for Eating' },
          { icon: 'target', text: 'Custom SmartTrack® Fit' }
        ]
      },
      {
        id: 'six-month-braces',
        title: '6 Month Cosmetic Braces',
        description: 'For adults looking for fast results on visible front teeth, our cosmetic straightening programs focus on aesthetics in as little as six months without major bite adjustments.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'tooth',
        features: [
          { icon: 'clock', text: 'Fast 6-Month Results' },
          { icon: 'smile', text: 'Cosmetic Focus' },
          { icon: 'award', text: 'Affordable Options' }
        ]
      },
      {
        id: 'digital-iteroc-preview',
        title: 'iTero® 3D Digital Smile Simulation',
        description: 'See your future smile before you even start treatment! Our 3D iTero scanner captures accurate digital models in seconds without gooey impression putty.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        iconType: 'sparkles',
        features: [
          { icon: 'target', text: '3D Simulation' },
          { icon: 'zap', text: 'No Messy Putty' },
          { icon: 'clock', text: 'Instant Results' }
        ]
      },
      {
        id: 'vivera-retainers',
        title: 'Vivera® Retainers & Smile Retention',
        description: 'Keep your newly aligned smile perfect with custom Vivera® retainers engineered to be 30% stronger than standard retainers for lasting stability.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'shield',
        features: [
          { icon: 'gem', text: '30% Stronger' },
          { icon: 'smile', text: 'Comfortable Fit' },
          { icon: 'shield', text: 'Lasting Alignment' }
        ]
      }
    ],
    ctaBannerHeading: 'Start Your Journey to a Straighter Smile',
    ctaBannerSubheading: 'Get your free 3D digital smile simulation with our certified Invisalign® provider in Middletown, DE.',
    metaTitle: 'Invisalign® Clear Aligners in Middletown, DE | Jolly Smiles',
    metaDescription: 'Straighten your teeth discreetly with Invisalign® clear aligners in Middletown, DE. Book your digital 3D smile consultation today.'
  },

  'same-day-crowns': {
    slug: 'same-day-crowns',
    title: 'Same Day Crowns',
    heroHeading: 'Same Day Crowns',
    heroParagraphs: [
      "No more messy impressions, temporary crowns, or waiting weeks for dental lab work. At Jolly Smiles, our in-office CEREC® CAD/CAM technology allows us to create beautiful, permanent porcelain crowns in a single visit.",
      "Get back to enjoying your favorite foods and smiling with total confidence in just one appointment."
    ],
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK SAME-DAY CROWN',
    ctaSecondaryLabel: 'CONSULT OUR DOCTORS',
    categoryEyebrow: 'OUR RESTORATIVE DENTISTRY',
    categoryHeading: 'One Visit. One Flawless Crown.',
    categoryDescription: 'High-tech CEREC® precision ceramic crowns crafted right in our office while you relax:',
    subServices: [
      {
        id: 'cerec-technology',
        title: 'CEREC® CAD/CAM Technology',
        description: 'Advanced 3D digital scanners take a high-resolution model of your tooth, allowing our dentists to custom-design your crown with exacting precision.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'crown',
        features: [
          { icon: 'clock', text: 'Single Appointment' },
          { icon: 'zap', text: 'No Temporary Crowns' },
          { icon: 'target', text: 'Digital Precision' }
        ]
      },
      {
        id: 'biocompatible-ceramics',
        title: 'High-Strength Biocompatible Ceramic',
        description: 'Milled from a single block of high-grade dental ceramic that matches the natural translucency, shade, and strength of your natural tooth structure.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'gem',
        features: [
          { icon: 'gem', text: 'High Strength' },
          { icon: 'smile', text: 'Exact Color Match' },
          { icon: 'shield', text: 'Metal-Free' }
        ]
      }
    ],
    ctaBannerHeading: 'Restore Your Tooth in Just One Visit',
    ctaBannerSubheading: 'Save time with same-day ceramic crowns at Jolly Smiles in Middletown, DE.',
    metaTitle: 'Same Day CEREC Dental Crowns in Middletown, DE | Jolly Smiles',
    metaDescription: 'Get custom, permanent ceramic dental crowns in just one visit with CEREC® same-day crown technology at Jolly Smiles.'
  },

  'lanap-treatment': {
    slug: 'lanap-treatment',
    title: 'LANAP® Periodontal Therapy',
    heroHeading: 'LANAP® Laser Periodontal Therapy',
    heroParagraphs: [
      "Gum disease is the leading cause of adult tooth loss, but traditional periodontal surgery with scalpels and sutures can be intimidating. LANAP® is an FDA-cleared laser protocol that treats gum disease with minimal discomfort.",
      "The PerioLase® MVP-7™ selectively targets diseased tissue and bacteria while preserving healthy gums and stimulating new bone growth around your natural teeth."
    ],
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK LANAP CONSULT',
    ctaSecondaryLabel: 'LEARN ABOUT LASER CARE',
    categoryEyebrow: 'ADVANCED LASER PERIODONTICS',
    categoryHeading: 'Save Your Teeth. Without Scalpels.',
    categoryDescription: 'Why patients choose LANAP® laser therapy over conventional gum surgery:',
    subServices: [
      {
        id: 'laser-bacterial-eradication',
        title: 'Targeted Laser Technology',
        description: 'The pulsed laser light destroys 99% of subgingival periodontal pathogens without cutting into healthy gum tissue.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'laser',
        features: [
          { icon: 'zap', text: 'No Scalpel Cutting' },
          { icon: 'shield', text: 'Targets Bacteria' },
          { icon: 'heart', text: 'Minimal Discomfort' }
        ]
      },
      {
        id: 'bone-tissue-regeneration',
        title: 'Natural Bone & Tissue Regeneration',
        description: 'LANAP® is the only laser procedure scientifically proven to promote true periodontal regeneration, saving loose or severely compromised teeth.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        iconType: 'shield',
        features: [
          { icon: 'award', text: 'FDA Cleared' },
          { icon: 'shield', text: 'Bone Regeneration' },
          { icon: 'clock', text: '24-48hr Recovery' }
        ]
      }
    ],
    ctaBannerHeading: 'Take Control of Your Gum Health',
    ctaBannerSubheading: 'Discover how LANAP® laser gum therapy can restore your oral health comfortably and effectively.',
    metaTitle: 'LANAP Laser Periodontal Therapy in Middletown, DE | Jolly Smiles',
    metaDescription: 'Treat gum disease without scalpels or stitches. FDA-cleared LANAP® laser periodontal therapy in Middletown, DE at Jolly Smiles.'
  }
};

// Aliases for alternate slug requests
servicesData['teeth-whitening'] = servicesData['cosmetic-dentistry'];
servicesData['porcelain-veneers'] = servicesData['cosmetic-dentistry'];
servicesData['smile-makeovers'] = servicesData['cosmetic-dentistry'];
servicesData['veneers'] = servicesData['cosmetic-dentistry'];
servicesData['orthodontics'] = servicesData['invisalign'];
servicesData['emergency-care'] = servicesData['general-dentistry'];
servicesData['emergency-dentistry'] = servicesData['general-dentistry'];
