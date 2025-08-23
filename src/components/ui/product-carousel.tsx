"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductCarouselProps {
  images: string[];
  productName: string;
  productClass: string;
}

export default function ProductCarousel({ images, productName, productClass }: ProductCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
      {/* Auto-scrolling image carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              fill
              style={{ objectFit: productClass.includes('object-scale-down') ? 'scale-down' : 'cover' }}
              sizes="(max-width:768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Slide indicators - only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}