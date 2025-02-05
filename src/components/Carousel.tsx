import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from "react";

const slides = [
  ["/Gal_1.svg"], ["/Gal_5.svg"],
  ["/Gal_3.svg"], ["/Gal_4.svg"],
  ["/Gal_2.svg"], ["/Pic2.svg"],
];

const slides_md = [
  ["/Gal_1.svg", "/Gal_5.svg"],
  ["/Gal_3.svg", "/Gal_4.svg"],
  ["/Gal_2.svg", "/Pic2.svg"],
];


export function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


   const handleResize = useCallback(() => {
    setIsMediumScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    handleResize();
 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const activeSlides = isMediumScreen ? slides_md : slides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + activeSlides.length) % activeSlides.length
    );
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return; 

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div className="relative overflow-hidden w-full pb-8">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {activeSlides.map((slide, index) => (
          <div
            key={index}
            className="flex md:gap-[20px] w-full justify-center"
            style={{ flexShrink: 0 }}
          >
            {slide.map((imgSrc, imgIndex) => (
              <img
                key={imgIndex}
                src={imgSrc}
                alt={`Slide ${index + 1} Image ${imgIndex + 1}`}
                className="md:h-[543px] md:w-[calc(50%-10px)] max-sm:h-[450px] max-sm:w-[calc(100%)] md:object-cover max-sm:object-contain transition-transform overflow-hidden duration-500 ease-in-out hover:scale-95"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white opacity-20 hover:opacity-55 transition-opacity duration-500 text-gray-800 p-2 shadow-md"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white opacity-20 hover:opacity-55 transition-opacity duration-500 text-gray-800  p-2 shadow-md"
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {activeSlides.map((_, index) => (
          <span
            key={index}
            onClick={() => setSlide(index)}
            className={`block h-2 w-2 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-[#1A5A4C]" : "bg-[#E0E0E0]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}