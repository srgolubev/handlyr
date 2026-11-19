import { PRICING } from '@/lib/constants';

// Cost guides (/cost-guides/[slug]).
//
// Prices are derived from the single hourly model in PRICING — never
// hard-code dollar amounts here. Job durations are typical on-site times
// (owner to confirm/adjust); the real quote always comes from photos.

export interface CostJob {
  job: string;
  /** Typical on-site hours, [low, high]. */
  hours: [number, number];
  note?: string;
}

export interface CostGuide {
  slug: string;
  /** Matching service slug, or null for the general guide. */
  serviceSlug: string | null;
  title: string;
  metaDescription: string;
  /** 2–3 sentence direct answer shown at the top (and used for AEO). */
  shortAnswer: string;
  jobs: CostJob[];
  factors: { name: string; detail: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
}

export function jobPrice(hours: number): number {
  return Math.max(hours, PRICING.minimumHours) * PRICING.hourlyRate;
}

export function formatUsd(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}

export function priceRange([lo, hi]: [number, number]): string {
  const a = jobPrice(lo);
  const b = jobPrice(hi);
  return a === b ? formatUsd(a) : `${formatUsd(a)}–${formatUsd(b)}`;
}

export function hoursLabel([lo, hi]: [number, number]): string {
  const f = (h: number) => (h === 1 ? '1 hour' : `${h} hours`);
  return lo === hi ? f(lo) : `${lo}–${f(hi)}`;
}

const MIN = PRICING.hourlyRate * PRICING.minimumHours;
const RATE = PRICING.hourlyRate;

export const COST_GUIDES: CostGuide[] = [
  {
    slug: 'handyman-cost-nyc',
    serviceSlug: null,
    title: 'How Much Does a Handyman Cost in Brooklyn & Queens?',
    metaDescription: `Handyman cost in Brooklyn and Queens: $${RATE}/hour with a ${PRICING.minimumHours}-hour minimum ($${MIN}). Typical job times and prices, what changes the cost, and how to get more done per visit.`,
    shortAnswer: `Handlyr charges $${RATE} per hour with a ${PRICING.minimumHours}-hour minimum, so the smallest visit is $${MIN}. Most single jobs — mounting a TV, assembling a dresser, hanging shelves — fit inside the minimum, and any time left over goes to other small tasks on your list. Quotes by text are free: send a photo and we reply with an estimate.`,
    jobs: [
      { job: 'One small job (hang a mirror, swap a fixture, fix a door)', hours: [1, 2], note: 'Remaining time goes to other tasks' },
      { job: 'Mount a TV on drywall', hours: [1, 2] },
      { job: 'Assemble a dresser or bed frame', hours: [1, 2] },
      { job: 'Hang 3–4 floating shelves', hours: [1.5, 2] },
      { job: 'Small to-do list (4–6 items)', hours: [2, 3] },
      { job: 'Move-in day: several furniture pieces + TV + shelves', hours: [4, 6] },
    ],
    factors: [
      { name: 'Number of tasks', detail: `The ${PRICING.minimumHours}-hour minimum is easiest to get value from when you group several small jobs into one visit.` },
      { name: 'Wall type', detail: 'Brick, concrete and pre-war plaster take longer to drill and anchor than drywall.' },
      { name: 'Access', detail: 'Walk-ups, elevator reservations and tight hallways can add time for carrying items in and out.' },
      { name: 'Parts', detail: 'You can supply parts, or we can pick them up — their cost is added to the final bill.' },
    ],
    tips: [
      'Write a list of everything you want done and send it with photos — one visit is cheaper than several.',
      'Have furniture boxes, mounts and parts on site before the visit.',
      'Clear the work area so we can start right away.',
    ],
    faqs: [
      { q: 'Is there a trip or call-out fee?', a: `No separate trip fee. The visit is billed at $${RATE}/hour with a ${PRICING.minimumHours}-hour minimum. An optional on-site estimate is $${PRICING.estimateFee}, credited toward the job if you go ahead.` },
      { q: 'Do prices differ between Brooklyn and Queens?', a: 'No. The rate is the same everywhere we work in Brooklyn and Queens.' },
      { q: 'What if the job takes less than 2 hours?', a: 'We use the remaining time for other small tasks around your home, so the minimum is never wasted.' },
    ],
  },
  {
    slug: 'tv-mounting-cost-nyc',
    serviceSlug: 'tv-mounting',
    title: 'How Much Does TV Mounting Cost in Brooklyn & Queens?',
    metaDescription: `TV mounting cost in Brooklyn and Queens: most installs fit the $${MIN} two-hour minimum. Prices by wall type, TV size and cable concealment.`,
    shortAnswer: `Most TV mounts in Brooklyn and Queens cost $${MIN} with Handlyr — a standard TV on drywall or brick fits within the ${PRICING.minimumHours}-hour minimum at $${RATE}/hour, and cable management is included. Larger setups with a soundbar, in-wall wiring or two TVs usually run $${MIN}–$${RATE * 3}.`,
    jobs: [
      { job: 'TV up to 65" on drywall, cables in a surface raceway', hours: [1, 1.5] },
      { job: 'TV on brick, concrete or plaster', hours: [1.5, 2] },
      { job: 'TV + soundbar', hours: [1.5, 2.5] },
      { job: 'TV with in-wall cable concealment', hours: [2, 3] },
      { job: 'Large TV (75"+) or above a fireplace', hours: [2, 3] },
      { job: 'Two TVs in one visit', hours: [2, 3] },
    ],
    factors: [
      { name: 'Wall type', detail: 'Drywall over studs is quickest. Brick, concrete and pre-war plaster need masonry drilling and different anchors.' },
      { name: 'Cable management', detail: 'A surface raceway is fast; running cables inside the wall takes longer and depends on what is behind it.' },
      { name: 'TV size and mount type', detail: 'Full-motion arms and very large TVs take more time to level and secure.' },
      { name: 'The mount', detail: 'Bring your own mount, or ask us to pick one up — the mount is added to the final cost.' },
    ],
    tips: [
      'Text a photo of the wall and tell us the TV size — we can tell you the wall type and method upfront.',
      'Use leftover minimum time to hang shelves, art or a mirror in the same visit.',
    ],
    faqs: [
      { q: 'Is hiding the cables extra?', a: 'Cable management is included with every mount. In-wall concealment takes longer, so it can add time to the visit.' },
      { q: 'Does mounting on brick or concrete cost more?', a: `Only in time — it is the same $${RATE}/hour rate. Most masonry mounts still fit within the ${PRICING.minimumHours}-hour minimum.` },
    ],
  },
  {
    slug: 'furniture-assembly-cost-nyc',
    serviceSlug: 'furniture-assembly',
    title: 'How Much Does Furniture Assembly Cost in Brooklyn & Queens?',
    metaDescription: `IKEA and flat-pack furniture assembly cost in Brooklyn and Queens: $${RATE}/hour, $${MIN} minimum. Typical times for beds, dressers, wardrobes and full rooms.`,
    shortAnswer: `Furniture assembly with Handlyr costs $${RATE} per hour with a $${MIN} minimum. One or two typical pieces — a bed frame, a dresser, a desk — usually fit within the ${PRICING.minimumHours}-hour minimum; large wardrobes like IKEA PAX or a whole apartment take longer.`,
    jobs: [
      { job: 'Bed frame or dresser', hours: [1, 2] },
      { job: 'Desk, bookcase or nightstands', hours: [0.5, 1.5] },
      { job: 'Sectional sofa', hours: [1, 2] },
      { job: 'Large wardrobe (e.g. IKEA PAX) with interior fittings', hours: [2, 4] },
      { job: 'Bedroom set: bed + dresser + nightstands', hours: [2.5, 4] },
      { job: 'Whole apartment move-in', hours: [4, 8] },
    ],
    factors: [
      { name: 'Number and size of pieces', detail: 'Wardrobes and storage systems with many drawers and doors take the longest.' },
      { name: 'Wall anchoring', detail: 'Tall pieces should be anchored to the wall — quick on drywall, a bit longer on brick or plaster.' },
      { name: 'Access', detail: 'Narrow stairs and hallways sometimes mean building pieces inside the room they will stay in.' },
    ],
    tips: [
      'Send us the list of items (or the order confirmation) before the visit for an accurate estimate.',
      'Keep boxes unopened and in the right rooms — it saves sorting time.',
    ],
    faqs: [
      { q: 'Do you take the packaging away?', a: 'We bag and remove all packaging and debris before we leave.' },
      { q: 'Is IKEA furniture priced differently from other brands?', a: `No. Every brand is billed at the same $${RATE}/hour rate.` },
    ],
  },
  {
    slug: 'shelf-installation-cost-nyc',
    serviceSlug: 'shelf-installation',
    title: 'How Much Does Shelf Installation Cost in Brooklyn & Queens?',
    metaDescription: `Shelf installation cost in Brooklyn and Queens: floating shelves, bracket shelves and closet systems from $${MIN}. Prices by wall type and number of shelves.`,
    shortAnswer: `Installing shelves with Handlyr typically costs $${MIN}: three to four floating or bracket shelves fit within the ${PRICING.minimumHours}-hour minimum at $${RATE}/hour. Closet systems, garage storage and large wall units take longer and usually run $${MIN}–$${RATE * 4}.`,
    jobs: [
      { job: '1–2 floating or bracket shelves', hours: [0.5, 1] },
      { job: '3–4 floating shelves on drywall', hours: [1.5, 2] },
      { job: 'Shelves on brick or concrete', hours: [1.5, 2.5] },
      { job: 'Bathroom shelving + towel bars', hours: [1, 2] },
      { job: 'Closet, pantry or garage shelving system', hours: [2, 4] },
    ],
    factors: [
      { name: 'Wall type', detail: 'Masonry and plaster need special anchors; drywall needs studs or heavy-duty toggles for heavy loads.' },
      { name: 'Load', detail: 'Books and records need stronger anchoring than decor, which can add time.' },
      { name: 'Layout', detail: 'Long runs of evenly spaced shelves take time to measure and level precisely.' },
    ],
    tips: [
      'Decide heights and spacing beforehand, or mark them with painter’s tape.',
      'Combine shelves with other hanging jobs — art, mirrors, curtain rods — in the same visit.',
    ],
    faqs: [
      { q: 'Can shelves hold heavy books?', a: 'Yes, when anchored correctly. We choose anchors for your wall and load and test every shelf before we finish.' },
    ],
  },
  {
    slug: 'blinds-installation-cost-nyc',
    serviceSlug: 'blinds-installation',
    title: 'How Much Does Blinds Installation Cost in Brooklyn & Queens?',
    metaDescription: `Blinds, shades and curtain rod installation cost in Brooklyn and Queens: $${RATE}/hour, $${MIN} minimum. Typical times per window.`,
    shortAnswer: `Installing blinds or shades with Handlyr costs $${RATE} per hour with a $${MIN} minimum. Roughly three to five standard windows of blinds or curtain rods fit within the ${PRICING.minimumHours}-hour minimum; a whole apartment or ceiling tracks take longer.`,
    jobs: [
      { job: '1–2 windows of blinds or curtain rods', hours: [0.5, 1] },
      { job: '3–5 windows', hours: [1.5, 2] },
      { job: 'Ceiling-mounted curtain track', hours: [1, 2] },
      { job: 'Whole apartment (6–10 windows)', hours: [2.5, 4] },
    ],
    factors: [
      { name: 'Window surround', detail: 'Concrete or brick window heads take longer than wood frames.' },
      { name: 'Mount type', detail: 'Inside-mount needs precise measuring; outside-mount and tracks need level runs across the wall.' },
      { name: 'Window size', detail: 'Very wide or tall windows may need extra brackets.' },
    ],
    tips: [
      'Have the blinds delivered and unboxed before the visit.',
      'Tell us if you rent — we use hardware that can be removed cleanly.',
    ],
    faqs: [
      { q: 'Do you measure for blinds?', a: 'We verify window dimensions before mounting and confirm inside- or outside-mount with you.' },
    ],
  },
  {
    slug: 'cabinet-installation-cost-nyc',
    serviceSlug: 'cabinet-installation',
    title: 'How Much Does Cabinet Installation Cost in Brooklyn & Queens?',
    metaDescription: `Cabinet installation cost in Brooklyn and Queens: medicine cabinets, vanities and kitchen cabinets at $${RATE}/hour, $${MIN} minimum.`,
    shortAnswer: `Cabinet installation with Handlyr is billed at $${RATE} per hour with a $${MIN} minimum. A medicine cabinet or a single wall cabinet fits within the minimum; kitchen runs take longer because every cabinet has to be anchored, leveled and adjusted.`,
    jobs: [
      { job: 'Medicine cabinet', hours: [1, 1.5] },
      { job: 'Single wall or storage cabinet', hours: [1, 2] },
      { job: 'Bathroom vanity cabinet (no plumbing changes)', hours: [2, 3] },
      { job: 'Adjust hinges, slides and doors on existing cabinets', hours: [1, 2] },
      { job: 'Cabinet hardware (pulls/knobs) for a kitchen', hours: [1.5, 3] },
      { job: 'Run of kitchen wall cabinets', hours: [3, 6] },
    ],
    factors: [
      { name: 'Number of cabinets', detail: 'Each cabinet is anchored, shimmed and leveled individually.' },
      { name: 'Walls and floors', detail: 'Out-of-plumb walls and sloping floors in older buildings need extra shimming.' },
      { name: 'Flat-pack vs. pre-assembled', detail: 'Flat-pack cabinets add assembly time before installation.' },
    ],
    tips: [
      'Send photos of the wall and the cabinet specs for an accurate estimate.',
      'Have hardware and cabinets on site and unboxed.',
    ],
    faqs: [
      { q: 'Can you fix cabinet doors that don’t close properly?', a: 'Yes — we adjust hinges, drawer slides and door alignment, often within the 2-hour minimum.' },
    ],
  },
  {
    slug: 'drywall-repair-cost-nyc',
    serviceSlug: 'drywall-repair',
    title: 'How Much Does Drywall Repair Cost in Brooklyn & Queens?',
    metaDescription: `Drywall and wall repair cost in Brooklyn and Queens: patch holes and cracks from $${MIN}. Typical times for small holes, water damage and move-out patching.`,
    shortAnswer: `Drywall repair with Handlyr costs $${RATE} per hour with a $${MIN} minimum. Several small holes or one medium patch fit within the ${PRICING.minimumHours}-hour minimum. Larger patches, water damage and full move-out patching take longer.`,
    jobs: [
      { job: 'Several small holes (anchors, nails, old mounts)', hours: [1, 2] },
      { job: 'Doorknob-size hole', hours: [1, 2] },
      { job: 'Larger hole or cracked plaster section', hours: [2, 3] },
      { job: 'Water-damaged section', hours: [2, 4] },
      { job: 'Move-out patching for a whole apartment', hours: [2, 4] },
    ],
    factors: [
      { name: 'Size and number of holes', detail: 'Small holes are quick; larger ones need mesh or backing and more coats.' },
      { name: 'Plaster vs. drywall', detail: 'Plaster cracks must be stabilized before filling.' },
      { name: 'Drying time', detail: 'Bigger repairs need several coats of compound, which may mean a second short visit before paint.' },
    ],
    tips: [
      'Photograph each hole with something for scale (a coin or a pen).',
      'If you are moving out, book patching before the movers leave so walls are easy to reach.',
    ],
    faqs: [
      { q: 'Is painting included?', a: 'We leave repairs smooth and ready for primer and paint. Let us know if you want touch-up painting and we will include it in the estimate.' },
    ],
  },
  {
    slug: 'general-repairs-cost-nyc',
    serviceSlug: 'general-repairs',
    title: 'How Much Do Small Home Repairs Cost in Brooklyn & Queens?',
    metaDescription: `Small home repair cost in Brooklyn and Queens: doors, fixtures, faucets and to-do lists at $${RATE}/hour, $${MIN} minimum.`,
    shortAnswer: `Small repairs with Handlyr cost $${RATE} per hour with a $${MIN} minimum. Most individual fixes — a sticking door, a loose towel bar, a light fixture swap — take under an hour, so a ${PRICING.minimumHours}-hour visit usually covers a whole list.`,
    jobs: [
      { job: 'Fix a sticking door or loose hinges', hours: [0.5, 1] },
      { job: 'Replace a light fixture (like-for-like)', hours: [0.5, 1] },
      { job: 'Replace a faucet or supply line', hours: [1, 2] },
      { job: 'Hang mirrors and art (3–5 pieces)', hours: [1, 2] },
      { job: 'Childproofing: anchors, hooks, latches', hours: [1.5, 2.5] },
      { job: 'To-do list of 5–8 small items', hours: [2, 4] },
    ],
    factors: [
      { name: 'List length', detail: 'Grouping tasks is the best way to make the most of the minimum.' },
      { name: 'Parts', detail: 'You can supply parts, or we can pick them up and add their cost to the bill.' },
      { name: 'Specialist work', detail: 'If something needs a licensed plumber or electrician, we tell you honestly instead of guessing.' },
    ],
    tips: [
      'Keep a running list on your phone and send it with photos when you book.',
      'Put the most important items first — we work through the list in priority order.',
    ],
    faqs: [
      { q: 'Is any job too small?', a: `No. The ${PRICING.minimumHours}-hour minimum means small jobs are best grouped — and we use any spare time on other tasks.` },
    ],
  },
];

export const COST_GUIDE_BY_SLUG: Record<string, CostGuide> = Object.fromEntries(
  COST_GUIDES.map((g) => [g.slug, g])
);

export const COST_GUIDE_BY_SERVICE: Record<string, CostGuide> = Object.fromEntries(
  COST_GUIDES.filter((g) => g.serviceSlug).map((g) => [g.serviceSlug as string, g])
);
