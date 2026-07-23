"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const cards = [
  {
    num: "01",
    title: "about me",
    narrow: true,
    desc: "Curious by nature, developer by choice. I'm Blessly — a Grade 12 ICT graduate and Computer Science student who got genuinely hooked on building things for the web. It started with a simple question: \"how does a website actually work?\" That curiosity turned into late nights reading documentation, breaking things in the browser, and slowly figuring it out through practice. I focus on web development — writing clean HTML and CSS, adding interactivity with JavaScript, and making sure everything looks right on every screen size. I'm continuously improving my skills through real projects, Computer Science studies, and hands-on practice. I'm always looking for opportunities to learn, contribute, and build better software. Right now I'm studying Computer Science, deepening my understanding of how software works at a foundational level, and taking on small freelance projects on the side. I'm open to opportunities that help me learn, contribute, and grow.",
  },
  {
    num: "02",
    title: "experience",
    desc: "Back in Grade 11, I was tasked to build a system — a system management system. There were 2 of us programmers on that project. The tech we used was Java, with MySQL and XAMPP, and NetBeans as our IDE. That was my very first real program, and it was an actual system — solid experience.",
  },
  {
    num: "03",
    title: "projects",
    desc: "Things I've been working on",
    projects: [
      {
        name: "SnapCrate",
        tech: "HTML · CSS · JavaScript",
        image: "/images/projects/snapcrate.png",
        pos: "left" as const,
        desc: "A modern e-commerce web application featuring a clean product catalog, shopping cart functionality, and responsive design. Built with semantic HTML, custom CSS layouts, and vanilla JavaScript for interactivity.",
        images: [
          "/images/projects/snapcrate.png",
          "https://picsum.photos/seed/snap1/800/500",
          "https://picsum.photos/seed/snap2/800/500",
        ],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        name: "Maren Restaurant",
        tech: "HTML · CSS · JavaScript",
        image: "https://picsum.photos/seed/maren0/800/500",
        pos: "center" as const,
        desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices. Includes animated sections and smooth navigation.",
        images: [
          "https://picsum.photos/seed/maren1/800/500",
          "https://picsum.photos/seed/maren2/800/500",
          "https://picsum.photos/seed/maren3/800/500",
        ],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        name: "SkyCast Weather App",
        tech: "JS · Open-Meteo API · Leaflet.js",
        image: "https://picsum.photos/seed/skycast0/800/500",
        pos: "right" as const,
        desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization with a sleek and responsive user experience.",
        images: [
          "https://picsum.photos/seed/skycast1/800/500",
          "https://picsum.photos/seed/skycast2/800/500",
          "https://picsum.photos/seed/skycast3/800/500",
        ],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
  },
  {
    num: "04",
    title: "certificates",
    desc: "",
    gallery: [
      "/images/certificates/Web Development Fundamentals.png",
      "/images/certificates/Getting Started with AWS Cloud Essentials.png",
      "/images/certificates/cpp-essentials-1.png",
      "/images/certificates/Statement of Achievement.png",
      "/images/certificates/Certificate Of Recognition.png",
      "/images/certificates/Software Development with Amazon Q Developer.png",
    ],
  },
  {
    num: "05",
    title: "skills",
    desc: "JavaScript · TypeScript · React · Next.js · HTML · CSS · Java · MySQL · Git",
  },
];

type Project = {
  name: string;
  tech: string;
  image: string;
  pos: Pos;
  desc: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
};

type Pos = "center" | "left" | "right" | "hidden-left" | "hidden-right";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setCurrentImage(0);
    setImgLoaded(false);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length);
      if (e.key === "ArrowRight")
        setCurrentImage((p) => (p + 1) % project.images.length);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, project.images.length]);

  const prevImage = () => {
    setImgLoaded(false);
    setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length);
  };

  const nextImage = () => {
    setImgLoaded(false);
    setCurrentImage((p) => (p + 1) % project.images.length);
  };

  const techList = project.tech.split(" · ");

  return (
    <div
      className="proj-detail-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={project.name + " details"}
    >
      <div className="proj-detail-modal">
        <button
          className="proj-detail-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="proj-detail-gallery">
          <img
            className="proj-detail-img"
            src={project.images[currentImage]}
            alt={project.name + " screenshot " + (currentImage + 1)}
            onLoad={() => setImgLoaded(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
          {project.images.length > 1 && (
            <>
              <button
                className="proj-detail-nav proj-detail-prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="proj-detail-nav proj-detail-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
          <div className="proj-detail-dots">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={"proj-dot" + (i === currentImage ? " active" : "")}
                onClick={() => { setImgLoaded(false); setCurrentImage(i); }}
                aria-label={"Go to image " + (i + 1)}
              />
            ))}
          </div>
        </div>

        <div className="proj-detail-body">
          <h3 className="proj-detail-title">{project.name}</h3>
          <p className="proj-detail-long">{project.desc}</p>

          <div className="proj-detail-section">
            <span className="proj-detail-label">Tech Stack</span>
            <div className="proj-detail-tech">
              {techList.map((t) => (
                <span className="proj-tech-chip" key={t}>
                  <span className="proj-tech-name">{t}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="proj-detail-actions">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                className="btn btn-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                className="btn btn-ghost"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Coverflow({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (i: number) => void;
}) {
  const [center, setCenter] = useState(() => {
    const idx = projects.findIndex((p) => p.pos === "center");
    return idx >= 0 ? idx : 0;
  });
  const n = projects.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const positionOf = (i: number): Pos => {
    const rel = (i - center + n) % n;
    if (rel === 0) return "center";
    if (rel === 1) return "right";
    if (rel === n - 1) return "left";
    if (rel < n / 2) return "hidden-right";
    return "hidden-left";
  };

  const goToNext = useCallback(() => {
    setCenter((prev) => (prev + 1) % n);
  }, [n]);

  useEffect(() => {
    timerRef.current = setInterval(goToNext, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext]);

  const handleCardClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const pos = positionOf(i);
    if (pos === "center") {
      onSelect(i);
    } else {
      setCenter(i);
    }
    timerRef.current = setInterval(goToNext, 3000);
  };

  return (
    <div className="coverflow">
      {projects.map((p, i) => {
        const pos = positionOf(i);
        const clickable = pos === "left" || pos === "right" || pos === "center";
        return (
          <div
            className={`coverflow-card coverflow-${pos}`}
            key={p.name}
            onClick={() => clickable && handleCardClick(i)}
            role="button"
            tabIndex={0}
          >
            <div className="coverflow-inner">
              <div className="coverflow-image">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <span className="coverflow-name">{p.name}</span>
              <span className="coverflow-tech">{p.tech}</span>
              {pos === "center" && (
                <span className="coverflow-view-hint">Click to view details</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [page, setPage] = useState(0);
  const [imgHeight, setImgHeight] = useState(100);
  const perPage = 2;
  const totalPages = Math.ceil(images.length / perPage);

  useEffect(() => {
    const getHeight = () => {
      const w = window.innerWidth;
      if (w <= 480) return 150;
      if (w <= 640) return 130;
      return 100;
    };
    setImgHeight(getHeight());
    const onResize = () => setImgHeight(getHeight());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const start = page * perPage;
  const visible = images.slice(start, start + perPage);

  return (
    <div className="gallery-btn-wrap">
      <div className="gallery-pair" style={{ height: imgHeight }}>
        {visible.map((src, i) => {
          const idx = start + i;
          return (
            <div className="gallery-thumb" key={idx}>
              <img src={src} alt="" draggable={false} loading="lazy" />
            </div>
          );
        })}
      </div>
      <div className="gallery-nav">
        <button className="gallery-nav-btn" onClick={prev} aria-label="Previous">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span className="gallery-counter mono">{page + 1} / {totalPages}</span>
        <button className="gallery-nav-btn" onClick={next} aria-label="Next">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = cards[2].projects!;

  return (
    <section className="bento-section">
      <div className="bento-grid">
        <div className="bento-card bento-tile reveal bento-tile-narrow" key="01">
          <div className="section-label">
            <span className="mono label-num">01.</span>
            <span>about me</span>
            <div className="label-line"></div>
          </div>
          <p className="bento-tile-desc">{cards[0].desc}</p>
        </div>

        <div className="bento-card bento-tile reveal bento-tile-experience" key="02">
          <div className="section-label">
            <span className="mono label-num">02.</span>
            <span>experience</span>
            <div className="label-line"></div>
          </div>
          <p className="bento-tile-desc">{cards[1].desc}</p>
        </div>

        <div className="bento-card bento-tile reveal bento-tile-work" key="03">
          <div className="section-label">
            <span className="mono label-num">03.</span>
            <span>{cards[2].title}</span>
            <div className="label-line"></div>
          </div>
          <p className="bento-tile-desc">{cards[2].desc}</p>
          <Coverflow
            projects={projects}
            onSelect={(i) => setSelectedProject(projects[i])}
          />
        </div>

        <div className="bento-card bento-tile reveal bento-tile-gallery" key="04">
          <div className="section-label">
            <span className="mono label-num">04.</span>
            <span>{cards[3].title}</span>
            <div className="label-line"></div>
          </div>
          {cards[3].desc && <p className="bento-tile-desc">{cards[3].desc}</p>}
          <Gallery images={cards[3].gallery!} />
        </div>

        <div className="bento-card bento-tile reveal bento-tile-skills" key="05">
          <div className="section-label">
            <span className="mono label-num">05.</span>
            <span>{cards[4].title}</span>
            <div className="label-line"></div>
          </div>
          <p className="bento-tile-desc">{cards[4].desc}</p>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
