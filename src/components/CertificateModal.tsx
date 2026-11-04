import { useEffect, useRef } from 'react'
import type { Certification } from '../data/certifications'
import { ArrowUpRight, Close } from './Icons'

type CertificateModalProps = {
  certification: Certification | null
  onClose: () => void
}

export function CertificateModal({ certification, onClose }: CertificateModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!certification) return

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
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
  }, [certification])

  if (!certification) return null

  return (
    <div
      className="modal cert-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`cert-title-${certification.id}`}
      onClick={() => onCloseRef.current()}
    >
      <div
        className="modal__panel cert-modal__panel"
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          ref={closeRef}
          onClick={() => onCloseRef.current()}
          aria-label="Close certificate preview"
        >
          <Close size={22} />
        </button>

        <div className={`cert-modal__media cert-modal__media--${certification.accent}`}>
          <img src={certification.image} alt={certification.imageAlt} />
        </div>

        <div className="cert-modal__content">
          <div className="modal__meta mono">
            <span>{certification.category}</span>
            <span>{certification.date}</span>
          </div>

          <h2 className="cert-modal__title" id={`cert-title-${certification.id}`}>
            {certification.title}
          </h2>

          <p className="cert-modal__issuer mono">{certification.issuer}</p>
          <p className="cert-modal__detail">{certification.detail}</p>

          {certification.verify ? (
            <div className="modal__links">
              <a
                className="btn btn--primary"
                href={certification.verify}
                target="_blank"
                rel="noreferrer"
              >
                Verify credential
                <span className="btn__icon">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
