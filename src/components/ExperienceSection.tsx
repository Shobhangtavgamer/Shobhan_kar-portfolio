import { experience } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const typeLabels = {
  work: 'Work',
  education: 'Education',
  community: 'Community',
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="The path so far"
          titleId="experience-title"
          title={
            <>
              A short version of a <em>longer</em> story.
            </>
          }
          aside={
            <p>
              Learning in public, building with teams, and shipping things that have to work on a
              Monday morning.
            </p>
          }
        />

        <div className="exp__layout">
          <aside className="exp__aside">
            <div className="exp__aside-sticky">
              <span className="exp__aside-label mono">Experience & education</span>
              <p className="exp__aside-note">
                The through-line: take the ambiguous thing, make it clear, make it real.
              </p>
              <Magnetic>
                <a className="btn btn--ghost" href="#contact">
                  Ask for my full CV
                  <span className="btn__icon">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </Magnetic>
            </div>
          </aside>

          <div className="exp__list">
            {experience.map((item, index) => (
              <Reveal
                as="article"
                key={`${item.role}-${item.period}`}
                className={`exp__item exp__item--${item.type}`}
                delay={index * 60}
              >
                <div className="exp__period mono">{item.period}</div>
                <div className="exp__body">
                  <div className="exp__head">
                    <h3>{item.role}</h3>
                    <span className={`exp__type exp__type--${item.type}`}>
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <p className="exp__org">{item.org}</p>
                  <p className="exp__desc">{item.description}</p>
                  <ul className="exp__highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <ul className="chips" aria-label={`${item.role} stack`}>
                    {item.stack.map((tech) => (
                      <li className="chip chip--small" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
