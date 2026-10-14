import type { ServiceDetailData, SubServiceItem } from '../servicesData';

type IconType = SubServiceItem['iconType'];
type Card = [title: string, description: string, iconType: IconType, features?: string[]];
type FeatureIcon = SubServiceItem['features'][number]['icon'];

const FALLBACK_IMAGE = '/dental-chair.png';

const FEATURE_ICONS: FeatureIcon[] = ['shield', 'clock', 'sparkles', 'smile', 'gem', 'award', 'users', 'target', 'heart', 'zap', 'check', 'calendar'];

const kebab = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');

const buildCards = (cards: Card[], images: string[]): SubServiceItem[] => {
  const pool = images.length ? images : [FALLBACK_IMAGE];
  return cards.map(([title, description, iconType, features], i) => ({
    id: kebab(title),
    title,
    description,
    image: pool[i % pool.length],
    imageAlt: `${title} - Jolly Smiles`,
    iconType,
    features: (features ?? []).map((text, j) => ({ icon: FEATURE_ICONS[(i * 3 + j) % FEATURE_ICONS.length], text })),
  }));
};

const CTA = {
  ctaPrimaryLabel: 'BOOK APPOINTMENT',
  ctaSecondaryLabel: 'CONSULT OUR EXPERTS',
};

/* ---------------- Dental Implants in Middletown ---------------- */

const implantCards: Card[] = [
  [
    'Dental Implants vs Traditional Dentures',
    'Dental implants are permanent tooth replacements designed to replace missing or damaged teeth. They consist of a small titanium post that is surgically placed into the jawbone to act as an artificial tooth root. A custom-made crown is then attached to the implant, creating a natural-looking tooth. Unlike traditional dentures or bridges, dental implants: Look and feel like natural teeth. Provide strong support for chewing and speaking. Help prevent bone loss in the jaw. Do not affect nearby healthy teeth. Offer a long-term solution for missing teeth. At Jolly Smiles in Middletown, we customize each implant treatment to match your oral health needs and smile goals.',
    'implant',
    ['Natural Teeth', 'Chewing and Speaking', 'Prevent Bone Loss'],
  ],
  [
    'Reasons for Tooth Loss',
    'Teeth may be lost due to several reasons, including: Tooth decay or severe cavities. Gum disease (periodontal disease). Injury or accidents. Aging and wear. Failed root canal treatments. Congenital missing teeth. Dental implants help restore both the function and appearance of your smile by replacing missing teeth with strong, natural-looking alternatives.',
    'tooth',
    ['Tooth Decay', 'Gum Disease', 'Failed Root Canal'],
  ],
  [
    'Consultation & Examination',
    'During your first visit, our dentist will examine your teeth, gums, and jawbone. Digital scans or X-rays may be taken to determine if dental implants are the right solution for you. Implant Placement: A small titanium implant post is carefully placed into the jawbone where the missing tooth was located. This procedure is performed with precision and patient comfort in mind.',
    'tooth',
    ['Digital Scans', 'Implant Placement', 'Titanium Implant Post'],
  ],
  [
    'Healing & Bone Integration',
    'Over the next few months, the implant naturally fuses with the jawbone through a process called osseointegration, creating a strong foundation for the new tooth. Crown Placement: Once healing is complete, a custom-made dental crown is attached to the implant, restoring the appearance and function of your tooth.',
    'shield',
    ['Bone Integration', 'Osseointegration', 'Custom Dental Crown'],
  ],
  [
    'Final Results',
    'You leave our Middletown dental office with a strong, natural-looking smile that feels and functions like your real teeth. Natural Appearance: Dental implants look and feel just like your natural teeth, blending seamlessly with your smile. Long-Lasting Solution: With proper care, implants can last many years or even a lifetime.',
    'smile',
    ['Natural Appearance', 'Long-Lasting Solution', 'Real Teeth'],
  ],
  [
    'Improved Comfort & Stability',
    'Unlike dentures, implants stay securely in place and do not slip while eating or speaking. Better Oral Health: Dental implants help preserve the jawbone and prevent the shifting of surrounding teeth. Improved Confidence: Restoring missing teeth can enhance your smile and boost self-confidence.',
    'award',
    ['Comfort & Stability', 'Better Oral Health', 'Improved Confidence'],
  ],
  [
    'Maintaining Your Dental Implants',
    'To maintain the health and longevity of your dental implants: Brush your teeth twice daily. Floss regularly around the implant area. Avoid chewing extremely hard foods. Schedule routine dental checkups and cleanings. Maintain good overall oral hygiene. With proper care, dental implants can remain strong, functional, and beautiful for many years. To keep your teeth bright after treatment: Avoid staining foods and beverages. Use a straw when drinking dark liquids. Quit smoking or tobacco use. Schedule regular dental cleanings. Consider touch-up treatments when needed.',
    'sparkles',
    ['Brush Twice Daily', 'Dental Checkups', 'Avoid Staining Foods'],
  ],
];

