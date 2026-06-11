import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ConversionTracker from '@/components/ConversionTracker';
import { CheckCircleIcon } from '@/components/icons';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Thank You — Request Received',
  description:
    'Thanks for reaching out to Handlyr. We received your request and will get back to you shortly.',
  // Conversion confirmation page — keep it out of search results.
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://handlyr.org/thank-you' },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Fires the Google Ads lead-form conversion exactly once on load. */}
      <ConversionTracker />

      <PageHero
        label="Request Received"
        title="Thank You!"
        description={`We've got your request and will text you back ${BUSINESS.responseTime}.`}
      />

      <section className="bg-white py-16 px-4 lg:py-24">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-6">
            <CheckCircleIcon className="w-8 h-8" />
          </span>

          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-dark mb-4">
            Your request is in good hands
          </h2>

          <div className="space-y-3 text-text-muted leading-relaxed mb-10">
            <p>
              Thanks for reaching out. We&rsquo;ll review what you need and reply with a
              clear, no-obligation quote — usually {BUSINESS.responseTime}.
            </p>
            <p>
              Need us sooner, or want to add a photo of the job? Text us directly and
              we&rsquo;ll get right back to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BUSINESS.smsHref} className="btn btn-lg btn-primary">
              Text Us — {BUSINESS.phone}
            </a>
            <Link href="/" className="btn btn-lg btn-outline-dark">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
