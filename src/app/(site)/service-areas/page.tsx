import type { Metadata } from 'next';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Service Areas — Handyman in Brooklyn, Manhattan, Jersey City & More',
  description:
    'Handlyr serves Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken. Professional handyman services across the NYC metro area — furniture assembly, TV mounting, drywall repair & more.',
  keywords: [
    'handyman Brooklyn',
    'handyman Manhattan',
    'handyman Jersey City',
    'handyman Hoboken',
    'handyman Weehawken',
    'handyman NYC service areas',
    'handyman near me',
    'NYC metro handyman',
  ],
  openGraph: {
    title: 'Handyman Service Areas | Brooklyn, Manhattan, NJ | Handlyr',
    description:
      'Handlyr serves Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken. Professional handyman services across the NYC metro area.',
    type: 'website',
    url: 'https://handlyr.org/service-areas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Service Areas | Brooklyn, Manhattan, NJ | Handlyr',
    description:
      'Handlyr serves Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken. Professional handyman services across the NYC metro area.',
  },
  alternates: {
    canonical: 'https://handlyr.org/service-areas',
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        label="Where We Work"
        title="Service Areas"
        description="Serving homeowners, renters, and landlords across NYC and New Jersey."
      />

      <ServiceAreas />
      <ContactForm />
    </>
  );
}
