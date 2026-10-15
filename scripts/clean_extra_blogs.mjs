// Rebuilds the post bodies in src/data/extraBlogs.json (scraped from the live Wix blog) as clean semantic HTML:
// Wix wrapper elements (div/span/custom tags, lightbox buttons, svg) are unwrapped or dropped, and only content tags remain.
// Run: node scripts/clean_extra_blogs.mjs   (needs `npm i --no-save node-html-parser`)
import fs from 'fs';
import { parse } from 'node-html-parser';

const file = 'src/data/extraBlogs.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const KEEP = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'strong', 'b', 'em', 'i', 'u', 'blockquote', 'br', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'td', 'th']);
const DROP = new Set(['button', 'svg', 'script', 'style', 'noscript', 'iframe', 'path']);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render(node) {
  if (node.nodeType === 3) return node.rawText; // text (already entity-encoded in the source HTML)
  const tag = (node.rawTagName || '').toLowerCase();
  if (DROP.has(tag)) return '';
  const inner = node.childNodes.map(render).join('');
  if (!KEEP.has(tag)) return inner; // unwrap div/span/wow-image/...
  if (tag === 'br') return '<br>';
  if (tag === 'img') {
    const src = node.getAttribute('src');
    return src ? `<img src="${esc(src)}" alt="${esc(node.getAttribute('alt') || '')}">` : '';
  }
  if (tag === 'a') {
    const href = node.getAttribute('href');
    return href && inner.trim() ? `<a href="${esc(href)}">${inner}</a>` : inner;
  }
  if (!inner.trim() && !['td', 'th'].includes(tag)) return '';
  return `<${tag}>${inner}</${tag}>`;
}

for (const post of Object.values(data)) {
  if (!post.contentHtml) continue;
  const root = parse(`<div>${post.contentHtml}</div>`);
  let html = render(root.firstChild)
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/(<br>\s*){3,}/g, '<br><br>')
    .replace(/<figure>\s*<\/figure>/g, '');
  post.contentHtml = html.trim();
}
fs.writeFileSync(file, JSON.stringify(data, null, 1));
const v = Object.values(data);
console.log('cleaned', v.length, 'posts; avg chars', Math.round(v.reduce((a, p) => a + p.contentHtml.length, 0) / v.length));
console.log(v[0].contentHtml.slice(0, 700));
