import Link from 'next/link'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
]

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <main className="site-shell">
    <header className="site-header">
      <Link className="wordmark" href="/">PHAL ADAMOU</Link>
      <nav className="site-nav" aria-label="Navigation principale">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
    </header>
    {children}
    <footer className="site-footer"><div><strong>PHAL ADAMOU</strong><br /><span>Building software that can work.</span></div><span>© 2026 Phal Adamou</span></footer>
  </main>
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="section-kicker">{eyebrow}</p><h1>{title}</h1></div>
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children} <span>↗</span></a>
}

export const socials = [
  ['GitHub', 'https://github.com/phaladamou'],
  ['LinkedIn', 'https://www.linkedin.com'],
  ['Substack', 'https://substack.com'],
] as const
