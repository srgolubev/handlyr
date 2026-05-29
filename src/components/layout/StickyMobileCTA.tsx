'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BUSINESS } from '@/lib/constants';
import { ClipboardIcon } from '@/components/icons';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

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
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 border-accent-500 px-4 pt-3 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      {/* Urgency micro-copy */}
      <p className="text-center text-xs font-medium text-text-muted mb-2">
        Available today · Free text quotes
      </p>
      <div className="flex gap-3 max-w-sm mx-auto">
        <a
          href={BUSINESS.smsHref}
          className="btn btn-primary flex-1 text-sm font-bold min-h-[52px]"
          tabIndex={visible ? 0 : -1}
        >
          Text Now
        </a>
        <Link
          href="/contact"
          className="btn btn-secondary flex-1 text-sm font-bold min-h-[52px]"
          tabIndex={visible ? 0 : -1}
        >
          <ClipboardIcon className="w-5 h-5" />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
