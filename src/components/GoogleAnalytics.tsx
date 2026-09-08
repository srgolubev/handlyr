interface GoogleAnalyticsProps {
  gaId: string;
}

/**
 * Configures GA4 once in the root layout. GoogleAds, rendered immediately
 * before this component, initializes gtag and loads the shared library.
 * Pass gaId={process.env.NEXT_PUBLIC_GA_ID || ''} from layout.tsx.
 * When gaId is empty the component renders nothing, keeping local dev clean.
 */
export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
gtag('config', '${gaId}');
          `.trim(),
        }}
      />
    </>
  );
}
