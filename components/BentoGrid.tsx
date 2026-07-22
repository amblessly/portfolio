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
        image: "",
        desc: "A responsive web application built with HTML, CSS, and JavaScript.",
        images: ["/images/projects/snapcrate1.png", "/images/projects/snapcrate2.png"],
        pos: "left" as const,
      },
      {
        name: "Maren Restaurant",
        tech: "HTML · CSS · JavaScript",
        image: "",
        desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices.",
        images: ["/images/projects/maren1.png", "/images/projects/maren2.png"],
        pos: "center" as const,
      },
      {
        name: "SkyCast Weather App",
        tech: "JS · Open-Meteo API · Leaflet.js",
        image: "",
        desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization with a sleek and responsive user experience.",
        images: ["/images/projects/skycast1.png", "/images/projects/skycast2.png"],
        pos: "right" as const,
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
  desc: string;
  images: string[];
  pos: Pos;
};

type Pos = "center" | "left" | "right" | "hidden-left" | "hidden-right";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = project.images.filter(Boolean);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setImgIdx((p) => (p - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="project-modal-overlay open" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <div className="modal-body">
          <div className="modal-image-wrap">
            <img className="modal-image" src={images[imgIdx]} alt={project.name} />
            {images.length > 1 && (
              <>
                <button className="modal-img-nav modal-img-prev" onClick={() => setImgIdx((p) => (p - 1 + images.length) % images.length)} aria-label="Previous image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button className="modal-img-nav modal-img-next" onClick={() => setImgIdx((p) => (p + 1) % images.length)} aria-label="Next image">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
                <div className="modal-dots">
                  {images.map((_, i) => (
                    <span key={i} className={`modal-dot ${i === imgIdx ? "active" : ""}`} onClick={() => setImgIdx(i)} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="modal-info">
            <h3 className="modal-title">{project.name}</h3>
            <p className="modal-desc">{project.desc}</p>
            <div className="modal-tech">
              {project.tech.split(" · ").map((t) => (
                <span key={t} className="modal-tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Coverflow({ projects }: { projects: Project[] }) {
  const [center, setCenter] = useState(() => {
    const idx = projects.findIndex((p) => p.pos === "center");
    return idx >= 0 ? idx : 0;
  });
  const [modalProject, setModalProject] = useState<Project | null>(null);
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
    setCenter(i);
    timerRef.current = setInterval(goToNext, 3000);
  };

  const handleCenterClick = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setModalProject(projects[center]);
  };

  return (
    <>
      <div className="coverflow">
        {projects.map((p, i) => {
          const pos = positionOf(i);
          const clickable = pos === "left" || pos === "right" || pos === "center";
          const isCenter = pos === "center";
          return (
            <div
              className={`coverflow-card coverflow-${pos}`}
              key={p.name}
              onClick={() => isCenter ? handleCenterClick() : clickable && handleCardClick(i)}
              role="button"
              tabIndex={0}
            >
              <div className="coverflow-inner">
                <div className="coverflow-image">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <span className="coverflow-name">{p.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </>
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
          <Coverflow projects={cards[2].projects!} />
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
    </section>
  );
}