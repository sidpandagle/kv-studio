import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AboutCarousel } from '@/components/layout/about-carousel';

export const metadata: Metadata = {
  title: 'About KV Packaging Solutions',
  description: 'Corrugated & corrugated packaging specialists delivering customized, sustainable protection.',
};

// Placeholder leadership data – replace with real team photos when available
const leadership = [
  // { name: 'Gahinath Vishwasrao', phone: 9763021933 },
  { name: 'Shrikant Khodade', phone: "9975781200" + ' / ' + "8858548787" },
  { name: 'Amar Vishwasrao', phone: "9763021933" + ' / ' + "9766520651" },
  // { name: 'Team Member 4', role: 'Sustainability', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=60' },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">
          Purpose-Built Protective Packaging
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
          KV PACKAGING SOLUTIONS delivers high-performance Corrugated Boxes and Board from our SUPA MIDC facility serving White Goods, Industrial, FMCG, Agriculture and Automotive sectors with Reliability and Agility.
        </p>
      </section>

      <section>
        {/* <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=60"
            alt="Team meeting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div> */}
        <AboutCarousel />
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold">Mission</h2>
            <p className="text-muted-foreground">To empower businesses with sustainable, robust packaging solutions that safeguard their products and elevate their brand—driven by innovation, customer satisfaction & environmental stewardship.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold">What Sets Us Apart</h2>
            <p className="text-muted-foreground">Industrial-grade materials, precise converting, rapid customization & a consultative approach ensure the right balance of performance, cost & sustainability.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-bold mb-6 text-center">Key Capabilities & Achievements</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M3 7l9-4 9 4v6c0 5-4 9-9 9s-9-4-9-9V7z" />
                  <path d="M9 21V9h6v12" />
                </svg>
              ),
              text: "Cutting-edge manufacturing plant in Supa MIDC",
            },
            {
              icon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M4 17v-5a2 2 0 012-2h12a2 2 0 012 2v5" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                </svg>
              ),
              text: "Serving Industrial, White Goods, FMCG, Agriculture & Automotive supply chains",
            },
            {
              icon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="18" height="10" x="3" y="7" rx="2" />
                  <path d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2" />
                </svg>
              ),
              text: "Specialization in Regular Slotted Carton & Half Slotted Container (HSC) variants for ergonomic loading",
            },
            // {
            //   icon: (
            // <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            //   <circle cx="12" cy="12" r="10" />
            //   <path d="M8 12l2 2 4-4" />
            // </svg>
            //   ),
            //   text: "Customized corrugated board solutions for cushioning, layering & structural reinforcement",
            // },
            {
              icon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                </svg>
              ),
              text: "Quality focus: compression, edge crush & transit integrity validation",
            },
            {
              icon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
              text: "Agile prototyping enabling faster packaging line integration",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-muted/40 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="text-base text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Leadership & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {leadership.map((person, index) => (
            <Card key={person.name} className="text-center overflow-hidden">
              <CardHeader className="p-0">
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-lg">{person.name}</CardTitle>
                <p className="text-sm text-primary">{person.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
