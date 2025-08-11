import { notFound } from 'next/navigation';
import { productCategories } from '@/content/data';
import Image from 'next/image';
import Link from 'next/link';

// Example extra details for each product type
const productDetails: Record<string, { features: string[]; useCases: string[] }> = {
  'corrugated-boxes': {
    features: [
      'Triple-layered strength for heavy-duty shipping',
      'Custom sizes and printing available',
      '100% recyclable and made from recycled content',
    ],
    useCases: [
      'E-commerce shipping',
      'Industrial packaging',
      'Bulk storage',
    ],
  },
  'folding-cartons': {
    features: [
      'High-quality offset printing',
      'Gloss, matte, or soft-touch finishes',
      'Food-safe and retail-ready',
    ],
    useCases: [
      'Retail packaging',
      'Cosmetics',
      'Pharmaceuticals',
    ],
  },
  'flexible-pouches': {
    features: [
      'Lightweight and space-saving',
      'Moisture and oxygen barrier',
      'Custom shapes and resealable options',
    ],
    useCases: [
      'Snacks and dry foods',
      'Liquids and gels',
      'Pet food',
    ],
  },
  'labels-stickers': {
    features: [
      'Vivid color and crisp detail',
      'Weatherproof and durable',
      'Easy peel-and-stick application',
    ],
    useCases: [
      'Product branding',
      'Promotional campaigns',
      'Logistics and barcoding',
    ],
  },
  'rigid-boxes': {
    features: [
      'Luxury rigid construction',
      'Magnetic or ribbon closures',
      'Premium unboxing experience',
    ],
    useCases: [
      'Jewelry and watches',
      'Electronics',
      'Gift packaging',
    ],
  },
  'custom-inserts': {
    features: [
      'Precision die-cut for perfect fit',
      'Protects and displays products',
      'Eco-friendly material options',
    ],
    useCases: [
      'Electronics',
      'Glassware',
      'Subscription boxes',
    ],
  },
};

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Await params as required by Next.js dynamic route API
  const { slug } = await Promise.resolve(params);

  const product = productCategories.find(
    (cat) =>
      cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!product) return notFound();

  const details = productDetails[slug] || { features: [], useCases: [] };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <Link href="/products" className="inline-block mb-8 text-primary hover:underline font-semibold">&larr; Back to Products</Link>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
              priority
            />
          </div>
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
