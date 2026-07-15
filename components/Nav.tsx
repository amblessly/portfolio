"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function toggle() {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  return (
    <>
      <button className="sidebar-toggle" onClick={toggle} aria-label="Toggle sidebar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      </button>

      <div className={`sidebar-overlay ${open ? "active" : ""}`} onClick={close}>
        <aside className="sidebar" onClick={(e) => e.stopPropagation()}>
          <div className="sidebar-header">
            <div style={{display:"flex",alignItems:"center",gap:".4rem"}}>
              <a href="#hero" className="nav-logo" onClick={close}>
                <span className="logo-bracket">&lt;</span>blessly<span className="logo-accent">/</span><span className="logo-bracket">&gt;</span>
              </a>
              <span className="sidebar-portfolio-label">blessly@portfolio: ~</span>
            </div>
            <button className="sidebar-close" onClick={close} aria-label="Close sidebar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="sidebar-nav">
            <a href="#about" onClick={close}>about</a>
            <a href="#skills" onClick={close}>skills</a>
            <a href="#projects" onClick={close}>projects</a>
            <a href="#services" onClick={close}>services</a>
            <a href="#goals" onClick={close}>goals</a>
            <a href="#contact" className="sidebar-cta" onClick={close}>contact</a>
          </nav>

          <div className="sidebar-footer">
            <button className="theme-toggle sidebar-theme-btn" id="themeToggle" aria-label="Toggle light/dark mode" title="Toggle theme">
              <span className="theme-icon theme-icon-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              </span>
              <span className="theme-icon theme-icon-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
              </span>
            </button>
            <span className="sidebar-theme-label">Toggle theme</span>
          </div>
        </aside>
      </div>
    </>
  );
}
