import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Factory, Settings2, Gauge } from 'lucide-react';
import { productCategories, industriesServed } from '@/content/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpg"
            alt="Sustainable packaging factory"
            fill
            priority
            className="object-cover object-center w-full h-full scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/70 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center text-center text-white">
          <span className="inline-flex items-center gap-2 bg-primary/80 rounded-full px-4 py-2 mb-6 text-base font-semibold tracking-wide shadow-lg backdrop-blur-md">
            <Leaf className="h-5 w-5 text-green-300 animate-pulse" />
            Sustainable. Innovative. Impactful.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight drop-shadow-xl mb-4">
            Elevate Your Brand with <span className="text-green-300">Eco-Friendly</span> Packaging
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8 font-medium drop-shadow">
            Premium, sustainable packaging solutions engineered for performance, designed for the planet. Partner with us to make your packaging a force for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-headline text-lg px-8 py-4 shadow-xl bg-green-500 hover:bg-green-600">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-headline text-lg px-8 py-4 shadow-xl bg-white/90 text-primary hover:bg-white">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </section> */}
      {/* --- HERO SECTION ALTERNATIVE 4 --- */}
  <section className="relative w-full flex items-center justify-center py-20 md:py-32 bg-white overflow-hidden border-b border-primary/10">
        <div className="container relative z-10 mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4 md:px-8">
          <div className="flex-1 flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black tracking-tight mb-6 text-zinc-900">
              Precision Packaging. Reliable Performance.
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Custom corrugated (RSC & HSC) and honeycomb systems engineered for protection, line efficiency and optimized material usage.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="font-headline">
                <Link href="/products">View Solutions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-96 mt-8 md:mt-0 md:w-[28rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white flex items-end">
              <Image
                src="/images/001.jpg"
                alt="Premium sustainable packaging"
                fill
                className="object-cover object-bottom"
                sizes="(max-width:768px) 80vw, 40vw"
                priority={false}
              />
            </div>
          </div>
        </div>
        {/* Removed decorative colored blobs */}
      </section>
            {/* --- HERO SECTION ALTERNATIVE 5 --- */}
  {/* <section className="relative w-full flex items-center justify-center py-24 md:py-40 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-zinc-200/30 blur-3xl" />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center px-4">
          <div className="mb-6">
            <Image
              src="/images/5.jpg"
              alt="Minimal eco packaging"
              width={120}
              height={120}
              className="rounded-full border-4 border-zinc-300 shadow-lg mx-auto"
              priority={false}
            />
          </div>
          <span className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-700 rounded-full px-4 py-1 mb-4 text-sm font-semibold tracking-wide">
            <Leaf className="h-4 w-4 text-green-500 animate-pulse" />
            Pure. Responsible. Refined.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4 text-zinc-900">
            MINIMAL IMPACT, MAXIMUM PERFORMANCE & QUALITY
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
            THE PACKAGING SAFETY OF CUSTOMERS’ GOODS IS OUR RESPONSIBILITY. We engineer corrugated & honeycomb solutions that balance strength, sustainability and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-headline bg-zinc-600 text-white hover:bg-zinc-700">
              <Link href="/products">Explore Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-zinc-600 text-zinc-700 hover:bg-zinc-50">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-headline">
              Our Products
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Engineered Packaging Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Focused portfolio specializing in Corrugated RSC / Half Slotted Containers and Honeycomb Board systems—customizable in size, grade, flute, thickness & finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.name} className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-headline">
                Our Capabilities
              </div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                State-of-the-Art Manufacturing
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Wadegavhan facility (near Ranjangaon & Supa MIDC) equipped for precision converting, rapid prototyping & high-volume converting of corrugated & honeycomb structures.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">Custom Design & Prototyping</h3>
                    <p className="text-muted-foreground">Rapid sampling of RSC, HSC & honeycomb panel formats tailored to line ergonomics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">High-Volume Production</h3>
                    <p className="text-muted-foreground">Efficient converting lines enabling consistent, lean delivery cycles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">Quality Assurance</h3>
                    <p className="text-muted-foreground">Material grading, compression integrity & fit validation for reduced transit damage.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                '/images/001.jpg',
                '/images/002.jpg',
                '/images/003.jpg',
                '/images/004.jpg',
              ].map((src, i) => (
                <div key={i} className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt="Manufacturing visual"
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Operational Excellence</h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lean-driven converting, rigorous quality metrics and agile prototyping accelerate deployment while reducing total cost of packaging ownership.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 w-full max-w-5xl mt-4">
              {[{
                icon: Factory,
                title: 'Throughput Reliability',
                desc: 'Balanced production scheduling & preventive maintenance minimize downtime.'
              }, {
                icon: Settings2,
                title: 'Engineering Support',
                desc: 'Collaborative design iterations ensure line compatibility & ergonomic loading.'
              }, {
                icon: Gauge,
                title: 'Performance Analytics',
                desc: 'Data-informed optimization of board grade, flute profile & compression strength.'
              }].map((b,i)=>(
                <Card key={i} className="bg-white border-zinc-200 hover:shadow-md transition-shadow text-left">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-md bg-zinc-900 text-white flex items-center justify-center">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-headline font-semibold text-lg text-zinc-900">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tighter text-center sm:text-5xl mb-12">Testimonials</h2>
          {(() => {
            const testimonials = [
                {
                  quote: 'KV Packaging Solutions delivered precisely what we needed—custom boxes that fit our production line and reduced damage in transit.',
                  client: 'Automotive Components Ltd.',
                  project: 'Half Slotted Container Development'
                },
                {
                  quote: 'Honeycomb board panels gave us strength without weight—our produce arrived protected and fresh.',
                  client: 'AgriFresh Exports',
                  project: 'Honeycomb Board Packaging'
                },
                {
                  quote: 'Reliable, high-quality corrugated packaging with fast turnaround. A trusted partner.',
                  client: 'FMCG Retailer (Confidential)',
                  project: 'Customized Corrugated Packaging'
                }
              ];
            const showArrows = testimonials.length > 4;
            return (
              <Carousel className="w-full max-w-8xl mx-auto">
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem className="md:basis-1/3" key={index}>
                      <Card className="h-full flex">
                        <CardContent className="flex flex-col items-center justify-between p-8 text-center gap-4 h-full">
                          <div className="text-lg text-muted-foreground mb-4 max-w-2xl italic">“{t.quote}”</div>
                          <h3 className="font-headline font-semibold">{t.client}</h3>
                          <p className="text-sm text-muted-foreground">{t.project}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {showArrows && <CarouselPrevious />}
                {showArrows && <CarouselNext />}
              </Carousel>
            );
          })()}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg px-3 py-1 text-sm font-headline">Industries Served</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Versatility Across Sectors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Solutions engineered for performance—from high-volume FMCG to precision automotive components.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 mt-4 lg:grid-cols-5">
            {industriesServed.map(ind => (
              <Card key={ind.name} className="h-full">
                <CardContent className="p-4 flex flex-col">
                  <h3 className="font-headline font-semibold mb-2 text-sm uppercase tracking-wide">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to elevate your packaging performance?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discuss line efficiency, protection goals & sustainability targets with our engineering-led team.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="font-headline w-full">
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
