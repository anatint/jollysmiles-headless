# Service pages migration report (jollysmiles.com → headless)

Audited 2026-10-14 from `pages-sitemap.xml` and `booking-services-sitemap.xml` (52 URLs fetched).
Headless route = `/services/<live-slug>`; each page keeps the live canonical URL, SEO title and meta description.
Data lives in `src/data/live-services/*.ts` (+ `images.ts`) and is merged in `src/data/servicesData.ts`.
Template/layout unchanged (only added optional `imageAlt`/`heroImageAlt`, and an empty description is no longer rendered).

## Migrated (25 live pages + 2 legacy aliases)

| Group | Live slug → `/services/<slug>` | Cards | FAQs |
|---|---|---|---|
| Core | restorative-dentistry | 6 | 0 |
| | pediatric-dentistry | 5 | 0 |
| | preventive-dental-care | 5 | 0 |
| | emergency-dental-services | 3 | 0 |
| | cosmetic-dentistry (replaces placeholder) | 4 | 0 |
| Implants / crowns | dental-implants-in-middletown | 14 | 5 |
| | affordable-dental-implants-in-middletown | 7 | 4 |
| | crowns-bridges | 11 | 10 |
| | same-day-dental-crowns-middletown | 5 | 0 |
| | inlays-and-onlays | 14 | 0 |
| | root-canal-treatment | 14 | 5 |
| | missing-teeth | 2 | 0 |
| | dental-implants, same-day-crowns (aliases of the two "-in-middletown" pages, canonical points to the real live page) | – | – |
| Cosmetic | veneers-laminates | 14 | 5 |
| | teeth-whitening-in-middletown | 12 | 10 |
| | teeth-whitening, complete-smiles-makeover, uneven-smiles, full-mouth-reconstruction, throbbing-pain | 0–7 | 0 |
| Invisalign / LANAP | invisalign-for-adults-teens-in-middletown | 9 | 4 |
| | invisalign-cost-delaware | 0 | 7 |
| | invisalign-faq-delaware | 0 | 25 |
| | inisalign-treatment (live slug is misspelled; kept for URL parity) | 0 | 7 |
| | lanap-faq-delaware | 0 | 8 |
| | lanap-cost-delaware | 2 | 6 |

Already migrated earlier and untouched: `invisalign`, `lanap` (`lanap-treatment`).

## Not migrated, with reason

- **Empty on the live site** (only an H1 + meta description, no body): `/dental-implants`, `/dental-bonding`, `/veneers-and-laminates`, `/tooth-colored-fillings`, `/dentures`, `/dental-bridge`, `/same-day-crowns`, `/tooth-implants`. No content to migrate; nothing invented. `/services/dental-implants` and `/services/same-day-crowns` show the matching full pages.
- `/general-dentist-1` returns 404 on the live site. The older placeholder `general-dentistry` entry is unchanged and still contains non-live sample text.
- `/service-page/*` (7 Wix Bookings pages: children-s-hygiene, dental-cleaning, teeth-whitening, custom-sport-guard, polishing-stain-removal, oral-assessment, fluoride-treatment): booking-app pages with ~50 words each, no images; not service inner pages.
- Not service pages: `/faq`, `/testimonials`, `/before-and-after`, `/working-hours`, `/book-now`, `/news`, `/about-us`, `/our-team`, `/contact-us`, `/procedures`, `/technologies`, `/services` (already exist in headless).

## Issues found / decisions

1. **Wix `Services` collection is not readable** from the headless client: every call returns `WDE0025: The Services collection does not exist` (also at Cloudflare build time). Page data was therefore added to `servicesData.ts` like the earlier Invisalign/LANAP pages; the CMS override code in `[slug]/page.tsx` is unchanged and will take over once the collection is readable. Check the collection ID/name and its read permission for visitors in Wix.
2. Live `pediatric-dentistry` meta description contains the template placeholder `[Your Clinic Name]`; replaced with "Jolly Smiles".
3. Live `inlays-and-onlays` has the root-canal FAQ pasted in; omitted (wrong topic). Live `dental-implants-in-middletown` ends with a whitening-aftercare list (copy-paste error on live); kept verbatim as the last card — consider removing.
4. `inisalign-treatment` text is cut mid-word in the last FAQ answer on the live page; only the first complete sentence was kept.
5. Images: pages use their own live images. Six pages (teeth-whitening, complete-smiles-makeover, uneven-smiles, full-mouth-reconstruction, missing-teeth, throbbing-pain) have **no images on the live site** and use the existing `/dental-chair.png`. A shared stock photo (`db6928_665f35fd…webp`, small/soft) appears on most live pages and is used last. Most live image alts are filenames, so descriptive alts were generated.
6. Live pages have no category header, so `categoryDescription` = the live meta description; card titles for heading-less blocks use the page's own lead-in wording.

## Services grid (`/services` cards) — follow-up

The grid cards previously linked to placeholder pages (`general-dentistry`, `cosmetic-dentistry`). Each card now links to its own page:
General Dentist → `general-dentistry`, Same Day Crowns → `same-day-crowns`, Invisalign® → `invisalign`, 6 Month Braces → `6-month-braces`,
Veneers & Laminates → `veneers-and-laminates`, Dental Implants → `dental-implants`, Teeth Whitening → `teeth-whitening`, LANAP → `lanap-treatment`.
`same-day-crowns`, `dental-implants` and `veneers-and-laminates` are the slugs the live grid links to; they show the full content of the live pages that actually hold it
(`same-day-dental-crowns-middletown`, `dental-implants-in-middletown`, `veneers-laminates`) and canonicalise to them.

Two cards have **no inner page on the live site** (`/general-dentist-1` redirects to a 404; "6 month braces" has no link). Their pages contain only the live card text from `/services`
(General Dentist, 6 Month Braces) — the old invented placeholder text for `general-dentistry` was removed. `teeth-whitening` is the live page's own short text (two whitening methods).
