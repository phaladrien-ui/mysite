import { ExternalLink, SectionHeading, SiteLayout } from '@/components/site-layout'

export default function WritingPage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="Ideas, observations and experiments" title="Writing" /><p>An archive of essays, reflections and technical notes.</p></section><section className="page-list"><article className="writing-row"><div><p className="date">September 2026</p><h2>The Software We Build Next Will Not Look Like Software Today</h2><p>A reflection on how software changes when systems can reason, act and work alongside us.</p></div><ExternalLink href="https://substack.com">Read on Substack</ExternalLink></article></section></SiteLayout>
}
