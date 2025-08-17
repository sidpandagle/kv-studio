import type { Metadata } from 'next';
import { Factory, Gauge, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Capabilities & Quality',
  description: 'Explore our manufacturing capabilities, quality systems and engineering-driven optimization.',
};

const pillars = [
  {
    icon: Factory,
    title: 'Lean Manufacturing',
    description: 'Balanced workflows, rapid changeovers & preventive maintenance ensure consistent throughput.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Compression, edge crush & fit validation integrated into each production cycle.'
  },
  {
    icon: Gauge,
    title: 'Engineering Optimization',
    description: 'Data-driven selection of board grade, flute & corrugated thickness for performance-to-cost balance.'
  }
];

export default function CapabilitiesPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Capabilities & Quality Framework
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Our Supa MIDC facility integrates lean manufacturing, rigorous testing and engineering analytics to deliver reliable corrugated & corrugated solutions with accelerated deployment timelines.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, index) => (
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
    </div>
  );
}
