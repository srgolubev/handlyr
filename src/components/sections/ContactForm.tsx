'use client';

import { BUSINESS, RATING } from '@/lib/constants';
import JobberForm from './JobberForm';
import { CheckCircleIcon, StarIcon } from '@/components/icons';

export default function ContactForm() {
  return (
    <section
      id="contact"
      data-surface="dark"
      className="py-16 px-4 lg:py-24 lg:px-6 scroll-mt-20 bg-primary-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: text */}
          <div className="text-white">
            <p className="eyebrow text-accent-500 mb-4">
              Get in Touch
            </p>
            <h2
              className="font-heading font-bold text-3xl lg:text-4xl text-white mb-4"
              style={{ letterSpacing: '-0.01em' }}
            >
              Get Your Free Quote Today
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-white/80">
              {`Tell us what you need done. We'll respond with a price — usually ${BUSINESS.responseTime}, no obligation.`}
            </p>

            <ul className="space-y-4 mb-10">
              {[
                `Fast response — usually ${BUSINESS.responseTime}`,
                'Free quotes by text — just send a photo',
                'Simple $59/hour pricing, 2-hour minimum',
                BUSINESS.guarantee,
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-white/90">
                  <span className="text-accent-500">
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
                <p className="text-sm font-medium text-white">Rated {RATING.value}/5 by NYC homeowners</p>
                <p className="text-xs text-white/70">{RATING.count} verified reviews · Available today</p>
              </div>
            </div>

            <a
              href={BUSINESS.smsHref}
              className="btn btn-lg btn-primary w-full text-lg font-bold"
            >
              Text Now — {BUSINESS.phone}
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
