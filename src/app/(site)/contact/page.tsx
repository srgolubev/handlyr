import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

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
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        description="Tell us what you need. Free estimates, fast response."
      />

      <ContactForm />
    </>
  );
}
