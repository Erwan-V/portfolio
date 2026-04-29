import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Project</h2>

      <div className="projects">
        {projects.map((project, index) => (
          
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>

        ))}
      </div>
    </section>
  );
}