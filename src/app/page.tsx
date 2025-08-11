import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Leaf } from 'lucide-react';
import { productCategories } from '@/content/data';
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
      {/* <section className="relative w-full flex items-center justify-center py-20 md:py-32 bg-white overflow-hidden border-b border-primary/10">
        <div className="container relative z-10 mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4 md:px-8">
          <div className="flex-1 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-4 py-1 mb-4 text-sm font-semibold tracking-wide shadow-md">
              <Leaf className="h-4 w-4 text-green-200 animate-bounce" />
              Eco-Forward Thinking
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black tracking-tight mb-4 text-green-700">
              <span className="block">Packaging That</span>
              <span className="text-primary">Inspires &amp; Endures</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl">
              We deliver packaging that’s as bold as your brand and as responsible as your mission. Discover solutions that combine aesthetics, strength, and sustainability—without compromise.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="font-headline bg-green-700 text-white hover:bg-green-800">
                <Link href="/products">Our Range</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline border-green-700 text-green-700 hover:bg-green-50">
                <Link href="/about">Meet the Team</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-80 h-96 md:w-[28rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-8 border-primary/10 bg-gradient-to-tr from-green-100 via-white to-green-50 flex items-end">
              <Image
                src="/images/4.jpg"
                alt="Premium sustainable packaging"
                fill
                className="object-cover object-bottom"
                sizes="(max-width:768px) 80vw, 40vw"
                priority={false}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-700/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </section> */}
            {/* --- HERO SECTION ALTERNATIVE 5 --- */}
      <section className="relative w-full flex items-center justify-center py-24 md:py-40 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 overflow-hidden">
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
            Minimal Impact, Maximum Performance
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our minimalist packaging solutions are designed to reduce waste and elevate your brand’s elegance. Choose simplicity that speaks volumes for the planet and your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-headline bg-zinc-600 text-white hover:bg-zinc-700">
              <Link href="/products">Minimal Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-headline border-zinc-600 text-zinc-700 hover:bg-zinc-50">
              <Link href="/contact">Contact Minimalist Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-headline">
              Our Products
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Packaging for Every Need
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From robust corrugated boxes to elegant folding cartons, we provide a wide range of packaging solutions tailored to your industry.
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
                Our facilities are equipped with the latest technology to deliver high-quality, custom packaging solutions with precision and speed.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">Custom Design & Prototyping</h3>
                    <p className="text-muted-foreground">Collaborate with our experts to create the perfect packaging.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">High-Volume Production</h3>
                    <p className="text-muted-foreground">Scalable manufacturing to meet your demand.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-headline font-semibold">Quality Assurance</h3>
                    <p className="text-muted-foreground">Rigorous testing to ensure your product is protected.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                '/images/1.jpg',
                '/images/2.jpg',
                '/images/3.jpg',
                '/images/4.jpg',
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
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Committed to Sustainability</h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in a greener future. Our sustainable packaging solutions help reduce environmental impact while protecting your products with innovative, eco-friendly materials and designs.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-headline">
              <Link href="/sustainability">Learn About Our Sustainability <Leaf className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tighter text-center sm:text-5xl mb-12">
            What Our Clients Say
          </h2>
          <Carousel className="w-full max-w-8xl mx-auto">
            <CarouselContent>
              {[...Array(9)].map((_, index) => (
                <CarouselItem className="md:basis-1/3" key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                       <div className="relative w-24 h-24 rounded-full mb-4 overflow-hidden">
                         <Image
                           src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=60"
                           alt="Client portrait"
                           fill
                           className="object-cover"
                         />
                       </div>
                      <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
                        "KVS Packaging transformed our shipping process. Their custom solutions are innovative, sustainable, and have significantly reduced our costs."
                      </p>
                      <h3 className="font-headline font-semibold">Jane Doe, CEO</h3>
                      <p className="text-sm text-muted-foreground">Eco-Friendly Goods Inc.</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter md:text-4xl/tight">
              Ready to elevate your packaging?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss your needs. Our team is ready to help you create the perfect packaging solution.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="font-headline w-full">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
