import type { Metadata } from 'next';
import SuggestionForm from './suggestion-form';
import { Leaf, Recycle, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sustainability',
  description: 'Learn about our commitment to sustainability and use our AI tool to find eco-friendly packaging.',
};

const commitments = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'We prioritize recycled, recyclable, and biodegradable materials to minimize environmental impact.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Our designs promote reusability and recyclability, closing the loop on packaging waste.',
  },
  {
    icon: Globe,
    title: 'Carbon Footprint Reduction',
    description: 'We continuously optimize our manufacturing processes to reduce energy consumption and emissions.',
  },
];

export default function SustainabilityPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Our Commitment to a Greener Planet
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
          At KVS Packaging, sustainability is at the core of everything we do. We are dedicated to providing innovative packaging solutions that protect your products and our planet.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {commitments.map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                <item.icon className="h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <Leaf className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            AI-Powered Sustainability Suggestions
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg/relaxed">
            Not sure where to start? Use our intelligent tool to get personalized, sustainable packaging recommendations based on your product's specific needs.
          </p>
        </div>
        <div className="mt-8">
          <SuggestionForm />
        </div>
      </section>
    </div>
  );
}
