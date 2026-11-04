import { achievements } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section achievements"
      aria-labelledby="achievements-title"
    >
      <div className="achievements__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Selected wins"
          titleId="achievements-title"
          light
          title={
            <>
              The receipts, <em>briefly</em>.
            </>
          }
          aside={
            <p>
              Recognition is a by-product. The real prize is the proof that the work holds up under
              pressure.
            </p>
          }
        />

        <Reveal className="achievements__bar">
          <span className="mono">Recognition / 2024 — 2025</span>
          <span className="achievements__bar-line" aria-hidden="true" />
          <span className="mono">05 highlights</span>
        </Reveal>

        <div className="achievements__list">
          {achievements.map((achievement, index) => (
            <Reveal
              as="article"
              key={achievement.title}
              className="achievement"
              delay={index * 60}
            >
              <span className="achievement__year mono">{achievement.year}</span>
              <div className="achievement__body">
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </div>
              <span className="achievement__org mono">{achievement.org}</span>
              <span className="achievement__index mono" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="achievements__footer">
          <p className="serif">The scoreboard is nice. The work is better.</p>
          <a className="link-arrow link-arrow--light" href="#github">
            Explore the open-source trail
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
