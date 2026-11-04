import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/portfolio'
import { ArrowUpRight, Close, Github } from './Icons'
import { ProjectVisual } from './ProjectVisual'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  const [activeImage, setActiveImage] = useState(0)
  onCloseRef.current = onClose

  useEffect(() => {
    setActiveImage(0)
  }, [project?.id])

  useEffect(() => {
    if (!project) return

    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('modal-open')
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
      previous?.focus()
    }
  }, [project])

  if (!project) return null

  const images = project.images ?? []
  const image = images[activeImage] ?? images[0]
  const isExternal = (href: string) => href.startsWith('http')

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}
      onClick={() => onCloseRef.current()}
    >
      <div
        className="modal__panel"
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          ref={closeRef}
          onClick={() => onCloseRef.current()}
          aria-label="Close project"
        >
          <Close size={22} />
        </button>

        <div
          className={`modal__visual modal__visual--${project.accent}`}
          aria-hidden={image ? undefined : true}
        >
          {image ? (
            <img className="modal__image" src={image.src} alt={image.alt} />
          ) : project.visual ? (
            <ProjectVisual variant={project.visual} />
          ) : null}
        </div>

        {images.length > 1 ? (
          <div className="modal__thumbs" role="group" aria-label={`${project.title} screenshots`}>
            {images.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                className={`modal__thumb${index === activeImage ? ' is-active' : ''}`}
                aria-label={`Show ${shot.label}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
              >
                <img src={shot.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        ) : null}

        <div className="modal__content">
          <div className="modal__meta mono">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h2 className="modal__title" id={`project-title-${project.id}`}>
            {project.title}
          </h2>

          <p className="modal__description">{project.description}</p>

          <div className="modal__block">
            <h3>The problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="modal__block">
            <h3>What I built</h3>
            <ul className="modal__list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="modal__stack">
            <h3>Stack</h3>
            <ul className="chips">
              {project.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__links">
            {project.live ? (
              <a
                className="btn btn--primary"
                href={project.live}
                target={isExternal(project.live) ? '_blank' : undefined}
                rel={isExternal(project.live) ? 'noreferrer' : undefined}
              >
                View project
                <span className="btn__icon">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            ) : null}
            {project.repo ? (
              <a
                className="btn btn--ghost"
                href={project.repo}
                target={isExternal(project.repo) ? '_blank' : undefined}
                rel={isExternal(project.repo) ? 'noreferrer' : undefined}
              >
                <Github size={18} />
                Source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
