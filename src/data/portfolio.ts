import medoraMain from '../upload/webp/medora.webp'
import medoraOverview from '../upload/webp/medora-overview.webp'
import medoraMobile from '../upload/webp/medora-mobile.webp'
import bridgeMain from '../upload/webp/bridge-main.webp'
import bridgeDetail from '../upload/webp/bridge-detail.webp'
import bridgeDetailAlt from '../upload/webp/bridge-dashboard.webp'
import bridgeMark from '../upload/webp/bridge-mark.webp'
import mirrorMain from '../upload/webp/mirror-main.webp'
import mirrorDetail from '../upload/webp/mirror-detail.webp'
import codertineHome from '../upload/webp/codertine-2.webp'
import codertineRoadmap from '../upload/webp/codertine-3.webp'
import codertineGuide from '../upload/webp/codertine-1.webp'

export const profile = {
  name: 'Shobhan',
  firstName: 'Shobhan',
  initials: 'S',
  role: 'Software Developer',
  roles: [
    'software developer',
    'aspiring AI/ML engineer',
    'community leader',
    'interface craftsman',
  ],
  tagline: 'I build software that feels inevitable.',
  intro:
    'Computer Engineering student at RGIT Mumbai. I build full-stack products, explore AI/ML, and lead developer communities. Currently focused on creating meaningful digital solutions.',
  availability: 'Open to internships & full-time roles',
  location: 'Mumbai, India',
  timezone: 'IST · UTC+5:30',
  email: 'karshobhan61@gmail.com',
  github: 'https://github.com/Shobhangtavgamer',
  githubHandle: '@Shobhangtavgamer',
  linkedin: 'https://www.linkedin.com/in/shobhan-kar-906bb3322/',
  resume: '#contact',
  copyright: '© 2026 Shobhan. Built with intent.',
  education: {
    degree: 'B.Tech, Computer Engineering',
    institution: 'Rajiv Gandhi Institute of Technology (RGIT), Mumbai',
    period: '2023 — 2027',
  },
  leadership: [
    {
      role: 'Web Head',
      org: 'RGIT CodeCell',
      period: '2024 — Present',
      description: 'Leading the web development wing of the college coding club. Managing club website, workshops, and technical events.',
    },
    {
      role: 'Training & Placement Coordinator',
      org: 'RGIT Mumbai',
      period: '2024 — Present',
      description: 'Bridging students and industry. Coordinating placement drives, resume workshops, and corporate interactions.',
    },
    {
      role: 'General Secretary',
      org: 'RGIT Student Council',
      period: '2025 — Present',
      description: 'Student body leadership. Representing student interests, organizing college events, and managing student-faculty communication.',
    },
  ],
}

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Work', href: '#projects' },
  { label: 'Wins', href: '#achievements' },
  { label: 'Certs', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 4, suffix: '+', label: 'Leadership roles' },
  { value: 7, suffix: '+', label: 'Projects built' },
  { value: 500, suffix: '+', label: 'DSA problems solved' },
  { value: 8, suffix: '+', label: 'Hackathons & events' },
]

export const about = {
  eyebrow: 'About me',
  headline: 'Curiosity-driven. Purpose-built.',
  body:
    "I'm a Computer Engineering student at RGIT Mumbai, passionate about full-stack development, modern technologies, and building meaningful digital solutions. I'm exploring AI/ML while contributing to open-source, developer communities, hackathons, and college leadership. As RGIT CodeCell Web Head, Training & Placement Coordinator, and General Secretary, I blend technical building with community leadership.",
  principles: [
    {
      number: '01',
      title: 'Build with Purpose',
      copy: 'Solving real-world problems through technology.',
      accent: 'blue',
      icon: 'Code',
    },
    {
      number: '02',
      title: 'Learn by Building',
      copy: 'Experimenting, developing, and continuously improving.',
      accent: 'lime',
      icon: 'Zap',
    },
    {
      number: '03',
      title: 'Beyond Code',
      copy: 'Leadership, community contributions, and collaboration.',
      accent: 'coral',
      icon: 'Users',
    },
  ],
  facts: [
    { label: 'Based in', value: 'Mumbai, India' },
    { label: 'College', value: 'RGIT Mumbai' },
    { label: 'Degree', value: 'B.Tech Computer Engineering' },
    { label: 'Currently', value: 'Exploring AI/ML + full-stack' },
    { label: 'Leadership', value: 'CodeCell Web Head · T&P Coordinator · Gen. Secretary' },
  ],
}

