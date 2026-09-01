const fs = require('fs');
const path = require('path');

const blogsPath = path.join(__dirname, 'src', 'data', 'blogs.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

function convertWixMediaUrl(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.startsWith('wix:image://v1/')) {
    const parts = url.replace('wix:image://v1/', '').split('/');
    return `https://static.wixstatic.com/media/${parts[0]}`;
  }
  return url;
}

function renderWixRichContent(richContent) {
  if (!richContent) return '';
  if (typeof richContent === 'string') return richContent;
  if (!richContent.nodes || !Array.isArray(richContent.nodes)) return '';

  function renderNode(node) {
    if (!node) return '';
    if (node.type === 'TEXT') {
      let text = node.textData?.text || '';
      if (!text) return '';
      const decs = node.textData?.decorations || [];
      for (const dec of decs) {
        if (dec.type === 'BOLD') text = `<strong>${text}</strong>`;
        if (dec.type === 'ITALIC') text = `<em>${text}</em>`;
        if (dec.type === 'LINK') {
          const url = dec.linkData?.link?.url || '#';
          text = `<a href="${url}">${text}</a>`;
        }
      }
      return text;
    }

    const children = (node.nodes || []).map(renderNode).join('');

    switch (node.type) {
      case 'PARAGRAPH':
        return children ? `<p>${children}</p>` : '<br/>';
      case 'HEADING': {
        const level = node.headingData?.level || 2;
        return `<h${level}>${children}</h${level}>`;
      }
      case 'BULLETED_LIST':
        return `<ul>${children}</ul>`;
      case 'ORDERED_LIST':
        return `<ol>${children}</ol>`;
      case 'LIST_ITEM':
        return `<li>${children}</li>`;
      case 'IMAGE': {
        const src = node.imageData?.image?.src?.url || '';
        const imgUrl = convertWixMediaUrl(src);
        const alt = node.imageData?.altText || 'Blog Illustration';
        return imgUrl ? `<img src="${imgUrl}" alt="${alt}" />` : '';
      }
      case 'BLOCKQUOTE':
        return `<blockquote>${children}</blockquote>`;
      default:
        return children;
    }
  }

  return richContent.nodes.map(renderNode).join('');
}

function stripHtml(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>?/gm, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractCover(b) {
  let img = b.coverMedia?.image?.url || 
            b.media?.wixMedia?.image || 
            b.media?.image?.url || 
            b.featuredImage || 
            b.image || 
            '';

  if (!img && b.richContent?.nodes) {
    for (const node of b.richContent.nodes) {
      if (node.type === 'IMAGE' && node.imageData?.image?.src?.url) {
        img = node.imageData.image.src.url;
        break;
      }
    }
  }

  return convertWixMediaUrl(img) || 'https://static.wixstatic.com/media/0840ea_988ca18d217143dd9df24baae8ae6cf4~mv2.avif';
}

const headers = ['title', 'slug', 'excerpt', 'category', 'date', 'readTime', 'coverImage', 'content', 'metaTitle', 'metaDescription'];

const rows = blogs.map(b => {
  const dateStr = b.firstPublishedDate ? new Date(b.firstPublishedDate).toLocaleDateString('en-US') : '12/29/2025';
  const img = extractCover(b);
  const cat = b.category || (b.hashtags && b.hashtags[0]) || 'Dental Care';
  const clean = (str) => `"${(str || '').replace(/"/g, '""')}"`;
  const cleanExcerpt = stripHtml(b.excerpt || '');
  const htmlContent = renderWixRichContent(b.richContent) || (typeof b.content === 'string' ? b.content : '');
  const metaTitle = b.title ? `${b.title} | Jolly Smiles Dental Clinic` : 'Dental Care & Smile Guide';
  const metaDescription = cleanExcerpt;

  return [
    clean(b.title),
    clean(b.slug),
    clean(cleanExcerpt),
    clean(cat),
    clean(dateStr),
    clean(b.minutesToRead ? `${b.minutesToRead} min read` : '4 min read'),
    clean(img),
    clean(htmlContent),
    clean(metaTitle),
    clean(metaDescription)
  ].join(',');
});

const csv = [headers.join(','), ...rows].join('\n');
fs.writeFileSync('wix_blogs_import.csv', csv, 'utf8');
fs.writeFileSync(path.join(__dirname, 'public', 'wix_blogs_import.csv'), csv, 'utf8');
fs.writeFileSync(path.join('C:', 'Users', 'Intertoons', '.gemini', 'antigravity-ide', 'brain', 'ad63ed1f-9ccb-4452-90eb-34975d739659', 'wix_blogs_import.csv'), csv, 'utf8');
console.log(`Successfully generated wix_blogs_import.csv with full HTML 'content', 'metaTitle', 'metaDescription', and CDN 'coverImage' for ${rows.length} blog posts!`);
