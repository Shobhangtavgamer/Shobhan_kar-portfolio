import { navItems, profile, socials } from '../data/portfolio'
import { ArrowUpRight } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="footer__brand" href="#home" aria-label="Shobhan — back to top">
            Shobhan<span>.</span>
          </a>

          <nav className="footer__nav" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {social.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          Shobhan
        </div>

        <div className="footer__bottom">
          <p>{profile.copyright}</p>
          <p className="mono">React · TypeScript · hand-built motion</p>
          <a href="#home" className="footer__top-link">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