/* ---------------- Affordable Dental Implants ---------------- */

const affordableImages = [
  'https://static.wixstatic.com/media/0840ea_4ed8c25dbb7744fdbefd2a1625f928e5~mv2.jpg',
  'https://static.wixstatic.com/media/0840ea_179300f76d9a432b80f7761a1f227558~mv2.jpg',
];

const affordableCards: Card[] = [
  [
    'What Each Implant Includes',
    'A dental implant is a small titanium post placed into the jawbone to support a replacement tooth. Over time, the implant fuses with the bone through a process called osseointegration, creating a stable and durable base. Each implant typically includes: Implant Post – Replaces the tooth root. Abutment – Connects the implant to the restoration. Dental Crown – Custom-made tooth replacement. This advanced tooth replacement option restores both appearance and functionality while helping maintain jawbone density.',
    'implant',
    ['Implant Post', 'Abutment', 'Dental Crown'],
  ],
  [
    'Why Patients Choose Implants',
    'Patients choose dental implants because they offer: Long-lasting and durable results. Natural look and feel. Improved chewing and speech. Prevention of bone loss. No slipping or discomfort. Protection for surrounding teeth. With proper care, implants can last for decades, making them a cost-effective long-term investment in your smile.',
    'award',
    ['Long-Lasting Results', 'Natural Look', 'Improved Chewing'],
  ],
  [
    'Affordable Dental Implant Solutions',
    'We understand that cost is an important factor when considering dental implants. Our team focuses on providing affordable dental implant solutions without compromising quality or safety. We offer: Transparent pricing. Flexible payment options. Customized treatment plans. Guidance on insurance coverage. During your consultation, we evaluate your oral health and recommend the most suitable implant option based on your needs and budget.',
    'gem',
    ['Transparent Pricing', 'Flexible Payment Options', 'Customized Treatment Plans'],
  ],
  [
    'Single Tooth Implants',
    'Ideal for replacing one missing tooth without affecting adjacent teeth. Implant-Supported Bridges: A great solution for multiple missing teeth in a row.',
    'tooth',
    ['Single Tooth Implants', 'Implant-Supported Bridges', 'Multiple Missing Teeth'],
  ],
  [
    'Full Arch Implants',
    'Replace an entire upper or lower set of teeth with secure implant-supported dentures. Each treatment plan is carefully designed to restore comfort, aesthetics, and long-term oral health.',
    'smile',
    ['Full Arch Implants', 'Implant-Supported Dentures', 'Long-Term Oral Health'],
  ],
  [
    'Patients Trust Our Practice',
    'Patients trust our practice because we combine advanced technology with personalized care. We focus on: Precision treatment planning. High-quality materials. Comfortable procedures. Patient-centered care. Long-term follow-up support. Our goal is to restore your smile with solutions that look natural and function beautifully.',
    'shield',
    ['Precision Treatment Planning', 'High-Quality Materials', 'Patient-Centered Care'],
  ],
];

/* ---------------- Crowns & Bridges ---------------- */

const crownsImages = [
  'https://static.wixstatic.com/media/0840ea_91dfd40e5e6b44d9863561899ea8a4c2~mv2.jpg',
  'https://static.wixstatic.com/media/0840ea_1fd50c9930234af3a173ea95e2b414c6~mv2.jpg',
];

