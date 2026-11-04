import { useCountUp, useInView, usePrefersReducedMotion } from '../hooks/useMotion'

type CounterProps = {
  value: number
  suffix?: string
  label: string
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  const reduced = usePrefersReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>()
  const count = useCountUp(value, inView, reduced)

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">
        {count}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}
