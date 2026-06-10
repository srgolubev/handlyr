// Google Ads global site tag (gtag.js). The conversion/measurement ID is a
// public client-side identifier (safe to commit). Rendered from the root
// layout so it loads on every route, including /quickorder which lives outside
// the (site) route group. Coexists with GoogleAnalytics — both share the same
// gtag.js library and dataLayer.
const GOOGLE_ADS_ID = 'AW-18191035963';

export default function GoogleAds() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
          `.trim(),
        }}
      />
    </>
  );
}
