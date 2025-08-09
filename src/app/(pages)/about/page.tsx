import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, values, and people behind KVS Packaging.',
};

const leadership = [
    { name: 'Person 1', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', hint: 'person portrait' },
    { name: 'Person 2', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1580852300654-034f03565573', hint: 'woman portrait' },
    { name: 'Person 3', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19', hint: 'man portrait' },
    { name: 'Person 4', role: 'Sustainability Officer', image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d', hint: 'person face' },
]

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
        <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" data-ai-hint="team meeting" width={1200} height={500} alt="Our team" className="rounded-lg object-cover w-full" />
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
            {leadership.map((person) => (
                <Card key={person.name} className="text-center">
                    <CardHeader className="p-0">
                        <Image src={person.image} data-ai-hint={person.hint} width={300} height={300} alt={person.name} className="rounded-t-lg object-cover w-full aspect-square" />
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
