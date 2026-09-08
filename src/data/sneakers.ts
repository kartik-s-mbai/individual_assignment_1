import { Sneaker } from '../types';

export const SNEAKERS_DATA: Sneaker[] = [
  {
    id: 'snk-01',
    name: 'AeroPulse 88',
    colorway: 'Solar Ember / Phantom Black',
    releaseYear: 1988,
    price: 185,
    availability: 'In Stock',
    availableSizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    description: 'An iconic late-80s court silhouette crafted with full-grain leather uppers, perforated toe venting, and high-impact dual-density foam midsoles for timeless hardwood prestige.',
    visual: {
      silhouette: 'high-top',
      primaryColor: '#e11d48', // crimson rose
      secondaryColor: '#18181b', // dark charcoal
      accentColor: '#f97316', // solar orange
      soleColor: '#f4f4f5', // sail white
      trimColor: '#ffffff'
    }
  },
  {
    id: 'snk-02',
    name: 'Horizon Court \'92',
    colorway: 'Teal Wave / Sail White',
    releaseYear: 1992,
    price: 160,
    availability: 'In Stock',
    availableSizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11', 'US 11.5', 'US 13'],
    description: 'Born during the golden era of tennis and street crossover culture, this low-profile trainer features premium tumbled leather, heritage side ribbing, and an off-white vintage midsole.',
    visual: {
      silhouette: 'court',
      primaryColor: '#0d9488', // teal
      secondaryColor: '#fef3c7', // warm sail
      accentColor: '#06b6d4', // cyan accent
      soleColor: '#fde68a', // vintage yellow sole
      trimColor: '#115e59'
    }
  },
  {
    id: 'snk-03',
    name: 'Apex Slam High',
    colorway: 'Heritage Crimson / Chalk',
    releaseYear: 1985,
    price: 210,
    availability: 'Limited Release',
    availableSizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    description: 'The definitive high-collar statement shoe that helped launch modern sneaker collecting. Structured ankle collar padding, reinforced heel counters, and contrasting color-blocked leather panels.',
    visual: {
      silhouette: 'high-top',
      primaryColor: '#b91c1c', // deep crimson
      secondaryColor: '#ffffff', // crisp chalk white
      accentColor: '#000000', // jet black
      soleColor: '#f5f5f4', // chalk sole
      trimColor: '#991b1b'
    }
  },
  {
    id: 'snk-04',
    name: 'Veloce Runner \'94',
    colorway: 'Electric Citron / Slate Grey',
    releaseYear: 1994,
    price: 145,
    availability: 'In Stock',
    availableSizes: ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11'],
    description: 'Pioneering breathable sandwich mesh merged with synthetic suede mudguards. Engineered with a sculpted EVA arch bridge designed for marathon runners and 90s city commuters alike.',
    visual: {
      silhouette: 'runner',
      primaryColor: '#64748b', // slate grey
      secondaryColor: '#0284c7', // vibrant sky
      accentColor: '#eab308', // electric citron
      soleColor: '#ffffff', // white sole
      trimColor: '#334155'
    }
  },
  {
    id: 'snk-05',
    name: 'Zenith Drift 90',
    colorway: 'Midnight Navy / Metallic Silver',
    releaseYear: 1990,
    price: 175,
    availability: 'Limited Release',
    availableSizes: ['US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    description: 'An aggressive track-inspired silhouette featuring streamlined thermoplastic side stabilizers, metallic reflective accents, and segmented rubber pods on the outsole for pivot traction.',
    visual: {
      silhouette: 'runner',
      primaryColor: '#1e3a8a', // midnight navy
      secondaryColor: '#94a3b8', // metallic silver
      accentColor: '#38bdf8', // ice blue
      soleColor: '#f1f5f9', // crisp sole
      trimColor: '#172554'
    }
  },
  {
    id: 'snk-06',
    name: 'Turbo Glide \'96',
    colorway: 'Infrared Flash / Charcoal',
    releaseYear: 1996,
    price: 190,
    availability: 'In Stock',
    availableSizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12', 'US 13'],
    description: 'Bold mid-90s layered overlays with distinctive geometric cutouts. Outfitted with exposed rear window cushioning pods and speed-lacing eyelets for immediate lockdown fit.',
    visual: {
      silhouette: 'high-top',
      primaryColor: '#dc2626', // infrared
      secondaryColor: '#374151', // charcoal
      accentColor: '#fbbf24', // golden flash
      soleColor: '#111827', // dark sole
      trimColor: '#f97316'
    }
  },
  {
    id: 'snk-07',
    name: 'Quantum Street \'86',
    colorway: 'Retro Pine / Gum Bottom',
    releaseYear: 1986,
    price: 155,
    availability: 'In Stock',
    availableSizes: ['US 7', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    description: 'A beloved everyday skate and casual staple, featuring supple forest green pigskin suede, contrast whipstitch detailing, and an ultra-durable sticky natural gum cupsole.',
    visual: {
      silhouette: 'court',
      primaryColor: '#15803d', // pine green
      secondaryColor: '#f5f5f4', // warm chalk
      accentColor: '#d97706', // amber gum
      soleColor: '#b45309', // genuine gum brown
      trimColor: '#166534'
    }
  },
  {
    id: 'snk-08',
    name: 'Nova Dunker Low',
    colorway: 'Hyper Cobalt / Pure White',
    releaseYear: 1998,
    price: 140,
    availability: 'Restocking Soon',
    availableSizes: ['US 8', 'US 9', 'US 9.5', 'US 10', 'US 11'],
    description: 'Clean two-tone collegiate color blocking built with smooth leather panels, padded low-cut collar, and a circular pivot tread pattern crafted for seamless court-to-street transitions.',
    visual: {
      silhouette: 'low-top',
      primaryColor: '#2563eb', // royal cobalt
      secondaryColor: '#ffffff', // pure white
      accentColor: '#1d4ed8', // dark cobalt
      soleColor: '#ffffff', // white midsole
      trimColor: '#1e40af'
    }
  },
  {
    id: 'snk-09',
    name: 'Prism Strata \'91',
    colorway: 'Laser Purple / Acid Lime',
    releaseYear: 1991,
    price: 180,
    availability: 'Vault Reserve',
    availableSizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    description: 'An unapologetic ode to early 90s crossover sport aesthetics. Features vibrant neon neoprene inner booties, molded external heel cage, and lightweight blown rubber outsole lugs.',
    visual: {
      silhouette: 'runner',
      primaryColor: '#7c3aed', // laser purple
      secondaryColor: '#84cc16', // acid lime
      accentColor: '#f43f5e', // punch pink
      soleColor: '#18181b', // onyx black sole
      trimColor: '#5b21b6'
    }
  },
  {
    id: 'snk-10',
    name: 'Orbit Trail \'95',
    colorway: 'Desert Clay / Canyon Rust',
    releaseYear: 1995,
    price: 165,
    availability: 'In Stock',
    availableSizes: ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11', 'US 12'],
    description: 'Built for rugged off-road exploration and inner-city weather resistance, showcasing water-repellent nubuck uppers, speckled rock guard midsoles, and multidirectional lug treads.',
    visual: {
      silhouette: 'skate',
      primaryColor: '#c2410c', // canyon rust
      secondaryColor: '#78716c', // desert stone
      accentColor: '#e0e7ff', // mist blue
      soleColor: '#44403c', // speckled granite
      trimColor: '#9a3412'
    }
  },
  {
    id: 'snk-11',
    name: 'HyperStep 2000',
    colorway: 'Cyber Platinum / Neon Blue',
    releaseYear: 2000,
    price: 195,
    availability: 'Limited Release',
    availableSizes: ['US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5'],
    description: 'Millennium-era futurism defined: molded seamless synthetic ribs over breathable stretch mesh, holographic tongue emblems, and full-length visible multi-chamber air cushioning.',
    visual: {
      silhouette: 'runner',
      primaryColor: '#0284c7', // neon blue
      secondaryColor: '#e2e8f0', // cyber platinum
      accentColor: '#06b6d4', // cyan shimmer
      soleColor: '#0f172a', // deep space sole
      trimColor: '#0369a1'
    }
  },
  {
    id: 'snk-12',
    name: 'Metro Glide \'87',
    colorway: 'Bordeaux Wine / Bone',
    releaseYear: 1987,
    price: 170,
    availability: 'In Stock',
    availableSizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    description: 'An elegant vintage runner boasting rich wine suede overlays, breathable ripstop nylon side underlays, and a vintage dual-density foam wedge midsole for all-day comfort.',
    visual: {
      silhouette: 'court',
      primaryColor: '#881337', // bordeaux
      secondaryColor: '#f5f5f4', // bone
      accentColor: '#fb7185', // rose accent
      soleColor: '#e7e5e4', // bone sole
      trimColor: '#4c0519'
    }
  },
  {
    id: 'snk-13',
    name: 'Echo Tempo Mid',
    colorway: 'Monochrome Shadow / Cool Grey',
    releaseYear: 1993,
    price: 150,
    availability: 'In Stock',
    availableSizes: ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 11', 'US 12'],
    description: 'Understated stealth aesthetic highlighting premium brushed nubuck and ballistic canvas panels. Designed with an adjustable mid-foot hook-and-loop security strap for custom fit.',
    visual: {
      silhouette: 'high-top',
      primaryColor: '#475569', // cool slate
      secondaryColor: '#0f172a', // shadow black
      accentColor: '#cbd5e1', // cool grey
      soleColor: '#334155', // slate sole
      trimColor: '#1e293b'
    }
  },
  {
    id: 'snk-14',
    name: 'Radiant Court \'89',
    colorway: 'University Gold / Obsidian',
    releaseYear: 1989,
    price: 165,
    availability: 'Limited Release',
    availableSizes: ['US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12'],
    description: 'Championship heritage captured in crisp athletic leather. Highlights include an embroidered padded tongue, ventilation channels on the lateral quarter, and a high-abrasion herringbone outsole.',
    visual: {
      silhouette: 'court',
      primaryColor: '#ca8a04', // university gold
      secondaryColor: '#0f172a', // obsidian
      accentColor: '#ffffff', // bright white
      soleColor: '#f8fafc', // crisp court sole
      trimColor: '#a16207'
    }
  },
  {
    id: 'snk-15',
    name: 'Solstice Wave \'97',
    colorway: 'Aquamarine / Hot Coral',
    releaseYear: 1997,
    price: 205,
    availability: 'Vault Reserve',
    availableSizes: ['US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'],
    description: 'Dynamic flowing wave patterns mirroring oceanic tides, integrated with 3M reflective piping and a sculpted polyurethane chassis built to turn heads on any boulevard.',
    visual: {
      silhouette: 'runner',
      primaryColor: '#0891b2', // aquamarine
      secondaryColor: '#fb7185', // hot coral
      accentColor: '#fef08a', // sunrise yellow
      soleColor: '#164e63', // ocean deep sole
      trimColor: '#0e7490'
    }
  },
  {
    id: 'snk-16',
    name: 'Phantom Strata High',
    colorway: 'Triple Onyx / Carbon',
    releaseYear: 1999,
    price: 220,
    availability: 'Limited Release',
    availableSizes: ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12', 'US 13'],
    description: 'The heavyweight grail of late-90s street culture. Constructed with carbon-fiber weave accents, matte tumbled leather, and an encapsulated shock-absorption heel unit.',
    visual: {
      silhouette: 'high-top',
      primaryColor: '#18181b', // onyx black
      secondaryColor: '#27272a', // carbon dark
      accentColor: '#ef4444', // subtle red badge accent
      soleColor: '#09090b', // deep black sole
      trimColor: '#3f3f46'
    }
  }
];
