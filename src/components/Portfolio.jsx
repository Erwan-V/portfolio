import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Projets</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}