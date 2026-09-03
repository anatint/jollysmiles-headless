import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogHero from '@/components/BlogHero';
import CTABanner from '@/components/CTABanner';
import BlogListWithPagination from '@/components/blog/BlogListWithPagination';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { getAllBlogs } from '@/lib/blogs';

import { buildPageMetadata } from '@/lib/seo';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata('/blog');
}

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="bg-white font-sans min-h-screen">
      <SchemaJsonLd path="/blog" />
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[35px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area with Pagination */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Title */}
            <div>
              <h2 className="text-[35px] font-extrabold text-gray-900 font-serif leading-tight">
                Latest <span className="text-brand-red">Articles</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Discover expert dental advice, smile transformations, and oral health tips.
              </p>
            </div>

            {/* Paginated Blog List */}
            <BlogListWithPagination blogs={blogs} itemsPerPage={6} />

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0 flex flex-col gap-8">
            
            {/* Practice Info Widget */}
            <div className="bg-gradient-to-br from-red-50/70 to-white rounded-2xl border border-red-100 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">
                  JS
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base font-serif">Jolly Smiles Dental</h3>
                  <p className="text-xs text-gray-500">Middletown, Delaware</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Looking for trusted dental care? From cosmetic smile makeovers to dental implants, our friendly experts are here for you.
              </p>
              <Link 
                href="/contact"
                className="w-full bg-brand-red hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-sm"
              >
                Book An Appointment <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6 font-serif flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-red" />
                Featured Articles
              </h3>
              <div className="flex flex-col gap-5">
                {blogs.slice(0, 5).map((post) => (
                  <Link 
                    key={`sidebar-${post.id}`} 
                    href={`/blog/${post.slug}`} 
                    className="flex gap-4 group items-center"
                  >
                    <div className="relative w-16 h-16 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden border border-gray-100">
                      <Image 
                        src={post.coverImage} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className="text-xs font-bold text-gray-800 leading-snug group-hover:text-brand-red transition line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <span className="text-[11px] text-gray-400 font-medium">{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Have Questions Widget */}
            <div className="bg-red-50/70 rounded-2xl p-8 text-center relative overflow-hidden border border-red-100">
              <div className="bg-white w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4 shadow-sm text-brand-red">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">Have Questions?</h3>
              <p className="text-gray-600 text-xs mb-5 leading-relaxed">
                Contact our friendly team today for consultations or answers to your dental concerns.
              </p>
              <Link 
                href="/contact" 
                className="w-full bg-white border border-brand-red text-brand-red hover:bg-red-50 font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition inline-flex items-center justify-center gap-1"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>
      </div>
      
      <CTABanner />
    </div>
  );
}
