import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import JsonLd from '@/components/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Handlyr | Reliable Handyman NYC',
    template: '%s | Handlyr',
  },
  description:
    'Professional handyman services in NYC: furniture assembly, TV mounting, shelf installation, drywall repair, and more. Serving Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken.',
  keywords: [
    'handyman NYC',
    'handyman Brooklyn',
    'handyman near me',
    'TV mounting NYC',
    'furniture assembly NYC',
    'shelf installation NYC',
    'drywall repair NYC',
    'blinds installation NYC',
    'handyman Manhattan',
    'IKEA assembly NYC',
  ],
  metadataBase: new URL('https://handlyr.org'),
  openGraph: {
    title: 'Handlyr | Reliable Handyman NYC',
    description:
      'Professional handyman services in NYC. Furniture assembly, TV mounting, drywall repair & more. 15+ years experience. Same-day response.',
    type: 'website',
    url: 'https://handlyr.org',
    siteName: 'Handlyr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handlyr | Reliable Handyman NYC',
    description:
      'Professional handyman services in NYC. Furniture assembly, TV mounting, drywall repair & more. 15+ years experience.',
  },
  alternates: {
    canonical: 'https://handlyr.org',
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <JsonLd schema={localBusinessSchema} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </head>
      <body className="font-body antialiased pb-20 lg:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
