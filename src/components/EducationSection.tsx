import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { profile } from '../data/portfolio'

export function EducationSection() {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          index="03.5"
          eyebrow="Academic foundation"
          titleId="education-title"
          title={
            <>
              Education &amp; <em>currently learning</em>
            </>
          }
          aside={
            <p>
              B.Tech Computer Engineering at RGIT Mumbai — blending coursework with self-directed
              building in full-stack and AI/ML.
            </p>
          }
        />

        <div className="edu__grid">
          <Reveal className="edu__card edu__card--degree">
            <div className="edu__card-body">
              <div className="edu__card-meta">
                <span className="edu__period mono">{profile.education.period}</span>
                <span className="edu__type mono">Degree</span>
              </div>
              <h3 className="edu__card-title">{profile.education.degree}</h3>
              <p className="edu__card-inst">{profile.education.institution}</p>
              <p className="edu__card-desc">
                Core coursework in data structures, algorithms, operating systems, database
                management systems, computer networks, software engineering, and AI/ML
                fundamentals. Maintaining strong academic performance alongside active
                participation in coding clubs, hackathons, and peer learning.
              </p>
            </div>
          </Reveal>

          <Reveal className="edu__card edu__card--learning">
            <div className="edu__card-body">
              <div className="edu__card-meta">
                <span className="edu__period mono">2024 — Present</span>
                <span className="edu__type mono">Self-directed</span>
              </div>
              <h3 className="edu__card-title">AI Engineering &amp; Full-Stack</h3>
              <p className="edu__card-inst">Independent study · RGIT Mumbai</p>
              <p className="edu__card-desc">
                Going deeper into AI/ML: neural networks, computer vision, natural language
                processing, and production-grade full-stack systems. Applying classroom concepts
                to real projects — from healthcare platforms to computer vision experiments.
              </p>
              <div className="edu__focus">
                <span className="focus-chip">Machine Learning</span>
                <span className="focus-chip">Computer Vision</span>
                <span className="focus-chip">React &amp; TypeScript</span>
                <span className="focus-chip">Node.js &amp; PostgreSQL</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
