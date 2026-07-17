"use client";

import { useState } from "react";

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

export default function Work() {
  const [projectView, setProjectView] = useState<Project | null>(null);
  const [projImgIdx, setProjImgIdx] = useState(0);

  return (
    <div className="bento-card work" id="work">
        <div className="section-label reveal">
          <span className="mono label-num">02.</span>
          <span>my work</span>
          <div className="label-line"></div>
        </div>
        <h2 className="section-title reveal">Things I&apos;ve been working on</h2>

        <div className="work-card">
          {!projectView ? (
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
          ) : (
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
        </div>
    </div>
  );
}
