import { ExternalLink, SectionHeading, SiteLayout, socials } from '@/components/site-layout'

export default function ContactPage() {
  return <SiteLayout><section className="page-intro"><SectionHeading eyebrow="Get in touch" title="Contact" /><p>For technical discussions, research, collaboration or other opportunities.</p></section><section className="contact-page-links">{socials.map(([label, href]) => <ExternalLink key={label} href={href}>{label}</ExternalLink>)}</section></SiteLayout>
}
