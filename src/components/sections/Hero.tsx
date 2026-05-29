'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS, RATING, PRICING } from '@/lib/constants';
import { CameraIcon, ClipboardIcon, StarIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section
      id="hero"
      data-surface="dark"
      className="relative flex items-center min-h-[85svh] lg:min-h-svh"
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
              Serving Since {BUSINESS.founded}
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
              Furniture assembly, TV mounting, shelving and repairs in NYC — done cleanly and professionally.
            </p>

            {/* CTA buttons — one primary (text a photo) + one secondary (form) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 justify-center lg:justify-start">
              <a
                href={BUSINESS.smsHref}
                className="btn btn-lg btn-primary w-full sm:w-auto font-bold"
              >
                <CameraIcon className="w-5 h-5" />
                Text a Photo for a Quote
              </a>
              <Link
                href="/contact"
                className="btn btn-lg btn-outline-light w-full sm:w-auto"
              >
                <ClipboardIcon className="w-5 h-5" />
                Get a Quote
              </Link>
            </div>
            <p className="mt-3 text-xs font-medium text-center lg:text-left text-white/70">
              ${PRICING.hourlyRate}/hr · {PRICING.minimumHours}-hr minimum · Replies {BUSINESS.responseTime} · Available today
            </p>

            {/* Social proof stars */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-400" />)}
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Rated {RATING.value}/5 — {RATING.count} verified reviews
              </span>
            </div>

          </div>

          {/* Right column: visual */}
          <div className="hidden lg:flex lg:col-span-2 relative justify-center">
            <div
              className="relative w-full max-w-sm rounded-3xl overflow-hidden"
              style={{
                height: '520px',
                boxShadow: '0 8px 32px rgba(37,99,235,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Image
                src="/hero.jpg"
                alt="Professional handyman in NYC apartment"
                fill
                sizes="(max-width: 1024px) 0vw, 400px"
                className="object-cover"
                priority
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
