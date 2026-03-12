import type { Metadata } from 'next';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ContactForm from '@/components/sections/ContactForm';

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
      {/* Page hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/60">
            Where We Work
          </p>
          <h1
            className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Service Areas
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Serving homeowners, renters, and landlords across NYC and New Jersey.
          </p>
        </div>
      </section>

      <ServiceAreas />
      <ContactForm />
    </>
  );
}
