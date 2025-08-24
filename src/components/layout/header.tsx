'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { navLinks } from '@/content/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeLinkClasses = 'text-primary font-semibold';

  return (
    <>
        {/* className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || isMobileMenuOpen ? 'bg-background shadow-md' : 'bg-transparent'
        )} */}
      <header
        className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-md'}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center gap-6">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
              <Logo className="h-12 w-auto text-primary" />
              <span className="font-headline md:text-2xl text-lg font-bold whitespace-nowrap">KV PACKAGING SOLUTIONS</span>
            </Link>
            {/* Center: Nav */}
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'text-sm font-medium tracking-wide transition-colors hover:text-primary',
                      pathname === link.href ? activeLinkClasses : ''
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            {/* Right: CTA */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <Button asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
            {/* Mobile menu trigger */}
            <div className="lg:hidden ml-auto">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className={cn(
                      'text-2xl font-headline font-medium transition-colors hover:text-primary',
                       pathname === link.href ? activeLinkClasses : ''
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="w-full mt-8">
                  <Link href="/contact" onClick={toggleMobileMenu}>Get a Quote</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
