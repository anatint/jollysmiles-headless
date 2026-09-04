export interface SubServiceFeature {
  icon: 'shield' | 'clock' | 'sparkles' | 'smile' | 'gem' | 'award' | 'users' | 'target' | 'heart' | 'zap' | 'check' | 'calendar';
  text: string;
}

export interface SubServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconType: 'tooth' | 'veneer' | 'smile' | 'implant' | 'shield' | 'sparkles' | 'award' | 'crown' | 'laser' | 'aligner' | 'gem' | 'clock';
  features: SubServiceFeature[];
}

export interface FAQItem {
  question: string;
  answer: string;
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
  faqs?: FAQItem[];
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
    faqs: [
      {
        question: "What is the difference between porcelain veneers and teeth whitening?",
        answer: "Teeth whitening lifts deep surface stains to brighten the shade of your natural enamel. Porcelain veneers are ultra-thin, custom ceramic shells placed over the front of teeth to correct stubborn discoloration, chips, gaps, or slight misalignments simultaneously."
      },
      {
        question: "How long do porcelain veneers typically last?",
        answer: "With proper oral hygiene and regular dental checkups, high-grade porcelain veneers typically last 10 to 15 years or longer. They are highly durable and naturally resistant to staining from coffee, tea, and wine."
      },
      {
        question: "Will my cosmetic dental treatment look natural?",
        answer: "Yes! Dr. Jeena Jolly customizes every cosmetic procedure to harmonize with your unique facial aesthetics, tooth shape, and smile line, delivering a seamlessly radiant and natural appearance."
      },
      {
        question: "Does professional teeth whitening cause tooth sensitivity?",
        answer: "Some patients may experience mild, temporary sensitivity. Our in-office treatments utilize advanced, enamel-safe formulas with desensitizing agents that maximize brightness while minimizing discomfort."
      },
      {
        question: "What is included in a customized smile makeover?",
        answer: "A smile makeover combines multiple aesthetic treatments tailored to your goals—such as teeth whitening, porcelain veneers, cosmetic bonding, or Invisalign clear aligners—to comprehensively transform your smile."
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
    faqs: [
      {
        question: "How long do dental implants last?",
        answer: "Dental implants are designed to be a permanent, lifelong solution. The titanium implant post fuses directly with your jawbone (osseointegration), achieving success rates exceeding 95–98% with regular oral care."
      },
      {
        question: "Does dental implant surgery hurt?",
        answer: "Most patients report minimal discomfort during and after the procedure. Local anesthesia numbs the area completely, and gentle precision techniques make recovery smooth and straightforward."
      },
      {
        question: "What is the typical recovery time after getting a dental implant?",
        answer: "Most patients return to work and daily activities within 24 to 48 hours. The complete biological integration of the implant with your bone takes between 3 to 6 months before placing your final crown."
      },
      {
        question: "Can I receive dental implants if I have experienced bone loss?",
        answer: "Yes. Using advanced 3D CBCT scans and gentle bone grafting procedures, we can rebuild necessary bone volume to provide a sturdy, stable foundation for long-lasting implants."
      },
      {
        question: "What is the difference between a single implant and All-on-4®?",
        answer: "A single implant replaces an individual missing tooth with an independent crown. All-on-4® replaces an entire dental arch using four strategically placed implants to support a permanent, non-removable bridge."
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
    faqs: [
      {
        question: "How often should I visit the dentist for exams and cleanings?",
        answer: "We recommend scheduling a comprehensive dental exam and professional cleaning every six months. Regular visits prevent plaque buildup, detect cavities early, and protect gum health."
      },
      {
        question: "What are the advantages of tooth-colored composite fillings?",
        answer: "Composite fillings are 100% metal-free and mercury-free. They chemically bond directly to the tooth, preserving more healthy structure while matching your natural enamel color flawlessly."
      },
      {
        question: "What should I do if I experience a sudden dental emergency?",
        answer: "Call Jolly Smiles immediately at (302) 378-3384. We provide same-day emergency appointments in Middletown to relieve acute toothaches, repair broken teeth, and treat dental trauma."
      },
      {
        question: "Are digital dental X-rays safe?",
        answer: "Yes. Our modern digital radiography emits up to 80–90% less radiation than traditional film X-rays, providing immediate high-resolution scans with maximum patient safety."
      },
      {
        question: "Do you treat children and provide family dentistry?",
        answer: "Yes! Jolly Smiles warmly welcomes patients of all ages, from toddlers having their first dental checkup to grandparents, offering compassionate, gentle care tailored to every stage of life."
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
    heroHeading: 'The Clear Way to a Perfect Smile',
    heroParagraphs: [
      "Experience a comfortable and discreet way to straighten your teeth with Invisalign clear aligners. Designed to fit seamlessly into your lifestyle, Invisalign uses a series of custom-made, nearly invisible aligners to gradually move your teeth into the desired position.",
      "Unlike traditional metal braces, these aligners are removable, making it easier to eat, brush, and maintain oral hygiene. Achieve the confident smile you’ve always wanted without the discomfort and visibility of braces."
    ],
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    ctaPrimaryLabel: 'BOOK FREE CONSULTATION',
    ctaSecondaryLabel: 'CONSULT OUR EXPERTS',
    categoryEyebrow: 'WHAT IS THE PROCEDURE OF INVISALIGN?',
    categoryHeading: 'The Clear Way to a Perfect Smile',
    categoryDescription: 'A clear, step-by-step journey to your perfect smile using advanced aligner technology and expert orthodontic care at Jolly Smiles in Middletown, DE:',
    subServices: [
      {
        id: 'expert-orthodontic-care',
        title: 'Step 1: Expert Orthodontic Care',
        description: 'Board certified orthodontic care with a proven track record in smile transformations. Dr. Jeena Jolly and our experienced team design personalized treatment plans tailored to your unique smile goals.',
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
        iconType: 'award',
        features: [
          { icon: 'award', text: 'Board Certified Care' },
          { icon: 'smile', text: 'Proven Track Record' },
          { icon: 'target', text: 'Personalized Plans' }
        ]
      },
      {
        id: 'advanced-digital-technology',
        title: 'Step 2: Advanced Digital Technology',
        description: 'High-precision 3D digital impressions and 3D X-rays for accurate and comfortable treatment planning. Preview your future smile before starting, with no messy impression putty.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
        iconType: 'sparkles',
        features: [
          { icon: 'target', text: 'High-Precision 3D Scans' },
          { icon: 'clock', text: 'Digital Treatment Planning' },
          { icon: 'shield', text: 'Comfortable Experience' }
        ]
      },
      {
        id: 'custom-aligner-creation',
        title: 'Step 3: Custom Creation & SmartTrack®',
        description: 'Your aligners are custom-made with advanced medical-grade SmartTrack® materials for a comfortable fit and effective results. Designed to gently guide your teeth into optimal alignment.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'aligner',
        features: [
          { icon: 'gem', text: 'SmartTrack® Material' },
          { icon: 'check', text: 'Removable Before Eating' },
          { icon: 'smile', text: 'Virtually Invisible' }
        ]
      },
      {
        id: 'wearing-aligners-progress',
        title: 'Step 4: Wearing Aligners & Tracking Progress',
        description: 'Wear each aligner set for 1–2 weeks to gradually move your teeth, with regular check-ups at our Middletown clinic to ensure your smile transformation stays smoothly on track.',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
        iconType: 'clock',
        features: [
          { icon: 'clock', text: 'Wear 1–2 Weeks Each' },
          { icon: 'shield', text: 'Regular Progress Check-Ups' },
          { icon: 'sparkles', text: 'Results You Can Trust' }
        ]
      },
      {
        id: 'tips-for-success',
        title: 'Tips for Success & Daily Wear',
        description: 'To get the best results from your Invisalign treatment, follow these essential tips: wear aligners 20–22 hours daily, remove before eating and drinking, maintain daily cleanliness with lukewarm water and a soft brush, and follow each sequence in order.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
        iconType: 'shield',
        features: [
          { icon: 'clock', text: 'Wear 20–22 Hours Daily' },
          { icon: 'check', text: 'Remove Before Eating' },
          { icon: 'sparkles', text: 'Daily Cleaning Routine' }
        ]
      },
      {
        id: 'why-choose-jolly-smiles',
        title: 'Why Choose Jolly Smiles for Invisalign?',
        description: 'Experience board certified care, flexible payment options, advanced 3D scanning, individualized treatment plans, and a warm, comfort-focused environment dedicated to giving you the smile you deserve.',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
        iconType: 'gem',
        features: [
          { icon: 'zap', text: 'Affordable Payment Plans' },
          { icon: 'target', text: 'Personalized Treatment' },
          { icon: 'heart', text: 'Comfort-Focused Care' }
        ]
      }
    ],
    faqs: [
      {
        question: "How many hours a day should I wear my Invisalign aligners?",
        answer: "For maximum effectiveness, wear your aligners for 20 to 22 hours each day, removing them only when eating, drinking non-water beverages, brushing, and flossing."
      },
      {
        question: "How long does Invisalign treatment take on average?",
        answer: "Treatment length varies based on each patient's individual dental needs, with most adults completing their smile transformation within 6 to 18 months."
      },
      {
        question: "Can I eat and drink normally while undergoing Invisalign?",
        answer: "Yes! Because Invisalign aligners are completely removable, there are zero dietary restrictions. You can continue enjoying all your favorite foods without worrying about broken brackets."
      },
      {
        question: "Is Invisalign treatment painful or uncomfortable?",
        answer: "Most patients experience a slight feeling of pressure for the first 24 to 48 hours after inserting a new tray, which is a normal indicator that your teeth are moving as planned."
      },
      {
        question: "Does dental insurance cover Invisalign in Middletown, DE?",
        answer: "Many dental insurance plans provide orthodontic coverage that includes Invisalign just like traditional braces. Our team helps you verify benefits and offers affordable financing options."
      }
    ],
    ctaBannerHeading: 'Ready to Love Your Smile?',
    ctaBannerSubheading: "Schedule your free Invisalign consultation today with Dr. Jeena Jolly at Jolly Smiles in Middletown, DE.",
    metaTitle: 'Invisalign Middletown DE | Clear Aligners | Jolly Smiles',
    metaDescription: 'Get Invisalign clear aligners at Jolly Smiles in Middletown, DE. Dr. Jeena Jolly offers custom treatment plans for adults and teens. Schedule your free consultation today. Call 302-378-3384.'
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
    faqs: [
      {
        question: "How can a dental crown be fabricated and placed in a single visit?",
        answer: "We use CEREC 3D digital CAD/CAM technology to take a digital scan of your tooth, design a custom ceramic crown, and mill it in-office within minutes, placing it permanently in one visit."
      },
      {
        question: "Are same-day CEREC crowns as strong as lab-made crowns?",
        answer: "Yes. CEREC crowns are precision-milled from high-strength, biocompatible ceramic blocks engineered to withstand normal chewing forces and match the longevity of traditional crowns."
      },
      {
        question: "Do I need messy putty impressions for a same-day crown?",
        answer: "No! We use a comfortable, high-resolution 3D optical camera to scan your teeth digitally, completely eliminating uncomfortable gooey impression trays."
      },
      {
        question: "Will my new crown match the shade of my natural teeth?",
        answer: "Yes. Dr. Jeena Jolly carefully shade-matches the ceramic block to blend invisibly with your surrounding teeth for a natural, seamless look."
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
    faqs: [
      {
        question: "What is LANAP® laser periodontal therapy?",
        answer: "LANAP (Laser-Assisted New Attachment Procedure) is an FDA-cleared laser protocol that treats moderate to advanced gum disease without scalpels or stitches, eliminating 99% of bacteria."
      },
      {
        question: "How does LANAP differ from traditional gum surgery?",
        answer: "Unlike conventional osseous surgery that cuts and removes healthy tissue, the PerioLase laser selectively targets diseased tissue and bacteria while preserving healthy gums and stimulating natural bone regeneration."
      },
      {
        question: "Is LANAP laser therapy painful?",
        answer: "LANAP causes significantly less pain and swelling than traditional surgery. Most patients require only local anesthetic and report feeling minimal discomfort post-procedure."
      },
      {
        question: "How fast is the recovery period after LANAP?",
        answer: "Most patients return to work and their normal routine within 24 hours. There are no incisions or stitches to heal, allowing for a rapid, comfortable recovery."
      },
      {
        question: "Can LANAP laser treatment save teeth that are already loose?",
        answer: "Yes! LANAP is specifically clinically proven to regenerate the bone and connective tissues supporting teeth, often saving teeth that would otherwise need extraction."
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
