import blogsData from '@/data/blogs.json';
import { getCollectionItems, getWixImageUrl } from './wix';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export function stripHtml(str?: string | null): string {
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

export function renderWixRichContent(richContent: any): string {
  if (!richContent) return '';
  if (typeof richContent === 'string') return richContent;
  if (!richContent.nodes || !Array.isArray(richContent.nodes)) return '';

  function renderNode(node: any): string {
    if (!node) return '';
    
    if (node.type === 'TEXT') {
      let text = node.textData?.text || '';
      if (!text) return '';
      
      const decs = node.textData?.decorations || [];
      for (const dec of decs) {
        if (dec.type === 'BOLD') text = `<strong>${text}</strong>`;
        if (dec.type === 'ITALIC') text = `<em>${text}</em>`;
        if (dec.type === 'UNDERLINE') text = `<u>${text}</u>`;
        if (dec.type === 'LINK') {
          const url = dec.linkData?.link?.url || '#';
          text = `<a href="${url}" class="text-brand-red underline hover:text-brand-dark transition-colors" target="_blank" rel="noopener noreferrer">${text}</a>`;
        }
      }
      return text;
    }

    const children = (node.nodes || []).map(renderNode).join('');

    switch (node.type) {
      case 'PARAGRAPH':
        return children ? `<p class="mb-6 leading-relaxed text-gray-700 text-base md:text-lg">${children}</p>` : '<br />';
      
      case 'HEADING': {
        const level = node.headingData?.level || 2;
        const Tag = `h${level}`;
        const sizeClass = level === 1 
          ? 'text-3xl sm:text-4xl' 
          : level === 2 
          ? 'text-2xl sm:text-3xl' 
          : 'text-xl sm:text-2xl';
        return `<${Tag} class="${sizeClass} font-bold text-gray-900 mt-10 mb-4 font-serif leading-tight">${children}</${Tag}>`;
      }
      
      case 'BULLETED_LIST':
        return `<ul class="list-disc pl-6 space-y-3 mb-6 text-gray-700 text-base md:text-lg">${children}</ul>`;
      
      case 'ORDERED_LIST':
        return `<ol class="list-decimal pl-6 space-y-3 mb-6 text-gray-700 text-base md:text-lg">${children}</ol>`;
      
      case 'LIST_ITEM':
        return `<li class="leading-relaxed pl-1">${children}</li>`;
      
      case 'IMAGE': {
        const src = node.imageData?.image?.src?.url || '';
        let imgUrl = src;
        if (typeof imgUrl === 'string' && imgUrl.startsWith('wix:image://v1/')) {
          const parts = imgUrl.replace('wix:image://v1/', '').split('/');
          imgUrl = `https://static.wixstatic.com/media/${parts[0]}`;
        }
        const alt = node.imageData?.altText || 'Blog Illustration';
        return imgUrl ? `
          <figure class="my-8 rounded-2xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
            <img src="${imgUrl}" alt="${alt}" class="w-full h-auto max-h-[500px] object-cover rounded-xl" loading="lazy" />
            ${alt && alt !== 'Blog Illustration' ? `<figcaption class="text-xs text-gray-500 mt-2 text-center pb-2">${alt}</figcaption>` : ''}
          </figure>
        ` : '';
      }
      
      case 'BLOCKQUOTE':
        return `<blockquote class="border-l-4 border-brand-red pl-5 py-2 italic text-gray-800 bg-red-50/40 rounded-r-xl my-8 text-lg">${children}</blockquote>`;
      
      case 'DIVIDER':
        return `<hr class="my-10 border-gray-200" />`;
      
      default:
        return children;
    }
  }

  return richContent.nodes.map(renderNode).join('');
}

function extractCoverImage(post: any): string {
  let img = post.coverMedia?.image?.url || 
            post.media?.wixMedia?.image || 
            post.media?.image?.url ||
            post.featuredImage || 
            post.image || 
            '';

  if (!img && post.richContent?.nodes) {
    for (const node of post.richContent.nodes) {
      if (node.type === 'IMAGE' && node.imageData?.image?.src?.url) {
        img = node.imageData.image.src.url;
        break;
      }
    }
  }

  return getWixImageUrl(img, '/clinic-reception.png');
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const localList: any[] = blogsData as any[];
  const localMap = new Map<string, any>();
  for (const post of localList) {
    if (post.slug) {
      localMap.set(post.slug.toLowerCase(), post);
    }
  }

  // Fetch live Wix CMS collection items
  let wixList: any[] = [];
  try {
    wixList = await getCollectionItems('BlogPosts');
  } catch (e) {
    console.error('Error fetching BlogPosts from Wix:', e);
  }

  // Use live Wix items if available, or fall back to local
  const baseList = wixList.length > 0 ? wixList : localList;

  return baseList.map((post: any, idx: number) => {
    const rawSlug = post.slug || (post.title ? post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : `post-${idx + 1}`);
    const localMatch = localMap.get(rawSlug.toLowerCase());

    const dateVal = post.date || post.firstPublishedDate || post.publishDate || post._createdDate || localMatch?.firstPublishedDate;
    let formattedDate = 'Recent';
    if (dateVal) {
      try {
        const d = new Date(dateVal);
        if (!isNaN(d.getTime())) {
          formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        } else {
          formattedDate = String(dateVal);
        }
      } catch (e) {
        formattedDate = String(dateVal);
      }
    }

    const readTime = post.readTime || (post.minutesToRead ? `${post.minutesToRead} min read` : (localMatch?.minutesToRead ? `${localMatch.minutesToRead} min read` : '4 min read'));

    // Extract rich content HTML
    let contentHtml = '';
    if (post.content && typeof post.content === 'string') {
      contentHtml = post.content;
    } else if (post.richContent) {
      contentHtml = renderWixRichContent(post.richContent);
    } else if (localMatch?.richContent) {
      contentHtml = renderWixRichContent(localMatch.richContent);
    }

    const rawExcerpt = post.excerpt || localMatch?.excerpt || (contentHtml ? contentHtml.slice(0, 300) : 'Read more about this dental topic...');
    const cleanExcerpt = stripHtml(rawExcerpt);

    const coverImage = extractCoverImage(post) || (localMatch ? extractCoverImage(localMatch) : '/clinic-reception.png');

    return {
      id: post.id || post._id || String(idx + 1),
      slug: rawSlug,
      title: stripHtml(post.title || localMatch?.title || 'Dental Care & Smile Guide'),
      excerpt: cleanExcerpt,
      contentHtml: contentHtml || `<p class="leading-relaxed text-gray-700 text-lg">${cleanExcerpt}</p>`,
      coverImage: coverImage,
      category: post.category || localMatch?.category || 'Dental Care',
      date: formattedDate,
      readTime: readTime,
      author: post.author || 'Jolly Smiles Team'
    };
  });
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getAllBlogs();
  const normalizedSlug = decodeURIComponent(slug).toLowerCase();
  return blogs.find(b => b.slug.toLowerCase() === normalizedSlug) || null;
}
