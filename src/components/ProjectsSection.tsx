import { useState, useCallback, useRef, useEffect } from 'react'
import { projects, type Project } from '../data/portfolio'
import { ArrowUpRight, ArrowLeft, ArrowRight, Github } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader } from './SectionHeader'

type Filter = 'All' | Project['category']
const filters: Filter[] = ['All', 'Full-stack', 'Frontend', 'AI / Data']

// 3D carousel constants — mirrors the Framer ServiceCarousel3D layout
const CARD_DEPTH = 460
const AUTOPLAY_MS = 4000

const LIGHT_ACCENTS = new Set<Project['accent']>(['lime', 'lilac', 'sand'])

function tagInlineStyles(accent: Project['accent']) {
  return {
    background: `var(--${accent})`,
    color: LIGHT_ACCENTS.has(accent) ? 'var(--ink)' : '#fff',
  } as React.CSSProperties
}

function linkInlineColor(accent: Project['accent']): string {
  return LIGHT_ACCENTS.has(accent) ? 'var(--ink)' : `var(--${accent})`
}

type ProjectsSectionProps = {
  onOpenProject: (project: Project) => void
}

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [cumulativeRotation, setCumulativeRotation] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const rotatorRef = useRef<HTMLDivElement>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const totalCards = visible.length
  const anglePerCard = totalCards > 0 ? 360 / totalCards : 0
  const faceAngles = Array.from({ length: totalCards }, (_, i) => i * anglePerCard)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Reset the carousel when the filtered set changes
  useEffect(() => {
    setActiveIndex(0)
    setCumulativeRotation(0)
  }, [filter])

  // Auto-rotation — pauses on hover and under reduced motion
  useEffect(() => {
    if (reducedMotion || isPaused || totalCards <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalCards
        setCumulativeRotation((r) => r - anglePerCard)
        return next
      })
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused, reducedMotion, totalCards, anglePerCard])

  const goTo = useCallback(
    (targetIndex: number) => {
      if (totalCards <= 1) return
      setActiveIndex((prev) => {
        // Rotate the shortest way around the cylinder
        let diff = targetIndex - prev
        if (diff > totalCards / 2) diff -= totalCards
        if (diff < -totalCards / 2) diff += totalCards
        setCumulativeRotation((r) => r - diff * anglePerCard)
        return targetIndex
      })
    },
    [totalCards, anglePerCard],
  )

  const goPrev = useCallback(() => {
    if (totalCards <= 1) return
    setActiveIndex((prev) => {
      setCumulativeRotation((r) => r + anglePerCard)
      return (prev - 1 + totalCards) % totalCards
    })
  }, [totalCards, anglePerCard])

  const goNext = useCallback(() => {
    if (totalCards <= 1) return
    setActiveIndex((prev) => {
      setCumulativeRotation((r) => r - anglePerCard)
      return (prev + 1) % totalCards
    })
  }, [totalCards, anglePerCard])

  const activeProject = visible[activeIndex]
  const activeAccent = activeProject?.accent ?? 'blue'
  const navContrast = LIGHT_ACCENTS.has(activeAccent) ? 'var(--ink)' : '#fff'

  const handleCardClick = (event: React.MouseEvent, project: Project) => {
    const hitLink = (event.target as Element | null)?.closest('a, button')
    if (hitLink) return
    onOpenProject(project)
  }

  const handleCardKeyDown = (event: React.KeyboardEvent, project: Project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpenProject(project)
    }
  }

  const headerAside = (
    <div className="projects__filter-wrap">
      <span className="mono projects__filter-label">Discipline</span>
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
  )

  if (isMobile) {
    return (
      <section id="projects" className="section projects" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeader
            index="04"
            eyebrow="Selected work"
            titleId="projects-title"
            title={
              <>
                Editorial <em>work</em>
              </>
            }
            aside={headerAside}
          />

          <div className="projects__stack">
            {visible.map((project) => (
              <article
                key={project.id}
                className={`project-card project-card--mobile`}
                onClick={(event) => handleCardClick(event, project)}
                onKeyDown={(event) => handleCardKeyDown(event, project)}
                role="button"
                tabIndex={0}
                aria-label={`Explore ${project.title}`}
                style={{ '--accent': `var(--${project.accent})` } as React.CSSProperties}
              >
                <ProjectCardContent project={project} />
              </article>
            ))}
          </div>

          <p className="projects__hint">Tap a card to explore a project</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Selected work"
          titleId="projects-title"
          title={
            <>
              Editorial <em>work</em>
            </>
          }
          aside={headerAside}
        />

        <div
          className="projects__carousel-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="projects__stage">
            <div
              ref={rotatorRef}
              className={`projects__rotator${reducedMotion ? ' projects__rotator--reduced' : ''}`}
              style={{ transform: `rotateY(${cumulativeRotation}deg)` }}
            >
              {faceAngles.map((angle, i) => {
                const project = visible[i]
                const isActive = i === activeIndex
                return (
                  <article
                    key={project.id}
                    className={`project-card${isActive ? ' is-active' : ''}`}
                    onClick={(event) => handleCardClick(event, project)}
                    onKeyDown={(event) => handleCardKeyDown(event, project)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Explore ${project.title}`}
                    style={{ '--accent': `var(--${project.accent})` } as React.CSSProperties}
                  >
                    <div
                      className="project-card__face"
                      style={{ transform: `rotateY(${angle}deg) translateZ(${CARD_DEPTH}px)` }}
                    >
                      <ProjectCardContent project={project} />
                    </div>
                  </article>
                )
              })}
            </div>

            <button
              type="button"
              className="projects__nav projects__nav--prev"
              aria-label="Previous project"
              disabled={totalCards <= 1}
              onClick={goPrev}
              style={{
                '--nav-accent': `var(--${activeAccent})`,
                '--nav-accent-contrast': navContrast,
              } as React.CSSProperties}
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              className="projects__nav projects__nav--next"
              aria-label="Next project"
              disabled={totalCards <= 1}
              onClick={goNext}
              style={{
                '--nav-accent': `var(--${activeAccent})`,
                '--nav-accent-contrast': navContrast,
              } as React.CSSProperties}
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="projects__dots" role="group" aria-label="Project carousel">
            {faceAngles.map((_, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={i}
                  type="button"
                  className={`dot${isActive ? ' is-active' : ''}`}
                  aria-label={`Go to project ${i + 1}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  style={{
                    '--dot-accent': `var(--${visible[i].accent})`,
                    background: isActive ? `var(--${visible[i].accent})` : undefined,
                  } as React.CSSProperties}
                />
              )
            })}
          </div>
        </div>

        <p className="projects__hint">
          {totalCards > 1 ? 'Auto-rotating showcase · click a card to explore' : 'Click to explore'}
        </p>
      </div>
    </section>
  )
}

function ProjectCardContent({ project }: { project: Project }) {
  const image = project.images?.[0]
  const accentColor = linkInlineColor(project.accent)

  return (
    <>
      <div className="project-card__visual">
        {image ? (
          <img
            className="project-card__image"
            src={image.src}
            alt={image.alt || project.title}
            loading="lazy"
            decoding="async"
          />
        ) : project.visual ? (
          <ProjectVisual variant={project.visual} />
        ) : null}
        <div className="project-card__fade" />
        <span className="project-card__tag" style={tagInlineStyles(project.accent)}>
          {project.category}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__blurb">{project.blurb}</p>
        <ul className="chips" aria-label={`${project.title} stack`}>
          {project.stack.slice(0, 4).map((tech) => (
            <li className="chip chip--small" key={tech}>
              {tech}
            </li>
          ))}
          {project.stack.length > 4 ? (
            <li className="chip chip--small chip--muted">
              +{project.stack.length - 4}
            </li>
          ) : null}
        </ul>
        <div className="project-card__actions">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
              style={{ color: accentColor }}
              onClick={(event) => event.stopPropagation()}
            >
              <Github size={13} /> Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
              style={{ color: accentColor }}
              onClick={(event) => event.stopPropagation()}
            >
              Demo <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </>
  )
}