export type SkillGroup = {
  id: string
  title: string
  kicker: string
  icon: 'code' | 'server' | 'database' | 'tools' | 'brain'
  accent: 'paper' | 'lime' | 'blue' | 'coral' | 'lilac'
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    kicker: 'Interfaces with a pulse',
    icon: 'code',
    accent: 'lime',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Framer-level motion'],
  },
  {
    id: 'backend',
    title: 'Backend',
    kicker: 'Systems that hold up',
    icon: 'server',
    accent: 'blue',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'REST APIs', 'Authentication', 'API design'],
  },
  {
    id: 'data',
    title: 'Data',
    kicker: 'From schema to story',
    icon: 'database',
    accent: 'coral',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL', 'Data modelling', 'D3.js'],
  },
  {
    id: 'tools',
    title: 'Tooling',
    kicker: 'The workshop',
    icon: 'tools',
    accent: 'lilac',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'Figma', 'CI / CD'],
  },
  {
    id: 'foundations',
    title: 'Foundations',
    kicker: 'The parts that compound',
    icon: 'brain',
    accent: 'paper',
    skills: ['Data structures', 'Algorithms', 'OOP', 'DBMS', 'Operating systems', 'System design'],
  },
]

export const techMarquee = [
  'React',
  'TypeScript',
  'Java',
  'Spring Boot',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'Tailwind',
  'Git',
  'D3.js',
  'Figma',
]

export type ExperienceItem = {
  period: string
  role: string
  org: string
  type: 'work' | 'education' | 'community'
  description: string
  highlights: string[]
  stack: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2025 — Present',
    role: 'General Secretary',
    org: 'RGIT Student Council · Mumbai',
    type: 'community',
    description:
      'Student body leadership representing over 2,000 students. Organizing college events, managing student-faculty communication, and advocating for student interests across academics and campus life.',
    highlights: [
      'Led student council initiatives across academics, sports, and cultural events.',
      'Bridge between student body and college administration for policy changes.',
      'Organized tech fests, cultural programs, and student welfare activities.',
    ],
    stack: ['Leadership', 'Event Management', 'Public Speaking', 'Communication'],
  },
  {
    period: '2024 — Present',
    role: 'Web Head',
    org: 'RGIT CodeCell · Mumbai',
    type: 'community',
    description:
      'Leading the web development wing of the college coding club. Managing the club website, conducting web development workshops, and mentoring members in modern frontend and full-stack technologies.',
    highlights: [
      'Designed and maintained RGIT CodeCell website with React and Tailwind CSS.',
      'Conducted weekly workshops on HTML, CSS, JavaScript, and React.',
      'Mentored 30+ club members in web development and open-source contribution.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub'],
  },
  {
    period: '2024 — Present',
    role: 'Training & Placement Coordinator',
    org: 'RGIT Mumbai · Mumbai',
    type: 'community',
    description:
      'Bridging students and industry opportunities. Coordinating placement drives, resume workshops, mock interviews, and corporate interactions to improve student employability.',
    highlights: [
      'Coordinated on-campus placement drives with 15+ visiting companies.',
      'Organized resume-building workshops and mock interview sessions.',
      'Liaised with HR teams and the college placement cell for student opportunities.',
    ],
    stack: ['Coordination', 'Communication', 'Event Planning', 'Networking'],
  },
  {
    period: '2024 — Present',
    role: 'Independent Software Engineer',
    org: 'Freelance · Remote',
    type: 'work',
    description:
      'Designing and shipping end-to-end products for small teams: healthcare flows, event platforms, and internal tools. I own the whole arc, from product questions to production deploys.',
    highlights: [
      'Built reusable React + TypeScript foundations that cut feature build time in half.',
      'Designed REST APIs with Spring Boot and Node.js, backed by PostgreSQL.',
      'Set up CI, previews, and release checklists for dependable shipping.',
    ],
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
  },
  {
    period: '2025',
    role: 'Frontend Engineer',
    org: 'CoderTine 7.0 · Event Platform',
    type: 'work',
    description:
      'Led the frontend for a five-day coding festival. Turned a dense event schedule into a fast, scroll-driven experience with a distinct visual identity.',
    highlights: [
      'Shipped a dependency-light React + Vite experience under tight event deadlines.',
      'Built a hash router, scroll choreography, and animated background system.',
      'Created a reusable event data model for five modules and detail pages.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
  },
  {
    period: '2023 — Present',
    role: 'Open Source & Community',
    org: 'GitHub · Competitive programming',
    type: 'community',
    description:
      'Contributing small fixes, documenting what I learn, and staying sharp with daily algorithm work. Community reviews have made me a calmer, more precise engineer.',
    highlights: [
      '500+ data structures and algorithms problems across platforms.',
      'Write-ups on frontend architecture, accessibility, and debugging.',
      'Regular participant in hackathons and campus tech events.',
    ],
    stack: ['C++', 'Java', 'Git', 'Markdown'],
  },
  {
    period: '2023 — 2027',
    role: 'B.Tech, Computer Engineering',
    org: 'RGIT Mumbai · India',
    type: 'education',
    description:
      'Coursework across algorithms, operating systems, DBMS, computer networks, software engineering, and AI/ML fundamentals. Paired with self-directed building in full-stack and AI.',
    highlights: [
      'Core CS subjects: DSA, DBMS, OS, Computer Networks, Software Engineering.',
      'AI/ML coursework: neural networks, computer vision, and NLP fundamentals.',
      'Active in coding clubs, hackathons, and peer learning sessions.',
    ],
    stack: ['DSA', 'DBMS', 'OS', 'Networks', 'AI/ML'],
  },
]

