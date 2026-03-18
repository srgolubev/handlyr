import type { Metadata } from 'next';
import './globals.css';

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

// Google Fonts loaded via browser (avoids build-time network dependency)
const googleFontsUrl =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
