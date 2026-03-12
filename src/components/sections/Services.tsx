'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

// SVG icons for each service
function PackageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function BlindsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M3 3h18" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M3 21h18" />
    </svg>
  );
}

function CabinetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="2" /><path d="M12 2v20" /><path d="M9 12h.01" /><path d="M15 12h.01" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  'furniture-assembly': <PackageIcon />,
  'tv-mounting': <MonitorIcon />,
  'shelf-installation': <LayersIcon />,
  'blinds-installation': <BlindsIcon />,
  'cabinet-installation': <CabinetIcon />,
  'drywall-repair': <WrenchIcon />,
  'general-repairs': <SettingsIcon />,
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
            From furniture assembly to drywall repair — quality work done right.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/contact?service=${service.slug}`}
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
                <ChevronRightIcon />
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
            className="inline-flex items-center px-8 py-3 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: '#2563EB' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1A4FD0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
