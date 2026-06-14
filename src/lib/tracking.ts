// Lead conversion tracking — one place for all three lead types.
//
// Each trackLead() call does three independent things:
//   1. console.log a diagnostic marker (for verifying tracking during testing)
//   2. push a GTM dataLayer event (works if/when a GTM container is added;
//      harmless no-op otherwise — gtag already creates window.dataLayer)
//   3. fire a Google Ads conversion via gtag (only if a label is configured)
//
// gtag.js (GA4 + Google Ads AW-18191035963) is loaded globally by <GoogleAds>
// / <GoogleAnalytics> in the layouts, so window.gtag exists on every page.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const ADS_ID = 'AW-18191035963';

export type LeadType = 'form' | 'sms' | 'phone';

// Google Ads conversion labels per lead type. The final send_to is
// `${ADS_ID}/${label}`. `form` is the live "Lead form submission" action.
//
// To activate SMS / Phone conversions: create the matching conversion actions
// in Google Ads, then paste each label below (the part after the slash in
// `AW-18191035963/XXXXXXXX`). null = skip the Ads conversion (dataLayer event
// and console log still fire, so the click is fully testable).
export const CONVERSION_LABELS: Record<LeadType, string | null> = {
  form: 'D5HOCOGDvLwcELvclOJD',
  sms: null, // TODO: paste the "SMS Lead" conversion label
  phone: null, // TODO: paste the "Phone Lead" conversion label
};

// dataLayer event names → these are the exact GTM Custom Event trigger names.
const DATALAYER_EVENT: Record<LeadType, string> = {
  form: 'jobber_form_submit',
  sms: 'sms_lead_click',
  phone: 'phone_lead_click',
};

// Diagnostic console markers (visible in DevTools during testing).
const LOG_MARKER: Record<LeadType, string> = {
  form: 'JOBBER_FORM_SUBMITTED',
  sms: 'SMS_LEAD_CLICKED',
  phone: 'PHONE_LEAD_CLICKED',
};

export function trackLead(type: LeadType): void {
  if (typeof window === 'undefined') return;

  // 1. Diagnostics
  console.log(LOG_MARKER[type]);

  // 2. GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: DATALAYER_EVENT[type] });

  // 3. Google Ads conversion (skipped until a label is configured)
  const label = CONVERSION_LABELS[type];
  if (label && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${ADS_ID}/${label}`,
      value: 1.0,
      currency: 'USD',
    });
  }
}
