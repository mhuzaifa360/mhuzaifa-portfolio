
// import images
import csEcommerceImg from "../../assets/project images/csEcommerce.png";
import mhuzaifaportfolioImg from "../../assets/project images/mhuzaifaportfolio.png";
import tutornestImg from "../../assets/project images/tutornest.png";
import bazmCoffeeImg from "../../assets/project images/bazm-coffee.png";
import pslImg from "../../assets/project images/psl.png";
import portfolioCrimsonImg from "../../assets/project images/portfolio-crimson.png";
import portofolioBlackAndWhiteImg from "../../assets/project images/portfolio-blackAndWhite.png";
import bmiCalculatorImg from "../../assets/project images/bmi-calculator.png";
import coffeeShopImg from "../../assets/project images/coffeeShop.png";
import productCatalogueImg from "../../assets/project images/productCatalogue.png";
import sofanestImg from "../../assets/project images/sofanest.png";

export const projects = [

  // ? FULL STACK
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

  // ? FRONTEND
  // huzaifa portfolio
  {
    id: 1,
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


  // ? HTML CSS JS
  //Bazm Coffee Website
  {
    id: 1,
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
    id: 2,
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
  //Huzaifa Portfolio Black and White
  {
    id: 4,
    title: "Huzaifa Portfolio Black and White",
    category: "htmlcssjs",

    tech: ["HTML", "CSS"],
    image: portofolioBlackAndWhiteImg,
    description:
      "Portfolio website with a sleek black and white design, showcasing projects, skills, and contact information in a visually appealing and responsive layout.",

    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],

    live: "https://mhuzaifa360.github.io/Portfolio-website-black-white-blue/",
    github: "https://github.com/mhuzaifa360/Portfolio-website-black-white-blue.git",
    color: "from-yellow-500/20 to-teal-500/20",
  },
  //BMI Calculator
  {
    id: 5,
    title: "BMI Calculator",
    category: "htmlcssjs",
    tech: ["HTML", "CSS", "JavaScript"],
    image: bmiCalculatorImg,
    description:
      "A simple and user-friendly BMI (Body Mass Index) calculator that allows users to input their weight and height to calculate their BMI and receive health recommendations based on the results.",
    features: [
      "User-friendly interface with input fields for weight and height",
      "Real-time BMI calculation and display of results",
      "Health recommendations based on BMI categories (underweight, normal weight, overweight, obese)",
      "Responsive design for use on various devices",
    ],
    live: "https://mhuzaifa360.github.io/classTask06-BMI-CALCULATOR/",
    github: "https://github.com/mhuzaifa360/classTask06-BMI-CALCULATOR.git"
  },
  //Coffee Shop Website
  {
    id: 7,
    title: "Coffee Shop Website",
    category: "htmlcssjs",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: coffeeShopImg,
    description:
      "A visually appealing and responsive website for a coffee shop, showcasing their menu, location, and contact information.",
    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],
    live: "https://mhuzaifa360.github.io/task06-html-css-responsive-COFFEE-SHOP-website/#home",
    github: "https://github.com/mhuzaifa360/task06-html-css-responsive-COFFEE-SHOP-website.git"
  },
  //Product Catalogue Website
  {
    id: 8,
    title: "Product Catalogue Website",
    category: "htmlcssjs",
    tech: ["HTML", "CSS"],
    image: productCatalogueImg,
    description:
      "A visually appealing and responsive website for a product catalogue, showcasing their products, details, and contact information.",
    features: [
      "Responsive design for all devices",
      "Attractive layout and color scheme",
      "Easy navigation with clear sections",
      "Contact form for customer inquiries",
    ],
    live: "https://mhuzaifa360.github.io/task05-html-css-responsive-product-catalogue-website/",
    github: "https://github.com/mhuzaifa360/task05-html-css-responsive-product-catalogue-website.git"
  },

  //? WORDPRESS
  //Sofa nest wordpress website
  {
    id: 1,
    title: "SofaNest WordPress Website",
    category: "wordpress",
    tech: ["WordPress", "Elementor", "WooCommerce", "Namecheap", "Hosting & Domain"],
    image: sofanestImg,
    description:
      "A fully functional WordPress website for SofaNest, an online furniture store, featuring a visually appealing design, user-friendly navigation, and e-commerce capabilities for showcasing and selling their products.",
    features: [
      "Custom WordPress theme design using Elementor",
      "Integration of WooCommerce for e-commerce functionality",
      "Product catalog with detailed descriptions and images",
      "Secure payment gateway integration for online transactions",
      "Responsive design for optimal viewing on all devices",
      "Hosting and domain management using Namecheap",
    ],
    live: "https://sofanest.co.uk/",
  },




];
