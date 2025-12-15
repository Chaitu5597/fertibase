
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestMony from "./TestMony";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product A",
      weight: "500g",
      form: "Powder",
      volume: "250ml",
      usage: "Daily use",
      price: "$20",
    },
    {
      videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product B",
      weight: "1kg",
      form: "Liquid",
      volume: "500ml",
      usage: "Skin care",
      price: "$35",
    },
    {
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product C",
      weight: "200g",
      form: "Capsule",
      volume: "100ml",
      usage: "Health booster",
      price: "$15",
    },
    {
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product D",
      weight: "300g",
      form: "Powder",
      volume: "150ml",
      usage: "Energy",
      price: "$25",
    },
    {
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product E",
      weight: "700g",
      form: "Liquid",
      volume: "350ml",
      usage: "Hair Care",
      price: "$30",
    },
    {
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      imageSrc: "https://via.placeholder.com/150",
      title: "Product F",
      weight: "900g",
      form: "Capsule",
      volume: "400ml",
      usage: "Immunity",
      price: "$40",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-normal text-center mb-16">
        Testimonials
      </h2>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / totalPages)
            }%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 grid grid-cols-9 "
            >
              {testimonials
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((item, index) => (
                  <TestMony key={index} {...item} />
                ))}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-gray-800"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
