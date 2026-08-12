import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const articles = [
  {
    date: "May 18, 2024",
    title: "What You Need to Know About Dental Implants",
    image: "Implants"
  },
  {
    date: "May 12, 2024",
    title: "Invisalign vs. Braces: Which Is Right for You?",
    image: "Invisalign"
  },
  {
    date: "May 5, 2024",
    title: "5 Ways to Maintain Your Whitening Results",
    image: "Whitening"
  },
  {
    date: "April 28, 2024",
    title: "How Often Should You Visit the Dentist?",
    image: "Dentist"
  }
];

export default function BlogSection({ data }: { data?: any[] }) {
  const displayArticles = data && data.length > 0 
    ? data.filter(a => a.active !== false).sort((a, b) => new Date(b.date || b.publishDate || 0).getTime() - new Date(a.date || a.publishDate || 0).getTime()).slice(0, 4)
    : articles;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch(e) {
      return dateStr;
    }
  };

  return (
    <div className="bg-gray-50 border-t border-gray-100 py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-[35px] font-extrabold text-gray-900 mb-2">
              Dental Tips & Insights
            </h2>
            <p className="text-gray-600 text-lg">Expert advice for a healthier smile</p>
          </div>
          <Link href="/blog" className="mt-6 md:mt-0 text-brand-red font-bold text-xs tracking-wider uppercase flex items-center hover:text-red-700 transition-colors">
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {article.featuredImage || article.image ? (
                  <img src={article.featuredImage || article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center text-gray-500 font-medium group-hover:scale-105 transition-transform duration-500">
                    [{article.image || 'Blog'} Image]
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-gray-500 mb-3">{formatDate(article.date || article.publishDate || "May 18, 2024")}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug group-hover:text-brand-red transition-colors">
                  {article.title}
                </h3>
                <Link href={`/blog/${article.slug || '#'}`} className="mt-auto text-brand-red font-bold text-xs tracking-wider uppercase flex items-center group-hover:text-red-700 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
