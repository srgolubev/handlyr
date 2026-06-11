'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads "Lead form submission" conversion. Fires once on mount — this
// component is rendered only on /thank-you, which Jobber redirects to after a
// real form submission, so each fire maps to one confirmed lead. gtag is loaded
// globally by <GoogleAds> in the root layout <head>.
const SEND_TO = 'AW-18191035963/D5HOCOGDvLwcELvclOJD';

export default function ConversionTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
      send_to: SEND_TO,
      value: 1.0,
      currency: 'USD',
    });
  }, []);

  return null;
}
