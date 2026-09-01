const fs = require('fs');
const path = require('path');

const blogsPath = path.join(__dirname, 'src', 'data', 'blogs.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

const headers = ['title', 'slug', 'excerpt', 'category', 'date', 'readTime', 'coverImage'];

const rows = blogs.map(b => {
  const dateStr = b.firstPublishedDate ? new Date(b.firstPublishedDate).toLocaleDateString('en-US') : '';
  const img = b.coverMedia?.image?.url || b.media?.wixMedia?.image || '';
  const cat = b.category || (b.hashtags && b.hashtags[0]) || 'Dental Care';
  const clean = (str) => `"${(str || '').replace(/"/g, '""')}"`;

  return [
    clean(b.title),
    clean(b.slug),
    clean(b.excerpt),
    clean(cat),
    clean(dateStr),
    clean(b.minutesToRead ? `${b.minutesToRead} min read` : '4 min read'),
    clean(img)
  ].join(',');
});

const csv = [headers.join(','), ...rows].join('\n');
fs.writeFileSync('wix_blogs_import.csv', csv, 'utf8');
console.log(`Successfully generated wix_blogs_import.csv with ${rows.length} blog posts!`);
