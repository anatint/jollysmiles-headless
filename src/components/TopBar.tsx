import { Phone, Mail, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs py-2 flex flex-row justify-between items-center text-gray-600">
        <div className="flex flex-row space-x-6 items-center">
          <span className="flex items-center font-medium"><Phone className="w-3.5 h-3.5 mr-1.5 text-brand-red" /> 302 DR-TEETH (378-3384)</span>
          <span className="flex items-center font-medium"><Mail className="w-3.5 h-3.5 mr-1.5 text-brand-red" /> drteeth@jollysmiles.com</span>
          <span className="flex items-center font-medium"><Clock className="w-3.5 h-3.5 mr-1.5 text-brand-red" /> Mon - Fri: 9:00 AM - 5:00 PM</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="https://www.facebook.com/jollysmilesDE" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-red transition-colors duration-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/jollysmiles2009/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-red transition-colors duration-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://x.com/jollysmilesde" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:text-brand-red transition-colors duration-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
