import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { processes } from '@/content/data';

export const metadata: Metadata = {
  title: 'Process | KV Packaging Solutions',
  description: 'Core manufacturing and quality processes that enable precision corrugated & corrugated packaging performance.'
};

export default function ProcessPage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Manufacturing Process</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Integrated converting, finishing and quality assurance stages that drive throughput reliability, structural integrity and consistent brand presentation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processes.map(proc => (
          <Card key={proc.slug} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
              {/* <div className="relative w-full h-56">
                <Image src={proc.image} alt={proc.name} fill className="object-cover" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
              </div> */}
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{proc.name}</CardTitle>
              <CardDescription className="flex-grow">{proc.description}</CardDescription>
              <Button asChild className="mt-4 w-full">
                <Link href={`/process/${proc.slug}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
