export default function Education() {
  return (
    <section className="goals section" id="education">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">02.</span>
          <span>education</span>
          <div className="label-line"></div>
        </div>
        <h2 className="section-title reveal">Academic journey</h2>
        <div className="timeline">
          <div className="timeline-item done reveal" data-delay="0">
            <div className="tl-dot"></div>
            <div className="tl-connector"></div>
            <div className="tl-content">
              <span className="tl-year mono">Senior High School</span>
              <h3>Grade 12 · ICT Track</h3>
              <p>Completed the Information and Communications Technology strand. Gained foundational knowledge in programming, web design, and computer systems. Built my first web projects and discovered a genuine passion for software development.</p>
              <span className="tl-badge done-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Graduate</span>
            </div>
          </div>
          <div className="timeline-item active reveal" data-delay="120">
            <div className="tl-dot tl-dot-active"></div>
            <div className="tl-connector"></div>
            <div className="tl-content">
              <span className="tl-year mono">Now</span>
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Incoming BS Computer Science Student — diving deeper into algorithms, data structures, software design, and the theoretical foundations that make great software possible. Building projects alongside my studies to apply what I learn in practice.</p>
              <span className="tl-badge active-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> In Progress</span>
            </div>
          </div>
          <div className="timeline-item future reveal" data-delay="240">
            <div className="tl-dot tl-dot-future"></div>
            <div className="tl-content">
              <span className="tl-year mono">Ahead</span>
              <h3>Software Engineer</h3>
              <p>The long-term goal — applying everything I&apos;ve studied and built to a real career in software. Aiming to contribute to meaningful products, collaborate with a good team, and keep growing as a developer.</p>
              <span className="tl-badge future-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> Goal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
