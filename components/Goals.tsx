const goals = [
  {
    state: "done",
    year: "Where it started",
    title: "Grade 12 ICT Graduate",
    desc: "Completed the ICT strand, learned the fundamentals of programming and web design, and shipped my first real projects. This is where the interest became a commitment.",
    badge: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    badgeText: "Complete",
    delay: 0,
  },
  {
    state: "active",
    year: "Right now",
    title: "CS Student · Building Projects",
    desc: "Studying Computer Science, improving my web development skills, building projects to grow my portfolio, and exploring freelance opportunities. Every week I'm learning something new.",
    badge: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    badgeText: "Now",
    delay: 100,
  },
  {
    state: "future",
    year: "Near future",
    title: "Freelance & Internship",
    desc: "Take on more freelance projects, build a stronger client portfolio, and land an internship where I can contribute to real software alongside experienced developers.",
    badge: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    badgeText: "Goal",
    delay: 200,
  },
  {
    state: "future",
    year: "Long term",
    title: "Software Engineer",
    desc: "Graduate, join a team building software that matters, contribute to open source, and keep growing — ideally in web, full-stack, or software engineering.",
    badge: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="2" x2="22" y2="22" /><path d="M10.5 10.5A3 3 0 1013.5 13.5" /><path d="M14 5a7.5 7.5 0 015.5 5.5" /><path d="M8 3a10.5 10.5 0 00-5 14.5" /></svg>,
    badgeText: "Vision",
    delay: 300,
  },
];

export default function Goals() {
  return (
    <section className="goals section" id="goals">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">04.</span>
          <span>the roadmap</span>
          <div className="label-line"></div>
        </div>
        <h2 className="section-title reveal">Where I&apos;m headed</h2>
        <div className="timeline">
          {goals.map((g) => (
            <div className={`timeline-item ${g.state} reveal`} data-delay={g.delay} key={g.title}>
              <div className={`tl-dot${g.state === "active" ? " tl-dot-active" : g.state === "future" ? " tl-dot-future" : ""}`}></div>
              {g.state !== "future" && <div className="tl-connector"></div>}
              <div className="tl-content">
                <span className="tl-year mono">{g.year}</span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <span className={`tl-badge ${g.state}-badge`}>{g.badge} {g.badgeText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
