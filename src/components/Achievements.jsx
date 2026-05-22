// src/components/Achievements.jsx
import { useState, useEffect } from "react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      id: 1,
      title: "Best Developer Award",
      organization: "Tech Solutions Inc.",
      year: "2024",
      description: "Recognized for outstanding contribution to major project delivery and team leadership.",
      icon: "🏆",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: 2,
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      year: "2023",
      description: "First place in national hackathon for building an AI-powered healthcare solution.",
      icon: "🥇",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2023",
      description: "Contributed to 10+ open source projects including React and Node.js libraries.",
      icon: "🌟",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 4,
      title: "100+ LeetCode Problems",
      organization: "LeetCode",
      year: "2024",
      description: "Solved over 100 data structure and algorithm problems on LeetCode platform.",
      icon: "💡",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 5,
      title: "Employee of the Month",
      organization: "Digital Solutions",
      year: "2023",
      description: "Awarded for exceptional performance and going above & beyond duties.",
      icon: "⭐",
      color: "from-red-500/20 to-rose-500/20",
    },
    {
      id: 6,
      title: "Published Technical Article",
      organization: "Medium",
      year: "2024",
      description: "Published article on 'Modern Web Development Trends' with 10k+ reads.",
      icon: "📝",
      color: "from-indigo-500/20 to-blue-500/20",
    },
  ];

  const stats = [
    { value: "15+", label: "Projects Completed", icon: "🚀" },
    { value: "10+", label: "Happy Clients", icon: "😊" },
    { value: "3+", label: "Years Experience", icon: "📅" },
    { value: "50+", label: "Code Reviews", icon: "💻" },
  ];

  return (
    <section className="bg-[#0a0c12] py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#3b4eff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#5f72ee]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <span className="text-[#9aa9ff] font-medium tracking-wide text-sm md:text-base bg-[#1e243e]/50 px-5 py-2 rounded-full border border-[#2a3150] inline-block mb-4">
            🏅 Recognition & Awards
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-[#8b9dff] to-[#5f7cff] bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3b4eff] to-[#5f72ee] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#b9c3e6] mt-4 max-w-2xl mx-auto">
            Milestones and recognition throughout my professional journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-[#0f1222] to-[#0a0c12] p-6 rounded-2xl border border-[#262b44] hover:border-[#3b4eff]/50 transition-all hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-[#b9c3e6] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`group transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#0f1222] to-[#0a0c12] rounded-2xl overflow-hidden border border-[#262b44] hover:border-[#3b4eff]/50 transition-all hover:scale-105 hover:shadow-2xl">
                <div className={`bg-gradient-to-br ${achievement.color} p-4`}>
                  <div className="flex justify-between items-start">
                    <span className="text-5xl">{achievement.icon}</span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs text-white">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#5f7cff] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[#5f7cff] text-sm mb-2">{achievement.organization}</p>
                  <p className="text-[#b9c3e6] text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;