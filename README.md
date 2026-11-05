# Shobhan Kar — Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-shobhan.dev-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://mmedora.vercel.app/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite%206-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>"I build digital products where engineering precision meets a little bit of magic."</strong>
</p>

<p align="center">
  A high-performance, editorial portfolio showcasing full-stack engineering, interactive interface craft, real-world case studies, and verified credentials.
</p>

[Explore Sections](#-key-sections) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Customization](#-customization-guide)

---

</div>

## 🌟 Overview

This repository contains the source code for the personal portfolio of **Shobhan Kar**, a Software Engineer and Full-Stack Developer based in India.

The portfolio is designed with an editorial aesthetic influenced by Swiss design and classic print typography, combined with modern, high-fps interactive engineering. Built with **React 19**, **TypeScript**, and **Vite**, it delivers sub-second load times without relying on heavy external animation engines (like GSAP or Framer Motion), utilizing custom Intersection Observer hooks and hardware-accelerated CSS transforms instead.

---

## ✨ Features & Highlights

- **⚡ Sub-Second Performance & Lightweight Footprint**
  - Zero heavy animation runtime overhead; transitions are orchestrated with hand-written RAF and `IntersectionObserver` hooks (`useMotion.ts`).
  - Optimized modern asset pipeline with WebP formats and font preconnections.
- **🎨 Editorial & Tactile Visual Design**
  - Custom fluid design system using a curated typographic trio: *Instrument Serif*, *Space Grotesk*, and *JetBrains Mono*.
  - Ambient noise/grain background layers with custom canvas mesh lighting effects.
  - Interactive magnetic cursor with snapping hover states on clickable elements.
- **♿ First-Class Accessibility (a11y)**
  - Native `prefers-reduced-motion` detection that gracefully turns off high-velocity animations and renders content statically for sensitive users.
  - Keyboard-accessible skip-to-content links, semantic HTML landmarks, and contrast-tested color palettes.
- **📱 Responsive & Device-Agnostic**
  - Meticulously tuned fluid layouts spanning from compact mobile displays (320px) up to ultrawide workstation screens.
- **🔍 Deep Interactive Project Modals**
  - Detailed case studies for full-stack and frontend systems (Medora, Resource Bridge, CoderTine 7.0, SupplySense, Smart Celebrity Mirror, Pulse, Ledgerly).
  - Rich image galleries, architecture breakdowns, problem statements, and direct links to live products & GitHub repositories.
- **📜 Verified Credentials Showcase**
  - Dedicated certifications gallery with high-resolution preview modals and direct verification links (Google AI, Microsoft Azure, UST, Saylor University, Naukri Campus).
- **📬 Interactive Contact Flow**
  - One-click email copy with clipboard feedback and client-side preformatted mailto form generation.

---

## 🗂 Key Sections

| Section | Description |
| :--- | :--- |
| **Hero** | Dynamic role ticker, live availability badge, direct CV/contact actions, and quick metric summaries. |
| **About** | Engineering background, personal journey, and core engineering principles (*Clarity is a feature*, *Ship then sharpen*, *Details are the product*). |
| **Skills & Matrix** | Categorized competencies across Frontend, Backend, Data, Tooling, and CS Foundations, paired with an infinite brand marquee. |
| **Experience** | Chronological timeline covering professional development, community leadership (CoderTine 7.0), and B.Tech CSE education. |
| **Featured Projects** | Flagship software projects with interactive modal deep-dives, tech badges, problem-solution summaries, and repositories. |
| **Achievements** | Key highlights including VoyageHack 4.0 Finalist, 500+ solved DSA problems, and 99.09 percentile in national contests. |
| **Certifications** | Verified credentials modal gallery linking directly to Coursera and institutional credential portals. |
| **GitHub Pulse** | Real-time year-round contribution metrics, streaks, and repository highlights. |
| **Contact** | Integrated inquiry form, copyable direct email, and social connectivity (LinkedIn, GitHub). |

---

## 🛠 Tech Stack

### Core Technologies
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org/)
- **Build Tool & Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** Custom CSS Architecture (Modular Design Tokens, CSS Custom Properties, BEM-inspired naming)
- **Icons:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Code Quality:** [ESLint 9](https://eslint.org/) (Flat Config) + [TypeScript ESLint](https://typescript-eslint.io/)

### Architecture & Motion
- **Motion & Scroll Choreography:** Native `IntersectionObserver`, `MutationObserver`, and `window.matchMedia` abstracted into custom reusable React hooks (`useMotion.ts`).
- **Typography:** Google Fonts (*Instrument Serif*, *JetBrains Mono*, *Space Grotesk*).
- **Images & Media:** High-density WebP assets for near-instant rendering.

---

## 📂 Project Structure

```text
Shobhan_kar-portfolio/
├── public/                 # Static assets & favicons
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── About.tsx             # About section & engineering philosophy
│   │   ├── Achievements.tsx      # Hackathons, DSA stats, contest milestones
│   │   ├── Background.tsx        # Ambient canvas/mesh backdrop
│   │   ├── CertificateModal.tsx  # High-res certificate preview modal
│   │   ├── Certifications.tsx    # Categorized credential cards
│   │   ├── Contact.tsx           # Contact form & clipboard email handler
│   │   ├── Counter.tsx           # Number animation counters
│   │   ├── Cursor.tsx            # Spring-interpolated custom magnetic cursor
│   │   ├── ExperienceSection.tsx # Career & education timeline
│   │   ├── Footer.tsx            # Copyright, timestamp, and quick links
│   │   ├── GitHubSection.tsx     # GitHub activity stats & pulse cards
│   │   ├── Hero.tsx              # Landing headline, role ticker, and CTAs
│   │   ├── Icons.tsx             # Curated SVG icons & social glyphs
│   │   ├── Magnetic.tsx          # Micro-interaction wrapper for button snapping
│   │   ├── Marquee.tsx           # Infinite scrolling tech badge marquee
│   │   ├── Navbar.tsx            # Dynamic section-spy navigation & progress bar
│   │   ├── Preloader.tsx         # Branded opening reveal animation
│   │   ├── ProjectModal.tsx      # Comprehensive case study dialog
│   │   ├── ProjectsSection.tsx   # Project grid with visual previews
│   │   ├── ProjectVisual.tsx     # Component visuals for case studies
│   │   ├── Reveal.tsx            # Scroll-triggered entrance container
│   │   ├── SectionHeader.tsx     # Standardized section headings
│   │   ├── Skills.tsx            # Categorized skill cards
│   │   └── TechLogos.tsx         # Simple-icons SVG wrapper library
│   ├── data/               # Data-driven content sources
│   │   ├── certifications.ts     # Certification records, issuers & verification URLs
│   │   └── portfolio.ts          # Profile bio, projects, achievements, and stats
│   ├── hooks/              # Custom React utilities
│   │   └── useMotion.ts          # Reduced-motion, scroll spy, parallax, and reveals
│   ├── upload/             # Project screenshots & certification assets (WebP/PNG)
│   ├── App.tsx             # Root application assembly & modal state management
│   ├── index.css           # Global tokens, reset, typography, and utility classes
│   └── main.tsx            # Application entry point
├── eslint.config.js        # Modern ESLint 9 configuration
├── index.html              # HTML shell with meta tags & font preconnects
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shobhangtavgamer/Shobhan_kar-portfolio.git
   cd Shobhan_kar-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

---

## 📜 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **dev** | `npm run dev` | Starts Vite local development server with HMR. |
| **build** | `npm run build` | Runs TypeScript type checking (`tsc --noEmit`) and bundles production assets into `dist/`. |
| **preview** | `npm run preview` | Starts a local web server to preview production build locally. |
| **typecheck** | `npm run typecheck` | Validates TypeScript types across the entire project. |
| **lint** | `npm run lint` | Runs ESLint 9 to detect code formatting and syntax errors. |

---

## 🎨 Customization Guide

The codebase is engineered to be completely **data-driven**, making it easy to adapt for your own portfolio without rewriting JSX structures:

1. **Profile, Projects, and Experience:**
   - Update [`src/data/portfolio.ts`](src/data/portfolio.ts) to edit your name, contact information, social links, project highlights, principles, and work timeline.
2. **Certificates & Badges:**
   - Modify [`src/data/certifications.ts`](src/data/certifications.ts) with your credentials, issuer names, verification links, and preview images.
3. **Images & Visuals:**
   - Place your media in `src/upload/webp/` or `public/` and import them directly into your data files.
4. **Theme Tokens & Color Palette:**
   - Global variables (colors, fonts, layout constraints) are defined at the top of [`src/index.css`](src/index.css). Adjust CSS variables such as `--bg`, `--ink`, `--lime`, and `--coral` to rebrand the color theme.

---

## 🚢 Deployment

The output of `npm run build` is a standalone static bundle in the `dist/` directory, compatible with any static hosting platform:

### Deploy with Vercel
```bash
npx vercel
```

### Deploy with Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Deploy with GitHub Pages
Build the project with base path configured in `vite.config.ts`, then push the `dist/` folder to your `gh-pages` branch.

---

## 👤 Author

**Shobhan Kar**
- 🌐 **Portfolio / Live Site:** [shobhan.dev](https://shobhan-kar-portfolio.antideploy.app/)
- 💻 **GitHub:** [@Shobhangtavgamer](https://github.com/Shobhangtavgamer)
- 💼 **LinkedIn:** [Shobhan Kar](https://www.linkedin.com/in/shobhan-kar-906bb3322/)
- 📧 **Email:** [karshobhan61@gmail.com](mailto:karshobhan61@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn from, and adapt it for your own creative projects.
