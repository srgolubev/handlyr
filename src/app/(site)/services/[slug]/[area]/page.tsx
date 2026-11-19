import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  REVIEWS,
  PRICING,
  SHARED_FAQS,
  GALLERY_ITEMS,
  RATING,
} from '@/lib/constants';
import { SERVICES_DETAIL } from '@/lib/serviceDetails';
import { AREAS } from '@/lib/areaDetails';
import { SERVICE_AREA_COPY, SERVICE_GALLERY } from '@/lib/serviceAreaCopy';
import { SERVICE_ICON } from '@/lib/serviceIcons';
import { PhoneIcon, MapPinIcon } from '@/components/icons';

const BASE_URL = 'https://handlyr.org';

type Params = Promise<{ slug: string; area: string }>;

// Only the combinations defined in SERVICE_AREA_COPY exist; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(SERVICE_AREA_COPY).flatMap(([slug, areas]) =>
    Object.keys(areas).map((area) => ({ slug, area }))
  );
}

function resolve(slug: string, areaSlug: string) {
  const service = SERVICES_DETAIL[slug];
  const area = AREAS[areaSlug];
  const copy = SERVICE_AREA_COPY[slug]?.[areaSlug as 'brooklyn' | 'queens'];
  if (!service || !area || !copy) return null;
  return { service, area, copy };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, area: areaSlug } = await params;
  const data = resolve(slug, areaSlug);
  if (!data) return {};
  const { service, area, copy } = data;

  const title = `${service.name} in ${area.fullName} | $${PRICING.hourlyRate}/hr | Handlyr`;
  const description = `${copy.lead} $${PRICING.hourlyRate}/hour, ${PRICING.minimumHours}-hour minimum. Free quote by text, reply within 20 minutes. ${RATING.value}★ from ${RATING.count} reviews.`;
  const canonical = `${BASE_URL}/services/${service.slug}/${area.slug}`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${service.name.toLowerCase()} ${area.name}`,
      `${service.name.toLowerCase()} ${area.name} NY`,
      `${service.name.toLowerCase()} near me ${area.name}`,
      ...copy.neighborhoods.slice(0, 3).map((n) => `${service.name.toLowerCase()} ${n}`),
    ],
    openGraph: {
      title: `${service.name} in ${area.fullName} | Handlyr`,
      description,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${area.fullName} | Handlyr`,
      description,
    },
    alternates: { canonical },
  };
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

