import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy — Handlyr',
  description: 'Privacy policy for Handlyr handyman services in New York City.',
  alternates: {
    canonical: 'https://handlyr.org/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we collect and use your information."
      />

      <section className="bg-white py-16 px-4 lg:py-24">
        <div className="max-w-3xl mx-auto prose prose-lg text-text-muted">
          <p className="text-sm text-text-muted mb-8">Last updated: March 18, 2026</p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you submit a contact form or request a quote on Handlyr.org, we collect the information
            you provide — such as your name, phone number, email address, and details about the job you need done.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your information solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your service request or estimate inquiry</li>
            <li>Contact you to schedule or follow up on a job</li>
            <li>Improve our service quality</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">3. Photos</h2>
          <p>
            If you submit photos of your space or the job to be done, these are used only to provide
            you with an accurate estimate. Photos are not shared publicly or with third parties.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">4. Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our website. This data is anonymous
            and does not identify individual users. You can opt out using Google&apos;s browser add-on.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">5. Data Retention</h2>
          <p>
            We retain your contact information only as long as necessary to complete your service request
            or as required by applicable law.
          </p>

          <h2 className="font-heading font-bold text-2xl text-text-dark mt-8 mb-4">6. Contact</h2>
          <p>
            If you have questions about this policy or want to request deletion of your data, contact us at:{' '}
            <a href="mailto:order@handlyr.org" className="text-primary-700 underline">
              order@handlyr.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
