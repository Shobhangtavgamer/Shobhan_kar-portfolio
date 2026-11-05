import googleAi from '../upload/webp/google-ai.webp'
import googlePrompting from '../upload/webp/google-prompting.webp'
import azureVision from '../upload/webp/azure.webp'
import pythonUst from '../upload/webp/python-ust.webp'
import saylor from '../upload/webp/saylor.webp'
import youngTurks from '../upload/webp/youngturks.webp'
import nationalDsa from '../upload/webp/dsa.webp'
import adobeHackathon from '../upload/webp/adobe.webp'
import skillIndia from '../upload/webp/skill-india.webp'
import campusCrew from '../upload/webp/campuscrew.webp'
import contributor from '../upload/webp/contributor.webp'
import sixSigma from '../upload/six sigma belt.png'

export type Certification = {
  id: string
  title: string
  issuer: string
  date: string
  detail: string
  category: 'AI' | 'Programming' | 'Cloud' | 'Community'
  image: string
  imageAlt: string
  verify?: string
  accent: 'lime' | 'blue' | 'coral' | 'lilac' | 'sand'
}

export const certifications: Certification[] = [
  {
    id: 'google-ai-essentials',
    title: 'Google AI Essentials',
    issuer: 'Google · Coursera',
    date: 'Sep 2026',
    detail:
      'Five-course specialization covering AI fundamentals, practical productivity, prompting, responsible use, and staying current.',
    category: 'AI',
    image: googleAi,
    imageAlt: 'Google AI Essentials specialization certificate',
    verify: 'https://coursera.org/verify/specialization/G08QCNP25S8E',
    accent: 'blue',
  },
  {
    id: 'google-prompting-essentials',
    title: 'Google Prompting Essentials',
    issuer: 'Google · Coursera',
    date: 'Sep 2026',
    detail:
      'Four-course specialization in prompt design, everyday work tasks, data analysis, presentation building, and creative collaboration.',
    category: 'AI',
    image: googlePrompting,
    imageAlt: 'Google Prompting Essentials specialization certificate',
    verify: 'https://coursera.org/verify/specialization/ZLM8OER9J9CE',
    accent: 'lime',
  },
  {
    id: 'azure-computer-vision',
    title: 'Computer Vision with Azure',
    issuer: 'Microsoft · Coursera',
    date: 'Jun 2026',
    detail:
      'Project certificate for building a computer vision application with Azure Cognitive Services.',
    category: 'Cloud',
    image: azureVision,
    imageAlt: 'Microsoft Azure computer vision project certificate',
    verify: 'https://coursera.org/verify/08KY0DBIJMBW',
    accent: 'blue',
  },
  {
    id: 'first-python-program',
    title: 'First Python Program',
    issuer: 'UST · Coursera',
    date: 'Jun 2026',
    detail:
      'Project certificate for creating a first Python program with UST, covering the practical foundations of Python.',
    category: 'Programming',
    image: pythonUst,
    imageAlt: 'UST first Python program project certificate',
    verify: 'https://coursera.org/verify/QVTY14EI4YR1',
    accent: 'sand',
  },
  {
    id: 'saylor-cs101',
    title: 'CS101: Introduction to Programming I',
    issuer: 'Saylor University',
    date: 'May 2026',
    detail:
      'Completed with an 86% grade across 26 hours and 2.6 continuing education units. Certificate ID 3430722640SK.',
    category: 'Programming',
    image: saylor,
    imageAlt: 'Saylor University CS101 certificate of achievement',
    accent: 'coral',
  },
  {
    id: 'young-turks-2026',
    title: 'Naukri Campus Young Turks',
    issuer: 'Naukri Campus',
    date: 'Oct 2026',
    detail:
      'Certificate of Merit for scoring 99.09 percentile in Naukri Campus Young Turks 2026, India’s largest skill contest.',
    category: 'Community',
    image: youngTurks,
    imageAlt: 'Naukri Campus Young Turks 2026 certificate of merit',
    accent: 'lilac',
  },
  {
    id: 'dsa-showdown-2026',
    title: 'DSA Showdown 2026',
    issuer: 'TechZen Innovation',
    date: '2026',
    detail:
      'Certificate of Excellence for securing a position among the Top 200 in the National DSA Quiz Championship.',
    category: 'Programming',
    image: nationalDsa,
    imageAlt: 'DSA Showdown 2026 certificate of excellence',
    accent: 'lime',
  },
  {
    id: 'adobe-university-hackathon',
    title: 'Adobe University Hackathon',
    issuer: 'Adobe',
    date: '2026',
    detail:
      'Certificate of Participation in the Adobe University Hackathon as a student at MCT Rajiv Gandhi Institute of Technology.',
    category: 'Community',
    image: adobeHackathon,
    imageAlt: 'Adobe University Hackathon certificate of participation',
    accent: 'coral',
  },
  {
    id: 'skill-india-software-product',
    title: 'Software Product Developer',
    issuer: 'Skill India Digital Hub · NASSCOM',
    date: 'Jul 2026',
    detail:
      'Certificate of Participation for completing the Software Product Developer course, an 11-hour learning pathway.',
    category: 'Programming',
    image: skillIndia,
    imageAlt: 'Skill India Software Product Developer certificate',
    accent: 'blue',
  },
  {
    id: 'campus-crew',
    title: 'CampusCrew Recognition',
    issuer: 'CampusCrew',
    date: 'Jun 2026',
    detail:
      'Recognised within a student community spanning 100,000+ students across 15+ countries.',
    category: 'Community',
    image: campusCrew,
    imageAlt: 'CampusCrew recognition certificate',
    accent: 'sand',
  },
  {
    id: 'open-source-contributor',
    title: 'Contributor Mission',
    issuer: 'Open Source Program',
    date: '2026',
    detail: 'Contributor mission accepted — an open-source contribution badge.',
    category: 'Community',
    image: contributor,
    imageAlt: 'Open source contributor mission badge',
    accent: 'lilac',
  },
  {
    id: 'six-sigma-belt',
    title: 'Six Sigma Belt',
    issuer: 'Six Sigma Certification',
    date: '2026',
    detail: 'Certification in Six Sigma methodology for process improvement and quality management.',
    category: 'Programming',
    image: sixSigma,
    imageAlt: 'Six Sigma Belt certificate',
    accent: 'blue',
  },
]
