'use client';

import { motion } from 'framer-motion';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-28 sm:px-6 lg:px-8 sm:py-32"
    >
      {children}
    </motion.div>
  );
}
