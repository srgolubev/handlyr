'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import {
  PackageIcon,
  MonitorIcon,
  LayersIcon,
  BlindsIcon,
  CabinetIcon,
  WrenchIcon,
  SettingsIcon,
  ChevronRightIcon,
} from '@/components/icons';

const serviceIcons: Record<string, React.ReactNode> = {
  'furniture-assembly': <PackageIcon className="w-6 h-6" />,
  'tv-mounting': <MonitorIcon className="w-6 h-6" />,
  'shelf-installation': <LayersIcon className="w-6 h-6" />,
  'blinds-installation': <BlindsIcon className="w-6 h-6" />,
  'cabinet-installation': <CabinetIcon className="w-6 h-6" />,
  'drywall-repair': <WrenchIcon className="w-6 h-6" />,
  'general-repairs': <SettingsIcon className="w-6 h-6" />,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-4 lg:py-24 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#F97316', letterSpacing: '0.1em' }}>
            What We Do
          </p>
          <h2
            className="font-heading font-bold text-3xl lg:text-4xl text-text-dark"
            style={{ letterSpacing: '-0.01em' }}
          >
            Professional Handyman Services
          </h2>
          <p className="mt-3 text-lg text-text-muted">
            From furniture assembly to drywall repair in NYC and surrounding boroughs — quality work done right.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col p-6 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:border-primary-200 focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#DBEAFE', color: '#1A4FD0' }}
              >
                {serviceIcons[service.id]}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-heading font-bold text-text-dark">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
                {service.description}
              </p>

              {/* CTA link */}
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors duration-150">
                Learn more
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            {"Don't see your job? Just ask."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: '#2563EB' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