export type ProjectVisualVariant = 'medora' | 'codertine' | 'supply' | 'pulse' | 'ledger'

export type ProjectImage = {
  src: string
  alt: string
  label: string
}

export type Project = {
  id: string
  title: string
  category: 'Full-stack' | 'Frontend' | 'AI / Data'
  year: string
  blurb: string
  description: string
  problem: string
  stack: string[]
  highlights: string[]
  accent: 'coral' | 'lime' | 'blue' | 'lilac' | 'sand'
  visual?: ProjectVisualVariant
  images?: ProjectImage[]
  featured?: boolean
  status?: 'completed' | 'ongoing' | 'experimental'
  live?: string
  repo?: string
}

export const projects: Project[] = [
  {
    id: 'medora',
    title: 'Medora',
    category: 'Full-stack',
    year: '2026',
    blurb: 'A patient-owned healthcare platform connecting patients, clinicians, and organisations.',
    description:
      'Medora is a patient-owned healthcare platform that connects patients, healthcare professionals, and organisations through secure health records, access control, and AI-assisted healthcare information. Three role-based workspaces sit on top of a responsive marketing site and a Supabase-backed data layer.',
    problem:
      'Healthcare data is fragmented across portals and organisations, while patients rarely control who sees what. Medora explores a patient-owned model where consent and access are visible at every step.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    highlights: [
      'Patient, professional, and organisation workspaces with role-specific routes.',
      'Patient-controlled access requests, consent, records, and care-network flows.',
      'Supabase data layer with migrations for records, memberships, and communication.',
      'Responsive Tailwind v4 interface with reduced-motion support.',
    ],
    accent: 'coral',
    visual: 'medora',
    images: [
      { src: medoraMain, alt: 'Medora healthcare platform landing page', label: 'Home' },
      { src: medoraOverview, alt: 'Medora patient workspace overview', label: 'Workspace' },
      { src: medoraMobile, alt: 'Medora mobile healthcare interface', label: 'Mobile' },
    ],
    featured: true,
    live: 'https://mmedora.vercel.app/',
    repo: 'https://github.com/Shobhangtavgamer/Medora',
  },
  {
    id: 'resource-bridge',
    title: 'Resource Bridge',
    category: 'Full-stack',
    year: '2026',
    blurb: 'A transparent donation platform connecting donors with verified NGOs.',
    description:
      'Resource Bridge is a social-impact platform that connects donors with verified NGOs, making resource donation, collection, and distribution more transparent and accessible. Donors can list and track contributions while NGOs manage pickups and distributions from a dedicated dashboard.',
    problem:
      'Donation drives lose momentum when donors cannot see what happens after pickup. Resource Bridge makes the collection and distribution journey visible to donors, NGOs, and admins.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Express', 'Prisma', 'PostgreSQL'],
    highlights: [
      'Donor, NGO, and admin roles with tracked donation lifecycles.',
      'NGO dashboards for pickups, available donations, and distributions.',
      'Admin tools for user management, NGO verification, and reviews.',
      'Category-led donation flow for books, clothes, toys, educational materials, and household items.',
    ],
    accent: 'lime',
    images: [
      { src: bridgeMain, alt: 'Resource Bridge donation platform interface', label: 'Platform' },
      { src: bridgeDetail, alt: 'Resource Bridge donation category screen', label: 'Categories' },
      { src: bridgeDetailAlt, alt: 'Resource Bridge NGO dashboard screen', label: 'Dashboard' },
      { src: bridgeMark, alt: 'Resource Bridge project mark', label: 'Mark' },
    ],
    featured: true,
    repo: 'https://github.com/Shobhangtavgamer/Resource_Bridge',
  },
  {
    id: 'smart-celebrity-mirror',
    title: 'Smart Celebrity Mirror',
    category: 'Frontend',
    year: '2026',
    blurb: 'A browser-based vanity mirror that reads the room and hypes you up.',
    description:
      'Smart Celebrity Mirror turns a laptop or phone into a playful vanity mirror. It combines a live camera feed, smart ambient brightness, vanity lighting, voice compliments, and photo capture in a single browser experience.',
    problem:
      'Getting ready should not require a ring light and a second device. The experiment asks how much of a vanity experience can be delivered with just a camera, some CSS, and browser speech APIs.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Webcam API', 'Web Speech API'],
    highlights: [
      'Live mirror feed with a vanity-light frame and one-tap photo capture.',
      'Smart ambient sensor that adjusts the scene based on room brightness.',
      'Voice compliments powered by browser speech synthesis.',
      'No framework or build step — one HTML page, one stylesheet, one script.',
    ],
    accent: 'lilac',
    images: [
      { src: mirrorMain, alt: 'Smart Celebrity Mirror vanity interface', label: 'Mirror' },
      { src: mirrorDetail, alt: 'Smart Celebrity Mirror camera and lighting view', label: 'Lighting' },
    ],
    featured: true,
  },
  {
    id: 'codertine',
    title: 'CoderTine 7.0',
    category: 'Frontend',
    year: '2025',
    blurb: 'A five-day coding festival, translated into a scroll-driven digital experience.',
    description:
      'CoderTine 7.0 is the event platform for a five-day build-break-debug-ship arc. The site carries the full schedule, event details, guides, and registration story with a bold editorial identity and zero heavy dependencies.',
    problem:
      'A dense, multi-day programme usually becomes a wall of text. The challenge was to make five events feel like one coherent story and keep the site fast on campus Wi-Fi.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: [
      'Hand-rolled hash router with deep links into every event and guide.',
      'Scroll choreography, reveal system, and animated background built from scratch.',
      'Data-driven event pages so content changes never touch layout code.',
      'Sub-second first paint with no animation library and self-hosted display type.',
    ],
    accent: 'lime',
    visual: 'codertine',
    images: [
      { src: codertineHome, alt: 'CoderTine 7.0 event platform homepage', label: 'Home' },
      { src: codertineRoadmap, alt: 'CoderTine 7.0 five-event roadmap', label: 'Roadmap' },
      { src: codertineGuide, alt: 'CoderTine 7.0 AI Build Lab guide', label: 'Guide' },
    ],
    live: 'https://codertine.vercel.app/',
    repo: 'https://github.com/Shobhangtavgamer/Codertine',
  },
  {
    id: 'supplysense',
    title: 'SupplySense',
    category: 'AI / Data',
    year: '2025',
    blurb: 'Inventory intelligence that tells you what to buy, hold, or move next.',
    description:
      'Built for the VoyageHack 4.0 inventory optimisation brief, SupplySense forecasts demand across suppliers and recommends reorder points, transfers, and safety stock with a human-readable rationale.',
    problem:
      'Teams drown in spreadsheets while stockouts and overstock happen at the same time. The product needed to turn messy supplier data into a small number of confident decisions.',
    stack: ['Python', 'FastAPI', 'scikit-learn', 'React', 'PostgreSQL'],
    highlights: [
      'Demand forecasting with seasonality and supplier lead-time signals.',
      'Recommendation engine for reorder points and safety stock.',
      'Scenario simulator for promotions, delays, and demand shocks.',
      'Explainable outputs so operators can trust the numbers.',
    ],
    accent: 'blue',
    visual: 'supply',
    repo: profile.github,
  },
  {
    id: 'pulse',
    title: 'Pulse',
    category: 'AI / Data',
    year: '2024',
    blurb: 'A real-time health analytics cockpit for people who make care decisions.',
    description:
      'Pulse turns raw health metrics into a calm, readable dashboard. Trends, anomalies, and daily summaries are surfaced with careful hierarchy so the signal never gets lost in the chart noise.',
    problem:
      'Health dashboards tend to be either too clinical or too decorative. Pulse aims for the middle: trustworthy data, warm presentation, and a clear answer to "what changed?"',
    stack: ['React', 'TypeScript', 'Vite', 'D3.js', 'REST'],
    highlights: [
      'Custom D3 visualisations tuned for small screens and screen readers.',
      'Anomaly callouts with plain-language explanations.',
      'Composable metric cards with saved views and date ranges.',
      'Dark and light themes with contrast-tested palettes.',
    ],
    accent: 'lilac',
    visual: 'pulse',
    repo: profile.github,
  },
  {
    id: 'ledgerly',
    title: 'Ledgerly',
    category: 'Full-stack',
    year: '2024',
    blurb: 'A small business command centre that replaces six spreadsheets.',
    description:
      'Ledgerly is an operations dashboard for small teams: invoices, expenses, inventory, and cash-flow in one place. The design leans on familiar patterns and fast keyboard flows instead of a steep learning curve.',
    problem:
      'Small teams do not need enterprise software, they need one honest source of truth. The product had to be legible on day one and flexible enough to grow.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Role-aware dashboard with revenue, expense, and runway snapshots.',
      'Bulk invoice actions and a keyboard-first command palette.',
      'CSV import with validation and a forgiving error recovery flow.',
      'Responsive layouts tested from 320px to widescreen.',
    ],
    accent: 'sand',
    visual: 'ledger',
    repo: profile.github,
  },
  {
    id: 'ai-fund-flow-intelligence',
    title: 'AI Fund Flow Intelligence',
    category: 'AI / Data',
    year: '2026',
    blurb: 'AI-powered financial flow analysis and forecasting system.',
    description:
      'An AI-driven platform for analyzing and predicting fund flows. Leverages machine learning models to detect patterns, forecast trends, and provide actionable insights for financial decision-making.',
    problem:
      'Financial institutions and individuals struggle to predict cash flow patterns and detect anomalies in fund movements. Traditional tools lack predictive intelligence and real-time alerting.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'React', 'Node.js'],
    highlights: [
      'Machine learning models for fund flow prediction and anomaly detection.',
      'Interactive dashboard for visualizing financial trends and patterns.',
      'Real-time alerts for unusual fund flow patterns.',
    ],
    accent: 'blue',
    status: 'ongoing',
  },
  {
    id: 'jalscan-bluemonitor',
    title: 'JalScan / BlueMonitor',
    category: 'AI / Data',
    year: '2026',
    blurb: 'Water quality monitoring system with AI-powered anomaly detection.',
    description:
      'A water quality monitoring solution that uses sensor data and AI to detect contamination and track water quality parameters in real time. Provides alerts and analytics for environmental monitoring.',
    problem:
      'Water contamination often goes undetected until it becomes a health hazard. Existing monitoring systems lack real-time AI-powered analysis and proactive alerting.',
    stack: ['Python', 'TensorFlow', 'React', 'MQTT', 'PostgreSQL'],
    highlights: [
      'Real-time water quality parameter tracking.',
      'AI-powered anomaly detection for contamination events.',
      'Alert system for threshold breaches and quality degradation.',
    ],
    accent: 'lime',
    status: 'experimental',
  },
  {
    id: 'animal-classification',
    title: 'Animal Classification',
    category: 'AI / Data',
    year: '2025',
    blurb: 'Computer vision model for classifying animal species from images.',
    description:
      'A deep learning-based image classification system that identifies animal species from photographs. Built for wildlife monitoring and educational purposes.',
    problem:
      'Manual identification of animal species from images is time-consuming and error-prone. Automated classification can assist researchers, educators, and wildlife enthusiasts.',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    highlights: [
      'Convolutional neural network for image classification.',
      'Training pipeline with data augmentation and transfer learning.',
      'Web interface for uploading and classifying animal images.',
    ],
    accent: 'coral',
    status: 'completed',
  },
  {
    id: 'ai-virtual-mouse',
    title: 'AI Virtual Mouse',
    category: 'Frontend',
    year: '2025',
    blurb: 'Hand-gesture controlled virtual mouse using computer vision.',
    description:
      'A contactless computer interaction system that uses hand gestures tracked via webcam to control the mouse cursor. Enables hands-free navigation and clicking.',
    problem:
      'Traditional mouse interaction requires physical contact and can be inaccessible in certain situations. Gesture-based control provides a hands-free alternative.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'NumPy'],
    highlights: [
      'Real-time hand tracking with 21 landmark detection.',
      'Gesture-to-cursor mapping with smooth movement filtering.',
      'Click and scroll gesture recognition.',
    ],
    accent: 'blue',
    status: 'experimental',
  },
  {
    id: 'raju-ai-assistant',
    title: 'Raju AI Assistant',
    category: 'AI / Data',
    year: '2025',
    blurb: 'Personal AI assistant with voice interaction and task automation.',
    description:
      'An AI-powered personal assistant that combines voice recognition, natural language processing, and task automation. Helps with reminders, information lookup, and daily task management.',
    problem:
      'Managing daily tasks and information retrieval requires multiple apps and manual effort. A unified AI assistant can streamline personal productivity.',
    stack: ['Python', 'OpenAI API', 'SpeechRecognition', 'pyttsx3', 'Flask'],
    highlights: [
      'Voice-activated command processing.',
      'Natural language understanding for task execution.',
      'Integration with calendar, email, and web services.',
    ],
    accent: 'lilac',
    status: 'ongoing',
  },
  {
    id: 'student-carpooling',
    title: 'Student Carpooling',
    category: 'Full-stack',
    year: '2025',
    blurb: 'Campus ride-sharing platform connecting students for shared commutes.',
    description:
      'A full-stack web application that connects students traveling similar routes for carpooling. Reduces transportation costs and campus traffic while promoting sustainable commuting.',
    problem:
      'Students commuting to campus face high transportation costs and limited options. Carpooling can reduce expenses and environmental impact but lacks a dedicated coordination platform.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Route matching algorithm for finding compatible carpool partners.',
      'Real-time seat availability and booking system.',
      'User profiles with ratings and safety verification.',
    ],
    accent: 'blue',
    status: 'completed',
  },
]

