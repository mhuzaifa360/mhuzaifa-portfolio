// import huzaifaInfo from "../constant/huzaifaInfo";
import {huzaifaInfo} from "./huzaifaInfo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";




// Services Offered
export const services = [
  "Full Stack Web Development",
  "MERN Stack Solutions",
  "Frontend Development (React.js)",
  "Backend Development (Node.js, Express.js)",
  "WordPress Development (Elementor)",
  "MS Office Services (Word, Excel, PowerPoint)",
];

// Social Media Links
export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub ,
    url: huzaifaInfo.socialLinks.github,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin ,
    url: huzaifaInfo.socialLinks.linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    icon: FaYoutube ,
    url: huzaifaInfo.socialLinks.youtube,
    color: "hover:text-red-600",
  },
    {
    name: "Resume",
    icon: GrDownload ,
    url: huzaifaInfo.socialLinks.resume,
    color: "hover:text-green-400",
  },
];
