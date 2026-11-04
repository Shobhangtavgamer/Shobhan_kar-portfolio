import { useEffect, useState } from 'react'
import { Asterisk } from './Icons'

const SEEN_KEY = 'shobhan-portfolio-seen'

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const seen = window.sessionStorage.getItem(SEEN_KEY)

    if (reduced || seen) {
      setHidden(true)
      return
    }

    document.documentElement.classList.add('is-loading')
    const began = performance.now()
    const duration = 1550
    let frame = 0
    let hideTimer = 0

    const tick = (now: number) => {
      const ratio = Math.min(1, (now - began) / duration)
      setProgress(Math.round(ratio * 100))

      if (ratio < 1) {
        frame = window.requestAnimationFrame(tick)
        return
      }

      window.sessionStorage.setItem(SEEN_KEY, '1')
      setDone(true)
      hideTimer = window.setTimeout(() => {
        setHidden(true)
        document.documentElement.classList.remove('is-loading')
      }, 1050)
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(hideTimer)
      document.documentElement.classList.remove('is-loading')
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader${done ? ' is-done' : ''}`} role="presentation" aria-hidden="true">
      <div className="preloader__top">
        <span className="mono">Shobhan / Portfolio</span>
        <span className="mono">2026</span>
      </div>

      <div className="preloader__center">
        <Asterisk className="preloader__star" size={34} />
        <p className="preloader__name">Shobhan</p>
        <p className="preloader__note">Software engineer &amp; interface craftsman</p>
      </div>

      <div className="preloader__bottom">
        <span className="mono">Loading the good stuff</span>
        <span className="preloader__count mono">{String(progress).padStart(3, '0')}</span>
      </div>

      <div className="preloader__bar">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  )
}
