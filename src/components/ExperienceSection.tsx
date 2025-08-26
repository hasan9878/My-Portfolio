"use client";

import { useState } from "react";
import { journeyData } from "@/data/journeyData";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills");

  return (
    <section className="min-h-screen flex flex-col items-center bg-[#212121] text-white px-6 md:px-12 py-12">
      <h2 className="text-4xl font-bold text-fuchsia-400 mb-8">My Journey</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-10 sticky top-20 z-10 py-4">
        {["skills", "experience", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === tab
                ? "bg-fuchsia-500 text-white"
                : "bg-[#1E1E1E] text-neutral-300 hover:bg-neutral-600"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl">
        {/* Skills */}
        {activeTab === "skills" && (
          <div className="grid gap-8 md:grid-cols-2">
            {journeyData.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-neutral-400">{skill.level}%</span>
                </div>

                {/* Track (groove) */}
                <div
                  className="
                    relative w-full h-2 rounded-full overflow-hidden
                    bg-[#141414]
                  "
                  style={{
                    // খালি অংশকে ভেতরে বসা দেখাতে কেবল inset shadow ব্যবহার
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.06), inset 0 -2px 4px rgba(0,0,0,0.65)",
                  }}
                >
                  {/* Filled gradient bar */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                    style={{
                      width: `${skill.level}%`,
                      background:
                        "linear-gradient(90deg, #ef4444 0%, #f59e0b 40%, #84cc16 75%, #22c55e 100%)",
                    }}
                  />

                  {/* Empty part (ফিলের পরে যে অংশ) — একটু বেশি ডার্ক + subtle inset glow */}
                  <div
                    className="
                      absolute top-0 bottom-0 right-0 rounded-r-full
                      bg-[#0f0f0f]
                      pointer-events-none
                    "
                    style={{ left: `${skill.level}%` }}
                  >
                    {/* জংশন লাইনে হালকা ডার্ক গ্রেডিয়েন্ট যেন কাট-ধার স্পষ্ট হয় */}
                    <span
                      className="
                        absolute inset-y-0 left-0 w-4
                        bg-gradient-to-r from-black/45 via-black/15 to-transparent
                        pointer-events-none
                      "
                    />
                    {/* খালি অংশটাকে ভেতরে বসা দেখাতে অতিরিক্ত সূক্ষ্ম inset */}
                    <span
                      className="
                        absolute inset-0 rounded-r-full
                        pointer-events-none
                      "
                      style={{
                        boxShadow:
                          "inset 0 1px 1px rgba(255,255,255,0.04), inset 0 -2px 4px rgba(0,0,0,0.7)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="flex flex-col gap-6">
            {journeyData.experience.map((exp, index) => (
              <div key={index} className="p-4 bg-neutral-800 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-fuchsia-400">{exp.role}</h3>
                <p className="text-sm text-neutral-400">
                  {exp.company} | {exp.duration}
                </p>
                <p className="mt-2 text-neutral-300">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-6">
            {journeyData.education.map((edu, index) => (
              <div key={index} className="p-4 bg-neutral-800 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-fuchsia-400">{edu.degree}</h3>
                <p className="text-sm text-neutral-400">
                  {edu.institution} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
