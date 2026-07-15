export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="mono">
          <span className="accent">&#x2F;&#x2F;</span>console.log(&quot;Thanks for visiting.&quot;);
          <svg style={{ display: "inline", verticalAlign: "middle", marginBottom: "2px" }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
        </p>
        <p className="mono footer-copy">&copy; Blessly Luison</p>
      </div>
    </footer>
  );
}
