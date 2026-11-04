import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'header'
  className?: string
  delay?: number
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
