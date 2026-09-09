import { SectionHeading, SiteLayout, ExternalLink, socials } from '@/components/site-layout'

export default function AboutPage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="A few words" title="About" /><p>Phal Adamou builds software that can work.</p></section><section className="about-page-grid"><div><img className="about-portrait large" src="/moi.png" alt="Portrait de Phal Adamou" /><p className="large-copy">I work at the intersection of AI systems, autonomous agents and software. My focus is on making useful systems that move from ideas to action.</p></div><dl><div><dt>Focus</dt><dd>AI systems<br />Autonomous agents<br />Software</dd></div><div><dt>Currently</dt><dd>Building Employee.</dd></div><div><dt>Elsewhere</dt><dd>{socials.map(([label, href]) => <span key={label}><ExternalLink href={href}>{label}</ExternalLink><br /></span>)}</dd></div></dl></section></SiteLayout>
}
