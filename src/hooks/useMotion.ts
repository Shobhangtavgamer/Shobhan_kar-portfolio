import { useEffect, useRef, useState } from 'react'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export function useReveal(reduced: boolean) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (reduced) {
      elements.forEach((element) => element.classList.add('is-in'))
      return
    }

    const observed = new WeakSet<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    const connect = () => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)').forEach((element) => {
        if (observed.has(element)) return
        observed.add(element)
        observer.observe(element)
      })
    }

    connect()
    const mutation = new MutationObserver(connect)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [reduced])
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function useParallax(reduced: boolean) {
  useEffect(() => {
    if (reduced) return
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (elements.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0
      const viewport = window.innerHeight
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const speed = Number(element.dataset.parallax ?? 0.08)
        const offset = rect.top + rect.height / 2 - viewport / 2
        element.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`
      })
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reduced])
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function useCountUp(target: number, start: boolean, reduced: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (reduced) {
      setValue(target)
      return
    }

    let frame = 0
    const began = performance.now()
    const duration = 1500

    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [target, start, reduced])

  return value
}
