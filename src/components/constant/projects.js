import csEcommerceImg from "../../assets/project images/csEcommerce.png";
import mhuzaifaportfolioImg from "../../assets/project images/mhuzaifaportfolio.png";
import tutornestImg from "../../assets/project images/tutornest.png";
import bazmCoffeeImg from "../../assets/project images/bazm-coffee.png";
import pslImg from "../../assets/project images/psl.png";
import portfolioCrimsonImg from "../../assets/project images/portfolio-crimson.png";

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
    github: "https://github.com/mhuzaifa360/tutorNest.git",

    color: "from-yellow-500/20 to-teal-500/20",
  },
  //Bazm Coffee Website
  {
    id: 3,
    title: "Bazm Coffee Website",
    category: "htmlcssjs",

    tech: ["HTML", "CSS"],

    image: bazmCoffeeImg,

    description:
      "A visually appealing and responsive website for a coffee shop, showcasing their menu, location, and contact information.",

    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],

    live: "https://mhuzaifa360.github.io/bazm-coffee/",
    github: "https://github.com/mhuzaifa360/bazm-coffee.git",

    color: "from-yellow-500/20 to-teal-500/20",
  },
  //Huzaifa Portfolio Crimson
  {
    id: 3,
    title: "Huzaifa Portfolio Crimson",
    category: "htmlcssjs",

    tech: ["HTML", "CSS"],

    image: portfolioCrimsonImg,

    description:
      "A visually appealing and responsive website for a coffee shop, showcasing their menu, location, and contact information.",

    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],

    live: "https://mhuzaifa360.github.io/Portfolio-website-crimson/",
    github: "https://github.com/mhuzaifa360/Portfolio-website-crimson.git",

    color: "from-yellow-500/20 to-teal-500/20",
  },
  //PSL Website
  {
    id: 3,
    title: "PSL Website",
    category: "htmlcssjs",

    tech: ["HTML", "CSS"],

    image: pslImg,

    description:
      "Pakistan Super League (PSL) website design showcasing teams, players, fixtures, and news in a visually appealing and responsive layout.",

    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],

    live: "https://mhuzaifa360.github.io/PSL-website-design/",
    github: "https://github.com/mhuzaifa360/PSL-website-design.git",

    color: "from-yellow-500/20 to-teal-500/20",
  },

];
