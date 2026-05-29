import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { BUSINESS, SERVICES, REVIEWS } from '@/lib/constants';

// ─── Area data ───────────────────────────────────────────────────────────────

interface AreaData {
  slug: string;
  name: string;
  fullName: string;
  state: string;
  neighborhoods: string[];
  whyTitle: string;
  whyCopy: string[];
  reviewIds: number[];
  schemaLocality: string;
  schemaRegion: string;
  seoDescription: string;
}

const AREAS: Record<string, AreaData> = {
  brooklyn: {
    slug: 'brooklyn',
    name: 'Brooklyn',
    fullName: 'Brooklyn, NY',
    state: 'NY',
    neighborhoods: [
      'Park Slope',
      'Williamsburg',
      'DUMBO',
      'Bay Ridge',
      'Flatbush',
      'Crown Heights',
      'Bed-Stuy',
      'Sunset Park',
    ],
    whyTitle: 'Why Handlyr in Brooklyn',
    whyCopy: [
      'Brooklyn is home to hundreds of thousands of apartment dwellers, co-op owners, and renters who need reliable help with the little — and not so little — things. From IKEA furniture stacking up in a Williamsburg studio to TV mounting in a Park Slope brownstone, we know Brooklyn living inside and out.',
      'With 15+ years serving Brooklyn residents, we understand the quirks: pre-war plaster walls, concrete ceilings in new construction, narrow hallways and tight staircases. Every job is handled with the care and experience that your home deserves.',
      'We respond fast, show up on time, and leave your space clean. No surprise charges. No damage. Just solid work done right.',
    ],
    reviewIds: [8, 9, 1],
    schemaLocality: 'Brooklyn',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Brooklyn, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Park Slope, Williamsburg, DUMBO, Bay Ridge and all Brooklyn neighborhoods. Fast response, fair pricing.',
  },
  queens: {
    slug: 'queens',
    name: 'Queens',
    fullName: 'Queens, NY',
    state: 'NY',
    neighborhoods: [
      'Long Island City',
      'Astoria',
      'Sunnyside',
      'Forest Hills',
      'Flushing',
      'Jackson Heights',
      'Jamaica',
      'Bayside',
    ],
    whyTitle: 'Why Handlyr in Queens',
    whyCopy: [
      'Queens is the most diverse borough in the city, packed with new high-rises in Long Island City, classic co-ops in Forest Hills, and single-family homes out toward Bayside. Whatever your space looks like, we have worked on one like it.',
      'From assembling furniture in an Astoria walk-up to mounting a TV in a Flushing high-rise, we bring 15+ years of experience and the right tools for every wall type. We know the buildings, the parking, and how to get in and out without fuss.',
      'We respond fast, show up on time, and leave your space clean. No surprise charges. No damage. Just solid work done right.',
    ],
    reviewIds: [4, 7],
    schemaLocality: 'Queens',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Queens, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Long Island City, Astoria, Forest Hills, Flushing, Bayside and all Queens neighborhoods. Fast response, fair pricing.',
  },
  manhasset: {
    slug: 'manhasset',
    name: 'Manhasset',
    fullName: 'Manhasset, NY',
    state: 'NY',
    neighborhoods: [
      'Manhasset',
      'Plandome',
      'Munsey Park',
      'Flower Hill',
      'Strathmore',
      'Manhasset Hills',
    ],
    whyTitle: 'Why Handlyr in Manhasset',
    whyCopy: [
      'Manhasset and the North Shore of Nassau County are home to beautiful single-family houses, established estates, and busy family households that need a handyman they can trust. We bring the same NYC-grade craftsmanship out to Long Island.',
      'From mounting TVs and hanging artwork to assembling furniture and tackling that growing punch list, we handle homes of every size with care. Our work speaks for itself: clean installs, accurate mounting, and zero mess left behind.',
      'Quick to respond and easy to schedule — just send a text and we will get back to you with a straightforward estimate.',
    ],
    reviewIds: [6, 2],
    schemaLocality: 'Manhasset',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Manhasset, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Manhasset, Plandome, Munsey Park and the North Shore of Nassau County. Reliable, fast, clean work.',
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(AREAS).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) return {};

  const title = `Handyman in ${area.fullName} | Furniture Assembly, TV Mounting & More`;
  const canonical = `https://handlyr.org/service-areas/${area.slug}`;

  return {
    title,
    description: area.seoDescription,
    keywords: [
      `handyman ${area.name}`,
      `handyman ${area.name} ${area.state}`,
      `handyman near me ${area.name}`,
      `furniture assembly ${area.name}`,
      `TV mounting ${area.name}`,
      `shelf installation ${area.name}`,
      `drywall repair ${area.name}`,
      `blinds installation ${area.name}`,
      `cabinet installation ${area.name}`,
      'handyman NYC',
    ],
    openGraph: {
      title: `Handyman in ${area.fullName} | Handlyr`,
      description: area.seoDescription,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Handyman in ${area.fullName} | Handlyr`,
      description: area.seoDescription,
    },
    alternates: {
      canonical,
    },
  };
}

// ─── Service icons ────────────────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, string> = {
  'furniture-assembly': '📦',
  'tv-mounting': '📺',
  'shelf-installation': '🗂️',
  'blinds-installation': '🪟',
  'cabinet-installation': '🗄️',
  'drywall-repair': '🔧',
  'general-repairs': '⚙️',
};

// ─── Star helper ──────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) notFound();

  const areaReviews = REVIEWS.filter((r) => area.reviewIds.includes(r.id));

  // LocalBusiness JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: 'https://handlyr.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.schemaLocality,
      addressRegion: area.schemaRegion,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: area.name },
    ],
    description: area.seoDescription,
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <PageHero
        label="Service Area"
        title={`Handyman in ${area.fullName}`}
        description={`Professional handyman services across ${area.name}. Fast response, clean work, fair pricing.`}
      />

      {/* CTA bar */}
      <section className="bg-white py-6 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href={BUSINESS.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: '#F97316' }}
          >
            <span aria-hidden="true">📞</span> Call Now — {BUSINESS.phone}
          </a>
          <a
            href={`${BUSINESS.smsHref}handyman%20services%20in%20${encodeURIComponent(area.name)}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base border-2 transition-colors duration-200"
            style={{ borderColor: '#0D2860', color: '#0D2860' }}
          >
            <span aria-hidden="true">💬</span> Text for a Quick Estimate
          </a>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading font-bold text-3xl text-center mb-2"
            style={{ color: '#0D2860' }}
          >
            Services Available in {area.name}
          </h2>
          <p className="text-center text-text-muted mb-10">
            All services include a free quote and professional, clean work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3" aria-hidden="true">
                  {SERVICE_ICONS[service.id]}
                </div>
                <h3 className="text-lg font-heading font-bold text-text-dark mb-1">
                  {service.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(area.name)}`}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                  style={{ backgroundColor: '#F97316' }}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Handlyr in [Area] */}
      <section className="py-16 px-4 lg:py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-heading font-bold text-3xl mb-8"
            style={{ color: '#0D2860' }}
          >
            {area.whyTitle}
          </h2>
          <div className="space-y-5">
            {area.whyCopy.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', label: '15+ Years Experience' },
              { icon: '⚡', label: 'Fast Response' },
              { icon: '✨', label: 'Clean Work' },
              { icon: '💰', label: 'Fair Pricing' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-neutral-200"
              >
                <span className="text-2xl mb-1" aria-hidden="true">
                  {badge.icon}
                </span>
                <span className="text-sm font-semibold text-text-dark">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Neighborhoods */}
          <div className="mt-10">
            <h3
              className="font-heading font-semibold text-xl mb-4"
              style={{ color: '#0D2860' }}
            >
              Neighborhoods We Serve in {area.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {area.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-200 bg-white text-text-muted"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {areaReviews.length > 0 && (
        <section className="bg-white py-16 px-4 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-heading font-bold text-3xl mb-8 text-center"
              style={{ color: '#0D2860' }}
            >
              What Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {areaReviews.slice(0, 2).map((review) => (
                <figure
                  key={review.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
                >
                  <div className="mb-3">
                    <Stars count={review.stars} />
                  </div>
                  <blockquote className="text-text-muted leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: '#0D2860' }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-text-dark text-sm">{review.name}</p>
                      <p className="text-xs text-text-muted">{review.service}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-white mb-3">
            Ready to Book a Handyman in {area.name}?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Send a quick text or fill out the form. We get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${BUSINESS.smsHref}handyman%20in%20${encodeURIComponent(area.name)}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: '#F97316' }}
            >
              💬 Text for a Free Estimate
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white text-base border-2 border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white py-4 px-4 border-t border-neutral-100"
      >
        <div className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-text-dark transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/service-areas" className="hover:text-text-dark transition-colors">
                Service Areas
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-dark font-medium">{area.fullName}</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
