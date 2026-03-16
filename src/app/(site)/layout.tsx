import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Handlyr',
  description:
    'Professional handyman services in New York City — furniture assembly, TV mounting, shelving, drywall repair and more.',
  url: 'https://handlyr.org',
  telephone: '(347) 799-8402',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: ['Brooklyn', 'Manhattan', 'Jersey City', 'Hoboken', 'Weehawken'],
  priceRange: '$$',
  openingHours: 'Mo-Su 08:00-20:00',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      <Header />
      <main className="pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
