const skills = [
  {
    name: "HTML",
    level: "Semantic · Accessible",
    width: 90,
    icon: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></>),
  },
  {
    name: "CSS",
    level: "Layouts · Animations",
    width: 85,
    icon: (<><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>),
  },
  {
    name: "JavaScript",
    level: "DOM · Interactivity",
    width: 72,
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    name: "Java",
    level: "OOP · Basics",
    width: 65,
    icon: (<><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></>),
  },
  {
    name: "Responsive Design",
    level: "Mobile-first",
    width: 82,
    icon: (<><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>),
  },
  {
    name: "UI Design",
    level: "Figma · Visual",
    width: 70,
    icon: (<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>),
  },
  {
    name: "Git & GitHub",
    level: "Version Control",
    width: 75,
    icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />,
  },
  {
    name: "VS Code",
    level: "Daily Driver",
    width: 88,
    icon: (<><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>),
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">03.</span>
          <span>skills &amp; tools</span>
          <div className="label-line"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card reveal" data-delay={i * 60} key={skill.name}>
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {skill.icon}
                </svg>
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar"><div className="skill-fill" data-width={skill.width}></div></div>
              <span className="skill-level mono">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
