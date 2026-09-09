const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moi-iGkpyiyYAu9iOM3pUnbicyOQWP9otG.png'

const navItems = [
  ['Work', '#work'],
  ['Writing', '#writing'],
  ['Open source', '#open-source'],
  ['About', '#about'],
  ['CV', '#cv'],
  ['Contact', '#contact'],
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Retour en haut">Phal Adamou</a>
        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>

      <div id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Bonjour, je suis</p>
          <h1>Phal Adamou.</h1>
          <p className="lede">Étudiant en mathématiques et informatique, entrepreneur en intelligence artificielle et bâtisseur d&apos;outils qui rendent les systèmes complexes plus accessibles.</p>
          <div className="social-links" aria-label="Liens sociaux">
            <a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
        <img className="portrait" src={portraitUrl} alt="Portrait de Phal Adamou" />
      </div>

      <section className="notice" aria-labelledby="building-title">
        <div><p className="section-kicker">Actuellement</p><h2 id="building-title">Je construis Orion Labs.</h2></div>
        <p>Un laboratoire indépendant dédié à l&apos;intelligence artificielle, aux systèmes agentiques et aux outils utiles pour l&apos;Afrique. <span className="status">En construction</span></p>
      </section>

      <section id="work" className="content-section" aria-labelledby="work-title">
        <SectionHeading eyebrow="Sélection" title="Work" />
        <div className="work-list">
          <article className="work-item"><div><h3>Orion Labs</h3><p>Un espace de recherche et de création autour des agents IA, du machine learning et des produits numériques.</p></div><p className="meta">2025 — présent<br /><span>Fondateur</span></p></article>
          <article className="work-item"><div><h3>IA &amp; Open Data Afrique</h3><p>Exploration d&apos;outils et de plateformes pour mieux relier données ouvertes, éducation et innovation locale.</p></div><p className="meta">En exploration<br /><span>Projet indépendant</span></p></article>
        </div>
      </section>

      <section id="writing" className="content-section split-section" aria-labelledby="writing-title">
        <SectionHeading eyebrow="Notes & idées" title="Writing" />
        <div className="empty-state"><p>Je prépare une série de notes sur l&apos;IA, les systèmes agentiques et l&apos;apprentissage par la pratique.</p><span>Bientôt disponible</span></div>
      </section>

      <section id="open-source" className="content-section split-section" aria-labelledby="open-source-title">
        <SectionHeading eyebrow="Code public" title="Open source" />
        <div className="empty-state"><p>Les projets publics et expérimentations seront ajoutés ici au fil de leur publication.</p><span>À venir</span></div>
      </section>

      <section id="about" className="content-section about-section" aria-labelledby="about-title">
        <SectionHeading eyebrow="Quelques mots" title="About" />
        <div className="about-grid"><div><p>Je suis étudiant en Mathématiques et Informatique à l&apos;USTIM de Natitingou. Je m&apos;intéresse à la manière dont les mathématiques, le code et les données peuvent devenir des leviers concrets pour apprendre, créer et résoudre des problèmes réels.</p><p>Mon travail se situe à la rencontre de l&apos;intelligence artificielle, du web et des systèmes agentiques. Je crois aux projets simples à comprendre, solides à construire et utiles au-delà de leur écran.</p></div><dl><div><dt>Formation</dt><dd>Mathématiques &amp; Informatique<br />USTIM Natitingou</dd></div><div><dt>Compétences</dt><dd>IA · ML · systèmes agentiques<br />Web · data · entrepreneuriat</dd></div><div><dt>Engagement</dt><dd>Club IA<br />Fondation Vallet</dd></div></dl></div>
      </section>

      <section id="cv" className="content-section cv-section" aria-labelledby="cv-title"><div><SectionHeading eyebrow="Parcours" title="CV" /><p>Retrouvez bientôt mon parcours, mes expériences et mes projets dans un document à télécharger.</p></div><span className="disabled-link" aria-disabled="true">View CV PDF <span>↗</span></span></section>

      <section id="contact" className="content-section contact-section" aria-labelledby="contact-title"><SectionHeading eyebrow="Échangeons" title="Contact" /><p>Une idée, une collaboration ou simplement envie de parler de technologie ?</p><div className="contact-links"><a href="https://github.com/phaladamou" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><span className="muted-link">Email — à ajouter</span></div></section>

      <footer className="site-footer"><span>© 2026 Phal Adamou</span><a href="#top">Retour en haut ↑</a></footer>
    </main>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="section-kicker">{eyebrow}</p><h2>{title}</h2></div>
}
