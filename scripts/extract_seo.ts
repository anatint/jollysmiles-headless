import * as fs from 'fs';

const pagesToScrape = [
  { headlessRoute: '/', liveUrl: 'https://www.jollysmiles.com/' },
  { headlessRoute: '/about', liveUrl: 'https://www.jollysmiles.com/about-us' },
  { headlessRoute: '/team', liveUrl: 'https://www.jollysmiles.com/our-team' },
  { headlessRoute: '/services', liveUrl: 'https://www.jollysmiles.com/services' },
  { headlessRoute: '/procedures', liveUrl: 'https://www.jollysmiles.com/procedures' },
  { headlessRoute: '/technologies', liveUrl: 'https://www.jollysmiles.com/technologies' },
  { headlessRoute: '/contact', liveUrl: 'https://www.jollysmiles.com/contact-us' },
  { headlessRoute: '/blog', liveUrl: 'https://www.jollysmiles.com/news' },
  { headlessRoute: '/services/cosmetic-dentistry', liveUrl: 'https://www.jollysmiles.com/cosmetic-dentistry' },
  { headlessRoute: '/services/restorative-dentistry', liveUrl: 'https://www.jollysmiles.com/restorative-dentistry' },
  { headlessRoute: '/services/preventive-dental-care', liveUrl: 'https://www.jollysmiles.com/preventive-dental-care' },
  { headlessRoute: '/services/emergency-dental-services', liveUrl: 'https://www.jollysmiles.com/emergency-dental-services' },
  { headlessRoute: '/services/pediatric-dentistry', liveUrl: 'https://www.jollysmiles.com/pediatric-dentistry' },
  { headlessRoute: '/services/invisalign', liveUrl: 'https://www.jollysmiles.com/invisalign' }
];

async function run() {
  const results: Record<string, any> = {};

  for (const page of pagesToScrape) {
    try {
      console.log(`Extracting: ${page.headlessRoute} <- ${page.liveUrl}`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(page.liveUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        console.log(`  Status: ${res.status}`);
        continue;
      }

      const html = await res.text();

      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';

      const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i)
                     || html.match(/<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["']/i);
      const description = descMatch ? descMatch[1].trim() : '';

      const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([\s\S]*?)["']/i);
      const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : '';

      const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([\s\S]*?)["']/i);
      const ogDesc = ogDescMatch ? ogDescMatch[1].trim() : '';

      const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([\s\S]*?)["']/i);
      const ogImage = ogImageMatch ? ogImageMatch[1].trim() : '';

      const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([\s\S]*?)["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

      const schemas: any[] = [];
      const schemaRegex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let match;
      while ((match = schemaRegex.exec(html)) !== null) {
        try {
          const parsed = JSON.parse(match[1].trim());
          schemas.push(parsed);
        } catch {}
      }

      results[page.headlessRoute] = {
        route: page.headlessRoute,
        liveUrl: page.liveUrl,
        title,
        description,
        ogTitle,
        ogDesc,
        ogImage,
        canonical,
        schemas
      };

      console.log(`  ✓ Title: "${title}" | Schemas: ${schemas.length}`);
    } catch (e: any) {
      console.log(`  Error: ${e.message}`);
    }
  }

  fs.writeFileSync('./live_seo_data.json', JSON.stringify(results, null, 2));
  console.log('\nSaved all extracted live SEO data to live_seo_data.json!');
}

run();
