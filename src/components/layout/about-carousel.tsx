"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
export function AboutCarousel() {
  const sliderImages = [
    '/images/slider/slider1.png',
    '/images/slider/slider2.jpg',
    // '/images/slider/slider3.png',
    '/images/slider/slider4.png',
    // '/images/slider/slider5.jpg',
    '/images/slider/slider6.jpg',
    // '/images/slider/slider7.jpg',
    '/images/slider/slider8.jpg',
    // '/images/slider/slider9.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="relative w-full h-96 mt-8 md:mt-0 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
      {/* Auto-scrolling image carousel */}
      <div className="relative w-full h-full">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`Packaging solution ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width:768px) 80vw, 40vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {sliderImages.map((_, index) => (
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
    </div>

  );
}
