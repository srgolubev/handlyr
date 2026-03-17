import Link from 'next/link';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/lib/constants';
import { PhoneIcon, MapPinIcon, MailIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0B1F4A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-heading font-extrabold text-lg bg-white/10 text-white">
                H
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Handlyr
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/#services`}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link
                    href="/service-areas"
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2 text-sm font-medium text-white transition-colors duration-150 hover:text-accent-500"
                >
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                  New York City, NY
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <MailIcon className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              &copy; {new Date().getFullYear()} Handlyr. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs transition-colors duration-150 hover:text-white/70"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs transition-colors duration-150 hover:text-white/70"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
