"use client";

import { servicesData } from "@/data/servicesData";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#212121]">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Title */}
        <h3 className="text-[#D8BFD8] font-semibold text-lg tracking-widest">SERVICE</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
          WHAT I DO
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center 
">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="w-72 h-72 bg-[#212121] rounded-2xl flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);"
              >
                {/* Icon */}
                <Icon className="text-4xl text-[#D8BFD8]" />
                <h2 className="mt-4 text-xl font-semibold text-[#FFFFFF]">
                  {service.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
