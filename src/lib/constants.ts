export const BUSINESS = {
  name: 'Handlyr',
  phone: '(347) 799-8402',
  phoneHref: 'tel:+13477998402',
  smsHref: 'sms:+13477998402?&body=Hi%20Serge!%20I%20need%20help%20with%20',
  location: 'New York City',
  experience: '15+',
  founded: '2009',
  email: 'order@handlyr.org',
  tagline: 'Professional handyman services across New York City.',
};

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
    state: 'NY',
    description: 'Serving all Brooklyn neighborhoods from Bay Ridge to Williamsburg.',
  },
  {
    name: 'Queens',
    state: 'NY',
    description: 'From Long Island City and Astoria out to Flushing and Jamaica.',
  },
  {
    name: 'Manhasset',
    state: 'NY',
    description: 'Serving Manhasset and the surrounding North Shore of Nassau County.',
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    stars: 5,
    text: 'Helped me with a ton of projects: fixing a cabinet and putting it back together, hanging a projector, putting up a floating shelf, and more. Will hire again!',
    name: 'Savannah C.',
    service: 'Handyman',
    initials: 'SC',
  },
  {
    id: 2,
    stars: 5,
    text: 'Although my request was minimal, the work was done with care and professionalism. I would definitely hire again.',
    name: 'Fiona D.',
    service: 'Window Treatment',
    initials: 'FD',
  },
  {
    id: 3,
    stars: 5,
    text: 'The job that was performed was good quality and exceeded expectations.',
    name: 'Kevin R.',
    service: 'Window Treatment',
    initials: 'KR',
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
    id: 5,
    stars: 5,
    text: 'He was absolutely the best.',
    name: 'Latoyia C.',
    service: 'Furniture Assembly',
    initials: 'LC',
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
] as const;

export const TRUST_BADGES = [
  { label: '15+ Years Experience', icon: 'shield-check' },
  { label: 'Fast Response', icon: 'zap' },
  { label: 'Clean Work', icon: 'sparkles' },
  { label: 'Fair Pricing', icon: 'dollar-sign' },
] as const;

export const GALLERY_ITEMS = [
  { id: 1, label: 'TV Mounting', location: 'Queens', image: '/gallery-tv-mounting.jpg' },
  { id: 2, label: 'Furniture Assembly', location: 'Brooklyn', image: '/gallery-furniture-assembly.jpg' },
  { id: 3, label: 'Floating Shelves', location: 'Manhasset', image: '/gallery-floating-shelves.jpg' },
  { id: 4, label: 'Drywall Repair', location: 'Queens', image: '/gallery-drywall-repair.jpg' },
  { id: 5, label: 'Cabinet Install', location: 'Brooklyn', image: '/gallery-cabinet-install.jpg' },
  { id: 6, label: 'Blinds Installation', location: 'Manhasset', image: '/gallery-blinds-installation.jpg' },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
] as const;