const crownsCards: Card[] = [
  [
    'What Is a Dental Crown',
    'A dental crown is a custom-made cap that completely covers a damaged or weakened tooth. Crowns are typically crafted from durable materials like porcelain, ceramic, or zirconia that blend naturally with your smile. This makes them both functional and aesthetically pleasing. Crowns are commonly recommended to: Protect a cracked, worn, or decayed tooth from further damage. Restore shape, size, and strength after a large filling. Support a tooth after root canal therapy. Cover a dental implant for a complete tooth replacement. Improve the appearance of discolored or misshapen teeth.',
    'crown',
    ['Custom-Made Cap', 'Porcelain or Zirconia', 'Protect Damaged Tooth'],
  ],
  [
    'What Is a Dental Bridge',
    'A dental bridge replaces one or more missing teeth, filling the gap with a prosthetic tooth (or teeth) anchored to adjacent natural teeth or crowns. The bridge restores your ability to chew and speak properly, maintains facial structure, and prevents surrounding teeth from shifting out of place. Bridges are ideal when you’re missing one or more consecutive teeth and have healthy neighboring teeth to support the restoration.',
    'implant',
    ['Prosthetic Tooth', 'Consecutive Missing Teeth', 'Facial Structure'],
  ],
  [
    'Consultation & Planning',
    'Your dentist evaluates your oral health, takes X-rays, and discusses the best treatment option for your needs (crown, bridge, or both). Tooth Preparation: Damaged teeth (or supporting teeth next to a gap) are gently reshaped to prepare for the crown or bridge. Very precise impressions are taken to create your custom restoration.',
    'tooth',
    ['Oral Health Evaluation', 'Tooth Preparation', 'Precise Impressions'],
  ],
  [
    'Final Placement',
    'While your permanent crown or bridge is being made, a temporary version protects your smile. Once your custom-fit restoration is ready, it’s carefully secured and adjusted for comfort, function, and natural appearance.',
    'crown',
    ['Temporary Restoration', 'Custom-Fit Restoration', 'Natural Appearance'],
  ],
  [
    'Restored Functionality',
    'Crowns and bridges allow you to chew, speak, and bite with confidence and comfort. Improved Appearance: These restorations blend seamlessly with your natural teeth, enhancing your smile and overall facial aesthetics. Long-Lasting Results: With good oral hygiene and routine dental checkups, crowns and bridges can last many years — often a decade or more. Prevent Future Issues: Bridges especially help prevent adjacent teeth from drifting into empty spaces, reducing the risk of bite problems and further tooth loss.',
    'smile',
    ['Improved Appearance', 'Long-Lasting Results', 'Prevent Future Issues'],
  ],
  [
    'Protect Your Investment',
    'To protect your investment and maximize longevity: Brush twice daily with a soft-bristle toothbrush and fluoride toothpaste. Floss and use interdental brushes to clean around the restoration. Avoid biting hard objects (like ice or hard candies). Continue regular dental checkups and cleanings with your Jolly Smiles dentist. If you grind your teeth, ask about a custom night guard. Good oral hygiene and routine professional care help your crowns and bridges stay strong and functional for many years.',
    'shield',
    ['Brush Twice Daily', 'Interdental Brushes', 'Custom Night Guard'],
  ],
];

/* ---------------- Same-Day Dental Crowns ---------------- */

const sameDayCards: Card[] = [
  [
    'CEREC Crown Technology',
    'CEREC (Chairside Economical Restoration of Esthetic Ceramics) technology allows us to design, create, and place custom ceramic crowns in a single visit. Unlike traditional crowns that require: Multiple appointments. Messy impressions. Temporary crowns. Waiting weeks for a dental lab. CEREC crowns are digitally designed and milled right here in our office while you relax.',
    'clock',
    ['Custom Ceramic Crowns', 'Single Visit', 'Digitally Designed'],
  ],
  [
    'Advantages of Same-Day Crowns',
    'Choosing same-day crowns at Jolly Smiles offers several advantages: Completed in just one appointment. No temporary crowns needed. Digital impressions for greater comfort. Strong, durable ceramic material. Natural appearance that blends with your smile. Less time away from work or daily activities. You walk in with a damaged tooth and leave with a fully restored smile — the very same day.',
    'crown',
    ['One Appointment', 'No Temporary Crowns', 'Digital Impressions'],
  ],
  [
    'A Dental Crown May Be Recommended',
    'A dental crown may be recommended if you have: A cracked or fractured tooth. Severe tooth decay. A large filling that needs support. A worn-down tooth. A tooth after root canal treatment. A cosmetic concern affecting tooth shape or appearance. Crowns protect and strengthen your natural tooth while restoring its function and appearance.',
    'tooth',
    ['Fractured Tooth', 'Severe Tooth Decay', 'Root Canal Treatment'],
  ],
  [
    'Your Same-Day Crown Appointment',
    'Your same-day crown appointment at Jolly Smiles is simple and efficient: Digital Scan: We take precise 3D images of your tooth — no messy impressions. Custom Design: Your crown is digitally designed to match your bite and surrounding teeth. On-Site Milling: The crown is created in our office using advanced CEREC technology. Placement: We bond the permanent crown securely in place during the same visit.',
    'sparkles',
    ['Digital Scan', 'Custom Design', 'On-Site Milling'],
  ],
  [
    'Modern Solutions That Save Time',
    'Advanced CEREC technology. Experienced and skilled dental team. Comfortable and efficient treatment. High-quality, long-lasting restorations. Convenient location in Middletown. We focus on providing modern solutions that save you time without compromising quality.',
    'award',
    ['CEREC Technology', 'Skilled Dental Team', 'Convenient Middletown Location'],
  ],
];

