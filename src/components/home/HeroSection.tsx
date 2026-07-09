import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Sparkles } from 'lucide-react';
import img1 from "../../assets/images/hero1.png"
import img2 from "../../assets/images/hero2.png"
import img3 from "../../assets/images/hero3.png"
import img4 from "../../assets/images/hero4.png"
import img5 from "../../assets/images/hero5.png"
// import img6 from "../../assets/bhoj6.jpg"
// import img7 from "../../assets/bhoj7.jpg"
// import img8 from "../../assets/bhoj8.jpg"
// import img9 from "../../assets/bhoj7.jpeg"
// import img10 from "../../assets/bhoj9.jpg"
// import img11 from "../../assets/bhoj10.jpg"
// import img12 from "../../assets/bhoj11.jpeg"
// import img13 from "../../assets/bhoj12.jpeg"
//import vc from "../../assets/vc.jpg"


interface Slide {
  id: number;
  image: string;
  alt: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your actual slide images here
  const slides: Slide[] = [
    {
      id: 1,
      image: img1,
      alt: 'Viksit Bharat @2047'
    },
    {
      id: 2,
      image: img2,
      alt: 'Slide 2'
    },
    {
      id: 3,
      image: img3,
      alt: 'Slide 3'
    },
    {
      id: 4,
      image: img4,
      alt: 'Slide 4'
    },
    {
      id: 5,
      image: img5,
      alt: 'Slide 5'
    },
    // {
    //   id: 6,
    //   image: img6,
    //   alt: 'Slide 6'
    // },
    // {
    //   id: 7,
    //   image: img7,
    //   alt: 'Slide 7'
    // },
    // {
    //   id: 8,
    //   image: img8,
    //   alt: 'Slide 8'
    // },
    // {
    //   id: 9,
    //   image: img9,
    //   alt: 'Slide 9'
    // },
    // {
    //   id: 10,
    //   image: img10,
    //   alt: 'Slide 10'
    // },
    // {
    //   id: 11,
    //   image: img11,
    //   alt: 'Slide 11'
    // },
    // {
    //   id: 12,
    //   image: img12,
    //   alt: 'Slide 12'
    // },
    // {
    //   id: 13,
    //   image: img13,
    //   alt: 'Slide 13'
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full">
      {/* Full Width Image Slider */}
      <div className="relative h-[400px] md:h-[550px] lg:h-[700px] overflow-hidden">
        {/* Slider Container */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/40 to-indigo-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border border-white/30 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border border-white/30 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? 'w-10 h-2.5 bg-white shadow-lg shadow-white/50'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;