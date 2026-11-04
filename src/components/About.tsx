import { about } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

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

          <div className="about__content">
            {about.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 80} className="about__paragraph-wrap">
                <p className="about__paragraph">{paragraph}</p>
              </Reveal>
            ))}

            <div className="principles">
              {about.principles.map((principle, index) => (
                <Reveal
                  as="article"
                  key={principle.number}
                  className={`principle principle--${principle.accent}`}
                  delay={index * 90}
                >
                  <span className="principle__number mono">{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="about__signature">
              <p className="serif">Always building.</p>
              <Magnetic>
                <a className="link-arrow" href="#contact">
                  Start a conversation
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
