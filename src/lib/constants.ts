export const BUSINESS = {
  name: 'Handlyr',
  phone: '(347) 799-8402',
  phoneHref: 'tel:+13477998402',
  location: 'New York City',
  experience: '15+',
  founded: '2009',
  email: 'hello@handlyr.org',
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
    name: 'Manhattan',
    state: 'NY',
    description: 'Upper West Side to the Financial District and everywhere in between.',
  },
  {
    name: 'Jersey City',
    state: 'NJ',
    description: 'Downtown, Heights, and Journal Square areas covered.',
  },
  {
    name: 'Hoboken',
    state: 'NJ',
    description: 'Full city coverage across all Hoboken neighborhoods.',
  },
  {
    name: 'Weehawken',
    state: 'NJ',
    description: 'Hudson River waterfront and surrounding neighborhoods.',
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    stars: 5,
    text: 'Quick, clean, and professional. Had my IKEA shelves up in no time. Will definitely call again!',
    name: 'Sarah M.',
    location: 'Brooklyn, NY',
    initials: 'SM',
  },
  {
    id: 2,
    stars: 5,
    text: "Best handyman I've found in NYC. TV mounted perfectly and all cables hidden. Highly recommend.",
    name: 'James T.',
    location: 'Manhattan, NY',
    initials: 'JT',
  },
  {
    id: 3,
    stars: 5,
    text: "Showed up on time, fixed the drywall patch beautifully. You'd never know there was a hole. Fair price too.",
    name: 'Maria L.',
    location: 'Jersey City, NJ',
    initials: 'ML',
  },
] as const;

export const TRUST_BADGES = [
  { label: '15+ Years Experience', icon: 'shield-check' },
  { label: 'Fast Response', icon: 'zap' },
  { label: 'Clean Work', icon: 'sparkles' },
  { label: 'Fair Pricing', icon: 'dollar-sign' },
] as const;

export const GALLERY_ITEMS = [
  { id: 1, label: 'TV Mounting', location: 'Manhattan', image: '/gallery-tv-mounting.jpg' },
  { id: 2, label: 'Furniture Assembly', location: 'Brooklyn', image: '/gallery-furniture-assembly.jpg' },
  { id: 3, label: 'Floating Shelves', location: 'Hoboken', image: '/gallery-floating-shelves.jpg' },
  { id: 4, label: 'Drywall Repair', location: 'Jersey City', image: '/gallery-drywall-repair.jpg' },
  { id: 5, label: 'Cabinet Install', location: 'Brooklyn', image: '/gallery-cabinet-install.jpg' },
  { id: 6, label: 'Blinds Installation', location: 'Manhattan', image: '/gallery-blinds-installation.jpg' },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
] as const;
