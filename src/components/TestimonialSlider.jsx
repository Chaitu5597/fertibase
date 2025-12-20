import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import TestMony from "./TestMony";
import testimonialService from "../api/testimonialService";

// import bloom from "../assets/bloom.png"; (Removed because it's now fetched from API)

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await testimonialService.getAllTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setError("Unable to load testimonials. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Logic:
  // 1. Filter by Season
  // 2. Sort by Date (Descending - Newest First)
  const filteredTestimonials = testimonials
    .filter((item) => selectedSeason === "All" || item.season === selectedSeason)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

  // Reset page when filter changes
  const handleSeasonChange = (season) => {
    setSelectedSeason(season);
    setCurrentIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading testimonials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-red-500 font-medium mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-emerald-600">Testimonials</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 mx-auto"></div>
      </div>

      {/* Season Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {["All", "Kharif", "Rabi", "Summer"].map((season) => (
          <button
            key={season}
            onClick={() => handleSeasonChange(season)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 border border-gray-300 ${selectedSeason === season
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Slider */}
      {filteredTestimonials.length > 0 ? (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full min-w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4"
              >
                {filteredTestimonials
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
            disabled={totalPages <= 1}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 ${totalPages <= 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
              }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            disabled={totalPages <= 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 ${totalPages <= 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
              }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      ) : (
        <div className="text-center text-gray-500 italic py-10">
          No testimonials found for this season.
        </div>
      )}

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
