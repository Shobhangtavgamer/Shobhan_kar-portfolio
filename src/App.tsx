import { useCallback, useState, lazy, Suspense } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Background } from './components/Background'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { Footer } from './components/Footer'
import { GitHubSection } from './components/GitHubSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { ProjectsSection } from './components/ProjectsSection'
import { Skills } from './components/Skills'
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
  'education',
  'projects',
  'achievements',
  'certifications',
  'github',
  'contact',
]

// Interaction-only modals (lazy, rendered only when opened — safe):
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
        <About />
        <Skills />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection onOpenProject={setSelectedProject} />
        <Achievements />
        <Certifications onOpenCertification={setSelectedCertificate} />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />

      {/* Interaction-only modals: lazy, rendered on click */}
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
