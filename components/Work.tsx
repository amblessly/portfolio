"use client";

import { useState } from "react";

const techCategories = [
  {
    category: "Languages",
    items: [
      {
        name: "HTML5",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 3l1.5 18L12 22l6.5-1L20 3H4z" /><path d="M16 7H8l.5 4h7l-.5 5-3.5 1-3.5-1" /></svg>,
      },
      {
        name: "CSS3",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 3l1.5 18L12 22l6.5-1L20 3H4z" /><path d="M8 7h8l-.5 5H9l-.5 5" /></svg>,
      },
      {
        name: "JavaScript",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
      },
      {
        name: "Java",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        name: "Next.js",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12 13V5" /></svg>,
      },
      {
        name: "React",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>,
      },
      {
        name: "Tailwind",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.13 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.92 7.45 14.77 6.3 12 6z" /></svg>,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" /><path d="M12 22V12M12 12L3 7M12 12l9-5" /></svg>,
      },
      {
        name: "GitHub",
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>,
      },
      {
        name: "VS Code",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 3l-5 5-5-5H3v18h3l5-5 5 5h3V3h-3z" /><path d="M11 10L3 3M11 14l-8 7M21 3l-8 8M21 21l-8-8" /></svg>,
      },
      {
        name: "Figma",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" /><path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" /><path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" /></svg>,
      },
    ],
  },
];

const githubIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

const liveIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
);

type Project = {
  title: string;
  image: string;
  desc: string;
  longDesc: string;
  tags: string[];
  tech: { name: string; type: string }[];
  features: string[];
  images: string[];
  demo: string | null;
  github: string;
};

