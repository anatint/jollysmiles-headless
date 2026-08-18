"use client";
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';

export default function Header({ settings, navigation }: { settings?: any, navigation?: any[] }) {
  const { openAppointmentModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // If no dynamic navigation is provided or it's empty, use a fallback
  const navItems = navigation && navigation.length > 0 
    ? navigation.filter(n => n.visible !== false && n.location !== 'footer').sort((a, b) => (a.order || 0) - (b.order || 0))
    : [
        { label: 'Home', url: '/' },
        { label: 'About Us', url: '/about' },
        { label: 'Services', url: '/services' },
        { label: 'Procedures', url: '/procedures' },
        { label: 'Technologies', url: '/technologies' },
        { label: 'Blog', url: '/blog' },
        { label: 'Contact Us', url: '/contact' }
      ];

  let logoUrl = settings?.logo || "/logo.png";
  if (typeof logoUrl === 'string' && logoUrl.startsWith('wix:image://v1/')) {
    const parts = logoUrl.replace('wix:image://v1/', '').split('/');
    const mediaId = parts[0];
    logoUrl = `https://static.wixstatic.com/media/${mediaId}`;
  }
  const siteName = settings?.siteName || "Jolly Smiles";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-4 md:-ml-8">
            <Link href="/" className="flex items-center">
              <Image src={logoUrl} alt={siteName} width={180} height={70} className="object-contain object-left w-36 md:w-[150px] h-auto" priority />
            </Link>
          </div>

          {/* Desktop Navigation and Call to action */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 items-center">
              {navItems.map((item, idx) => {
                const isActive = item.url === '/' ? pathname === '/' : pathname?.startsWith(item.url);
                return (
                  <Link 
                    key={idx} 
                    href={item.url === '/contact' ? (pathname === '/contact' ? '#contact-form' : '/contact#contact-form') : item.url} 
                    className={`font-medium hover:text-brand-red transition ${isActive ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button 
              onClick={openAppointmentModal}
              className="bg-brand-red hover:bg-brand-dark text-white px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-red focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-3 space-y-1 shadow-lg absolute w-full left-0">
          <Link href="/" className="block px-3 py-2 text-brand-red font-medium">Home</Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">About Us</Link>
          <Link href="/about/team" className="block px-3 py-2 pl-6 text-gray-600 font-medium hover:text-brand-red">Our Team</Link>
          <Link href="/services" className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">Services</Link>
          <Link href="/procedures" className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">Procedures</Link>
          <Link href="/technologies" className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">Technologies</Link>

          <Link href="/blog" className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">Blog</Link>
          <Link href={pathname === '/contact' ? '#contact-form' : '/contact#contact-form'} className="block px-3 py-2 text-gray-700 font-medium hover:text-brand-red">Contact Us</Link>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openAppointmentModal();
            }}
            className="mt-4 w-full bg-brand-red text-white px-4 py-2 rounded text-sm font-bold uppercase"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}
