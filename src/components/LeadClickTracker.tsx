'use client';

import { useEffect } from 'react';
import { isJobberRequestLink, trackContactIntent, trackLead } from '@/lib/tracking';

/**
 * Site-wide lead-click tracking via event delegation. Mounted once in the root
 * layout, it listens (capture phase, so it runs before any navigation) for
 * clicks on `sms:`, `tel:` and external Jobber request links. SMS/phone retain
 * their Ads conversions; opening Jobber is GA4 contact intent only.
 * This avoids wiring onClick into individual CTA components
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
      } else if (isJobberRequestLink(href)) {
        trackContactIntent('jobber');
      }
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
