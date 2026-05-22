// src/components/Projects.jsx
import { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      description:
        "Full-featured e-commerce platform with cart, payments, and admin dashboard.",
      features: [
        "User auth",
        "Product management",
        "Stripe integration",
        "Order tracking",
      ],
      icon: "🛒",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "fullstack",
      tech: ["React", "Express", "MongoDB", "Redux"],
      description:
        "Collaborative task management tool with real-time updates and team features.",
      features: [
        "Drag & drop",
        "Real-time sync",
        "Team workspaces",
        "File attachments",
      ],
      icon: "✅",
      color: "from-green-500/20 to-teal-500/20",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "frontend",
      tech: ["React", "Tailwind", "Framer Motion"],
      description:
        "Modern, animated portfolio website with dark theme and responsive design.",
      features: [
        "Smooth animations",
        "Fully responsive",
        "Dark/Light mode",
        "Contact form",
      ],
      icon: "🎨",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "frontend",
      tech: ["React", "Chart.js", "Tailwind"],
      description:
        "Analytics dashboard for social media metrics with beautiful charts.",
      features: [
        "Real-time data",
        "Interactive charts",
        "Export reports",
        "Custom widgets",
      ],
      icon: "📊",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: 5,
      title: "Blog Platform API",
      category: "backend",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      description:
        "RESTful API for blog platform with authentication and CRUD operations.",
      features: ["JWT auth", "Role-based access", "Pagination", "Swagger docs"],
      icon: "📝",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      id: 6,
      title: "Chat Application",
      category: "fullstack",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      description:
        "Real-time chat application with rooms, direct messages, and file sharing.",
      features: [
        "Real-time messaging",
        "Typing indicators",
        "Online status",
        "Media sharing",
      ],
      icon: "💬",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="bg-[#0a0c12] py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5f72ee]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            🚀 My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#b9c3e6] mt-4 max-w-2xl mx-auto">
            Some of my best work showcasing my skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center gap-3 mb-12 flex-wrap transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white shadow-lg"
                : "bg-[#0f1222] text-[#cdd9ff] border border-[#2a3150] hover:border-[#5f7cff]"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "frontend"
                ? "bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white shadow-lg"
                : "bg-[#0f1222] text-[#cdd9ff] border border-[#2a3150] hover:border-[#5f7cff]"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "backend"
                ? "bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white shadow-lg"
                : "bg-[#0f1222] text-[#cdd9ff] border border-[#2a3150] hover:border-[#5f7cff]"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === "fullstack"
                ? "bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] text-white shadow-lg"
                : "bg-[#0f1222] text-[#cdd9ff] border border-[#2a3150] hover:border-[#5f7cff]"
            }`}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 delay-${index * 100} transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#0f1222] to-[#0a0c12] rounded-2xl overflow-hidden border border-[#262b44] hover:border-[#3b4eff]/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#3b4eff]/10">
                {/* Project Header with Gradient */}
                <div className={`bg-gradient-to-br ${project.color} p-6`}>
                  <div className="flex justify-between items-start">
                    <span className="text-5xl">{project.icon}</span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs text-white capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5f7cff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#b9c3e6] text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#1a1f36] rounded-md text-[#7e8eff] text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="mb-4">
                    <p className="text-[#cdd9ff] text-xs font-semibold mb-2">
                      Key Features:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <span key={i} className="text-[#b9c3e6] text-xs">
                          • {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="text-[#5f7cff] text-xs">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-[#1e243e]">
                    <a
                      href="#"
                      className="text-[#5f7cff] text-sm hover:text-white transition-colors flex items-center gap-1"
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
                      href="#"
                      className="text-[#cdd9ff] text-sm hover:text-white transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5f72ee] text-[#cddcff] font-semibold hover:bg-[#5f72ee]/10 hover:scale-105 transition-all"
          >
            View All Projects
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
