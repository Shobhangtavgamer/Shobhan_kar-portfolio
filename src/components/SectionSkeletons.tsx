/**
 * Skeleton placeholders for lazy-loaded sections.
 * Match approximate section heights to prevent Cumulative Layout Shift (CLS)
 * while the actual module is being fetched via React.lazy + Suspense.
 */

export function AboutSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '60%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="lazy-skeleton-card" />
        ))}
      </div>
    </div>
  )
}

export function SkillsSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '70%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="lazy-skeleton-card" style={{ minHeight: '260px' }} />
        ))}
      </div>
    </div>
  )
}

export function ExperienceSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '65%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="lazy-skeleton-card" style={{ minHeight: '220px' }} />
        ))}
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '75%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="lazy-skeleton-card" style={{ minHeight: '320px' }} />
        ))}
      </div>
    </div>
  )
}

export function AchievementsSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '60%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="lazy-skeleton-card" style={{ minHeight: '140px' }} />
        ))}
      </div>
    </div>
  )
}

export function CertificationsSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '70%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div key={i} className="lazy-skeleton-card" style={{ minHeight: '200px' }} />
        ))}
      </div>
    </div>
  )
}

export function GitHubSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '65%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        <div className="lazy-skeleton-card" style={{ minHeight: '400px' }} />
      </div>
    </div>
  )
}

export function ContactSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '55%', height: '1.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '0.75rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-grid">
        <div className="lazy-skeleton-card" style={{ minHeight: '420px' }} />
      </div>
    </div>
  )
}

export function FooterSkeleton() {
  return (
    <div className="lazy-skeleton-content">
      <div className="lazy-skeleton-line" style={{ width: '100%', height: '2.5rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '60%', height: '1rem', marginTop: '1rem' }} />
      <div className="lazy-skeleton-line" style={{ width: '40%', height: '0.75rem', marginTop: '0.5rem' }} />
    </div>
  )
}
