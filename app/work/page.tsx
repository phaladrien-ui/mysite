import Link from 'next/link'
import { ExternalLink, SectionHeading, SiteLayout } from '@/components/site-layout'

export default function WorkPage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="Selected work" title="Work" /><p>Projects built around AI systems, autonomous agents and software.</p></section><section className="page-list" aria-label="Projects"><article className="project-row"><div><h2>Employee</h2><p>Open-source foundation for autonomous AI workers.</p><p className="muted">Currently building</p></div><div className="row-links"><Link href="/open-source">Open Source <span>↗</span></Link></div></article><article className="project-row"><div><h2>Scientia Labs</h2><p>Scientific AI platform for research, reasoning and scientific computing.</p><p className="muted">Past work · Built and deployed</p></div></article></section></SiteLayout>
}
