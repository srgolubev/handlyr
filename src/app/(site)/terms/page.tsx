import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service — Handlyr',
  description: 'Terms of service for Handlyr handyman services in New York City.',
  alternates: {
    canonical: 'https://handlyr.org/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        description="Please read these terms before using our services."
      />

      <section className="bg-white py-16 px-4 lg:py-24">
        <div className="max-w-3xl mx-auto prose prose-lg text-text-muted">
          <p className="text-sm text-text-muted mb-8">Last updated: March 18, 2026</p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">1. Services</h2>
          <p>
            Handlyr provides professional handyman services in New York City and surrounding areas including
            Brooklyn, Manhattan, Jersey City, Hoboken, and Weehawken. All services are subject to availability
            and a confirmed appointment.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">2. Estimates</h2>
          <p>
            Estimates provided via our website or phone are free and non-binding. Final pricing may vary
            based on the actual scope of work discovered on-site. Any changes to the estimate will be
            communicated to you before work begins.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">3. Scheduling & Cancellation</h2>
          <p>
            We ask for at least 24 hours notice if you need to cancel or reschedule an appointment.
            Last-minute cancellations may result in a cancellation fee at our discretion.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">4. Payment</h2>
          <p>
            Payment is due upon completion of the job unless otherwise agreed in writing. We accept cash,
            Zelle, Venmo, and major credit cards.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">5. Warranty</h2>
          <p>
            We stand behind our work. If you are not satisfied with the result, contact us within 7 days
            and we will return to address the issue at no additional charge.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            Handlyr is not liable for pre-existing damage, structural issues not visible at the time of service,
            or damages resulting from conditions outside our control. Our liability is limited to the amount
            paid for the specific service in question.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">7. Contact</h2>
          <p>
            Questions about these terms? Contact us at:{' '}
            <a href="mailto:order@handlyr.org" className="text-primary-700 underline">
              order@handlyr.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