const projects: Project[] = [
  {
    title: "Vello Coffee",
    image: "https://picsum.photos/seed/vello-coffee/600/340",
    desc: "A modern coffee shop website designed to showcase products, menu highlights, and brand identity through a responsive and visually engaging user experience.",
    longDesc: "Vello Coffee is a modern, responsive website built for a coffee shop brand. It features a clean landing page with hero section, menu showcase, product gallery, and contact area. The site focuses on visual appeal with smooth scroll animations, hover effects, and a warm color palette that reflects the coffee shop's identity.",
    tags: ["HTML", "CSS", "JavaScript"],
    tech: [
      { name: "HTML5", type: "Markup" },
      { name: "CSS3", type: "Styling" },
      { name: "JavaScript", type: "Language" },
      { name: "Google Fonts", type: "Typography" },
    ],
    features: [
      "Fully responsive layout for all screen sizes",
      "Smooth scroll animations and hover effects",
      "Interactive menu section with categories",
      "Product gallery with image hover zoom",
      "Clean brand-focused color palette",
    ],
    images: [
      "https://picsum.photos/seed/vello-coffee/800/450",
      "https://picsum.photos/seed/vello-coffee-menu/800/450",
      "https://picsum.photos/seed/vello-coffee-products/800/450",
    ],
    demo: "https://amblessly.github.io/vello-coffee/",
    github: "https://github.com/amblessly/vello-coffee",
  },
  {
    title: "Maren Restaurant",
    image: "https://picsum.photos/seed/maren-restaurant/600/340",
    desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices.",
    longDesc: "Maren Restaurant is a responsive website for a restaurant business. It includes a hero section, menu presentation with categorized items, business information, location details, and a reservation-friendly layout. Built with performance and mobile-first design in mind.",
    tags: ["HTML", "CSS", "JavaScript"],
    tech: [
      { name: "HTML5", type: "Markup" },
      { name: "CSS3", type: "Styling" },
      { name: "JavaScript", type: "Language" },
      { name: "Flexbox/Grid", type: "Layout" },
    ],
    features: [
      "Mobile-first responsive design",
      "Categorized menu display with prices",
      "Business hours and location section",
      "Smooth page transitions",
      "Optimized images for fast loading",
    ],
    images: [
      "https://picsum.photos/seed/maren-restaurant/800/450",
      "https://picsum.photos/seed/maren-menu/800/450",
      "https://picsum.photos/seed/maren-interior/800/450",
    ],
    demo: "https://amblessly.github.io/maren-restaurant/",
    github: "https://github.com/amblessly/maren-restaurant",
  },
  {
    title: "SkyCast Weather App",
    image: "https://picsum.photos/seed/skycast-weather/600/340",
    desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization.",
    longDesc: "SkyCast is a full-featured weather application that fetches real-time weather data from the Open-Meteo API. It displays current conditions, 24-hour forecasts, air quality index, and an interactive map using Leaflet.js. The app supports location search and provides detailed weather metrics in a clean, modern UI.",
    tags: ["HTML", "CSS", "JavaScript", "Open-Meteo API", "Leaflet.js"],
    tech: [
      { name: "HTML5", type: "Markup" },
      { name: "CSS3", type: "Styling" },
      { name: "JavaScript", type: "Language" },
      { name: "Open-Meteo API", type: "Weather Data" },
      { name: "Leaflet.js", type: "Interactive Map" },
      { name: "Geolocation API", type: "Location" },
    ],
    features: [
      "Real-time current weather conditions",
      "24-hour hourly forecast",
      "Air quality index (AQI) monitoring",
      "Interactive map with Leaflet.js",
      "Location search with autocomplete",
      "Temperature unit toggle (C/F)",
    ],
    images: [
      "https://picsum.photos/seed/skycast-weather/800/450",
      "https://picsum.photos/seed/skycast-forecast/800/450",
      "https://picsum.photos/seed/skycast-map/800/450",
    ],
    demo: "https://amblessly.github.io/skycast/",
    github: "https://github.com/amblessly/skycast",
  },
  {
    title: "Personal Portfolio",
    image: "https://picsum.photos/seed/personal-portfolio/600/340",
    desc: "A developer portfolio showcasing projects, skills, learning journey, and future goals as a Computer Science student and aspiring web developer.",
    longDesc: "This portfolio website is built with Next.js and React. It features an interactive terminal, AI chatbot integration, project showcases, certificate gallery with lightbox, skill animations, and a contact form. Designed to be performant on low-end devices with reduced-motion support.",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    tech: [
      { name: "Next.js 15", type: "Framework" },
      { name: "React 19", type: "UI Library" },
      { name: "TypeScript", type: "Language" },
      { name: "CSS3", type: "Styling" },
      { name: "OpenRouter API", type: "AI Chatbot" },
    ],
    features: [
      "Interactive terminal with command history",
      "AI chatbot powered by OpenRouter",
      "Project detail pages with image gallery",
      "Certificate lightbox viewer",
      "Performance optimized for low-end devices",
      "Dark/light theme toggle",
      "Responsive design for all screen sizes",
    ],
    images: [
      "https://picsum.photos/seed/personal-portfolio/800/450",
      "https://picsum.photos/seed/portfolio-terminal/800/450",
      "https://picsum.photos/seed/portfolio-projects/800/450",
    ],
    demo: null,
    github: "https://github.com/amblessly",
  },
];

type Tab = "projects" | "certificates" | "techstack";

type Cert = { name: string; src: string };

