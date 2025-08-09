import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Package, Leaf, Shield } from 'lucide-react';
import { productCategories } from '@/content/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1584441434692-9457c14a4b73"
          alt="Factory background"
          data-ai-hint="factory manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container px-4 md:px-6 text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              High-Performance, Sustainable Packaging
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Engineered for your brand. Designed for the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-headline">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-headline">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
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
                  <Image
                    src={category.image}
                    alt={category.name}
                    data-ai-hint={category.hint}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
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
        <div className="container px-4 md:px-6">
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
                <Image src="https://images.unsplash.com/photo-1558502846-95560595b36a" data-ai-hint="factory machines" width={400} height={400} alt="Factory 1" className="rounded-lg object-cover w-full aspect-square" />
                <Image src="https://images.unsplash.com/photo-1547592180-81f1c442e986" data-ai-hint="packaging design" width={400} height={400} alt="Factory 2" className="rounded-lg object-cover w-full aspect-square" />
                <Image src="https://images.unsplash.com/photo-1526938429442-14ad587c44d3" data-ai-hint="worker factory" width={400} height={400} alt="Factory 3" className="rounded-lg object-cover w-full aspect-square" />
                <Image src="https://images.unsplash.com/photo-1621442344913-08552b0b9758" data-ai-hint="cardboard production" width={400} height={400} alt="Factory 4" className="rounded-lg object-cover w-full aspect-square" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Committed to Sustainability</h2>
            <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in a greener future. Our AI-powered tool helps you find the most sustainable packaging options for your products.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-headline">
              <Link href="/sustainability">Find Eco-Friendly Options <Leaf className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold tracking-tighter text-center sm:text-5xl mb-12">
            What Our Clients Say
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[...Array(3)].map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <Image src={`https://images.unsplash.com/photo-1554151228-14d9def656e4`} data-ai-hint="person portrait" width={100} height={100} alt="Client" className="rounded-full mb-4 object-cover" />
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
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
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
