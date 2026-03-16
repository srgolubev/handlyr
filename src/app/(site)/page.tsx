import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Reviews from '@/components/sections/Reviews';
import Gallery from '@/components/sections/Gallery';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Handlyr | Reliable Handyman NYC — Furniture Assembly, TV Mounting & More',
  description:
    'Top-rated handyman in NYC. Furniture assembly, TV mounting, shelf installation, drywall repair, blinds & more. Serving Brooklyn, Manhattan, Jersey City & Hoboken. Free estimates.',
  keywords: [
    'handyman NYC',
    'handyman Brooklyn',
    'handyman near me',
    'TV mounting NYC',
    'furniture assembly NYC',
    'shelf installation NYC',
    'drywall repair NYC',
    'blinds installation NYC',
    'IKEA assembly NYC',
    'handyman Manhattan',
  ],
  openGraph: {
    title: 'Handlyr | Reliable Handyman NYC',
    description:
      'Top-rated NYC handyman. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Free estimates, same-day response.',
    type: 'website',
    url: 'https://handlyr.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handlyr | Reliable Handyman NYC',
    description:
      'Top-rated NYC handyman. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Free estimates.',
  },
  alternates: {
    canonical: 'https://handlyr.org',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <ServiceAreas />
      <ContactForm />
    </>
  );
}
