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
    { '@type': 'City', name: 'Queens', containedInPlace: { '@type': 'State', name: 'New York' } },
    { '@type': 'City', name: 'Manhasset', containedInPlace: { '@type': 'State', name: 'New York' } },
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
    { '@type': 'Review', author: { '@type': 'Person', name: 'Savannah C.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Helped me with a ton of projects: fixing a cabinet and putting it back together, hanging a projector, putting up a floating shelf, and more. Will hire again!' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Suzanne L.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Serge is the best guy. I can\'t begin to tell you how easy he made my awful move-in. I will know him for life — lovely chap.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Debra Z.' }, reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Serge is wonderful. He really cares about what he does and is so easy to work with. The quality of his work is excellent, and he even came up with new ideas that solved problems I was having.' },
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
