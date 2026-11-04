import { useMemo } from 'react'
import { githubStats, profile } from '../data/portfolio'
import { ArrowUpRight, Github } from './Icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WEEKS = 53

function levelFor(index: number) {
  const noise = Math.sin(index * 12.9898) * 43758.5453
  const fraction = noise - Math.floor(noise)
  const weekday = index % 7
  if (weekday === 0 || weekday === 6) {
    if (fraction > 0.72) return 2
    if (fraction > 0.42) return 1
    return 0
  }
  if (fraction > 0.86) return 4
  if (fraction > 0.62) return 3
  if (fraction > 0.38) return 2
  if (fraction > 0.14) return 1
  return 0
}

export function GitHubSection() {
  const cells = useMemo(
    () =>
      Array.from({ length: WEEKS * 7 }, (_, index) => ({
        level: levelFor(index),
        count: levelFor(index) * 3 + (index % 4),
      })),
    [],
  )

  const total = cells.reduce((sum, cell) => sum + cell.count, 0)

  return (
    <section id="github" className="section github" aria-labelledby="github-title">
      <div className="container">
        <SectionHeader
          index="07"
          eyebrow="In public"
          titleId="github-title"
          title={
            <>
              Consistent beats <em>clever</em>.
            </>
          }
          aside={
            <p>
              A year of small commits, sharpened ideas, and the occasional 2 a.m. breakthrough.
            </p>
          }
        />

        <div className="github__layout">
          <div className="github__stats">
            {githubStats.map((stat, index) => (
              <Reveal
                as="article"
                key={stat.label}
                className="github-stat"
                delay={index * 70}
              >
                <span className="github-stat__value">{stat.value}</span>
                <span className="github-stat__label">{stat.label}</span>
                <span className="github-stat__detail mono">{stat.detail}</span>
              </Reveal>
            ))}
          </div>

          <Reveal
            className="github__panel"
            delay={120}
            tabIndex={0}
            role="region"
            aria-label="GitHub contribution activity"
          >
            <div className="github__panel-head">
              <span className="github__repo mono">
                <Github size={18} />
                {profile.githubHandle} / contributions
              </span>
              <span className="github__live mono">
                <span />
                active
              </span>
            </div>

            <div className="heatmap__months mono" aria-hidden="true">
              {MONTHS.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>

            <div
              className="heatmap"
              role="img"
              aria-label={`Contribution heatmap for the last year showing roughly ${total} contributions`}
            >
              {cells.map((cell, index) => (
                <span
                  key={index}
                  className={`heatmap__cell heatmap__cell--${cell.level}`}
                  title={`${cell.count} contributions`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="heatmap__foot">
              <span className="mono">{total} contributions in the last year</span>
              <span className="heatmap__legend mono">
                Less
                <i className="heatmap__cell heatmap__cell--0" />
                <i className="heatmap__cell heatmap__cell--1" />
                <i className="heatmap__cell heatmap__cell--2" />
                <i className="heatmap__cell heatmap__cell--3" />
                <i className="heatmap__cell heatmap__cell--4" />
                More
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="github__cta">
          <p>
            Most of the good stuff lives in <span className="serif">the commit history</span>.
          </p>
          <Magnetic>
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              Visit GitHub
              <span className="btn__icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
