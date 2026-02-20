import { useEffect, useRef, useState } from 'react'

import { useRevealOnScroll } from '@/shared/hooks'

type Period = 'monthly' | 'usage' | 'annual'
type PricingData = Record<
  Period,
  {
    free: string
    growth: string
    enterprise: string
  }
>

type PricingCard = {
  title: string
  priceKey: 'free' | 'growth' | 'enterprise'
  description: string
  points: string[]
  emphasis?: boolean
}

const PRICING_CARDS: PricingCard[] = [
  {
    title: 'Free Tier',
    priceKey: 'free',
    description: 'Start with billing and baseline reporting for a single storefront.',
    points: ['POS billing', 'Basic sales reports', 'Starter ledger records'],
  },
  {
    title: 'Growth Modules',
    priceKey: 'growth',
    description: 'Add modules as operations scale across inventory, collections, and teams.',
    points: ['Inventory workflows', 'Khata recovery tools', 'Role-based controls'],
    emphasis: true,
  },
  {
    title: 'Enterprise Stack',
    priceKey: 'enterprise',
    description: 'Unify multiple branches with deeper controls and structured governance.',
    points: ['Multi-branch analytics', 'Advanced integrations', 'Priority support model'],
  },
]

const pricingData: PricingData = {
  monthly: {
    free: 'INR 0',
    growth: 'INR 2,499',
    enterprise: 'Custom',
  },
  usage: {
    free: 'INR 0 + usage',
    growth: 'INR 1,499 + usage',
    enterprise: 'Custom usage plan',
  },
  annual: {
    free: 'INR 0',
    growth: 'INR 24,990',
    enterprise: 'Custom annual contract',
  },
}

const PERIOD_TABS: Array<{ label: string; value: Period }> = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Usage Based', value: 'usage' },
  { label: 'Annual', value: 'annual' },
]

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function getInitialReducedMotionPreference(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function ModularPricingPreview() {
  const { ref: pricingGridRef, isVisible: pricingVisible, prefersReducedMotion } =
    useRevealOnScroll<HTMLDivElement>()
  const [period, setPeriod] = useState<Period>('monthly')
  const [phase, setPhase] = useState<'idle' | 'switchingOut' | 'switchingIn'>('idle')
  const [prefersReducedMotionLocal, setPrefersReducedMotionLocal] = useState<boolean>(
    getInitialReducedMotionPreference,
  )
  const swapTimerRef = useRef<number | null>(null)
  const settleTimerRef = useRef<number | null>(null)
  const isSwitching = phase !== 'idle'

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

  useEffect(() => {
    return () => {
      if (swapTimerRef.current !== null) {
        window.clearTimeout(swapTimerRef.current)
      }
      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current)
      }
    }
  }, [])

  const effectiveReducedMotion = prefersReducedMotion || prefersReducedMotionLocal

  const handlePeriodChange = (nextPeriod: Period) => {
    if (nextPeriod === period || isSwitching) {
      return
    }

    if (effectiveReducedMotion) {
      setPeriod(nextPeriod)
      return
    }

    if (swapTimerRef.current !== null) {
      window.clearTimeout(swapTimerRef.current)
    }
    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current)
    }

    setPhase('switchingOut')

    swapTimerRef.current = window.setTimeout(() => {
      setPeriod(nextPeriod)
      setPhase('switchingIn')

      settleTimerRef.current = window.setTimeout(() => {
        setPhase('idle')
      }, 400)
    }, 120)
  }

  const getCardMotionClass = () => {
    if (effectiveReducedMotion) {
      return 'opacity-100 translate-y-0'
    }
    if (!pricingVisible) {
      return 'opacity-0 translate-y-4'
    }
    if (phase === 'switchingOut') {
      return 'opacity-0 -translate-y-2'
    }
    return 'opacity-100 translate-y-0'
  }

  const cardMotionClass = getCardMotionClass()

  return (
    <section
      aria-labelledby="modular-pricing-heading"
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <h2
            id="modular-pricing-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl"
          >
            Start free. Scale with modular financial capabilities.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
            Adopt core workflows first, then switch on advanced services with clear, AWS-style
            modular controls for each stage of growth.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Billing period"
          className={`mt-8 inline-flex rounded-xl border border-slate-300 bg-white p-1 shadow-sm ${isSwitching ? 'pointer-events-none' : ''}`}
        >
          {PERIOD_TABS.map((tab) => {
            const isActive = period === tab.value

            return (
              <button
                key={tab.value}
                id={`pricing-tab-${tab.value}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="pricing-cards-panel"
                disabled={isSwitching}
                onClick={() => handlePeriodChange(tab.value)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div
          id="pricing-cards-panel"
          ref={pricingGridRef}
          className="mt-10 grid gap-6 lg:grid-cols-3"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${period}`}
        >
          {PRICING_CARDS.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-2xl border bg-white p-6 shadow-sm transition-opacity transition-transform duration-400 ease-out ${cardMotionClass} ${
                card.emphasis
                  ? 'border-slate-900 shadow-md'
                  : 'border-slate-200'
              }`}
              style={{
                transitionDelay: effectiveReducedMotion ? '0ms' : `${index * 50}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-3xl font-semibold text-slate-900">
                {pricingData[period][card.priceKey]}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{card.description}</p>
              <ul className="mt-5 space-y-2">
                {card.points.map((point) => (
                  <li key={point} className="text-sm text-slate-500">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
