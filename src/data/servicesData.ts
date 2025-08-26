import { IconType } from "react-icons";
import { FaMobileAlt, FaLaptopCode, FaCode, FaChalkboardTeacher, FaHandsHelping, FaPaintBrush } from "react-icons/fa";

export interface Service {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    icon: FaMobileAlt,
    title: "Mobile App",
    description: "I design and develop mobile-friendly applications with modern UI/UX."
  },
  {
    id: 2,
    icon: FaLaptopCode,
    title: "Web Design",
    description: "Creative and responsive website designs tailored to your business needs."
  },
  {
    id: 3,
    icon: FaCode,
    title: "Web Development",
    description: "High-quality, scalable, and secure web applications using modern tech."
  },
  {
    id: 4,
    icon: FaChalkboardTeacher,
    title: "Clean Code",
    description: "I write clean, maintainable, and efficient code following best practices."
  },
  {
    id: 5,
    icon: FaHandsHelping,
    title: "Great Support",
    description: "Reliable support and assistance even after project delivery."
  },
  {
    id: 6,
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Beautiful and user-friendly UI/UX designs for websites and applications."
  }
];
