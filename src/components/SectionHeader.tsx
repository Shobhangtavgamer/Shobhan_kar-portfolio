import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: ReactNode
  titleId?: string
  aside?: ReactNode
  light?: boolean
  className?: string
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  titleId,
  aside,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <Reveal className={`section-head${light ? ' section-head--light' : ''} ${className}`.trim()}>
      <div className="section-head__meta">
        <span className="section-head__index mono">{index}</span>
        <span className="section-head__eyebrow mono">{eyebrow}</span>
      </div>
      <div className="section-head__body">
        <h2 className="section-head__title" id={titleId}>
          {title}
        </h2>
        {aside ? <div className="section-head__aside">{aside}</div> : null}
      </div>
    </Reveal>
  )
}
