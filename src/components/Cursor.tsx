import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/useMotion'

export function Cursor() {
  const reduced = usePrefersReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.classList.add('has-custom-cursor')

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let frame = 0

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`

      const target = event.target as Element | null
      const interactive = target?.closest(
        'a, button, input, textarea, select, [data-cursor], [role="button"]',
      )
      document.body.classList.toggle('cursor-hover', Boolean(interactive))
    }

    const onDown = () => document.body.classList.add('cursor-down')
    const onUp = () => document.body.classList.remove('cursor-down')
    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const render = () => {
      ringX += (pointerX - ringX) * 0.16
      ringY += (pointerY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('pointerleave', onLeave)
    document.documentElement.addEventListener('pointerenter', onEnter)
    frame = window.requestAnimationFrame(render)

    return () => {
      document.body.classList.remove('has-custom-cursor', 'cursor-hover', 'cursor-down')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.documentElement.removeEventListener('pointerenter', onEnter)
      window.cancelAnimationFrame(frame)
    }
  }, [reduced])

  return (
    <div className="cursor" aria-hidden="true">
      <div className="cursor__dot" ref={dotRef} />
      <div className="cursor__ring" ref={ringRef} />
    </div>
  )
}
