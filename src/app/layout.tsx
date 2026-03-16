import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
