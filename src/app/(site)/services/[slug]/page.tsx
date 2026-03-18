import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { BUSINESS, SERVICE_AREAS, REVIEWS } from '@/lib/constants';

// ─── Service data ─────────────────────────────────────────────────────────────

interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  body: string[];
  whatToExpect: string[];
  reviewIds: number[];
  seoDescription: string;
  keywords: string[];
}

const SERVICES_DETAIL: Record<string, ServiceData> = {
  'furniture-assembly': {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    icon: '📦',
    tagline: 'IKEA, Wayfair, and all flat-pack furniture assembled quickly and correctly.',
    body: [
      'Flat-pack furniture looks simple in the box — but the reality is hours of sorting hardware, decoding confusing instructions, and hoping you did not miss a step. We have assembled thousands of pieces across NYC: IKEA, Wayfair, West Elm, Amazon, CB2, and every other brand you can think of.',
      'Our approach is methodical and thorough. We lay out all parts, verify the count before starting, follow the manufacturer sequence, and double-check every connection before calling it done. The result is furniture that is solid, level, and built to last — not something that wobbles after a week.',
      'We handle single items or full rooms. Moving into a new apartment in Brooklyn or Jersey City and need everything assembled in one go? Just send us the list and we will take care of it all in a single visit.',
    ],
    whatToExpect: [
      'Hardware sorted and verified before assembly begins',
      'Manufacturer instructions followed precisely',
      'All connections checked for stability',
      'Packaging debris removed and bagged',
      'Furniture positioned where you want it',
    ],
    reviewIds: [3, 2],
    seoDescription:
      'Professional furniture assembly in NYC. IKEA, Wayfair, West Elm & all brands. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken. Fast, correct, no hassle.',
    keywords: [
      'furniture assembly NYC',
      'IKEA assembly NYC',
      'furniture assembly Brooklyn',
      'furniture assembly Manhattan',
      'Wayfair assembly NYC',
      'flat-pack furniture assembly',
      'handyman furniture assembly near me',
    ],
  },
  'tv-mounting': {
    slug: 'tv-mounting',
    name: 'TV Mounting',
    icon: '📺',
    tagline: 'Wall-mounted TVs with hidden cables. All wall types including concrete and drywall.',
    body: [
      'A properly mounted TV transforms a living room — and a badly mounted one is a hazard waiting to happen. We mount TVs of all sizes on every wall type: drywall with studs, concrete, brick, tile, and even plaster in pre-war buildings. We bring the right anchors and the right tools for the job.',
      'Cable management is included. We do not leave a tangle of wires hanging down the wall. Depending on your setup, we can run cables through the wall, behind crown molding, or use a clean surface raceway that blends with your decor. The result looks like it was designed that way.',
      'We also handle full home theater setups — multiple TVs, soundbar mounting, and component shelving. Whether it is a 40-inch bedroom TV or a 85-inch living room centerpiece, we get it done cleanly and safely.',
    ],
    whatToExpect: [
      'Wall type assessed to determine correct mounting method',
      'Stud finder or masonry anchors used as required',
      'Level verified before and after mounting',
      'Cable management included with every mount',
      'TV tested and positioned at your preferred height',
    ],
    reviewIds: [1, 2],
    seoDescription:
      'Professional TV mounting in NYC. All wall types: drywall, concrete, brick. Hidden cable management included. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'TV mounting NYC',
      'TV mounting Brooklyn',
      'TV mounting Manhattan',
      'TV mount concrete wall NYC',
      'TV installation NYC',
      'cable management NYC',
      'handyman TV mounting near me',
    ],
  },
  'shelf-installation': {
    slug: 'shelf-installation',
    name: 'Shelf Installation',
    icon: '🗂️',
    tagline: 'Custom shelving, floating shelves, and built-in shelf systems — level and secure.',
    body: [
      'Shelves sound straightforward, but a shelf that is not level, not anchored properly, or not aligned with the architecture of the room stands out immediately. We install floating shelves, bracket shelves, wall-mounted book cases, and modular systems like IKEA KALLAX and Billy — all level, all secure, all positioned where you want them.',
      'We work with your wall type. In concrete buildings across Manhattan and the New Jersey waterfront, we use appropriate masonry anchors rated for the load. In drywall, we locate studs or use toggle anchors for heavy loads. No shelf we install will pull out of the wall.',
      'Beyond basic shelving, we also handle more complex built-in style installations: garage shelving, laundry room organization systems, and closet shelf builds. If you want it on a wall and holding weight, we can make it happen.',
    ],
    whatToExpect: [
      'Wall type identified, correct anchors selected',
      'Height and spacing confirmed with you before drilling',
      'Bubble level verified on every shelf',
      'Load-tested before sign-off',
      'Dust and debris cleaned up',
    ],
    reviewIds: [2, 6],
    seoDescription:
      'Professional shelf installation in NYC. Floating shelves, bracket shelves, IKEA systems. All wall types. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'shelf installation NYC',
      'floating shelf installation Brooklyn',
      'shelf installation Manhattan',
      'IKEA shelf installation NYC',
      'wall shelves NYC',
      'bookshelf installation NYC',
      'handyman shelf installation near me',
    ],
  },
  'blinds-installation': {
    slug: 'blinds-installation',
    name: 'Blinds Installation',
    icon: '🪟',
    tagline: 'Window blinds, shades, and curtain rods installed perfectly in any window.',
    body: [
      'New blinds or shades are one of the fastest ways to improve a room — but getting them to look right requires precise measurement, clean drilling, and hardware that is actually level. We install all types of window treatments: roller shades, cellular shades, venetian blinds, roman shades, and curtain rods and tracks.',
      'We handle both inside-mount and outside-mount installations, in every material and every window type. Awkward windows, tilted frames, concrete surrounds — we have seen it all and know how to handle it. Every installation is level, tight, and operates smoothly.',
      'For renters, we are especially careful to install without unnecessary damage and to use hardware that can be removed cleanly if needed. For homeowners, we can make permanent, clean installs that look built-in from day one.',
    ],
    whatToExpect: [
      'Window dimensions verified before mounting',
      'Inside-mount or outside-mount confirmed with you',
      'All brackets leveled and secured',
      'Operation tested — smooth raise, lower, and tilt',
      'Packaging removed from your space',
    ],
    reviewIds: [1, 4],
    seoDescription:
      'Professional blinds and shade installation in NYC. Roller shades, venetian blinds, curtain rods — all window types. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'blinds installation NYC',
      'window shade installation Brooklyn',
      'curtain rod installation NYC',
      'blinds installation Manhattan',
      'roller shade installation NYC',
      'window treatment installation NYC',
      'handyman blinds near me',
    ],
  },
  'cabinet-installation': {
    slug: 'cabinet-installation',
    name: 'Cabinet Installation',
    icon: '🗄️',
    tagline: 'Kitchen and bathroom cabinets, medicine cabinets, and storage solutions.',
    body: [
      'Cabinets are one of the more demanding installations in any home — they need to be level, plumb, and securely anchored into the wall structure, not just drywall. Whether you have a new kitchen cabinet set, a bathroom vanity cabinet, or a medicine cabinet to replace, we handle the full installation from start to finish.',
      'We work with pre-assembled and flat-pack cabinet types. We find the studs or use masonry anchors in concrete, shim where needed for out-of-plumb walls, and make sure every door and drawer operates correctly after installation. We can also handle minor adjustments to existing cabinets — hinges, drawer slides, and door alignment.',
      'Storage in NYC apartments is precious. We also install freestanding storage cabinets, laundry room cabinetry, and closet organizer systems — any solution that helps you make the most of your space.',
    ],
    whatToExpect: [
      'Wall structure located for secure anchor points',
      'Cabinets shimmed level and plumb',
      'Doors and drawers adjusted for smooth operation',
      'Hardware installed and tightened fully',
      'Site left clean after installation',
    ],
    reviewIds: [3, 6],
    seoDescription:
      'Professional cabinet installation in NYC. Kitchen, bathroom, medicine cabinets & storage. All wall types. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'cabinet installation NYC',
      'kitchen cabinet installation Brooklyn',
      'bathroom cabinet installation NYC',
      'medicine cabinet installation NYC',
      'cabinet installation Manhattan',
      'storage cabinet installation NYC',
      'handyman cabinet installation near me',
    ],
  },
  'drywall-repair': {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    icon: '🔧',
    tagline: 'Holes, cracks, and water damage repaired cleanly — smooth finish, ready to paint.',
    body: [
      'Whether it is a doorknob hole, a patch left from old TV mounting hardware, water damage from a leak above, or a large section of damaged board — we repair drywall to a smooth, paint-ready finish. We carry the materials, tools, and experience to handle repairs from pinhole size up to full section replacement.',
      'The quality of a drywall repair shows in the texture and the paint. We take the time to feather compound properly and match the existing texture as closely as possible, whether that is smooth, orange peel, or knockdown. When we are done, the repair is nearly invisible — even in direct light.',
      'Moving out and need walls patched before your lease inspection? We can do a full apartment walk-through, patch every hole, and leave the walls looking clean. It is one of the most common calls we get from renters in Brooklyn and Manhattan.',
    ],
    whatToExpect: [
      'Damage assessed — correct repair method selected',
      'Mesh or backing installed for larger holes',
      'Multiple compound coats applied and sanded',
      'Texture matched to surrounding wall',
      'Ready for primer and paint when we leave',
    ],
    reviewIds: [1, 5],
    seoDescription:
      'Professional drywall repair in NYC. Holes, cracks, water damage — smooth finish, ready to paint. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'drywall repair NYC',
      'drywall patch Brooklyn',
      'drywall repair Manhattan',
      'wall repair NYC',
      'hole in wall repair NYC',
      'drywall repair near me',
      'wall patching NYC',
    ],
  },
  'general-repairs': {
    slug: 'general-repairs',
    name: 'General Handyman Repairs',
    icon: '⚙️',
    tagline: 'Doors, hinges, leaky faucets, squeaky floors — anything that needs fixing.',
    body: [
      'Not everything needs a specialist. Most of the small repairs that build up around an apartment — a door that does not close right, a squeaky floorboard, a towel bar that pulled out of the wall, a faucet that drips — can be handled in one visit by a skilled handyman with the right tools and experience.',
      'We handle general repairs across all categories: door and window hardware, minor plumbing (fixture replacement, shutoff valves, supply lines), light fixture swaps, outlet cover replacement, furniture hardware, picture hanging, mirror mounting, and a long list of other items that just need to get done.',
      'Most customers end up giving us a list. That is exactly how we like it. One visit, multiple items knocked out, and your home working the way it should. No job is too small and no list is too long.',
    ],
    whatToExpect: [
      'Full list reviewed before we start',
      'Parts sourced or you provide — your choice',
      'Each item tested and confirmed working',
      'Clean workspace maintained throughout',
      'Honest advice if something needs a specialist instead',
    ],
    reviewIds: [1, 4, 6],
    seoDescription:
      'General handyman repairs in NYC. Doors, faucets, hinges, floors, fixtures and more — all in one visit. Serving Brooklyn, Manhattan, Jersey City, Hoboken, Weehawken.',
    keywords: [
      'general handyman NYC',
      'handyman repairs Brooklyn',
      'handyman repairs Manhattan',
      'home repairs NYC',
      'handyman near me NYC',
      'apartment repairs NYC',
      'handyman services near me',
    ],
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(SERVICES_DETAIL).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAIL[slug];
  if (!service) return {};

  const title = `${service.name} NYC | Brooklyn, Manhattan & NJ | Handlyr`;
  const canonical = `https://handlyr.org/services/${service.slug}`;

  return {
    title,
    description: service.seoDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} in NYC | Handlyr`,
      description: service.seoDescription,
      type: 'website',
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in NYC | Handlyr`,
      description: service.seoDescription,
    },
    alternates: {
      canonical,
    },
  };
}

