const navItems = [
  ['Work', '#work'],
  ['Writing', '#writing'],
  ['Open Source', '#open-source'],
  ['About', '#about'],
  ['CV', '#cv'],
  ['Contact', '#contact'],
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour en haut">PHAL ADAMOU</a>
        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">PHAL ADAMOU</p>
          <h1 id="hero-title">Building software that can work.</h1>
          <p className="lede">AI systems · Autonomous agents · Software</p>
          <div className="social-links" aria-label="Liens sociaux">
            <a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://substack.com" target="_blank" rel="noreferrer">Substack <span>↗</span></a>
          </div>
        </div>
        <img className="portrait" src="/moi.png" alt="Portrait de Phal Adamou" />
      </section>

      <section className="notice" aria-labelledby="building-title">
        <div><p className="section-kicker">Currently building</p><h2 id="building-title">Employee</h2></div>
        <p>Open-source foundation for autonomous AI workers. <span className="status">Building</span></p>
      </section>

      <section id="work" className="content-section" aria-labelledby="work-title">
        <SectionHeading eyebrow="Selected work" title="Work" />
        <div className="work-list">
          <article className="work-item"><div><h3>Employee</h3><p>Open-source foundation for autonomous AI workers.</p></div><p className="meta">Current<br /><span>Building</span></p></article>
          <article className="work-item"><div><h3>Scientia Labs</h3><p>Scientific AI platform for research, reasoning and scientific computing.</p></div><p className="meta">Past<br /><span>Built · Deployed</span></p></article>
        </div>
      </section>

      <section id="writing" className="content-section split-section" aria-labelledby="writing-title">
        <SectionHeading eyebrow="Ideas, observations and experiments" title="Writing" />
        <article className="writing-item"><p className="writing-title">The Software We Build Next Will Not Look Like Software Today</p><p className="meta">September 2026</p><a href="https://substack.com" target="_blank" rel="noreferrer">Read on Substack <span>↗</span></a></article>
      </section>

      <section id="open-source" className="content-section split-section" aria-labelledby="open-source-title">
        <SectionHeading eyebrow="Code made public" title="Open Source" />
        <article className="open-source-item"><h3>Employee</h3><p>Open-source foundation for autonomous AI workers.</p><div className="inline-links"><a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="#contact">Documentation <span>↗</span></a><a href="#contact">Releases <span>↗</span></a></div></article>
      </section>

      <section id="about" className="content-section about-section" aria-labelledby="about-title">
        <SectionHeading eyebrow="A few words" title="About" />
        <div className="about-grid"><div><img className="about-portrait" src="/moi.png" alt="Portrait de Phal Adamou" /><p>Phal Adamou</p><p>Building software that can work.</p></div><dl><div><dt>Current focus</dt><dd>AI systems<br />Autonomous agents<br />Software</dd></div><div><dt>Currently</dt><dd>Building Employee.</dd></div><div><dt>Links</dt><dd><a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub</a><br /><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><br /><a href="https://substack.com" target="_blank" rel="noreferrer">Substack</a></dd></div></dl></div>
      </section>

      <section id="cv" className="content-section cv-section" aria-labelledby="cv-title"><div><SectionHeading eyebrow="Curriculum vitae" title="CV" /><p>My current CV is available as a PDF.</p></div><a className="button-link" href="/cv.pdf" target="_blank" rel="noreferrer">View CV PDF <span>↗</span></a></section>

      <section id="contact" className="content-section contact-section" aria-labelledby="contact-title"><SectionHeading eyebrow="Get in touch" title="Contact" /><p>For technical discussions, research, collaboration or other opportunities:</p><div className="contact-links"><a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://substack.com" target="_blank" rel="noreferrer">Substack <span>↗</span></a></div></section>

      <footer className="site-footer"><div><strong>PHAL ADAMOU</strong><br /><span>Building software that can work.</span></div><span>© 2026 Phal Adamou</span></footer>
    </main>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="section-kicker">{eyebrow}</p><h2>{title}</h2></div>
}
