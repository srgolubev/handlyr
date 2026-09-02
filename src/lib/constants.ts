export const BUSINESS = {
  name: 'Handlyr',
  phone: '(347) 799-8402',
  phoneHref: 'tel:+13477998402',
  smsHref: 'sms:+13477998402?body=Hi%20Serge!%20I%20need%20help%20with%20',
  location: 'New York City',
  experience: '15+',
  founded: '2009',
  email: 'order@handlyr.org',
  tagline: 'Professional handyman services across New York City.',
  responseTime: 'within 20 minutes',
  guarantee: '30-Day Workmanship Guarantee',
};

// Single source of truth for verified reputation (Thumbtack + Google).
// Thumbtack surfaces 45 unique reviews, including 11 imported from Google.
// 45 reviews: 44 × 5 stars + 1 × 2 stars = 222 / 45 = 4.9 average.
export const RATING = {
  value: '4.9',
  count: 45,
  best: '5',
  worst: '1',
} as const;

// Uniform pricing model (not per-service).
export const PRICING = {
  hourlyRate: 69,
  minimumHours: 2,
  estimateFee: 69,
  currency: 'USD',
  // Plain-language summaries reused across UI, FAQ, schema and llms.txt.
  rateSummary:
    '$69/hour with a 2-hour minimum. If the job takes less time, we use the rest to take care of other small tasks around your home.',
  estimateSummary:
    'Get a free quote by text — just send a photo. An on-site visit to assess the work is $69, and it is credited toward the cost of the job if you decide to go ahead.',
} as const;

// Shared FAQ (pricing, scheduling, coverage) appended to every service page.
export const SHARED_FAQS = [
  {
    q: 'How much does it cost?',
    a: 'Our rate is $69/hour with a 2-hour minimum (so a minimum of $138). If the job finishes early, we use the remaining time for other small tasks around your home.',
  },
  {
    q: 'Do you charge for estimates?',
    a: 'You can text a photo for a free quote. If you need an on-site visit to assess the work, it is $69 — and that $69 is credited toward the cost of the job if you decide to proceed.',
  },
  {
    q: 'How fast can you come?',
    a: 'We usually reply within 20 minutes, and same-day appointments are often available. We work 7 days a week, 8:00 AM to 8:00 PM.',
  },
  {
    q: 'Do you guarantee your work?',
    a: 'Yes — every job is backed by a 30-day workmanship guarantee. If something we did is not right, we come back and make it right at no extra charge.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Brooklyn, Queens, and Manhasset, NY, and the surrounding neighborhoods.',
  },
] as const;


