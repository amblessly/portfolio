const cards = [
  {
    num: "01",
    title: "About Me",
    desc: "Grade 12 ICT graduate and CS student who loves building for the web.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>),
  },
  {
    num: "02",
    title: "My Work",
    desc: "Real projects built with care — from coffee shops to weather apps.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>),
  },
  {
    num: "03",
    title: "Services",
    desc: "Clean, responsive websites — business sites, landing pages, portfolios.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 015 5l-8 8a2 2 0 01-2.8 0l-3.2-3.2a2 2 0 010-2.8l8-8z" /><line x1="14" y1="7" x2="17" y2="10" /></svg>),
  },
  {
    num: "04",
    title: "Roadmap",
    desc: "From ICT graduate to software engineer — always learning and growing.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>),
  },
];

export default function BentoGrid() {
  return (
    <section className="bento-section">
      <div className="bento-grid">
        {cards.map((c) => (
          <div className="bento-card bento-tile reveal" key={c.num}>
            <div className="bento-tile-icon">{c.icon}</div>
            <span className="mono bento-tile-num">{c.num}.</span>
            <h3 className="bento-tile-title">{c.title}</h3>
            <p className="bento-tile-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
