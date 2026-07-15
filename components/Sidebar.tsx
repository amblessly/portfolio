"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
    document.documentElement.classList.toggle("sidebar-is-collapsed", collapsed);
  }, [collapsed]);

  return (
    <>
      {collapsed && (
        <button
          className="sidebar-expand-btn"
          onClick={() => setCollapsed(false)}
          aria-label="Show sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 5L7 9L11 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <aside className={`sidebar-fixed${collapsed ? " sidebar-collapsed" : ""}`}>
        <button
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Show sidebar" : "Hide sidebar"}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 9L7 5L11 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      <div className="sidebar-fixed-header">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>blessly<span className="logo-accent">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>
        <div className="sidebar-divider"></div>
      </div>

      <nav className="sidebar-fixed-nav">
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#services">services</a>
        <a href="#roadmap">roadmap</a>
      </nav>

      <div className="sidebar-fixed-footer">
        <a href="#contact" className="sidebar-fixed-cta">contact</a>
      </div>
      </aside>
    </>
  );
}
