import { useState, useEffect } from "react";

// Icons
import { MdOutlineFileDownload } from "react-icons/md";

// Data
import certifications from "./constant/certifications";
import experience from "./constant/experience";
import education from "./constant/education";
import { huzaifaInfo } from "./constant/huzaifaInfo";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-[#0a0c12] to-[#0d1020] py-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#3b4eff]/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
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

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE - EDUCATION */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#0f1222] to-transparent p-6 rounded-3xl border border-[#262b44] hover:border-[#3b4eff]/50 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{edu.icon}</span>

                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                  </div>

                  <p className="text-[#5f7cff] text-sm mb-2">
                    {edu.institution}
                  </p>

                  <p className="text-[#7e8eff] text-xs mb-3">
                    {edu.year}
                  </p>

                  <p className="text-[#b9c3e6] text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >

            {/* EXPERIENCE */}
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              Experience
            </h3>

            <div className="space-y-6 mb-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">

                  {/* Timeline Dot */}
                  <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-[#5f7cff] border-4 border-[#0a0c12]"></div>

                  {/* Timeline Line */}
                  <div className="ml-6 pl-6 border-l-2 border-[#2a3150] group-hover:border-[#5f7cff] transition-all">

                    <div className="bg-gradient-to-r from-[#0f1222] to-transparent p-5 rounded-3xl border border-[#262b44] hover:border-[#3b4eff]/50 transition-all duration-300">

                      <div className="flex items-center gap-3 mb-2">
                        <img src={exp.icon} alt={exp.title} width="40px"/>

                        <h4 className="text-lg md:text-xl font-bold text-white">
                          {exp.title}
                        </h4>
                      </div>

                      <p className="text-[#5f7cff] text-sm mb-1">
                        {exp.company}
                      </p>

                      <p className="text-[#7e8eff] text-xs mb-4">
                        {exp.year}
                      </p>

                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-[#b9c3e6] text-sm flex items-start gap-2"
                          >
                            <span className="text-[#5f7cff] mt-[2px]">
                              ▹
                            </span>

                            {desc}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CERTIFICATIONS */}
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              Certifications
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#0f1222] p-4 rounded-2xl border border-[#262b44] hover:border-[#5f7cff] transition-all duration-300 hover:translate-y-[-3px]"
                >
                  <span className="text-3xl">
                    {cert.icon}
                  </span>

                  <div className="flex-1">
                    <p className="text-[#cdd9ff] font-semibold text-sm md:text-base">
                      {cert.name}
                    </p>

                    <p className="text-[#7e8eff] text-xs">
                      {cert.year}
                    </p>
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