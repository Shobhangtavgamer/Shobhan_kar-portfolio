import { useEffect, useState } from 'react'
import { profile, stats, techMarquee } from '../data/portfolio'
import { ArrowDown, ArrowUpRight, Asterisk } from './Icons'
import { Counter } from './Counter'
import { Magnetic } from './Magnetic'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'

function Seal() {
  return (
    <div className="seal" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path
            id="seal-path"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <text>
          <textPath href="#seal-path">
            OPEN TO WORK · BUILD WITH CARE · SHIP WITH INTENT ·
          </textPath>
        </text>
      </svg>
      <span className="seal__center">
        <Asterisk size={26} />
      </span>
    </div>
  )
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__ghost" aria-hidden="true">
        <span data-parallax="0.09">Portfolio</span>
        <span data-parallax="0.04">2026</span>
      </div>

      <div className="container hero__inner">
        <Reveal className="hero__top">
          <span className="mono">Portfolio / 2026</span>
          <span className="hero__availability">
            <span className="hero__pulse" />
            {profile.availability}
          </span>
          <span className="mono hero__location">
            {profile.location} · {profile.timezone}
          </span>
        </Reveal>

        <div className="hero__main">
          <div className="hero__copy">
            <Reveal delay={60}>
              <p className="hero__kicker">
                <span className="mono">Hello, I&apos;m</span>
                <span className="hero__kicker-line" aria-hidden="true" />
              </p>
            </Reveal>

            <h1 id="hero-title" className="hero__title">
              <span className="hero__title-line">
                <span>Shobhan</span>
              </span>
            </h1>

            <Reveal delay={160} className="hero__statement">
              <p>
                Computer Engineering student at <em>RGIT Mumbai</em>. Building full-stack products,
                exploring AI/ML, and leading developer communities.
              </p>
            </Reveal>

            <Reveal delay={240} className="hero__role" aria-hidden="true">
              <span className="mono">[</span>
              <span className="hero__role-word" key={roleIndex}>
                {profile.roles[roleIndex]}
              </span>
              <span className="mono">]</span>
            </Reveal>

            <Reveal delay={320} className="hero__actions">
              <Magnetic>
                <a className="btn btn--primary" href="#projects">
                  Explore my work
                  <span className="btn__icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost" href="#contact">
                  Let&apos;s build together
                  <span className="btn__icon">
                    <ArrowDown size={18} />
                  </span>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          <div className="hero__aside">
            <Reveal delay={220} className="hero__seal-wrap">
              <Seal />
            </Reveal>

            <Reveal delay={380} className="hero__code-wrap">
              <div className="code">
                <div className="code__bar">
                  <span className="code__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="code__file mono">ShobhanKar.ts</span>
                  <span className="code__live mono">live</span>
                </div>
                <pre className="code__body">
                  <code>
                    <span className="code__line">
                      <span className="c-comment">// the short version</span>
                    </span>
                    <span className="code__line">
                      <span className="c-key">const</span> <span className="c-var">engineer</span>{' '}
                      <span className="c-op">=</span> {'{'}
                    </span>
                    <span className="code__line code__line--indent">
                      <span className="c-prop">name</span>: <span className="c-str">'Shobhan'</span>,
                    </span>
                    <span className="code__line code__line--indent">
                      <span className="c-prop">stack</span>: [
                      <span className="c-str">'React'</span>, <span className="c-str">'Java'</span>,{' '}
                      <span className="c-str">'Spring'</span>],
                    </span>
                    <span className="code__line code__line--indent">
                      <span className="c-prop">focus</span>:{' '}
                      <span className="c-str">'software that feels human'</span>,
                    </span>
                    <span className="code__line code__line--indent">
                      <span className="c-prop">available</span>: <span className="c-bool">true</span>,
                    </span>
                    <span className="code__line">{'}'};</span>
                    <span className="code__line code__line--muted">
                      <span className="c-comment">// currently: building in public</span>
                    </span>
                  </code>
                </pre>
                <div className="code__footer mono">
                  <span>TypeScript</span>
                  <span>UTF-8</span>
                  <span>Ln 7, Col 2</span>
                </div>
              </div>
              <p className="hero__note">
                <Sparkle /> Full-stack by default, detail-obsessed by habit.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="hero__bottom">
          <Reveal className="hero__scroll" delay={120}>
            <a href="#about" className="hero__scroll-link">
              <span className="hero__scroll-icon">
                <ArrowDown size={18} />
              </span>
              <span className="mono">Scroll to explore</span>
            </a>
          </Reveal>

          <div className="hero__stats">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Marquee items={techMarquee} className="hero__marquee" duration={38} />
    </section>
  )
}

function Sparkle() {
  return (
    <span className="hero__note-icon" aria-hidden="true">
      <Asterisk size={15} />
    </span>
  )
}
