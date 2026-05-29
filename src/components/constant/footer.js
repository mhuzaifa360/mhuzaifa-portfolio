// import huzaifaInfo from "../constant/huzaifaInfo";
import { huzaifaInfo } from "./huzaifaInfo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    icon: FaGithub,
    url: huzaifaInfo.socialLinks.github,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    style: "text-[#0077B5]",
    url: huzaifaInfo.socialLinks.linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    style: "text-[#FF3D00]",
    url: huzaifaInfo.socialLinks.youtube,
    color: "hover:text-red-600",
  },
  {
    name: "Resume",
    icon: GrDownload,
    style: "text-white",
    url: huzaifaInfo.socialLinks.resume,
    color: "hover:text-green-400",
  },
  {
    name: "Phone",
    icon: IoMdCall,
    style: "text-[#25D366]",
    url: huzaifaInfo.socialLinks.phone,
    color: "hover:text-green-400",
  },
    {
    name: "Email",
    icon: MdEmail,
    style: "text-[#D44638]",
    url: huzaifaInfo.socialLinks.email,
    color: "hover:text-green-400",
    },
    {
    name: "WhatsApp",
    icon: FaWhatsappSquare,
    style: "text-[#25D366]",
    url: huzaifaInfo.socialLinks.whatsapp,
    color: "hover:text-green-400",
  },
];
