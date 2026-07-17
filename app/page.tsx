"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Page() {
  useEffect(() => {
    // ─── THEME TOGGLE ─────────────────────────────────────────────────
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    root.setAttribute("data-theme", savedTheme);

    themeToggle?.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
    });

    // ─── TYPING ANIMATION ────────────────────────────────────────────────
    const roles = [
      "Web Developer",
      "Computer Science Student",
      "Front-End Developer",
      "Grade 12 ICT Graduate",
      "Aspiring Software Engineer",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingEl = document.getElementById("typingText");

    function type() {
      if (!typingEl) return;
      const current = roles[roleIndex];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 50 : 90;

      if (!isDeleting && charIndex === current.length) {
        delay = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }
    setTimeout(type, 800);

    // ─── SCROLL REVEAL ───────────────────────────────────────────────────
    const revealEls = document.querySelectorAll(".reveal, .reveal-right");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0");
            setTimeout(() => el.classList.add("visible"), delay);
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // ─── SKILL BAR ANIMATION ─────────────────────────────────────────────
    const skillCards = document.querySelectorAll(".skill-card");

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = (entry.target as HTMLElement).querySelector(".skill-fill");
            if (fill) {
              const targetWidth = (fill as HTMLElement).dataset.width + "%";
              const delay = parseInt((entry.target as HTMLElement).dataset.delay || "0");
              setTimeout(() => {
                (fill as HTMLElement).style.width = targetWidth;
              }, delay + 200);
            }
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillCards.forEach((card) => skillObserver.observe(card));

    // ─── CONTRIBUTION GRID ───────────────────────────────────────────────
    const grid = document.getElementById("contribGrid");
    if (grid) {
      const cells = 182;
      const levels = [0, 0, 0, 1, 1, 2, 2, 3, 4];
      for (let i = 0; i < cells; i++) {
        const cell = document.createElement("div");
        cell.className = "contrib-cell";
        const rand = Math.random();
        if (rand > 0.55) {
          const level = levels[Math.floor(Math.random() * levels.length)];
          if (level > 0) cell.classList.add("l" + level);
        }
        grid.appendChild(cell);
      }
    }

    // ─── CONTACT FORM ────────────────────────────────────────────────────
    const form = document.getElementById("contactForm") as HTMLFormElement | null;
    const formNote = document.getElementById("formNote");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit'] span");
      if (btn) btn.textContent = "Sending...";

      setTimeout(() => {
        if (btn) btn.textContent = "Send Message";
        form.reset();
        if (formNote) formNote.textContent = "✓ Message sent! I'll get back to you soon.";
        setTimeout(() => {
          if (formNote) formNote.textContent = "";
        }, 4000);
      }, 1200);
    });

    // ─── ACTIVE NAV HIGHLIGHT ON SCROLL ──────────────────────────────────
    const sections = document.querySelectorAll("section[id], .bento-card[id]");
    const navLinks = document.querySelectorAll(".navbar-links a");

    const onHighlightScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id") || "";
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", onHighlightScroll, { passive: true });

    // ─── SMOOTH HOVER TILT ON PROJECT CARDS ──────────────────────────────
    document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const tiltX = ((y - cy) / cy) * 4;
        const tiltY = ((cx - x) / cx) * 4;
        (card as HTMLElement).style.transform = `translateY(-6px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform = "";
      });
    });

    // ─── PROJECT GALLERY MODAL ───────────────────────────────────────────
    const projectsData = [
      {
        title: "Vello Coffee",
        desc: "A modern coffee shop website designed to showcase products, menu highlights, and brand identity through a responsive and visually engaging user experience.",
        images: [
          "https://picsum.photos/seed/vello1/800/500",
          "https://picsum.photos/seed/vello2/800/500",
          "https://picsum.photos/seed/vello3/800/500",
        ],
      },
      {
        title: "Maren Restaurant",
        desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices.",
        images: [
          "https://picsum.photos/seed/maren1/800/500",
          "https://picsum.photos/seed/maren2/800/500",
          "https://picsum.photos/seed/maren3/800/500",
        ],
      },
      {
        title: "SkyCast Weather App",
        desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization with a sleek and responsive user experience.",
        images: [
          "https://picsum.photos/seed/skycast1/800/500",
          "https://picsum.photos/seed/skycast2/800/500",
          "https://picsum.photos/seed/skycast3/800/500",
        ],
      },
      {
        title: "Personal Portfolio",
        desc: "A developer portfolio showcasing projects, skills, learning journey, and future goals as a Computer Science student and aspiring web developer.",
        images: [
          "https://picsum.photos/seed/portfolio1/800/500",
          "https://picsum.photos/seed/portfolio2/800/500",
          "https://picsum.photos/seed/portfolio3/800/500",
        ],
      },
    ];

    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage") as HTMLImageElement | null;
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalDots = document.getElementById("modalDots");
    const modalClose = document.getElementById("modalClose");
    const modalPrev = document.getElementById("modalPrev");
    const modalNext = document.getElementById("modalNext");

    let currentProject = 0;
    let currentImage = 0;

    function openModal(projectIndex: number) {
      const project = projectsData[projectIndex];
      if (!project) return;
      currentProject = projectIndex;
      currentImage = 0;
      renderDots();
      updateNavButtons();
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalDesc) modalDesc.textContent = project.desc;
      const img = new Image();
      img.onload = () => {
        if (modalImage) {
          modalImage.src = project.images[0];
          modalImage.alt = project.title + " screenshot 1";
        }
        requestAnimationFrame(() => {
          modal?.classList.add("open");
          document.body.style.overflow = "hidden";
        });
      };
      img.src = project.images[0];
    }

    function closeModal() {
      modal?.classList.remove("open");
      document.body.style.overflow = "";
    }

    function updateModalContent() {
      const project = projectsData[currentProject];
      if (modalImage) {
        modalImage.src = project.images[currentImage];
        modalImage.alt = project.title + " screenshot " + (currentImage + 1);
      }
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalDesc) modalDesc.textContent = project.desc;
      renderDots();
      updateNavButtons();
    }

    function renderDots() {
      if (!modalDots) return;
      modalDots.innerHTML = "";
      const project = projectsData[currentProject];
      project.images.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "modal-dot" + (i === currentImage ? " active" : "");
        dot.setAttribute("aria-label", "Go to image " + (i + 1));
        dot.addEventListener("click", () => {
          currentImage = i;
          updateModalContent();
        });
        modalDots.appendChild(dot);
      });
    }

    function updateNavButtons() {
      const project = projectsData[currentProject];
      if (modalPrev) modalPrev.style.display = project.images.length > 1 ? "" : "none";
      if (modalNext) modalNext.style.display = project.images.length > 1 ? "" : "none";
    }

    function prevImage() {
      const project = projectsData[currentProject];
      if (project.images.length < 2) return;
      if (modalImage) modalImage.style.opacity = "0";
      setTimeout(() => {
        currentImage = (currentImage - 1 + project.images.length) % project.images.length;
        updateModalContent();
        if (modalImage) modalImage.style.opacity = "1";
      }, 200);
    }

    function nextImage() {
      const project = projectsData[currentProject];
      if (project.images.length < 2) return;
      if (modalImage) modalImage.style.opacity = "0";
      setTimeout(() => {
        currentImage = (currentImage + 1) % project.images.length;
        updateModalContent();
        if (modalImage) modalImage.style.opacity = "1";
      }, 200);
    }

    document.querySelectorAll<HTMLElement>(".project-image").forEach((el) => {
      el.addEventListener("click", () => {
        const index = parseInt(el.dataset.index || "0");
        openModal(index);
      });
      el.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const index = parseInt((el as HTMLElement).dataset.index || "0");
          openModal(index);
        }
      });
    });

    modalClose?.addEventListener("click", closeModal);

    modal?.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    modalPrev?.addEventListener("click", prevImage);
    modalNext?.addEventListener("click", nextImage);

    document.addEventListener("keydown", (e) => {
      if (!modal?.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    });

    // ─── INIT ─────────────────────────────────────────────────────────────
    // eslint-disable-next-line no-console
    console.log(
      "%c👋 Hey, I see you checking the source! I'm Blessly — let's connect.",
      "color: #58a6ff; font-family: monospace; font-size: 14px; padding: 8px;"
    );

    // cleanup
    return () => {
      window.removeEventListener("scroll", onHighlightScroll);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <button
        className="theme-toggle-fixed"
        id="themeToggle"
        aria-label="Toggle light/dark mode"
        title="Toggle theme"
      >
        <span className="theme-icon theme-icon-dark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </span>
        <span className="theme-icon theme-icon-light">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </span>
      </button>
      <Hero />
      <section className="bento-wrap">
        <div className="bento">
          <About />
          <Services />
          <Work />
          <Goals />
        </div>
      </section>
      <Contact />
      <Footer />
      <ProjectModal />
    </main>
  );
}
