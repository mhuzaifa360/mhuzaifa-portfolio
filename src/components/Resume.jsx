// src/components/Resume.jsx
import { useState, useEffect } from "react";

import certifications from "./constant/certifications";
import experience from "./constant/experience";
import education from "./constant/education";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-[#0a0c12] to-[#0d1020] py-20 px-6 md:px-12 relative overflow-hidden"
      id="resume"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#3b4eff]/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            📄 My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white font-semibold hover:from-[#2c3fe0] hover:to-[#4a5de0] transition-all hover:scale-105 shadow-lg shadow-[#3b4eff]/20"
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
            Download Full Resume (PDF)
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE - Experience */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">💼</span> Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#5f7cff] border-4 border-[#0a0c12]"></div>
                  <div className="ml-6 pl-6 border-l-2 border-[#2a3150] group-hover:border-[#5f7cff] transition-all">
                    <div className="bg-gradient-to-r from-[#0f1222] to-transparent p-5 rounded-2xl border border-[#262b44] group-hover:border-[#3b4eff]/50 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{exp.icon}</span>
                        <h4 className="text-xl font-bold text-white">
                          {exp.title}
                        </h4>
                      </div>
                      <p className="text-[#5f7cff] text-sm mb-2">
                        {exp.company}
                      </p>
                      <p className="text-[#7e8eff] text-xs mb-3">{exp.year}</p>
                      <ul className="space-y-1">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-[#b9c3e6] text-sm flex items-start gap-2"
                          >
                            <span className="text-[#5f7cff]">▹</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Education & Certifications */}
          <div
            className={`flex-1 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🎓</span> Education
            </h3>
            <div className="space-y-5 mb-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#0f1222] to-transparent p-5 rounded-2xl border border-[#262b44] hover:border-[#3b4eff]/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{edu.icon}</span>
                    <h4 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                  </div>
                  <p className="text-[#5f7cff] text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-[#7e8eff] text-xs mb-2">{edu.year}</p>
                  <p className="text-[#b9c3e6] text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🏆</span> Certifications
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#0f1222] p-3 rounded-xl border border-[#262b44] hover:border-[#5f7cff] transition-all"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <div className="flex-1">
                    <p className="text-[#cdd9ff] font-semibold text-sm">
                      {cert.name}
                    </p>
                    <p className="text-[#7e8eff] text-xs">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
