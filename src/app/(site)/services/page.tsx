import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { SERVICE_ICON } from '@/lib/serviceIcons';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Services — Handyman NYC | Furniture Assembly, TV Mounting, Drywall & More',
  description:
    'Full list of NYC handyman services: furniture assembly, TV mounting, shelf installation, blinds installation, cabinet installation, drywall repair & general repairs. Book online.',
  keywords: [
    'handyman services NYC',
    'furniture assembly NYC',
    'TV mounting NYC',
    'shelf installation NYC',
    'blinds installation NYC',
    'drywall repair NYC',
    'cabinet installation NYC',
    'handyman Brooklyn',
    'handyman near me',
  ],
  openGraph: {
    title: 'Handyman Services NYC | Handlyr',
    description:
      'Furniture assembly, TV mounting, shelf installation, blinds, cabinets, drywall repair & general repairs across NYC. Book a free estimate.',
    type: 'website',
    url: 'https://handlyr.org/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Services NYC | Handlyr',
    description:
      'Furniture assembly, TV mounting, shelf installation, blinds, cabinets, drywall repair & general repairs across NYC.',
  },
  alternates: {
    canonical: 'https://handlyr.org/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        description="Quality handyman work across New York City. From quick fixes to larger installations."
      />

      {/* Services detail */}
      <section className="bg-white py-16 px-4 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICON[service.id];
              return (
              <div
                key={service.id}
                className="flex flex-col p-6 card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600 mb-4">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h2 className="text-xl font-heading font-bold text-text-dark mb-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </h2>
                <p className="text-text-muted leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="btn btn-sm btn-primary mt-4"
                  aria-label={`Learn more about ${service.name} in NYC`}
                >
                  Learn More
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
