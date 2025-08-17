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
    image: '/images/products/Regular Slotted Carton.jpg'
  },
  {
    name: 'Half Slotted Carton (HSC)',
    slug: 'half-slotted-carton-hsc',
    description: 'Single set of flaps enabling slide-over loading—ideal for appliances & FMCG overpacks.',
    hint: 'half slotted carton hsc',
    image: '/images/products/Half-Slotted-Container.webp'
  },
  {
    name: 'Full Overlap Design Carton',
    slug: 'full-overlap-design-carton',
    description: 'Equal length flaps fully overlap for enhanced top & bottom stacking strength and impact protection.',
    hint: 'full overlap carton',
    image: '/images/products/Fulloverlap.webp'
  },
  {
    name: 'Full Telescope Design Carton (FTD)',
    slug: 'full-telescope-design-carton-ftd',
    description: 'Two-piece telescoping design for horizontal stacking strength—flat packed & self-assembled without tape.',
    hint: 'full telescope design carton',
    image: '/images/products/full-telescope-design-style-carton-FTD-1.jpg'

  },
  {
    name: 'Die Cut Boxes',
    slug: 'die-cut-boxes',
    description: 'Quick assembly die-cut formats with auto-lock bottoms for premium small parcel presentation & speed.',
    hint: 'die cut box',
    image: '/images/products/die-cut-box.webp'
  },
  {
    name: 'Partitioners & Dividers',
    slug: 'partitioners-dividers',
    description: 'Intersecting corrugated grids creating pockets for separation, rigidity & part protection inside master cartons.',
    hint: 'partitioners dividers',
    image: '/images/products/PartitionsAndDivders.jpg'
  },
  {
    name: 'Carton with Top Lid',
    slug: 'carton-with-top-lid',
    description: 'Two-piece set with friction-fit lid delivering improved top-down protection & faster close—ideal for bulk materials.',
    hint: 'carton with top lid',
    image: '/images/products/carton-with-top-lid.webp'
  },
  {
    name: 'Heavy Duty Box',
    slug: 'heavy-duty-box',
    description: 'High stacking, export-ready heavy duty corrugated engineered for dense or CKD automotive & industrial loads.',
    hint: 'heavy duty box',
    image: '/images/products/HeavyDutyBox.jpg'
  },
  {
    name: 'Tray Form Boxes',
    slug: 'tray-form-boxes',
    description: 'One-piece bottom tray formats (glued / self-locking / stitched) for beverage multipacks & chilled produce.',
    hint: 'tray form boxes',
    image: '/images/products/tray-boxes.jpg'
  },
  // {
  //   name: 'Innovative Products',
  //   slug: 'innovative-products',
  //   description: 'Custom engineered corrugated structures & value-added concepts tailored to emerging application needs.',
  //   hint: 'innovative corrugated products',
  //   image: 'https://aligngroup.co.in/wp-content/uploads/2022/09/Innovative-Products.png'
  // }
];

export const industriesServed = [
  {
    name: 'Electronics',
    description: 'Electronics, fragile equipment & specialized use cases needing tailored protection.'
  },
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
    description: 'Ventilated corrugated & corrugated solutions ideal for fresh produce & farm supplies.'
  },
  {
    name: 'Automotive',
    description: 'Custom-fit boxes & inserts for automotive components improving assembly line efficiency.'
  },
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
    description: 'Fully automated 3 & 5 ply corrugation line (1600 mm deckle, 100 m/min) with PMS-driven order change and inline board transfer.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.45-PM-6.jpeg',
    features: [
      '1600 mm deckle for large format production',
      'Up to 100 meters per minute speed',
      'Supports both 3 & 5 ply with vertical flute',
      'Internal board handling without forklifts or pallets',
      'Automatic glue control and synchronized order changes via PMS',
      'Single joint conversion for reduced material and joints',
    ]
  },
  {
    name: 'Printing',
    slug: 'printing',
    description: 'Jumbo 2-colour printer–slotter–die cutter (1600 x 3000 mm) for high-quality, consistent graphics on vertical flute packaging.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.45-PM-7.jpeg',
    features: [
      'High-speed 2-colour printer–slotter–die cutter',
      'Handles jumbo 1600 x 3000 mm formats',
      'Smooth board handling with roller conveyors for infeed and outfeed',
      'Delivers consistent print quality for LED, WM, RAC & FMCG packaging',
      'Converts horizontal flute refrigerator boxes to vertical flute',
    ]
  },
  {
    name: 'Auto Folder Gluer With Stitcher And Bundling',
    slug: 'auto-folder-gluer-with-stitcher-and-bundling',
    description: 'High-speed automatic folder gluer line with fully automated bundling, ideal for FMCG packaging.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM.jpeg',
    features: [
      'Automatic high-speed folding and gluing',
      'Fully automated bundling system for efficient downstream handling'
    ]
  },
  {
    name: '2 Piece Auto Stitcher',
    slug: '2-piece-auto-stitcher',
    description: 'Automatic stitching for large format and single piece boxes used in refrigerators, automobiles, LED, WM & RAC packaging.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM-3.jpeg',
    features: [
      'Handles large format 2 piece auto stitching for refrigerator and automobile boxes',
      'Dedicated lines for 2 piece auto stitching of LED, WM & RAC boxes'
    ]
  },
  {
    name: 'Quality Assurance',
    slug: 'quality-assurance',
    description: 'Comprehensive QA with a skilled team and a fully equipped lab for incoming, in-line, and outgoing inspections.',
    image: 'https://craftedsolutions.in/wp-content/uploads/2020/10/WhatsApp-Image-2020-10-22-at-10.41.46-PM.jpeg',
    features: [
      'Fully equipped quality control laboratory',
      'Skilled QA team conducting incoming, in-line, and outgoing inspections'
    ],
    equipment: [
      'GSM Tester & GSM Cutter',
      'Bursting Strength Tester (Paper)',
      'Bursting Strength Tester (Board)',
      'COBB Tester',
      'Ink Rub Tester',
      'Moisture Meter Tester',
      'Hot Air Oven',
      'Box Compression Strength Tester',
      'Crush Resistance Tester',
      'B4 Cup (Ink Viscosity)',
      'RCT Sample Cutter',
    ]
  }
];
