interface GoogleAnalyticsProps {
  gaId: string;
}

/**
 * Renders the standard GA4 script tags.
 * Pass gaId={process.env.NEXT_PUBLIC_GA_ID || ''} from layout.tsx.
 * When gaId is empty the component renders nothing, keeping local dev clean.
 */
export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
          `.trim(),
        }}
      />
    </>
  );
}
