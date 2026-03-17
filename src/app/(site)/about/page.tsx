import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'About Us — Trusted NYC Handyman | 15+ Years Experience',
  description:
    'Handlyr has 15+ years of professional handyman experience in NYC. Trusted by hundreds of homeowners and renters in Brooklyn, Manhattan, Jersey City, Hoboken & Weehawken.',
  keywords: [
    'about Handlyr',
    'trusted handyman NYC',
    'experienced handyman Brooklyn',
    'reliable handyman Manhattan',
    'professional handyman NYC',
    'handyman near me',
  ],
  openGraph: {
    title: 'About Handlyr | Trusted NYC Handyman',
    description:
      '15+ years of professional handyman experience in NYC. Trusted by hundreds of homeowners across Brooklyn, Manhattan, and New Jersey.',
    type: 'website',
    url: 'https://handlyr.org/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Handlyr | Trusted NYC Handyman',
    description:
      '15+ years of professional handyman experience in NYC. Trusted by hundreds of homeowners across Brooklyn, Manhattan, and New Jersey.',
  },
  alternates: {
    canonical: 'https://handlyr.org/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="About Handlyr"
        description={`${BUSINESS.experience} years of trusted handyman work in New York City.`}
      />

      {/* About content */}
      <section className="bg-white py-16 px-4 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-text-dark mb-4">
                Built on Trust and Quality Work
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Handlyr was founded with one goal: make it easy for New Yorkers to get reliable,
                  professional handyman services without the hassle. We know how hard it can be to
                  find someone who shows up on time, does the job right, and charges a fair price.
                </p>
                <p>
                  With {BUSINESS.experience} years of hands-on experience across hundreds of homes and
                  apartments in Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken, we have
                  built a reputation on clean work and honest service.
                </p>
                <p>
                  Whether you need IKEA furniture assembled, a TV mounted on your wall, or a
                  drywall patch that looks like it was never there — we handle it professionally
                  and efficiently.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: '#F97316' }}
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center px-6 py-3 rounded-xl text-base font-semibold text-primary-700 border-2 border-primary-200 hover:border-primary-400 transition-colors duration-200"
                >
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: '420px' }}>
              <Image
                src="/about-portrait.jpg"
                alt="Serge — professional handyman, Handlyr NYC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { number: '15+', label: 'Years of Experience' },
                { number: '500+', label: 'Jobs Completed' },
                { number: '5★', label: 'Average Rating' },
                { number: '5', label: 'Areas Served' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl text-center border border-neutral-200"
                  style={{ backgroundColor: '#F9FAFB' }}
                >
                  <p className="font-heading font-extrabold text-4xl" style={{ color: '#0D2860' }}>
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
