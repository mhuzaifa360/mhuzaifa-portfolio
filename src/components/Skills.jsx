const skills = [
  "HTML", "CSS", "JavaScript",
  "React", "Tailwind CSS",
  "Node.js", "Express.js"
]

export default function Skills() {
  return (
    <section id="skills" className="p-10">
      <h2 className="text-3xl font-bold">Skills</h2>

      <div className="flex flex-wrap gap-3 mt-5">
        {skills.map((s, i) => (
          <span key={i} className="bg-gray-800 px-4 py-2 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}