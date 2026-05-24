// src/components/Projects.jsx

import { useState, useEffect } from "react";
import { projects } from "./constant/projects";

const filters = ["fullstack", "frontend", "backend", "htmlcssjs", "wordpress"];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("fullstack");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter Projects
  const filteredProjects = projects.filter(
    (project) => project.category === filter,
  );

  return (
    <section
      className="bg-[#0a0c12] py-20 px-6 md:px-12 relative overflow-hidden"
      id="projects"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5f72ee]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section Badge */}
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            🚀 My Work
          </span>
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* Section Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-5 rounded-full"></div>
          {/* Section Description */}
          <p className="text-[#b9c3e6] mt-5 max-w-2xl mx-auto">
            Some of my best work showcasing modern UI, frontend, backend and
            full stack development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center gap-3 mb-14 flex-wrap transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filters.map((item) => (
            // Filter Button
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize border ${
                filter === item
                  ? "bg-gradient-to-r from-[#4f63ff] to-[#6c7dff] text-white border-transparent shadow-lg shadow-[#5f72ee]/20"
                  : "bg-[#101426] text-[#cdd9ff] border-[#2a3150] hover:border-[#5f72ee]"
              }`}
            >
              {item === "htmlcssjs"
                ? "HTML CSS JS"
                : item === "fullstack"
                  ? "Full Stack"
                  : item}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            // Project Card
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-full bg-gradient-to-br from-[#0f1222] to-[#090b13] rounded-3xl overflow-hidden border border-[#262b44] hover:border-[#5f72ee]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5f72ee]/10">
                {/* Image Section */}
                <div
                  className={`relative bg-gradient-to-br ${project.color} p-3`}
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[11px] font-semibold capitalize border backdrop-blur-xl
                        ${
                          project.category === "frontend"
                            ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/30"
                            : project.category === "backend"
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                              : project.category === "wordpress"
                                ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                                : project.category === "htmlcssjs"
                                  ? "bg-orange-500/20 text-orange-300 border-orange-400/30"
                                  : "bg-violet-500/20 text-violet-300 border-violet-400/30"
                        }`}
                    >
                      {project.category === "htmlcssjs"
                        ? "HTML CSS JS"
                        : project.category}
                    </span>
                  </div>

                  {/* Responsive Auto Height Image */}
                  <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#7c8fff] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#b9c3e6] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#1a1f36] rounded-lg text-[#7e8eff] text-xs border border-[#2a3150]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-[#d8e1ff] text-sm font-semibold mb-3">
                      Key Features
                    </p>

                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[#b9c3e6] text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-[#5f72ee] rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-5 border-t border-[#1e243e] mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5f7cff] text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#cdd9ff] text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
