export interface TestimonialType {
  id: number;
  feedback: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    feedback: "I forgot of all my anger on Hasan Ali While I see his work. He is too talented.I love to work with him.",
    image: "/IMG_20230701_160549.jpg",
    name: "Mashuk nur",
    role: "Web Developer of Online City",
  },
  {
    id: 2,
    feedback: "Excellent service, very professional and friendly staff.",
    image: "",
    name: "Sarah Lee",
    role: "Entrepreneur",
  },
  {
    id: 3,
    feedback: "I highly recommend them for hassle-free travel planning.",
    image: "",
    name: "Michael Smith",
    role: "Photographer",
  },
  {
    id: 4,
    feedback: "One of the best experiences of my life, thanks to their team!",
        image: "",

    name: "Alicia Brown",
    role: "Designer",
  },
];

export default testimonials;
