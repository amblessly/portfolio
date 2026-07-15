const githubIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

const liveIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
);

const projects = [
  {
    index: 0,
    title: "Vello Coffee",
    image: "https://picsum.photos/seed/vello-coffee/600/340",
    desc: "A modern coffee shop website designed to showcase products, menu highlights, and brand identity through a responsive and visually engaging user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://amblessly.github.io/vello-coffee/",
    github: "https://github.com/amblessly/vello-coffee",
    delay: 0,
  },
  {
    index: 1,
    title: "Maren Restaurant",
    image: "https://picsum.photos/seed/maren-restaurant/600/340",
    desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://amblessly.github.io/maren-restaurant/",
    github: "https://github.com/amblessly/maren-restaurant",
    delay: 80,
  },
  {
    index: 2,
    title: "SkyCast Weather App",
    image: "https://picsum.photos/seed/skycast-weather/600/340",
    desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization with a sleek and responsive user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Open-Meteo API", "Leaflet.js"],
    demo: "https://amblessly.github.io/skycast/",
    github: "https://github.com/amblessly/skycast",
    delay: 160,
  },
  {
    index: 3,
    title: "Personal Portfolio",
    image: "https://picsum.photos/seed/personal-portfolio/600/340",
    desc: "A developer portfolio showcasing projects, skills, learning journey, and future goals as a Computer Science student and aspiring web developer.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: null,
    github: "https://github.com/amblessly",
    delay: 160,
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">04.</span>
          <span>projects</span>
          <div className="label-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card reveal" data-delay={p.delay} key={p.title}>
              <div className="project-image" data-index={p.index} role="button" tabIndex={0} aria-label={`View ${p.title} gallery`}>
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                <div className="project-image-overlay">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M22 12s-4 7-10 7-10-7-10-7 4-7 10-7 10 7 10 7z" /></svg>
                  <span>View Gallery</span>
                </div>
              </div>
              <div className="project-top">
                <div className="project-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                </div>
                <div className="project-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                      {liveIcon}
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                    {githubIcon}
                  </a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              {p.demo && (
                <div className="project-actions">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    <span>Live Demo</span>
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    {githubIcon}
                    <span>GitHub</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
