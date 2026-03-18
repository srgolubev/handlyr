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
    reviewIds: [2, 3, 6],
    schemaLocality: 'Brooklyn',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Brooklyn, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Park Slope, Williamsburg, DUMBO, Bay Ridge and all Brooklyn neighborhoods. Fast response, fair pricing.',
  },
  manhattan: {
    slug: 'manhattan',
    name: 'Manhattan',
    fullName: 'Manhattan, NY',
    state: 'NY',
    neighborhoods: [
      'Upper West Side',
      'Upper East Side',
      'Midtown',
      'Chelsea',
      'Financial District',
      'Tribeca',
      'SoHo',
      'Harlem',
    ],
    whyTitle: 'Why Handlyr in Manhattan',
    whyCopy: [
      'Manhattan apartments come with their own set of challenges — concrete walls in high-rises, strict building rules, and doormen to coordinate with. We have handled it all across the island, from studio apartments in Harlem to luxury units in Tribeca.',
      'Our experience with Manhattan buildings means we know how to mount a TV on concrete without causing damage, how to work quietly during building hours, and how to leave every job spotless.',
      'Whether you just moved into a new place on the Upper West Side or need a patch on the wall before your lease is up downtown, we are your go-to handyman in Manhattan.',
    ],
    reviewIds: [1, 5],
    schemaLocality: 'Manhattan',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Manhattan, NY. TV mounting on concrete, furniture assembly, shelf installation, drywall repair & more. Serving Upper West Side, Tribeca, Chelsea, Harlem and all Manhattan neighborhoods. Fast, clean, reliable.',
  },
  'jersey-city': {
    slug: 'jersey-city',
    name: 'Jersey City',
    fullName: 'Jersey City, NJ',
    state: 'NJ',
    neighborhoods: [
      'Downtown Jersey City',
      'Heights',
      'Journal Square',
      'Newport',
      'The Waterfront',
      'Bergen-Lafayette',
    ],
    whyTitle: 'Why Handlyr in Jersey City',
    whyCopy: [
      'Jersey City is booming with new construction and growing neighborhoods — and that means plenty of new apartments to set up, furniture to assemble, and walls to mount things on. We cross the Hudson regularly and know the area well.',
      'From the luxury towers along the waterfront to the brownstones in the Heights, we bring the same quality work you would expect from a top NYC handyman — right here in Jersey City.',
      'No extra fees for traveling to Jersey City. Just honest pricing, professional work, and a clean result every time.',
    ],
    reviewIds: [4, 5],
    schemaLocality: 'Jersey City',
    schemaRegion: 'NJ',
    seoDescription:
      'Professional handyman in Jersey City, NJ. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Downtown, Heights, Journal Square, Newport and all Jersey City neighborhoods. NYC-quality work, local pricing.',
  },
  hoboken: {
    slug: 'hoboken',
    name: 'Hoboken',
    fullName: 'Hoboken, NJ',
    state: 'NJ',
    neighborhoods: [
      'Downtown Hoboken',
      'Uptown Hoboken',
      'Northwest Hoboken',
      'Southwest Hoboken',
      'Hoboken Waterfront',
    ],
    whyTitle: 'Why Handlyr in Hoboken',
    whyCopy: [
      'Hoboken is a city of young professionals and growing families who want things done right and done fast. Whether you just moved into a new rental or are finally setting up that spare room, we handle everything you need.',
      'We service all of Hoboken, from the waterfront buildings with stunning NYC views to the classic brownstones on the side streets. We bring our tools, our experience, and our attention to detail to every job.',
      'Hoboken residents love us for our reliability — we show up when we say we will and get the job done without fuss. Text us for a quick estimate.',
    ],
    reviewIds: [4, 1],
    schemaLocality: 'Hoboken',
    schemaRegion: 'NJ',
    seoDescription:
      'Professional handyman in Hoboken, NJ. Furniture assembly, TV mounting, shelf installation, blinds, drywall repair & more. Serving all Hoboken neighborhoods. Fast response, clean work, fair pricing.',
  },
  weehawken: {
    slug: 'weehawken',
    name: 'Weehawken',
    fullName: 'Weehawken, NJ',
    state: 'NJ',
    neighborhoods: [
      'Weehawken Waterfront',
      'Port Imperial',
      'Boulevard East',
      'Shades of Death',
      'West Weehawken',
    ],
    whyTitle: 'Why Handlyr in Weehawken',
    whyCopy: [
      'Weehawken sits right across the Hudson with some of the best views of Manhattan — and its residents deserve a handyman who matches that standard of quality. We serve the full Weehawken area including the waterfront and the Boulevard East corridor.',
      'From the modern condos at Port Imperial to single-family homes on the hillside, we bring the same expertise and care to every job. Our work speaks for itself: clean installs, accurate mounting, zero mess left behind.',
      'Quick to respond and easy to schedule — just send a text and we will get back to you with a straightforward estimate.',
    ],
    reviewIds: [4, 5],
    schemaLocality: 'Weehawken',
    schemaRegion: 'NJ',
    seoDescription:
      'Professional handyman in Weehawken, NJ. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Port Imperial, Boulevard East and all Weehawken neighborhoods. Reliable, fast, clean work.',
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
                      <p className="text-xs text-text-muted">{review.location}</p>
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
