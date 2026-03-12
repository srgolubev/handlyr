import { SERVICE_AREAS, BUSINESS } from '@/lib/constants';

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] flex-shrink-0" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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
                    <MapPinIcon />
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

          {/* Right column: Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
            style={{
              height: '400px',
              background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)',
            }}
            aria-label="Map showing service areas in the Greater NYC area"
          >
            <div className="text-center p-8">
              <div style={{ color: 'rgba(255,255,255,0.3)' }}>
                <MapPinIcon />
              </div>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                  aria-hidden="true"
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </svg>
                <p className="text-white font-semibold text-lg">Greater NYC Area</p>
                <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Brooklyn • Manhattan • Jersey City
                  <br />
                  Hoboken • Weehawken
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
