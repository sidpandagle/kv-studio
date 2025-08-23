import { notFound } from 'next/navigation';
import { productCategories } from '@/content/data';
import ProductCarousel from '@/components/ui/product-carousel';
import Link from 'next/link';

// Detailed mapping: slug -> features & use cases
const productDetails: Record<string, { features: string[]; useCases: string[] }> = {
  'regular-slotted-carton-rsc': {
    features: [
      'Four flap top & bottom with manufacturer\'s joint',
      'Optimized for stacking & cube efficiency',
      'Supports multiple board grades & flute profiles',
      'Printable exterior for branding & compliance',
      'Cost-effective universal shipper design'
    ],
    useCases: [
      'FMCG master cartons',
      'Appliance & consumer electronics',
      'Automotive aftermarket kits',
      'General distribution & 3PL logistics'
    ]
  },
  'half-slotted-carton-hsc': {
    features: [
      'Single set of flaps enabling slide-over loading',
      'Pairs with a tray or cap for modular closure',
      'Reduced fiber usage for specific load profiles',
      'Custom height adjustments for variable SKUs'
    ],
    useCases: [
      'Large appliance overpacks',
      'FMCG bulk replenishment',
      'In-plant handling sleeves'
    ]
  },
  'full-overlap-design-carton': {
    features: [
      'Full overlap flaps reinforce panel strength',
      'Enhanced edge & face compression performance',
      'Superior puncture & abrasion resistance',
      'Improved load distribution for heavy contents'
    ],
    useCases: [
      'Automotive components',
      'Glass bottles & fragile goods',
      'Dense engineered assemblies'
    ]
  },
  'full-telescope-design-carton-ftd': {
    features: [
      'Two-piece telescoping construction',
      'Horizontal stacking strength & rigidity',
      'Supplied flat; self-assembly without tape',
      'Configurable depth via cap & body overlap'
    ],
    useCases: [
      'Pharmaceutical packaged goods',
      'Fruit & vegetable packaging',
      'Seasonal modular pack formats'
    ]
  },
  'die-cut-boxes': {
    features: [
      'Custom die layouts for structural & aesthetic needs',
      'Auto-lock / crash-lock bottom options',
      'Tight tolerances for automated packing lines',
      'Enhanced retail & unboxing presentation'
    ],
    useCases: [
      'Premium small parcel shipping',
      'Chemical & pharma sampling',
      'Branded e-commerce packaging'
    ]
  },
  'partitioners-dividers': {
    features: [
      'Interlocking cell grid architecture',
      'Improves vertical stacking & load transfer',
      'Pre-assembled or loose supply formats',
      'Protects individual components against abrasion'
    ],
    useCases: [
      'Automotive small parts',
      'Appliance component segregation',
      'FMCG multi-SKU inner packs'
    ]
  },
  'carton-with-top-lid': {
    features: [
      'Two-piece configuration with friction-fit lid',
      'No tape closure required for lid retention',
      'Enhanced top-down compression resistance',
      'Rapid access & reseal during inspection'
    ],
    useCases: [
      'Polymer & chemical batch samples',
      'Bulk pharmaceutical raw materials',
      'Controlled storage applications'
    ]
  },
  'heavy-duty-box': {
    features: [
      'Engineered multi-wall / heavy board grades',
      'High stacking performance for export lanes',
      'Custom reinforcement & pallet interface options',
      'Supports CKD (Completely Knocked Down) shipments'
    ],
    useCases: [
      'Automotive CKD export (bikes / autorickshaw)',
      'Petrochemical & industrial equipment',
      'Electrical & electronic machinery'
    ]
  },
  'tray-form-boxes': {
    features: [
      'One-piece tray footprint',
      'Multiple closure systems (glued / self-lock / stitched)',
      'Stable platform for secondary containment',
      'Optimized for chilled chain ventilation'
    ],
    useCases: [
      'Beverage can multipacks',
      'Cold chain produce storage',
      'Intralogistics staging trays'
    ]
  },
  'innovative-products': {
    features: [
      'Custom engineered geometries',
      'Material optimization for weight reduction',
      'Hybrid structural + branding concepts',
      'Rapid prototype to production workflow'
    ],
    useCases: [
      'Emerging product launches',
      'Value-added protective assemblies',
      'Pilot market packaging trials'
    ]
  }
};

export async function generateStaticParams() {
  return productCategories.map(p => ({ slug: (p as any).slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = productCategories.find((cat: any) => (cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug);

  if (!product) return notFound();

  const details = productDetails[slug] || { features: [], useCases: [] };

  return (
    <section className="max-w-8xl mx-auto py-16 px-4">
      <Link href="/products" className="inline-block mb-8 text-primary hover:underline font-semibold">&larr; Back to Products</Link>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <ProductCarousel productClass={product.class} images={product.image} productName={product.name} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-headline font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <div className="mb-4">
            <h2 className="font-semibold text-lg mb-1">Key Features</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {details.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-1">Common Use Cases</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {details.useCases.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
