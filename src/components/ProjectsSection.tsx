import { useState } from 'react'
import { projects, type Project } from '../data/portfolio'
import { ArrowUpRight } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type Filter = 'All' | Project['category']

const filters: Filter[] = ['All', 'Full-stack', 'Frontend', 'AI / Data']

type ProjectsSectionProps = {
  onOpenProject: (project: Project) => void
}

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Selected work"
          titleId="projects-title"
          title={
            <>
              Products with a <em>point of view</em>.
            </>
          }
          aside={
            <div className="projects__filter-wrap">
              <span className="mono projects__filter-label">Filter by discipline</span>
              <div className="projects__filters" role="group" aria-label="Filter projects">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`filter${filter === item ? ' is-active' : ''}`}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          }
        />

        <div className="projects__grid">
          {visible.map((project, index) => (
            <Reveal
              as="article"
              key={`${filter}-${project.id}`}
              className={`project-card project-card--${project.accent}${
                project.featured ? ' project-card--featured' : ''
              }`}
              delay={index * 70}
            >
              <div className="project-card__visual" aria-hidden="true">
                {project.images?.[0] ? (
                  <img
                    className="project-card__image"
                    src={project.images[0].src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ) : project.visual ? (
                  <ProjectVisual variant={project.visual} />
                ) : null}
              </div>

              <div className="project-card__body">
                <div className="project-card__meta mono">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  {project.status && (
                    <span className={`status-badge status-${project.status}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  )}
                </div>
                <div className="project-card__title-row">
                  <h3>{project.title}</h3>
                  <span className="project-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <p className="project-card__blurb">{project.blurb}</p>
                <ul className="chips" aria-label={`${project.title} stack`}>
                  {project.stack.slice(0, 3).map((tech) => (
                    <li className="chip chip--small" key={tech}>
                      {tech}
                    </li>
                  ))}
                  {project.stack.length > 3 ? (
                    <li className="chip chip--small chip--muted">+{project.stack.length - 3}</li>
                  ) : null}
                </ul>
              </div>

              <button
                type="button"
                className="project-card__hit"
                aria-label={`Open ${project.title} case study`}
                onClick={() => onOpenProject(project)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="projects__footer">
          <p>
            More experiments live on <span className="serif">GitHub</span> — including the ones that
            did not survive contact with reality.
          </p>
          <a className="link-arrow" href="#github">
            See the open-source trail
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
