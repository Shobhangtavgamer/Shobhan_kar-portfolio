import { useCallback, useState, lazy, Suspense } from 'react'
import { Background } from './components/Background'
import { Cursor } from './components/Cursor'
import { Hero } from './components/Hero'
import { LazySection } from './components/LazySection'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import {
  AboutSkeleton,
  AchievementsSkeleton,
  CertificationsSkeleton,
  ContactSkeleton,
  ExperienceSkeleton,
  FooterSkeleton,
  GitHubSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
} from './components/SectionSkeletons'
import type { Certification } from './data/certifications'
import type { Project } from './data/portfolio'
import {
  useActiveSection,
  useParallax,
  usePrefersReducedMotion,
  useReveal,
  useScrollProgress,
} from './hooks/useMotion'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'achievements',
  'certifications',
  'github',
  'contact',
]

// Interaction-only modals (lazy, rendered only when opened):
const LazyProjectModal = lazy(() =>
  import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal }))
)
const LazyCertificateModal = lazy(() =>
  import('./components/CertificateModal').then((m) => ({ default: m.CertificateModal }))
)

function App() {
  const reduced = usePrefersReducedMotion()
  const progress = useScrollProgress()
  const active = useActiveSection(SECTION_IDS)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)

  useReveal(reduced)
  useParallax(reduced)

  const closeProject = useCallback(() => setSelectedProject(null), [])
  const closeCertificate = useCallback(() => setSelectedCertificate(null), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Preloader />
      <Cursor />
      <Background />
      <Navbar progress={progress} active={active} />

      <main id="main">
        <Hero />
        {/* Below-the-fold sections: deferred until near viewport via LazySection */}
        <LazySection
          id="about"
          loader={() => import('./components/About').then((m) => ({ default: m.About }))}
          fallback={<AboutSkeleton />}
        />
        <LazySection
          id="skills"
          loader={() => import('./components/Skills').then((m) => ({ default: m.Skills }))}
          fallback={<SkillsSkeleton />}
        />
        <LazySection
          id="experience"
          loader={() =>
            import('./components/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
          }
          fallback={<ExperienceSkeleton />}
        />
        <LazySection
          id="projects"
          loader={() =>
            import('./components/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
          }
          fallback={<ProjectsSkeleton />}
          props={{ onOpenProject: setSelectedProject }}
        />
        <LazySection
          id="achievements"
          loader={() =>
            import('./components/Achievements').then((m) => ({ default: m.Achievements }))
          }
          fallback={<AchievementsSkeleton />}
        />
        <LazySection
          id="certifications"
          loader={() =>
            import('./components/Certifications').then((m) => ({ default: m.Certifications }))
          }
          fallback={<CertificationsSkeleton />}
          props={{ onOpenCertification: setSelectedCertificate }}
        />
        <LazySection
          id="github"
          loader={() =>
            import('./components/GitHubSection').then((m) => ({ default: m.GitHubSection }))
          }
          fallback={<GitHubSkeleton />}
        />
        <LazySection
          id="contact"
          loader={() => import('./components/Contact').then((m) => ({ default: m.Contact }))}
          fallback={<ContactSkeleton />}
        />
        {/* Footer has no section id in original markup; keep lazy without id collision */}
        <LazySection
          id="footer-wrapper"
          loader={() => import('./components/Footer').then((m) => ({ default: m.Footer }))}
          fallback={<FooterSkeleton />}
        />
      </main>

      {/* Interaction-only modals: lazy, no IntersectionObserver (render on click) */}
      <Suspense fallback={null}>
        <LazyProjectModal project={selectedProject} onClose={closeProject} />
      </Suspense>
      <Suspense fallback={null}>
        <LazyCertificateModal certification={selectedCertificate} onClose={closeCertificate} />
      </Suspense>
    </>
  )
}

export default App