export const SERVICES = [
  {
    id: 'furniture-assembly',
    name: 'Furniture Assembly',
    description:
      'IKEA, Wayfair, and all flat-pack furniture assembled quickly and correctly.',
    icon: 'package',
    slug: 'furniture-assembly',
  },
  {
    id: 'tv-mounting',
    name: 'TV Mounting',
    description:
      'Wall-mounted TVs with hidden cables. All wall types including concrete and drywall.',
    icon: 'monitor',
    slug: 'tv-mounting',
  },
  {
    id: 'shelf-installation',
    name: 'Shelf Installation',
    description:
      'Custom shelving, floating shelves, and built-in shelf systems — level and secure.',
    icon: 'layers',
    slug: 'shelf-installation',
  },
  {
    id: 'blinds-installation',
    name: 'Blinds Installation',
    description:
      'Window blinds, shades, and curtain rods installed perfectly in any window.',
    icon: 'blinds',
    slug: 'blinds-installation',
  },
  {
    id: 'cabinet-installation',
    name: 'Cabinet Installation',
    description:
      'Kitchen and bathroom cabinets, medicine cabinets, and storage solutions.',
    icon: 'cabinet',
    slug: 'cabinet-installation',
  },
  {
    id: 'drywall-repair',
    name: 'Drywall Repair',
    description:
      'Holes, cracks, and water damage repaired cleanly — smooth finish, ready to paint.',
    icon: 'wrench',
    slug: 'drywall-repair',
  },
  {
    id: 'general-repairs',
    name: 'General Handyman Repairs',
    description:
      'Doors, hinges, leaky faucets, squeaky floors — anything that needs fixing.',
    icon: 'tool',
    slug: 'general-repairs',
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const SERVICE_AREAS = [
  {
    name: 'Brooklyn',
    slug: 'brooklyn',
    state: 'NY',
    description: 'Serving all Brooklyn neighborhoods from Bay Ridge to Williamsburg.',
  },
  {
    name: 'Queens',
    slug: 'queens',
    state: 'NY',
    description: 'From Long Island City and Astoria out to Flushing and Jamaica.',
  },
  {
    name: 'Manhasset',
    slug: 'manhasset',
    state: 'NY',
    description: 'Serving Manhasset and the surrounding North Shore of Nassau County.',
  },
] as const;

export const REVIEWS = [
  {
    id: 10,
    stars: 5,
    text: 'Serge patched two holes left in the concrete foundation of my house from a prior AC installation. He showed up on time, was professional and quickly did the work. Cleaned up after himself and told me to let him know how the cement dried. Otherwise he\'d return to resolve any issues. I definitely would recommend him and plan to use him in the future.',
    name: 'Roger H.',
    service: 'Handyman',
    initials: 'RH',
  },
  {
    id: 11,
    stars: 5,
    text: 'Serge is the absolute best! He was so attentive while showing professionalism and efficiency. Serge will now be my go to person when it comes to fixing/ maintaining things around the house!',
    name: 'Stephanie S.',
    service: 'TV Mounting',
    initials: 'SS',
  },
  {
    id: 12,
    stars: 5,
    text: 'Highly recommend! We had 2 double cabinets needing install — Serge picked up the parts needed (included in final cost), came and took his time to properly install these. He provided quality work, was professional, and kind!',
    name: 'Anna h.',
    service: 'Cabinet Installation',
    initials: 'AH',
  },
  {
    id: 13,
    stars: 5,
    text: 'Serge did an excellent job. Took his time and did quality work. I\'ll have another project soon.',
    name: 'Stan B.',
    service: 'Handyman',
    initials: 'SB',
  },
  {
    id: 14,
    stars: 5,
    text: 'He came and did a good job drilling holes, installing lights etc.',
    name: 'Pat R.',
    service: 'Handyman',
    initials: 'PR',
  },
  {
    id: 15,
    stars: 5,
    text: 'Great. Efficient. Kind. Great experience! He came promptly, put my Curtains up and did a clean, professional job. Friendly, efficient, and reasonably priced. I would definitely recommend him and use his services again.',
    name: 'Mia C.',
    service: 'Window Treatment',
    initials: 'MC',
  },
  {
    id: 16,
    stars: 5,
    text: 'He quickly understood what I needed done and did it in a very professional and efficient manner. I would hire him again.',
    name: 'Celeste M.',
    service: 'Handyman',
    initials: 'CM',
  },
  {
    id: 17,
    stars: 5,
    text: 'Serge was extremely knowledgeable, friendly, and professional. He does every job as he would do in his own home and offers great advice. We wanted a six panel antique mirror put up and he completed the task with ease. He also kept everything very clean. We trust him completely and will be contacting him for any further work around the house.',
    name: 'Naomi Z.',
    service: 'Handyman',
    initials: 'NZ',
  },
  {
    id: 1,
    stars: 5,
    text: 'Helped me with a ton of projects: fixing a cabinet and putting it back together, hanging a projector, putting up a floating shelf, and more. Will hire again!',
    name: 'Savannah C.',
    service: 'Handyman',
    initials: 'SC',
  },
  {
    id: 4,
    stars: 5,
    text: 'Very professional and got the job finished in a timely fashion. Took a business card so this can be my go-to handyman service.',
    name: 'Jamilla S.',
    service: 'Furniture Assembly',
    initials: 'JS',
  },
  {
    id: 6,
    stars: 5,
    text: 'Very professional and fast! Worked around my schedule even though it meant coming to assemble after 8pm.',
    name: 'Macarena R.',
    service: 'Furniture Assembly',
    initials: 'MR',
  },
  {
    id: 7,
    stars: 5,
    text: 'Communicated clearly and got the job done! My cabinets look brand new after he took his time to paint them.',
    name: 'Kestia S.',
    service: 'Handyman',
    initials: 'KS',
  },
  {
    id: 8,
    stars: 5,
    text: 'Serge is the best guy. I can\'t begin to tell you how easy he made my awful move-in. I will know him for life — lovely chap.',
    name: 'Suzanne L.',
    service: 'Handyman',
    initials: 'SL',
  },
  {
    id: 9,
    stars: 5,
    text: 'Serge is wonderful. He really cares about what he does and is so easy to work with. The quality of his work is excellent, and he even came up with new ideas that solved problems I was having. I am already planning to work with him on more jobs and will gladly recommend him to others. I was worried he wouldn\'t be as good as others because his price was lower — but he is really SUPER!',
    name: 'Debra Z.',
    service: 'Handyman',
    initials: 'DZ',
  },
  {
    id: 18,
    stars: 5,
    text: 'Serge was very responsive and provided high-quality work. He mounted six pieces onto a brick wall including a large mirror and one shelf on drywall. He was able to make adjustments when things weren\'t as straightforward as we thought, and we appreciated that he always asked for our opinions when necessary and provided multiple options. I\'d definitely hire again.',
    name: 'Spencer L.',
    service: 'Handyman',
    initials: 'SL',
  },
  {
    id: 19,
    stars: 5,
    text: 'Easy to work with and did a great job hanging various items around our home, including a TV and cat shelves that weren\'t the easiest! Good communication and very reliable!',
    name: 'Julie N.',
    service: 'Handyman',
    initials: 'JN',
  },
  {
    id: 20,
    stars: 5,
    text: 'I had 3 dressers put together and they were done neatly and quickly. Very professional and kind guy.',
    name: 'Rachel K.',
    service: 'Furniture Assembly',
    initials: 'RK',
  },
  {
    id: 21,
    stars: 5,
    text: 'Serge killed it! Moved my TV, patched walls flawlessly, fixed my bed & assembled a dresser — all in one visit. On time, clean, no BS.',
    name: 'Alice C.',
    service: 'Handyman',
    initials: 'AC',
  },
  {
    id: 22,
    stars: 5,
    text: 'I highly recommend this specialist. Assembled a table and a bedside table for the TV very quickly and efficiently. I will contact you again. Sergey, thank you!',
    name: 'Kira K.',
    service: 'Furniture Assembly',
    initials: 'KK',
  },
  {
    id: 23,
    stars: 5,
    text: 'Thank you, Serge! For the neat and clean assembly of two tables and a chest of drawers from IKEA. Everything was done quickly and efficiently. I will definitely use your services again.',
    name: 'Helen M.',
    service: 'Furniture Assembly',
    initials: 'HM',
  },
] as const;

export const TRUST_BADGES = [
  { label: '15+ Years Experience', icon: 'shield-check' },
  { label: 'Fast Response', icon: 'zap' },
  { label: 'Clean Work', icon: 'sparkles' },
  { label: 'Fair Pricing', icon: 'dollar-sign' },
] as const;

// Real, completed Handlyr jobs. The first six double as the homepage
// "Recent Projects" preview; the full list shows on the /projects page.
export const GALLERY_ITEMS = [
  {
    id: 1,
    label: 'TV & Media Wall',
    service: 'TV Mounting',
    image: '/projects/media-wall-tv-mounting.webp',
    alt: 'Wall-mounted flat-screen TV with a soundbar on a slatted accent wall above an electric fireplace',
  },
  {
    id: 2,
    label: 'Floating Shelves',
    service: 'Shelf Installation',
    image: '/projects/floating-shelves.webp',
    alt: 'Six dark wood floating shelves installed across a home office wall',
  },
  {
    id: 3,
    label: 'Sectional Sofa Assembly',
    service: 'Furniture Assembly',
    image: '/projects/sectional-sofa-assembly.webp',
    alt: 'Newly assembled white sectional sofa in a living room',
  },
  {
    id: 4,
    label: 'Bathroom Shelving',
    service: 'Shelf Installation',
    image: '/projects/bathroom-shelving.webp',
    alt: 'Black floating shelves and a towel bar installed on a tiled bathroom wall above a toilet',
  },
  {
    id: 5,
    label: 'Curtain Installation',
    service: 'Curtain & Blind Hanging',
    image: '/projects/curtain-installation.webp',
    alt: 'Sheer curtains hung on a ceiling-mounted track over a bedroom window',
  },
  {
    id: 6,
    label: 'Dresser Assembly',
    service: 'Furniture Assembly',
    image: '/projects/dresser-assembly.webp',
    alt: 'Assembled white six-drawer dresser placed against a bedroom wall',
  },
  {
    id: 7,
    label: 'TV Mounting',
    service: 'TV Mounting',
    image: '/projects/tv-mounting.webp',
    alt: 'Flat-screen TV mounted on the wall above a media cabinet with cables concealed',
  },
  {
    id: 8,
    label: 'Platform Bed Assembly',
    service: 'Furniture Assembly',
    image: '/projects/bed-frame-assembly.webp',
    alt: 'Assembled white upholstered platform bed frame in a bedroom',
  },
  {
    id: 9,
    label: 'Curved Floating Shelves',
    service: 'Shelf Installation',
    image: '/projects/curved-floating-shelves.webp',
    alt: 'Curved wave-shaped floating shelves mounted on the wall above a sofa',
  },
  {
    id: 10,
    label: 'Microwave Installation',
    service: 'Appliance Mounting',
    image: '/projects/microwave-installation.webp',
    alt: 'Over-the-range microwave installed beneath kitchen cabinets above a stove',
  },
  {
    id: 11,
    label: 'Outdoor Shed Assembly',
    service: 'Furniture Assembly',
    image: '/projects/outdoor-shed-assembly.webp',
    alt: 'Assembled grey outdoor storage shed on a composite rooftop deck',
  },
  {
    id: 12,
    label: 'Glass Shower Door',
    service: 'Bathroom Fixtures',
    image: '/projects/glass-shower-door.webp',
    alt: 'Black-framed glass shower door installed in a tiled walk-in shower',
  },
  {
    id: 13,
    label: 'Glass Bath Shelves',
    service: 'Shelf Installation',
    image: '/projects/glass-bath-shelves.webp',
    alt: 'Gold-bracket glass bathroom shelves mounted beside a vanity mirror',
  },
  {
    id: 14,
    label: 'Cabinet Hardware',
    service: 'Cabinet & Hardware',
    image: '/projects/cabinet-hardware-install.webp',
    alt: 'Drilling pilot holes with a cordless drill to install cabinet door hardware',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
] as const;
