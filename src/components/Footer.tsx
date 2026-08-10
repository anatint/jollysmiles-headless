import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pb-8 py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <div className="mb-6 flex justify-start -ml-3 sm:-ml-4">
              <Image src="/logo.png" alt="Jolly Smiles" width={120} height={48} className="object-contain object-left brightness-0 invert" />
            </div>
            <p className="text-red-100 mb-8 leading-relaxed max-w-sm text-sm">
              Exceptional dental care is a lot closer than you think. Dr. Jeena Jolly’s general dentistry and cosmetic dentistry practice in Middletown, DE is easily accessible to patients throughout the area.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/jollysmilesDE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-all text-white hover:text-brand-dark" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/jollysmiles2009/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-all text-white hover:text-brand-dark" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://x.com/i/jf/onboarding/web?redirect_after_login=%2Fjollysmilesde&mode=login" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white transition-all text-white hover:text-brand-dark" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3 text-red-100">
              <li><Link href="/" className="hover:text-white hover:underline transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white hover:underline transition-colors">Services</Link></li>
              <li><Link href="/technologies" className="hover:text-white hover:underline transition-colors">Technologies</Link></li>
              <li><Link href="/blog" className="hover:text-white hover:underline transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:underline transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-3 text-red-100">
              <li><Link href="/services/dental-implants" className="hover:text-white hover:underline transition-colors">Dental Implants</Link></li>
              <li><Link href="/services/invisalign" className="hover:text-white hover:underline transition-colors">Invisalign®</Link></li>
              <li><Link href="/services/lanap-treatment" className="hover:text-white hover:underline transition-colors">LANAP Treatment</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="hover:text-white hover:underline transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/emergency-care" className="hover:text-white hover:underline transition-colors">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-4 text-red-100">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="leading-tight">102 Sleepy Hollow Drive, Suite 100<br/>Middletown, DE 19709</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>302 DR-TEETH (378-3384)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="break-all text-sm">drteeth@jollysmiles.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Mon - Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-red-100 py-[15px]">
          <p>© {new Date().getFullYear()} Jolly Smiles. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
