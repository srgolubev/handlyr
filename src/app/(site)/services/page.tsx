import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
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

const serviceIcons: Record<string, string> = {
  'furniture-assembly': '📦',
  'tv-mounting': '📺',
  'shelf-installation': '🗂️',
  'blinds-installation': '🪟',
  'cabinet-installation': '🗄️',
  'drywall-repair': '🔧',
  'general-repairs': '⚙️',
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
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {serviceIcons[service.id]}
                </div>
                <h2 className="text-xl font-heading font-bold text-text-dark mb-2">
                  {service.name}
                </h2>
                <p className="text-text-muted leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: '#F97316' }}
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
