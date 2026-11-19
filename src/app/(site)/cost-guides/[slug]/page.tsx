import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { BUSINESS, PRICING, RATING, SERVICES, SERVICE_AREAS } from '@/lib/constants';
import {
  COST_GUIDES,
  COST_GUIDE_BY_SLUG,
  hoursLabel,
  priceRange,
} from '@/lib/costGuides';
import { PhoneIcon } from '@/components/icons';

const BASE_URL = 'https://handlyr.org';
// Bump when guide content or pricing changes.
const UPDATED = '2026-11-19';

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return COST_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const guide = COST_GUIDE_BY_SLUG[slug];
  if (!guide) return {};
  const canonical = `${BASE_URL}/cost-guides/${guide.slug}`;
  return {
    title: { absolute: `${guide.title} (NYC, 2026 Prices) | Handlyr` },
    description: guide.metaDescription,
    openGraph: { title: guide.title, description: guide.metaDescription, type: 'article', url: canonical },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.metaDescription },
    alternates: { canonical },
  };
}

export default async function CostGuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = COST_GUIDE_BY_SLUG[slug];
  if (!guide) notFound();

  const url = `${BASE_URL}/cost-guides/${guide.slug}`;
  const service = guide.serviceSlug ? SERVICES.find((s) => s.slug === guide.serviceSlug) : null;
  const smsHref = `${BUSINESS.smsHref}${encodeURIComponent(service ? service.name : 'a few jobs')}`;
  const otherGuides = COST_GUIDES.filter((g) => g.slug !== guide.slug);

  const faqs = [
    { q: guide.title, a: guide.shortAnswer },
    ...guide.faqs,
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: UPDATED,
    dateModified: UPDATED,
    author: { '@type': 'Person', name: 'Serge', worksFor: { '@id': `${BASE_URL}/#business` } },
    publisher: { '@id': `${BASE_URL}/#business` },
    mainEntityOfPage: url,
    about: service
      ? { '@type': 'Service', name: service.name, url: `${BASE_URL}/services/${service.slug}` }
      : { '@type': 'Service', name: 'Handyman services' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost-guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: url },
    ],
  };

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
      {[articleSchema, breadcrumbSchema, faqSchema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <PageHero
        label="Cost Guide"
        title={guide.title}
        description={`Real prices from a Brooklyn & Queens handyman — $${PRICING.hourlyRate}/hour, ${PRICING.minimumHours}-hour minimum.`}
      />

      <article className="bg-white py-14 px-4 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Short answer */}
          <section aria-labelledby="short-answer" className="p-6 rounded-2xl border border-accent-100 bg-accent-100/40">
            <h2 id="short-answer" className="font-heading font-bold text-xl mb-3 text-primary-800">
              The short answer
            </h2>
            <p className="text-text-dark leading-relaxed">{guide.shortAnswer}</p>
            <p className="mt-3 text-xs text-text-muted">
              By Serge, owner of Handlyr · {BUSINESS.experience} years in the trade · Updated{' '}
              <time dateTime={UPDATED}>November 2026</time>
            </p>
          </section>

          {/* Price table */}
          <section aria-labelledby="price-table" className="mt-12">
            <h2 id="price-table" className="font-heading font-bold text-2xl mb-2 text-primary-800">
              Typical jobs and prices
            </h2>
            <p className="text-sm text-text-muted mb-5">
              Based on ${PRICING.hourlyRate}/hour with a {PRICING.minimumHours}-hour (${PRICING.hourlyRate * PRICING.minimumHours}) minimum. Times are typical; your quote is based on photos of your job.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-left text-text-dark">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Job</th>
                    <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Typical time</th>
                    <th scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.jobs.map((j) => (
                    <tr key={j.job} className="border-t border-neutral-200 align-top">
                      <th scope="row" className="px-4 py-3 font-normal text-left text-text-dark">
                        {j.job}
                        {j.note && <span className="block text-xs text-text-muted mt-0.5">{j.note}</span>}
                      </th>
                      <td className="px-4 py-3 text-text-muted whitespace-nowrap">{hoursLabel(j.hours)}</td>
                      <td className="px-4 py-3 font-semibold text-primary-800 whitespace-nowrap">{priceRange(j.hours)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              Jobs under {PRICING.minimumHours} hours are billed at the minimum — and we use the remaining time for other small tasks on your list. Text quotes are free; an on-site estimate is ${PRICING.estimateFee}, credited toward the job.
            </p>
          </section>

          {/* Factors */}
          <section aria-labelledby="factors" className="mt-12">
            <h2 id="factors" className="font-heading font-bold text-2xl mb-5 text-primary-800">
              What changes the price
            </h2>
            <dl className="space-y-4">
              {guide.factors.map((f) => (
                <div key={f.name}>
                  <dt className="font-semibold text-text-dark">{f.name}</dt>
                  <dd className="text-text-muted leading-relaxed">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Tips */}
          <section aria-labelledby="tips" className="mt-12">
            <h2 id="tips" className="font-heading font-bold text-2xl mb-5 text-primary-800">
              How to keep the cost down
            </h2>
            <ul className="space-y-2">
              {guide.tips.map((t) => (
                <li key={t} className="flex items-start gap-3 text-text-muted">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-primary-800 text-white text-xs font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </section>

          {/* What you get */}
          <section aria-labelledby="included" className="mt-12 p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <h2 id="included" className="font-heading font-bold text-xl mb-3 text-primary-800">
              Included with every visit
            </h2>
            <ul className="text-sm text-text-muted space-y-1.5 list-disc pl-5">
              <li>Reply to your text {BUSINESS.responseTime}, same-day visits often available</li>
              <li>Clean-up and packaging removal before we leave</li>
              <li>30-day workmanship guarantee</li>
              <li>{RATING.value}★ average from {RATING.count} customer reviews</li>
            </ul>
          </section>

          {/* FAQ */}
          {guide.faqs.length > 0 && (
            <section aria-labelledby="faq" className="mt-12">
              <h2 id="faq" className="font-heading font-bold text-2xl mb-5 text-primary-800">
                Questions about cost
              </h2>
              <div className="space-y-4">
                {guide.faqs.map((faq) => (
                  <details key={faq.q} className="group bg-white rounded-2xl border border-neutral-200 p-5">
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
            </section>
          )}

          {/* Related */}
          <section aria-labelledby="related" className="mt-12">
            <h2 id="related" className="font-heading font-bold text-xl mb-4 text-primary-800">
              {service ? `${service.name} near you` : 'Our services'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {service ? (
                <>
                  <Link href={`/services/${service.slug}`} className="btn btn-sm btn-outline-dark">
                    {service.name} details
                  </Link>
                  {SERVICE_AREAS.map((a) => (
                    <Link key={a.slug} href={`/services/${service.slug}/${a.slug}`} className="btn btn-sm btn-outline-dark">
                      {service.name} in {a.name}
                    </Link>
                  ))}
                </>
              ) : (
                SERVICES.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="btn btn-sm btn-outline-dark">
                    {s.name}
                  </Link>
                ))
              )}
            </div>
            <h3 className="mt-8 font-semibold text-text-dark mb-2">More cost guides</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {otherGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/cost-guides/${g.slug}`} className="text-primary-600 hover:text-primary-700 hover:underline">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      {/* Final CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-white mb-3">Get an exact price</h2>
          <p className="text-white/80 mb-8 text-base">
            Text a photo of the job — we reply with a free estimate, usually {BUSINESS.responseTime}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={smsHref} className="btn btn-md btn-primary">Text for a Free Quote</a>
            <a href={BUSINESS.phoneHref} className="btn btn-md btn-outline-light">
              <PhoneIcon className="w-5 h-5" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="bg-white py-4 px-4 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li><Link href="/" className="hover:text-text-dark transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/cost-guides" className="hover:text-text-dark transition-colors">Cost Guides</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-text-dark font-medium">{guide.title}</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
