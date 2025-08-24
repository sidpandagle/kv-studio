import Link from 'next/link';
import { Logo } from './logo';
import { navLinks } from '@/content/data';

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-12 w-auto text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">KV PACKAGING SOLUTIONS</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              High-performance, sustainable packaging engineered for your brand.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          {/* Newsletter removed as requested */}
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KV PACKAGING SOLUTIONS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
