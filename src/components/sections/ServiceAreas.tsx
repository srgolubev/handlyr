'use client';

import dynamic from 'next/dynamic';
import { SERVICE_AREAS, BUSINESS } from '@/lib/constants';
import { MapPinIcon } from '@/components/icons';

// Dynamic import with SSR disabled — Leaflet requires the browser DOM
const ServiceAreasMap = dynamic(
  () => import('@/components/sections/ServiceAreasMap'),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full rounded-2xl bg-neutral-100 animate-pulse"
        style={{ height: '420px' }}
        aria-label="Loading map…"
      />
    ),
  }
);

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white py-16 px-4 lg:py-20 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: text + area list */}
          <div>
            {/* Section header */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#F97316', letterSpacing: '0.1em' }}
            >
              Where We Work
            </p>
            <h2
              className="font-heading font-bold text-3xl lg:text-4xl text-text-dark mb-3"
              style={{ letterSpacing: '-0.01em' }}
            >
              Service Areas
            </h2>
            <p className="text-lg text-text-muted mb-8">
              We serve homeowners, renters, and landlords across the NYC metro area.
            </p>

            {/* Area cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="flex items-start gap-3 py-3 px-4 rounded-xl border border-neutral-200"
                  style={{ backgroundColor: '#F9FAFB' }}
                >
                  <span style={{ color: '#F97316', marginTop: '2px' }}>
                    <MapPinIcon className="w-[18px] h-[18px] flex-shrink-0" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-text-dark">
                      {area.name}, {area.state}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-muted">
              Not seeing your neighborhood?{' '}
              <a
                href={BUSINESS.phoneHref}
                className="font-medium text-primary-600 hover:text-primary-700 transition-colors duration-150"
              >
                Call us
              </a>
              {' '}— we may still be able to help.
            </p>
          </div>

          {/* Right column: interactive Leaflet service-areas map */}
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '420px' }}>
            <ServiceAreasMap />
          </div>
        </div>
      </div>
    </section>
  );
}
