export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        
        <div className="card">
          <h3>E-Commerce App</h3>
          <p>Full MERN stack shopping platform</p>
        </div>

        <div className="card">
          <h3>Job Portal</h3>
          <p>AI-based job matching system</p>
        </div>

      </div>
    </section>
  );
}