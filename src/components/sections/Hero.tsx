'use client';

import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function DollarSignIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const trustBadges = [
  { icon: <ShieldCheckIcon />, label: '15+ Years Experience' },
  { icon: <ZapIcon />, label: 'Same-Day Available' },
  { icon: <SparklesIcon />, label: '500+ Jobs Done' },
  { icon: <DollarSignIcon />, label: 'Free Estimates' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 50%, #1138A3 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left column: content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 text-xs font-medium uppercase tracking-widest text-white border"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderColor: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.06em',
              }}
            >
              Serving NYC Since {BUSINESS.founded}
            </div>

            {/* H1 */}
            <h1
              className="font-heading font-extrabold text-5xl lg:text-6xl text-white leading-tight tracking-tight max-w-xl mx-auto lg:mx-0"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
            >
              Reliable Handyman in New York City
            </h1>

            {/* Subheadline */}
            <p
              className="mt-5 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.82)' }}
            >
              Furniture assembly, TV mounting, shelving and repairs — done cleanly and professionally.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 justify-center lg:justify-start">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white w-full sm:w-auto min-h-[56px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:ring-4 focus-visible:ring-orange-300"
                style={{ backgroundColor: '#F97316' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EA6C0A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F97316')}
              >
                <PhoneIcon />
                Call Now
              </a>
              <Link
                href="/contact?type=photo"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold w-full sm:w-auto min-h-[56px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-300"
                style={{ backgroundColor: '#FFFFFF', color: '#0D2860' }}
              >
                <CameraIcon />
                Send Photo for Estimate
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white w-full sm:w-auto min-h-[56px] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border-2 focus-visible:ring-4 focus-visible:ring-white/40"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,0.6)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <ClipboardIcon />
                Get a Quote
              </Link>
            </div>
            <p className="mt-2 text-xs font-medium text-center lg:text-left" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Available Today · Usually answers within minutes
            </p>

            {/* Social proof stars */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                100+ happy customers in NYC
              </span>
            </div>

            {/* Trust badges */}
            <div className="mt-4 grid grid-cols-2 gap-3 lg:flex lg:flex-row lg:gap-4 max-w-lg mx-auto lg:mx-0">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <span className="text-white flex-shrink-0">{badge.icon}</span>
                  <span className="text-xs font-medium text-white whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: visual */}
          <div className="hidden lg:flex lg:col-span-2 relative justify-center">
            {/* Placeholder hero image */}
            <div
              className="relative w-full max-w-sm rounded-3xl overflow-hidden"
              style={{
                height: '520px',
                background: 'linear-gradient(160deg, #1138A3 0%, #0D2860 100%)',
                boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Decorative content inside placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-24 h-24 mx-auto mb-3">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <p className="text-sm">Handyman at Work</p>
                </div>
              </div>

              {/* Floating card 1: Quick response */}
              <div
                className="absolute bottom-6 -left-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3"
                style={{ minWidth: '190px' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FFEDD5', color: '#F97316' }}
                >
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-dark">Quick response</p>
                  <p className="text-xs text-text-muted">Usually within the hour</p>
                </div>
              </div>

              {/* Floating card 2: Happy customers */}
              <div
                className="absolute top-6 -right-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-2"
                style={{ minWidth: '160px' }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div>
                  <p className="text-xs font-bold text-text-dark">500+ Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