// ─── Star helper ──────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DETAIL[slug];
  if (!service) notFound();

  const serviceReviews = REVIEWS.filter((r) => service.reviewIds.includes(r.id));

  // LocalBusiness + Service JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.seoDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      url: 'https://handlyr.org',
      areaServed: SERVICE_AREAS.map((a) => ({
        '@type': 'City',
        name: `${a.name}, ${a.state}`,
      })),
    },
    areaServed: SERVICE_AREAS.map((a) => ({
      '@type': 'City',
      name: `${a.name}, ${a.state}`,
    })),
    url: `https://handlyr.org/services/${service.slug}`,
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <PageHero
        label="Our Services"
        title={service.name}
        description={service.tagline}
      />

      {/* CTA bar */}
      <section className="bg-white py-6 px-4 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: '#F97316' }}
          >
            <span aria-hidden="true">💬</span> Text for a Free Quote
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base border-2 transition-colors duration-200"
            style={{ borderColor: '#0D2860', color: '#0D2860' }}
          >
            <span aria-hidden="true">📞</span> Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Service detail */}
      <section className="bg-white py-16 px-4 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl" aria-hidden="true">{service.icon}</span>
            <h2
              className="font-heading font-bold text-3xl"
              style={{ color: '#0D2860' }}
            >
              {service.name} in NYC
            </h2>
          </div>
          <div className="space-y-5">
            {service.body.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* What to expect */}
          <div
            className="mt-10 p-6 rounded-2xl border border-neutral-200"
            style={{ backgroundColor: '#F9FAFB' }}
          >
            <h3
              className="font-heading font-bold text-xl mb-4"
              style={{ color: '#0D2860' }}
            >
              What to Expect
            </h3>
            <ul className="space-y-2">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: '#0D2860' }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-4 lg:py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-heading font-bold text-3xl mb-2"
            style={{ color: '#0D2860' }}
          >
            Available Across the NYC Metro Area
          </h2>
          <p className="text-text-muted mb-8">
            We provide {service.name.toLowerCase()} in all five service areas. Same quality, same pricing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.name}
                href={`/service-areas/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-shadow duration-200 group"
              >
                <span className="text-xl mt-0.5" aria-hidden="true">📍</span>
                <div>
                  <p
                    className="font-semibold text-sm group-hover:underline"
                    style={{ color: '#0D2860' }}
                  >
                    {area.name}, {area.state}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {serviceReviews.length > 0 && (
        <section className="bg-white py-16 px-4 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-heading font-bold text-3xl mb-8 text-center"
              style={{ color: '#0D2860' }}
            >
              What Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceReviews.slice(0, 2).map((review) => (
                <figure
                  key={review.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
                >
                  <div className="mb-3">
                    <Stars count={review.stars} />
                  </div>
                  <blockquote className="text-text-muted leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: '#0D2860' }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-text-dark text-sm">{review.name}</p>
                      <p className="text-xs text-text-muted">{review.location}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-white mb-3">
            Need {service.name} in NYC?
          </h2>
          <p className="text-white/80 mb-8 text-base">
            Text or call for a fast, no-pressure estimate. We respond quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${BUSINESS.smsHref}${encodeURIComponent(service.name)}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: '#F97316' }}
            >
              💬 Text for a Free Estimate
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white text-base border-2 border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white py-4 px-4 border-t border-neutral-100"
      >
        <div className="max-w-6xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-text-dark transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-text-dark transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-dark font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>
    </>
  );
}
