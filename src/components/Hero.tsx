"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profileData";
import { shapes } from "@/data/shapes";
import AnimatedShape from "./AnimatedShape";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#212121] text-white overflow-hidden px-4 md:px-12">
      {/* Floating shapes */}
      {shapes.map((s) => (
        <AnimatedShape key={s.id} item={s} />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
        {/* Left – text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <p className="text-neutral-400 text-sm md:text-base">Hello I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-1">
            {profileData.name}
          </h1>
          <h2 className="mt-2 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500">
            {profileData.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-300">
            {profileData.position}
          </p>

          {/* Skills pills with gradient */}
          <div className="mt-5 flex gap-3 flex-wrap justify-center md:justify-start">
            {profileData.skills.map((s) => (
              <span
                key={s}
                className="px-5 py-4 rounded-full bg-[#212121] shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 font-medium text-sm md:text-base
                 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right – profile image */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-82 md:h-82"
          >
            {/* Soft gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
            <Image
              src={profileData.image}
              alt={profileData.name}
              fill
              className="rounded-full object-cover border-4 border-neutral-800 shadow-2xl"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full border-4 border-neutral-800/70 w-64 h-64 md:w-72 md:h-72" />
        </div>
      </div>
    </section>
  );
}