/* ---------------- Inlays & Onlays ---------------- */

const inlayCards: Card[] = [
  [
    'Custom Inlays and Onlays',
    'Inlays and onlays are custom restorations made from porcelain, composite resin, or gold, designed to repair teeth with moderate decay or damage. Inlays fit within the grooves of a tooth (between the cusps). Onlays extend over one or more cusps of the tooth. They are precisely crafted to match your natural tooth color and shape, ensuring a seamless and natural appearance.',
    'tooth',
    ['Custom Restorations', 'Moderate Tooth Decay', 'Natural Tooth Color'],
  ],
  [
    'Your Dentist May Recommend Inlays',
    'Your dentist may recommend inlays or onlays if you have: Moderate tooth decay that cannot be treated with a filling. Cracked or fractured teeth. Old or failing fillings that need replacement. Damage that doesn’t require a full dental crown. A desire for a stronger, longer-lasting restoration. These restorations help reinforce the tooth structure and prevent further damage.',
    'shield',
    ['Cracked Teeth', 'Failing Fillings', 'Longer-Lasting Restoration'],
  ],
  [
    'Consultation & Evaluation',
    'We assess your tooth condition and determine whether an inlay or onlay is the best option. Tooth Preparation: The damaged or decayed portion of the tooth is carefully removed and cleaned. Impressions & Custom Design: We take precise impressions to create a custom restoration that fits perfectly.',
    'tooth',
    ['Tooth Preparation', 'Precise Impressions', 'Custom Design'],
  ],
  [
    'Temporary Restoration',
    'A temporary inlay/onlay may be placed while your permanent restoration is being crafted. Final Placement: The custom inlay or onlay is bonded securely to your tooth, restoring its strength and function.',
    'crown',
    ['Temporary Inlay', 'Final Placement', 'Bonded Securely'],
  ],
  [
    'Preserves Natural Tooth Structure',
    'Requires less removal of healthy tooth compared to crowns. Durable & Long-Lasting: Made from strong materials that can last many years with proper care. Natural Appearance: Blends seamlessly with your natural teeth. Improved Strength: Reinforces weakened teeth and prevents further damage. Stain Resistant: Porcelain materials resist staining better than traditional fillings.',
    'award',
    ['Durable & Long-Lasting', 'Improved Strength', 'Stain Resistant'],
  ],
  [
    'Choosing the Best Restorative Option',
    'Have mild to moderate tooth damage. Want a more durable option than fillings. Prefer a conservative alternative to crowns. Maintain good oral hygiene and healthy gums. Our team at Jolly Smiles Middletown will help you choose the best restorative option based on your needs.',
    'smile',
    ['Durable Option', 'Conservative Alternative', 'Healthy Gums'],
  ],
  [
    'Restoration in Excellent Condition',
    'To keep your restoration in excellent condition: Avoid biting on very hard objects. Limit foods and drinks that may stain. Visit your dentist regularly for checkups. Wear a night guard if you grind your teeth. With proper care, inlays and onlays can last for many years.',
    'sparkles',
    ['Hard Objects', 'Visit Your Dentist', 'Night Guard'],
  ],
];

/* ---------------- Root Canal Treatment ---------------- */

