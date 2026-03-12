import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import ContactForm from '@/components/sections/ContactForm';

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
      {/* Page hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/60"
          >
            What We Do
          </p>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Our Services
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Quality handyman work across New York City. From quick fixes to larger installations.
          </p>
        </div>
      </section>

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
