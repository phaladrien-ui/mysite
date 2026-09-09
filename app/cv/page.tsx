import { SectionHeading, SiteLayout } from '@/components/site-layout'

export default function CVPage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="Curriculum vitae" title="CV" /><p>My current CV is available as a PDF.</p><a className="button-link" href="/cv.pdf" target="_blank" rel="noreferrer">View CV PDF <span>↗</span></a></section></SiteLayout>
}
