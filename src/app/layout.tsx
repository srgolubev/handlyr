import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

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
    'Professional handyman services in NYC: furniture assembly, TV mounting, shelf installation, drywall repair, and more. Serving Brooklyn, Queens, and Manhasset.',
  keywords: [
    'handyman NYC',
    'handyman Brooklyn',
    'handyman near me',
    'TV mounting NYC',
    'furniture assembly NYC',
    'shelf installation NYC',
    'drywall repair NYC',
    'blinds installation NYC',
    'handyman Queens',
    'handyman Manhasset',
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

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: The canonical business JSON-LD lives in (site)/layout.tsx as a single
  // source of truth (@id https://handlyr.org/#business). We intentionally do NOT
  // emit a second, conflicting business node here.
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
