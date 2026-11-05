type IconProps = {
  className?: string
  size?: number
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowUpRight({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function ArrowDown({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  )
}

export function ArrowLeft({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

export function Asterisk({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
    </svg>
  )
}

export function Menu({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M4 7h16M4 17h16" />
    </svg>
  )
}

export function Close({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function Copy({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
    </svg>
  )
}

export function Check({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function Mail({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function Github({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

export function Linkedin({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.65 22 10.9 22 14.3V21h-4v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.53-2.3 3.1V21H9V9Z" />
    </svg>
  )
}

export function Code({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </svg>
  )
}

export function Server({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01M11 7h5M11 17h5" />
    </svg>
  )
}

export function Database({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  )
}

export function Tools({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.2-.6-.6-2.2 2.2-2.6Z" />
      <path d="m16 16 5 5" />
    </svg>
  )
}

export function Brain({ className, size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v.2A3.5 3.5 0 0 0 4 11a3.5 3.5 0 0 0 1.3 2.7A3.5 3.5 0 0 0 8 19.5c.7 0 1.4-.2 1.9-.6V4.4c-.1-.1-.3-.4-.4-.4ZM14.5 4A3.5 3.5 0 0 1 18 7.5v.2a3.5 3.5 0 0 1 2 3.3 3.5 3.5 0 0 1-1.3 2.7 3.5 3.5 0 0 1-2.7 5.8c-.7 0-1.4-.2-1.9-.6V4.4c.1-.1.3-.4.4-.4Z" />
      <path d="M9.5 8.5c-1 0-1.8.6-2 1.5M14.5 8.5c1 0 1.8.6 2 1.5M9.5 14c-1 0-1.8.6-2 1.5M14.5 14c1 0 1.8.6 2 1.5" />
    </svg>
  )
}

export function ArrowRight({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M5 12h14M11 18l6-6-6-6" />
    </svg>
  )
}

export function Spark({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M12 2c.6 5.4 3 7.8 8.4 8.4-5.4.6-7.8 3-8.4 8.4-.6-5.4-3-7.8-8.4-8.4C9 9.8 11.4 7.4 12 2Z" />
    </svg>
  )
}

export function Send({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-8.5L2 8.5 21 3Z" />
    </svg>
  )
}