const rootCanalCards: Card[] = [
  [
    'Root Canal Treatment',
    'Root canal treatment is a dental procedure used to remove infected or damaged pulp from inside the tooth. The pulp contains nerves and blood vessels, and when it becomes infected, it can cause pain and swelling. This treatment involves: Removing the infected pulp. Cleaning and disinfecting the inner canals. Filling and sealing the tooth. Restoring the tooth with a crown (if needed). Root canal therapy helps preserve your natural tooth and eliminates the need for extraction.',
    'tooth',
    ['Infected Pulp', 'Disinfecting Inner Canals', 'Preserve Natural Tooth'],
  ],
  [
    'You May Require a Root Canal',
    'You may require a root canal if you experience: Persistent tooth pain or throbbing. Sensitivity to hot or cold that lingers. Swollen or tender gums. Darkening or discoloration of the tooth. A small bump (abscess) on the gums. Pain while chewing or biting. If you notice any of these symptoms, it’s important to seek dental care promptly.',
    'shield',
    ['Persistent Tooth Pain', 'Tender Gums', 'Pain While Chewing'],
  ],
  [
    'Consultation & Diagnosis',
    'We examine your tooth using digital X-rays to determine the extent of infection and create a personalized treatment plan. Local Anesthesia: The area is numbed to ensure a painless and comfortable experience throughout the procedure.',
    'tooth',
    ['Digital X-rays', 'Personalized Treatment Plan', 'Local Anesthesia'],
  ],
  [
    'Cleaning the Infection',
    'The infected pulp is carefully removed, and the root canals are cleaned and disinfected. Filling & Sealing: The canals are filled with a biocompatible material and sealed to prevent reinfection. Restoration: A dental crown may be placed to restore strength, function, and appearance.',
    'sparkles',
    ['Biocompatible Material', 'Prevent Reinfection', 'Dental Crown'],
  ],
  [
    'Pain Relief',
    'Eliminates the source of infection and discomfort. Saves Your Natural Tooth: Avoids extraction and maintains your natural bite. Prevents Further Infection: Stops bacteria from spreading to surrounding teeth and gums. Restores Function: Allows you to chew and speak normally. Long-Lasting Results: With proper care, treated teeth can last many years.',
    'smile',
    ['Saves Natural Tooth', 'Prevents Further Infection', 'Restores Function'],
  ],
  [
    'Best Treatment Option for Your Needs',
    'Have a deeply decayed or infected tooth. Want to save your natural tooth instead of extraction. Experience ongoing tooth pain or sensitivity. Have swelling or signs of dental infection. Are in good overall oral health. Our team at Jolly Smiles Middletown will guide you toward the best treatment option for your needs.',
    'award',
    ['Deeply Decayed Tooth', 'Ongoing Tooth Pain', 'Signs of Infection'],
  ],
  [
    'Ensuring Long-Lasting Results',
    'To ensure long-lasting results: Avoid chewing hard foods immediately after treatment. Take prescribed medications as directed. Attend regular dental checkups. Maintain good oral hygiene habits. Proper care helps protect your restored tooth and overall oral health.',
    'shield',
    ['Prescribed Medications', 'Regular Dental Checkups', 'Oral Hygiene Habits'],
  ],
];

/* ---------------- Missing Teeth ---------------- */

const missingCards: Card[] = [
  ['Dental Bridge', 'With the help of adjacent teeth, an artificial tooth is fixed, replacing the missing tooth.', 'implant', ['Adjacent Teeth', 'Artificial Tooth', 'Missing Tooth']],
  ['Dentures', 'Removable components resembling teeth and the surrounding gums. They can be “complete” (replacing all the upper or lower teeth) or “partial” (replacing teeth while some natural teeth stand)', 'smile', ['Removable Components', 'Surrounding Gums', 'Natural Teeth']],
];

/* ---------------- Entries ---------------- */

