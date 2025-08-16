export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Process', href: '/process' },
  { name: 'Quality', href: '/quality' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  hint: string;
  image: string;
}

export const productCategories: ProductCategory[] = [
  {
    name: 'Regular Slotted Carton (RSC)',
    slug: 'regular-slotted-carton-rsc',
    description: 'Preferred corrugated shipper with four flaps top & bottom and a manufacturer\'s joint—versatile for FMCG & appliance logistics.',
    hint: 'regular slotted carton rsc',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Regular-Slotted-Container.png'
  },
  {
    name: 'Half Slotted Carton (HSC)',
    slug: 'half-slotted-carton-hsc',
    description: 'Single set of flaps enabling slide-over loading—ideal for appliances & FMCG overpacks.',
    hint: 'half slotted carton hsc',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Half-Sloted-Containers-1.png'
  },
  {
    name: 'Full Overlap Design Carton',
    slug: 'full-overlap-design-carton',
    description: 'Equal length flaps fully overlap for enhanced top & bottom stacking strength and impact protection.',
    hint: 'full overlap carton',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/1-300x271-1.png'
  },
  {
    name: 'Full Telescope Design Carton (FTD)',
    slug: 'full-telescope-design-carton-ftd',
    description: 'Two-piece telescoping design for horizontal stacking strength—flat packed & self-assembled without tape.',
    hint: 'full telescope design carton',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Full-Tele-Design.png'
  },
  {
    name: 'Die Cut Boxes',
    slug: 'die-cut-boxes',
    description: 'Quick assembly die-cut formats with auto-lock bottoms for premium small parcel presentation & speed.',
    hint: 'die cut box',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Die-Cut-Boxes-1.png'
  },
  {
    name: 'Partitioners & Dividers',
    slug: 'partitioners-dividers',
    description: 'Intersecting corrugated grids creating pockets for separation, rigidity & part protection inside master cartons.',
    hint: 'partitioners dividers',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Dividers-1.png'
  },
  {
    name: 'Carton with Top Lid',
    slug: 'carton-with-top-lid',
    description: 'Two-piece set with friction-fit lid delivering improved top-down protection & faster close—ideal for bulk materials.',
    hint: 'carton with top lid',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Carton-with-Lid.png'
  },
  {
    name: 'Heavy Duty Box',
    slug: 'heavy-duty-box',
    description: 'High stacking, export-ready heavy duty corrugated engineered for dense or CKD automotive & industrial loads.',
    hint: 'heavy duty box',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Heavy-duty-box.png'
  },
  {
    name: 'Tray Form Boxes',
    slug: 'tray-form-boxes',
    description: 'One-piece bottom tray formats (glued / self-locking / stitched) for beverage multipacks & chilled produce.',
    hint: 'tray form boxes',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Trays.png'
  },
  {
    name: 'Innovative Products',
    slug: 'innovative-products',
    description: 'Custom engineered corrugated structures & value-added concepts tailored to emerging application needs.',
    hint: 'innovative corrugated products',
    image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Innovative-Products.png'
  }
];

export const industriesServed = [
  {
    name: 'Industrial Manufacturing',
    description: 'Load-bearing packaging for machinery parts & engineered goods ensuring secure transit.'
  },
  {
    name: 'FMCG',
    description: 'Vibrant, printable surface packaging protecting goods from shelf to shipping.'
  },
  {
    name: 'Agriculture',
    description: 'Ventilated corrugated & honeycomb solutions ideal for fresh produce & farm supplies.'
  },
  {
    name: 'Automotive',
    description: 'Custom-fit boxes & inserts for automotive components improving assembly line efficiency.'
  },
  {
    name: 'Custom / Niche',
    description: 'Electronics, fragile equipment & specialized use cases needing tailored protection.'
  }
];

// Manufacturing / operational processes (modeled similar to productCategories)
export interface ProcessSpec {
  name: string;
  slug: string; // precomputed for reliable routing
  description: string;
  image: string;
  features: string[]; // bullet points describing capabilities / highlights
  equipment?: string[]; // optional detailed equipment list (e.g., QA lab instruments)
  extraImages?: string[]; // optional additional imagery for detail page
}

export const processes: ProcessSpec[] = [
  {
    name: 'High Speed 5 Ply Auto Board Plant',
    slug: 'high-speed-5-ply-auto-board-plant',
    description: '2250 mm deckle, high-speed (220 m/min) fully automated 3 & 5 ply corrugation with PMS-driven order change and inline board transfer.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.45-PM-6.jpeg',
    // extraImages: [
    //   'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.45-PM-3.jpeg'
    // ],
    features: [
      'Deckle size 2250 mm enabling large format conversion',
      'High speed up to 220 meters per minute',
      '3 & 5 ply capability with vertical flute conversion',
      'Single joint conversion minimizing material & joints',
      'Auto glue control & synchronized order change via PMS',
      'Automated down stacker output & conveyor fed transfer to printer',
      'Forklift / pallet-free internal board handling reduces damage risk'
    ]
  },
  {
    name: 'Printing',
    slug: 'printing',
    description: 'Jumbo multi-colour printer–slotter–die cutter (2200 x 3600 mm) enabling high quality, consistent vertical flute packaging graphics.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.45-PM-7.jpeg',
    features: [
      'High speed multi-colour printer–slotter–die cutter',
      'Jumbo size 2200 x 3600 mm format',
      'Enables conversion of horizontal flute refrigerator boxes to vertical flute',
      'Supports LED, WM, RAC & FMCG packaging with consistent print quality',
      'Infeed & outfeed board flow on roller conveyors for smooth handling'
    ]
  },
  {
    name: '1 Piece & 2 Piece Auto Stitcher',
    slug: '1-piece-2-piece-auto-stitcher',
    description: 'Large format and single piece automatic stitching for refrigerator, automobile, LED, WM & RAC packaging formats.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM-3.jpeg',
    features: [
      'Large format 1/2 piece auto stitcher for refrigerator & automobile boxes',
      'Dedicated 1 piece auto stitcher lines for LED, WM & RAC boxes'
    ]
  },
  {
    name: 'Auto Folder Gluer',
    slug: 'auto-folder-gluer',
    description: 'High speed automatic folder gluer line with fully automatic bundling for FMCG applications.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM.jpeg',
    features: [
      'High speed automatic folding & gluing',
      'Fully automatic bundling system optimizes downstream handling'
    ]
  },
  {
    name: 'Quality Assurance',
    slug: 'quality-assurance',
    description: 'Skilled QA team with fully equipped lab performing incoming, in-line & outgoing inspections ensuring consistent performance.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM.jpeg',
    features: [
      'Fully equipped quality control laboratory',
      'Skilled QA team executing ILO (Incoming, Line & Outgoing) inspection cycles'
    ],
    equipment: [
      'Box Compression Strength Tester',
      'Hot Air Oven',
      'Bursting Strength Tester (Board)',
      'Bursting Strength Tester (Paper)',
      'Crush Resistance Tester',
      'GSM Tester & GSM Cutter',
      'RCT Sample Cutter',
      'COBB Tester',
      'B4 Cup (Ink Viscosity)',
      'Ink Rub Tester'
    ]
  }
];
