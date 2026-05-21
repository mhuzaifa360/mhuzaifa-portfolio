const projects = [
  {
    name: "TutorNest",
    desc: "Online learning platform for students and tutors.",
  },
  {
    name: "Portfolio Website",
    desc: "Modern responsive portfolio design.",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}