export default async function ServiceAreaComboPage({ params }: { params: Params }) {
  const { slug, area: areaSlug } = await params;
  const data = resolve(slug, areaSlug);
  if (!data) notFound();
  const { service, area, copy } = data;

  const url = `${BASE_URL}/services/${service.slug}/${area.slug}`;
  const smsHref = `${BUSINESS.smsHref}${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(area.name)}`;
  const Icon = SERVICE_ICON[service.slug];

  const reviews = REVIEWS.filter((r) => service.reviewIds.includes(r.id)).slice(0, 2);
  const photos = GALLERY_ITEMS.filter((g) =>
    (SERVICE_GALLERY[service.slug] ?? []).includes(g.service)
  ).slice(0, 3);
  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const faqs = [
    copy.faq,
    ...service.faqs,
    ...SHARED_FAQS.filter((f) => f.q !== 'What areas do you serve?'),
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${area.fullName}`,
    description: copy.lead,
    serviceType: service.name,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'State', name: 'New York' },
    },
    url,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${BASE_URL}/services/${service.slug}` },
      { '@type': 'ListItem', position: 4, name: area.fullName, item: url },
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
      {[serviceSchema, breadcrumbSchema, faqSchema].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <PageHero
        label={`${area.name} · ${service.name}`}
        title={`${service.name} in ${area.fullName}`}
        description={copy.lead}
      />

      {/* CTA bar */}
      <section className="bg-white py-6 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a href={smsHref} className="btn btn-md btn-primary w-full sm:w-auto">
            Text a Photo for a Free Quote
          </a>
          <a href={BUSINESS.phoneHref} className="btn btn-md btn-outline-dark w-full sm:w-auto">
            <PhoneIcon className="w-5 h-5" /> Call {BUSINESS.phone}
          </a>
        </div>
        <p className="mt-3 text-center text-sm text-text-muted">
          {RATING.value}★ from {RATING.count} reviews · Reply {BUSINESS.responseTime} · 30-day workmanship guarantee
        </p>
      </section>

      {/* Local intro + what to expect + pricing */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600">
              {Icon && <Icon className="w-7 h-7" />}
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary-800">
              {service.name} for {area.name} Homes
            </h2>
          </div>
          <div className="space-y-5">
            {copy.intro.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
              <h3 className="font-heading font-bold text-xl mb-4 text-primary-800">What to Expect</h3>
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

            <div className="p-6 rounded-2xl border border-accent-100 bg-accent-100/40">
              <h3 className="font-heading font-bold text-xl mb-4 text-primary-800">
                Pricing in {area.name}
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-accent-100 pb-2">
                  <dt className="text-text-muted">Hourly rate</dt>
                  <dd className="font-semibold text-primary-800">${PRICING.hourlyRate}/hour</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-accent-100 pb-2">
                  <dt className="text-text-muted">Minimum visit</dt>
                  <dd className="font-semibold text-primary-800">
                    {PRICING.minimumHours} hours (${PRICING.hourlyRate * PRICING.minimumHours})
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-accent-100 pb-2">
                  <dt className="text-text-muted">Quote by text (send a photo)</dt>
                  <dd className="font-semibold text-primary-800">Free</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">On-site estimate</dt>
                  <dd className="font-semibold text-primary-800 text-right">
                    ${PRICING.estimateFee}, credited to the job
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-text-muted leading-relaxed">
                Same rate across Brooklyn and Queens. If the job finishes early, we use the remaining time for other small tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent work */}
      {photos.length > 0 && (
        <section className="py-16 px-4 lg:py-20 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8 text-center text-primary-800">
              Recent {service.name} Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((p) => (
                <figure key={p.id} className="card overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm font-semibold text-text-dark">{p.label}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-center">
              <Link href="/projects" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                See all projects →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Neighborhoods */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-3 text-primary-800">
            {service.name} Across {area.name}
          </h2>
          <p className="text-text-muted mb-6">
            We cover all of {area.name}, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {area.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-neutral-200 bg-white text-text-muted"
              >
                <MapPinIcon className="w-3.5 h-3.5 text-accent-600" />
                {n}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Also in {otherAreas.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && ', '}
                <Link href={`/services/${service.slug}/${a.slug}`} className="font-semibold text-primary-600 hover:text-primary-700">
                  {service.name.toLowerCase()} in {a.name}
                </Link>
              </span>
            ))}
            {' · '}
            <Link href={`/service-areas/${area.slug}`} className="font-semibold text-primary-600 hover:text-primary-700">
              all handyman services in {area.name}
            </Link>
          </p>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="py-16 px-4 lg:py-20 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-2 text-center text-primary-800">
              What Customers Say
            </h2>
            <p className="text-center text-text-muted mb-8">
              {RATING.value}★ average from {RATING.count} reviews on Thumbtack and Google.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <figure key={review.id} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
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
            {service.name} in {area.name} — FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
        </div>
      </section>

      {/* Other services in this area */}
      <section className="py-16 px-4 lg:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6 text-primary-800">
            More Handyman Services in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => {
              const SIcon = SERVICE_ICON[s.id];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-shadow duration-200 group"
                >
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600">
                    {SIcon && <SIcon className="w-5 h-5" />}
                  </span>
                  <span className="font-semibold text-sm text-primary-800 group-hover:underline">
                    {s.name} in {area.name}
                  </span>
                </Link>
              );
            })}
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
            Need {service.name} in {area.name}?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Text a photo of the job for a free quote. We usually reply {BUSINESS.responseTime}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={smsHref} className="btn btn-md btn-primary">
              Text for a Free Quote
            </a>
            <Link href="/contact" className="btn btn-md btn-outline-light">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="bg-white py-4 px-4 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-text-dark transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-text-dark transition-colors">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/services/${service.slug}`} className="hover:text-text-dark transition-colors">
                {service.name}
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
