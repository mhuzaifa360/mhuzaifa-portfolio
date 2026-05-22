import React from "react";

export default function Skills() {
  const skills = ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JavaScript"];

  return (
    <div className="px-10 py-20">

      <h2 className="text-3xl font-bold text-center mb-10 text-gold">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-[#111] border border-gray-800 rounded-full hover:bg-gold hover:text-black transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </div>
  );
}