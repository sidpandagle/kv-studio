import { notFound } from 'next/navigation';
import { processes } from '@/content/data';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return processes.map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default async function ProcessDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const awaited = await params as { slug: string };
  const { slug } = awaited;
  const process = processes.find(p => p.slug === slug);
  if (!process) return notFound();

  return (
    <section className="max-w-8xl mx-auto py-16 px-4">
      <Link href="/process" className="inline-block mb-8 text-primary hover:underline font-semibold">&larr; Back to Process</Link>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src={process.image} alt={process.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" priority />
          </div>
          {process.extraImages && process.extraImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              {process.extraImages.map((img, i) => (
                <div key={i} className="relative w-full aspect-video rounded-lg overflow-hidden border">
                  <Image src={img} alt={`${process.name} ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          )}
        </div> */}
        <div className="flex-1">
          <h1 className="text-3xl font-headline font-bold mb-4">{process.name}</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">{process.description}</p>
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">Key Capabilities</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {process.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
          {process.equipment && process.equipment.length > 0 && (
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">Lab / Equipment</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {process.equipment.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
