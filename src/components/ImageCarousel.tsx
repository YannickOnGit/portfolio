// ImageCarousel.tsx
import { useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="text-gray-200 bg-zinc-900/50 gap-6 px-6 xl:px-0 ">
      <div className="max-w-screen-xl mx-auto px-0 py-16 relative">
        {/* Image Container (for hover effect) */}
        <div className="relative group">
          <img
            src={images[current].src}
            className="border-zinc-700 border shadow-2xl mx-auto"
            alt={images[current].alt}
          />

          {/* Left Arrow Bar */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/50 hover:bg-zinc-700/70 px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Bar */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-stone-400/80 hover:bg-zinc-700/70 px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <p className="mt-4 text-zinc-500 italic text-center">
          {images[current].alt}
        </p>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                index === current ? "bg-cyan-400" : "border-2 border-stone-100"
              } hover:bg-cyan-300`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
