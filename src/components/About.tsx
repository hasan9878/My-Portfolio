"use client";

import Image from "next/image";
import { aboutData } from "@/data/aboutData";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#212121] text-white px-6 md:px-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="relative flex flex-col items-center md:items-center gap-1 overflow-hidden rounded-2xl p-6">
          {/* Gradient Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 
                          opacity-70 transform -skew-y-6 rotate-[30deg]"></div>
          
          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-82 md:h-82 mt-5">
            <Image
              src={aboutData.image}
              alt={aboutData.name}
              fill
              className="rounded-md object-cover shadow-3xl"
              priority
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {aboutData.socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${link.bgColor} ${link.hoverColor} transition`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400">
            {aboutData.name}
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-300">
            {aboutData.title}
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            {aboutData.description}
          </p>

          <div className="flex gap-4 flex-wrap mt-4">
            {aboutData.buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.url}
                target={btn.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`px-6 py-3 ${btn.bgColor} ${btn.hoverColor} shadow-lg rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
