import { useRef, type ReactNode } from 'react'

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const onMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  const onLeave = () => {
    const element = ref.current
    if (!element) return
    element.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  )
}
