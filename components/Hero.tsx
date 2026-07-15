import TerminalConsole from "@/components/TerminalConsole";

const nfInfo = [
  ["education", "Grade 12 ICT Graduate"],
  ["currently", "CS Student"],
  ["focus", "Web Development"],
  ["interests", "Web · UI Design · Software"],
  ["available", "Open to opportunities"],
];

const nfArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢦⠀⢀⣤⠶⢖⡒⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠁⡔⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢩⠀⢡⠏⢀⣠⣼⡆⠀⡩⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠎⢠⡆⠈⣦⠀⠀⠀⠀⠀⠀⠀⠀⡎⠌⠀⢈⠔⠡⢦⠛⡏⢶⠁⢀⠑⡀⢀⢔⡆⠙⡱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢏⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⡏⣆⠀⠎⠀⠁⠆⠀⡇⠘⣴⣮⣴⠴⡛⢹⠃⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡡⠈⡇⣘⠀⡇⠀⠀⠀⠀⠀⠀⠀⠇⠙⣷⠇⠀⢰⠀⠀⠁⠀⣻⠏⢀⠎⠀⠈⡄⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡄⢰⡜⡐⡇⠀⠀⠀⠀⠀⠀⠀⠰⢡⠈⢃⠀⠸⠰⠀⠀⢀⠇⠀⠀⠀⡀⢀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡀⠀⣀⡀⠀⠈⢄⠱⡘⠇⠀⠀⠀⠀⠀⠀⠀⠈⣄⢂⠘⡀⣦⠀⣀⡬⢊⣠⠊⠀⢀⡠⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡀⡜⢟⠀⠘⠜⢇⢄⠀⠃⢧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠘⢼⡀⡇⡿⢠⣿⣿⣟⣠⣼⡤⠿⠛⠃⠀⠛⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡔⢀⡈⣶⠆⠀⢄⣈⠆⠱⡄⠀⡷⠔⡟⡅⠀⠀⠀⠀⠀⠀⠀⢳⢷⢧⠛⠛⢿⡿⠳⠘⠛⠛⠐⠀⠤⡀⣴⠟⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣬⠤⠄⠈⡇⠢⠀⠀⠈⠙⠪⣞⡶⠁⠀⠀⣤⠀⠀⠀⠀⠀⠀⣰⠁⢁⠶⠛⠉⠳⢨⡑⣄⡀⠀⣀⠀⡀⡘⣅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣀⣈⡆⠀⠀⢡⠀⠀⠀⠀⠀⠀⢸⡗⠀⣰⡞⠈⣧⠀⠀⠀⠀⣰⣟⠂⠁⠀⠀⠀⠀⠀⠈⡰⠯⠖⣀⡀⠈⠝⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠳⡌⣩⡁⠑⠚⠛⠢⣀⠑⢤⡐⣮⣷⠾⠋⠀⠀⠸⡟⢿⢍⠍⠉⠄⠉⠐⢦⡀⠀⠀⠀⡞⠀⠀⠑⡄⠀⠒⠂⠒⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠑⠦⠽⠁⠂⠠⠄⠀⡈⠙⢻⢛⢷⠇⠀⠀⠀⢼⡇⠄⠃⠀⠄⠈⢃⠈⠂⠈⠲⡀⠊⠀⢰⠀⠀⢰⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠑⠆⢥⣤⠶⠶⠷⢼⣦⣊⣿⠀⠀⠀⠈⣧⠐⡀⠀⠘⡀⠀⠁⠀⠀⠀⡘⡃⠀⠈⠀⠀⡮⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣤⡀⢀⣀⡀⠀⠤⣀⠀⠙⢟⠧⠇⠀⠀⠀⣿⡀⠑⠀⠀⠁⠀⡀⢷⡀⠢⣳⢁⠀⡀⠀⣼⡃⢀⢔⡀⢠⠆⣀⣠⡤⠤⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠉⠂⠐⢏⣓⠮⠮⡑⠄⢀⠑⢿⡆⠀⢸⠇⠱⣄⠀⠀⠀⠀⠈⠠⢼⠀⢸⣿⢰⣡⣰⣗⠈⠀⡄⣺⣯⡾⡛⠁⠁⠀⠀⠈⠐⠀⢤⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠒⣀⣈⣚⢦⣆⡀⢻⣤⡟⠀⠀⢀⣑⣦⣄⡀⠀⠁⣹⡀⢠⣿⣷⣿⣻⡇⡀⠴⠿⠯⢧⣥⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⠬⢦⣿⢀⡰⢚⠻⠹⡙⠛⣟⣦⡐⢽⣷⣿⣿⣿⣿⢟⣁⣀⠠⠐⠈⠁⡜⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁
⠀⠀⠀⠀⠀⠀⠀⡠⣐⣀⣀⢀⡥⡶⠉⠀⠀⠀⣿⠊⠀⠀⠀⠀⠀⢀⠠⠨⠽⠦⢝⣻⣿⣿⣿⣿⣅⠰⠼⠿⢿⣛⡉⠀⠄⠀⠀⠀⢁⡠⠊⠀⠀
⠀⠀⠀⠀⠀⡀⠜⠀⠀⣀⢶⠡⡘⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠰⠋⣾⣦⢛⠻⡉⠋⠋⠓⠂⠀⠈⠉⠛⠳⡖⠚⠊⠁⠀⠀⠀⠀
⠀⠀⠀⠀⡐⠉⠀⣠⠊⣁⢂⠔⠁⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⢋⣼⢆⠙⡅⠀⠀⠀⠀⠀⠀⠀⠀⠈⢊⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡠⡂⢔⠙⢕⡸⠇⠀⠀⠀⠀⠀⠀⠀⠀⢸⡦⢀⠀⠀⠀⠀⠀⢀⣠⣲⣌⠵⠚⠁⠀⢀⠈⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀
⠀⠠⠖⠁⠂⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠉⠂⣤⡴⠒⠛⡉⠁⠤⢀⠠⡆⠀⠀⠀⢜⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⢠⡞⠉⣤⠊⠁⠈⢠⣴⣭⡜⠀⠀⠀⠀⠀⠉⢢⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣰⢏⢴⣯⠰⠂⠁⢍⠄⠊⠈⠀⠀⠀⠀⠀⠀⠀⠀⠑⠦⣀⡀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣥⢾⣕⣂⠈⠉⠩⠭⠉⠁⠖⠂⠤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠙⢟⣕⠢⣈⠉⠁⠤⠤⠤⠀⢀⠑⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⠀⠀⠀⠈⢳⣳⠄⠅⠣⠐⠠⢄⣀⢀⣀⠀⣑⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠉⠓⠤⣀⡀⠀⠄⠀⠈⢉⣀⣀⣀⣒⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="mono">console.log(<span className="accent">&quot;hello, world&quot;</span>);</span>
        </p>
        <h1 className="hero-name">Blessly Luison<span className="cursor-blink">_</span></h1>
        <div className="hero-role">
          <span className="mono role-static">~/</span>
          <span className="typing-text" id="typingText"></span>
          <span className="type-cursor">|</span>
        </div>
        <p className="hero-bio">
          CS Student · Web Developer · Building real projects and learning every day.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">CS</span>
            <span className="stat-label">Student</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">Open</span>
            <span className="stat-label">to Work</span>
          </div>
        </div>
      </div>
      <div className="hero-terminal reveal-right">
        <div className="terminal-bar">
          <span className="terminal-title">blessly@portfolio: ~</span>
        </div>
        <div className="terminal-code neofetch">
          <div className="nf-top">
            <pre className="nf-art" aria-hidden="true">{nfArt}</pre>
            <div className="nf-info">
              <div className="nf-user">blessly@portfolio</div>
              <div className="nf-divider">-----------------</div>
              {nfInfo.map(([key, val]) => (
                <div className="nf-line" key={key}>
                  <span className="nf-key">{key}</span>
                  <span className="nf-sep">:</span>
                  <span className="nf-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <TerminalConsole />
        </div>
      </div>
    </section>
  );
}
