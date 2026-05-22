// src/components/Skills.jsx
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technicalSkills = [
    { name: "React.js", level: 90, icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", level: 85, icon: "💚", color: "#68A063" },
    { name: "MongoDB", level: 85, icon: "🍃", color: "#47A248" },
    { name: "Express.js", level: 80, icon: "🚀", color: "#000000" },
    { name: "JavaScript", level: 92, icon: "🟡", color: "#F7DF1E" },
    { name: "TypeScript", level: 75, icon: "🔵", color: "#3178C6" },
    { name: "Tailwind CSS", level: 88, icon: "🎨", color: "#06B6D4" },
    { name: "Next.js", level: 70, icon: "▲", color: "#000000" },
  ];

  const softSkills = [
    "💡 Problem Solving",
    "🤝 Team Collaboration",
    "⏰ Time Management",
    "📢 Communication",
    "🎯 Attention to Detail",
    "🚀 Fast Learner",
  ];

  return (
    <section className="bg-[#0a0c12] py-20 px-6 md:px-12 relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#5f72ee]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#3b4eff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            💪 My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#b9c3e6] mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web applications
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE - Technical Skills with Progress Bars */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">💻</span> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-[#cdd9ff] font-semibold">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[#5f7cff] text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#1e243e] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    >
                      <div className="h-full w-full animate-pulse opacity-50"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Soft Skills & Tools */}
          <div
            className={`flex-1 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🤝</span> Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#1a1f36] to-transparent p-3 rounded-xl border border-[#2a3150] hover:border-[#3b4eff]/50 transition-all hover:scale-105"
                >
                  <span className="text-[#cdd9ff]">{skill}</span>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">🛠️</span> Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Docker",
                "Vercel",
                "Netlify",
                "Firebase",
                "Redux",
                "JWT",
                "Socket.io",
                "Three.js",
              ].map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#0f1222] rounded-full text-[#cdd9ff] text-sm border border-[#2a3150] hover:border-[#5f7cff] hover:bg-[#1a1f36] transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
