const githubIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
);

const mailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-label reveal">
          <span className="mono label-num">05.</span>
          <span>contact</span>
          <div className="label-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-left reveal">
            <h2 className="section-title">Let&apos;s talk<br /><em>about your project.</em></h2>
            <p>Whether you need a website, want to collaborate on something, have an opportunity to share, or just want to connect — feel free to reach out. I&apos;m always happy to chat.</p>
            <div className="contact-links">
              <a href="mailto:luisonblessly@gmail.com" className="contact-link">
                {mailIcon}
                luisonblessly@gmail.com
              </a>
              <a href="https://github.com/amblessly" target="_blank" className="contact-link">
                {githubIcon}
                github.com/amblessly
              </a>
            </div>
          </div>
          <div className="contact-form-wrap reveal-right">
            <form className="contact-form" id="contactForm">
              <div className="field">
                <label className="mono" htmlFor="name">name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label className="mono" htmlFor="email">email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="field">
                <label className="mono" htmlFor="message">message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
              <p className="form-note mono" id="formNote"></p>
            </form>
          </div>
        </div>
        <div className="contact-footer">
          <p className="mono">
            <span className="accent">&#x2F;&#x2F;</span>console.log(&quot;Thanks for visiting.&quot;);
            <svg style={{ display: "inline", verticalAlign: "middle", marginBottom: "2px" }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
          </p>
          <p className="mono contact-copy">&copy; Blessly Luison</p>
        </div>
      </div>
    </section>
  );
}
