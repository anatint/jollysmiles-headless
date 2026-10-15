import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Compact hero for the small pages (FAQ, hours, testimonials, ...). The H1 text is the live site's exact H1.
export default function SimplePageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <div className="relative bg-[#fff5f5] overflow-hidden py-[50px]">
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-white rounded-t-[100%] scale-[1.5] origin-bottom shadow-[0_-10px_20px_rgba(255,200,200,0.2)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.05] mb-4 tracking-tight font-serif">
            {title}
          </h1>
          {subtitle && <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">{subtitle}</p>}
          <div className="flex items-center text-sm font-medium text-brand-red">
            <Link href="/" className="hover:underline">Home</Link>
            {(breadcrumb ?? [{ label: title }]).map((crumb) => (
              <span key={crumb.label} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:underline">{crumb.label}</Link>
                ) : (
                  <span className="text-gray-700">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
