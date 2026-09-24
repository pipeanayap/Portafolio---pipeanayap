export default function Projects({ copy }) {
  return <section id="projects"><p className="section-label">{copy.label}</p><h2 className="section-title">{copy.title}</h2>
    <div className="projects-grid">{copy.items.map((project) => <article className="project-card" key={project.title}>
      <span className="project-tag">{project.tag}</span><h3 className="project-title">{project.title}</h3><p className="project-desc">{project.desc}</p>
      <div className="project-tech-list">{project.tech.map((item) => <span className="tech-badge" key={item}>{item}</span>)}</div>
    </article>)}</div>
  </section>;
}
