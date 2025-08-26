"use client";

import { useState } from "react";
import { portfolioItems, PortfolioItem } from "../data/myPortfolio";

const categories: ("All" | "Web Application" | "Presentation")[] = [
  "All",
  "Web Application",
  "Presentation",
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Web Application" | "Presentation"
  >("All");

  const filteredItems: PortfolioItem[] =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-[#212121]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-400">
          Portfolio
        </h2>
        <h3 className="text-4xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-200">
          Latest Work
        </h3>

        {/* Category Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                selectedCategory === cat
                  ? "bg-[#444] text-white"
                  : "bg-[#212121] text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#212121] rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.category}
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
