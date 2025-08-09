import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingQuoteButton } from '@/components/layout/floating-quote-button';

export const metadata: Metadata = {
  title: {
    default: 'KVS Packaging Reimagined',
    template: '%s | KVS Packaging Reimagined',
  },
  description: 'High-performance, sustainable packaging engineered for your brand.',
  openGraph: {
    title: 'KVS Packaging Reimagined',
    description: 'High-performance, sustainable packaging engineered for your brand.',
    url: 'https://kvspackaging.com', // Replace with actual URL
    siteName: 'KVS Packaging Reimagined',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KVS Packaging Reimagined',
    description: 'High-performance, sustainable packaging engineered for your brand.',
    // site: '@kvspackaging', // Replace with actual Twitter handle
    // creator: '@kvspackaging',
    images: ['https://placehold.co/1200x630.png'], // Replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
        <Toaster />
      </body>
    </html>
  );
}
