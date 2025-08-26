// টাইপ ডিফাইন (Profile interface)
export interface Profile {
  name: string;
  title: string;
  position: string;
  skills: string[];
  image: string;
}

// আসল ডাটা
export const profileData: Profile = {
  name: "Hasan Ali",
  title: "Frontend Developer · UI/UX Engineer",
  position:
    "Freelance Frontend Specialist — React, Next.js, Tailwind (Open for remote/contract work)",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Prototyping",
    "Framer Motion (animations)",
    "Performance Optimization",
    "Accessibility (a11y)",
    "Git & CI/CD",
  ],
  image: "/Hasan.png",
};
