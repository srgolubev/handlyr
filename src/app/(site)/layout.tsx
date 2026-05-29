import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { SERVICES, PRICING } from '@/lib/constants';

// Public profiles where the business can be corroborated (helps both local SEO
// entity matching and AI answer-engine citation/trust).
const SAME_AS = [
  'https://www.thumbtack.com/profile/services/573077145150963741',
  'https://g.page/r/CZAXmeyU7f5eEAE',
];

// Single source of truth for the business entity. Referenced elsewhere by @id.
// NOTE: This is a service-area business with no public storefront, so we model
// areaServed instead of asserting a (previously fabricated) postal address.
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://handlyr.org/#business',
  name: 'Handlyr',
  description:
    'Professional handyman services in New York City — furniture assembly, TV mounting, shelving, drywall repair and more.',
  url: 'https://handlyr.org',
  telephone: '+13477998402',
  email: 'order@handlyr.org',
  image: 'https://handlyr.org/og-image.jpg',
  logo: 'https://handlyr.org/favicon/android-chrome-512x512.png',
  foundingDate: '2009',
  founder: { '@type': 'Person', name: 'Serge', jobTitle: 'Owner & Handyman' },
  areaServed: [
    { '@type': 'City', name: 'Brooklyn', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Queens', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Manhasset', containedInPlace: { '@type': 'State', name: 'New York' } },
  ],
  priceRange: '$$',
  sameAs: SAME_AS,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '20:00' },
  ],
  // NOTE: We deliberately do NOT emit aggregateRating/review on this first-party
  // business node. Google's review-snippet policy disallows self-serving ratings
  // controlled by the business. The real 4.9★ / 28 reviews remain visible on-page
  // and are corroborated via the independent profiles in sameAs (Thumbtack/Google).
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Handyman Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      priceCurrency: PRICING.currency,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(PRICING.hourlyRate),
        priceCurrency: PRICING.currency,
        unitCode: 'HUR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'HUR' },
        // 2-hour minimum expressed as the eligible billable quantity, not as a
        // price-range minPrice (which schema readers treat as range metadata).
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: String(PRICING.minimumHours), unitCode: 'HUR' },
      },
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: `https://handlyr.org/services/${s.slug}`,
      },
    })),
  },
};

// WebSite node ties the whole site to the business entity for a clean graph.
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://handlyr.org/#website',
  url: 'https://handlyr.org',
  name: 'Handlyr',
  publisher: { '@id': 'https://handlyr.org/#business' },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={webSiteSchema} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      <Header />
      <main className="pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
