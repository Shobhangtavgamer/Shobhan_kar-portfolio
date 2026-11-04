import { certifications, type Certification } from '../data/certifications'
import { ArrowUpRight } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type CertificationsProps = {
  onOpenCertification: (certification: Certification) => void
}

export function Certifications({ onOpenCertification }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className="section certifications"
      aria-labelledby="certifications-title"
    >
      <div className="certifications__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          index="06"
          eyebrow="Verified learning"
          titleId="certifications-title"
          title={
            <>
              Proof of <em>practice</em>.
            </>
          }
          aside={
            <p>
              A paper trail of the skills I keep sharpening — from AI fluency and cloud foundations
              to programming fundamentals and community work.
            </p>
          }
        />

        <Reveal className="certifications__bar">
          <span className="mono">Credentials / 2026</span>
          <span className="certifications__bar-line" aria-hidden="true" />
          <span className="mono">{String(certifications.length).padStart(2, '0')} artifacts</span>
        </Reveal>

        <div className="certifications__grid">
          {certifications.map((certification, index) => (
            <Reveal
              as="article"
              key={certification.id}
              className={`cert-card cert-card--${certification.accent}`}
              delay={index * 45}
            >
              <button
                type="button"
                className="cert-card__button"
                onClick={() => onOpenCertification(certification)}
                aria-label={`Preview ${certification.title} certificate`}
              >
                <span className="cert-card__media">
                  <img
                    src={certification.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="cert-card__badge mono">{certification.category}</span>
                  <span className="cert-card__zoom" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </span>

                <span className="cert-card__body">
                  <span className="cert-card__meta mono">
                    <span>{certification.issuer}</span>
                    <span>{certification.date}</span>
                  </span>
                  <strong className="cert-card__title">{certification.title}</strong>
                  <span className="cert-card__detail">{certification.detail}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
