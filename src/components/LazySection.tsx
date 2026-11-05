import { Suspense, lazy, useEffect, useRef, useState } from 'react'

/**
 * Lazy-loads a section component only when its placeholder approaches the viewport.
 * Combines IntersectionObserver (defer load until near viewport) +
 * React.lazy + Suspense (code-split the module + show fallback while fetching).
 *
 * Before intersection: renders `fallback` inside a div with `id={id}` so anchor
 * links still work and no layout shift occurs.
 * After intersection: dynamically imports the module via React.lazy and renders it
 * inside Suspense (showing `fallback` while the chunk fetches).
 */
export function LazySection({
  id,
  loader,
  fallback,
  props,
}: {
  id: string
  loader: () => Promise<{ default: any }>
  fallback: React.ReactNode
  props?: Record<string, any>
}) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShow(true)
      },
      { rootMargin: '300px 0px' } // start fetching 300px before the section enters viewport
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const LazyComponent = lazy(loader)

  return (
    <div ref={ref} className="lazy-section-wrapper">
      {show ? (
        <Suspense fallback={fallback}>
          <LazyComponent {...props} />
        </Suspense>
      ) : (
        <div id={id} className="lazy-section-placeholder">
          {fallback}
        </div>
      )}
    </div>
  )
}
