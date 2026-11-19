import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Contact — Free Handyman Estimate in Brooklyn & Queens',
  description:
    'Request a free estimate from Handlyr, a trusted handyman in Brooklyn and Queens, NYC. Describe your job, attach a photo, and get a reply within 20 minutes.',
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
    title: 'Contact Handlyr | Free Handyman Estimate in Brooklyn & Queens',
    description:
      'Get a free estimate from Handlyr. Tell us what you need done — we usually reply within 20 minutes. Serving Brooklyn & Queens.',
    type: 'website',
    url: 'https://handlyr.org/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Handlyr | Free Handyman Estimate in Brooklyn & Queens',
    description:
      'Get a free estimate from Handlyr. Tell us what you need done — we usually reply within 20 minutes.',
  },
  alternates: {
    canonical: 'https://handlyr.org/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        description="Tell us what you need. Free estimates, fast response."
      />

      <ContactForm />
    </>
  );
}
