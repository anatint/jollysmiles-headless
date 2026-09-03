async function verify() {
  const routes = ['/', '/about', '/team', '/services', '/procedures', '/technologies', '/contact', '/blog'];
  for (const r of routes) {
    try {
      const res = await fetch(`https://jollysmiles-headless.stitch-crm.workers.dev${r}`);
      const html = await res.text();
      const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || 'None';
      const hasSchema = html.includes('application/ld+json');
      console.log(`${r} -> Title: ${title} | Schema JSON-LD: ${hasSchema ? 'YES' : 'NO'}`);
    } catch (e) {
      console.log(`${r} -> Error: ${e.message}`);
    }
  }
}
verify();