export type Achievement = {
  year: string
  title: string
  org: string
  detail: string
}

export const achievements: Achievement[] = [
  {
    year: '2025',
    title: 'Finalist — VoyageHack 4.0',
    org: 'National hackathon',
    detail: 'Built SupplySense, an explainable inventory optimisation engine, through a 36-hour sprint.',
  },
  {
    year: '2025',
    title: 'Event Technology Lead',
    org: 'CoderTine 7.0',
    detail: 'Owned the digital experience for a five-day coding festival spanning five events and multiple tracks.',
  },
  {
    year: '2024 —',
    title: '500+ DSA problems solved',
    org: 'LeetCode · Codeforces · GFG',
    detail: 'A daily practice habit across arrays, graphs, dynamic programming, and contest-style problem solving.',
  },
  {
    year: '2024',
    title: 'Top 5% — Campus Coding Contest',
    org: 'University',
    detail: 'Ranked in the top five percent of a timed, college-wide algorithm challenge.',
  },
  {
    year: '2024 —',
    title: '12 products shipped',
    org: 'Independent work',
    detail: 'From first sketch to production: healthcare, events, analytics, and internal tooling.',
  },
]

export const githubStats = [
  { value: '540+', label: 'Contributions', detail: 'last 12 months' },
  { value: '24', label: 'Repositories', detail: 'public + private' },
  { value: '12', label: 'Stars earned', detail: 'across projects' },
  { value: '18', label: 'Day streak', detail: 'current run' },
]

export const contact = {
  eyebrow: 'The next chapter',
  headline: 'Have a problem worth making beautiful?',
  copy:
    'I am currently open to internships, full-time roles, and ambitious freelance work. If you are building something with real stakes, I would love to hear about it.',
  availability: 'Available for select projects from Q1 2026',
}
