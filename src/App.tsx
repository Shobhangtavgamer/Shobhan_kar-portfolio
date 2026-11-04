import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Background } from './components/Background'
import { CertificateModal } from './components/CertificateModal'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { GitHubSection } from './components/GitHubSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { ProjectModal } from './components/ProjectModal'
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
  'projects',
  'achievements',
  'certifications',
  'github',
  'contact',
]

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
        <ProjectsSection onOpenProject={setSelectedProject} />
        <Achievements />
        <Certifications onOpenCertification={setSelectedCertificate} />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
      <ProjectModal project={selectedProject} onClose={closeProject} />
      <CertificateModal certification={selectedCertificate} onClose={closeCertificate} />
    </>
  )
}

export default App
