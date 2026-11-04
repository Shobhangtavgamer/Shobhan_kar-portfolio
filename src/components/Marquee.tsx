import type { CSSProperties } from 'react'
import { Asterisk } from './Icons'

type MarqueeProps = {
  items: string[]
  className?: string
  duration?: number
  reverse?: boolean
  separator?: boolean
}

export function Marquee({
  items,
  className = '',
  duration = 32,
  reverse = false,
  separator = true,
}: MarqueeProps) {
  const content = (
    <div className="marquee__group">
      {items.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          {separator ? <Asterisk className="marquee__star" size={18} /> : null}
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`marquee ${className}`.trim()}
      style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
    >
      <div className={`marquee__track${reverse ? ' marquee__track--reverse' : ''}`}>
        {content}
        <div aria-hidden="true" className="marquee__group">
          {items.map((item) => (
            <span className="marquee__item" key={`${item}-clone`}>
              {item}
              {separator ? <Asterisk className="marquee__star" size={18} /> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
