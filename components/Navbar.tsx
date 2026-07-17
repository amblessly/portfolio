"use client";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-links">
          <a href="#about">about</a>
          <a href="#work">projects</a>
          <a href="#services">services</a>
          <a href="#goals">goals</a>
          <a href="#contact">contact</a>
        </div>
      </nav>
    </header>
  );
}
