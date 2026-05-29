import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { BUSINESS, SERVICES, REVIEWS, PRICING, SHARED_FAQS } from '@/lib/constants';
import { SERVICE_ICON } from '@/lib/serviceIcons';
import { PhoneIcon, ShieldCheckIcon, ZapIcon, SparklesIcon, DollarSignIcon } from '@/components/icons';

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
      'Booking is simple: text a photo of the job and we reply with a clear, upfront estimate — usually within the hour. We arrive on schedule, protect your floors and furniture, and clean up before we leave. No surprises, just dependable work.',
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

  // Service-in-area JSON-LD, tied to the single canonical business entity (@id).
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Handyman Services in ${area.fullName}`,
    description: area.seoDescription,
    serviceType: 'Handyman',
    provider: { '@id': 'https://handlyr.org/#business' },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'State', name: 'New York' },
    },
    url: `https://handlyr.org/service-areas/${area.slug}`,
  };

  // Breadcrumb structured data (mirrors the visible breadcrumb nav below).
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://handlyr.org' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://handlyr.org/service-areas' },
      { '@type': 'ListItem', position: 3, name: area.fullName, item: `https://handlyr.org/service-areas/${area.slug}` },
    ],
  };

  // Localized coverage FAQ + shared pricing/scheduling FAQs.
  const faqs = [
    {
      q: `Do you serve all of ${area.name}?`,
      a: `Yes — we cover ${area.name} and its neighborhoods, including ${area.neighborhoods.slice(0, 4).join(', ')} and more.`,
    },
    ...SHARED_FAQS.filter((f) => f.q !== 'What areas do you serve?'),
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            className="btn btn-md btn-primary w-full sm:w-auto"
          >
            <PhoneIcon className="w-5 h-5" /> Call Now — {BUSINESS.phone}
          </a>
          <a
            href={`${BUSINESS.smsHref}handyman%20services%20in%20${encodeURIComponent(area.name)}`}
            className="btn btn-md btn-outline-dark w-full sm:w-auto"
          >
            Text for a Quick Estimate
          </a>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-2 text-primary-800">
            Services Available in {area.name}
          </h2>
          <p className="text-center text-text-muted mb-10">
            Every job includes a free text quote and professional, clean work — ${PRICING.hourlyRate}/hour, {PRICING.minimumHours}-hour minimum.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICON[service.id];
              return (
              <div
                key={service.id}
                className="flex flex-col p-6 card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600 mb-3">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-heading font-bold text-text-dark mb-1">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {service.name} in {area.name}
                  </Link>
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(area.name)}`}
                    className="btn btn-sm btn-primary"
                  >
                    Get a Quote
                  </a>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    aria-label={`Learn more about ${service.name} in ${area.name}`}
                  >
                    Details →
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Handlyr in [Area] */}
      <section className="py-16 px-4 lg:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-8 text-primary-800">
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
              { Icon: ShieldCheckIcon, label: '15+ Years Experience' },
              { Icon: ZapIcon, label: 'Fast Response' },
              { Icon: SparklesIcon, label: 'Clean Work' },
              { Icon: DollarSignIcon, label: 'Fair Pricing' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-neutral-200"
              >
                <span className="text-primary-600 mb-1">
                  <badge.Icon className="w-6 h-6" />
                </span>
                <span className="text-sm font-semibold text-text-dark">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Neighborhoods */}
          <div className="mt-10">
            <h3 className="font-heading font-semibold text-xl mb-4 text-primary-800">
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
            <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary-800">
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-800 text-white text-sm font-bold flex-shrink-0">
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

      {/* FAQ */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary-800">
            Handyman in {area.name} — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white rounded-2xl border border-neutral-200 p-5"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-text-dark list-none">
                  {faq.q}
                  <span
                    className="text-xl flex-shrink-0 transition-transform duration-200 group-open:rotate-45 text-accent-600"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-text-muted leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
              className="btn btn-md btn-primary"
            >
              Text for a Free Estimate
            </a>
            <Link href="/contact" className="btn btn-md btn-outline-light">
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
