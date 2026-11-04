import type { ComponentType } from 'react'
import { skillGroups, techMarquee } from '../data/portfolio'
import { Marquee } from './Marquee'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { Code, Server, Database, Tools, Brain } from './Icons'
import { SkillBadge } from './TechLogos'

type IconComponent = ComponentType<{ size?: number; className?: string }>

const groupIcons: Record<string, IconComponent> = {
  code: Code,
  server: Server,
  database: Database,
  tools: Tools,
  brain: Brain,
}

export function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Tools of the trade"
          titleId="skills-title"
          title={
            <>
              A stack built for <em>range</em>, not for show.
            </>
          }
          aside={
            <p>
              No percentage bars. Just the tools I reach for when a problem needs to become a
              product.
            </p>
          }
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => {
            const HeaderIcon = groupIcons[group.icon] ?? Code
            return (
              <Reveal
                as="article"
                key={group.id}
                className={`skill-card skill-card--${group.accent}`}
                delay={index * 70}
              >
                <div className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden="true">
                    <HeaderIcon size={22} />
                  </span>
                  <span className="skill-card__kicker mono">{group.kicker}</span>
                </div>
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-logos" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </ul>
                <span className="skill-card__index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="skills__outro">
          <div className="skills__outro-copy">
            <span className="mono">Always learning</span>
            <p>
              Currently going deeper into <em>AI engineering</em>, distributed systems, and the
              art of making complex data feel simple.
            </p>
          </div>
          <Marquee items={techMarquee} className="skills__marquee" duration={34} reverse />
        </Reveal>
      </div>
    </section>
  )
}
