import { about } from '../data/portfolio'
import { Code, GitBranch, Award, type LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type IdentityIcon = 'Code' | 'GitBranch' | 'Award'

const LUCIDE: Record<IdentityIcon, ComponentType<LucideProps>> = {
  Code,
  GitBranch,
  Award,
}

export function About() {
  const [first, second] = about.headline.split('. ')
  const items = about.identity.items

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow={about.eyebrow}
          titleId="about-title"
          title={
            <>
              {first}. <span className="about__accent">{second}</span>
            </>
          }
        />

        <div className="about__bento">
          <Reveal className="about__card about__card--bio">
            <div className="about__card-body">
              <div className="about__badge">
                <span>Shobhan Kar</span>
                <span className="about__dot" aria-hidden="true">·</span>
                <span>RGIT Mumbai</span>
                <span className="about__dot" aria-hidden="true">·</span>
                <span>B.Tech Computer Science</span>
              </div>
              <p className="about__lead">{about.body}</p>
            </div>
          </Reveal>

          {items.map((item, index) => {
            const Icon = LUCIDE[item.icon as IdentityIcon]
            return (
              <Reveal
                key={item.key}
                className={`about__card about__card--identity about__card--${item.accent}`}
                delay={index * 70}
              >
                <div className="about__card-body">
                  <div className={`about__identity about__identity--${item.accent}`}>
                    <Icon size={17} className="about__identity-icon" />
                  </div>
                  <h3 className="about__identity-title">{item.title}</h3>
                  <p className="about__identity-copy">{item.copy}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
