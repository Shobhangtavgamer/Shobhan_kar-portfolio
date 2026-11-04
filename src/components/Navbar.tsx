import { useEffect, useState, type CSSProperties } from 'react'
import { navItems, profile, socials } from '../data/portfolio'
import { Magnetic } from './Magnetic'
import { ArrowUpRight, Asterisk, Close, Menu } from './Icons'

type NavbarProps = {
  progress: number
  active: string
}

export function Navbar({ progress, active }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.classList.add('menu-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
        <div className="container nav__inner">
          <a href="#home" className="nav__brand" aria-label="Shobhan — back to top" onClick={close}>
            <span className="nav__brand-mark">
              <Asterisk size={17} />
            </span>
            <span className="nav__brand-name">
              Shobhan<span>.</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav__link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="nav__actions">
            <Magnetic className="nav__magnetic">
              <a className="btn btn--pill nav__cta" href="#contact">
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>

            <button
              type="button"
              className="nav__toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <Close size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="menu__nav" aria-label="Mobile">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="menu__link"
              onClick={close}
              style={{ '--menu-index': index } as CSSProperties}
            >
              <span>{item.label}</span>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>

        <div className="menu__foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="menu__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
