import { useState, useCallback, useRef, useEffect } from 'react'
import { projects, type Project } from '../data/portfolio'
import { ArrowUpRight, Github } from './Icons'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader } from './SectionHeader'

type Filter = 'All' | Project['category']

const filters: Filter[] = ['All', 'Full-stack', 'Frontend', 'AI / Data']

type ProjectsSectionProps = {
  onOpenProject: (project: Project) => void
}

// Card layout constants
const CARD_W = 250
const CARD_H = 320
const CARD_GAP = 55
const ARC_AMP = 95 // vertical arc amplitude (px)

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>('All')
  const [scrollPos, setScrollPos] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ x: 0, scrollPos: 0 })
  const arcRef = useRef<HTMLDivElement>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  // Reset scroll when filter changes
  useEffect(() => {
    setScrollPos(0)
  }, [filter])

  const VIEW_W = typeof window !== 'undefined' ? window.innerWidth : 800
  const isMobile = VIEW_W < 768
  const TRACK_W = visible.length * (CARD_W + CARD_GAP) - CARD_GAP
  const MAX_SCROLL = Math.max(0, TRACK_W - VIEW_W)

  const clampScroll = useCallback(
    (val: number) => Math.max(0, Math.min(MAX_SCROLL, val)),
    [MAX_SCROLL],
  )

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      setScrollPos((prev) => clampScroll(prev + e.deltaY))
    },
    [clampScroll],
  )

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    dragRef.current = { x: e.clientX, scrollPos }
  }, [scrollPos])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !arcRef.current) return
      e.preventDefault()
      const dx = e.clientX - dragRef.current.x
      setScrollPos(clampScroll(dragRef.current.scrollPos - dx))
    },
    [isDragging, clampScroll],
  )

  const handleMouseUp = useCallback(() => setIsDragging(false), [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    dragRef.current = { x: e.touches[0].clientX, scrollPos }
  }, [scrollPos])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const dx = e.touches[0].clientX - dragRef.current.x
      setScrollPos(clampScroll(dragRef.current.scrollPos - dx))
    },
    [isDragging, clampScroll],
  )

  const handleTouchEnd = useCallback(() => setIsDragging(false), [])

  const getCardStyle = (index: number) => {
    if (isMobile) return {}
    const baseX = index * (CARD_W + CARD_GAP)
    const cardCenterX = baseX + CARD_W / 2
    const viewCenterX = scrollPos + VIEW_W / 2
    const dist = Math.abs(cardCenterX - viewCenterX)
    const maxDist = VIEW_W / 2 + CARD_W / 2 + 40
    const t = Math.min(dist / maxDist, 1)

    // Parabolic arc: center highest, edges lower
    const arcY = t * t * ARC_AMP
    const scale = 1 - t * 0.45
    const zIndex = visible.length - Math.round(t * visible.length)
    const opacity = 1 - t * 0.5
    const rotateX = t * 4

    return {
      transform: `translateX(${baseX - scrollPos}px) translateY(${arcY}px) scale(${scale}) rotateX(${rotateX}deg)`,
      zIndex,
      opacity,
      pointerEvents: (t < 0.92 ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
      width: CARD_W,
      height: CARD_H,
    }
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

        <div className="projects__arc-section">
          {isMobile ? (
            <div className="projects__arc-mobile" onWheel={handleWheel}>
              {visible.map((project, index) => {
                const isCenter =
                  Math.abs(
                    index * (CARD_W + CARD_GAP) + CARD_W / 2 - (scrollPos + VIEW_W / 2),
                  ) < (CARD_W + CARD_GAP) / 2
                return (
                  <article
                    key={project.id}
                    className={`project-card project-card--${project.accent} ${
                      isCenter ? 'is-center' : ''
                    }`}
                    style={{
                      minWidth: `${CARD_W}px`,
                      transform: isCenter ? 'scale(1.08)' : 'scale(0.9)',
                      zIndex: isCenter ? visible.length : visible.length - index,
                    }}
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
                      <h3 className="project-card__title">{project.title}</h3>
                      <p className="project-card__blurb">{project.blurb}</p>
                      <ul className="chips">
                        {project.stack.slice(0, 3).map((tech) => (
                          <li className="chip chip--small" key={tech}>
                            {tech}
                          </li>
                        ))}
                        {project.stack.length > 3 ? (
                          <li className="chip chip--small chip--muted">
                            +{project.stack.length - 3}
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div
              ref={arcRef}
              className="projects__arc"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ width: `${TRACK_W}px` }}
            >
              {visible.map((project, index) => {
                const style = getCardStyle(index)
                const baseX = index * (CARD_W + CARD_GAP)
                const cardCenterX = baseX + CARD_W / 2
                const viewCenterX = scrollPos + VIEW_W / 2
                const isCenter =
                  Math.abs(cardCenterX - viewCenterX) < (CARD_W + CARD_GAP) / 2

                return (
                  <article
                    key={project.id}
                    className={`project-card project-card--${project.accent} ${
                      isCenter ? 'is-center' : ''
                    }`}
                    style={style}
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
                      <div className="project-card__overlay" />
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
                        {project.stack.slice(0, 3).map((tech) => (
                          <li className="chip chip--small" key={tech}>
                            {tech}
                          </li>
                        ))}
                        {project.stack.length > 3 ? (
                          <li className="chip chip--small chip--muted">
                            +{project.stack.length - 3}
                          </li>
                        ) : null}
                      </ul>
                      {isCenter && (
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
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        {visible.length > 0 && (
          <p className="projects__hint">
            {isMobile ? 'Swipe to browse projects' : 'Scroll to browse &middot; Click a card to explore'}
          </p>
        )}
      </div>
    </section>
  )
}
