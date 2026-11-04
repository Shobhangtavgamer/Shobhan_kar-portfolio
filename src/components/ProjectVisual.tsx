import { useId } from 'react'
import type { ProjectVisualVariant } from '../data/portfolio'

type ProjectVisualProps = {
  variant: ProjectVisualVariant
}

function MedoraVisual() {
  return (
    <div className="pv pv--medora">
      <div className="pv__window">
        <div className="medora__side">
          <span className="pv__mark">m</span>
          <span className="medora__nav-dot is-active" />
          <span className="medora__nav-dot" />
          <span className="medora__nav-dot" />
          <span className="medora__nav-dot" />
        </div>
        <div className="medora__main">
          <div className="medora__greeting">
            <span className="pv__eyebrow">Good morning, Aarav</span>
            <strong>How are you feeling today?</strong>
          </div>
          <div className="medora__search">
            <span />
            Search symptoms, doctors, care...
          </div>
          <div className="medora__cards">
            <div className="medora__card medora__card--accent">
              <span className="medora__card-icon">+</span>
              <span>Book a visit</span>
              <small>Same-day slots</small>
            </div>
            <div className="medora__card">
              <span className="medora__card-icon medora__card-icon--dark">?</span>
              <span>Check symptoms</span>
              <small>2 min triage</small>
            </div>
          </div>
          <div className="medora__list">
            <span className="medora__avatar" />
            <span className="pv__line pv__line--md" />
            <span className="pv__pill">Confirmed</span>
          </div>
          <div className="medora__list">
            <span className="medora__avatar medora__avatar--alt" />
            <span className="pv__line pv__line--sm" />
            <span className="pv__pill pv__pill--soft">Today</span>
          </div>
        </div>
      </div>
      <div className="pv__float pv__float--medora">
        <span className="pv__float-dot" />
        24/7 care
      </div>
    </div>
  )
}

function CoderTineVisual() {
  return (
    <div className="pv pv--codertine">
      <div className="pv__window">
        <div className="pv__browser">
          <span className="pv__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="pv__url mono">codertine.vercel.app</span>
          <span className="pv__browser-tag mono">7.0</span>
        </div>
        <div className="codertine__hero">
          <span className="codertine__kicker mono">Five days · one arc</span>
          <strong className="codertine__wordmark">
            CoderTine<span>7.0</span>
          </strong>
          <div className="codertine__event-row">
            <span>AI Build Lab</span>
            <span>Debug the Bug</span>
            <span>DSA Verse</span>
          </div>
        </div>
        <div className="codertine__ticker mono">
          BUILD · BREAK · DEBUG · SHIP · BUILD · BREAK · DEBUG · SHIP ·
        </div>
      </div>
      <div className="pv__float pv__float--codertine">
        <span className="mono">01 — 05</span>
        <strong>Sep 2025</strong>
      </div>
    </div>
  )
}