const certImages: Cert[] = [
  { name: "C++ Essentials 1", src: "/images/certificates/cpp-essentials-1.png" },
  { name: "Certificate Of Recognition", src: "/images/certificates/Certificate Of Recognition.png" },
  { name: "Getting Started with AWS Cloud Essentials", src: "/images/certificates/Getting Started with AWS Cloud Essentials.png" },
  { name: "Software Development with Amazon Q Developer", src: "/images/certificates/Software Development with Amazon Q Developer.png" },
  { name: "Statement of Achievement", src: "/images/certificates/Statement of Achievement.png" },
  { name: "Web Development Fundamentals", src: "/images/certificates/Web Development Fundamentals.png" },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [certView, setCertView] = useState<Cert | null>(null);
  const [projectView, setProjectView] = useState<Project | null>(null);
  const [projImgIdx, setProjImgIdx] = useState(0);

  return (
    <div className="bento-card work" id="work">
      <div className="bento-card-inner">
        <div className="section-label reveal">
          <span className="mono label-num">02.</span>
          <span>my work</span>
          <div className="label-line"></div>
        </div>
        <h2 className="section-title reveal">Things I&apos;ve been working on</h2>

        <div className="work-card">
          <div className="work-tabs-wrapper">
            <div className="work-tabs">
              <button
                className={`work-tab ${activeTab === "projects" ? "active" : ""}`}
                onMouseEnter={() => setActiveTab("projects")}
              >
                Projects
              </button>
              <button
                className={`work-tab ${activeTab === "certificates" ? "active" : ""}`}
                onMouseEnter={() => setActiveTab("certificates")}
              >
                Certificate
              </button>
              <button
                className={`work-tab ${activeTab === "techstack" ? "active" : ""}`}
                onMouseEnter={() => setActiveTab("techstack")}
              >
                Tech Stack
              </button>
            </div>
          </div>

          <div className="work-content-area">
            {activeTab === "projects" && !projectView && (
              <div className="work-content fade-in">
                <div className="projects-list">
                  {projects.map((p) => (
                    <div className="project-list-card" key={p.title} onClick={() => { setProjectView(p); setProjImgIdx(0); }}>
                      <div className="project-list-image">
                        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                      </div>
                      <div className="project-list-info">
                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>
                      </div>
                      <div className="project-list-action">
                        <span className="project-details-btn">
                          Details
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "projects" && projectView && (
              <div className="work-content proj-detail-inline">
                <button className="proj-detail-close" onClick={() => setProjectView(null)} aria-label="Close">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="proj-detail-gallery">
                  <img src={projectView.images[projImgIdx]} alt={projectView.title} className="proj-detail-img" />
                  {projectView.images.length > 1 && (
                    <>
                      <button className="proj-detail-nav proj-detail-prev" onClick={() => setProjImgIdx((i) => (i - 1 + projectView.images.length) % projectView.images.length)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                      </button>
                      <button className="proj-detail-nav proj-detail-next" onClick={() => setProjImgIdx((i) => (i + 1) % projectView.images.length)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                      <div className="proj-detail-dots">
                        {projectView.images.map((_, i) => (
                          <span key={i} className={`proj-dot ${i === projImgIdx ? "active" : ""}`} onClick={() => setProjImgIdx(i)} />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="proj-detail-body">
                  <h2 className="proj-detail-title">{projectView.title}</h2>
                  <p className="proj-detail-long">{projectView.longDesc}</p>

                  <div className="proj-detail-section">
                    <h4 className="proj-detail-label">Tech Stack</h4>
                    <div className="proj-detail-tech">
                      {projectView.tech.map((t) => (
                        <div className="proj-tech-chip" key={t.name}>
                          <span className="proj-tech-name">{t.name}</span>
                          <span className="proj-tech-type">{t.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="proj-detail-section">
                    <h4 className="proj-detail-label">Key Features</h4>
                    <ul className="proj-detail-features">
                      {projectView.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="proj-detail-actions">
                    {projectView.demo && (
                      <a href={projectView.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <span>Live Demo</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    )}
                    <a href={projectView.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="work-content fade-in">
                <div className="certificates-grid">
                  {certImages.map((cert) => (
                    <div className="certificate-card" key={cert.name} onClick={() => setCertView(cert)}>
                      <img src={cert.src} alt={cert.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {certView && (
              <div className="cert-lightbox" onClick={() => setCertView(null)}>
                <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
                  <button className="cert-lightbox-close" onClick={() => setCertView(null)} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                  <img src={certView.src} alt={certView.name} className="cert-lightbox-img" />
                  <p className="cert-lightbox-name">{certView.name}</p>
                </div>
              </div>
            )}

            {activeTab === "techstack" && (
              <div className="work-content fade-in">
                <div className="techstack-container">
                  {techCategories.map((cat) => (
                    <div className="tech-category" key={cat.category}>
                      <span className="tech-category-label mono">{cat.category}</span>
                      <div className="tech-cards">
                        {cat.items.map((item) => (
                          <div className="tech-card" key={item.name}>
                            <div className="tech-card-icon">
                              {item.icon}
                            </div>
                            <span className="tech-card-name">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
