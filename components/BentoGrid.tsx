"use client";

import { useState } from "react";

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
    title: "gallery",
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
    num: "06",
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

  const positionOf = (i: number): Pos => {
    const rel = (i - center + n) % n;
    if (rel === 0) return "center";
    if (rel === 1) return "right";
    if (rel === n - 1) return "left";
    if (rel < n / 2) return "hidden-right";
    return "hidden-left";
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
            onClick={() => clickable && setCenter(i)}
            role="button"
            tabIndex={0}
          >
            <div className="coverflow-inner">
              <div className="coverflow-image">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <span className="coverflow-name">{p.name}</span>
              <span className="coverflow-tech">{p.tech}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const n = images.length;

  const goTo = (next: number) => setIndex(((next % n) + n) % n);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const box = e.currentTarget as HTMLElement;
    const rect = box.getBoundingClientRect();
    setDragX(e.clientX - rect.left - rect.width / 2);
    setDragY(e.clientY - rect.top - rect.height / 2);
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    const x = dragX;
    const y = dragY;
    setDragX(0);
    setDragY(0);
    const dist = Math.hypot(x, y);
    if (dist < 20) return;
    if (Math.abs(x) > Math.abs(y)) {
      if (x < 0) next(); else prev();
    } else {
      if (y < 0) next(); else prev();
    }
  };

  return (
    <div
      className={`gallery${dragging ? " gallery-dragging" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="gallery-frame"
        style={{
          transform: `translate(${dragX}px, ${dragY}px)`,
          transition: dragging ? "none" : undefined,
        }}
      >
        <img src={images[index]} alt="" draggable={false} loading="lazy" />
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="bento-section">
<div className="bento-grid">
        <div className="bento-col">
          <div className="bento-card bento-tile reveal bento-tile-narrow" key="01">
            <div className="section-label">
              <span className="mono label-num">01.</span>
              <span>about me</span>
              <div className="label-line"></div>
            </div>
            <p className="bento-tile-desc">{cards[0].desc}</p>
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
        </div>

        <div className="bento-col">
          <div className="bento-card bento-tile reveal bento-tile-experience" key="02">
            <div className="section-label">
              <span className="mono label-num">02.</span>
              <span>experience</span>
              <div className="label-line"></div>
            </div>
            <p className="bento-tile-desc">{cards[1].desc}</p>
          </div>
          <div className="bento-row">
            <div className="bento-card bento-tile reveal bento-tile-gallery" key="04">
              <div className="section-label">
                <span className="mono label-num">04.</span>
                <span>{cards[3].title}</span>
                <div className="label-line"></div>
              </div>
              {cards[3].desc && <p className="bento-tile-desc">{cards[3].desc}</p>}
              <Gallery images={cards[3].gallery!} />
            </div>

            <div className="bento-card bento-tile reveal" key="05">
              <div className="section-label">
                <span className="mono label-num">05.</span>
                <span>{cards[4].title}</span>
                <div className="label-line"></div>
              </div>
              <p className="bento-tile-desc">{cards[4].desc}</p>
              <Gallery images={cards[4].gallery!} />
            </div>
          </div>
          <div className="bento-card bento-tile reveal" key="06">
            <div className="section-label">
              <span className="mono label-num">06.</span>
              <span>{cards[5].title}</span>
              <div className="label-line"></div>
            </div>
            <p className="bento-tile-desc">{cards[5].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}