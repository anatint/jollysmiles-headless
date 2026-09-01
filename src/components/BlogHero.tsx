import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BlogHero() {
  return (
    <div className="relative bg-[#fff5f5] overflow-hidden py-[50px]">
      
      {/* Background swoosh */}
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-white rounded-t-[100%] scale-[1.5] origin-bottom shadow-[0_-10px_20px_rgba(255,200,200,0.2)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-4 tracking-tight font-serif">
              Our <span className="text-brand-red">Blog</span>
            </h1>
            <h2 className="text-lg lg:text-2xl font-bold text-gray-800 mb-6 font-serif">
              Tips, Insights & Smile Guides
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              Discover expert dental advice, treatment guides, smile transformations, and oral health tips from the team at Jolly Smiles.
            </p>
            
            {/* Breadcrumb - identical to About page */}
            <div className="flex items-center text-sm font-medium text-brand-red">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span className="text-gray-700">Blog</span>
            </div>
          </div>
          
          {/* Right Image Column */}
          <div className="flex-1 relative w-full max-w-lg aspect-square lg:aspect-[4/3] mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
              <Image 
                src="/blog-hero.png" 
                alt="Jolly Smiles Blog" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
