import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BUSINESS } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Handlyr — NYC Handyman' }],
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
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png' },
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS.name,
    image: 'https://handlyr.org/og-image.jpg',
    '@id': 'https://handlyr.org',
    url: 'https://handlyr.org',
    telephone: BUSINESS.phone,
    areaServed: {
      '@type': 'City',
      name: 'New York City'
    },
    description: BUSINESS.tagline,
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
