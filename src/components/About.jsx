function Timeline({ items }) {
  return <div className="timeline">{items.map((item) => <article className="timeline-item" key={`${item.year}-${item.role}`}>
    <div className="timeline-marker" /><div className="timeline-content"><span className="timeline-year">{item.year}</span><h3 className="timeline-role">{item.role}</h3><h4 className="timeline-company">{item.company}</h4><p className="timeline-desc">{item.desc}</p></div>
  </article>)}</div>;
}

export default function About({ copy }) {
  return <section id="about">
    <div className="about-intro">
      <div className="about-copy"><p className="section-label">{copy.label}</p><h2 className="section-title">{copy.title}</h2>
        <div className="about-text">{copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="about-stats">{copy.stats.map(([value, label]) => <div className="stat-card" key={label}><div className="stat-num">{value}</div><div className="stat-label">{label}</div></div>)}</div>
    </div>
    <div className="career-grid">
      <div className="career-column"><p className="section-label">{copy.journeyLabel}</p><h2 className="section-title">{copy.journeyTitle}</h2><Timeline items={copy.timeline} /></div>
      <div className="career-column"><p className="section-label">{copy.educationLabel}</p><h2 className="section-title">{copy.educationTitle}</h2><Timeline items={copy.education} /></div>
    </div>
  </section>;
}
