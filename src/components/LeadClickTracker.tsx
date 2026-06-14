'use client';

import { useEffect } from 'react';
import { trackLead } from '@/lib/tracking';

/**
 * Site-wide lead-click tracking via event delegation. Mounted once in the root
 * layout, it listens (capture phase, so it runs before any navigation) for
 * clicks on any `sms:` or `tel:` link anywhere on the site and fires the
 * matching lead conversion. This avoids wiring onClick into ~15 CTA components
 * and automatically covers any CTA added later.
 */
export default function LeadClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;

      // Use the raw attribute (not the resolved .href) to match the scheme.
      const href = link.getAttribute('href') || '';
      if (href.startsWith('sms:')) {
        trackLead('sms');
      } else if (href.startsWith('tel:')) {
        trackLead('phone');
      }
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
