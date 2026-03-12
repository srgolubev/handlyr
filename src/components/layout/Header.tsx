'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-xl backdrop-blur-sm' : ''
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Handlyr — home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-extrabold text-lg"
              style={{ backgroundColor: '#0D2860' }}
            >
              H
            </div>
            <span
              className="font-heading font-extrabold text-xl tracking-tight"
              style={{ color: '#0D2860' }}
            >
              Handlyr
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-text-dark transition-colors duration-150 hover:text-primary-600 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-150 hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-orange-300"
              style={{ color: '#F97316' }}
            >
              <PhoneIcon className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-95 focus-visible:ring-4 focus-visible:ring-orange-300"
              style={{ backgroundColor: '#F97316' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EA6C0A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F97316')}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile right side */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors duration-150"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-lg text-text-dark hover:bg-neutral-100 transition-colors duration-150"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer */}
        <nav
          className={`absolute top-0 right-0 w-full max-w-sm h-[calc(100vh-64px)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex-1 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-6 py-4 text-lg font-medium text-text-dark border-b border-neutral-200 hover:bg-neutral-50 hover:text-primary-600 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-neutral-200">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold text-white transition-colors duration-150"
              style={{ backgroundColor: '#F97316' }}
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon className="w-5 h-5" />
              Call Now — {BUSINESS.phone}
            </a>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div style={{ height: '64px' }} aria-hidden="true" />
    </>
  );
}
