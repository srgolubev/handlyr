import { SERVICE_AREAS, BUSINESS } from '@/lib/constants';
import { MapPinIcon } from '@/components/icons';

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

          {/* Right column: Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '420px' }}>
            <iframe
              title="Handlyr service areas map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.0811!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
