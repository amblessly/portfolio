"use client";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>blessly<span className="logo-accent">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>
        <div className="navbar-links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#work">projects</a>
          <a href="#services">services</a>
          <a href="#goals">goals</a>
        </div>
        <a href="#contact" className="navbar-cta">contact</a>
      </nav>
    </header>
  );
}
