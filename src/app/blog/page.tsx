import type { Metadata } from 'next';
import BlogHero from '@/components/BlogHero';
import CTABanner from '@/components/CTABanner';
import { Search, ArrowRight, Activity, Smile as SmileIcon, Heart, Calendar, Stethoscope, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Blog | Jolly Smiles Dental Care",
  description: "Read the latest tips, insights, and inspiration for a healthier, happier smile from the experts at Jolly Smiles.",
};

const blogPosts = [
  {
    id: 1,
    category: "Oral Health Tips",
    title: "5 Daily Habits for a Healthier, Brighter Smile",
    description: "Simple daily habits can make a big difference in your oral health. Here are our top 5 tips...",
    date: "May 20, 2025",
    readTime: "5 min read",
    icon: SmileIcon,
  },
  {
    id: 2,
    category: "Cosmetic Dentistry",
    title: "Teeth Whitening: What to Expect",
    description: "Professional teeth whitening can instantly boost your confidence. Learn what to expect before, during, and after treatment.",
    date: "May 15, 2025",
    readTime: "4 min read",
    icon: Star,
  },
  {
    id: 3,
    category: "Dental Treatments",
    title: "How Often Should You Visit the Dentist?",
    description: "Regular dental visits are key to preventing problems and maintaining a healthy smile.",
    date: "May 10, 2025",
    readTime: "4 min read",
    icon: Calendar,
  },
  {
    id: 4,
    category: "Kids Dental Care",
    title: "Dental Care Tips for Kids",
    description: "Good oral hygiene habits start early. Here are some fun and easy tips to keep your child's smile healthy.",
    date: "May 5, 2025",
    readTime: "3 min read",
    icon: Heart,
  },
  {
    id: 5,
    category: "Dental Treatments",
    title: "Dental Implants: A Long-Term Solution",
    description: "Dental implants look, feel, and function like natural teeth. Find out if they're right for you.",
    date: "April 30, 2025",
    readTime: "6 min read",
    icon: Stethoscope,
  },
  {
    id: 6,
    category: "Cosmetic Dentistry",
    title: "Invisalign vs. Braces: Which is Right for You?",
    description: "Compare the benefits of Invisalign and traditional braces to choose the best option for your smile.",
    date: "April 25, 2025",
    readTime: "5 min read",
    icon: Activity,
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white font-sans min-h-screen">
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[25px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* Header: Latest Articles & Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <h2 className="text-[35px] font-extrabold text-gray-900">
                Latest <span className="text-brand-red">Articles</span>
              </h2>
              <div className="relative w-full md:w-auto">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full md:w-64 pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-brand-red text-white w-12 rounded-r-lg flex items-center justify-center hover:bg-red-700 transition">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col transition hover:shadow-lg">
                  {/* Image Placeholder */}
                  <div className="h-56 bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center border-b border-gray-100 relative">
                    <post.icon className="w-16 h-16 text-brand-red opacity-20" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block bg-red-50 text-brand-red font-bold text-[10px] px-3 py-1 uppercase tracking-wider rounded-sm">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-brand-red transition cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4 text-xs font-semibold text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="text-brand-red hover:text-red-700 transition">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-2">
              <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition">
                &lsaquo;
              </button>
              <button className="w-10 h-10 rounded-md bg-brand-red text-white flex items-center justify-center font-bold shadow-sm">
                1
              </button>
              <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition font-bold">
                2
              </button>
              <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition font-bold">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">...</span>
              <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition font-bold">
                8
              </button>
              <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition">
                &rsaquo;
              </button>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0 flex flex-col gap-8">
            
            {/* Recent Posts Widget */}
            <div className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-extrabold text-brand-red mb-6">Recent Posts</h3>
              <div className="flex flex-col gap-6">
                {blogPosts.slice(0, 5).map(post => (
                  <div key={`recent-${post.id}`} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:opacity-90 transition">
                      <post.icon className="w-8 h-8 text-brand-red opacity-30" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-gray-900 leading-tight mb-2 group-hover:text-brand-red transition">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-red-50 rounded-xl p-8 text-center relative overflow-hidden">
              <div className="bg-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm">
                <Search className="w-6 h-6 text-brand-red hidden" />
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest tips and updates.
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-md transition shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
      
      <CTABanner />
    </div>
  );
}
