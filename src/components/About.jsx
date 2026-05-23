// src/components/About.jsx
import { useState, useEffect } from "react";
// About.jsx ke top pe
import profilePic from "../assets/images/huzaifa.jpg";
import workIcon from '../assets/icons/icons8-work-100.png';
import mapIcon from '../assets/icons/icons8-address-100.png';
import dateIcon from '../assets/icons/icons8-date-100.png';
import mailIcon from '../assets/icons/icons8-mail-100.png';

import { huzaifaInfo } from "./constant/huzaifaInfo";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="bg-[#0a0c12] py-10 px-6 md:px-12 relative overflow-hidden"
      id="about"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b4eff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5f72ee]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            📖 Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT SIDE - Profile Picture / Card */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#0f1222] to-[#0a0c12] rounded-3xl p-6 border border-[#262b44] shadow-2xl">
                {/* Picture Container */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-[#3b4eff]/50 shadow-xl">
                    <img
                      src={profilePic}
                      alt="Huzaifa"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Online Status Badge */}
                  <div className="absolute bottom-3 right-1/3 md:right-28 bg-green-500 rounded-full p-1.5 border-2 border-[#0a0c12]">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#1a1f36]/50 p-3 rounded-xl flex flex-col items-center text-center border border-[#2a3150] hover:border-[#3b4eff]/50 transition-all">
                    <span className="text-2xl block mb-1"><img src={mapIcon} alt="Location" width={40}/></span>
                    <p className="text-[#b9c3e6] text-xs">Based in</p>
                    <p className="text-white text-sm font-semibold">{huzaifaInfo.personalInfo.address}</p>
                  </div>
                  <div className="bg-[#1a1f36]/50 p-3 rounded-xl flex flex-col items-center text-center border border-[#2a3150] hover:border-[#3b4eff]/50 transition-all">
                    <span className="text-2xl block mb-1"><img src={dateIcon} alt="Birthday" width={40}/></span>
                    <p className="text-[#b9c3e6] text-xs">Birthday</p>
                    <p className="text-white text-sm font-semibold">{huzaifaInfo.personalInfo.birthday}</p>
                  </div>
                  <div className="bg-[#1a1f36]/50 p-3 rounded-xl flex flex-col items-center text-center border border-[#2a3150] hover:border-[#3b4eff]/50 transition-all">
                    <span className="text-2xl block mb-1"><img src={mailIcon} alt="Email" width={40}/></span>
                    <p className="text-[#b9c3e6] text-xs">Email</p>
                    <p className="text-white text-sm font-semibold truncate">
                      {huzaifaInfo.personalInfo.email}
                    </p>
                  </div>
                  <div className="bg-[#1a1f36]/50 p-3 rounded-xl flex flex-col items-center text-center border border-[#2a3150] hover:border-[#3b4eff]/50 transition-all">
                    <span className="text-2xl block mb-1"><img src={workIcon} alt="Available" width={40}/></span>
                    <p className="text-[#b9c3e6] text-xs">Available</p>
                    <p className="text-green-400 text-sm font-semibold">
                      {huzaifaInfo.personalInfo.availability}
                    </p>
                  </div>
                </div>

                {/* Download CV Button in About */}
                <a
                  href="#"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold hover:from-[#2c3fe0] hover:to-[#4a5de0] transition-all hover:scale-105 shadow-lg shadow-[#3b4eff]/20"
                >
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - About Text Content */}
          <div
            className={`flex-1 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
                Huzaifa
              </span>
              , MERN Stack Developer
            </h3>

            <p className="text-[#b9c3e6] leading-relaxed mb-4">
              Passionate Full Stack Developer with expertise in building modern,
              scalable web applications. I specialize in the MERN stack
              (MongoDB, Express.js, React, Node.js) and love creating solutions
              that make a difference.
            </p>

            <p className="text-[#b9c3e6] leading-relaxed mb-6">
              With over 2 years of experience in web development, I've worked on
              diverse projects ranging from e-commerce platforms to complex
              dashboard applications. My focus is on writing clean, maintainable
              code and delivering exceptional user experiences.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1f36] flex items-center justify-center border border-[#3b4eff]/30">
                  <svg
                    className="w-5 h-5 text-[#5f7cff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Experience</p>
                  <p className="text-[#b9c3e6] text-sm">
                    2+ Years Professional
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1f36] flex items-center justify-center border border-[#3b4eff]/30">
                  <svg
                    className="w-5 h-5 text-[#5f7cff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Projects</p>
                  <p className="text-[#b9c3e6] text-sm">15+ Completed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1f36] flex items-center justify-center border border-[#3b4eff]/30">
                  <svg
                    className="w-5 h-5 text-[#5f7cff]"
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
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-[#b9c3e6] text-sm">huzaifa@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1f36] flex items-center justify-center border border-[#3b4eff]/30">
                  <svg
                    className="w-5 h-5 text-[#5f7cff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-[#b9c3e6] text-sm">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-[#1a1f36]/30 to-transparent p-5 rounded-2xl border-l-4 border-[#5f7cff]">
              <p className="text-[#cdd9ff] italic text-sm md:text-base">
                "Code is poetry written in logic. I strive to create elegant
                solutions that are both functional and beautiful."
              </p>
              <p className="text-[#5f7cff] text-sm mt-2 font-semibold">
                — Huzaifa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
