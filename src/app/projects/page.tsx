import type { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';
import ContactForm from '@/components/sections/ContactForm';

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
      {/* Page hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/60">
            Our Work
          </p>
          <h1
            className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Recent Projects
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            {"A look at jobs we've completed across NYC and New Jersey."}
          </p>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  );
}
