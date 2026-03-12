'use client';

import { useState, useEffect, useRef } from 'react';
import { BUSINESS } from '@/lib/constants';

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Show bar once user scrolls past 80% of viewport height
    const threshold = window.innerHeight * 0.8;

    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 px-4 pt-3 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        borderTopColor: '#F97316',
      }}
      aria-hidden={!visible}
    >
      {/* Urgency micro-copy */}
      <p className="text-center text-xs font-medium text-text-muted mb-2">
        Available today · Free estimates
      </p>
      <div className="flex gap-3 max-w-sm mx-auto">
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 active:scale-95 min-h-[52px]"
          style={{ backgroundColor: '#F97316' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EA6C0A')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F97316')}
          tabIndex={visible ? 0 : -1}
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 active:scale-95 min-h-[52px]"
          style={{ backgroundColor: '#0D2860' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0B1F4A')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0D2860')}
          tabIndex={visible ? 0 : -1}
        >
          <ClipboardIcon />
          Free Quote
        </a>
      </div>
    </div>
  );
}