const real: Record<string, ServiceDetailData> = {
  'dental-implants-in-middletown': {
    slug: 'dental-implants-in-middletown',
    title: 'Dental Implants in Middletown',
    heroHeading: 'Dental Implants in Middletown',
    heroParagraphs: [
      'At Jolly Smiles, we offer advanced dental implant solutions in Middletown to restore missing teeth and bring back your confident smile. Missing teeth can affect your ability to eat, speak, and smile comfortably. Dental implants provide a long-lasting and natural-looking replacement that functions just like your real teeth.',
      'Our experienced dental team uses modern techniques and high-quality implant materials to ensure safe, precise, and comfortable treatment. With dental implants, you can enjoy a strong, stable, and beautiful smile for years to come.',
    ],
    heroImage: FALLBACK_IMAGE,
    heroImageAlt: 'Dental Implants in Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT DENTAL IMPLANTS',
    categoryHeading: 'Dental Implants in Middletown',
    categoryDescription:
      'Restore your smile with dental implants in Middletown at Jolly Smiles. Our long-lasting, natural-looking implants replace missing teeth and improve confidence. Book a consultation today.',
    subServices: buildCards(implantCards, []),
    faqs: [
      { question: 'How long do dental implants last?', answer: 'With proper care and regular dental visits, dental implants can last 20 years or more, and many last a lifetime.' },
      { question: 'Is the dental implant procedure painful?', answer: 'The procedure is performed using local anesthesia, making it comfortable for most patients. Mild soreness may occur after surgery but usually subsides within a few days.' },
      { question: 'How long does the implant process take?', answer: 'The full treatment process can take 3 to 6 months, depending on healing time and individual oral health conditions.' },
      { question: 'Can dental implants replace multiple teeth?', answer: 'Yes. Dental implants can support single crowns, bridges, or even full-arch dentures depending on your needs.' },
      { question: 'Are dental implants safe?', answer: 'Yes. Dental implants are a well-established and highly successful treatment used in modern dentistry for replacing missing teeth.' },
    ],
    metaTitle: 'Dental Implants in Middletown | Tooth Replacement | Jolly Smiles',
    metaDescription:
      'Restore your smile with dental implants in Middletown at Jolly Smiles. Our long-lasting, natural-looking implants replace missing teeth and improve confidence. Book a consultation today.',
    canonical: 'https://www.jollysmiles.com/dental-implants-in-middletown',
    sourceUrl: 'https://www.jollysmiles.com/dental-implants-in-middletown',
  },

  'affordable-dental-implants-in-middletown': {
    slug: 'affordable-dental-implants-in-middletown',
    title: 'Affordable Dental Implants in Middletown',
    heroHeading: 'Affordable Dental Implants in Middletown',
    heroParagraphs: [
      'If you are missing one or more teeth, dental implants offer a permanent and natural-looking solution. At Jolly Smiles, we provide affordable dental implants in Middletown to help patients regain confidence, function, and long-term oral health.',
      'Dental implants are designed to replace the root of a missing tooth, creating a strong foundation for a crown, bridge, or denture. Unlike removable options, implants stay securely in place and feel just like your natural teeth.',
    ],
    heroImage: affordableImages[0],
    heroImageAlt: 'Affordable Dental Implants in Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT AFFORDABLE DENTAL IMPLANTS',
    categoryHeading: 'Affordable Dental Implants in Middletown',
    categoryDescription:
      'Restore your smile with permanent dental implants. Schedule a consultation at Jolly Smiles for expert tooth replacement in Middletown.',
    subServices: buildCards(affordableCards, affordableImages),
    faqs: [
      { question: 'How long do dental implants last?', answer: 'With proper care and regular dental visits, implants can last many years or even a lifetime.' },
      { question: 'Are dental implants painful?', answer: 'Most patients report minimal discomfort during and after the procedure. We ensure your comfort throughout treatment.' },
      { question: 'How long does the implant process take?', answer: 'The full process may take several months, depending on healing time and individual needs.' },
      { question: 'Are dental implants better than dentures?', answer: 'Implants provide greater stability, improved chewing ability, and better long-term oral health compared to removable dentures.' },
    ],
    metaTitle: 'Affordable Dental Implants Middletown',
    metaDescription:
      'Restore your smile with permanent dental implants. Schedule a consultation at Jolly Smiles for expert tooth replacement in Middletown.',
    canonical: 'https://www.jollysmiles.com/affordable-dental-implants-in-middletown',
    sourceUrl: 'https://www.jollysmiles.com/affordable-dental-implants-in-middletown',
  },

  'crowns-bridges': {
    slug: 'crowns-bridges',
    title: 'Crowns & Bridges in Middletown',
    heroHeading: 'Crowns & Bridges in Middletown',
    heroParagraphs: [
      'At Jolly Smiles, we understand how important a healthy, confident smile is to your overall well-being. Dental crowns and bridges are two of the most effective restorative procedures available — designed to protect damaged teeth, replace missing ones, improve oral function, and restore a beautiful, natural-looking smile. Whether you need a crown to save a weakened tooth or a bridge to fill gaps, our skilled team in Middletown offers personalized care with long-lasting results.',
    ],
    heroImage: crownsImages[0],
    heroImageAlt: 'Crowns & Bridges in Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT CROWNS & BRIDGES',
    categoryHeading: 'Crowns & Bridges in Middletown',
    categoryDescription:
      'Restore your smile with durable dental crowns and bridges in Middletown at Jolly Smiles. Improve function, appearance, and confidence. Schedule your visit today!',
    subServices: buildCards(crownsCards, crownsImages),
    faqs: [
      { question: 'How long do dental crowns and bridges last?', answer: 'With proper oral hygiene and regular dental checkups, dental crowns and bridges can last 10 to 15 years or even longer. Their lifespan depends on the material used, your bite, and how well you care for your teeth.' },
      { question: 'Is getting a dental crown or bridge painful?', answer: 'The procedure is generally comfortable and performed under local anesthesia. Most patients experience minimal discomfort. Mild sensitivity after the procedure is normal and usually temporary.' },
      { question: 'How do I know if I need a crown or a bridge?', answer: 'You may need a crown if you have a cracked, severely decayed, or root-canal-treated tooth. A bridge is recommended if you are missing one or more teeth and want a fixed, non-removable replacement. Our dentist in Middletown will evaluate your condition and suggest the best option.' },
      { question: 'What materials are used for crowns and bridges?', answer: 'Crowns and bridges are commonly made from porcelain, ceramic, zirconia, or porcelain-fused-to-metal. At Jolly Smiles in Middletown, we use durable, natural-looking materials that blend seamlessly with your smile.' },
      { question: 'How long does the crowns and bridges procedure take?', answer: 'Typically, the process takes two visits. The first visit includes tooth preparation and impressions, and the second visit involves placing the permanent restoration. In some cases, same-day crowns may be available depending on the technology used.' },
      { question: 'Can a dental bridge replace multiple missing teeth?', answer: 'Yes. A dental bridge can replace one or more consecutive missing teeth, provided there are strong supporting teeth on either side of the gap.' },
      { question: 'How do I take care of my dental crown or bridge?', answer: 'Maintain good oral hygiene by brushing twice daily, flossing regularly (especially around the bridge area), and visiting your dentist for routine cleanings and checkups. Avoid chewing hard objects like ice or hard candies.' },
      { question: 'Are crowns and bridges better than dental implants?', answer: 'Both are effective solutions. Crowns and bridges are ideal when surrounding teeth can provide support, while dental implants are standalone replacements that do not rely on adjacent teeth. Your dentist in Middletown will recommend the best treatment based on your oral health and goals.' },
      { question: 'Will my crown or bridge look natural?', answer: 'Yes. Modern crowns and bridges are custom-designed to match the color, shape, and size of your natural teeth, ensuring a seamless and aesthetically pleasing result.' },
      { question: 'Does insurance cover crowns and bridges?', answer: 'Many dental insurance plans partially cover crowns and bridges when they are medically necessary. Our Middletown team can help you understand your coverage and payment options.' },
    ],
    metaTitle: 'Crowns & Bridges in Middletown | Restorative Dentistry',
    metaDescription:
      'Restore your smile with durable dental crowns and bridges in Middletown at Jolly Smiles. Improve function, appearance, and confidence. Schedule your visit today!',
    canonical: 'https://www.jollysmiles.com/crowns-bridges',
    sourceUrl: 'https://www.jollysmiles.com/crowns-bridges',
  },

  'same-day-dental-crowns-middletown': {
    slug: 'same-day-dental-crowns-middletown',
    title: 'Same-Day Dental Crowns Middletown',
    heroHeading: 'Same-Day Dental Crowns Middletown',
    heroParagraphs: [
      'If you have a damaged, cracked, or severely decayed tooth, waiting weeks for a permanent crown is no longer necessary. At Jolly Smiles, we offer advanced same-day dental crowns in Middletown using CEREC technology. That means you can receive a strong, natural-looking permanent crown in just one appointment — with no temporary crowns and no second visit required.',
    ],
    heroImage: affordableImages[0],
    heroImageAlt: 'Same-Day Dental Crowns Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT SAME-DAY DENTAL CROWNS',
    categoryHeading: 'Same-Day Dental Crowns Middletown',
    categoryDescription:
      'Get permanent CEREC dental crowns in just one visit. No temporary crowns or second appointments needed at Jolly Smiles.',
    subServices: buildCards(sameDayCards, affordableImages),
    metaTitle: 'Same-Day Dental Crowns Middletown',
    metaDescription:
      'Get permanent CEREC dental crowns in just one visit. No temporary crowns or second appointments needed at Jolly Smiles.',
    canonical: 'https://www.jollysmiles.com/same-day-dental-crowns-middletown',
    sourceUrl: 'https://www.jollysmiles.com/same-day-dental-crowns-middletown',
  },

  'inlays-and-onlays': {
    slug: 'inlays-and-onlays',
    title: 'Inlays & Onlays in Middletown',
    heroHeading: 'Inlays & Onlays in Middletown',
    heroParagraphs: [
      'At Jolly Smiles, we offer high-quality inlays and onlays in Middletown to restore damaged or decayed teeth while preserving as much natural tooth structure as possible. These custom-made restorations provide a durable and aesthetically pleasing alternative to traditional fillings and crowns.',
      'If you have a moderately damaged tooth that needs more support than a filling but doesn’t require a full crown, inlays and onlays may be the ideal solution for you.',
    ],
    heroImage: FALLBACK_IMAGE,
    heroImageAlt: 'Inlays & Onlays in Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT INLAYS & ONLAYS',
    categoryHeading: 'Inlays & Onlays in Middletown',
    categoryDescription:
      'Restore damaged teeth with custom inlays & onlays in Middletown at Jolly Smiles. Durable, natural-looking solutions for long-lasting dental health.',
    subServices: buildCards(inlayCards, []),
    metaTitle: 'Inlays & Onlays in Middletown | Jolly Smiles Dental Care',
    metaDescription:
      'Restore damaged teeth with custom inlays & onlays in Middletown at Jolly Smiles. Durable, natural-looking solutions for long-lasting dental health.',
    canonical: 'https://www.jollysmiles.com/inlays-and-onlays',
    sourceUrl: 'https://www.jollysmiles.com/inlays-and-onlays',
  },

  'root-canal-treatment': {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment in Middletown',
    heroHeading: 'Root Canal Treatment in Middletown',
    heroParagraphs: [
      'At Jolly Smiles, we provide advanced root canal treatment in Middletown to relieve pain and save your natural tooth. If you are experiencing severe toothache, sensitivity, or infection, a root canal can effectively restore your oral health and prevent further complications.',
      'Our experienced dental team uses modern techniques and technology to ensure a comfortable, efficient procedure. With proper care, a treated tooth can last a lifetime while maintaining your natural smile.',
    ],
    heroImage: FALLBACK_IMAGE,
    heroImageAlt: 'Root Canal Treatment in Middletown at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT ROOT CANAL TREATMENT',
    categoryHeading: 'Root Canal Treatment in Middletown',
    categoryDescription:
      'Get expert root canal treatment in Middletown at Jolly Smiles. Relieve tooth pain, save your natural tooth, and restore your smile with advanced, comfortable care.',
    subServices: buildCards(rootCanalCards, []),
    faqs: [
      { question: 'Is root canal treatment painful?', answer: 'Modern techniques and anesthesia make the procedure comfortable and virtually pain-free.' },
      { question: 'How long does a root canal take?', answer: 'Most treatments are completed in one or two visits, depending on the severity of the infection.' },
      { question: 'How long does a root canal last?', answer: 'With proper care, a treated tooth can last many years or even a lifetime.' },
      { question: 'Do I need a crown after a root canal?', answer: 'In many cases, a crown is recommended to strengthen and protect the tooth.' },
      { question: 'Can I eat after the procedure?', answer: 'Yes, but it’s best to avoid hard or sticky foods until the tooth is fully restored.' },
    ],
    metaTitle: 'Root Canal Treatment in Middletown | Jolly Smiles Dental Care',
    metaDescription:
      'Get expert root canal treatment in Middletown at Jolly Smiles. Relieve tooth pain, save your natural tooth, and restore your smile with advanced, comfortable care.',
    canonical: 'https://www.jollysmiles.com/root-canal-treatment',
    sourceUrl: 'https://www.jollysmiles.com/root-canal-treatment',
  },

  'missing-teeth': {
    slug: 'missing-teeth',
    title: 'Missing Teeth',
    heroHeading: 'Missing Teeth',
    heroParagraphs: [
      'Artificially fabricated tooth roots, are placed in the bone. A crown is placed on this “root” giving the look of a real tooth.',
    ],
    heroImage: FALLBACK_IMAGE,
    heroImageAlt: 'Missing Teeth at Jolly Smiles',
    ...CTA,
    categoryEyebrow: 'ABOUT MISSING TEETH',
    categoryHeading: 'Missing Teeth',
    categoryDescription: 'Jolly Smiles | Missing Teeth? Call us to know about procedure, treatment, & cost. Give your teeth the best care!',
    subServices: buildCards(missingCards, []),
    metaTitle: 'Missing Teeth? - Cost, Treatment, Causes in Delaware | Jolly smiles',
    metaDescription: 'Jolly Smiles | Missing Teeth? Call us to know about procedure, treatment, & cost. Give your teeth the best care!',
    canonical: 'https://www.jollysmiles.com/missing-teeth',
    sourceUrl: 'https://www.jollysmiles.com/missing-teeth',
  },
};

export const liveImplantServices: Record<string, ServiceDetailData> = {
  ...real,
  'dental-implants': { ...real['dental-implants-in-middletown'], slug: 'dental-implants' },
  'same-day-crowns': { ...real['same-day-dental-crowns-middletown'], slug: 'same-day-crowns' },
};
