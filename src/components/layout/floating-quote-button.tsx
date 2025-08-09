'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function FloatingQuoteButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button asChild size="lg" className="rounded-full shadow-lg">
        <Link href="/contact">Get a Quote</Link>
      </Button>
    </motion.div>
  );
}
