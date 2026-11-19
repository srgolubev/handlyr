// ─── Area data ───────────────────────────────────────────────────────────────

export interface AreaData {
  slug: string;
  name: string;
  fullName: string;
  state: string;
  neighborhoods: string[];
  whyTitle: string;
  whyCopy: string[];
  reviewIds: number[];
  schemaLocality: string;
  schemaRegion: string;
  seoDescription: string;
}

export const AREAS: Record<string, AreaData> = {
  brooklyn: {
    slug: 'brooklyn',
    name: 'Brooklyn',
    fullName: 'Brooklyn, NY',
    state: 'NY',
    neighborhoods: [
      'Park Slope',
      'Williamsburg',
      'DUMBO',
      'Bay Ridge',
      'Flatbush',
      'Crown Heights',
      'Bed-Stuy',
      'Sunset Park',
    ],
    whyTitle: 'Why Handlyr in Brooklyn',
    whyCopy: [
      'Brooklyn is home to hundreds of thousands of apartment dwellers, co-op owners, and renters who need reliable help with the little — and not so little — things. From IKEA furniture stacking up in a Williamsburg studio to TV mounting in a Park Slope brownstone, we know Brooklyn living inside and out.',
      'With 15+ years serving Brooklyn residents, we understand the quirks: pre-war plaster walls, concrete ceilings in new construction, narrow hallways and tight staircases. Every job is handled with the care and experience that your home deserves.',
      'We respond fast, show up on time, and leave your space clean. No surprise charges. No damage. Just solid work done right.',
    ],
    reviewIds: [8, 9, 1],
    schemaLocality: 'Brooklyn',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Brooklyn, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Park Slope, Williamsburg, DUMBO, Bay Ridge and all Brooklyn neighborhoods. Fast response, fair pricing.',
  },
  queens: {
    slug: 'queens',
    name: 'Queens',
    fullName: 'Queens, NY',
    state: 'NY',
    neighborhoods: [
      'Long Island City',
      'Astoria',
      'Sunnyside',
      'Forest Hills',
      'Flushing',
      'Jackson Heights',
      'Jamaica',
      'Bayside',
    ],
    whyTitle: 'Why Handlyr in Queens',
    whyCopy: [
      'Queens is the most diverse borough in the city, packed with new high-rises in Long Island City, classic co-ops in Forest Hills, and single-family homes out toward Bayside. Whatever your space looks like, we have worked on one like it.',
      'From assembling furniture in an Astoria walk-up to mounting a TV in a Flushing high-rise, we bring 15+ years of experience and the right tools for every wall type. We know the buildings, the parking, and how to get in and out without fuss.',
      'Booking is simple: text a photo of the job and we reply with a clear, upfront estimate — usually within 20 minutes. We arrive on schedule, protect your floors and furniture, and clean up before we leave. No surprises, just dependable work.',
    ],
    reviewIds: [4, 7],
    schemaLocality: 'Queens',
    schemaRegion: 'NY',
    seoDescription:
      'Professional handyman in Queens, NY. Furniture assembly, TV mounting, shelf installation, drywall repair & more. Serving Long Island City, Astoria, Forest Hills, Flushing, Bayside and all Queens neighborhoods. Fast response, fair pricing.',
  },
};
