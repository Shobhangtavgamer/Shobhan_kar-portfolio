import { useRef, useState, type FormEvent } from 'react'
import { contact, profile, socials } from '../data/portfolio'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Send } from './Icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
} as const

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')
  const timerRef = useRef<number | undefined>(undefined)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Project inquiry — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client — thanks for reaching out.')
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__top">
          <span className="mono">07 / Contact</span>
          <span className="contact__status">
            <span className="contact__status-dot" />
            {contact.availability}
          </span>
          <span className="mono">Say hello</span>
        </Reveal>

        <Reveal>
          <h2 className="contact__title" id="contact-title">
            Have a problem worth <em>making beautiful?</em>
          </h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__copy-col" delay={80}>
            <p className="contact__blurb">{contact.copy}</p>

            <div className="contact__email-block">
              <span className="mono">The fastest way to reach me</span>
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={34} />
              </a>
              <button type="button" className="contact__copy" onClick={copyEmail}>
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? 'Copied to clipboard' : 'Copy email'}
              </button>
            </div>

            <div className="contact__socials">
              {socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="contact__social"
                  >
                    <Icon size={18} />
                    <span>{social.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={160}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-head">
                <span className="mono">Start a project</span>
                <span className="mono">01 — 03</span>
              </div>

              <div className="contact__fields">
                <label className="field">
                  <span className="field__label mono">Your name</span>
                  <input
                    className="field__input"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Aarav Sharma"
                    required
                  />
                </label>

                <label className="field">
                  <span className="field__label mono">Email</span>
                  <input
                    className="field__input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>

                <label className="field field--full">
                  <span className="field__label mono">What are you building?</span>
                  <textarea
                    className="field__input field__input--area"
                    name="message"
                    rows={4}
                    placeholder="A sentence or two about the problem, the people, and what success looks like."
                    required
                  />
                </label>
              </div>

              <div className="contact__form-foot">
                <Magnetic>
                  <button type="submit" className="btn btn--primary">
                    Send the brief
                    <span className="btn__icon">
                      <Send size={18} />
                    </span>
                  </button>
                </Magnetic>
                <p className="contact__form-note mono">Opens your mail client · usually replies in 24h</p>
              </div>

              <p className="contact__form-status" role="status" aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
