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
  telephone: '+13477998402',
  email: 'order@handlyr.org',
  image: 'https://handlyr.org/og-image.jpg',
  logo: 'https://handlyr.org/favicon/android-chrome-512x512.png',
  foundingDate: '2009',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Brooklyn', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Manhattan', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Jersey City', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
    { '@type': 'City', name: 'Hoboken', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
    { '@type': 'City', name: 'Weehawken', containedInPlace: { '@type': 'State', name: 'New Jersey' } },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '20:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Alice C.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Serge killed it! Moved my TV, patched walls flawlessly, fixed my bed & assembled a dresser — all in one visit. On time, clean, no BS.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Julie N.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Easy to work with and did a great job hanging various items around our home. Good communication and very reliable!' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rachel K.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'I had 3 dressers put together and they were done neatly and quickly. Very professional and kind guy.' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Handyman Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Assembly', description: 'IKEA, Wayfair, and all flat-pack furniture assembled quickly and correctly.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TV Mounting', description: 'Wall-mounted TVs with hidden cables. All wall types including concrete and drywall.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shelf Installation', description: 'Custom shelving, floating shelves, and built-in shelf systems.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drywall Repair', description: 'Holes, cracks, and water damage repaired cleanly — smooth finish, ready to paint.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blinds Installation', description: 'Window blinds, shades, and curtain rods installed perfectly.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Installation', description: 'Kitchen and bathroom cabinets, medicine cabinets, and storage solutions.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'General Handyman Repairs', description: 'Doors, hinges, leaky faucets, squeaky floors — anything that needs fixing.' } },
    ],
  },
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
