"use client";
import { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: "/img/coffee1.jpg", alt: "Notre café signature" },
    { src: "/img/coffee6.jpg", alt: "Nos pâtisseries maison" },
    { src: "/img/pic8.jpg", alt: "Notre ambiance chaleureuse" },
    { src: "/img/coffee3.jpg", alt: "Nos cafés d'exception" },
    { src: "/img/pic10.jpg", alt: "Notre établissement au cœur de Lyon" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-16 bg-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center text-[#321B15] font-['Playfair_Display'] mb-8">
          Découvrez notre café
        </h2>

        <div className="relative overflow-hidden rounded-lg shadow-xl">
          {/* Images avec transition plus douce */}
          <div className="relative h-[400px] md:h-[500px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 transform scale-100"
                    : "opacity-0 transform scale-[1.02]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons avec hover plus visible */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Image précédente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Image suivante"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator avec animation plus fluide */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/50 w-2 hover:bg-white/70"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
