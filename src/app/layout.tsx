import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingQuoteButton } from '@/components/layout/floating-quote-button';
import { ThemeSwitcherDev } from '@/components/layout/theme-switcher-dev';

export const metadata: Metadata = {
  title: {
    default: 'KV PACKAGING SOLUTIONS',
    template: '%s | KV PACKAGING SOLUTIONS',
  },
  description: 'High-performance, sustainable packaging engineered for your brand.',
  openGraph: {
    title: 'KV PACKAGING SOLUTIONS',
    description: 'High-performance, sustainable packaging engineered for your brand.',
    url: 'https://kvspackaging.com', // Replace with actual URL
    siteName: 'KV PACKAGING SOLUTIONS',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576092762791-ddc29a265b53?w=1200&h=630&fit=crop', // Replace with actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KV PACKAGING SOLUTIONS',
    description: 'High-performance, sustainable packaging engineered for your brand.',
    // site: '@kvspackaging', // Replace with actual Twitter handle
    // creator: '@kvspackaging',
    images: ['https://images.unsplash.com/photo-1576092762791-ddc29a265b53?w=1200&h=630&fit=crop'], // Replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className="scroll-smooth theme-industrial">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingQuoteButton />
        <ThemeSwitcherDev />
        <Toaster />
      </body>
    </html>
  );
}
