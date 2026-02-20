import { useEffect, useState } from 'react'

import { useRevealOnScroll } from '@/shared/hooks'

type Pillar = {
  id: 'pos' | 'inventory' | 'khata' | 'ai'
  title: string
  description: string
  details: string[]
  ctaLabel?: string
}

const PILLARS: Pillar[] = [
  {
    id: 'pos',
    title: 'Smart POS Engine',
    description:
      'Run billing, payment reconciliation, and shift controls with reliable workflows for high-volume counters.',
    details: [
      'Real-time transaction reconciliation across UPI, card, and cash.',
      'Shift-level audit trails with tamper-proof logs.',
      'Outlet-wise performance comparison.',
      'GST-ready invoice structure.',
      'Offline sync fallback for unstable connectivity.',
    ],
    ctaLabel: 'View Dashboard',
  },
  {
    id: 'inventory',
    title: 'Inventory Intelligence',
    description:
      'Track stock movement, purchase cycles, and velocity signals in one structure across all outlets.',
    details: [
      'SKU-level velocity tracking.',
      'Automatic low-stock threshold alerts.',
      'Purchase cycle forecasting.',
      'Dead stock detection.',
      'Multi-warehouse synchronization.',
    ],
    ctaLabel: 'View Dashboard',
  },
  {
    id: 'khata',
    title: 'Digital Khata Ledger',
    description:
      'Maintain customer credit books with transparent due tracking and disciplined cash collection visibility.',
    details: [
      'Customer-level credit exposure limits.',
      'Automated payment reminders.',
      'Aging reports (30/60/90 days).',
      'Collection performance metrics.',
      'Settlement tracking with audit history.',
    ],
    ctaLabel: 'View Dashboard',
  },
  {
    id: 'ai',
    title: 'AI Copilot & Insights',
    description:
      'Convert raw transactions into operational guidance for margin protection, reorder timing, and growth planning.',
    details: [
      'Margin protection alerts.',
      'Reorder timing optimization.',
      'Revenue anomaly detection.',
      'Outlet performance benchmarking.',
      'AI-assisted weekly summary briefs.',
    ],
    ctaLabel: 'View Dashboard',
  },
]

const CARD_DELAYS = ['delay-0', 'delay-[50ms]', 'delay-[100ms]', 'delay-[150ms]'] as const
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function getInitialReducedMotionPreference(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function PillarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7 12h10M7 8h10M7 16h6" />
    </svg>
  )
}

export function CorePillarsSection() {
  const { ref: pillarsGridRef, isVisible: pillarsVisible, prefersReducedMotion: hookReducedMotion } =
    useRevealOnScroll<HTMLDivElement>()
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [prefersReducedMotionLocal, setPrefersReducedMotionLocal] = useState<boolean>(
    getInitialReducedMotionPreference,
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)
    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotionLocal(event.matches)
    }

    mediaQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  const prefersReducedMotion = hookReducedMotion || prefersReducedMotionLocal

  const cardRevealClass =
    prefersReducedMotion || pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

  const handleToggleCard = (id: string) => {
    setActiveCard((prev) => (prev === id ? null : id))
  }

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggleCard(id)
    }
  }

  return (
    <section aria-labelledby="core-pillars-heading" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <h2
            id="core-pillars-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl"
          >
            One system for every core financial workflow.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
            Artha combines sales execution, stock control, credit discipline, and decision support
            into a single enterprise-grade operating layer.
          </p>
        </div>

        <div ref={pillarsGridRef} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              role="button"
              tabIndex={0}
              aria-pressed={activeCard === pillar.id}
              onClick={() => handleToggleCard(pillar.id)}
              onKeyDown={(event) => handleCardKeyDown(event, pillar.id)}
              className={`group relative min-h-[24rem] cursor-pointer [perspective:1200px] transition-opacity transition-transform duration-400 ease-out hover:-translate-y-1 ${cardRevealClass} ${prefersReducedMotion ? '' : CARD_DELAYS[index] ?? 'delay-0'}`}
            >
              <div className="relative h-full w-full transition-shadow duration-200 group-hover:shadow-md">
                <div
                  className={`relative h-full w-full ${
                    prefersReducedMotion
                      ? 'transition-opacity duration-200 ease-out'
                      : 'transition-transform duration-500 ease-out [transform-style:preserve-3d]'
                  } ${
                    prefersReducedMotion
                      ? ''
                      : activeCard === pillar.id
                        ? '[transform:rotateY(180deg)]'
                        : ''
                  }`}
                >
                  <article
                    className={`absolute inset-0 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm [backface-visibility:hidden] ${
                      prefersReducedMotion
                        ? activeCard === pillar.id
                          ? 'opacity-0'
                          : 'opacity-100'
                        : ''
                    }`}
                  >
                    <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3">
                      <PillarIcon />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </article>

                  <article
                    className={`absolute inset-0 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-white shadow-md [backface-visibility:hidden] ${
                      prefersReducedMotion
                        ? activeCard === pillar.id
                          ? 'opacity-100'
                          : 'opacity-0'
                        : '[transform:rotateY(180deg)]'
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {pillar.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <p className="mt-6 text-sm font-medium text-slate-400">
                      {pillar.ctaLabel ?? 'View Dashboard ->'}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
