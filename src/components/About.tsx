import { about } from '../data/portfolio'
import { Code, Users, Zap } from 'lucide-react'
import { ArrowUpRight } from './Icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Code,
  Users,
  Zap,
}

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow={about.eyebrow}
          titleId="about-title"
          title={
            <>
              Engineering is the craft. <em>Design</em> is the point of view.
            </>
          }
          aside={
            <p>
              I care about the space between how software works and how it feels. That is where
              trust is built.
            </p>
          }
        />

        <div className="about__grid">
          {/* LEFT SIDE — preserved exactly */}
          <Reveal className="about__visual">
            <div className="about__portrait" data-parallax="0.03">
              <div className="portrait__mesh" aria-hidden="true" />
              <div className="portrait__orb" aria-hidden="true" />
              <div className="portrait__top mono">
                <span>001 / HUMAN</span>
                <span>India</span>
              </div>
              <div className="portrait__ring" aria-hidden="true" />
              <div className="portrait__bottom">
                <p className="portrait__name">Shobhan</p>
                <p className="portrait__caption">Engineer, designer, perpetual student.</p>
              </div>
              <div className="portrait__sticker">
                Open to
                <br />
                good problems
              </div>
              <div className="portrait__stamp mono">EST. 2023</div>
            </div>

            <dl className="about__facts">
              {about.facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* RIGHT SIDE — premium editorial redesign */}
          <div className="about__content">
            <Reveal className="about__lead-wrap">
              <span className="about__label">01 / About</span>
              <h2 className="about__headline">{about.headline}</h2>
              <p className="about__intro">{about.body}</p>
            </Reveal>

            <div className="about__bento">
              {about.principles.map((principle, index) => {
                const Icon = ICON_MAP[principle.icon]
                return (
                  <Reveal
                    as="article"
                    key={principle.number}
                    className={`about__card about__card--${principle.accent}`}
                    delay={index * 90}
                  >
                    <div className="about__card-icon">
                      <Icon size={20} className="about__card-icon-svg" />
                    </div>
                    <h3 className="about__card-title">{principle.title}</h3>
                    <p className="about__card-copy">{principle.copy}</p>
                  </Reveal>
                )
              })}
            </div>

            <Reveal className="about__signature">
              <div className="about__signature-group">
                <span className="about__signature-mark">—</span>
                <p className="serif about__signature-text">Always building.</p>
              </div>
              <Magnetic>
                <a className="about__signature-link link-arrow" href="#contact">
                  Get in touch
                  <ArrowUpRight size={17} />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
