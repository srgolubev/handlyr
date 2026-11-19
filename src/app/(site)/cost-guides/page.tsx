import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { PRICING } from '@/lib/constants';
import { COST_GUIDES, jobPrice, formatUsd } from '@/lib/costGuides';
import { SERVICE_ICON } from '@/lib/serviceIcons';

const BASE_URL = 'https://handlyr.org';
const MIN = PRICING.hourlyRate * PRICING.minimumHours;

export const metadata: Metadata = {
  title: 'Handyman Cost Guides for Brooklyn & Queens',
  description: `What handyman jobs really cost in Brooklyn and Queens: TV mounting, furniture assembly, shelves, blinds, cabinets and drywall repair. $${PRICING.hourlyRate}/hour, $${MIN} minimum.`,
  alternates: { canonical: `${BASE_URL}/cost-guides` },
};

export default function CostGuidesIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: `${BASE_URL}/cost-guides` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        label="Cost Guides"
        title="What Handyman Jobs Cost in NYC"
        description={`Straight answers from a Brooklyn & Queens handyman. One simple rate: $${PRICING.hourlyRate}/hour, ${PRICING.minimumHours}-hour minimum ($${MIN}).`}
      />

      <section className="bg-white py-14 px-4 lg:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {COST_GUIDES.map((g) => {
            const Icon = g.serviceSlug ? SERVICE_ICON[g.serviceSlug] : null;
            const from = Math.min(...g.jobs.map((j) => jobPrice(j.hours[0])));
            return (
              <Link
                key={g.slug}
                href={`/cost-guides/${g.slug}`}
                className="card p-6 flex flex-col hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-600">
                    {Icon ? <Icon className="w-5 h-5" /> : <span className="font-bold">$</span>}
                  </span>
                  <h2 className="font-heading font-bold text-lg text-primary-800 group-hover:underline">
                    {g.title}
                  </h2>
                </div>
                <p className="text-sm text-text-muted leading-relaxed flex-1">{g.metaDescription}</p>
                <p className="mt-4 text-sm font-semibold text-accent-600">From {formatUsd(from)} →</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
