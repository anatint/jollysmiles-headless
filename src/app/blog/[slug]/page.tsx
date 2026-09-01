import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, User, ChevronRight, Sparkles } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';

export const revalidate = 0;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.slice(0, 20).map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Jolly Smiles Dental Clinic',
    };
  }

  const metaTitle = blog.metaTitle ? (blog.metaTitle.includes('Jolly Smiles') ? blog.metaTitle : `${blog.metaTitle} | Jolly Smiles Dental Clinic`) : `${blog.title} | Jolly Smiles Dental Clinic`;
  const metaDescription = blog.metaDescription || blog.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: blog.coverImage ? [blog.coverImage] : [],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getAllBlogs();
  const recentBlogs = allBlogs.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="bg-white font-sans min-h-screen">
      
      {/* Hero / Header Section */}
      <div className="relative bg-gradient-to-b from-red-50/60 via-white to-white py-[40px] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-bold text-brand-red hover:text-brand-dark transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Articles
            </Link>

            <div className="hidden sm:flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <Link href="/blog" className="hover:underline">Blog</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-700 truncate max-w-[200px]">{blog.category}</span>
            </div>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-red-100/80 text-brand-red font-extrabold text-xs px-3.5 py-1.5 uppercase tracking-wider rounded-full shadow-sm">
              {blog.category}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6 font-serif tracking-tight">
            {blog.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-600 border-t border-b border-gray-100 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 text-brand-red flex items-center justify-center font-bold text-xs">
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-gray-800">{blog.author}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>{blog.readTime}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Featured Cover Image */}
        {blog.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl mb-12 border border-gray-100 bg-gray-50">
            <Image 
              src={blog.coverImage} 
              alt={blog.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        )}

        {/* Lead Excerpt */}
        {blog.excerpt && (
          <div className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8 p-6 bg-red-50/40 rounded-2xl border-l-4 border-brand-red">
            {blog.excerpt}
          </div>
        )}

        {/* HTML Article Body */}
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-red prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />

        {/* Author / Practice Card */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-red-50/70 to-white rounded-2xl border border-red-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
            JS
          </div>
          <div className="text-center sm:text-left space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h4 className="text-lg font-bold text-gray-900">Jolly Smiles Dental Team</h4>
              <span className="bg-red-100 text-brand-red text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">Expert Care</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our team of dedicated dental professionals in Middletown, DE is committed to providing patient-centered, compassionate care with the latest technology.
            </p>
            <div className="pt-1">
              <Link href="/team" className="text-brand-red font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center">
                Meet Our Doctors <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {recentBlogs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif">
                  More From Our <span className="text-brand-red">Blog</span>
                </h3>
                <p className="text-gray-500 text-sm mt-1">Explore helpful guides and oral health insights</p>
              </div>
              <Link 
                href="/blog" 
                className="text-brand-red font-bold text-sm hover:underline hidden sm:inline-flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentBlogs.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/blog/${item.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image 
                      src={item.coverImage} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-red text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-bold text-gray-900 text-base leading-snug group-hover:text-brand-red transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs line-clamp-2 mb-4 leading-relaxed flex-grow">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-3 border-t border-gray-50">
                      <span>{item.date}</span>
                      <span className="text-brand-red font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* CTA Banner */}
      <CTABanner />

    </div>
  );
}
