/* script.js — Portfolio Vanilla JS */

// ─── THEME TOGGLE ─────────────────────────────────────────────────
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved preference or default to dark
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
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
  "Aspiring Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typingText");

function type() {
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

// ─── NAV SCROLL ──────────────────────────────────────────────────────
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ─── HAMBURGER MENU ──────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal, .reveal-right");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add("visible"), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ─── SKILL BAR ANIMATION ─────────────────────────────────────────────
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector(".skill-fill");
      if (fill) {
        const targetWidth = fill.dataset.width + "%";
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          fill.style.width = targetWidth;
        }, delay + 200);
      }
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

// ─── CONTRIBUTION GRID ───────────────────────────────────────────────
function buildContribGrid() {
  const grid = document.getElementById("contribGrid");
  if (!grid) return;

  const cells = 182; // 26 weeks × 7 days
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
buildContribGrid();

// ─── CONTACT FORM ────────────────────────────────────────────────────
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = form.querySelector("button[type='submit'] span");
  btn.textContent = "Sending...";

  setTimeout(() => {
    btn.textContent = "Send Message";
    form.reset();
    formNote.textContent = "✓ Message sent! I'll get back to you soon.";
    setTimeout(() => { formNote.textContent = ""; }, 4000);
  }, 1200);
});

// ─── ACTIVE NAV HIGHLIGHT ON SCROLL ──────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--accent)";
    }
  });
}, { passive: true });

// ─── SMOOTH HOVER TILT ON PROJECT CARDS ──────────────────────────────
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * 4;
    const tiltY = ((cx - x) / cx) * 4;
    card.style.transform = `translateY(-6px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
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
      "https://picsum.photos/seed/vello3/800/500"
    ]
  },
  {
    title: "Maren Restaurant",
    desc: "A responsive restaurant website featuring menu presentation, business information, and a modern interface optimized for desktop and mobile devices.",
    images: [
      "https://picsum.photos/seed/maren1/800/500",
      "https://picsum.photos/seed/maren2/800/500",
      "https://picsum.photos/seed/maren3/800/500"
    ]
  },
  {
    title: "SkyCast Weather App",
    desc: "A feature-rich weather application designed to deliver real-time weather updates, 24-hour forecasts, air quality monitoring, and interactive map visualization with a sleek and responsive user experience.",
    images: [
      "https://picsum.photos/seed/skycast1/800/500",
      "https://picsum.photos/seed/skycast2/800/500",
      "https://picsum.photos/seed/skycast3/800/500"
    ]
  },
  {
    title: "Personal Portfolio",
    desc: "A developer portfolio showcasing projects, skills, learning journey, and future goals as a Computer Science student and aspiring web developer.",
    images: [
      "https://picsum.photos/seed/portfolio1/800/500",
      "https://picsum.photos/seed/portfolio2/800/500",
      "https://picsum.photos/seed/portfolio3/800/500"
    ]
  }
];

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDots = document.getElementById("modalDots");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentProject = 0;
let currentImage = 0;

function openModal(projectIndex) {
  const project = projectsData[projectIndex];
  if (!project) return;
  currentProject = projectIndex;
  currentImage = 0;
  renderDots();
  updateNavButtons();
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;
  const img = new Image();
  img.onload = () => {
    modalImage.src = project.images[0];
    modalImage.alt = project.title + " screenshot 1";
    requestAnimationFrame(() => {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  };
  img.src = project.images[0];
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function updateModalContent() {
  const project = projectsData[currentProject];
  modalImage.src = project.images[currentImage];
  modalImage.alt = project.title + " screenshot " + (currentImage + 1);
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;
  renderDots();
  updateNavButtons();
}

function renderDots() {
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
  modalPrev.style.display = project.images.length > 1 ? "" : "none";
  modalNext.style.display = project.images.length > 1 ? "" : "none";
}

function prevImage() {
  const project = projectsData[currentProject];
  if (project.images.length < 2) return;
  modalImage.style.opacity = "0";
  setTimeout(() => {
    currentImage = (currentImage - 1 + project.images.length) % project.images.length;
    updateModalContent();
    modalImage.style.opacity = "1";
  }, 200);
}

function nextImage() {
  const project = projectsData[currentProject];
  if (project.images.length < 2) return;
  modalImage.style.opacity = "0";
  setTimeout(() => {
    currentImage = (currentImage + 1) % project.images.length;
    updateModalContent();
    modalImage.style.opacity = "1";
  }, 200);
}

document.querySelectorAll(".project-image").forEach(el => {
  el.addEventListener("click", () => {
    const index = parseInt(el.dataset.index);
    openModal(index);
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const index = parseInt(el.dataset.index);
      openModal(index);
    }
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

modalPrev.addEventListener("click", prevImage);
modalNext.addEventListener("click", nextImage);

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
});

// ─── INIT ─────────────────────────────────────────────────────────────
console.log("%c👋 Hey, I see you checking the source! I'm Blessly — let's connect.", 
  "color: #58a6ff; font-family: monospace; font-size: 14px; padding: 8px;");
