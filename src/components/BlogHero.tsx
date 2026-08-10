import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BlogHero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden border-b border-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/blog-hero.png')] bg-cover bg-center md:bg-right opacity-95" />
        {/* Soft gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:w-3/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 py-[30px]">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-6 tracking-tight">
            Our <span className="text-brand-red">Blog</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed max-w-md font-medium">
            Tips, insights, and inspiration for a healthier, happier smile.
          </p>
          
          <div className="flex items-center text-sm font-bold text-gray-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Blog</span>
          </div>
        </div>
      </div>
    </div>
  );
}
