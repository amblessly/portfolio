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
      { name: "SnapCrate", tech: "HTML · CSS · JavaScript", image: "/images/projects/snapcrate.png", pos: "left" as const },
      { name: "Maren Restaurant", tech: "HTML · CSS · JavaScript", image: "/images/projects/snapcrate.png", pos: "center" as const },
      { name: "SkyCast Weather App", tech: "JS · Open-Meteo API · Leaflet.js", image: "/images/projects/snapcrate.png", pos: "right" as const },
    ],
  },
  {
    num: "04",
    title: "certificates",
    desc: "",
    gallery: [
      "/images/projects/snapcrate.png",
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

type Project = { name: string; tech: string; image: string; pos: Pos };

type Pos = "center" | "left" | "right" | "hidden-left" | "hidden-right";

function Coverflow({ projects }: { projects: Project[] }) {
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
    setCenter(i);
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [page, setPage] = useState(0);
  const [imgWidths, setImgWidths] = useState<Record<number, number>>({});
  const perPage = 2;
  const totalPages = Math.ceil(images.length / perPage);
  const imgHeight = 80;

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const start = page * perPage;
  const visible = images.slice(start, start + perPage);

  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.onload = () => {
        setImgWidths((prev) => ({
          ...prev,
          [i]: Math.round((img.naturalWidth / img.naturalHeight) * imgHeight),
        }));
      };
      img.src = src;
    });
  }, [images]);

  return (
    <div className="gallery-btn-wrap">
      <div className="gallery-pair">
        {visible.map((src, i) => {
          const idx = start + i;
          const w = imgWidths[idx] || 120;
          return (
            <div className="gallery-thumb" key={idx} style={{ width: w, height: imgHeight }}>
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