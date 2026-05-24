// src/components/Hero.jsx
import { useState, useEffect } from "react";
// Importing icons for social links
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

// Importing icons for tech stack
import reactIcon from "../assets/icons/icons8-react-js-100.png";
import mongodbIcon from "../assets/icons/icons8-mongodb-100.png";
import expressIcon from "../assets/icons/icons8-express-js-100.png";
import nodejsIcon from "../assets/icons/icons8-node-js-100.png";
import { huzaifaInfo } from "./constant/huzaifaInfo";

const Hero = () => {
  // Hero animation state
  const [isVisible, setIsVisible] = useState(false);

  // Start entrance effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#0a0c12] pt-10 overflow-hidden"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE - Text Content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Small Greeting */}
            <div className="inline-block mb-4">
              <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-4 py-1.5 rounded-full border border-[#2a3150]">
                ✨ Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="block text-3xl md:text-4xl font-bold text-white mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent animate-gradient">
                {huzaifaInfo.personalInfo.fullName}
              </span>
            </h1>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5">
              <span className="px-4 py-2 bg-[#1a1f36] rounded-full text-[#7e8eff] font-semibold text-sm border border-[#2a3150] backdrop-blur-sm">
                🚀 {huzaifaInfo.stats.specialization}
              </span>
              <span className="px-4 py-2 bg-[#1a1f36] rounded-full text-[#7e8eff] font-semibold text-sm border border-[#2a3150] backdrop-blur-sm">
                💻 MERN Stack Development
              </span>
            </div>

            {/* Tech Badges - React, MongoDB */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                React
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                MongoDB
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                Express.js
              </span>
              <span className="px-4 py-1.5 bg-[#0f1222] rounded-full text-[#5f7cff] font-medium text-sm border border-[#3b4eff]/30 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5f7cff] rounded-full animate-pulse"></span>
                Node.js
              </span>
            </div>

            {/* Description */}
            <p className="text-[#b9c3e6] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {huzaifaInfo.personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#3b4eff]/30">
                <span className="relative z-10 flex items-center gap-2">
                  <a href="#projects">View My Work</a>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c3fe0] to-[#4a5de0] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="px-8 py-3.5 rounded-full border-2 border-[#5f72ee] text-[#cddcff] font-semibold hover:bg-[#5f72ee]/10 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:mhuzaifa3128352877@gmail.com?subject=Project Inquiry&body=Hello Muhammad Huzaifa,">
                  Contact Me
                </a>
              </button>
            </div>

            {/* Stats / Social Icons */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-10 pt-6 border-t border-[#1e243e]">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">
                  {huzaifaInfo.stats.yearsOfExperience}
                </span>
                <span className="text-[#b9c3e6] text-sm">
                  Months Experience
                </span>
              </div>
              <div className="w-px h-8 bg-[#1e243e]"></div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">
                  {huzaifaInfo.stats.projectsCompleted}
                </span>
                <span className="text-[#b9c3e6] text-sm">
                  Projects Completed
                </span>
              </div>
              <div className="w-px h-8 bg-[#1e243e] hidden sm:block"></div>
              <div className="flex gap-4 ml-auto lg:ml-0">
                {/* GitHub */}
                <a
                  href={huzaifaInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200"
                >
                  <FaGithub />
                </a>
                {/* LinkedIn */}
                <a
                  href={huzaifaInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200"
                >
                  <FaLinkedin />
                </a>
                {/* Youtube */}
                <a
                  href={huzaifaInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200"
                >
                  <FaYoutube />
                </a>
                {/* Download Resume */}
                <a
                  href={huzaifaInfo.socialLinks.resume}
                  download="Muhammad_Huzaifa_Resume.pdf"
                  className="text-[#cdd9ff] hover:text-[#5f7cff] transition-all hover:scale-110 transform duration-200 link"
                >
                  <MdOutlineFileDownload />
                </a>
              </div>
            </div>
          </div>

          {/* Right preview card - FIXED RESPONSIVE ICONS */}
          <div
            className={`flex-1 flex justify-center items-center transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b4eff]/20 to-[#5f72ee]/20 rounded-full blur-3xl animate-pulse"></div>

              {/* Main Card - Responsive width */}
              <div className="relative bg-gradient-to-br from-[#0f1222] to-[#0a0c12] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#262b44] shadow-2xl backdrop-blur-sm w-64 sm:w-72 md:w-96 animate-float">
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#3b4eff]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#5f72ee]/10 rounded-full blur-xl"></div>

                {/* Code Icon */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-block p-3 sm:p-4 bg-[#1a1f36] rounded-xl sm:rounded-2xl border border-[#3b4eff]/30">
                    <svg
                      className="w-12 h-12 sm:w-16 sm:h-16 text-[#5f7cff] animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Tech Stack Icons - FIXED: No stretching on mobile */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  {/* React */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-[#1a1f36]/50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-[#2a3150]">
                    <span className="flex-shrink-0">
                      <img 
                        src={reactIcon} 
                        alt="React" 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" 
                      />
                    </span>
                    <span className="text-xs sm:text-sm text-[#cdd9ff] truncate">React</span>
                  </div>
                  
                  {/* MongoDB */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-[#1a1f36]/50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-[#2a3150]">
                    <span className="flex-shrink-0">
                      <img 
                        src={mongodbIcon} 
                        alt="MongoDB" 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" 
                      />
                    </span>
                    <span className="text-xs sm:text-sm text-[#cdd9ff] truncate">MongoDB</span>
                  </div>
                  
                  {/* Express */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-[#1a1f36]/50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-[#2a3150]">
                    <span className="flex-shrink-0">
                      <img 
                        src={expressIcon} 
                        alt="Express" 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" 
                      />
                    </span>
                    <span className="text-xs sm:text-sm text-[#cdd9ff] truncate">Express</span>
                  </div>
                  
                  {/* Node.js */}
                  <div className="flex items-center gap-2 sm:gap-3 bg-[#1a1f36]/50 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-[#2a3150]">
                    <span className="flex-shrink-0">
                      <img 
                        src={nodejsIcon} 
                        alt="Node.js" 
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain" 
                      />
                    </span>
                    <span className="text-xs sm:text-sm text-[#cdd9ff] truncate">Node.js</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center">
                  <p className="text-[#b9c3e6] text-xs sm:text-sm italic">
                    "Code. Build. Deploy. Repeat."
                  </p>
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2 sm:mt-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs text-[#7e8eff]">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#3b4eff]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 sm:w-24 sm:h-24 bg-[#5f72ee]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
