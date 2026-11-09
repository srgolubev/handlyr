import type { Metadata } from 'next';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Service Areas — Handyman in Brooklyn & Queens',
  description:
    'Handlyr serves Brooklyn and Queens. Professional handyman services across Brooklyn and Queens — furniture assembly, TV mounting, drywall repair & more.',
  keywords: [
    'handyman Brooklyn',
    'handyman Queens',
    'handyman NYC service areas',
    'handyman near me',
    'NYC metro handyman',
  ],
  openGraph: {
    title: 'Handyman Service Areas | Brooklyn & Queens | Handlyr',
    description:
      'Handlyr serves Brooklyn and Queens. Professional handyman services across Brooklyn and Queens.',
    type: 'website',
    url: 'https://handlyr.org/service-areas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Service Areas | Brooklyn & Queens | Handlyr',
    description:
      'Handlyr serves Brooklyn and Queens. Professional handyman services across Brooklyn and Queens.',
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
        description="Serving homeowners, renters, and landlords across Brooklyn and Queens."
      />

      <ServiceAreas />
      <ContactForm />
    </>
  );
}
