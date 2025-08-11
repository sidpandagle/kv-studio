import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, values, and people behind KVS Packaging.',
};

const leadership = [
  { name: 'Person 1', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=60' },
  { name: 'Person 2', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60' },
  { name: 'Person 3', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=60' },
  { name: 'Person 4', role: 'Sustainability Officer', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=60' },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Engineering a Better Package
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
          For over 20 years, KVS Packaging has been a leader in innovative and sustainable packaging solutions. Our journey is one of passion, precision, and a deep commitment to our clients and the environment.
        </p>
      </section>

      <section>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=60"
            alt="Team meeting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold">Our Mission</h2>
                <p className="text-muted-foreground">To deliver exceptional packaging that combines cutting-edge design, high-performance materials, and a steadfast commitment to sustainability, empowering our clients to succeed while protecting our planet.</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-headline font-bold">Our Vision</h2>
                <p className="text-muted-foreground">To be the world's most trusted and innovative packaging partner, pioneering a future where all packaging is circular and contributes positively to the global ecosystem.</p>
            </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
                <Card key={person.name} className="text-center overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 25vw, 25vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="font-headline text-lg">{person.name}</CardTitle>
                    <p className="text-sm text-primary">{person.role}</p>
                  </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
