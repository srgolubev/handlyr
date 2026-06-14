'use client';

import { useEffect, useRef } from 'react';
import { trackLead } from '@/lib/tracking';

// Fires the "Jobber form submission" lead exactly once on mount. Rendered only
// on /thank-you, which Jobber redirects to after a real form submission — so
// each fire maps to one confirmed lead (never on button click). trackLead()
// handles the gtag conversion, the GTM dataLayer push (jobber_form_submit), and
// the JOBBER_FORM_SUBMITTED diagnostic log.
export default function ConversionTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackLead('form');
  }, []);

  return null;
}
