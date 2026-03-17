'use client';

import { useState, useEffect } from 'react';
import { BUSINESS } from '@/lib/constants';
import { PhoneIcon, ClipboardIcon } from '@/components/icons';

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
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-95 min-h-[52px]"
          style={{ backgroundColor: '#F97316' }}
          tabIndex={visible ? 0 : -1}
        >
          <PhoneIcon className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:opacity-90 active:scale-95 min-h-[52px]"
          style={{ backgroundColor: '#0D2860' }}
          tabIndex={visible ? 0 : -1}
        >
          <ClipboardIcon className="w-5 h-5" />
          Free Quote
        </a>
      </div>
    </div>
  );
}
