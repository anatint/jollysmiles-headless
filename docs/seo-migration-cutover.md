# SEO migration: Wix site -> headless (jollysmiles.com)

Goal: when `www.jollysmiles.com` is pointed at the headless site, Google must see the same URLs, titles, descriptions,
canonicals, structured data and content it sees today, so rankings do not move.

## What the headless site now does

| Area | How it matches the live site |
|---|---|
| URLs | Identical paths: service pages at the root (`/cosmetic-dentistry`), `/about-us`, `/our-team`, `/contact-us`, `/news`, `/news/categories/<slug>`, `/post/<slug>`, `/faq`, `/testimonials`, `/working-hours`, `/before-and-after`, `/book-now`, `/service-page/<slug>`. Old headless-only URLs (`/about`, `/team`, `/contact`, `/blog`, `/services/<slug>`) 301 to the live ones. |
| Titles, meta descriptions, canonicals, robots, Open Graph, Twitter | Taken verbatim from the live page of the same URL (`src/data/liveSeo.json`, 237 URLs). |
| JSON-LD structured data | The live page's own blocks (Dentist, WebSite, BlogPosting, FAQPage, ...). Template placeholders in the live data (`+1-XXX-XXX-XXXX`, "YOUR EXACT ADDRESS", "ZIP") are replaced with the real phone/address. Placeholder copy is never put in structured data. |
| Sitemaps | `/sitemap.xml` index + `/pages-sitemap.xml`, `/blog-posts-sitemap.xml`, `/blog-categories-sitemap.xml`, `/booking-services-sitemap.xml` with the same URLs and lastmod as the live site. |
| robots.txt | Same rules as live on `jollysmiles.com` / `www.jollysmiles.com`; every other host (the temporary `*.workers.dev` addresses) gets `Disallow: /` and an `X-Robots-Tag: noindex` header. |
| Blog | All 158 live posts: 100 from the Wix blog + 58 captured from the live pages (`src/data/extraBlogs.json`). |
| 404s | Only live URLs exist. Unknown URLs return a real 404 (no catch-all pages). |

Pages that exist only on the headless site (`/general-dentistry`, `/6-month-braces`) are `noindex` and not in the sitemap.

## Before the cutover (do all of these)

1. Re-run the comparison against the deployed headless site and fix any "DIFF" rows:
   `node seo_audit.mjs https://<headless-host> out.json` (see `scripts/` in this repo for the audit helpers).
2. Replace placeholder content (cards/FAQs/images marked "Placeholder content: ...") on pages that already rank, or remove those blocks.
   Google will index that text on live URLs.
3. Check headings: the live H1s of the home and main pages differ from the headless design copy; keep the live H1 wording where it carries the ranking keyword.
4. Keep the Wix site live and untouched until the headless site passes the audit.

## Cutover steps (Cloudflare)

1. Add `www.jollysmiles.com` as a **Custom Domain** on the `jollysmiles-headless` Worker (DNS for the domain must be on Cloudflare).
2. Redirect `jollysmiles.com` -> `https://www.jollysmiles.com` (301) with a Cloudflare Redirect Rule, and force HTTPS (Always Use HTTPS). Live does the same today.
3. Lower the DNS TTL a day before; keep the old Wix DNS values written down so you can roll back in minutes.
4. Right after the switch: open the key URLs, check `robots.txt`, `sitemap.xml`, and view-source for title/canonical on a few pages.
5. Google Search Console: submit `https://www.jollysmiles.com/sitemap.xml`, use URL Inspection on the home page, a service page and a post, and watch Coverage/Pages for 404s and "Crawled - not indexed" for two weeks.
6. Keep the Wix subscription/plan until the dust settles (do not delete the old site or its blog).

## Known differences to review

- Visual design and body copy of the headless pages differ from the Wix pages by design.
- The live `/book-now` and `/service-page/*` are Wix Bookings template pages (placeholder text, rupee prices); they are reproduced with their text, without prices.
- News category pages list only the posts visible on the first screen of the live category page.
