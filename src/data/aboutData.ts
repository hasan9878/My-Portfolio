// src/data/aboutData.ts
import { Facebook, Github, Linkedin } from "lucide-react";

export interface ButtonType {
  label: string;
  url: string;
  bgColor: string;
  hoverColor: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: React.ComponentType<any>; // React component type
  bgColor: string;
  hoverColor: string;
}

export interface AboutDataType {
  image: string;
  name: string;
  title: string;
  description: string;
  buttons: ButtonType[];
  socialLinks: SocialLinkType[];
}

export const aboutData: AboutDataType = {
  image: "/Hasan.png",
  name: "MAIN INFO",
  title: "ABOUT ME",
  description: `I am a passionate web developer skilled in React, Next.js, Tailwind CSS, and TypeScript. I love building dynamic, responsive, and user-friendly web applications.

I focus on writing clean, maintainable code and following best practices. I enjoy solving problems creatively and delivering applications that are both efficient and visually appealing.

Constantly learning, I aim to create web experiences that are scalable, performant, and enjoyable for users.`,
  
  buttons: [
    { label: "My CV", url: "/cv", bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
    { label: "Hire Me", url: "/hire", bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
    { label: "Explore Me", url: "/explore", bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
  ],

  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com/yourprofile", icon: Facebook, bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
    { platform: "GitHub", url: "https://github.com/yourusername", icon: Github, bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: Linkedin, bgColor: "bg-[#212121]", hoverColor: "hover:bg-gray-800" },
  ],
};
