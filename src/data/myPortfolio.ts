export type PortfolioItem = {
  id: number;
  title: string;
  category: "Web Application" | "Presentation";
  imageUrl: string;
  link: string;      // Live demo link
  github?: string;   // GitHub link (optional)
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "My ToDo App",
    category: "Web Application",
    imageUrl: "/Screenshot 2025-08-26 162541.png",
    link: "https://mytodo-applicaion.netlify.app/",
    github: "https://github.com/hasan9878/ToDo"
  },
  {
    id: 2,
    title: "Presentation Project 1",
    category: "Presentation",
    imageUrl: "/Screenshot 2025-08-26 163708.png",
    link: "https://react-js-2.netlify.app/",
    github: "https://github.com/hasan9878/React-js-2"
  },
  {
    id: 3,
    title: "Dashboard ",
    category: "Web Application",
    imageUrl: "/Dashboard.png",
    link: "https://mydashboard22.netlify.app/",
    github: "https://github.com/hasan9878/Dashboard"
  },
  {
    id: 3,
    title: "Flower Bank ",
    category: "Web Application",
    imageUrl: "/flowerbank.png",
    link: "https://advanceddjavascript.netlify.app/",
    github: "https://github.com/hasan9878/banking"
  },
];
