import csEcommerceImg from "../../assets/project images/csEcommerce.png";
import mhuzaifaportfolioImg from "../../assets/project images/mhuzaifaportfolio.png";
import tutornestImg from "../../assets/project images/tutornest.png";

export const projects = [
    //computer systems e-commerce
  {
    id: 1,
    title: "Computer Systems E-Commerce",
    category: "fullstack",

    tech: ["React", "Node.js", "MySQL", "Tailwind"],

    image: csEcommerceImg,

    description:
      "Full-featured e-commerce platform with cart, payments, and admin dashboard.",

    features: [
      "User auth",
      "Product Management",
      "Category Management",
      "Admin Dashboard",
    ],

    live: "#",
    github: "#",

    color: "from-blue-500/20 to-purple-500/20",
  },
  // huzaifa portfolio
  {
    id: 2,
    title: "Huzaifa Portfolio",
    category: "frontend",

    tech: ["React", "Tailwind CSS"],

    image: mhuzaifaportfolioImg,

    description:
      "A smart tutor-student platform for finding teachers, booking sessions, and managing learning resources online.",

    features: [
      "Tutor search & filtering",
      "Authentication system",
      "Course & job listings",
      "Responsive dashboard",
    ],

    live: "#",
    github: "#",

    color: "from-green-500/20 to-teal-500/20",
  },
  //tutorNest platform
  {
    id: 2,
    title: "TutorNest Platform",
    category: "fullstack",

    tech: ["React", "Express", "MySQL", "Node.js"],

    image: tutornestImg,

    description:
      "A smart tutor-student platform for finding teachers, booking sessions, and managing learning resources online.",

    features: [
      "Tutor search & filtering",
      "Authentication system",
      "Course & job listings",
      "Responsive dashboard",
    ],

    live: "#",
    github: "#",

    color: "from-yellow-500/20 to-teal-500/20",
  },

];
