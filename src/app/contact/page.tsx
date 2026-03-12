import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Get a Free Handyman Estimate in NYC',
  description:
    'Request a free estimate from Handlyr, NYC\'s trusted handyman. Describe your job, attach a photo, and get a response within the hour. Serving Brooklyn, Manhattan, Jersey City & more.',
  keywords: [
    'contact handyman NYC',
    'free handyman estimate NYC',
    'book handyman Brooklyn',
    'handyman near me',
    'handyman quote NYC',
    'furniture assembly estimate NYC',
    'TV mounting quote NYC',
  ],
  openGraph: {
    title: 'Contact Handlyr | Free Handyman Estimate NYC',
    description:
      'Get a free estimate from Handlyr. Tell us what you need done — we respond within the hour. Serving Brooklyn, Manhattan, Jersey City, Hoboken & Weehawken.',
    type: 'website',
    url: 'https://handlyr.org/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Handlyr | Free Handyman Estimate NYC',
    description:
      'Get a free estimate from Handlyr. Tell us what you need done — we respond within the hour.',
  },
  alternates: {
    canonical: 'https://handlyr.org/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/60">
            Get in Touch
          </p>
          <h1
            className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Tell us what you need. Free estimates, fast response.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
