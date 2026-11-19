// Localized copy for the service × borough landing pages
// (/services/[slug]/[area]). Each entry is unique to its combination so the
// pages are genuinely useful rather than templated duplicates.
//
// Keep to verified business facts (see constants.ts). Do not claim job
// counts, locations of specific reviews/photos, insurance, or areas we do
// not serve.

export interface ServiceAreaCopy {
  /** Short line under the H1. */
  lead: string;
  /** 2 paragraphs specific to this service in this borough. */
  intro: string[];
  /** Neighborhoods mentioned on this page (subset of the area list). */
  neighborhoods: string[];
  /** One localized FAQ shown first. */
  faq: { q: string; a: string };
}

type AreaSlug = 'brooklyn' | 'queens';

export const SERVICE_AREA_COPY: Record<string, Record<AreaSlug, ServiceAreaCopy>> = {
  'furniture-assembly': {
    brooklyn: {
      lead: 'IKEA, Wayfair and flat-pack furniture assembled in Brooklyn apartments and brownstones — one visit, done right.',
      intro: [
        'In Brooklyn, furniture assembly usually starts with logistics: boxes carried up a narrow brownstone staircase, a bed frame that has to be built inside the bedroom because it will not fit through the hallway assembled, or a full studio in Williamsburg delivered all at once. We plan the order of work around your space so nothing gets built in the wrong room.',
        'We assemble beds, dressers, wardrobes, desks, sofas and storage systems from IKEA, Wayfair, West Elm, CB2, Amazon and every other flat-pack brand. Tall pieces like wardrobes and bookcases can be anchored to the wall — useful in older Park Slope and Bed-Stuy buildings where floors are rarely perfectly level.',
      ],
      neighborhoods: ['Williamsburg', 'Park Slope', 'Bed-Stuy', 'Crown Heights', 'Bay Ridge', 'Flatbush'],
      faq: {
        q: 'Can you assemble furniture in a Brooklyn walk-up with narrow stairs?',
        a: 'Yes. When a piece will not fit through a hallway or staircase assembled, we build it in the room where it will stay. Just tell us the floor and which pieces you have when you text.',
      },
    },
    queens: {
      lead: 'Flat-pack furniture assembled across Queens — from Long Island City high-rises to houses in Bayside.',
      intro: [
        'Queens homes vary a lot, and so do assembly jobs. In Long Island City and Flushing high-rises we work around elevator bookings and building rules; in Astoria and Sunnyside walk-ups we bring everything up in one trip; in Forest Hills co-ops and Bayside houses it is often a whole room — or a whole floor — of new furniture at once.',
        'We assemble IKEA, Wayfair, West Elm, CB2, Amazon and all other flat-pack brands: beds, dressers, wardrobes, desks, shelving units and outdoor pieces. Hardware is sorted and counted before we start, every joint is checked, and packaging is bagged and removed when we leave.',
      ],
      neighborhoods: ['Long Island City', 'Astoria', 'Sunnyside', 'Forest Hills', 'Flushing', 'Bayside'],
      faq: {
        q: 'Do you work in Queens buildings that require elevator reservations?',
        a: 'Yes. Let us know your building’s rules when you book and we will schedule the visit around your elevator or loading-dock window.',
      },
    },
  },
  'tv-mounting': {
    brooklyn: {
      lead: 'TVs mounted on Brooklyn walls of every kind — plaster, brick, concrete and drywall — with cables hidden.',
      intro: [
        'Brooklyn walls are the main reason TV mounting here is not a simple screw-into-a-stud job. Pre-war buildings and brownstones often have plaster over lath or exposed brick, while new construction in Williamsburg and DUMBO often means concrete. Each needs a different anchor and drilling method, and we bring the right ones for your wall.',
        'Cable management is included with every mount: in-wall where the wall allows it, or a clean paintable raceway where it does not (common on brick and concrete). We also mount soundbars and set up full media walls, and we check level before and after the TV goes up.',
      ],
      neighborhoods: ['Park Slope', 'Williamsburg', 'DUMBO', 'Bed-Stuy', 'Crown Heights', 'Bay Ridge'],
      faq: {
        q: 'Can you mount a TV on exposed brick or plaster in a Brooklyn brownstone?',
        a: 'Yes. We use masonry anchors for brick and the right fasteners for plaster and lath, and we choose the mounting point based on what is behind the wall. Text us a photo of the wall for a free quote.',
      },
    },
    queens: {
      lead: 'TV mounting in Queens apartments and houses — concrete, drywall or brick, with cables managed.',
      intro: [
        'Many Queens high-rises — especially in Long Island City and Flushing — have concrete walls, while houses in Bayside and Forest Hills are usually drywall over studs. We identify the wall first, then use masonry anchors or stud mounting rated for your TV and mount type.',
        'Every mount includes cable management, from in-wall runs to a slim surface raceway that blends in. Whether it is a 40-inch bedroom TV in an Astoria apartment or a large living-room screen with a soundbar, we set the height with you and level it before we leave.',
      ],
      neighborhoods: ['Long Island City', 'Flushing', 'Astoria', 'Forest Hills', 'Jackson Heights', 'Bayside'],
      faq: {
        q: 'My Queens apartment has concrete walls. Can you still mount a TV?',
        a: 'Yes. Concrete is common in Queens high-rises, and we mount on it regularly using masonry anchors rated for the TV and mount. Cable management is included.',
      },
    },
  },
  'shelf-installation': {
    brooklyn: {
      lead: 'Floating shelves, bookcases and storage installed level and secure in Brooklyn homes.',
      intro: [
        'Shelves are only as strong as what holds them, and Brooklyn walls vary a lot: plaster and lath in pre-war apartments, brick in brownstones, concrete in newer buildings. We pick anchors for your wall and your load — books, plants and records weigh much more than they look.',
        'We install floating and bracket shelves, wall-mounted bookcases, closet systems and modular units like IKEA KALLAX and Billy, and we anchor tall furniture to the wall. In small Williamsburg or Park Slope apartments, vertical storage is often the best use of space — we help you plan heights and spacing before we drill.',
      ],
      neighborhoods: ['Williamsburg', 'Park Slope', 'DUMBO', 'Crown Heights', 'Sunset Park', 'Bay Ridge'],
      faq: {
        q: 'Will floating shelves hold up on old plaster walls in Brooklyn?',
        a: 'Yes, when they are anchored correctly. We locate solid fixing points or use anchors rated for plaster and your load, then load-test every shelf before we finish.',
      },
    },
    queens: {
      lead: 'Shelf installation across Queens — floating shelves, closets and storage that stay level.',
      intro: [
        'In Queens we install shelves on everything from concrete walls in Long Island City high-rises to drywall in Bayside houses and older plaster in Forest Hills co-ops. Concrete needs masonry anchors; drywall needs studs or heavy-duty toggles. We confirm which you have before choosing hardware.',
        'Typical jobs include floating shelves in living rooms, bathroom shelving and towel bars, closet and pantry systems, garage and laundry storage, and IKEA modular units. Heights and spacing are agreed with you before drilling, and every shelf is leveled and load-tested.',
      ],
      neighborhoods: ['Long Island City', 'Forest Hills', 'Bayside', 'Astoria', 'Jackson Heights', 'Flushing'],
      faq: {
        q: 'Do you install garage or laundry shelving in Queens houses?',
        a: 'Yes. Along with living-room and bathroom shelves, we install garage, laundry and closet storage systems, anchored into studs or masonry for the load.',
      },
    },
  },
  'blinds-installation': {
    brooklyn: {
      lead: 'Blinds, shades, curtain rods and tracks installed in Brooklyn windows — including tall pre-war ones.',
      intro: [
        'Brooklyn windows are rarely standard. Tall pre-war windows in Park Slope and Crown Heights, deep brownstone frames, and wide loft windows in Williamsburg and DUMBO all need careful measuring and level brackets. We confirm inside-mount or outside-mount with you before drilling.',
        'We install roller, cellular, roman and venetian shades, blackout blinds, curtain rods and ceiling tracks. For renters we keep holes to a minimum and use hardware that can be removed cleanly; for owners we can make the install look built-in. Every blind is tested for smooth raise, lower and tilt.',
      ],
      neighborhoods: ['Park Slope', 'Crown Heights', 'Williamsburg', 'DUMBO', 'Flatbush', 'Bay Ridge'],
      faq: {
        q: 'Can you install curtain tracks or blinds on brick or concrete window surrounds?',
        a: 'Yes. Brick and concrete surrounds are common in Brooklyn; we use masonry anchors and level every bracket so the treatment hangs straight.',
      },
    },
    queens: {
      lead: 'Window blinds, shades and curtain rods installed across Queens apartments and houses.',
      intro: [
        'From floor-to-ceiling windows in Long Island City high-rises to classic double-hung windows in Forest Hills and Bayside houses, we install window treatments that fit and work. Concrete window heads in high-rises need masonry anchors; wood frames need careful pilot holes so nothing splits.',
        'We install roller, cellular, roman and venetian shades, blackout blinds, curtain rods and ceiling-mounted tracks — inside or outside mount. For renters we use clean, removable hardware where possible. Every installation is leveled and tested before we leave.',
      ],
      neighborhoods: ['Long Island City', 'Forest Hills', 'Astoria', 'Sunnyside', 'Flushing', 'Bayside'],
      faq: {
        q: 'Can you install blinds on floor-to-ceiling windows in a Queens high-rise?',
        a: 'Yes. We measure carefully, use anchors suited to concrete ceilings and window heads, and can mount ceiling tracks or large shades for wide windows.',
      },
    },
  },
  'cabinet-installation': {
    brooklyn: {
      lead: 'Kitchen, bathroom and medicine cabinets installed level and securely anchored in Brooklyn homes.',
      intro: [
        'Older Brooklyn kitchens and bathrooms are rarely square: walls lean, floors slope, and plaster or brick sits behind the surface. Cabinets have to be anchored into real structure and shimmed level and plumb, or doors will never close right. That is the part we take time over.',
        'We install upper and base cabinets, bathroom vanities, medicine cabinets and storage cabinets, flat-pack or pre-assembled. We also fix existing cabinets — hinges, drawer slides, door alignment — and install cabinet hardware and over-the-range microwaves beneath cabinets.',
      ],
      neighborhoods: ['Park Slope', 'Bed-Stuy', 'Crown Heights', 'Flatbush', 'Bay Ridge', 'Sunset Park'],
      faq: {
        q: 'Can you install cabinets in an older Brooklyn kitchen with uneven walls?',
        a: 'Yes. We anchor into studs or masonry and shim cabinets level and plumb so doors and drawers line up and run smoothly, even when the walls are not straight.',
      },
    },
    queens: {
      lead: 'Cabinet installation in Queens kitchens and bathrooms — anchored, level and adjusted.',
      intro: [
        'Whether it is a kitchen refresh in a Bayside house, a new vanity in a Forest Hills co-op, or a medicine cabinet in an Astoria apartment, cabinets need to hang from solid structure. We locate studs or use masonry anchors in concrete, then shim everything level and plumb.',
        'We install kitchen uppers and bases, bathroom vanities, medicine cabinets and storage or laundry cabinetry, and we adjust hinges, drawer slides and doors on cabinets you already have. Cabinet hardware and under-cabinet microwave installs are welcome on the same visit.',
      ],
      neighborhoods: ['Bayside', 'Forest Hills', 'Astoria', 'Flushing', 'Jackson Heights', 'Jamaica'],
      faq: {
        q: 'Can you install cabinets in a Queens co-op?',
        a: 'Yes. If your building needs paperwork or set work hours, let us know when you book and we will plan the visit around them.',
      },
    },
  },
  'drywall-repair': {
    brooklyn: {
      lead: 'Wall holes, cracks and water damage repaired in Brooklyn — smooth, paint-ready finish.',
      intro: [
        'Brooklyn walls are a mix: drywall in newer buildings, plaster and lath in pre-war apartments and brownstones. Patching them is different work — plaster cracks need to be stabilized before they are filled, or they come back. We look at the wall first and choose the right repair.',
        'Common jobs include holes left from old TV mounts and shelves, doorknob holes, cracks, and patches after a leak from upstairs. Moving out of a Williamsburg or Park Slope rental? We can walk the whole apartment and patch every hole before your inspection, leaving the walls ready for paint.',
      ],
      neighborhoods: ['Williamsburg', 'Park Slope', 'Bed-Stuy', 'Crown Heights', 'Flatbush', 'Bay Ridge'],
      faq: {
        q: 'Do you repair cracked plaster walls in Brooklyn pre-war buildings?',
        a: 'Yes. We stabilize and fill plaster cracks and patch both plaster and drywall to a smooth, paint-ready finish matched to the surrounding wall.',
      },
    },
    queens: {
      lead: 'Drywall and wall repair across Queens — holes, cracks and water damage patched smooth.',
      intro: [
        'Queens apartments and houses see the same wall problems: doorknob holes, anchors pulled out of the wall, cracks along seams, and stains or soft spots after a leak. We repair everything from small holes to full-section replacement, then feather and sand until the patch disappears under paint.',
        'Moving out of an apartment in Astoria, Sunnyside or Long Island City? Move-out patching is one of our most common jobs — we fill every hole left by shelves, TV mounts and pictures so the walls are ready for inspection or a fresh coat of paint.',
      ],
      neighborhoods: ['Astoria', 'Sunnyside', 'Long Island City', 'Jackson Heights', 'Forest Hills', 'Flushing'],
      faq: {
        q: 'Can you patch walls before I move out of my Queens apartment?',
        a: 'Yes. We walk the apartment with you, patch every hole and crack, and leave the walls smooth and paint-ready for your move-out inspection.',
      },
    },
  },
  'general-repairs': {
    brooklyn: {
      lead: 'A Brooklyn handyman for the to-do list — doors, fixtures, hanging and small repairs in one visit.',
      intro: [
        'Older Brooklyn homes collect small problems: doors that stick as the building settles, loose hinges, towel bars pulled out of plaster, drafty or stuck windows, worn fixtures. Most of these are quick fixes for someone with the right tools — and a 2-hour visit usually covers several of them.',
        'Send us your list. We handle door and window hardware, light fixture swaps, minor plumbing like faucets and supply lines, picture and mirror hanging on plaster and brick, childproofing, and furniture repairs. If something really needs a licensed specialist, we will tell you honestly.',
      ],
      neighborhoods: ['Park Slope', 'Bed-Stuy', 'Crown Heights', 'Williamsburg', 'Flatbush', 'Sunset Park'],
      faq: {
        q: 'Can you handle several small repairs in my Brooklyn apartment in one visit?',
        a: 'Yes — that is how most customers book us. The 2-hour minimum ($138) usually covers a list of small jobs, and we work through it in order of priority.',
      },
    },
    queens: {
      lead: 'Handyman repairs across Queens — one visit for the whole list of small fixes.',
      intro: [
        'From apartments in Astoria and Jackson Heights to houses in Bayside, the small jobs add up: a door that will not latch, a dripping faucet, a light fixture to swap, mirrors and art to hang, furniture to fix. We bring the tools and parts to knock out the list in one visit.',
        'We cover door and window hardware, minor plumbing and fixture replacement, light fixtures, outlet covers, picture and mirror hanging, childproofing and furniture repairs. You can supply parts or we can pick them up. If a job needs a licensed specialist, we will say so up front.',
      ],
      neighborhoods: ['Astoria', 'Jackson Heights', 'Forest Hills', 'Bayside', 'Flushing', 'Jamaica'],
      faq: {
        q: 'Do you do small repairs at houses in Queens, not just apartments?',
        a: 'Yes. We work in apartments, co-ops and houses across Queens, and a single visit can cover a whole list of small repairs.',
      },
    },
  },
};

// Which gallery photos (by GALLERY_ITEMS.service) illustrate each service.
export const SERVICE_GALLERY: Record<string, string[]> = {
  'furniture-assembly': ['Furniture Assembly'],
  'tv-mounting': ['TV Mounting'],
  'shelf-installation': ['Shelf Installation'],
  'blinds-installation': ['Curtain & Blind Hanging'],
  'cabinet-installation': ['Cabinet & Hardware', 'Appliance Mounting'],
  'drywall-repair': [],
  'general-repairs': ['Bathroom Fixtures', 'Appliance Mounting'],
};