function SupplyVisual() {
  return (
    <div className="pv pv--supply">
      <div className="pv__window">
        <div className="pv__topbar">
          <span className="pv__brand">
            <span className="pv__brand-mark" />
            SupplySense
          </span>
          <span className="pv__topbar-links mono">Overview / Forecasts / Alerts</span>
        </div>
        <div className="supply__kpis">
          <div className="supply__kpi">
            <span className="mono">Stockout risk</span>
            <strong>−34%</strong>
            <small>vs. last month</small>
          </div>
          <div className="supply__kpi supply__kpi--accent">
            <span className="mono">Reorder now</span>
            <strong>12</strong>
            <small>SKUs flagged</small>
          </div>
          <div className="supply__kpi">
            <span className="mono">Forecast accuracy</span>
            <strong>94.2%</strong>
            <small>7-day window</small>
          </div>
        </div>
        <div className="supply__chart">
          <div className="supply__chart-head">
            <span className="mono">Demand forecast</span>
            <span className="pv__pill pv__pill--soft">7 days</span>
          </div>
          <div className="supply__bars" aria-hidden="true">
            {[42, 58, 36, 72, 64, 88, 52, 76, 66, 94, 70, 82].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={index > 8 ? 'is-forecast' : undefined}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="supply__axis mono">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
      <div className="pv__float pv__float--supply">
        <span className="pv__spark" />
        Forecast updated
      </div>
    </div>
  )
}

function PulseVisual() {
  const fillId = `pulse-fill-${useId().replace(/:/g, '')}`

  return (
    <div className="pv pv--pulse">
      <div className="pv__window">
        <div className="pulse__header">
          <div>
            <span className="pv__eyebrow mono">Today · Heart rate</span>
            <strong className="pulse__value">
              72 <small>bpm</small>
            </strong>
          </div>
          <span className="pv__pill pv__pill--good">In range</span>
        </div>
        <svg className="pulse__svg" viewBox="0 0 420 150" role="img" aria-label="Heart rate trend placeholder">
          <defs>
            <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 96 C30 88 48 112 74 100 S114 62 144 78 S188 118 218 94 S258 44 292 66 S334 106 360 82 S396 58 420 70 L420 150 L0 150 Z"
            fill={`url(#${fillId})`}
          />
          <path
            d="M0 96 C30 88 48 112 74 100 S114 62 144 78 S188 118 218 94 S258 44 292 66 S334 106 360 82 S396 58 420 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="292" cy="66" r="5" fill="currentColor" />
          <circle cx="292" cy="66" r="11" fill="none" stroke="currentColor" strokeOpacity="0.3" />
        </svg>
        <div className="pulse__stats">
          <div>
            <span className="mono">Resting</span>
            <strong>64</strong>
          </div>
          <div>
            <span className="mono">Peak</span>
            <strong>128</strong>
          </div>
          <div>
            <span className="mono">Variability</span>
            <strong>48 ms</strong>
          </div>
        </div>
      </div>
      <div className="pv__float pv__float--pulse">-8% vs last week</div>
    </div>
  )
}

function LedgerVisual() {
  return (
    <div className="pv pv--ledger">
      <div className="pv__window">
        <div className="ledger__sidebar">
          <span className="pv__mark pv__mark--dark">L</span>
          <span className="ledger__nav is-active" />
          <span className="ledger__nav" />
          <span className="ledger__nav" />
          <span className="ledger__nav" />
        </div>
        <div className="ledger__main">
          <div className="ledger__head">
            <div>
              <span className="pv__eyebrow mono">Cash flow</span>
              <strong>₹4,82,000</strong>
            </div>
            <span className="pv__pill pv__pill--good">+18.4%</span>
          </div>
          <div className="ledger__chart" aria-hidden="true">
            <span style={{ height: '34%' }} />
            <span style={{ height: '52%' }} />
            <span style={{ height: '44%' }} />
            <span style={{ height: '68%' }} />
            <span style={{ height: '58%' }} />
            <span style={{ height: '80%' }} />
            <span style={{ height: '72%' }} />
            <span style={{ height: '96%' }} />
          </div>
          <div className="ledger__table">
            <div className="ledger__row ledger__row--head mono">
              <span>Invoice</span>
              <span>Client</span>
              <span>Status</span>
            </div>
            {[
              ['#INV-042', 'Northwind', 'Paid'],
              ['#INV-043', 'Studio Kite', 'Sent'],
              ['#INV-044', 'Acme Labs', 'Draft'],
            ].map(([invoice, client, status]) => (
              <div className="ledger__row" key={invoice}>
                <span className="mono">{invoice}</span>
                <span>{client}</span>
                <span className={`ledger__status ledger__status--${status.toLowerCase()}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectVisual({ variant }: ProjectVisualProps) {
  switch (variant) {
    case 'medora':
      return <MedoraVisual />
    case 'codertine':
      return <CoderTineVisual />
    case 'supply':
      return <SupplyVisual />
    case 'pulse':
      return <PulseVisual />
    case 'ledger':
      return <LedgerVisual />
    default:
      return null
  }
}
