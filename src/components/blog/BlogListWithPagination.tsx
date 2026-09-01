"use client";

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

interface BlogListWithPaginationProps {
  blogs: BlogPost[];
  itemsPerPage?: number;
}

export default function BlogListWithPagination({ blogs, itemsPerPage = 6 }: BlogListWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const listTopRef = useRef<HTMLDivElement>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach(b => {
      if (b.category) set.add(b.category.trim());
    });
    return ['All', ...Array.from(set)];
  }, [blogs]);

  // Filter blogs based on search query and selected category
  const filteredBlogs = useMemo(() => {
    return blogs.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [blogs, searchQuery, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage) || 1;
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredBlogs, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div ref={listTopRef} className="space-y-8">
      
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
        
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <input 
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by topic, keyword..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-sm shadow-sm transition"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 self-center md:self-auto">
          <span>Showing</span>
          <span className="font-bold text-gray-900">{filteredBlogs.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}</span>
          <span>–</span>
          <span className="font-bold text-gray-900">{Math.min(currentPage * itemsPerPage, filteredBlogs.length)}</span>
          <span>of</span>
          <span className="font-bold text-brand-red">{filteredBlogs.length}</span>
          <span>articles</span>
        </div>

      </div>

      {/* Category Pills (if more than 1 category) */}
      {categories.length > 2 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm ${
                  isSelected
                    ? 'bg-brand-red text-white shadow-red-200 shadow-md scale-105'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-brand-red border border-gray-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Cards */}
      {currentBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentBlogs.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Article Image Container */}
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] w-full bg-gray-50 overflow-hidden">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-brand-red font-bold text-[10px] px-3 py-1 uppercase tracking-wider rounded-lg shadow-sm border border-red-50">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-red transition-colors font-serif line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4 text-xs font-semibold text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-red" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-brand-red font-bold flex items-center gap-1 hover:text-brand-dark transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-dashed border-gray-200">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-brand-red mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">No articles found</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
            We couldn't find any articles matching "{searchQuery}". Try searching with different keywords.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="bg-brand-red text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-brand-dark transition"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center mt-12 gap-2 pt-6 border-t border-gray-100">
          
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3.5 py-2.5 rounded-xl border flex items-center gap-1 text-sm font-semibold transition ${
              currentPage === 1 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50' 
                : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-brand-red shadow-sm'
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1.5">
            {getPageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">
                    ...
                  </span>
                );
              }

              const isCurrent = currentPage === page;
              return (
                <button
                  key={`page-${page}`}
                  onClick={() => handlePageChange(Number(page))}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition shadow-sm ${
                    isCurrent
                      ? 'bg-brand-red text-white shadow-red-200 shadow-md scale-105'
                      : 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-brand-red bg-white'
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3.5 py-2.5 rounded-xl border flex items-center gap-1 text-sm font-semibold transition ${
              currentPage === totalPages 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50' 
                : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-brand-red shadow-sm'
            }`}
            aria-label="Next Page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      )}

    </div>
  );
}
