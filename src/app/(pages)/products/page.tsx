import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { productCategories } from '@/content/data';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our wide range of sustainable and high-performance packaging solutions.',
};

export default function ProductsPage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Our Packaging Products
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Discover our comprehensive range of packaging solutions, designed to meet the unique needs of various industries with a focus on quality and sustainability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((category) => (
          <Card key={category.name} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
              <div className="relative w-full h-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{category.name}</CardTitle>
              <CardDescription className="flex-grow">{category.description}</CardDescription>
              <Button asChild className="mt-4 w-full">
                <Link href={`/products/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
