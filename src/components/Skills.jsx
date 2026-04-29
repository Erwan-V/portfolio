export default function Skills() {
  const skills = ["React", "JavaScript", "PHP", "WordPress", "Symfony", "HTML", "CSS"];

  return (
    <section id="skills">
      <h2>Compétences</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}