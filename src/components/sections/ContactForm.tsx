'use client';

import { BUSINESS } from '@/lib/constants';
import JobberForm from './JobberForm';
import { PhoneIcon, CheckCircleIcon, StarIcon } from '@/components/icons';

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
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
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
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-medium text-white">Trusted by 100+ homeowners</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>500+ jobs completed · Available today</p>
              </div>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#F97316' }}
            >
              <PhoneIcon className="w-5 h-5" />
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
