import { useState, useCallback, useRef, useEffect } from 'react'
import { projects, type Project } from '../data/portfolio'
import { ArrowUpRight, ArrowLeft, ArrowRight, Github } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader } from './SectionHeader'

type Filter = 'All' | Project['category']

const filters: Filter[] = ['All', 'Full-stack', 'Frontend', 'AI / Data']

type ProjectsSectionProps = {
  onOpenProject: (project: Project) => void
}

// Card layout constants
const CARD_W = 360
const CARD_GAP = 32

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ x: 0, scrollLeft: 0 })

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  // Reset to first card when filter changes
  useEffect(() => {
    setActiveIndex(0)
  }, [filter])

  const VIEW_W = typeof window !== 'undefined' ? window.innerWidth : 800
  const isMobile = VIEW_W < 768
  const cardW = isMobile ? 290 : CARD_W
  const step = cardW + CARD_GAP

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = sliderRef.current
      if (!el) return
      const target = Math.max(0, Math.min(index, visible.length - 1)) * step
      el.scrollTo({ left: target, behavior: 'smooth' })
      setActiveIndex(index)
    },
    [isMobile, visible.length, step],
  )

  const syncActiveIndex = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    const newIndex = Math.round(el.scrollLeft / step)
    setActiveIndex(Math.max(0, Math.min(newIndex, visible.length - 1)))
  }, [step, visible.length])

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.deltaY === 0) return
      e.preventDefault()
      const el = sliderRef.current
      if (!el) return
      el.scrollBy({ left: e.deltaY, behavior: 'smooth' })
    },
    [],
  )

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    dragRef.current = { x: e.clientX, scrollLeft: sliderRef.current?.scrollLeft ?? 0 }
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !sliderRef.current) return
      e.preventDefault()
      const dx = e.clientX - dragRef.current.x
      sliderRef.current.scrollLeft = dragRef.current.scrollLeft - dx
    },
    [isDragging],
  )

  const handleMouseUp = useCallback(() => setIsDragging(false), [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    dragRef.current = { x: e.touches[0].clientX, scrollLeft: sliderRef.current?.scrollLeft ?? 0 }
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const dx = e.touches[0].clientX - dragRef.current.x
    sliderRef.current.scrollLeft = dragRef.current.scrollLeft - dx
  }, [isDragging])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    syncActiveIndex()
  }, [syncActiveIndex])

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
          aside={
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
          }
        />

        <div className="projects__slider-wrap">
          <button
            type="button"
            className={`slider__nav slider__nav--prev ${activeIndex === 0 ? 'is-disabled' : ''}`}
            aria-label="Previous project"
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
          >
            <ArrowLeft size={18} />
          </button>

          <div
            ref={sliderRef}
            className={`projects__slider ${isDragging ? 'is-dragging' : ''}`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={syncActiveIndex}
          >
            {visible.map((project, index) => {
              const isActive = index === activeIndex
              return (
                <article
                  key={project.id}
                  className={`project-card project-card--${project.accent} ${isActive ? 'is-active' : ''}`}
                  onClick={() => onOpenProject(project)}
                >
                  <div className="project-card__visual">
                    {project.images?.[0] ? (
                      <img
                        className="project-card__image"
                        src={project.images[0].src}
                        alt={project.images[0].alt || project.title}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : project.visual ? (
                      <ProjectVisual variant={project.visual} />
                    ) : null}
                    <div className="project-card__badge-ring" />
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span className="mono">{project.category}</span>
                      <span className="mono">{project.year}</span>
                      {project.status && (
                        <span className={`status-badge status-${project.status}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      )}
                    </div>
                    <div className="project-card__title-row">
                      <h3>{project.title}</h3>
                      <span className="project-card__arrow" aria-hidden="true">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
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
                        >
                          <Github size={14} /> Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card__link"
                        >
                          Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <button
            type="button"
            className={`slider__nav slider__nav--next ${
              activeIndex >= visible.length - 1 ? 'is-disabled' : ''
            }`}
            aria-label="Next project"
            disabled={activeIndex >= visible.length - 1}
            onClick={() => scrollToIndex(activeIndex + 1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {visible.length > 1 && (
          <div className="projects__dots">
            {visible.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`dot${index === activeIndex ? ' is-active' : ''}`}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        )}

        {visible.length > 0 && (
          <p className="projects__hint">
            {isMobile ? 'Swipe to browse projects' : 'Scroll or drag to browse &middot; Click a card to explore'}
          </p>
        )}
      </div>
    </section>
  )
}
