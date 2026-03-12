'use client';

import { BUSINESS } from '@/lib/constants';
import JobberForm from './JobberForm';

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="py-16 px-4 lg:py-24 lg:px-6"
      style={{ backgroundColor: '#0B1F4A' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: text */}
          <div className="text-white">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#F97316', letterSpacing: '0.1em' }}
            >
              Get in Touch
            </p>
            <h2
              className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Get Your Free Estimate Today
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {"Tell us what you need done. We'll respond with a price — usually within the hour, no obligation."}
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Fast response — usually within the hour',
                'Free estimates on all jobs',
                'No obligation — just ask',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ color: '#F97316' }}>
                    <CheckCircleIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="flex flex-col">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium text-white">Trusted by 100+ NYC homeowners</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>500+ jobs completed · Available today</p>
              </div>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: '#F97316' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#EA6C0A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F97316')}
            >
              <PhoneIcon />
              Call Now — {BUSINESS.phone}
            </a>
          </div>

          {/* Right column: Jobber form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
            <JobberForm />
          </div>
        </div>
      </div>
    </section>
  );
}
