import { ExternalLink, SectionHeading, SiteLayout } from '@/components/site-layout'

export default function OpenSourcePage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="Code made public" title="Open Source" /><p>Projects and tools made available for others to use, inspect and build on.</p></section><section className="page-list"><article className="project-row"><div><h2>Employee</h2><p>Open-source foundation for autonomous AI workers.</p><p className="muted">Current project</p></div><div className="row-links"><ExternalLink href="https://github.com/phaladamou">GitHub</ExternalLink></div></article></section></SiteLayout>
}
