const services = [
  {
    title: "Business Websites",
    desc: "Simple, professional websites for small businesses — presenting your brand, services, and contact information in a clean, mobile-ready layout.",
    icon: (<><rect x="2" y="7" width="20" height="15" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="17" /><line x1="9" y1="14.5" x2="15" y2="14.5" /></>),
    delay: 0,
  },
  {
    title: "Landing Pages",
    desc: "Single-page sites designed to communicate one clear message — great for product launches, promotions, or online presence for a specific service.",
    icon: (<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>),
    delay: 80,
  },
  {
    title: "Portfolio Websites",
    desc: "Personal portfolio sites for creatives, students, and professionals. Showcase your work in a polished, web-native format that stands out.",
    icon: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12.01" y2="12" /></>),
    delay: 160,
  },
  {
    title: "Website Redesigns",
    desc: "Have an existing website that feels outdated? I can rebuild or refresh the design — improving visual quality, responsiveness, and user experience.",
    icon: (<><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></>),
    delay: 240,
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">03.</span>
          <span>services</span>
          <div className="label-line"></div>
        </div>
        <div className="services-card">
          <p className="services-intro reveal">I take on small freelance projects — clean, responsive websites built with care. No bloated templates, no over-promise. Just honest work at a student-friendly pace.</p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card reveal" data-delay={s.delay} key={s.title}>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="services-note reveal mono">// Interested? Let&apos;s talk — <a href="#contact" className="accent">send me a message.</a></p>
        </div>
      </div>
    </section>
  );
}
