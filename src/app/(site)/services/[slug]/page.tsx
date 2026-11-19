import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { BUSINESS, SERVICE_AREAS, REVIEWS, PRICING, SHARED_FAQS } from '@/lib/constants';
import { SERVICE_ICON } from '@/lib/serviceIcons';
import { SERVICES_DETAIL } from '@/lib/serviceDetails';
import { COST_GUIDE_BY_SERVICE } from '@/lib/costGuides';
import { PhoneIcon, MapPinIcon } from '@/components/icons';

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(SERVICES_DETAIL).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAIL[slug];
  if (!service) return {};

  const title = `${service.name} NYC | Brooklyn & Queens | Handlyr`;
  const canonical = `https://handlyr.org/services/${service.slug}`;

  return {
    title,
    description: service.seoDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} in NYC | Handlyr`,
      description: service.seoDescription,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in NYC | Handlyr`,
      description: service.seoDescription,
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DETAIL[slug];
  if (!service) notFound();

  const serviceReviews = REVIEWS.filter((r) => service.reviewIds.includes(r.id));

  // Service-specific FAQs first, then shared pricing/scheduling/coverage FAQs.
  const faqs = [...service.faqs, ...SHARED_FAQS];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // Service JSON-LD, provided by the single canonical business entity (@id).
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seoDescription,
    serviceType: service.name,
    provider: { '@id': 'https://handlyr.org/#business' },
    areaServed: SERVICE_AREAS.map((a) => ({
      '@type': 'City',
      name: `${a.name}, ${a.state}`,
    })),
    url: `https://handlyr.org/services/${service.slug}`,
  };

  // Breadcrumb structured data (mirrors the visible breadcrumb nav below).
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://handlyr.org' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://handlyr.org/services' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://handlyr.org/services/${service.slug}` },
    ],
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
        label="Our Services"
        title={service.name}
        description={service.tagline}
      />

      {/* CTA bar */}
      <section className="bg-white py-6 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}`}
            className="btn btn-md btn-primary w-full sm:w-auto"
          >
            Text for a Free Quote
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="btn btn-md btn-outline-dark w-full sm:w-auto"
          >
            <PhoneIcon className="w-5 h-5" /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Service detail */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            {(() => {
              const Icon = SERVICE_ICON[service.slug];
              return (
                <span className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600">
                  {Icon && <Icon className="w-7 h-7" />}
                </span>
              );
            })()}
            <h2 className="font-heading font-bold text-3xl text-primary-800">
              {service.name} in NYC
            </h2>
          </div>
          <div className="space-y-5">
            {service.body.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* What to expect */}
          <div className="mt-10 p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <h3 className="font-heading font-bold text-xl mb-4 text-primary-800">
              What to Expect
            </h3>
            <ul className="space-y-2">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-primary-800 text-white text-xs font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="mt-6 p-6 rounded-2xl border border-accent-100 bg-accent-100/40">
            <h3 className="font-heading font-bold text-xl mb-3 text-primary-800">
              Simple, Upfront Pricing
            </h3>
            <p className="text-text-muted text-base leading-relaxed">
              <strong className="text-primary-800">
                ${PRICING.hourlyRate}/hour
              </strong>{' '}
              with a {PRICING.minimumHours}-hour minimum (${PRICING.hourlyRate * PRICING.minimumHours} minimum).{' '}
              {PRICING.rateSummary.split('. ').slice(1).join('. ')}
            </p>
            <p className="text-text-muted text-sm leading-relaxed mt-2">
              {PRICING.estimateSummary}
            </p>
            {COST_GUIDE_BY_SERVICE[service.slug] && (
              <p className="mt-3 text-sm">
                <Link
                  href={`/cost-guides/${COST_GUIDE_BY_SERVICE[service.slug].slug}`}
                  className="font-semibold text-primary-600 hover:text-primary-700"
                >
                  See typical {service.name.toLowerCase()} prices →
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4 lg:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-2 text-primary-800">
            Available in Brooklyn and Queens
          </h2>
          <p className="text-text-muted mb-8">
            We provide {service.name.toLowerCase()} across all our service areas. Same quality, same pricing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.name}
                href={`/services/${service.slug}/${area.slug}`}
                className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-shadow duration-200 group"
              >
                <span className="text-accent-600 mt-0.5"><MapPinIcon className="w-5 h-5" /></span>
                <div>
                  <p className="font-semibold text-sm group-hover:underline text-primary-800">
                    {service.name} in {area.name}, {area.state}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {serviceReviews.length > 0 && (
        <section className="bg-white py-16 px-4 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary-800">
              What Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceReviews.slice(0, 2).map((review) => (
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
      <section className="py-16 px-4 lg:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary-800">
            Frequently Asked Questions
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
            Need {service.name} in NYC?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Text or call for a fast, no-pressure estimate. We respond quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}`}
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
              <Link href="/services" className="hover:text-text-dark transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-dark font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
