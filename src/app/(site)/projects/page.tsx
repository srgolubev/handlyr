import type { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';
import ContactForm from '@/components/sections/ContactForm';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Recent Projects — NYC Handyman Work | Handlyr',
  description:
    'See recent handyman projects by Handlyr across NYC and NJ — TV mounting, furniture assembly, floating shelves, drywall repair, cabinet installs & more.',
  keywords: [
    'handyman projects NYC',
    'TV mounting examples',
    'furniture assembly NYC',
    'drywall repair before after',
    'shelf installation NYC',
    'handyman portfolio Brooklyn',
    'handyman near me',
  ],
  openGraph: {
    title: 'Recent Handyman Projects | Handlyr NYC',
    description:
      'Browse completed handyman jobs across NYC and NJ: TV mounting, furniture assembly, floating shelves, drywall repair, and more.',
    type: 'website',
    url: 'https://handlyr.org/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recent Handyman Projects | Handlyr NYC',
    description:
      'Browse completed handyman jobs across NYC and NJ: TV mounting, furniture assembly, floating shelves, drywall repair, and more.',
  },
  alternates: {
    canonical: 'https://handlyr.org/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Recent Projects"
        description={"A look at jobs we've completed across NYC and New Jersey."}
      />

      <Gallery />
      <ContactForm />
    </>
  );
}
