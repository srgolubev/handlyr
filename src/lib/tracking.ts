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

// Contact intent only: these events never represent a completed job/request.
export function trackContactIntent(type: 'sms' | 'phone' | 'jobber'): void {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (typeof window === 'undefined' || !gaId || typeof window.gtag !== 'function') return;
  const pagePath = window.location.pathname;
  window.gtag('event', type === 'jobber' ? 'jobber_form_open' : `${type}_lead_click`, {
    send_to: gaId,
    page_path: pagePath,
    contact_method: type,
    landing_variant: pagePath === '/move-in-nyc' ? 'manhattan_move_in'
      : pagePath === '/quickorder' ? 'quickorder' : 'main_site',
    transport_type: 'beacon',
  });
}

export function isJobberRequestLink(href: string): boolean {
  try {
    const url = new URL(href);
    return url.protocol === 'https:' && url.hostname === 'clienthub.getjobber.com'
      && /\/public\/(requests\/[^/]+\/new|work_request\/embedded_work_request_form)\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

export type LeadType = 'form' | 'sms' | 'phone';

// Google Ads conversion labels per lead type. The final send_to is
// `${ADS_ID}/${label}`. `form` is the live "Lead form submission" action.
//
// To activate SMS / Phone conversions: create the matching conversion actions
// in Google Ads, then paste each label below (the part after the slash in
// `AW-18191035963/XXXXXXXX`). null = skip the Ads conversion (dataLayer event
// and console log still fire, so the click is fully testable).
export const CONVERSION_LABELS: Record<LeadType, string | null> = {
  form: 'D5HOCOGDvLwcELvclOJD', // "Lead form submission"
  sms: '7Yo2CMO77L4cELvclOJD', // "SMS Lead"
  phone: 'no08CKSq174cELvclOJD', // "Phone Lead"
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

  if (type === 'sms' || type === 'phone') trackContactIntent(type);

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
