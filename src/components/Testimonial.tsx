"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonials, { TestimonialType } from "../data/testimonials";

const Testimonial = () => {
  const [index, setIndex] = useState<number>(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { feedback, image, name, role }: TestimonialType = testimonials[index];

  return (
    <section className="py-16 bg-[#212121] text-center">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-500">
          Testimonial
        </h2>
        <p className="text-gray-400 text-4xl mt-2 font-bold">CLIENT SPEAK</p>
      </div>

      {/* Card */}
      <div className="max-w-xl h-90 mx-auto bg-[#212121] p-6 rounded-2xl shadow-lg  transition duration-300 flex flex-col justify-between">
        <p className="text-gray-700 dark:text-gray-200 italic mb-4">
          “{feedback}”
        </p>
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-500"
        />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-500 dark:text-gray-300">{role}</p>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
