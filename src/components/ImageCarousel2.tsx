// ImageCarousel.tsx
import { useState } from "react";

export default function ImageCarousel({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="text-gray-200 bg-zinc-900/50 px-6">
      <div className="max-w-screen-xl mx-auto py-16 relative">
        {/* Container with 'group' class to trigger children */}
        <div className="relative group overflow-hidden cursor-pointer rounded-xl">
          <img
            src={images[current].src}
            className="border-zinc-700 border shadow-2xl mx-auto transition-transform duration-700"
            alt={images[current].alt}
          />

          {/* Left Button - Note the 'transition-all' and 'will-change-transform' */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       -translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center bg-black/20 
                       opacity-0 group-hover:opacity-100 
                       translate-x-full group-hover:translate-x-0
                       transition-all duration-500 ease-out will-change-transform"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white drop-shadow-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots with a "soft" glow transition */}
        <div className="flex justify-center mt-8 space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 transition-all duration-500 rounded-full ${
                index === current
                  ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  : "w-2 bg-zinc-600"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
